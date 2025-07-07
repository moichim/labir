<?php

/**
 * -------------------------------------------------------------
 *  Třída Folder
 *  =============
 *  Pracuje s adresářovou strukturou, poskytuje informace o složkách,
 *  umožňuje jejich vytváření, mazání, přesun, úpravu obsahu a práci s tagy.
 *  Vše s ohledem na práva uživatele a přístupové politiky.
 * -------------------------------------------------------------
 */

declare(strict_types=1);

namespace App\Core\Readers;

use App\Core\Scanner;
use Exception;
use FilesystemIterator;
use Nette\Utils\Strings;
use App\Core\Data\Lrc;
use App\Core\Data\Grid;

/**
 * Třída Folder - hlavní logika pro práci se složkami a jejich obsahem.
 */
final class Folder
{
    /**
     * Konstruktor - přijímá instanci Scanneru
     */
    public function __construct(
        protected Scanner $scanner
    ) {}

    /**
     * Ověří existenci složky (a čitelnost)
     */
    public function exists(
        string $path
    ) {
        $fullPath = $this->scanner->getFullPath($path);
        return is_dir($fullPath) && is_readable($fullPath);
    }

    /** @deprecated not needed anymore */
    public function isEmpty(
        string $path
    ): bool {
        $fullPath = $this->scanner->getFullPath($path);
        if ($this->exists($path) == false) {
            return false;
        }
        $files = array_diff(scandir($fullPath), ['.', '..']);
        return count($files) === 0;
    }

    /**
     * Vrátí informace o složce (název, popis, tagy, metadata, práva, ...)
     */
    public function getInfo(string $path)
    {

        // Zjisti protected přes getFolderAccess
        $protected = false;
        if (isset($this->scanner->access)) {
            $access = $this->scanner->access->getFolderAccess($path);
            if (is_array($access) && array_key_exists('show', $access) && $access['show'] === false) {
                $protected = true;
            }
            $may_have_files = isset($access['may_have_files']) ? $access['may_have_files'] : false;
        }

        $info = [
            "entity" => "folder",
            "api" => $this->scanner->getFullUrl($path),
            "path" => ltrim( $path, "/" ),
            "slug" => basename($path),
            "name" => basename($path),
            "description" => null,
            "meta" => [],
            "lrc_count" => $this->getFileCount($path),
            "protected" => $protected,
            "may_have_files" => $may_have_files
        ];

        // Zjisti, zda je složka chráněná (přístupná jen přihlášeným)
        if (isset($this->scanner->access)) {
            // user = null => anonym
            if (!$this->scanner->access->userMayReadFolder($path, null)) {
                $info["protected"] = true;
            }
        }

        try {
            $content = $this->readJson($path, "content");
            if ($content) {
                if (isset($content["name"])) {
                    $info["name"] = $content["name"];
                    unset($content["name"]);
                }
                if (isset($content["description"])) {
                    $info["description"] = $content["description"];
                    unset($content["description"]);
                }
                $info["meta"] = $content;
            }
        } catch (\Throwable $e) {
        }

        // own_tags
        $ownTagsPath = $this->scanner->getFullPath(trim($path, "/") . DIRECTORY_SEPARATOR . '_tags.json');
        $info['own_tags'] = [];
        if (is_file($ownTagsPath) && is_readable($ownTagsPath)) {
            $ownTagsContent = file_get_contents($ownTagsPath);
            if ($ownTagsContent !== false) {
                $ownTagsData = json_decode($ownTagsContent, true);
                if (is_array($ownTagsData)) {
                    $info['own_tags'] = $ownTagsData;
                }
            }
        }

        $parentPath = rtrim(dirname(trim($path, "/")), "/\\");
        $info['parent_tags'] = [];
        if ($parentPath !== '' && $parentPath !== '.' && $parentPath !== $path) {
            $tagsJsonPath = $this->scanner->getFullPath($parentPath . DIRECTORY_SEPARATOR . '_tags.json');
            if (is_file($tagsJsonPath) && is_readable($tagsJsonPath)) {
                $tagsContent = file_get_contents($tagsJsonPath);
                if ($tagsContent !== false) {
                    $tagsData = json_decode($tagsContent, true);
                    if (is_array($tagsData)) {
                        $info['parent_tags'] = $tagsData;
                    }
                }
            }
        }

        return $info;
    }

