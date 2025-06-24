<?php

declare(strict_types=1);

namespace App\Core;

use Nette\Http\IRequest;
use Nette\Routing\Router;
use Nette\Http\UrlScript;


/**
 * Tato třída vezme REQUEST, extrahuje z něj parametry a přiřadí je do prezenteru.
 * 
 * Neprobíhá zde žádná validace, pouze se zkontroluje, zda je platná cesta k adresáři (je to první parametr).
 */
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

        $params = $this->parseParams($request->getQuery());

        $parameters = [
            "path" => $path,
            "url" => $url->getAbsoluteUrl(),
            "params" => $params
        ] + $params;


        // Make sure the path is provided
        if ($path == null || $path === "" || $path === "/") {

            return $this->error("Path was not provided.", 400);
        }

        // var_dump( $path );

        // Make sure the given path corresponds to an existing folder
        if (! $this->scanner->folder->exists($path)) {

            return $this->error("Folder does not exist.", 404);
        }

        $presenter = null;
        $action = null;


        // Základní logika: presenter podle metody, action podle parametru nebo default
        $presenter = $request->isMethod('POST') ? 'Post' : 'Get';
        $action = $params['action'] ?? 'default';

        // Speciální případ: login
        if ($presenter === 'Post' && $action === 'login') {
            $presenter = 'Auth';
        }

        // Speciální případy pro GET
        if ($presenter === 'Get' && isset($params['action'])) {
            if ($params['action'] === 'files' || $params['action'] === 'grid') {
                $action = $params['action'];
            }
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
            'message' => "Router Error: " . $message,
            'code' => $code
        ];
    }

    protected function parseParams(array $params): array
    {
        $parsed = [];
        foreach ($params as $key => $value) {
            if (is_string($value)) {
                $trimmed = trim($value);

                // Boolean
                if (strcasecmp($trimmed, 'true') === 0) {
                    $parsed[$key] = true;
                } elseif (strcasecmp($trimmed, 'false') === 0) {
                    $parsed[$key] = false;
                }
                // Null
                elseif (strcasecmp($trimmed, 'null') === 0) {
                    $parsed[$key] = null;
                }
                // Integer
                elseif (is_numeric($trimmed) && ctype_digit($trimmed)) {
                    $parsed[$key] = (int)$trimmed;
                }
                // Float
                elseif (is_numeric($trimmed)) {
                    $parsed[$key] = (float)$trimmed;
                }
                // Default: string
                else {
                    $parsed[$key] = $trimmed;
                }
            } else {
                $parsed[$key] = $value;
            }
        }
        return $parsed;
    }
}
