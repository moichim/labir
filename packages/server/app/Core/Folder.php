<?php

declare(strict_types=1);

namespace App\Core;

use App\Core\Scanner;
use Exception;
use FilesystemIterator;
use Nette\Neon\Neon;

final class Folder
{

    public function __construct(
        protected Scanner $scanner
    ) {}

    public function exists(
        string $path
    ) {

        // var_dump( $path );

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

        $info = [
            "api" => $this->scanner->getFullUrl($path),
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
        $fullPath = $this->scanner->getFullPath(trim( $path, "/"));
        if (!$this->exists($path)) {
            return false;
        }

        $subdirs = [];
        foreach (new FilesystemIterator($fullPath, FilesystemIterator::SKIP_DOTS) as $item) {
            $subdirPath = $fullPath . DIRECTORY_SEPARATOR . trim( $item->getFileName(),  DIRECTORY_SEPARATOR);
            if (is_dir($subdirPath)) {
                $relativePath = trim($path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $item->getFileName();
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
            throw new Exception("Folder '$path' does not exist", 404);
        }
    }


    public function getFiles(string $path, ?int $from = null, ?int $to = null, ?array $tags = null )
    {

        if (! $this->exists($path)) {
            throw new Exception("The given folder $path does not exist!", 404);
        }

        $fullPath = $this->scanner->getFullPath($path);

        $files = [];

        foreach (
            new FilesystemIterator( $fullPath, FilesystemIterator::SKIP_DOTS ) as $item
        ) {

            $entity = Lrc::createIfExists($this->scanner, $path, $item->getFilename());

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
        foreach (new FilesystemIterator($fullPath, FilesystemIterator::SKIP_DOTS) as $item) {
            if (preg_match('/\.lrc$/i', $item->getFileName()) && is_file($fullPath . DIRECTORY_SEPARATOR . $item->getFileName())) {
                $count++;
            }
        }
        return $count;
    }
}
