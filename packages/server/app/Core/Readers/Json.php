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

    /**
     * Statická metoda pro bezpečnou sanitizaci stringu před uložením do JSON metadat.
     * Odstraní HTML, PHP, JS kód, escapuje zalomení řádků, odstraní nebezpečné znaky.
     * @param string $value
     * @return string
     */
    public static function s(string $value): string
    {
        // Odstraní všechny HTML event handlery typu on...="..." nebo on...='...'
        $value = preg_replace('/on[a-z]+\s*=\s*"[^"]*"/i', '', $value);
        $value = preg_replace("/on[a-z]+\s*=\s*'[^']*'/i", '', $value);
        // Odstraní celé <script ...>...</script> včetně obsahu a parametrů (multiline, case-insensitive)
        $value = preg_replace('/<script[^>]*?>.*?<\/script>/is', '', $value);
        // Odstraní HTML a PHP tagy
        $value = strip_tags($value);
        // Odstraní neviditelné znaky (včetně \r, \n, \t, atd.)
        $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value);
        // Odstraní potenciální zbytky PHP/JS kódu (např. <?php, <script>, eval, ...)
        $value = preg_replace('/<\/?(style|iframe|object|embed|applet|meta|link)[^>]*>/i', '', $value);
        $value = preg_replace('/(eval|base64_decode|shell_exec|system|passthru|exec|popen|proc_open|require|include|phpinfo|assert)\s*\(/i', '', $value);
        // Odstraní HTML event handler atributy typu onmouseover=, onclick=, onerror= atd. (case-insensitive)
        $value = preg_replace('/on[a-z]+\s*=\s*("[^"]*"|\'[^"]*\'|[^\s>]+)/i', '', $value);
        // Odstraní znaky, které by mohly narušit JSON nebo způsobit injekci
        $value = str_replace(["\"", "'", "`", "\\"], '', $value);
        // Nahradí sekvenci více mezer jednou mezerou
        $value = preg_replace('/\s{2,}/u', ' ', $value);
        // Ořízne mezery na začátku a konci
        $value = trim($value);
        // Omezí délku (např. na 1024 znaků)
        $value = mb_substr($value, 0, 1024);
        return $value;
    }
}
