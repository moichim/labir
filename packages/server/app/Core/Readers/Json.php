<?php

declare(strict_types=1);

namespace App\Core\Readers;

use App\Core\Scanner;

final class Json
{
    protected Scanner $scanner;

    public function __construct(Scanner $scanner)
    {
        $this->scanner = $scanner;
    }

    /**
     * Read and decode a JSON file by absolute path.
     */
    public function read(string $absPath): ?array
    {
        if (!is_file($absPath) || !is_readable($absPath)) return null;
        $json = file_get_contents($absPath);
        if ($json === false) return null;
        $data = json_decode($json, true);
        return is_array($data) ? $data : null;
    }

    /**
     * Write an array to a JSON file by absolute path.
     */
    public function write(string $absPath, array $data): void
    {
        file_put_contents($absPath, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }
}
