<?php

declare(strict_types=1);

namespace App\Core;

use Nette\Http\IRequest;

final class Scanner {

    protected string $dataPath = DATA_DIR;

    protected string $dataUrl;

    protected IRequest $request;

    public function __construct(
        IRequest $request
    )
    {
        $this->request = $request;
        $this->dataUrl = rtrim( $request->getUrl()->getBaseUrl(), '/' ) . '/data';
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

    public function folderExists(
        string $path
    ): bool {
        $fullPath = $this->getFullPath($path);
        return is_dir($fullPath) && is_readable($fullPath);
    }

}