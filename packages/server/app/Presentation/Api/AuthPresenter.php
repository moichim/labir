<?php

declare( strict_types=1 );

namespace App\Presentation\Auth;

use App\Presentation\Core\BaseApiPresenter;
use Exception;

use Nette\Application\Attributes\Requires;

#[Requires(methods: ['POST'])]
final class AuthPresenter extends BaseApiPresenter {

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
            $this->markSuccess( $this->formatMessage( "User '%s' authenticated successfully.", $login["user"] ) );
            $this->storeData( "login", $login );

            $userFolders = $this->scanner->folder->getUserRootFolders( $login["user"] );

            $this->storeData( "userFolders", $userFolders );


        } else {
            throw new Exception( "Unable to authenticate", 401 );
        }

        $this->respond();

    }

    public function actionLogout(): void {

        $this->scanner->authorisation->logout();

        $this->markSuccess( "User logged out successfully." );

        $this->respond();

    }

}
