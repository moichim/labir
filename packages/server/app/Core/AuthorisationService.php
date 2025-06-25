<?php

declare(strict_types=1);

namespace App\Core;

use Nette\Http\Session;
use Nette\Http\SessionSection;
use \Exception;

class AuthorisationService
{

    const SECTION = "auth";

    public readonly SessionSection $section;

    private Scanner $scanner;

    public function __construct(
        Session $session,
        Scanner $scanner
    ) {

        if (!$session->isStarted()) {
            $session->start();
        }

        $this->section = $session->getSection(self::SECTION);
        $this->scanner = $scanner;
    }


    /** 
     * User needs to have his credentials in Authorization header and they 
     * need to correspond to the credentials stored in the PHP session. 
     * 
    */
    public function isLoggedin(): bool
    {

        $authorisation = $this->scanner->request->getHeader( "Authorization" );

        $user = null;
        $token = null;

        if ( $authorisation && str_starts_with($authorisation, "Basic ") ) {

            $decoded = base64_decode( substr( $authorisation, 6 ) );
            if ( $decoded ) {
                $parts = explode( ":", $decoded );
                if ( count( $parts ) === 2 ) {
                    $user = $parts[0];
                    $token = $parts[1];

                    
                }
            }

        } else {
            return false;
        }

        // throw new Exception( "$user:$token" + " " + $this->section->get( "token" )  );

        return $this->section->get("user") !== null
            && $this->section->get("user") === $user
            && $this->section->get("token") !== null
            && $this->section->get("token") === $token;
    }


    /**
     * Validate if the user may access the given path,
     * create a new identity and return it.
     */
    public function authenticate(
        string $path,
        string $userName,
        string $password
    ): array|false {


        $access = $this->scanner->access->getFolderAccess($path);

        if (
            isset($access["users"])
            && isset($access["users"][$userName])
            && isset($access["users"][$userName]["password"])
            && $access["users"][$userName]["password"] === $password
        ) {
            $this->createIdentity($userName, $path);
            return $this->getIdentity();
        }

        return false;
    }

    public function logout()
    {
        $this->section->remove("user");
        $this->section->remove("path");
        $this->section->remove("token");
    }


    public function validateIdentity(
        string $path,
        string $token
    ): bool {


        $identity = $this->getIdentity();

        // If no identity exists, return false
        if (! $identity) {
            throw new Exception("Not logged in");
        }

        // If the identity exists, check if it is the same user
        if (
            $identity["token"] !== $token
        ) {
            throw new Exception("Not valid token!");
        }

        // Then check if the current user may access the current folder
        $mayReadFolder = $this->scanner->access->userMayReadFolder($path, $identity["user"]);

        if ($mayReadFolder) {
            return true;
        } else {
            throw new Exception("User may not read this folder!");
        }
    }



    protected function createIdentity(
        string $userName,
        string $path
    ) {

        $token = bin2hex(random_bytes(32));

        $this->section->set("user", $userName);
        $this->section->set("path", $path);
        $this->section->set("token", $token);

    }

    public function getIdentity(): false|array
    {

        if (
            $this->section->offsetExists("user") === false
            || $this->section->offsetExists("path") === false
            || $this->section->offsetExists("token") === false
        ) {
            return false;
        }

        return [
            "user" => $this->section->get("user"),
            "path" => $this->section->get("path"),
            "token" => $this->section->get("token")
        ];
    }
}
