<?php

declare(strict_types=1);

namespace App\Core;

use App\Core\Folder;
use Nette\Http\IRequest;

final class Scanner {

    protected string $dataPath = DATA_DIR;

    protected string $dataUrl;

    protected IRequest $request;

    public Folder $folder;
    public File $file;
    public Access $access;

    public function __construct(
        IRequest $request
    )
    {
        $this->request = $request;
        $this->dataUrl = rtrim( $request->getUrl()->getBaseUrl(), '/' );
        $this->folder = new Folder( $this );
        $this->file = new File( $this );
        $this->access = new Access( $this );
    }

    public function getFullPath(
        string $path
    ): string {
        return $this->dataPath . DIRECTORY_SEPARATOR . $path;
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