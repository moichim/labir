<?php

declare(strict_types=1);

namespace App\Core;

use Exception;

final class Access
{
    protected string $currentPath;
    protected array $currentAccess;
    protected array $users = [];
    protected array $folders = [];

    public function __construct(
        protected Scanner $scanner
    ) {
        $this->users = $this->getUsers();
        $this->folders = $this->usersToFolders($this->users);

        // Get the current path
        $currentPath = $this->scanner->getBasePath();

        // Calculate the access for the current path
        $this->currentAccess = $this->getFolderAccess($currentPath);

        // Store the current path
        $this->currentPath = $currentPath;
    }

    public function getUsers(): array
    {

        if ( count( $this->users ) > 0 ) {
            return $this->users;
        }

        $usersFile = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . '_users.json';
        if (file_exists($usersFile)) {
            $json = file_get_contents($usersFile);
            $data = json_decode($json, true);
            if (isset($data['users']) && is_array($data['users'])) {
                return $data['users'];
            }
        }
        return [];
    }

    public function getFolders(): array {
        return $this->folders;
    }

    protected function usersToFolders(array $users): array
    {
        $folders = [];
        foreach ($users as $username => $user) {
            if (isset($user['access']) && is_array($user['access'])) {
                foreach ($user['access'] as $folder) {
                    $folderKey = trim($folder, '/');
                    if (!isset($folders[$folderKey])) {
                        $folders[$folderKey] = [];
                    }
                    $folders[$folderKey][$username] = $user;
                }
            }
        }
        return $folders;
    }

    public function validateCurrentFolder()
    {

        // If get, check only the current route show access
        if ($this->scanner->getRequest()->isMethod("GET")) {

            // Proceed only when the folder is hidden
            if ($this->currentAccess["show"] === false) {

                // If the user is logged out, throw
                if (! $this->scanner->authorisation->isLoggedin()) {
                    throw new Exception("You need to be logged in to see this folder", 401);
                } 

                // Logged in users need to see the current folder
                else {

                    $identity = $this->scanner->authorisation->getIdentity();

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
                if ( ! $this->scanner->authorisation->isLoggedin() ) {
                    throw new Exception( "You need to be logged in to perform this action.", 401 );
                }

                // Kontrola explicitního uživatele pouze při POST
                if ($this->scanner->getRequest()->isMethod("POST")) {
                    $identity = $this->scanner->authorisation->getIdentity();
                    $user = $identity ? $identity["user"] : null;

                    if (!$this->userMayReadFolder($this->currentPath, $user)) {
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

        $currentPath = trim($path, "/\\");
        $paths = [];
        $counter = 0;
        $show = true;
        $users = [];
        $may_have_files = false;

        // Zjisti show a may_have_files z access.json v dané složce (pouze aktuální složka)
        $accessData = $this->scanner->folder->readJson($currentPath, "access");
        $paths[$currentPath] = $accessData;
        if ($accessData && is_array($accessData)) {
            $counter++;
            if (isset($accessData["show"]) && ($accessData["show"] === false)) {
                $show = false;
            }
            if (array_key_exists("may_have_files", $accessData)) {
                $may_have_files = (bool)$accessData["may_have_files"];
            } else {
                $may_have_files = false;
            }
        }

        // Zjisti show z access.json v nadřazených složkách (ale už neřeš may_have_files)
        $searchPath = dirname($currentPath);
        while (true) {
            if ($searchPath === "" || $searchPath === "." || $searchPath === DIRECTORY_SEPARATOR || $searchPath === null) {
                break;
            }
            $accessData = $this->scanner->folder->readJson($searchPath, "access");
            $paths[$searchPath] = $accessData;
            if ($accessData && is_array($accessData)) {
                $counter++;
                if (isset($accessData["show"]) && ($accessData["show"] === false)) {
                    $show = false;
                }
            }
            $searchPath = dirname($searchPath);
            if ($searchPath === "." || $searchPath === DIRECTORY_SEPARATOR) {
                $searchPath = "";
            }
        }

        // Najdi uživatele podle cesty v $folders (shoda začátku klíče)
        foreach ($this->folders as $folderKey => $folderUsers) {
            // Pokud je klíč prázdný, je to root a platí pro všechny složky
            if ($folderKey === '' || str_starts_with($currentPath, $folderKey)) {
                foreach ($folderUsers as $username => $user) {
                    $users[$username] = $user;
                }
            }
        }

        return [
            "show" => $show,
            "users" => $users,
            "paths" => $paths,
            "counter" => $counter,
            "may_have_files" => $may_have_files
        ];
    }


    protected function validateUser(array $user): array|false
    {

        if (
            isset($user["login"])
            && $user["login"] !== ""
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

        $users[$user["login"]] = $user;

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

        // If the folder is invisible, check the current user
        if (array_key_exists($user, $access["users"])) {
            return $access["users"][$user]["login"] === $user;
        }

        // Pokud je složka skrytá a uživatel není zadán, přístup odepři
        if ($user === null) {
            return false;
        }

        // Otherwise return false
        return false;
    }

    /**
     * Zjistí, zda uživatel může spravovat složky v dané složce (tj. vytvářet/přejmenovávat/mazat podsložky).
     * Uživatel musí být uveden v seznamu uživatelů a složka nesmí mít may_have_files=true.
     */
    public function userMayManageFoldersIn(string $path, string $user): bool
    {
        $access = $this->getFolderAccess($path);
        return isset($user) && $user !== '' && array_key_exists($user, $access["users"]) && ($access["may_have_files"] === false);
    }

    /**
     * Zjistí, zda uživatel může spravovat soubory v dané složce (tj. nahrávat/mazat soubory).
     * Uživatel musí být uveden v seznamu uživatelů a složka musí mít may_have_files=true.
     */
    public function userMayManageFilesIn(string $path, string $user): bool
    {
        $access = $this->getFolderAccess($path);
        return isset($user) && $user !== '' && array_key_exists($user, $access["users"]) && ($access["may_have_files"] === true);
    }

    /**
     * Vrátí uživatele podle loginu, bez hesla a access (pokud není withAccess true)
     * Přidá is_root: true pokud má uživatel přístup ke kořenové složce (tj. má v access '/').
     */
    public function getUser(string $login, bool $withAccess = false): ?array
    {
        $users = $this->getUsers();
        if (!isset($users[$login])) {
            return null;
        }
        $user = $users[$login];
        unset($user["password"]);
        if (!$withAccess) {
            unset($user["access"]);
        }
        // is_root: true pokud má access na '/'
        $user["is_root"] = isset($users[$login]["access"]) && in_array("/", $users[$login]["access"], true);
        return $user;
    }
}
