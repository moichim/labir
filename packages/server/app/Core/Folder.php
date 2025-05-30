<?php

declare(strict_types=1);

namespace App\Core;

use App\Core\Scanner;
use Exception;
use Nette\Neon\Neon;

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

        $info = [
            "url" => $this->scanner->getFullUrl($path),
            "path" => $path,
            "slug" => basename($path),
            "name" => basename($path),
            "description" => null,
            "data" => [],
            "lrc_count" => $this->getFileCount( $path )
        ];

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

        return $info;
    }

    public function getSubdirectories(string $path): array|false
    {
        $fullPath = $this->scanner->getFullPath($path);
        if (!$this->exists($path)) {
            return false;
        }

        $subdirs = [];
        foreach (scandir($fullPath) as $item) {
            if ($item === '.' || $item === '..') {
                continue;
            }
            $subdirPath = $fullPath . DIRECTORY_SEPARATOR . $item;
            if (is_dir($subdirPath)) {
                $relativePath = rtrim($path, '/\\') . DIRECTORY_SEPARATOR . $item;
                $info = $this->getInfo($relativePath);
                if ($info) {
                    $subdirs[$info["slug"]] = $info;
                }
            }
        }

        return count($subdirs) > 0 ? $subdirs : false;
    }


    protected function throwIfNotExists(string $path)
    {
        if (! $this->exists($path)) {
            throw new Exception("Folder !$path' does not exist", 404);
        }
    }

    public function hasSubdirectories(string $path): bool
    {
        $fullPath = $this->scanner->getFullPath($path);
        if (!$this->exists($path)) {
            return false;
        }
        foreach (scandir($fullPath) as $item) {
            if ($item === '.' || $item === '..') {
                continue;
            }
            if (is_dir($fullPath . DIRECTORY_SEPARATOR . $item)) {
                return true;
            }
        }
        return false;
    }


    public function getFiles(string $path, ?int $from = null, ?int $to = null, ?array $tags = null )
    {

        if (! $this->exists($path)) {
            throw new Exception("The given folder $path does not exist!", 404);
        }

        $fullPath = $this->scanner->getFullPath($path);

        $files = [];

        foreach (scandir($fullPath) as $item) {

            $entity = Lrc::createIfExists($this->scanner, $path, $item);

            if ($entity) {

                $valid = true;

                if ( $to !== null && $valid === true && $entity->getTimestamp() >= $to) {
                    $valid = false;
                }

                if ( $from !== null && $valid === true && $entity->getTimestamp() <= $from ) {
                    $valid = false;
                }

                if ( $tags !== null && $valid === true ) {
                    foreach ( $tags as $tag ) {
                        if ( ! in_array( $tag, $entity->getTags() ) ) {
                            $valid = false;
                        }
                    }
                }

                if ( $valid === true ) {
                    $files[] = $entity->getInfo();
                }

            }
        }

        usort($files, function ($a, $b) {
            return $a['neon']['timestamp'] <=> $b['neon']['timestamp'];
        });

        return $files;
    }


    public function getFileCount(string $path): int
    {
        $fullPath = $this->scanner->getFullPath($path);
        if (!is_dir($fullPath)) {
            return 0;
        }

        $count = 0;
        foreach (scandir($fullPath) as $item) {
            if (preg_match('/\.lrc$/i', $item) && is_file($fullPath . DIRECTORY_SEPARATOR . $item)) {
                $count++;
            }
        }
        return $count;
    }
}
