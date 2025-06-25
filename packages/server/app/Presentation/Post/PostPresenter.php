<?php

declare(strict_types=1);

namespace App\Presentation\Post;

use App\Presentation\Core\BasePresenter;

final class PostPresenter extends BasePresenter
{


    public function startup(): void
    {

        parent::startup();
    }

    /** 
     * Information about a folder, eventually about its subfolders and files.
     * The basic route called whenever there is no action specified.
     */
    public function actionDefault(
        ?string $path = null
    ): void {


        $this->storeData("path", $path);
        $this->storeData("message", "The test request was successfull, but nothing happened.");

        $this->markSuccess();

        $this->respond();
    }


    public function actionRename(string $name): void
    {
        try {
            $folder = $this->scanner->folder;
            $slug = $this->scanner->getBasePath();
            $result = $folder->renameFolder($slug, $name);
            // Přidej info o nové složce
            $result['info'] = $folder->getInfo($result['newSlug']);
            $this->storeData('result', $result);
            $this->markSuccess();
        } catch (\Throwable $e) {
            $this->markError($e->getMessage());
        }
        $this->respond();
    }

    public function actionCreate(string $name, ?string $description = null): void
    {
        $parentSlug = $this->scanner->getBasePath();
        $result = $this->scanner->folder->createFolder($parentSlug, $name, $description);
        $this->storeData('result', $result);
        $this->markSuccess();
        $this->respond();
    }

    public function actionDelete(): void
    {
        $slug = $this->scanner->getBasePath();
        $result = $this->scanner->folder->deleteFolder($slug);
        $this->storeData('result', $result);
        $this->markSuccess();
        $this->respond();
    }
}
