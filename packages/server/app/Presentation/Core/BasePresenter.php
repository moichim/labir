<?php

declare(strict_types=1);

namespace App\Presentation\Core;

use Nette\Application\UI\Presenter;

abstract class BasePresenter extends Presenter
{
    /**
     * Nastavení hlaviček pro CORS a další HTTP hlavičky.
     */
    protected function setupHeaders(): void
    {

        // Nastavení CORS hlaviček
        // Povoluje přístup z aktuálního originu
        $origin = $this->getHttpRequest()->getHeader('Origin');
        $this->getHttpResponse()->setHeader('Access-Control-Allow-Origin', $origin);
        
        // Povoluje metody GET, POST a OPTIONS
        $this->getHttpResponse()->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

        // Povoluje hlavičky Content-Type a Authorization
        $this->getHttpResponse()->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        
        // Povoluje přenos cookies a dalších autentizačních informací
        $this->getHttpResponse()->setHeader('Access-Control-Allow-Credentials', 'true');

    }
}