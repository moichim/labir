<?php

declare( strict_types = 1 );

namespace App\Core;

use Nette\Neon\Neon;

final class File {

    public function __construct(
        protected Scanner $scanner
    )
    {}

    public function existsByFullPath(
        string $fullPath
    ): bool {

        return is_file( $fullPath ) && is_readable( $fullPath );

    }

    public function existsByRelativePath(
        string $path,
        string $fileName
    ): bool {
        $fullPath = $this->scanner->getFullPath( $path ) . DIRECTORY_SEPARATOR . $fileName;
        return $this->existsByFullPath( $fullPath );
    }

    public function getNeonContentByRelativePath(
        string $path,
        string $neonName
    ): array|false {

        $filePath = $this->scanner->getFullPath( $path ) . DIRECTORY_SEPARATOR . "_" . $neonName . ".neon";

        if ( $this->existsByFullPath( $filePath ) ) {

            $neonString = file_get_contents( $filePath );

            try {

                $neonData = Neon::decode( $neonString );

                if ( is_array( $neonData ) ) {
                    return $neonData;
                }

            } catch ( \Throwable $e ) {}

        }

        return false;

    }

}