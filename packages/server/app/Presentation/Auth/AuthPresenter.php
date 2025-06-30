<?php

declare( strict_types=1 );

namespace App\Presentation\Auth;

use App\Presentation\Core\BasePresenter;
use Exception;

final class AuthPresenter extends BasePresenter {

    public function actionLogin(): void {

        $post = $this->getHttpRequest()->getRawBody();

        if ( $post ) {
            $post = json_decode( $post );
        }

        if ( !isset( $post->user ) || !isset( $post->password ) ) {
            throw new Exception( 'No credentials provided.', 400 );
        }

        $login = $this->scanner->authorisation->authenticate( 
            $post->user, 
            $post->password 
        );

        if ( $login ) {
            $this->markSuccess();
            $this->storeData( "login", $login );
        } else {
            throw new Exception( "Unable to authenticate", 401 );
        }

        $this->respond();

    }

}
