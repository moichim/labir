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
        $tags = null;
        $access = null;

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
                if (isset($data['tags'])) {
                    $tags = $data['tags'];
                }
                // Nově: access je volitelný objekt, obsahuje show a may_have_files
                if (isset($data['access']) && is_array($data['access'])) {
                    $access = $data['access'];
                }
            }
        } else {
            throw new Exception( 'Invalid request body format. Expected JSON string.', 400);
        }
        
        $this->storeData('request', $requestData);
        $result = $this->scanner->folder->createFolder($parentSlug, $name, $description, $meta, $tags, $access);
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

    /**
     * Aktualizace složky (název, popis, meta, přesun, tagy)
     * 
     * Očekává JSON body s libovolnou kombinací:
     *  - name: nový název složky (string, volitelné)
     *  - description: nový popis složky (string, volitelné)
     *  - meta: objekt s metadaty (volitelné)
     *  - move: true/false (přejmenuje složku, pokud je true a name zadáno)
     *  - addTags: objekt s tagy k přidání (volitelné, klíč = slug, hodnota = objekt tagu)
     *  - removeTags: pole klíčů/slugů tagů k odebrání (volitelné)
     *
     * Výsledek obsahuje aktualizované informace o složce.
     *
     * @return void
     * @throws Exception pokud je request nevalidní
     */
    public function actionUpdate(): void
    {

        // --- 1. Získání slug aktuální složky ---
        $parentSlug = $this->scanner->getBasePath();
        
        // --- 2. Získání a dekódování requestu ---
        $request = $this->getHttpRequest();
        $requestData = $request->getRawBody();
        $name = null;
        $description = null;
        $meta = [];
        $move = false;
        $addTags = null;
        $removeTags = null;
        
        // --- 3. Zpracování vstupních dat z JSON body ---
        if (is_string($requestData) && strlen($requestData) > 0) {
            $data = json_decode($requestData, true);
            if (is_array($data)) {
                // Název složky
                if (isset($data['name']) && is_string($data['name'])) {
                    $name = $data['name'];
                }
                // Popis složky
                if (isset($data['description']) && is_string($data['description'])) {
                    $description = $data['description'];
                }
                // Metadata
                if (isset($data['meta'])) {
                    $meta = is_array($data['meta']) ? $data['meta'] : [];
                }
                // Přesun složky (přejmenování)
                if (isset($data['move']) && $data['move'] === true) {
                    $move = true;
                }
                // Přidání tagů
                if (isset($data['addTags'])) {
                    $addTags = $data['addTags'];
                }
                // Odebrání tagů
                if (isset($data['removeTags'])) {
                    $removeTags = $data['removeTags'];
                }
            }
        }

        // --- 4. Zavolání updateFolderContent s předanými parametry ---
        $result = $this->scanner->folder->updateFolderContent(
            $parentSlug, 
            $name, 
            $description, 
            $meta, 
            $move, 
            $addTags, 
            $removeTags
        );

        // --- 5. Uložení výsledku a odpověď ---
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

    /**
     * Aktualizace metadat souboru (label, description, tagy, analýzy)
     * @param string $path Cesta ke složce (povinné, z parametru akce)
     * @param string $file Název souboru (povinné, z parametru akce)
     * V POST body pouze update data (viz výše)
     */
    public function actionUpdatefile(string $path, string $file): void
    {
        if (!$path || !$file) {
            throw new Exception('Missing or invalid path or file parameter.', 400);
        }
        $request = $this->getHttpRequest();
        $requestData = $request->getRawBody();
        if (!is_string($requestData) || strlen($requestData) === 0) {
            throw new Exception('Invalid request body format. Expected JSON string.', 400);
        }
        $data = json_decode($requestData, true);
        if (!is_array($data)) {
            throw new Exception('Invalid JSON body.', 400);
        }
        // Najdi soubor v dané složce
        $lrc = $this->scanner->folder->getFile($path, $file);
        if (!$lrc) {
            throw new Exception('File not found.', 404);
        }
        // Proveď update
        $lrc->update([
            'label' => $data['label'] ?? null,
            'description' => $data['description'] ?? null,
            'addTags' => $data['addTags'] ?? null,
            'removeTags' => $data['removeTags'] ?? null,
            'addAnalyses' => $data['addAnalyses'] ?? null,
            'removeAnalyses' => $data['removeAnalyses'] ?? null,
        ]);
        $this->storeData('file', $lrc->getInfo());
        $this->markSuccess();
        $this->respond();
    }
}
