<?php

namespace App\Presentation\Display;

use App\Presentation\Core\BasePresenter;
use App\Core\Scanner;
use Nette\DI\Attributes\Inject;

final class DisplayPresenter extends BasePresenter
{

    #[Inject]
    public Scanner $scanner;

    public function startup(): void
    {
        parent::startup();

        $this->template->version = $this->scanner->getServerInfo()["version"];

        $this->template->name = $this->scanner->getServerInfo()["name"] ?? "Labir Server";

        $this->template->baseurl = $this->getHttpRequest()->getUrl()->getBaseUrl();
    }

    private function getValueIfExists(string $key, array $array): ?string
    {
        return array_key_exists($key, $array) ? $array[$key] : null;
    }

    public function renderDefault(): void
    {

        $p = [
            "folder-path",
            "file-name",
            "palette",
            "display-mode",
            "folder-mode",
            "grid-grouping",
            "compact",
            "from",
            "to",
        ];

        $params = $this->request->parameters;

        $properties = array_map(function ($key) use ( $params) {

            $value = $this->getValueIfExists($key, $params);

            if ($value !== null) {
                return "$key=\"$value\"";
            } else {
                return null;
            }
        }, $p);

        $properties = array_filter( $properties, function ( $prop ) {
            return $prop !== null;
        } );

        $properties = count($properties) > 0
            ? implode( " ", $properties )
            : null;

        $this->template->properties = $properties;

    }
}
