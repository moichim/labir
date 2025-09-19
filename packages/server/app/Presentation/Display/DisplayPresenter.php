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
    }

    public function renderDefault(): void
    {
        
    }
}
