<?php

declare(strict_types=1);

namespace App\Core;

use Nette\Neon\Neon;

final class Lrc
{

    protected string $url;
    protected string|false $visual = false;
    protected string|false $preview = false;
    protected int $timestamp;
    protected int $uploaded;
    protected array $tags = [];
    protected array $analyses = [];

    public function getPath() { return $this->path; }
    public function getFileName() { return $this->fileName; }
    public function getVisual() { return $this->visual; }
    public function getPreview() { return $this->preview; }
    public function getTimestamp() { return $this->timestamp; }
    public function getUploaded() { return $this->uploaded; }
    public function getTags() { return $this->tags; }
    public function getAnalyses() { return $this->analyses; }


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
        $this->url = $this->scanner->getFileUrl( $this->path . DIRECTORY_SEPARATOR . $this->fileName );
        $this->visual = $this->readVisual();
        $this->preview = $this->readPreview();

        $neon = $this->getOrCreateNeon();

        $this->timestamp = $neon[ "timestamp" ];
        $this->tags = $neon[ "tags" ] ?? [];
        $this->analyses = $neon[ "analyses" ] ?? [];
        $this->uploaded = $neon[ "uploaded" ] ?? time() * 1000;

    }

    public function getInfo()
    {
        return [
            "url" => $this->url,
            "fileName" => $this->fileName,
            "folder" => $this->scanner->getFullUrl($this->path),
            "visual" => $this->visual,
            "preview" => $this->preview,
            "timestamp" => $this->timestamp,
            "uploaded" => $this->uploaded,
            "tags" => $this->tags
        ];
    }


    protected function getJsonPath()
    {
        return $this->scanner->getFullPath($this->path . DIRECTORY_SEPARATOR .
            preg_replace('/\.lrc$/i', '.json', $this->fileName));
    }


    protected function jsonExists()
    {
        $path = $this->getJsonPath();
        return is_file($path) && is_readable($path);
    }

    public function readVisual(): string|false
    {
        return $this->findRelatedImage('visual');
    }

    public function readPreview(): string|false
    {
        return $this->findRelatedImage('preview');
    }


    protected function getOrCreateNeon()
    {

        if (! $this->jsonExists()) {
            return $this->createJson();
        }

        $content = file_get_contents($this->getJsonPath());
        if ($content === false) {
            return false;
        }

        try {
            $data = json_decode($content, true);
            return is_array($data) ? $data : null;
        } catch (\Throwable $e) {
            return null;
        }
    }


    protected function createJson()
    {

        $neonPath = $this->getJsonPath();

        $timestamp = $this->readFileTimestamp();

        $data = [
            "timestamp" => $timestamp,
            "analyses" => [],
            "uploaded" => time() * 1000,
            "tags" => []
        ];

        $neonContent = json_encode($data);

        file_put_contents($neonPath, $neonContent) !== false;

        return $data;
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
        if ( str_ends_with( $base, "_thermal" ) ) {
            if ($type === 'visual') {
                $file = str_replace( "_thermal", "_visual.png", $base );
            } else {
                $file = str_replace( "_thermal", "_image_thermal.png", $base );
            }
            $full = $dir . DIRECTORY_SEPARATOR . $file;
            if (is_file($full)) {
                return $this->scanner->getFileUrl($this->path . DIRECTORY_SEPARATOR . $file);
            }
        }

        // Old file name convention
        else if ( str_starts_with( "image-thermal", $base ) ) {
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
}
