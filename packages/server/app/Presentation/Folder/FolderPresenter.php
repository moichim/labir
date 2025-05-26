<?php

declare(strict_types=1);
namespace App\Presentation\Core;

final class FolderPresenter extends BasePresenter
{
    public function actionDefault(string $path = ''): void
    {
        $this->markSuccess();
        $this->json['data'] = [
            'path' => $path,
            'message' => 'Folder path processed successfully.',
        ];
        $this->respond();
    }
}