<?php

declare(strict_types=1);

namespace App\Presentation\Get;

use App\Presentation\Core\BasePresenter;

final class GetPresenter extends BasePresenter
{

    /** 
     * Information about a folder, eventually about its subfolders and files.
     * The basic route called whenever there is no action specified.
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
     * Action: files
     * 
     * Retrieves files from one folder, filtered 
     * by their parameters.
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
}
