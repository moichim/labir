<?php

declare(strict_types=1);

namespace App\Core;

use Nette;
use Nette\Application\Routers\RouteList;
use App\Core\Scanner;
use App\Core\LabirRouter;
use Nette\Http\Request;

final class RouterFactory
{
	use Nette\StaticClass;

	public static function createRouter(
		Scanner $scanner,
		Request $request
	): RouteList
	{

		$labirRouter = new LabirRouter(
			$scanner,
			$request
		);

		$router = new RouteList;

		$router->add( $labirRouter );

		// $router->addRoute('/api/<path .+>', 'Get:default');
		return $router;
	}
}
