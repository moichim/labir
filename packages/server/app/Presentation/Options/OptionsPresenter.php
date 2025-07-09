<?php

declare( strict_types = 1 );

namespace App\Presentation\Options;

use App\Presentation\Core\BasePresenter;
use Nette\Application\Attributes\Requires;

#[Requires(methods: ['OPTIONS'])]
final class OptionsPresenter extends BasePresenter {

    /**
     * Základní připojení k serveru
     * - voláno při připojování klienta
     * - slouží k nastavení CORS hlaviček
     * - je nutné toto mít, aby fungovaly další HTTP metody (GET, POST, atd.)
     * - odpovídá s kódem 204 (No Content)
     * 
     * Tato routa odpovídá na veškeré dotazky, které mají hlavičku `OPTIONS`.
     */
    public function actionDefault(): void {

        $this->setupHeaders();

        $this->getHttpResponse()->setCode( 204 );

        $this->terminate();
    
    }

}