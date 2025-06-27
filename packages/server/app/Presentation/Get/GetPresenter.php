<?php

declare(strict_types=1);

namespace App\Presentation\Get;

use App\Presentation\Core\BasePresenter;
use Exception;

final class GetPresenter extends BasePresenter
{

    /**
     * Základní informace o složce, podsložkách a souborech.
     * GET {cesta}
     * Přístup: kdokoli s právem číst složku (včetně anonymních, pokud je složka veřejná)
     */
    public function actionDefault(
        ?string $path = null
    ): void {

        $this->storeData("folder", $this->scanner->folder->getInfo($path));

        // Předání aktuálního uživatele z authorisation do getSubdirectories
        $user = $this->scanner->authorisation->getIdentity();
        $user = $user ? $user["user"] : null;
        $this->storeData("subfolders", $this->scanner->folder->getSubdirectories($path, $user));

        $this->markSuccess();

        $this->respond();
    }


    /**
     * Výpis souborů ve složce (s možností filtrování).
     * GET {cesta}?action=files
     * Přístup: kdokoli s právem číst složku (včetně anonymních, pokud je složka veřejná)
     * Parametry: from, to, tags (volitelné)
     */
    public function actionFiles(
        ?string $path,
        ?int $from = null,
        ?int $to = null,
        ?string $tags = null
    ) {

        $info = $this->scanner->folder->getInfo($path);

        $this->storeData("folder", $info);

        $tags = $tags !== null
            ? array_map(function (string $item) {
                return trim($item);
            }, explode(",", $tags))
            : null;

        $files = $this->scanner->folder->getFiles($path, $from, $to, $tags);

        $this->storeData("files", $files);

        $tags = $this->scanner->folder->matchFilesWithParentTags(
            $files,
            $info["parent_tags"]
        );

        $this->storeData("tags", $tags);

        // Výpočet time (rozsah souborů)
        $fileTimestamps = array_column($files, 'timestamp');
        $fileFrom = $fileTo = null;
        if (!empty($fileTimestamps)) {
            $fileFrom = min($fileTimestamps);
            $fileTo = max($fileTimestamps);
        }
        $this->storeData("time", [
            "files" => [
                "from" => $fileFrom,
                "to" => $fileTo
            ]
        ]);

        // Výpočet count
        $displayed = count($files);
        $this->storeData("count", [
            "displayed" => $displayed,
            "omitted" => 0,
            "total" => $displayed
        ]);

        $this->markSuccess();

        $this->respond();
    }



    /**
     * Výpis souborů z podsložek v gridu (časové řazení, tabulka).
     * GET {cesta}?action=grid
     * Přístup: kdokoli s právem číst složku (včetně anonymních, pokud je složka veřejná)
     * Parametry: from, to, tags, folders, info, by (volitelné) – viz README
     */
    public function actionGrid(
        string $path,
        ?int $from = null,
        ?int $to = null,
        ?string $tags = null,
        ?string $folders = null,
        ?bool $info = false,
        ?string $by = "hour"
    ) {

        $grid = $this->scanner->folder->createGrid($path);

        if ($from !== null) {
            $grid->setFrom($from);
        }

        if ($to !== null) {
            $grid->setTo($to);
        }

        if ($tags !== null) {
            $grid->setTags($tags);
        }

        if ($folders !== null) {
            $grid->setFolders($folders);
        }

        if ($info === true) {
            $this->storeData("folder", $this->scanner->folder->getInfo($path));
        }

        $this->storeData("grid", $grid->fetch($by));

        $this->markSuccess();

        $this->respond();
    }




    /**
     * Testovací akce (pro ladění, nemá produkční význam).
     * GET {cesta}?action=test
     * Přístup: pouze admin nebo vývojář (dle implementace)
     */
    public function actionTest(?string $path, ?string $action, ?string $id): void
    {
        $this->markSuccess();
        $this->json['data'] = [
            'message' => 'Test action executed successfully.',
            'path' => $path,
            'action' => $action,
            'id' => $id,
        ];
        $this->respond();
    }


    /**
     * Získání informací o konkrétním souboru ve složce.
     * GET {cesta}?action=file&file={soubor}
     * Přístup: kdokoli s právem číst složku (včetně anonymních, pokud je složka veřejná)
     */
    public function actionFile( ?string $path, ?string $file): void {

        $lrc = $this->scanner->folder->getFile($path, $file);

        if ( $lrc ) {
            $this->storeData( "file", $lrc->getInfo() );
        } else {
            throw new Exception( "File '$file' was not found in '$path'.", 404 );
        }

        $this->markSuccess();
        $this->respond();

    }



    /**
     * Vrátí strom složek, ke kterým má aktuální uživatel přístup (usertree) a metadata uživatele.
     * GET {cesta}?action=currentusertree
     * Přístup: pouze přihlášený uživatel smí získat svůj vlastní seznam složek
     */
    public function actionCurrentusertree(?string $path = null): void
    {
        $identity = $this->scanner->authorisation->getIdentity();
        if (!$identity || !$identity["user"]) {
            throw new Exception("You must be logged in to access this resource.", 401);
        }
        $login = $identity["user"];
        $usertree = $this->scanner->folder->getUserFolders($login);
        $user = $this->scanner->access->getUser($login);
        if ($user) {
            unset($user["access"], $user["password"], $user["email"]);
            $user["entity"] = "user";
        }
        $this->storeData("tree", $usertree);
        $this->storeData("user", $user);
        $this->markSuccess();
        $this->respond();
    }

}
