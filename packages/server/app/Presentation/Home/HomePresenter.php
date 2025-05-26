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

        // throw new Exception('This is a test exception to demonstrate error handling.', 900);

        $this->respond();
    }

}
