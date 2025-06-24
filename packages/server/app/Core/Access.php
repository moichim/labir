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
        $this->currentAccess = $this->getFolderAccess($currentPath);

        // Store the current path
        $this->currentPath = $currentPath;
    }

    public function validateCurrentFolder()
    {

        // If get, check only the current route show access
        if ($this->scanner->getRequest()->isMethod("GET")) {

            // Proceed only when the folder is hidden
            if ($this->currentAccess["show"] === false) {

                // If the user is logged out, throw
                if (! $this->scanner->tokenService->isLoggedin()) {
                    throw new Exception("You need to be logged in to see this folder", 401);
                } 

                // Logged in users need to see the current folder
                else {

                    $identity = $this->scanner->tokenService->getIdentity();

                    $maySee = $identity
                        ? $this->userMayReadFolder($this->currentPath, $identity["user"])
                        : false;

                    if ( ! $maySee ) {
                        throw new Exception("You do not have access to this folder", 403);
                    }

                }
            }
        }


        // If post, check if the user is authenticated
        else if ( $this->scanner->getRequest()->isMethod( "POST" ) ) {

            $query = $this->scanner->getRequest()->getQuery();

            // Login is the only POST route accessible from outside
            if ( array_key_exists( "action", $query ) && $query["action"] === "login" ) {

                

            } else {

                // If the user is not logging in, check if the user is logged in
                if ( ! $this->scanner->tokenService->isLoggedin() ) {
                    throw new Exception( "You need to be logged in to perform this action.", 401 );
                }

                // Kontrola explicitního uživatele pouze při POST
                if ($this->scanner->getRequest()->isMethod("POST")) {
                    $identity = $this->scanner->tokenService->getIdentity();
                    $user = $identity ? $identity["user"] : null;

                    $access = $this->getFolderAccess($this->currentPath);

                    if (!($user && array_key_exists($user, $access["users"]))) {
                        throw new Exception("You do not have write access to this folder", 403);
                    }
                }
            }

        } else {
            throw new Exception( "You do what you do not need to do! Only GET and POST allowed.", 401 );
        }


    }



    public function getFolderAccess(string $path): array
    {
        // Whenever asking for access to the current path, return the access calculated in the constructor
        if (isset($this->currentPath) && trim($path, "/") === $this->currentPath) {
            return $this->currentAccess;
        }

        $users = [];
        $currentPath = trim($path, "/\\");
        $paths = [];
        $counter = 0;

        $show = true;

        // Nový cyklus: vždy zkusíme i root (prázdný string)
        while (true) {

            $accessData = $this->scanner->file->getNeonContentByRelativePath($currentPath, "access");

            $paths[ $currentPath ] = $accessData;

            if ($accessData && is_array($accessData)) {

                $counter++;

                if (isset($accessData["users"])) {
                    foreach ($accessData["users"] as $user) {
                        if (!isset($users[$user["name"]])) {
                            $this->storeOrOverrideUser($users, $user);
                        }
                    }
                }

                if (isset($accessData["show"]) && ($accessData["show"] === false)) {
                    $show = false;
                }
            }



            // Pokud jsme už v rootu, skonči
            if ($currentPath === "" || $currentPath === "." || $currentPath === DIRECTORY_SEPARATOR || $currentPath === null) {
                break;
            }

            $currentPath = dirname($currentPath);
            // dirname('') vrací '.', takže cyklus skončí v dalším kole
            if ($currentPath === "." || $currentPath === DIRECTORY_SEPARATOR) {
                $currentPath = "";
            }
        }

        return [
            "show" => $show,
            "users" => $users,
            "paths" => $paths,
            "counter" => $counter
        ];
    }


    protected function validateUser(array $user): array|false
    {

        if (
            isset($user["name"])
            && $user["name"] !== ""
            && isset($user["password"])
            && strlen($user["password"]) > 5
        ) {
            return $user;
        }

        return false;
    }


    protected function storeOrOverrideUser(array &$users, array $user)
    {

        if (! $this->validateUser($user)) {
            return $users;
        }

        $users[$user["name"]] = $user;

        return $users;
    }


    public function userMayReadFolder(
        string $path,
        ?string $user = null
    ): bool {

        $access = $this->getFolderAccess($path);

        // If the folder is visible, return true
        if ($access["show"] === true) {
            return true;
        }

        // If the folder is invisible, check the ucrrent user
        if (array_key_exists($user, $access["users"])) {
            return $access["users"][$user]["name"] === $user;
        }

        // Pokud je složka skrytá a uživatel není zadán, přístup odepři
        if ($user === null) {
            return false;
        }

        // Otherwise return false
        return false;
    }

    public function userMayWriteToFolder(
        string $path,
        string $user
    ): bool {

        $access = $this->getFolderAccess($path);

        return array_key_exists($user, $access["users"]);
    }
}
