<?php


class WallManager
{

    const USER = "labir_wall_user";
    const TOKEN = "labir_wall_token";

    const FORM_USERNAME = "labir_wall_username";
    const FORM_PASSWORD = "labir_wall_password";
    const FORM_EMAIL = "labir_wall_email";

    const FORM_LOGOUT = "labir_wall_logout";

    const SECURE_CREDENTIALS = "labir_secure_credentials";

    const AUTH_NAMESPACE = "thermal-display/v1";
    const AUTH_ROUTE = "/auth-credentials";


    private bool $enabled;


    public function __construct(
        bool $enabled,
    ) {
        $this->enabled = $enabled;

        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
    }

    public function getAuthUrl()
    {
        return rest_url(WallManager::AUTH_NAMESPACE . WallManager::AUTH_ROUTE);
    }



    // Session management

    public function getUserFromTransient()
    {
        return get_transient(WallManager::USER);
    }

    public function storeUserInTransient($user)
    {
        set_transient(WallManager::USER, $user, 12 * HOUR_IN_SECONDS);
    }

    public function isLoggedIn()
    {
        return !empty($this->getUserFromTransient());
    }


    // Exception management

    private function handleException(Exception $error)
    {
        $this->message = "Chyba přihlašování: " . $error->getMessage();
    }




    // Form management

    public function processForm(
        string $serverUrl,
        string $serverApiRoot
    ) {


        // Pokud je uživatel přihlášený, nedělej nic
        if ($this->isLoggedIn()) {
            return;
        }


        // Pokus se o přihlášení
        try {

            if (! $this->isFormValid()) {
                throw new Exception("Neplatný formulář!");
            }

            $url = $this->getApiUrl($serverUrl, $serverApiRoot);

            // Pokud není URL, něco se posralo
            if (!$url) {
                throw new Exception('Chyba konfigurace serveru.');
            }

            // Sestav tělo požadavku
            $post_body = [
                'user' => $_POST[WallManager::FORM_USERNAME],
                'password' => $_POST[WallManager::FORM_PASSWORD]
            ];

            // Učiň dotaz na API
            $api_response_raw = wp_remote_post($url, [
                'body' => json_encode($post_body),
            ]);

            $api_response_body = json_decode($api_response_raw["body"], true);

            $success = $api_response_body["success"] ?? false;

            $data = $api_response_body["data"] ?? null;

            if (!$success) {
                throw new Exception("Nepodařilo se přihlásit.");
            }

            // Ulož transient pro následné dotazování identity
            $this->registerAuthTransient(
                $post_body["user"],
                $post_body["password"]
            );

            header("Location: " . $_SERVER['REQUEST_URI']);


            // Ulož uživatele do session
            $this->storeUserInTransient($data);


        } catch (Exception $e) {
            $this->handleException($e);
            return;
        }
    }

    public function processLogout()
    {

        if ($this->isLoggedIn()) {

            $logoutRequest = $_POST[WallManager::FORM_LOGOUT];

            if (!empty($logoutRequest) && $logoutRequest == "1") {

                // logout request
                $this->logout();
            } else {
                return;
            }
        }
    }

    private function isFormValid()
    {
        return $this->isFormFieldFilled(WallManager::FORM_USERNAME)
            && $this->isFormFieldFilled(WallManager::FORM_PASSWORD)
            && $this->isFormFieldEmpty(WallManager::FORM_EMAIL);
    }

    private function isFormFieldEmpty(
        string $key
    ) {
        return empty($_POST[$key]);
    }

    private function isFormFieldFilled(
        string $key
    ) {
        return !empty($_POST[$key]);
    }



    /**
     * Sestaví API url přihlašovací routu
     */
    private function getApiUrl(
        string $serverUrl,
        string $serverApiRoot
    ): string {
        return $serverUrl . $serverApiRoot . '?action=login';
    }

    /**
     * Má být ukázán zamčený obsah?
     */
    public function showsContent(): bool
    {

        if (!$this->enabled) {
            return true;
        }

        return $this->isLoggedIn();
    }

    public function logout()
    {
        $this->storeUserInTransient(null);
        set_transient(WallManager::SECURE_CREDENTIALS, null);
    }


    /**
     * Odešle údaje pro zobrazní baru
     */
    private function getBarData()
    {
        $user = $this->getUserFromTransient();

        if (!$user) {
            return null;
        }

        $result = [
            "login" => $user["login"]["user"],
            "name" => $user["login"]["user"],
            "email" => null,
            "institution" => null,
            "description" => null,
            "isRoot" => false,
        ];

        $meta = $user["login"]["meta"];

        if ($meta) {
            $result["name"] = $meta["name"] ?? $user["login"]["user"];
            $result["email"] = $meta["email"] ?? null;
            $result["institution"] = $meta["institution"] ?? null;
            $result["description"] = $meta["description"] ?? null;
            $result["isRoot"] = !empty($meta["is_root"]) ? true : false;
        }

        return $result;
    }


    /**
     * Uloží credentials pro přihlašování v rámci této session
     */
    private function registerAuthTransient(
        string $user,
        string $pass
    ) {
        set_transient(WallManager::SECURE_CREDENTIALS, [
            "user" => $user,
            "pass" => $pass,
            "token" => base64_encode($user . ":" . $pass),
            "ip" => $_SERVER['REMOTE_ADDR'] ?? null
        ], 12 * HOUR_IN_SECONDS);
    }


    /** 
     * Přečte uložené credentials s validací IP adresy 
     * - Po přečtení smaže transient
     */
    public function getAuthTransient()
    {

        $data = get_transient(WallManager::SECURE_CREDENTIALS);

        if (! $data) {
            return null;
        }

        $ip = $_SERVER['REMOTE_ADDR'] ?? null;

        if ($data["ip"] !== $ip) {
            throw new Exception("Bylo manipulováno s IP adresou!");
        }

        set_transient(WallManager::SECURE_CREDENTIALS, null);

        return $data;
    }

    /**
     * Vrátí auth token pro API požadavky
     */
    public function getAuthToken()
    {

        return get_transient(WallManager::SECURE_CREDENTIALS)["token"] ?? null;
    }



    public function debug(
        $what
    ) {
        print("<pre>");
        var_dump($what);
        print("</pre>");
    }


    /** 
     * Vytiskne bar do patičky 
     */
    public function printBar()
    {

        if ($this->isLoggedIn()) {
            $data = $this->getBarData();
?>
            <footer class="labir-wall-bar">

                <span class="dashicons dashicons-admin-users"></span>

                <div class="labir-wall-slot">
                    <div><strong><?= esc_html($data["name"]) ?></strong></div>
                    <div class="labir-wall-slot-label"><?= esc_html($data["login"]) ?></div>
                </div>

                <?php if ($data["institution"]): ?><div class="labir-wall-slot">
                        <div><?= esc_html($data["institution"]) ?></div>
                        <div class="labir-wall-slot-label">organizace</div>
                    </div>
                <?php endif; ?>

                <?php if ($data["description"]): ?>
                    <div class="labir-wall-slot">
                        <div><?= esc_html($data["description"]) ?></div>
                        <div class="labir-wall-slot-label"><?= $data["isRoot"] ? "root uživatel" : "běžný uživatel" ?></div>
                    </div>
                <?php endif; ?>
                <div class="labir-wall-separator"></div>
                <form method="post" class="labir-wall-logout-form">
                    <button type="submit" name="<?= WallManager::FORM_LOGOUT; ?>" value="1">Odhlásit</button>
                </form>
            </footer>
<?php
        }
    }
}
