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
    }

    public function getInfo()
    {
        $apiRoot = $this->scanner->getFullUrl($this->path) . '?file=' . rawurlencode($this->fileName);
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
            "tags" => $this->tags,
            "dateHuman" => $this->timestamp
                ? date('d.m.Y H:i:s', (int)($this->timestamp / 1000))
                : null,
            "apiRoot" => $apiRoot,
            "analyses" => $this->analyses,
        ];
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

        // Current file name convention
        if (str_ends_with($base, "_thermal")) {
            if ($type === 'visual') {
                $file = str_replace("_thermal", "_visual.png", $base);
            } else {
                $file = str_replace("_thermal", "_image_thermal.png", $base);
            }
            $full = $dir . DIRECTORY_SEPARATOR . $file;
            if (is_file($full)) {
                return $this->scanner->getFileUrl($this->path . DIRECTORY_SEPARATOR . $file);
            }
        }

        // Old file name convention
        else if (str_starts_with("image-thermal", $base)) {
            if ($type === 'visual') {
                $file = preg_replace('/thermal/', 'visual', $base) . '.png';
            } else { // preview
                $file = $base . '.png';
            }
            $full = $dir . DIRECTORY_SEPARATOR . $file;
            if (is_file($full)) {
                return $this->scanner->getFileUrl($this->path . $file);
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
        if (isset($params['addTags']) && is_array($params['addTags'])) {
            $sanitizedTags = array_map(function($t) { return Json::s($t); }, $params['addTags']);
            $json['tags'] = array_values(array_unique(array_merge($json['tags'], $sanitizedTags)));
        }
        if (isset($params['removeTags']) && is_array($params['removeTags'])) {
            $sanitizedRemoveTags = array_map(function($t) { return Json::s($t); }, $params['removeTags']);
            $json['tags'] = array_values(array_diff($json['tags'], $sanitizedRemoveTags));
        }
        // Analýzy
        if (!isset($json['analyses']) || !is_array($json['analyses'])) {
            $json['analyses'] = [];
        }
        if (isset($params['addAnalyses']) && is_array($params['addAnalyses'])) {
            $sanitizedAnalyses = array_map(function($a) { return Json::s($a); }, $params['addAnalyses']);
            $json['analyses'] = array_values(array_unique(array_merge($json['analyses'], $sanitizedAnalyses)));
        }
        if (isset($params['removeAnalyses']) && is_array($params['removeAnalyses'])) {
            $sanitizedRemoveAnalyses = array_map(function($a) { return Json::s($a); }, $params['removeAnalyses']);
            $json['analyses'] = array_values(array_diff($json['analyses'], $sanitizedRemoveAnalyses));
        }
        $this->writeJson($json);
        // Refresh instance
        $this->tags = $json['tags'];
        $this->analyses = $json['analyses'];
        if (isset($json['label'])) $this->label = $json['label'];
        if (isset($json['description'])) $this->description = $json['description'];
    }
}
