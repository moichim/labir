<?php

declare(strict_types=1);

namespace App\Core\Readers;

use App\Core\Scanner;
use Exception;
use FilesystemIterator;
use Nette\Utils\Strings;
use App\Core\Data\Lrc;
use App\Core\Data\Grid;

final class Folder
{

    public function __construct(
        protected Scanner $scanner
    ) {}

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
            "data" => [],
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
                $info["data"] = $content;
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
                            'count' => 0,
                            'meta' => ['slug' => $tag],
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



    public function createGrid(
        string $path
    ): Grid {
        return new Grid($this->scanner, $path);
    }

    /**
     * Create a new folder and write its name and description to _content.json.
     */
    public function createFolder(string $parentSlug, string $name, ?string $description = null, array $meta = [], $tags = null, ?array $access = null): array
    {
        // Ověření práv: uživatel musí být root, nebo složka musí povolovat podsložky
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity ? $identity["user"] : null;
        if (!$this->scanner->access->userMayManageFoldersIn($parentSlug, $user)) {
            throw new Exception("You do not have permission to create subfolders in this folder.", 403);
        }
        $newSlug = $this->buildSlug($parentSlug, $name);
        $newPath = $this->scanner->getFullPath($newSlug);
        if (is_dir($newPath)) {
            throw new Exception("Target folder '$newSlug' already exists", 409);
        }
        if (!mkdir($newPath, 0777, true)) {
            throw new Exception("Failed to create folder", 500);
        }
        // Vytvoř _content.json
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
        // Pokud jsou zadány tags, validuj a ulož je do _tags.json
        if ($tags !== null && (is_array($tags) || is_object($tags))) {
            $validTags = $this->filterValidTags($tags);
            if (!empty($validTags)) {
                $tagsJsonPath = $newPath . DIRECTORY_SEPARATOR . '_tags.json';
                $this->scanner->json->write($tagsJsonPath, $validTags);
            }
        }
        // Pokud je zadán access, validuj a vytvoř _access.json
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
        return [
            'slug' => $newSlug,
            'name' => $name,
            'description' => $description,
            'info' => $this->getInfo($newSlug),
        ];
    }

    /**
     * Delete a folder and all its contents.
     */
    public function deleteFolder(string $slug): array
    {
        $fullPath = $this->scanner->getFullPath($slug);

        if (!is_dir($fullPath)) {
            throw new Exception("Folder '$slug' does not exist", 404);
        }

        $this->deleteDirRecursive($fullPath);

        return [
            'deleted' => $slug,
            'success' => true,
        ];
    }

    /**
     * Helper for recursive directory deletion.
     */
    protected function deleteDirRecursive(string $dir): void
    {
        $items = array_diff(scandir($dir), ['.', '..']);
        foreach ($items as $item) {
            $path = $dir . DIRECTORY_SEPARATOR . $item;
            if (is_dir($path)) {
                $this->deleteDirRecursive($path);
            } else {
                unlink($path);
            }
        }
        rmdir($dir);
    }


    /**
     * Webalize a name of folder used in slugs.
     * Internal helper function.
     */
    protected function webalizeName(string $name): string
    {
        return Strings::webalize($name, '0-9a-zA-Z');
    }

    protected function buildSlug(string $parent, string $name): string
    {
        $webalized = $this->webalizeName($name);
        return ($parent === '' || $parent === '.' || $parent === DIRECTORY_SEPARATOR)
            ? $webalized
            : $parent . DIRECTORY_SEPARATOR . $webalized;
    }

    protected function getContentJsonPath(string $slug): string
    {
        return $this->scanner->getFullPath($slug . DIRECTORY_SEPARATOR . '_content.json');
    }

    protected function writeContentJson(string $path, array $data): void
    {
        file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }

    /**
     * Get the full path to a JSON file of a given type in a folder.
     * $type: 'content', 'tags', 'access'
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
     * Read and decode a JSON file from a folder.
     */
    public function readJson(string $slug, string $type): ?array
    {
        $path = $this->getJsonPath($slug, $type);
        return $this->scanner->json->read($path);
    }

    /**
     * Write an array to a JSON file in a folder.
     */
    protected function writeJson(string $slug, string $type, array $data): void
    {
        $path = $this->getJsonPath($slug, $type);
        $this->scanner->json->write($path, $data);
    }

