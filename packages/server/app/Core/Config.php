<?php

declare(strict_types=1);

namespace App\Core;

use Nette\Utils\Json;
use Nette\Utils\FileSystem;
use Nette\Caching\Cache;
use Nette\Caching\Storages\FileStorage;

/**
 * Obsluhuje _server.json konfiguraci
 */
final class Config
{

    private array $config = [];

    private FileStorage $storage;
    private Cache $cache;

    private string $configPath;

    public function __construct()
    {

        $this->configPath = dirname(__DIR__, 2) . '/_server.json';

        $this->storage = new FileStorage(dirname(__DIR__, 2) . '/temp/cache');

        $this->cache = new Cache($this->storage, "labir.config");

        $this->config = $this->readFile();
    }

    /**
     * Přečte konfigurační soubor z cache, eventuálně přímo z konfiguračního souboru
     */
    private function readFile(): array
    {

        $configPath = $this->configPath;

        return $this->cache->load(
            "server-config",
            function (&$dependencies) use ($configPath) {
                $dependencies[Cache::FILES] = [$configPath];
                if (is_file($configPath)) {
                    $json = FileSystem::read($configPath);
                    return Json::decode($json, Json::FORCE_ARRAY);
                }
                return [];
            }
        );

    }

    public function getApiEndpoint(): string
    {
        return $this->config['endpoint'] ?? '/api';
    }
}
