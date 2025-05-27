<?php

declare(strict_types=1);

namespace App\Presentation\Home;

use App\Presentation\Core\BasePresenter;
use \Exception;
use Nette;


final class HomePresenter extends BasePresenter
{

    public function actionDefault( ?string $path ): void
    {
        $this->markSuccess();
        $this->json['data'] = [
            'message' => 'Welcome to the Home page!',
        ];
        $this->storeData( "path", $path );

        // throw new Exception('This is a test exception to demonstrate error handling.', 900);

        $this->respond();
    }

    public function actionTest( ?string $path, ?string $action, ?string $id ): void
    {
        $this->markSuccess();
        $this->json['data'] = [
            'message' => 'Test action executed successfully.',
            'path' => $path,
            'action' => $action,
            'id' => $id,
        ];
        $this->respond();
    }

}