    /**
     * Update _content.json in a folder. If name, description nebo meta jsou zadány, přepíše je.
     * Pokud je $move true a $name není null, přejmenuje složku a aktualizuje obsah.
     */
    public function updateFolderContent(string $slug, ?string $name = null, ?string $description = null, array $meta = [], bool $move = false, $tags = null, bool $mergeTags = false): array
    {
        $fullPath = $this->scanner->getFullPath($slug);
        if (!is_dir($fullPath)) {
            throw new Exception("Folder '$slug' does not exist", 404);
        }

        // Pokud je move true a name zadáno, přejmenuj složku
        if ($move && $name !== null) {
            $parentDir = dirname($slug);
            $newSlug = ($parentDir === '.' || $parentDir === '') ? $this->webalizeName($name) : $parentDir . DIRECTORY_SEPARATOR . $this->webalizeName($name);
            $newPath = $this->scanner->getFullPath($newSlug);

            if (is_dir($newPath)) {
                throw new Exception("Target folder '$newSlug' already exists", 409);
            }

            // Přejmenuj složku
            if (!rename($fullPath, $newPath)) {
                throw new Exception("Failed to rename folder", 500);
            }

            // Aktualizuj _content.json
            $data = $this->readJson($newSlug, 'content') ?? [];
            $data['name'] = $name;
            if ($description !== null) {
                $data['description'] = $description;
            }
            if (!empty($meta)) {
                $data = array_merge($data, $meta);
            }
            $this->writeJson($newSlug, 'content', $data);

            // Pokud jsou zadány tags, ulož je do _tags.json
            if ($tags !== null && (is_array($tags) || is_object($tags))) {
                $validTags = $this->filterValidTags($tags);
                if ($mergeTags) {
                    $oldTags = $this->readJson($newSlug, 'tags') ?? [];
                    $validTags = array_merge($oldTags, $validTags);
                }
                $this->writeJson($newSlug, 'tags', $validTags);
            }

            return [
                'slug' => $newSlug,
                'name' => $data['name'] ?? basename($newSlug),
                'description' => $data['description'] ?? null,
                'info' => $this->getInfo($newSlug),
                'moved' => true,
                'oldSlug' => $slug,
            ];
        }

        // Jinak pouze aktualizuj _content.json
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

        // Pokud jsou zadány tags, ulož je do _tags.json
        if ($tags !== null && (is_array($tags) || is_object($tags))) {
            $validTags = $this->filterValidTags($tags);
            if ($mergeTags) {
                $oldTags = $this->readJson($slug, 'tags') ?? [];
                $validTags = array_merge($oldTags, $validTags);
            }
            $this->writeJson($slug, 'tags', $validTags);
        }

        return [
            'slug' => $slug,
            'name' => $data['name'] ?? basename($slug),
            'description' => $data['description'] ?? null,
            'info' => $this->getInfo($slug),
            'moved' => false,
        ];
    }

    /**
     * Move a folder to a new parent folder.
     * @param string $slug Slug (relativní cesta) přesouvané složky
     * @param string $targetParentSlug Cílová složka (relativní cesta)
     * @return array
     * @throws Exception
     */
    public function moveFolder(string $slug, string $targetParentSlug): array
    {
        $fullPath = $this->scanner->getFullPath($slug);
        if (!is_dir($fullPath)) {
            throw new Exception("Folder '$slug' does not exist", 404);
        }
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
        $folderName = basename($slug);
        $newSlug = rtrim($targetParentSlug, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $folderName;
        $newPath = $this->scanner->getFullPath($newSlug);
        if (is_dir($newPath)) {
            throw new Exception("Target folder '$newSlug' already exists", 409);
        }
        if (!rename($fullPath, $newPath)) {
            throw new Exception("Failed to move folder", 500);
        }
        return [
            'oldSlug' => $slug,
            'newSlug' => $newSlug,
            'info' => $this->getInfo($newSlug),
            'moved' => true,
        ];
    }

    /**
     * Validate tags structure: each tag must have a string 'name',
     * optional 'description' and 'color' (if present, must be strings).
     * Returns filtered array of valid tags only.
     */
    protected function filterValidTags($tags): array
    {
        if (!is_array($tags) && !is_object($tags)) return [];
        $tagsArr = (array)$tags;
        $result = [];
        foreach ($tagsArr as $key => $tag) {
            if (!is_array($tag) && !is_object($tag)) continue;
            $tagArr = (array)$tag;
            if (!isset($tagArr['name']) || !is_string($tagArr['name'])) continue;
            if (isset($tagArr['description']) && !is_string($tagArr['description'])) continue;
            if (isset($tagArr['color']) && !is_string($tagArr['color'])) continue;
            $result[$key] = [
                'name' => $tagArr['name'],
            ];
            if (isset($tagArr['description'])) $result[$key]['description'] = $tagArr['description'];
            if (isset($tagArr['color'])) $result[$key]['color'] = $tagArr['color'];
        }
        return $result;
    }

    /**
     * Najde a vrátí soubor v této složce jako objekt Lrc (nebo null, pokud neexistuje nebo není LRC).
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
     * Vrátí všechny složky (a jejich podstromy), ke kterým má uživatel přístup podle access.
     * Výstup je pole struktur s klíči: path, api, name, protected, subfolders
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
}
