<?php

declare(strict_types=1);

namespace App\Core\Data;

use App\Core\Scanner;
use App\Core\Data\File;
use App\Core\Data\Folder;
use App\Core\Data\Lrc;
use Exception;

final class Grid
{

    protected array $tags = [];
    protected array $folders = [];

    protected ?int $from = null;
    protected ?int $to = null;


    protected static array $groupByCallbacks = [
        'hour' => [self::class, 'groupByHour'],
        'day' => [self::class, 'groupByDay'],
        'week' => [self::class, 'groupByWeek'],
        'month' => [self::class, 'groupByMonth'],
        'year' => [self::class, 'groupByYear'],
    ];




    public function __construct(
        protected Scanner $scanner,
        protected string $path
    ) {}

    protected static function groupByHour(int $timestamp): int
    {
        return strtotime("midnight", $timestamp) + (date("H", $timestamp) * 3600);
    }
    protected static function groupByDay(int $timestamp): int
    {
        return strtotime("midnight", $timestamp);
    }
    protected static function groupByWeek(int $timestamp): int
    {
        $dayOfWeek = date("N", $timestamp);
        return strtotime("midnight", $timestamp) - (($dayOfWeek - 1) * 86400);
    }
    protected static function groupByMonth(int $timestamp): int
    {
        return strtotime(date("Y-m-01", $timestamp));
    }
    protected static function groupByYear(int $timestamp): int
    {
        return strtotime(date("Y-01-01", $timestamp));
    }

    public function setFolders(string $folders): self
    {
        $this->folders = array_map(function (string $item) {
            return trim($item);
        }, explode(",", $folders));
        return $this;
    }


    public function setFrom(
        int $from
    ): self {
        if ($from < 0) {
            throw new Exception("From value must be a positive integer.");
        }
        if ($this->to !== null && $from > $this->to) {
            $tmp = $this->to;
            $this->to = $from;
            $from = $tmp;
        }
        $this->from = $from;
        return $this;
    }


    public function setTo(
        int $to
    ): self {

        if ($to < 0) {
            throw new Exception("To value must be a positive integer.");
        }
        if ($this->from !== null && $to < $this->from) {
            $tmp = $this->from;
            $this->from = $to;
            $to = $tmp;
        }

        $this->to = $to;

        return $this;
    }


    public function setTags(
        string $value
    ): self {
        $this->tags = array_map(function (string $item) {
            return trim($item);
        }, explode(",", $value));
        return $this;
    }


    public function addTag(
        string $tag
    ): self {
        $this->tags[] = trim($tag);
        return $this;
    }


    public function fetch(
        string $by = "hour"
    ): array {

        if (!in_array($by, array_keys(self::$groupByCallbacks))) {
            throw new Exception("Invalid grouping parameter: $by. Allowed values are: " . implode(", ", array_keys(self::$groupByCallbacks)));
        }

        $info = $this->scanner->folder->getInfo($this->path);

        $directories = $this->scanner->folder->getSubdirectories($this->path);

        $all_accessible_directories = $directories;

        if (count($this->folders) > 0) {
            $directories = array_filter($directories, function ($dir) {
                return in_array($dir["slug"], $this->folders);
            });
        }

        $identity = $this->scanner->tokenService->getIdentity();

        $user = $identity
            ? $identity["user"]
            : null;

        $access = $this->scanner->access;
        $visibleDirectories = [];
        $total_files = 0;
        $all_files = [];

        foreach ($directories as $slug => $directory) {
            if (!$access->userMayReadFolder($directory["path"], $user)) {
                continue;
            }

            $files = $this->scanner->folder->getFiles(
                $directory["path"],
                $this->from,
                $this->to,
                $this->tags
            );

            if (count($files) === 0) {
                continue; // složka bez souborů se přeskočí
            }

            $directory["files"] = $files;
            $directory["fileCount"] = count($files);
            $total_files += $directory["lrc_count"];
            $all_files = array_merge($all_files, $files);

            $visibleDirectories[$slug] = $directory;
        }

        $displayed = count($all_files);
        $ommited = max(0, $total_files - $displayed);

        ksort($visibleDirectories);

        $groupBy = self::$groupByCallbacks[$by] ?? self::$groupByCallbacks['hour'];

        $folders = $visibleDirectories;

        $rows = $this->groupFilesByTimeAndFolder($visibleDirectories, $groupBy, array_keys($folders), $by);


        $tags = [];
        if (!empty($visibleDirectories)) {
            $firstDir = reset($visibleDirectories);
            $parentTags = $firstDir['parent_tags'] ?? [];
            $tags = $this->scanner->folder::matchFilesWithParentTags($all_files, $parentTags);
        }

        // Odstraň pole souborů z hlavičky
        $header = $visibleDirectories;
        foreach ($header as &$folder) {
            unset($folder['files']);
        }
        unset($folder);


        // Výpočet time.selection (rozsah skupin)
        $groupKeys = array_keys($rows);
        $selectionFrom = $selectionTo = null;
        if (!empty($groupKeys)) {
            $selectionFrom = min($groupKeys);
            $selectionTo = max($groupKeys);
        }

        // Výpočet time.files (rozsah souborů)
        $fileTimestamps = array_column($all_files, 'timestamp');
        $fileFrom = $fileTo = null;
        if (!empty($fileTimestamps)) {
            $fileFrom = min($fileTimestamps);
            $fileTo = max($fileTimestamps);
        }

        return [
            "folder" => $info,
            "all_subdirectories" => $all_accessible_directories,
            "header" => $header,
            "groups" => $rows,
            "tags" => $tags,
            "count" => [
                "displayed" => $displayed,
                "omitted" => $ommited,
                "total" => $total_files
            ],
            "time" => [
                "selection" => [
                    "from" => $selectionFrom,
                    "to" => $selectionTo
                ],
                "files" => [
                    "from" => $fileFrom,
                    "to" => $fileTo
                ]
            ]
        ];
    }


