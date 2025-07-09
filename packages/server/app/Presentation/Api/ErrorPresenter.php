<?php

declare(strict_types=1);
namespace App\Presentation\Error;

use App\Presentation\Core\BaseApiPresenter;

final class ErrorPresenter extends BaseApiPresenter {

    public function actionDefault( string $message, int $code ): void {
        $this->json["success"] = false;
        // unset( $this->json["data"] );
        $this->json["message"] = $message;
        $this->json["code"] = $code;
        $this->respond();
    }

}