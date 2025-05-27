<?php

declare(strict_types=1);

namespace App\Core;

use Nette;
use Nette\Application\Routers\RouteList;
use App\Core\Scanner;
use App\Core\CustomRouter;
use Nette\Http\Request;

final class RouterFactory
{
	use Nette\StaticClass;

	public static function createRouter(
		Scanner $scanner,
		Request $request
	): RouteList
	{

		$customRouter = new CustomRouter(
			$scanner,
			$request
		);

		$router = new RouteList;

		$router->add( $customRouter );

		$router->addRoute('<path .+>', 'Home:default');
		return $router;
	}
}
