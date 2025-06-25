<?php

declare(strict_types=1);

namespace App\Presentation\Post;

use App\Presentation\Core\BasePresenter;

use \Exception;

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


    public function actionCreate(): void
    {
        $parentSlug = $this->scanner->getBasePath();
        $request = $this->getHttpRequest();
        $requestData = $request->getRawBody();

        $name = null;
        $description = null;
        $meta = [];

        // Kontrola data v $post
        if (is_string($requestData) && strlen($requestData) > 0) {

            $data = json_decode($requestData, true);

            // Data musí být pole
            if (is_array($data)) {

                // Jméno složky je povinné
                if (isset($data['name']) && is_string($data['name'])) {
                    $name = $data['name'];
                } else { throw new Exception('Folder name is required.', 400); }

                // Popiiska je volitelná
                if (isset($data['description']) && is_string($data['description'])) {
                    $description = $data['description'];
                }

                // Metadata jsou volitelná
                if (isset($data['meta'])) {
                    $meta = is_array($data['meta']) ? $data['meta'] : [];
                }
            }
        } else {
            throw new Exception( 'Invalid request body format. Expected JSON string.', 400);
        }
        
        $this->storeData('request', $requestData);
        $result = $this->scanner->folder->createFolder($parentSlug, $name, $description, $meta);
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

    public function actionUpdate(): void
    {
        $parentSlug = $this->scanner->getBasePath();
        $request = $this->getHttpRequest();
        $requestData = $request->getRawBody();
        $name = null;
        $description = null;
        $meta = [];
        $move = false;

        if (is_string($requestData) && strlen($requestData) > 0) {
            $data = json_decode($requestData, true);
            if (is_array($data)) {
                if (isset($data['name']) && is_string($data['name'])) {
                    $name = $data['name'];
                }
                if (isset($data['description']) && is_string($data['description'])) {
                    $description = $data['description'];
                }
                if (isset($data['meta'])) {
                    $meta = is_array($data['meta']) ? $data['meta'] : [];
                }
                if (isset($data['move']) && $data['move'] === true) {
                    $move = true;
                }
            }
        }

        $slug = $parentSlug;
        $result = $this->scanner->folder->updateFolderContent($slug, $name, $description, $meta, $move);
        $this->storeData('result', $result);
        $this->markSuccess();
        $this->respond();
    }

    public function actionMove(): void
    {
        $slug = $this->scanner->getBasePath();
        $request = $this->getHttpRequest();
        $requestData = $request->getRawBody();
        $targetParent = null;

        if (is_string($requestData) && strlen($requestData) > 0) {
            $data = json_decode($requestData, true);
            if (is_array($data) && isset($data['target']) && is_string($data['target'])) {
                $targetParent = $data['target'];
            } else {
                throw new Exception('Missing or invalid target folder.', 400);
            }
        } else {
            throw new Exception('Invalid request body format. Expected JSON string.', 400);
        }

        $result = $this->scanner->folder->moveFolder($slug, $targetParent);
        $this->storeData('result', $result);
        $this->markSuccess();
        $this->respond();
    }
}