    /**
     * Vrátí seznam podadresářů složky, ke kterým má uživatel přístup
     */
    public function getSubdirectories(string $path, $user = null): array|false
    {
        $fullPath = $this->scanner->getFullPath(trim($path, "/"));
        if (!$this->exists($path)) {
            return false;
        }

        $subdirs = [];
        foreach (new FilesystemIterator($fullPath, FilesystemIterator::SKIP_DOTS) as $item) {
            $subdirPath = $fullPath . DIRECTORY_SEPARATOR . trim($item->getFileName(),  DIRECTORY_SEPARATOR);
            if (is_dir($subdirPath)) {
                $relativePath = trim($path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $item->getFileName();
                // Zobraz složku pouze pokud userMaySeeFolder vrací true
                if ($this->scanner->access->userMayReadFolder($relativePath, $user)) {
                    
                    $info = $this->getInfo($relativePath);
                    $subdirs[$info["slug"]] = $info;
                    
                    continue;
                }
                
            }
        }

        return count($subdirs) > 0 ? $subdirs : false;
    }

    /**
     * Vrátí seznam souborů ve složce, případně filtruje podle času a tagů
     */
    public function getFiles(string $path, ?int $from = null, ?int $to = null, ?array $tags = null)
    {

        if (! $this->exists($path)) {
            throw new Exception("The given folder $path does not exist!", 404);
        }

        $fullPath = $this->scanner->getFullPath($path);

        $files = [];

        foreach (
            new FilesystemIterator($fullPath, FilesystemIterator::SKIP_DOTS) as $item
        ) {

            $entity = Lrc::createIfExists($this->scanner, $path, $item->getFilename());


            if ($entity) {

                $valid = true;

                if ($to !== null && $valid === true && $entity->getTimestamp() >= $to) {
                    $valid = false;
                }

                if ($from !== null && $valid === true && $entity->getTimestamp() <= $from) {
                    $valid = false;
                }

                if ($tags !== null && $valid === true) {
                    foreach ($tags as $tag) {
                        if (! in_array($tag, $entity->getTags())) {
                            $valid = false;
                        }
                    }
                }

                if ($valid === true) {
                    $files[] = $entity->getInfo();
                }
            }
        }


        usort($files, function ($a, $b) {
            return $a['timestamp'] <=> $b['timestamp'];
        });


        return $files;
    }

    /**
     * Spáruje soubory s parent tagy a vrátí statistiku výskytu tagů
     */
    public static function matchFilesWithParentTags(
        array $files,
        ?array $parentTags = null
    ): array {
        $result = [];

        // Pokud parentTags nejsou pole, nastav prázdné pole
        if (!is_array($parentTags)) {
            $parentTags = [];
        }

        // Nejprve parent_tags
        foreach ($parentTags as $tagKey => $tagMeta) {
            if (is_int($tagKey)) {
                $slug = is_array($tagMeta) && isset($tagMeta['slug']) ? $tagMeta['slug'] : (string)$tagMeta;
                $meta = is_array($tagMeta) ? $tagMeta : ['slug' => $slug];
            } else {
                $slug = (string)$tagKey;
                $meta = is_array($tagMeta) ? $tagMeta : ['slug' => $slug];
            }

            $result[$slug] = [
                'slug' => $slug,
                'count' => 0,
                'meta' => $meta,
                'folders' => [],
            ];
        }

        // Pro každý soubor přiřaď do správných tagů a složek
        foreach ($files as $file) {
            $folderPath = $file['folder'] ?? null;
            if (!empty($file['tags']) && is_array($file['tags']) && $folderPath) {
                foreach ($file['tags'] as $tag) {
                    $tag = (string)$tag;
                    // Pokud tag ještě není v $result, přidej ho s minimální metou
                    if (!isset($result[$tag])) {
                        $result[$tag] = [
                            'slug' => $tag,
                            'count' => 0,
                            'meta' => [],
                            'folders' => [],
                        ];
                    }
                    if (!isset($result[$tag]['folders'][$folderPath])) {
                        $result[$tag]['folders'][$folderPath] = [];
                    }
                    $result[$tag]['folders'][$folderPath][] = $file;
                    $result[$tag]['count']++;
                }
            }
        }

        return $result;
    }

    /**
     * Vrátí počet .lrc souborů ve složce
     */
    public function getFileCount(string $path): int
    {
        $fullPath = $this->scanner->getFullPath($path);
        if (!is_dir($fullPath)) {
            return 0;
        }

        $count = 0;
        foreach (new FilesystemIterator($fullPath, FilesystemIterator::SKIP_DOTS) as $item) {
            if (preg_match('/\.lrc$/i', $item->getFileName()) && is_file($fullPath . DIRECTORY_SEPARATOR . $item->getFileName())) {
                $count++;
            }
        }
        return $count;
    }

    /**
     * Vytvoří instanci Grid pro danou složku
     */
    public function createGrid(
        string $path
    ): Grid {
        return new Grid($this->scanner, $path);
    }

    /**
     * Vytvoří novou složku, zapíše _content.json, případně _tags.json a _access.json
     * Ověřuje práva, validuje vstupy, vrací info o nové složce
     */
    public function createFolder(
        string $parentSlug, 
        string $name, 
        ?string $description = null, 
        ?array $meta = [], 
        ?array $tags = null, 
        ?array $access = null
    ): array
    {


        // Sanitize input values
        $name = Json::s($name);
        $description = $description !== null ? Json::s($description) : null;
        // Sanitize meta values (rekurzivně, in-place)
        if (!empty($meta) && is_array($meta)) {
            array_walk_recursive($meta, function (&$v) { if (is_string($v)) { $v = Json::s($v); } });
        }

        // --- 1. Ověření práv: uživatel musí být root, nebo složka musí povolovat podsložky ---
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity ? $identity["user"] : null;
        if (!$this->scanner->access->userMayManageFoldersIn($parentSlug, $user)) {
            throw new Exception("You do not have permission to create subfolders in this folder.", 403);
        }

        // --- 2. Sestavení slug a absolutní cesty nové složky ---
        $newSlug = $this->buildSlug($parentSlug, $name);
        $newPath = $this->scanner->getFullPath($newSlug);

        // --- 3. Kontrola, zda složka už neexistuje ---
        if (is_dir($newPath)) {
            throw new Exception("Target folder '$newSlug' already exists", 409);
        }

        // --- 4. Vytvoření nové složky v souborovém systému ---
        if (!mkdir($newPath, 0777, true)) {
            throw new Exception("Failed to create folder", 500);
        }

        // --- 5. Vytvoření _content.json s názvem, popisem a metadaty ---
        $contentJsonPath = $newPath . DIRECTORY_SEPARATOR . '_content.json';
        $data = [
            'name' => $name
        ];
        if ($description !== null) {
            $data['description'] = $description;
        }
        // Sloučení s meta
        $data = array_merge($data, $meta);
        // Zápis přes scanner->json
        $this->scanner->json->write($contentJsonPath, $data);

        // --- 6. Pokud jsou zadány tagy, validuj a ulož je do _tags.json ---
        if ($tags !== null && (is_array($tags) || is_object($tags))) {
            $validTags = $this->filterValidTags($tags);
            if (!empty($validTags)) {
                $tagsJsonPath = $newPath . DIRECTORY_SEPARATOR . '_tags.json';
                $this->scanner->json->write($tagsJsonPath, $validTags);
            }
        }

        // --- 7. Pokud je zadán access, validuj a vytvoř _access.json ---
        if ($access !== null && is_array($access)) {
            $allowedKeys = ['show', 'may_have_files'];
            $filteredAccess = [];
            foreach ($access as $key => $value) {
                if (in_array($key, $allowedKeys, true) && is_bool($value)) {
                    $filteredAccess[$key] = $value;
                }
            }
            if (!empty($filteredAccess)) {
                $accessJsonPath = $newPath . DIRECTORY_SEPARATOR . '_access.json';
                $this->scanner->json->write($accessJsonPath, $filteredAccess);
            }
        }

        // --- 8. Vrať informace o nové složce ---
        return [
            'slug' => $newSlug,
            'name' => $name,
            'description' => $description,
            'info' => $this->getInfo($newSlug),
        ];
    }

    /**
     * Smaže složku a všechen její obsah (rekurzivně)
     */
    public function deleteFolder(string $slug): array
    {
        // --- 1. Získej absolutní cestu ke složce ---
        $fullPath = $this->scanner->getFullPath($slug);

        // --- 2. Ověř, že složka existuje ---
        if (!is_dir($fullPath)) {
            throw new Exception("Folder '$slug' does not exist", 404);
        }

        // --- 3. Rekurzivně smaž složku a její obsah ---
        $this->deleteDirRecursive($fullPath);

        // --- 4. Vrať výsledek mazání ---
        return [
            'deleted' => $slug,
            'success' => true,
        ];
    }

    /**
     * Pomocná metoda pro rekurzivní mazání složky a jejího obsahu
     */
    protected function deleteDirRecursive(string $dir): void
    {
        // --- 1. Získej všechny položky ve složce kromě . a .. ---
        $items = array_diff(scandir($dir), ['.', '..']);
        foreach ($items as $item) {
            $path = $dir . DIRECTORY_SEPARATOR . $item;
            // --- 2. Pokud je položka složka, smaž ji rekurzivně ---
            if (is_dir($path)) {
                $this->deleteDirRecursive($path);
            } else {
                // --- 3. Pokud je položka soubor, smaž soubor ---
                unlink($path);
            }
        }
        // --- 4. Smaž samotnou složku ---
        rmdir($dir);
    }

    /**
     * Aktualizuje _content.json ve složce, případně přejmenuje složku, upraví tagy (addTags/removeTags)
     */
    public function updateFolderContent(
        string $slug,
        ?string $name = null,
        ?string $description = null,
        array $meta = [],
        bool $move = false,
        ?array $addTags = null,
        ?array $removeTags = null
    ): array {
        $fullPath = $this->scanner->getFullPath($slug);
        if (!is_dir($fullPath)) {
            throw new Exception("Folder '$slug' does not exist", 404);
        }

        // Sanitizuj input
        $name = $name !== null ? Json::s($name) : null;
        $description = $description !== null ? Json::s($description) : null;
        // Sanitize meta values (rekurzivně, in-place)
        if (!empty($meta) && is_array($meta)) {
            array_walk_recursive($meta, function (&$v) { if (is_string($v)) { $v = Json::s($v); } });
        }

        $moved = false;
        $oldSlug = $slug;

        // Pokud je move true a name zadáno, přejmenuj složku
        if ($move && $name !== null) {
            $parentDir = dirname($slug);
            $newSlug = ($parentDir === '.' || $parentDir === '') ? $this->webalizeName($name) : $parentDir . DIRECTORY_SEPARATOR . $this->webalizeName($name);
            $newPath = $this->scanner->getFullPath($newSlug);
            if (is_dir($newPath)) {
                throw new Exception("Target folder '$newSlug' already exists", 409);
            }
            if (!rename($fullPath, $newPath)) {
                throw new Exception("Failed to rename folder", 500);
            }
            $slug = $newSlug;
            $fullPath = $newPath;
            $moved = true;
        }

        // Aktualizuj _content.json
        $data = $this->readJson($slug, 'content') ?? [];
        if ($name !== null) {
            $data['name'] = $name;
        }
        if ($description !== null) {
            $data['description'] = $description;
        }
        if (!empty($meta)) {
            $data = array_merge($data, $meta);
        }
        $this->writeJson($slug, 'content', $data);

        // --- Tagy: addTags/removeTags ---
        $tagsPath = $this->getJsonPath($slug, 'tags');
        $tags = is_file($tagsPath) ? ($this->scanner->json->read($tagsPath) ?? []) : [];
        if (!is_array($tags)) $tags = [];
        // Přidání tagů
        if ($addTags !== null && (is_array($addTags) || is_object($addTags))) {
            $addTagsArr = $this->filterValidTags($addTags);
            $tags = array_merge($tags, $addTagsArr);
        }
        // Odebrání tagů
        if ($removeTags !== null && (is_array($removeTags) || is_object($removeTags))) {
            foreach ($removeTags as $key => $tag) {
                if (is_string($key)) {
                    unset($tags[$key]);
                } elseif (is_string($tag)) {
                    unset($tags[$tag]);
                }
            }
        }
        // Pokud nejsou žádné tagy, smaž _tags.json, jinak zapiš
        if (empty($tags)) {
            if (is_file($tagsPath)) {
                @unlink($tagsPath);
            }
        } else {
            $this->writeJson($slug, 'tags', $tags);
        }

        return [
            'slug' => $slug,
            'name' => $data['name'] ?? basename($slug),
            'description' => $data['description'] ?? null,
            'info' => $this->getInfo($slug),
            'moved' => $moved,
            'oldSlug' => $moved ? $oldSlug : null,
        ];
    }

    /**
     * Přesune složku do nové nadřazené složky (target parent)
     * Ověřuje práva, existenci, kolize
     */
    public function moveFolder(string $slug, string $targetParentSlug): array
    {
        // Získej absolutní cestu ke zdrojové složce
        $fullPath = $this->scanner->getFullPath($slug);
        if (!is_dir($fullPath)) {
            throw new Exception("Folder '$slug' does not exist", 404);
        }

        // Získej absolutní cestu k cílové nadřazené složce
        $targetParentPath = $this->scanner->getFullPath($targetParentSlug);
        if (!is_dir($targetParentPath)) {
            throw new Exception("Target parent folder '$targetParentSlug' does not exist", 404);
        }

        // Ověření práv: uživatel musí mít právo zápisu pouze do cílové složky
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity ? $identity["user"] : null;
        if (!$this->scanner->access->userMayManageFoldersIn($targetParentSlug, $user)) {
            throw new Exception("You do not have write access to the target parent folder", 403);
        }

        // Sestav nový slug a cestu pro přesouvanou složku
        $folderName = basename($slug);
        $newSlug = rtrim($targetParentSlug, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $folderName;
        $newPath = $this->scanner->getFullPath($newSlug);

        // Pokud v cílové složce už existuje složka stejného jména, akce selže
        if (is_dir($newPath)) {
            throw new Exception("Target folder '$newSlug' already exists", 409);
        }

        // Proveď přesun (přejmenování) složky
        if (!rename($fullPath, $newPath)) {
            throw new Exception("Failed to move folder", 500);
        }

        // Vrať informace o přesunu
        return [
            'oldSlug' => $slug,
            'newSlug' => $newSlug,
            'info' => $this->getInfo($newSlug),
            'moved' => true,
        ];
    }

    /**
     * Validuje strukturu tagů, vrací pouze validní tagy
     */
    protected function filterValidTags($tags): array
    {
        if (!is_array($tags) && !is_object($tags)) return [];
        $tagsArr = (array)$tags;
        $result = [];
        foreach ($tagsArr as $key => $tag) {

            $sanitizedKey = Json::s( $key );

            if (!is_array($tag) && !is_object($tag)) continue;
            $tagArr = (array)$tag;
            if (!isset($tagArr['name']) || !is_string($tagArr['name'])) continue;
            if (isset($tagArr['description']) && !is_string($tagArr['description'])) continue;
            if (isset($tagArr['color']) && !is_string($tagArr['color'])) continue;
            $result[$sanitizedKey] = [
                'name' => Json::s($tagArr['name']),
            ];
            if (isset($tagArr['description']))
                $result[$sanitizedKey]['description'] = Json::s($tagArr['description']);
            if (isset($tagArr['color']))
                $result[$sanitizedKey]['color'] = Json::s($tagArr['color']);
        }
        return $result;
    }

    /**
     * Vrátí soubor v této složce jako objekt Lrc (nebo null)
     */
    public function getFile(string $path, string $fileName): ?Lrc
    {
        $fullPath = $this->scanner->getFullPath(trim($path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $fileName);
        if (!is_file($fullPath) || !is_readable($fullPath)) {
            return null;
        }
        // Vytvoří objekt Lrc pouze pokud je to .lrc soubor
        return Lrc::createIfExists($this->scanner, $path, $fileName);
    }

    /**
     * Vrátí všechny složky (a jejich podstromy), ke kterým má uživatel přístup podle access
     */
    public function getUserFolders(string $login): array
    {
        $user = $this->scanner->access->getUser($login, true);
        if (!$user || !isset($user['access']) || !is_array($user['access'])) {
            return [];
        }
        $result = [];
        foreach ($user['access'] as $folderPath) {
            $folderPath = trim($folderPath, '/');
            $result[] = $this->getFolderTree($folderPath, $login);
        }
        return $result;
    }

    /**
     * Rekurzivně načte složku a všechny její podsložky do stromové struktury
     */
    protected function getFolderTree(string $path, string $login): array
    {
        $info = $this->getInfo($path);
        $info['subfolders'] = [];
        $subdirs = $this->getSubdirectories($path, $login);
        if ($subdirs && is_array($subdirs)) {
            foreach ($subdirs as $sub) {
                $info['subfolders'][] = $this->getFolderTree($sub['path'], $login);
            }
        }
        return [
            'entity' => 'treeitem',
            'path' => $info['path'],
            'api' => $info['api'],
            'name' => $info['name'],
            'slug' => $info['slug'],
            'description' => $info['description'],
            'lrc_count' => $info['lrc_count'],
            'protected' => $info['protected'],
            'may_have_files' => $info['may_have_files'],
            'metadata' => $info['data'],
            'subfolders' => $info['subfolders'],
        ];
    }

    /**
     * Webalizuje název složky pro použití ve slugu
     */
    protected function webalizeName(string $name): string
    {
        return Strings::webalize($name, '0-9a-zA-Z');
    }

    /**
     * Sestaví slug pro novou složku
     */
    protected function buildSlug(string $parent, string $name): string
    {
        $webalized = $this->webalizeName($name);
        return ($parent === '' || $parent === '.' || $parent === DIRECTORY_SEPARATOR)
            ? $webalized
            : $parent . DIRECTORY_SEPARATOR . $webalized;
    }

    /**
     * Vrátí cestu k _content.json
     */
    protected function getContentJsonPath(string $slug): string
    {
        return $this->scanner->getFullPath($slug . DIRECTORY_SEPARATOR . '_content.json');
    }

    /**
     * Zapíše _content.json
     */
    protected function writeContentJson(string $path, array $data): void
    {
        file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }

    /**
     * Vrátí cestu k JSON souboru daného typu
     */
    protected function getJsonPath(string $slug, string $type): string
    {
        $filename = match ($type) {
            'content' => '_content.json',
            'tags' => '_tags.json',
            'access' => '_access.json',
            default => throw new Exception("Unknown JSON type '$type'"),
        };
        return $this->scanner->getFullPath($slug . DIRECTORY_SEPARATOR . $filename);
    }

    /**
     * Načte a dekóduje JSON soubor ze složky
     */
    public function readJson(string $slug, string $type): ?array
    {
        $path = $this->getJsonPath($slug, $type);
        return $this->scanner->json->read($path);
    }

    /**
     * Zapíše pole do JSON souboru ve složce
     */
    protected function writeJson(string $slug, string $type, array $data): void
    {
        $path = $this->getJsonPath($slug, $type);
        $this->scanner->json->write($path, $data);
    }



    public function uploadFile(string $path, $lrcFile, $visualFile = null, $previewFile = null): Lrc
    {
        // Ověření existence složky
        if (!$this->exists($path)) {
            throw new Exception("Target folder '$path' does not exist.", 404);
        }

        // Ověření práv na zápis souborů
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity ? $identity["user"] : null;
        if (!$this->scanner->access->userMayManageFilesIn($path, $user)) {
            throw new Exception("You do not have permission to upload files to this folder.", 403);
        }

        // Ověření, že složka umožňuje nahrávání souborů
        $access = $this->scanner->access->getFolderAccess($path);
        if (empty($access['may_have_files'])) {
            throw new Exception("This folder does not allow file uploads.", 400);
        }

        // Ověření uploadovaného LRC souboru
        if (!$lrcFile || $lrcFile->getError()) {
            throw new Exception("No LRC file uploaded or upload error.", 400);
        }
        $ext = strtolower(pathinfo($lrcFile->getUntrustedName(), PATHINFO_EXTENSION));
        if ($ext !== 'lrc') {
            throw new Exception("Only .lrc files are allowed.", 400);
        }

        // Ověření typů obrázků (pokud jsou)
        if ($visualFile && $visualFile->isOk()) {
            $vext = strtolower(pathinfo($visualFile->getUntrustedName(), PATHINFO_EXTENSION));
            if ($vext !== 'png') {
                throw new Exception("Visual file must be .png", 400);
            }
        }
        if ($previewFile && $previewFile->isOk()) {
            $pext = strtolower(pathinfo($previewFile->getUntrustedName(), PATHINFO_EXTENSION));
            if ($pext !== 'png') {
                throw new Exception("Preview file must be .png", 400);
            }
        }

        // Nahraj vše přes Lrc::upload
        return Lrc::upload($this->scanner, $path, $lrcFile, $visualFile, $previewFile);
    }

}
