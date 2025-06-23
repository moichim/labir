<?php

declare(strict_types=1);

namespace App\Core\Data;

use App\Core\Scanner;
use Exception;
use FilesystemIterator;

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
        $this->throwIfNotExists($path);

        // Zjisti protected přes getFolderAccess
        $protected = false;
        if (isset($this->scanner->access)) {
            $access = $this->scanner->access->getFolderAccess($path);
            if (is_array($access) && array_key_exists('show', $access) && $access['show'] === false) {
                $protected = true;
            }
        }

        $info = [
            "entity" => "folder",
            "api" => $this->scanner->getFullUrl($path),
            "path" => $path,
            "slug" => basename($path),
            "name" => basename($path),
            "description" => null,
            "data" => [],
            "lrc_count" => $this->getFileCount($path),
            "protected" => $protected
        ];

        // Zjisti, zda je složka chráněná (přístupná jen přihlášeným)
        if (isset($this->scanner->access)) {
            // user = null => anonym
            if (!$this->scanner->access->userMayReadFolder($path, null)) {
                $info["protected"] = true;
            }
        }

        try {

            $content = $this->scanner->file->getNeonContentByRelativePath($path, "content");
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

                /*

                $info = $this->getInfo($relativePath);
                // Kontrola pouze _access.json pro show:false
                $show = true;
                $accessPath = $this->scanner->getFullPath($relativePath . DIRECTORY_SEPARATOR . '_access.json');
                if (is_file($accessPath) && is_readable($accessPath)) {
                    $accessContent = file_get_contents($accessPath);
                    if ($accessContent !== false) {
                        $accessData = json_decode($accessContent, true);
                        if (is_array($accessData) && array_key_exists('show', $accessData) && $accessData['show'] === false) {
                            $show = false;
                        }
                    }
                }
                // Pokud show je false, ověř práva uživatele
                if ($show === false) {
                    if (!$this->scanner->access->userMayReadFolder($relativePath, $user)) {
                        continue;
                    }
                }

                */
                
            }
        }

        return count($subdirs) > 0 ? $subdirs : false;
    }


    protected function throwIfNotExists(string $path)
    {
        if (! $this->exists($path)) {
            throw new Exception("Folder '$path' does not exist", 404);
        }
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
}
