<?php

declare(strict_types=1);

namespace App\Core;

use App\Core\Readers\Folder;
use App\Core\Readers\File;
use App\Core\Readers\Json;
use Nette\Http\IRequest;
use Nette\Http\Session;

final class Scanner {

    protected string $dataPath = DATA_DIR;

    protected string $dataUrl;

    public readonly IRequest $request;

    public Json $json;
    public Folder $folder;
    public File $file;
    public Access $access;
    public AuthorisationService $authorisation;

    protected string $basePath;

    public function __construct(
        IRequest $request,
        Session $session
    )
    {
        $this->request = $request;
        $url = $request->getUrl();
        $this->dataUrl = rtrim( $url->getBaseUrl(), '/' );

        $this->basePath = trim( $url->getPath(), "/" );

        $this->json = new Json( $this );
        $this->folder = new Folder( $this );
        $this->file = new File( $this );
        $this->access = new Access( $this );
        $this->authorisation = new AuthorisationService( $session, $this );

    }

    public function getRequest(): IRequest {
        return $this->request;
    }

    public function getBasePath() {
        return $this->basePath;
    }

    public function getFullPath(
        string $path
    ): string {
        return $this->dataPath . DIRECTORY_SEPARATOR . trim( $path, DIRECTORY_SEPARATOR );
    }

    public function getFullUrl(
        string $path
    ) {
        return $this->dataUrl . "/" . ltrim( $path, '/' );
    }

    public function getFileUrl( string $path ) {
        return  $this->dataUrl . "/data/" . ltrim( $path, "/" );
    }

    public function getDataPath() {
        return $this->dataPath;
    }

}