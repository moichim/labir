<?php

declare(strict_types=1);

namespace App\Core;

use Nette\Http\IRequest;
use Nette\Routing\Router;
use Nette\Http\UrlScript;

class CustomRouter implements Router
{

    public function __construct(
        protected Scanner $scanner,
        protected IRequest $request
    ) {
        // Initialization if needed
    }

    public function match(IRequest $request): ?array
    {

        $url = $request->getUrl();
        $path = $url->getPath();


        // Make sure the path is provided
        if ($path == null || $path === "" || $path === "/") {
            return $this->error("Path was not provided.", 400);
        }

        // Make sure the given path corresponds to an existing folder
        if (! $this->scanner->folder->exists($path)) {
            return $this->error("Path does not exist.", 404);
        }

        $presenter = null;
        $action = null;

        $params = $request->getQuery();

        $parameters = [
            "path" => $path,
            "params" => $params
        ] + $params;

        if ( isset( $params["action"] ) ) {

            if ( $request->isMethod( "GET" ) ) {

                if ( $params["action"] === "files" ) {
                    $presenter = "Get";
                    $action = "files";
                }

            } else if ( $request->isMethod("POST") ) {

                if ( $params["action"] === "login" ) {
                    $presenter = "Auth";
                    $action = "login";
                }

            }

        }


        // No parameters => show info about the folder
        if ( count( $params ) === 0 && $request->isMethod('GET') ) {
            $presenter = "Get";
            $action = "default";
        }


        // Return results
        if ($presenter === null || $action === null) {
            return $this->error("Route not found", 404);
        }

        return [
            'presenter' => $presenter,
            'action' => $action,
        ] + $parameters;
    }

    public function constructUrl(array $params, UrlScript $refUrl): ?string
    {
        // ...
        return null;
    }

    protected function error(
        string $message,
        int $code
    ): array {
        return [
            'presenter' => 'Error',
            'action' => 'default',
            'message' => $message,
            'code' => $code
        ];
    }
}
