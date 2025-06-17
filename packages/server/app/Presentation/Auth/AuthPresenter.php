<?php

declare( strict_types=1 );

namespace App\Presentation\Auth;

use App\Presentation\Core\BasePresenter;

final class AuthPresenter extends BasePresenter {

    public function actionLogin( string $path ): void {

        $this->storeData( "path", $path );

        $post = $this->getHttpRequest()->getRawBody();

        if ( $post ) {
            $post = json_decode( $post );
        }

        $this->storeData( "post", $post );

        $login = $this->scanner->tokenService->authenticate( 
            $path, 
            $post->user, 
            $post->password 
        );

        if ( $login ) {
            $this->markSuccess();
        }

        $this->storeData( "login", $login );

        $this->respond();

    }

}
