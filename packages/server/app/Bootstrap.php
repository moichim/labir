<?php

declare(strict_types=1);

namespace App;

use Nette;
use Nette\Bootstrap\Configurator;
use Tracy\Debugger;


class Bootstrap
{
	private Configurator $configurator;
	private string $rootDir;


	public function __construct()
	{
		// Nastavíme globální cookie parametry co nejdříve
		$this->configureCookiesGlobally();
		
		$this->rootDir = dirname(__DIR__);
		$this->configurator = new Configurator;
		$this->configurator->setTempDirectory($this->rootDir . '/temp');
	}


	public function bootWebApplication(): Nette\DI\Container
	{
		$this->initializeEnvironment();
		$this->setupContainer();
		// $this->setupTracyForCrossSite();
		return $this->configurator->createContainer();
	}


	public function initializeEnvironment(): void
	{
		/*
		// Autodetekce prostředí - pokud běžíme na doméně končící na .cz, .com atd., je to produkce
		$isProduction = isset($_SERVER['HTTP_HOST']) && 
			(str_contains($_SERVER['HTTP_HOST'], '.cz') || 
			 str_contains($_SERVER['HTTP_HOST'], '.com') ||
			 str_contains($_SERVER['HTTP_HOST'], '.org') ||
			 !str_contains($_SERVER['HTTP_HOST'], 'localhost'));
			
		if (!$isProduction) {
			// Development prostředí
			$this->configurator->setDebugMode(true);
		} else {
			// Produkční prostředí  
			$this->configurator->setDebugMode(false);
		}
		
		*/
		// Zakážeme Tracy úplně, aby se nenastavovaly problematické cookies
		// $this->configurator->enableTracy($this->rootDir . '/log');

		$this->configurator->createRobotLoader()
			->addDirectory(__DIR__)
			->register();
	}


	private function setupContainer(): void
	{
		$configDir = $this->rootDir . '/config';
		$this->configurator->addConfig($configDir . '/common.neon');
		$this->configurator->addConfig($configDir . '/services.neon');
	}

	/**
	 * Nastavení Tracy pro podporu cross-site requestů
	 */
	private function setupTracyForCrossSite(): void
	{
		// Úplně zakážeme Tracy, aby se nevytvářely problematické cookies
		// Pro debugging můžeme použít error_log() nebo jiné nástroje
		Debugger::enable(Debugger::PRODUCTION);
	}

	/**
	 * Konfiguruje globální nastavení cookies pro cross-site kompatibilitu
	 */
	private function configureCookiesGlobally(): void
	{
		// Nastavíme výchozí cookie parametry pro celou aplikaci
		if (!headers_sent()) {
			// ini_set('session.cookie_samesite', 'None');
			// ini_set('session.cookie_secure', '1');
			// ini_set('session.cookie_httponly', '1');
		}
	}
}
