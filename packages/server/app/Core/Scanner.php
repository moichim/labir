<?php

declare(strict_types=1);

namespace App\Core;

use App\Core\Readers\Folder;
use App\Core\Readers\File;
use App\Core\Readers\Json;
use Nette\Http\IRequest;
use Nette\Http\Session;

final class Scanner
{

    protected string $dataPath = DATA_DIR;

    protected string $dataUrl;

    public readonly IRequest $request;

    public Json $json;
    public Folder $folder;
    public File $file;
    public Access $access;
    public AuthorisationService $authorisation;

    public Config $config;

    protected string $basePath;

    protected array $serverInfo = [];

    public function __construct(
        IRequest $request,
        Session $session,
        Config $config
    ) {

        $this->config = $config;

        $this->request = $request;
        $url = $request->getUrl();
        $this->dataUrl = rtrim($url->getBaseUrl(), '/');

        // Oprava: Odstranit /api prefix stejně jako v routeru
        $path = $url->getPath();
        $apiPrefix = $this->config->getApiEndpoint();
        if (substr($path, 0, strlen($apiPrefix)) === $apiPrefix) {
            $path = substr($path, strlen($apiPrefix));
        }
        $this->basePath = trim($path, "/");

        $this->json = new Json($this);
        $this->folder = new Folder($this);
        $this->file = new File($this);
        $this->access = new Access($this);
        $this->authorisation = new AuthorisationService($session, $this);

        $serverFile = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . '_server.json';
        if (file_exists($serverFile)) {
            $json = file_get_contents($serverFile);
            $data = json_decode($json, true);
            if (is_array($data)) {
                $this->serverInfo = $data;
            }
        }

        $packageFile = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'package.json';
        if (file_exists($packageFile)) {
            $json = file_get_contents($packageFile);
            $data = json_decode($json, true);
            if (is_array($data)) {
                $this->serverInfo["version"] = $data["version"] ?? "unknown version";
            }
        }

        $this->serverInfo["url"] = $this->dataUrl;
    }

    public function getServerInfo(): array
    {
        return $this->serverInfo;
    }

    public function getRequest(): IRequest
    {
        return $this->request;
    }

    public function getBasePath()
    {
        return $this->basePath;
    }

    public function getFullPath(
        string $path
    ): string {
        return $this->dataPath . DIRECTORY_SEPARATOR . trim($path, DIRECTORY_SEPARATOR);
    }

    public function getFullUrl(
        string $path
    ) {
        return $this->dataUrl . rtrim($this->config->getApiEndpoint(), "/") . "/" . ltrim($path, '/');
    }

    public function getFileUrl(string $path)
    {
        return  $this->dataUrl . "/data/" . ltrim($path, "/");
    }

    public function getDataPath()
    {
        return $this->dataPath;
    }
}
