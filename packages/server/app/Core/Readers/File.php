<?php

declare( strict_types = 1 );

namespace App\Core\Readers;

use App\Core\Scanner;

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


}