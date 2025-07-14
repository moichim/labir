<?php

declare(strict_types=1);

namespace App\Core\Data;

use App\Core\Scanner;
use App\Core\Readers\Json;

final class Lrc
{

    protected string $url;
    protected string|false $visual = false;
    protected string|false $preview = false;
    protected int $timestamp;
    protected int $uploaded;
    protected $uploadedby = null;
    protected array $tags = [];
    protected array $analyses = [];
    protected ?string $label = null;
    protected ?string $description = null;


    public static function createIfExists(
        Scanner $scanner,
        string $path,
        string $fileName
    ) {

        $fullPath = $scanner->getFullPath(ltrim($path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $fileName);

        $exists = is_file($fullPath)
            && is_readable($fullPath)
            && preg_match('/\.lrc$/i', $fileName);

        if ($exists) {
            return new self(
                $scanner,
                $path,
                $fileName
            );
        }

        return null;
    }




    /**
     * Nahraje LRC soubor a volitelné obrázky visual/preview do cílové složky pod správnými jmény podle timestampu.
     * Vrací instanci Lrc a info o uložených souborech.
     *
     * @param Scanner $scanner
     * @param string $targetPath Cílová složka (slug)
     * @param \Nette\Http\FileUpload $lrcFile Povinný .lrc soubor
     * @param \Nette\Http\FileUpload|null $visualFile Nepovinný .png soubor (vizuál)
     * @param \Nette\Http\FileUpload|null $previewFile Nepovinný .png soubor (náhled)
     * @throws \Exception
     */
    public static function upload(
        Scanner $scanner,
        string $targetPath,
        $lrcFile,
        $visualFile = null,
        $previewFile = null
    ): Lrc {

        // 1. Ověření existence složky
        $targetDir = $scanner->getFullPath($targetPath);
        if (!is_dir($targetDir)) {
            throw new \Exception("Target directory does not exist: $targetDir", 404);
        }

        // 2. Ověření práv na správu souborů (userMayManageFilesIn)
        $identity = $scanner->authorisation->getIdentity();
        $user = $identity ? $identity["user"] : null;
        if (!$scanner->access->userMayManageFilesIn($targetPath, $user)) {
            throw new \Exception("You do not have permission to upload files to this folder.", 403);
        }

        // 3. Ověření, že uploadovaný soubor má příponu .lrc nebo .LRC
        $originalName = $lrcFile->getUntrustedName();
        $base = pathinfo($originalName, PATHINFO_FILENAME);
        $ext = pathinfo($originalName, PATHINFO_EXTENSION);
        if (strtolower($ext) !== 'lrc') {
            throw new \Exception("Only .lrc files are allowed.", 400);
        }
        $candidate = $base;
        $i = 1;
        $finalName = $base . '.' . $ext;
        while (is_file($targetDir . DIRECTORY_SEPARATOR . $finalName)) {
            $finalName = $base . "__" . $i . "." . $ext;
            $i++;
        }
        $targetLrcPath = $targetDir . DIRECTORY_SEPARATOR . $finalName;

        // 4. Přesunout LRC do složky pod tímto jménem
        $lrcFile->move($targetLrcPath);

        // 5. Přečíst timestamp z LRC souboru (už v cílové složce)
        $lrcInstanceTmp = new self($scanner, $targetPath, $finalName);
        $timestamp = $lrcInstanceTmp->readFileTimestamp();
        if ($timestamp === null) {
            @unlink($targetLrcPath);
            throw new \Exception("Failed to read timestamp from LRC file.");
        }


        // 6. Vygenerovat nový název podle timestampu ve formátu YYYY-MM-DD_hh-mm-ss_thermal.lrc (a případně __1, __2 ... pokud existuje)
        $dt = new \DateTimeImmutable();
        $dt = $dt->setTimestamp((int)($timestamp / 1000));
        $dateStr = $dt->format('Y-m-d_H-i-s');
        $baseName = $dateStr . '_thermal';
        $lrcName = $baseName . '.lrc';
        $lrcFinalPath = $targetDir . DIRECTORY_SEPARATOR . $lrcName;
        $lrcNameCandidate = $lrcName;
        $j = 1;
        while (is_file($lrcFinalPath)) {
            $lrcNameCandidate = $baseName . "__" . $j . ".lrc";
            $lrcFinalPath = $targetDir . DIRECTORY_SEPARATOR . $lrcNameCandidate;
            $j++;
        }
        // Pokud je potřeba, přejmenuj
        $oldJsonPath = $scanner->getFullPath($targetPath . DIRECTORY_SEPARATOR . preg_replace('/\.lrc$/i', '.json', $finalName));
        if ($lrcNameCandidate !== $finalName) {
            if (!@rename($targetLrcPath, $lrcFinalPath)) {
                throw new \Exception("Failed to rename LRC file to timestamped name.");
            }
            // Smazat původní JSON, pokud existuje
            if (is_file($oldJsonPath)) {
                @unlink($oldJsonPath);
            }
        } else {
            $lrcFinalPath = $targetLrcPath;
            $lrcNameCandidate = $finalName;
        }

        // 7. Uložit visual a preview pod správnými jmény (a případně __1, __2 ... pokud existují)
        if ($visualFile && $visualFile->isOk()) {
            $visualBase = $dateStr . '_visual';
            $visualName = $visualBase . '.png';
            $visualPath = $targetDir . DIRECTORY_SEPARATOR . $visualName;
            $k = 1;
            $visualNameCandidate = $visualName;
            while (is_file($visualPath)) {
                $visualNameCandidate = $visualBase . "__" . $k . ".png";
                $visualPath = $targetDir . DIRECTORY_SEPARATOR . $visualNameCandidate;
                $k++;
            }
            $visualFile->move($visualPath);
        }

        if ($previewFile && $previewFile->isOk()) {
            $previewBase = $dateStr . '_image_thermal';
            $previewName = $previewBase . '.png';
            $previewPath = $targetDir . DIRECTORY_SEPARATOR . $previewName;
            $l = 1;
            $previewNameCandidate = $previewName;
            while (is_file($previewPath)) {
                $previewNameCandidate = $previewBase . "__" . $l . ".png";
                $previewPath = $targetDir . DIRECTORY_SEPARATOR . $previewNameCandidate;
                $l++;
            }
            $previewFile->move($previewPath);
        }

        // 8. Vytvoř Lrc instanci (ta vytvoří JSON)
        $lrc = new self($scanner, $targetPath, $lrcNameCandidate);

        // Nastav uploadedby (pouze login)
        $identity = $scanner->authorisation->getIdentity();
        $login = $identity && isset($identity['user']) ? $identity['user'] : null;
        $lrc->setUploadedby($login, $scanner->access ?? null);

        // Vrací instanci, metadata (label, description, tags) se nastavují až v presenteru
        return $lrc;
    }
    /**
     * Nastaví login uživatele, uloží do JSON a interně načte metadata bez emailu a is_root
     */
    public function setUploadedby($login, $access = null)
    {
        // Zapiš pouze login do JSON
        $json = $this->readJson() ?? [];
        $json['uploadedby'] = $login;
        $this->writeJson($json);
        // Načti metadata pokud je k dispozici access
        if ($login && $access && method_exists($access, 'getUser')) {
            $meta = $access->getUser($login, false);
            if (is_array($meta)) {
                unset($meta['email'], $meta['is_root']);
            }
            $this->uploadedby = $meta;
        } else {
            $this->uploadedby = $login;
        }
    }




    public function __construct(
        protected Scanner $scanner,
        protected string $path,
        protected string $fileName
    ) {
        $this->url = $this->scanner->getFileUrl($this->path . DIRECTORY_SEPARATOR . $this->fileName);
        $this->visual = $this->readVisual();
        $this->preview = $this->readPreview();

        $json = $this->getOrCreateJson();

        $this->label = $json["label"] ?? null;
        $this->description = $json["description"] ?? null;

        $this->timestamp = $json["timestamp"];
        $this->tags = $json["tags"] ?? [];
        $this->analyses = $json["analyses"] ?? [];
        $this->uploaded = $json["uploaded"] ?? time() * 1000;
        $login = $json["uploadedby"] ?? null;
        if ($login && isset($this->scanner->access) && method_exists($this->scanner->access, 'getUser')) {
            $meta = $this->scanner->access->getUser($login, false);
            if (is_array($meta)) {
                unset($meta['email'], $meta['is_root']);
            }
            $this->uploadedby = $meta;
        } else {
            $this->uploadedby = $login;
        }
    }

    public function getInfo()
    {
        $apiRoot = $this->scanner->getFullUrl($this->path) . '?file=' . rawurlencode($this->fileName);
        $json = $this->readJson() ?? [];

        // Komentáře - převod na požadovaný formát
        $comments = [];
        if (isset($json['comments']) && is_array($json['comments'])) {
            foreach ($json['comments'] as $comment) {
                $userSlug = $comment['by'] ?? null;
                $userObj = null;
                if ($userSlug && isset($this->scanner->access) && method_exists($this->scanner->access, 'getUser')) {
                    $userObj = $this->scanner->access->getUser($userSlug, false);
                }
                $comments[] = [
                    'message' => $comment['message'] ?? '',
                    'timestamp' => $comment['timestamp'] ?? 0,
                    'by' => [
                        'name' => $userObj['name'] ?? 'unknown',
                        'login' => $userObj['login'] ?? "unknown",
                        'institution' => $userObj['institution'] ?? null,
                        'description' => $userObj['description'] ?? null
                    ]
                ];
            }
        }

        return [
            "entity" => "file",
            "url" => $this->url,
            "label" => $this->label,
            "description" => $this->description,
            "fileName" => $this->fileName,
            "folder" => basename($this->path),
            "parent" => basename(dirname($this->path)),
            "path" => $this->path,
            "visual" => $this->visual,
            "preview" => $this->preview,
            "timestamp" => $this->timestamp,
            "uploaded" => $this->uploaded,
            "uploadedby" => $this->uploadedby,
            "tags" => $this->tags,
            "dateHuman" => $this->timestamp
                ? date('d.m.Y H:i:s', (int)($this->timestamp / 1000))
                : null,
            "apiRoot" => $apiRoot,
            "analyses" => $this->analyses,
            "comments" => $comments,
        ];
    }

    /**
     * Vrací login uživatele, který nahrál soubor, nebo null
     */
    public function getUploadedBy()
    {
        return $this->uploadedby ?? null;
    }


    public function getUrl()
    {
        return $this->url;
    }


    public function getPath()
    {
        return $this->path;
    }
    
    public function getFileName()
    {
        return $this->fileName;
    }

    public function getVisual()
    {
        return $this->visual;
    }

    public function getPreview()
    {
        return $this->preview;
    }

    public function getTimestamp()
    {
        return $this->timestamp;
    }

    public function getUploaded()
    {
        return $this->uploaded;
    }

    public function getTags()
    {
        return $this->tags;
    }

    public function getAnalyses()
    {
        return $this->analyses;
    }




    public function readVisual(): string|false
    {
        return $this->findRelatedImage('visual');
    }

    public function readPreview(): string|false
    {
        return $this->findRelatedImage('preview');
    }


    protected function getJsonPath()
    {
        return $this->scanner->getFullPath($this->path . DIRECTORY_SEPARATOR .
            preg_replace('/\.lrc$/i', '.json', $this->fileName));
    }


    protected function getOrCreateJson()
    {

        $existing = $this->readJson();
        if ($existing === null) {
            $existing = $this->createJson();
        }

        return $existing;
    }


    protected function createJson()
    {

        $timestamp = $this->readFileTimestamp();

        $data = [
            "timestamp" => $timestamp,
            "analyses" => [],
            "uploaded" => time() * 1000,
            "tags" => []
        ];

        $this->writeJson($data);

        return $data;
    }


    protected function readJson(): ?array
    {

        $path = $this->getJsonPath();
        $json = $this->scanner->json->read($path);
        return $json;
    }

    protected function writeJson(array $data): void
    {
        $path = $this->getJsonPath();
        $this->scanner->json->write($path, $data);
    }


    public function readFileTimestamp(int $offset = 5): ?int
    {
        $fullPath = $this->scanner->getFullPath(
            rtrim($this->path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $this->fileName
        );

        $file = @fopen($fullPath, 'rb');
        if (!$file) {
            return null;
        }

        fseek($file, $offset);
        $binaryData = fread($file, 8);
        fclose($file);

        if ($binaryData === false || strlen($binaryData) !== 8) {
            return null;
        }

        $bigIntTime = unpack('P', $binaryData)[1];

        // Konstanty převzaté z @labir/api
        $UnixEpoch = 62135596800000;
        $TicksPerMillisecond = 10000;
        $TicksPerDay = 24 * 60 * 60 * 1000 * $TicksPerMillisecond;
        $TicksCeiling = 0x4000000000000000;
        $LocalMask = 0x8000000000000000;
        $TicksMask = 0x3fffffffffffffff;

        $ticks = $bigIntTime & $TicksMask;
        $isLocalTime = $bigIntTime & $LocalMask;

        if ($isLocalTime) {
            if ($ticks > ($TicksCeiling - $TicksPerDay)) {
                $ticks -= $TicksCeiling;
            }
            if ($ticks < 0) {
                $ticks += $TicksPerDay;
            }
        }

        // Výpočet unix timestampu v milisekundách
        $milliseconds = $ticks / $TicksPerMillisecond - $UnixEpoch;

        return (int)$milliseconds;
    }

    protected function findRelatedImage(string $type): string|false
    {
        $dir = $this->scanner->getFullPath($this->path);
        $base = pathinfo($this->fileName, PATHINFO_FILENAME);

        // Zjisti případný __PORADI suffix
        $orderSuffix = '';
        if (preg_match('/(__\d+)$/', $base, $m)) {
            $orderSuffix = $m[1];
        }
        // Odeber případné __PORADI z konce názvu
        $baseNoOrder = preg_replace('/(__\d+)?$/', '', $base);

        // Current file name convention
        if (str_ends_with($baseNoOrder, "_thermal")) {
            if ($type === 'visual') {
                $imgBase = str_replace("_thermal", "_visual", $baseNoOrder);
            } else {
                $imgBase = str_replace("_thermal", "_image_thermal", $baseNoOrder);
            }
            // Pokud máme pořadí, hledej přesný soubor s tímto pořadím
            if ($orderSuffix !== '') {
                $fileName = $imgBase . $orderSuffix . '.png';
                $filePath = $dir . DIRECTORY_SEPARATOR . $fileName;
                if (is_file($filePath)) {
                    return $this->scanner->getFileUrl($this->path . DIRECTORY_SEPARATOR . $fileName);
                }
            }
            // Jinak najdi první existující soubor odpovídající patternu
            $filePattern = $imgBase . '*.png';
            $files = glob($dir . DIRECTORY_SEPARATOR . $filePattern);
            if ($files && count($files) > 0) {
                $fileName = basename($files[0]);
                return $this->scanner->getFileUrl($this->path . DIRECTORY_SEPARATOR . $fileName);
            }
        }

        // Old file name convention
        else if (str_starts_with($baseNoOrder, "image-thermal")) {
            if ($type === 'visual') {
                $filePattern = preg_replace('/thermal/', 'visual', $baseNoOrder) . '*.png';
            } else { // preview
                $filePattern = $baseNoOrder . '*.png';
            }
            $files = glob($dir . DIRECTORY_SEPARATOR . $filePattern);
            if ($files && count($files) > 0) {
                $fileName = basename($files[0]);
                return $this->scanner->getFileUrl($this->path . DIRECTORY_SEPARATOR . $fileName);
            }
        }

        return false;
    }

    /**
     * Aktualizuje metadata souboru (label, description, tagy, analýzy)
     * @param array $params
     *  - label: string|null
     *  - description: string|null
     *  - addTags: array|null
     *  - removeTags: array|null
     *  - addAnalyses: array|null
     *  - removeAnalyses: array|null
     *  - clearTags: bool|null
     *  - clearAnalyses: bool|null
     */
    public function update(array $params): void
    {
        $json = $this->readJson() ?? [];

        // Label (uloženo jako 'label' v JSON)
        if (isset($params['label'])) {
            $json['label'] = Json::s($params['label']);
        }
        // Description
        if (isset($params['description'])) {
            $json['description'] = Json::s($params['description']);
        }
        // Tagy
        if (!isset($json['tags']) || !is_array($json['tags'])) {
            $json['tags'] = [];
        }
        if (!empty($params['clearTags'])) {
            $json['tags'] = [];
        } else {
            if (isset($params['addTags']) && is_array($params['addTags'])) {
                $sanitizedTags = array_map(function($t) { return Json::s($t); }, $params['addTags']);
                $json['tags'] = array_values(array_unique(array_merge($json['tags'], $sanitizedTags)));
            }
            if (isset($params['removeTags']) && is_array($params['removeTags'])) {
                $sanitizedRemoveTags = array_map(function($t) { return Json::s($t); }, $params['removeTags']);
                $json['tags'] = array_values(array_diff($json['tags'], $sanitizedRemoveTags));
            }
        }
        // Analýzy
        if (!isset($json['analyses']) || !is_array($json['analyses'])) {
            $json['analyses'] = [];
        }
        if (!empty($params['clearAnalyses'])) {
            $json['analyses'] = [];
        } else {
            if (isset($params['addAnalyses']) && is_array($params['addAnalyses'])) {
                $sanitizedAnalyses = array_map(function($a) { return Json::s($a); }, $params['addAnalyses']);
                $json['analyses'] = array_values(array_unique(array_merge($json['analyses'], $sanitizedAnalyses)));
            }
            if (isset($params['removeAnalyses']) && is_array($params['removeAnalyses'])) {
                $sanitizedRemoveAnalyses = array_map(function($a) { return Json::s($a); }, $params['removeAnalyses']);
                $json['analyses'] = array_values(array_diff($json['analyses'], $sanitizedRemoveAnalyses));
            }
        }
        $this->writeJson($json);
        // Refresh instance
        $this->tags = $json['tags'];
        $this->analyses = $json['analyses'];
        if (isset($json['label'])) $this->label = $json['label'];
        if (isset($json['description'])) $this->description = $json['description'];
    }


    /**
     * Přidá komentář k souboru.
     * @param string $message
     * @throws \Exception
     */
    public function addComment(string $message): void
    {
        $message = trim($message);
        if ($message === '') {
            throw new \Exception('Comment message cannot be empty.', 400);
        }
        // Sanitizace (odstranění nebezpečných znaků, případně další úpravy)
        $message = Json::s($message);

        $json = $this->readJson() ?? [];
        if (!isset($json['comments']) || !is_array($json['comments'])) {
            $json['comments'] = [];
        }

        // Zjisti uživatele
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity && isset($identity['user']) ? $identity['user'] : null;
        $timestamp = (int)(microtime(true) * 1000);

        $json['comments'][] = [
            'message' => $message,
            'timestamp' => $timestamp,
            'by' => $user,
        ];

        $this->writeJson($json);
    }


    /**
     * Smaže komentář podle timestampu.
     * @param int $timestamp
     * @throws \Exception
     */
    public function deleteComment(int $timestamp): void
    {
        $json = $this->readJson() ?? [];
        if (!isset($json['comments']) || !is_array($json['comments'])) {
            throw new \Exception('Comment not found.', 404);
        }
        // Zjisti aktuálního uživatele
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity && isset($identity['user']) ? $identity['user'] : null;
        $found = false;
        foreach ($json['comments'] as $i => $comment) {
            if (isset($comment['timestamp']) && (int)$comment['timestamp'] === $timestamp) {
                // Kontrola, že komentář patří aktuálnímu uživateli
                if (!isset($comment['by']) || $comment['by'] !== $user) {
                    throw new \Exception('You can only delete your own comments.', 403);
                }
                array_splice($json['comments'], $i, 1);
                $found = true;
                break;
            }
        }
        if (!$found) {
            throw new \Exception('Comment not found.', 404);
        }
        $this->writeJson($json);
    }

    /**
     * Upraví komentář podle timestampu.
     * @param int $timestamp
     * @param string $message
     * @throws \Exception
     */
    public function updateComment(int $timestamp, string $message): void
    {
        $message = trim($message);
        if ($message === '') {
            throw new \Exception('Comment message cannot be empty.', 400);
        }
        $message = Json::s($message);
        $json = $this->readJson() ?? [];
        if (!isset($json['comments']) || !is_array($json['comments'])) {
            throw new \Exception('Comment not found.', 404);
        }
        // Zjisti aktuálního uživatele
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity && isset($identity['user']) ? $identity['user'] : null;
        $found = false;
        foreach ($json['comments'] as $i => $comment) {
            if (isset($comment['timestamp']) && (int)$comment['timestamp'] === $timestamp) {
                // Kontrola, že komentář patří aktuálnímu uživateli
                if (!isset($comment['by']) || $comment['by'] !== $user) {
                    throw new \Exception('You can only update your own comment.', 403);
                }
                $json['comments'][$i]['message'] = $message;
                $json['comments'][$i]['timestamp'] = (int)(microtime(true) * 1000);
                $found = true;
                break;
            }
        }
        if (!$found) {
            throw new \Exception('Comment not found.', 404);
        }
        $this->writeJson($json);
    }

    /**
     * Smaže všechny komentáře.
     */
    public function clearComments(): void
    {
        $json = $this->readJson() ?? [];
        $json['comments'] = [];
        $this->writeJson($json);
    }


}
