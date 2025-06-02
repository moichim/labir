<?php

declare(strict_types=1);

namespace App\Core;

use Exception;

final class Access
{
    protected string $currentPath;
    protected array $currentAccess;

    public function __construct(
        protected Scanner $scanner
    ) {

        // Get the current path
        $currentPath = $this->scanner->getBasePath();

        // Calculate the access for the current path
        $this->currentAccess = $this->getFolderAccess( $currentPath );

        // Store the current path
        $this->currentPath = $currentPath;

    }

    public function validateCurrentFolder() {

        // If get, check only the current route show access
        if ( $this->scanner->getRequest()->isMethod( "GET" ) ) {

            // Proceed only when the folder is hidden
            if ( $this->currentAccess["show"] === false ) {

                // If the user is logged out, throw
                if ( ! $this->scanner->tokenService->isLoggedin() ) {
                    throw new Exception( "You need to be logged in to see this folder" );
                }

                

                // If the user is logged in, but there is no token in the get method, throw
                else if ( in_array( "token", $this->scanner->getRequest()->getQuery() ) ) {
                    throw new Exception( "You are logged in, but no token was passed with the request!" );
                }

                // if the current user does not have access to the current folder, throw
                else {

                    $query = $this->scanner->getRequest()->getQuery();
                    $token = $query["token"];
                    $this->scanner->tokenService->validateIdentity(
                        $this->currentPath,
                        $token
                    );

                }

            }

        }


        // If post, check if the user is authenticated


        if ( $this->currentAccess[ "show" ] === false ) {

        }

    }



    public function getFolderAccess(string $path): array
    {

        // Whenever asking for access to the current path, return the access calculated in the constructor
        if ( isset( $this->currentPath ) && trim( $path, "/" ) === $this->currentPath ) {
            return $this->currentAccess;
        }


        $users = [];
        $currentPath = trim($path, "/\\");

        $show = true;

        while (
            $currentPath !== ""
            && $currentPath !== "."
            && $currentPath !== DIRECTORY_SEPARATOR
            && $currentPath !== null
        ) {

            $accessData = $this->scanner->file->getNeonContentByRelativePath($currentPath, "access");

            if ($accessData && is_array($accessData) && isset($accessData["users"])) {

                foreach ($accessData["users"] as $user) {
                    $this->storeOrOverrideUser($users, $user);
                }


                if (isset($accessData["show"]) && ($accessData["show"] === false)) {
                    $show = false;
                }
            }

            $currentPath = dirname($currentPath);
        }

        return [
            "show" => $show,
            "users" => $users
        ];
    }


    protected function validateUser(array $user): array|false
    {

        if (
            isset($user["name"])
            && isset($user["password"])
        ) {
            return $user;
        }

        return false;
    }


    protected function storeOrOverrideUser(array &$users, array $user)
    {

        if (! $this->validateUser($user)) {
            return false;
        }

        $users[$user["name"]] = $user;

        return $users;

    }


    public function userMayReadFolder(
        string $path,
        string $user
    ): bool {

        $access = $this->getFolderAccess($path);

        // If the folder is visible, return true
        if ( $access[ "show" ] === true ) {
            return true;
        }

        // If the folder is invisible, check the ucrrent user
        if ( array_key_exists( $user, $access["users"] ) ) {
            return $access["users"][$user]["name"] === $user;
        }

        // Otherwise return false
        return false;
    }

    public function userMayWriteToFolder(
        string $path,
        string $user
    ): bool {

        $access = $this->getFolderAccess( $path );

        return array_key_exists( $user, $access["users"] );

    }
}
