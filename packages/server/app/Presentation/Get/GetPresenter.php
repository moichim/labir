<?php

declare(strict_types=1);

namespace App\Presentation\Get;

use App\Presentation\Core\BasePresenter;

final class GetPresenter extends BasePresenter
{

    public function actionDefault(?string $path): void
    {

        $this->storeData("folder", $this->scanner->folder->getInfo($path));
        $this->storeData("subfolders", $this->scanner->folder->getSubdirectories($path));
        $this->storeData("files", $this->scanner->folder->getFiles($path));

        $this->markSuccess();

        $this->respond();
    }

    public function actionFiles(
        ?string $path,
        ?int $from = null,
        ?int $to = null,
        ?string $tags = null
    ) {

        $this->storeData("props", [
            $from,
            $to,
            $tags
        ]);

        $tags = $tags !== null
            ? array_map(function (string $item) {
                return trim($item);
            }, explode(",", $tags ))
            : null;

        $files = $this->scanner->folder->getFiles($path, $from, $to, $tags);

        $this->storeData("files", $files );

        $this->markSuccess();

        $this->respond();
    }

    public function actionTest(?string $path, ?string $action, ?string $id): void
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
