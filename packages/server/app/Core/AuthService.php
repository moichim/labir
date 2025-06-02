<?php

declare( strict_types = 1 );

namespace App\Core;

use Nette\Http\Session;
use Nette\Http\SessionSection;
use \Exception;

class AuthService {

    const SECTION = "auth";

    private SessionSection $section;

    private Scanner $scanner;

    public function __construct(
        Session $session,
        Scanner $scanner
    ) {
        $this->section = $session->getSection( self::SECTION );
        $this->scanner = $scanner;
    }

    public function isLoggedin(): bool {
        return isset( $this->section->user )
            && isset( $this->section->token )
            && isset( $this->section->path );
    }

    public function authenticate(
        string $path,
        string $userName,
        string $password
    ): array|false {


        $access = $this->scanner->access->getFolderAccess( $path );

        if (
            isset( $access["users"] )
            && isset( $access[ "users" ][ $userName ] )
            && isset( $access[ "users" ][ $userName ][ "password" ] )
            && $access[ "users" ][ $userName ][ "password" ] === $password
        ) {
            $this->createIdentity( $path, $userName );
            return $this->getIdentity();
        }

        return false;

    }

    public function logout() {
        unset( $this->section->user );
        unset( $this->section->path );
        unset( $this->section->token );
    }


    public function validateIdentity(
        string $path,
        string $token
    ): bool {


        $identity = $this->getIdentity();

        // If no identity exists, return false
        if ( ! $identity ) {
            throw new Exception( "Not logged in" );
        }

        // If the identity exists, check if it is the same user
        if (
            $identity[ "token" ] !== $token
        ) {
            throw new Exception( "Not valid token!" );
        }

        // Then check if the current user may access the current folder
        $mayReadFolder = $this->scanner->access->userMayReadFolder( $path, $identity["user"] );

        if ( $mayReadFolder ) {
            return true;
        } else {
            throw new Exception( "User may not read this folder!" );
        }

    }



    protected function createIdentity(
        string $userName,
        string $path
    ) {


        $token = bin2hex( random_bytes(32) );

        $this->section->user = $userName;
        $this->section->path = $path;
        $this->section->token = $token;   

    }

    public function getIdentity(): false|array {

        if (
            !isset( $this->section->user )
            || !isset( $this->section->path )
            || !isset( $this->section->token )
        ) {
            return false;
        }

        return [
            "user" => $this->section->user,
            "path" => $this->section->path,
            "token" => $this->section->token
        ];
    }

}