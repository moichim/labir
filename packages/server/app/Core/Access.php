<?php

declare(strict_types=1);

namespace App\Core;

final class Access
{

    public function __construct(
        protected Scanner $scanner
    ) {}

    public function getFolderAccess(string $path): array
    {


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

        /*
        // Check if the user exists
        if (array_key_exists($user["name"], $users)) {

            $existingUser = $users[$user["name"]];

            $existingUser["read"] = $existingUser["read"] || $user["read"];
            $existingUser["write"] = $existingUser["write"];

            $users[$user["name"]] = $existingUser;
        } else {
            $users[$user["name"]] = $user;
        }

        return $users;

        */
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
