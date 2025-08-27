<?php

declare(strict_types=1);

namespace App\Presentation\Core;

use Nette\Application\UI\Presenter;
use Nette\Application\Response;

abstract class BasePresenter extends Presenter
{

    /**
     * Všechny presentery musí mít stejnou hlavičku
     */
    public function startup(): void
    {
        parent::startup();
        $this->setupHeaders();
    }
    /**
     * Nastavení hlaviček pro CORS a další HTTP hlavičky.
     */
    private function setupHeaders(): void
    {

        // Nastavení CORS hlaviček
        $origin = $this->getHttpRequest()->getHeader('Origin');
        
        // Seznam povolených origins pro development a production
        $allowedOrigins = [
            'http://localhost:8080',
            'http://localhost:3000',
            'http://localhost:5173', // Vite dev server
            'https://dev2-edu.labir.cz',
            'https://labir.cz',
            'https://www.labir.cz'
        ];
        
            // Povoluje přenos cookies a dalších autentizačních informací pouze pro povolené origins
            $this->getHttpResponse()->setHeader('Access-Control-Allow-Credentials', 'true');

        if ($origin && in_array($origin, $allowedOrigins)) {
            // Pokud je origin povolený, nastavíme ho
            $this->getHttpResponse()->setHeader('Access-Control-Allow-Origin', $origin);
            
        } else {
            // Pro nepovolené origins nebo chybějící Origin hlavičku
            $this->getHttpResponse()->setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        }
        
        // Povoluje metody GET, POST a OPTIONS
        $this->getHttpResponse()->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

        // Povoluje hlavičky Content-Type a Authorization
        $this->getHttpResponse()->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    }
}