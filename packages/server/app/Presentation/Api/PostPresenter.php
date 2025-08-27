<?php

declare(strict_types=1);

namespace App\Presentation\Post;

use App\Presentation\Core\BaseApiPresenter;

use \Exception;
use Nette\Application\Attributes\Requires;

#[Requires(methods: ['POST'])]
final class PostPresenter extends BaseApiPresenter
{


    public function startup(): void
    {

        parent::startup();
    }

    /**
     * Základní informace o složce (a jejích podsložkách a souborech).
     * GET {cesta}
     * Přístup: kdokoli s právem číst složku (včetně anonymních, pokud je složka veřejná)
     */
    public function actionDefault(
        ?string $path = null
    ): void {


        $this->storeData("path", $path);
        // $this->storeData("message", "The test request was successfull, but nothing happened.");

        $this->markSuccess( "The test request was successfull." );

        $this->respond();
    }

    /**
     * Vytvoření nové podsložky v aktuální složce.
     * POST {cesta}?action=create
     * Přístup: pouze uživatel s právem zápisu do složky (typicky přihlášený uživatel nebo admin)
     * Parametry v POST body: viz README
     */
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
        $this->markSuccess(
            $this->formatMessage(
                "Folder '%s' created successfully in '%s'.",
                $result['name'] ?? 'unknown',
                $parentSlug
            )
        );
        $this->respond();
    }

    /**
     * Smazání aktuální složky (včetně obsahu).
     * POST {cesta}?action=delete
     * Přístup: pouze uživatel s právem mazat složku (typicky admin nebo vlastník)
     */
    public function actionDelete(): void
    {
        $slug = $this->scanner->getBasePath();
        $result = $this->scanner->folder->deleteFolder($slug);
        $this->storeData('result', $result);
        $this->markSuccess(
            $this->formatMessage(
                "Folder '%s' deleted successfully.",
                $result["deleted"] ?? 'unknown' // Pokud není vráceno jméno, použijeme 'unknown'
            )
        );
        $this->respond();
    }

    /**
     * Úprava vlastností aktuální složky (název, popis, metadata, tagy, přesun).
     * POST {cesta}?action=update
     * Přístup: pouze uživatel s právem zápisu do složky (typicky přihlášený uživatel nebo admin)
     * Parametry v POST body: viz README
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
        $this->markSuccess(
            $this->formatMessage(
                "Folder '%s' updated successfully.",
                $result['name'] ?? 'unknown' // Pokud není vráceno jméno, použijeme 'unknown'
            )
        );
        $this->respond();
    }

    /**
     * Přesun aktuální složky do jiné složky.
     * POST {cesta}?action=move
     * Přístup: pouze uživatel s právem zápisu do obou složek (typicky admin nebo vlastník)
     * Parametry v POST body: viz README
     */
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
        $this->markSuccess(
            $this->formatMessage(
                "Folder '%s' moved successfully to '%s'.",
                $result['name'] ?? 'unknown',
                $targetParent
            )
        );
        $this->respond();
    }

    /**
     * Úprava metadat konkrétního souboru v aktuální složce.
     * POST {cesta}?action=updatefile&file={soubor}
     * Přístup: pouze uživatel s právem zápisu do složky (typicky přihlášený uživatel nebo admin)
     * Parametry v POST body: viz README
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
            'clearTags' => $data['clearTags'] ?? null,
            'clearAnalyses' => $data['clearAnalyses'] ?? null,
        ]);
        $this->storeData('file', $lrc->getInfo());
        $this->markSuccess(
            $this->formatMessage(
                "File '%s' in folder '%s' updated successfully.",
                $file,
                $path
            )
        );
        $this->respond();
    }


    public function actionUploadfile(
        string $path
    ): void {
        // Získání uploadovaných souborů (Nette: $this->getHttpRequest()->getFile('lrc'), ...)
        $lrcFile = $this->getHttpRequest()->getFile('lrc');
        $visualFile = $this->getHttpRequest()->getFile('visual');
        $previewFile = $this->getHttpRequest()->getFile('preview');

        // Získání metadat z POST (label, description, tags)
        $label = $this->getHttpRequest()->getPost('label');
        $description = $this->getHttpRequest()->getPost('description');
        $tags = $this->getHttpRequest()->getPost('tags');
        if (is_string($tags)) {
            $tags = json_decode($tags, true);
        }

        // Nahraj soubory přes Folder::uploadFile (ověření accessu je uvnitř)
        $result = $this->scanner->folder->uploadFile(
            $path,
            $lrcFile,
            $visualFile,
            $previewFile,
        );

        // Pokud jsou metadata, proveď update
        if ($label !== null || $description !== null || !empty($tags)) {
            $result->update([
                'label' => $label,
                'description' => $description,
                'addTags' => $tags,
            ]);
        }

        $this->storeData('file', $result->getInfo());
        $this->markSuccess(
            $this->formatMessage(
                "File '%s' uploaded successfully to folder '%s'.",
                $lrcFile ? $lrcFile->getUntrustedName() : 'unknown',
                $path
            )
        );
        $this->respond();
    }

    /**
     * Přidá komentář k souboru.
     * Přidá komentář k souboru.
     * 
     * Endpoint: POST {cesta}?action=addfilecomment&file={soubor}
     * 
     * Přístup: Pouze uživatel s právem zápisu do složky (typicky přihlášený uživatel nebo admin)
     * 
     * Parametry v těle požadavku (JSON):
     *   {
     *     "message": string // Text komentáře (povinný)
     *   }
     *
     * Poznámky:
     * - Uživatelská identita a timestamp jsou určeny serverem (nelze je podvrhnout z klienta).
     * - Komentář je bezpečně uložen, včetně informace o uživateli a času vytvoření.
     * - Návratová data obsahují aktualizované informace o souboru včetně komentářů.
     *
     * Chybové stavy:
     * - 400: Chybí nebo je neplatný parametr (path, file, message, nebo tělo není validní JSON)
     * - 404: Soubor nebyl nalezen
     *
     * Příklad volání (fetch):
     *   fetch('/api/slozka?file=example.lrc&action=addfilecomment', {
     *     method: 'POST',
     *     body: JSON.stringify({ message: 'Můj komentář' }),
     *     headers: { 'Content-Type': 'application/json' }
     *   })
     */
    public function actionFileaddcomment(string $path, string $file): void
    {
        if (!$path || !$file) {
            throw new Exception('Missing or invalid path or file parameter.', 400);
        }
        // Ověření práv uživatele na správu souborů ve složce
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity ? $identity["user"] : null; // Získání ID uživatele, pokud je přihlášen
        if (!$this->scanner->access->userMayManageFilesIn($path, $user)) {
            throw new Exception('Access denied: insufficient permissions to manage files in this folder.', 403);
        }
        $request = $this->getHttpRequest();
        $requestData = $request->getRawBody();
        if (!is_string($requestData) || strlen($requestData) === 0) {
            throw new Exception('Invalid request body format. Expected JSON string.', 400);
        }

        $data = json_decode($requestData, true);
        if (!is_array($data) || !isset($data['message']) || !is_string($data['message'])) {
            throw new Exception('Missing or invalid message.', 400);
        }

        $lrc = $this->scanner->folder->getFile($path, $file);
        if (!$lrc) {
            throw new Exception('File not found.', 404);
        }
        
        $lrc->addComment($data['message']);
        $this->storeData('file', $lrc->getInfo());
        $this->markSuccess(
            $this->formatMessage(
                "Comment added to file '%s' in folder '%s'.",
                $file,
                $path
            )
        );
        $this->respond();
    }

    /**
     * Smaže komentář podle timestampu.
     * POST {cesta}?action=deletefilecomment&file={soubor}
     * Body: { timestamp: int }
     */
    public function actionFiledeletecomment(string $path, string $file): void
    {
        if (!$path || !$file) {
            throw new Exception('Missing or invalid path or file parameter.', 400);
        }
        // Ověření práv uživatele na správu souborů ve složce
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity ? $identity["user"] : null;
        if (!$this->scanner->access->userMayManageFilesIn($path, $user)) {
            throw new Exception('Access denied: insufficient permissions to manage files in this folder.', 403);
        }
        $request = $this->getHttpRequest();
        $requestData = $request->getRawBody();
        if (!is_string($requestData) || strlen($requestData) === 0) {
            throw new Exception('Invalid request body format. Expected JSON string.', 400);
        }
        $data = json_decode($requestData, true);
        if (!is_array($data) || !isset($data['timestamp']) || !is_int($data['timestamp'])) {
            throw new Exception('Missing or invalid timestamp.', 400);
        }
        $lrc = $this->scanner->folder->getFile($path, $file);
        if (!$lrc) {
            throw new Exception('File not found.', 404);
        }
        $lrc->deleteComment($data['timestamp']);
        $this->storeData('file', $lrc->getInfo());
        $this->markSuccess(
            $this->formatMessage(
                "Comment deleted from file '%s' in folder '%s'.",
                $file,
                $path
            )
        );
        $this->respond();
    }

    /**
     * Upraví komentář podle timestampu.
     * POST {cesta}?action=updatefilecomment&file={soubor}
     * Body: { timestamp: int, message: string }
     */
    public function actionFileupdatecomment(string $path, string $file): void
    {
        if (!$path || !$file) {
            throw new Exception('Missing or invalid path or file parameter.', 400);
        }
        // Ověření práv uživatele na správu souborů ve složce
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity ? $identity["user"] : null;
        if (!$this->scanner->access->userMayManageFilesIn($path, $user)) {
            throw new Exception('Access denied: insufficient permissions to manage files in this folder.', 403);
        }
        $request = $this->getHttpRequest();
        $requestData = $request->getRawBody();
        if (!is_string($requestData) || strlen($requestData) === 0) {
            throw new Exception('Invalid request body format. Expected JSON string.', 400);
        }
        $data = json_decode($requestData, true);
        if (!is_array($data) || !isset($data['timestamp']) || !is_int($data['timestamp']) || !isset($data['message']) || !is_string($data['message'])) {
            throw new Exception('Missing or invalid timestamp or message.', 400);
        }
        $lrc = $this->scanner->folder->getFile($path, $file);
        if (!$lrc) {
            throw new Exception('File not found.', 404);
        }
        $lrc->updateComment($data['timestamp'], $data['message']);
        $this->storeData('file', $lrc->getInfo());
        $this->markSuccess(
            $this->formatMessage(
                "Comment updated in file '%s' in folder '%s'.",
                $file,
                $path
            )
        );
        $this->respond();
    }

    /**
     * Smaže všechny komentáře u souboru.
     * POST {cesta}?action=clearfilecomments&file={soubor}
     */
    public function actionFileclearcomments(string $path, string $file): void
    {
        if (!$path || !$file) {
            throw new Exception('Missing or invalid path or file parameter.', 400);
        }
        // Ověření, že uživatel je administrátor
        $identity = $this->scanner->authorisation->getIdentity();
        $user = $identity ? $identity["user"] : null;
        $userInfo = $this->scanner->access->getUser($user ?? "");
        if (!$userInfo || !(isset($userInfo["is_root"]) && $userInfo["is_root"] === true)) {
            throw new Exception('Access denied: only administrators can clear all comments.', 403);
        }
        $lrc = $this->scanner->folder->getFile($path, $file);
        if (!$lrc) {
            throw new Exception('File not found.', 404);
        }
        $lrc->clearComments();
        $this->storeData('file', $lrc->getInfo());
        $this->markSuccess(
            $this->formatMessage(
                "All comments cleared for file '%s' in folder '%s'.",
                $file,
                $path
            )
        );
        $this->respond();
    }

    /**
     * Smaže soubor včetně souvisejících souborů (JSON, preview, visual).
     * POST {cesta}?action=deletefile&file={soubor}
     * Přístup: pouze uživatel s právem mazat soubory ve složce
     */
    public function actionFiledelete(string $path, string $file): void
    {
        if (!$path || !$file) {
            throw new Exception('Missing or invalid path or file parameter.', 400);
        }

        $lrc = $this->scanner->folder->getFile($path, $file);
        if (!$lrc) {
            throw new Exception('File not found.', 404);
        }

        $lrc->delete();
        
        $this->storeData('result', $file);
        $this->markSuccess(
            $this->formatMessage(
                "File '%s' deleted successfully from folder '%s'.",
                $file,
                $path
            )
        );
        $this->respond();
    }

}
