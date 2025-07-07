<?php

declare(strict_types=1);

namespace App\Presentation\Core;

use App\Core\Scanner;
use Nette;
use Nette\Application\UI\Presenter;
use Nette\Application\Request;
use Nette\Application\Response;
use Nette\Application\Responses\JsonResponse;
use Nette\DI\Attributes\Inject;

/**
 * Základní presenter pro celou aplikaci
 */
abstract class BasePresenter extends Presenter
{

    protected string $version = "0.1.0";

    /** @var array */
    protected array $json = [
        'success' => false,
        'data' => [],
        'colophon' => []
    ];

    protected ?string $path = null;
    protected ?string $dataPath = null;
    protected ?string $dataUrl = null;

    #[Inject]
    public Scanner $scanner;

    public final function run(Request $request): Response
    {
        try {
            return parent::run($request);
        } catch (\Throwable $e) {
            $this->handleError($e);
            return $this->getResponse();
        }
    }


    /** Vrací poslední response (použito v run) */
    protected final function getResponse(): \Nette\Application\Response
    {
        return new JsonResponse($this->json);
    }



    public function startup()
    {
        parent::startup();

        $request = $this->getRequest();
        $params = $request->getParameters();
        $path = $params["path"];

        if ($path === null || $path === "") {
            // throw new Exception('Path parameter is required.', 400);
        } else {
            $this->path = $path;
            $this->dataPath = $this->getPath($path);
        }

        // $this->json["time"] = time() * 1000;

        // $this->storeDebug( "path", $path );

        /*
        $this->storeDebug("nette", [
            "class" => get_class($this),
            "params" => $params,
            "user" => $this->scanner->authorisation->getIdentity(),
            "loggedIn" => $this->scanner->authorisation->isLoggedin(),
            // "users" => $this->scanner->access->getUsers(),
            // "folders" => $this->scanner->access->getFolders()
            // "access" => $this->scanner->access->getFolderAccess($this->path)
        ]);
        */

        $this->json["colophon"] = [
            "time" => time() * 1000,
            "version" => $this->version,
            "path" => $this->path,
            "action" => $this->getAction()
        ];

        $this->scanner->access->validateCurrentFolder();
    }

    protected function storeData(string $key, mixed $value): void
    {
        if (!isset($this->json['data'])) {
            $this->json['data'] = [];
        }
        $this->json['data'][$key] = $value;
    }


    protected function storeDebug(string $key, mixed $value): void
    {
        if (!isset($this->json['_debug'])) {
            $this->json['_debug'] = [];
        }
        $this->json['_debug'][$key] = $value;
    }



    protected function markSuccess(string $message): void
    {
        $this->json['success'] = true;
        $this->json['message'] = $message;
        $this->json['code'] = 200; // HTTP OK
    }


    public function handleError(\Throwable $exception): void
    {
        $this->json["success"] = false;
        // unset( $this->json["data"] );
        $this->json["message"] = $exception->getMessage();
        $this->json["code"] = $exception->getCode();
    }


    protected final function respond()
    {
        $this->sendJson($this->json);
    }

    protected function getPath(string $path): string
    {
        return DATA_DIR . DIRECTORY_SEPARATOR . $path;
    }

    protected function getUrl(string $path): string
    {
        if ($this->dataUrl === null) {
            $this->dataUrl = $this->getHttpRequest()->getUrl()->getBaseUrl();
        }
        return rtrim($this->dataUrl, '/') . '/data/' . ltrim($path, '/\\');
    }

    protected function formatMessage( string $message, ...$subjects ): string {
        return sprintf( $message, ...$subjects );
    }
}
