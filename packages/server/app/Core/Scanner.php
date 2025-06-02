<?php

declare(strict_types=1);

namespace App\Core;

use App\Core\Folder;
use Nette\Http\IRequest;
use Nette\Http\Session;

final class Scanner {

    protected string $dataPath = DATA_DIR;

    protected string $dataUrl;

    protected IRequest $request;

    public Folder $folder;
    public File $file;
    public Access $access;
    public AuthService $tokenService;

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

        $this->folder = new Folder( $this );
        $this->file = new File( $this );
        $this->access = new Access( $this );
        $this->tokenService = new AuthService( $session, $this );

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