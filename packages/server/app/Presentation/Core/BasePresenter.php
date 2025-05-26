<?php

declare(strict_types=1);

namespace App\Presentation\Core;

use Exception;
use Nette;
use Nette\Application\UI\Presenter;
use Nette\Application\Request;
use Nette\Application\Response;
use Nette\Application\Responses\JsonResponse;

/**
 * Základní presenter pro celou aplikaci
 */
abstract class BasePresenter extends Presenter {

    /** @var array */
    protected array $json = [
        'success' => false,
        'data' => []
    ];

    protected ?string $path = null;

    public final function run( Request $request ): Response {
        try {
            return parent::run( $request );
        } catch ( \Throwable $e ) {
            $this->handleError( $e );
            return $this->getResponse();
        }
    }


    /** Vrací poslední response (použito v run) */
    protected final function getResponse(): \Nette\Application\Response
    {
        return new JsonResponse($this->json);
    }



public function startup() {
    parent::startup();

    $request = $this->getRequest();
    $path = $request->getParameter("path");

    if ( $path === null || $path === "" ) {
        throw new Exception('Path parameter is required.', 400);
    } else {
        $this->path = $path;
        $this->json['path'] = $this->getParameter("wwwDir");
    }
}



    protected function markSuccess(): void {
        $this->json['success'] = true;
    }

    public function handleError( \Throwable $exception ): void {
        $this->json["success"] = false;
        $this->json["data"] = [];
        $this->json["error"] = $exception->getMessage();
        $this->json["code"] = $exception->getCode();
    }


    protected function respond() {
        $this->sendJson( $this->json );
    }

}