    /**
     * Seskupí soubory podle času a složky.
     * @param array $directories [slug => dirInfo+files]
     * @param callable $groupBy
     * @param array $folderOrder
     * @param string $by
     * @return array
     */
    protected function groupFilesByTimeAndFolder(array $directories, callable $groupBy, array $folderOrder, string $by): array
    {
        $groups = [];

        // Seskup soubory podle času a složky
        foreach ($directories as $slug => $folder) {
            foreach ($folder['files'] as $file) {
                // Převod timestampu na sekundy!
                $timestampSec = (int)($file['timestamp'] / 1000);
                $groupStart = $groupBy($timestampSec);
                if (!isset($groups[$groupStart])) {
                    $groups[$groupStart] = [];
                }
                if (!isset($groups[$groupStart][$slug])) {
                    $groups[$groupStart][$slug] = [];
                }
                $groups[$groupStart][$slug][] = $file;
            }
        }

        // Výsledek: asociativní pole s klíčem = timestamp skupiny
        ksort($groups);
        $result = [];
        foreach ($groups as $groupStart => $foldersInGroup) {
            $row = [
                'label' => $this->getGroupLabel($by, $groupStart),
                'from' => $this->getGroupRange($by, $groupStart)['from'],
                'to' => $this->getGroupRange($by, $groupStart)['to'],
                'folders' => []
            ];
            foreach ($folderOrder as $slug) {
                $row['folders'][$slug] = $foldersInGroup[$slug] ?? [];
            }
            $result[$groupStart * 1000] = $row; // klíčem je timestamp skupiny!
        }

        return $result;
    }


    protected function groupFiles(array $directories, callable $groupBy): array
    {
        $groups = [];

        foreach ($directories as $folder) {
            foreach ($folder['files'] as $file) {
                $groupStart = $groupBy($file['timestamp']);
                if (!isset($groups[$groupStart])) {
                    $groups[$groupStart] = [];
                }
                $groups[$groupStart][] = $file;
            }
        }

        ksort($groups); // řazení skupin podle času

        return $groups;
    }


    protected function getGroupLabel(string $by, int $timestamp): string
    {

        switch ($by) {
            case 'hour':
                return date('d.m.Y H:00', $timestamp);
            case 'day':
                return date('d.m.Y', $timestamp);
            case 'week':
                return 'Týden ' . date('W', $timestamp) . ' ' . date('Y', $timestamp);
            case 'month':
                return date('m/Y', $timestamp);
            case 'year':
                return date('Y', $timestamp);
            default:
                return (string)$timestamp;
        }
    }

    protected function getGroupRange(string $by, int $timestamp): array
    {
        switch ($by) {
            case 'hour':
                $from = $timestamp;
                $to = $timestamp + 3600 - 1;
                break;
            case 'day':
                $from = $timestamp;
                $to = $timestamp + 86400 - 1;
                break;
            case 'week':
                $from = $timestamp;
                $to = $timestamp + 7 * 86400 - 1;
                break;
            case 'month':
                $from = $timestamp;
                $to = strtotime('+1 month', $timestamp) - 1;
                break;
            case 'year':
                $from = $timestamp;
                $to = strtotime('+1 year', $timestamp) - 1;
                break;
            default:
                $from = $timestamp;
                $to = $timestamp;
        }
        return [
            'from' => $from * 1000,
            'to' => $to * 1000
        ];
    }
}
