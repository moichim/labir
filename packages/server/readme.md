# Labir – API pro správu termálních dat a složek

Tento projekt obsahuje backendové API (PHP) pro správu složek, souborů, tagů, metadat a přístupových práv. API je určeno pro práci s daty z termokamer a podporuje správu uživatelů, tagování, přístupová práva a další operace.

## Obecné principy
- Každá akce (routa) se vztahuje ke konkrétní složce, která musí existovat v datovém stromu.
- Pokud voláte akci `update` na složku, měníte vlastnosti této složky.
- Pokud voláte akci `create` na složku, vytváříte v ní novou podsložku.
- API je RESTful, používá HTTP metody GET a POST.

## Přehled endpointů a akcí

### 1. Získání informací o složce
- **GET** `{cesta}`
  - Vrací informace o složce, jejích podsložkách a souborech.
  - Přístup: kdokoli, kdo má právo složku zobrazit (včetně anonymních, pokud je složka veřejná)
  - Parametry v URL: žádné speciální
  - Odpověď: JSON s informacemi o složce, podsložkách, souborech, metadatech, tagách atd.

### 2. Vytvoření nové podsložky
- **POST** `{cesta}?action=create`
  - Vytvoří novou podsložku v aktuální složce.
  - Přístup: pouze uživatel s právem zápisu do složky (typicky přihlášený uživatel nebo admin)
  - Parametry v POST body (JSON):
    - `name` (string, povinné): název nové složky
    - `description` (string, volitelné): popis
    - `meta` (object, volitelné): metadata
    - `tags` (object, volitelné): tagy (klíč = slug, hodnota = objekt tagu)
    - `access` (object, volitelné): přístupová práva
  - Odpověď: JSON s informacemi o nové složce

### 3. Úprava složky
- **POST** `{cesta}?action=update`
  - Upraví vlastnosti aktuální složky (název, popis, metadata, tagy, přesun).
  - Přístup: pouze uživatel s právem zápisu do složky (typicky přihlášený uživatel nebo admin)
  - Parametry v POST body (JSON):
    - `name` (string, volitelné): nový název složky
    - `description` (string, volitelné): nový popis
    - `meta` (object, volitelné): metadata
    - `move` (bool, volitelné): přejmenování složky (pokud je true a je zadán nový název)
    - `addTags` (object, volitelné): tagy k přidání (klíč = slug, hodnota = objekt tagu)
    - `removeTags` (array, volitelné): pole slugů tagů k odebrání
  - Odpověď: JSON s informacemi o upravené složce

### 4. Smazání složky
- **POST** `{cesta}?action=delete`
  - Smaže aktuální složku (včetně obsahu).
  - Přístup: pouze uživatel s právem mazat složku (typicky admin nebo vlastník)
  - Parametry: žádné
  - Odpověď: JSON s potvrzením smazání

### 5. Přesun složky
- **POST** `{cesta}?action=move`
  - Přesune aktuální složku do jiné složky.
  - Přístup: pouze uživatel s právem zápisu do obou složek (typicky admin nebo vlastník)
  - Parametry v POST body (JSON):
    - `target` (string, povinné): cesta k cílové složce
  - Odpověď: JSON s informacemi o přesunuté složce

### 6. Výpis souborů ve složce
- **GET** `{cesta}?action=files`
  - Vrací seznam souborů v aktuální složce.
  - Přístup: kdokoli, kdo má právo složku zobrazit (včetně anonymních, pokud je složka veřejná)
  - Parametry v URL: žádné speciální
  - Odpověď: JSON s polem souborů

### 7. Úprava metadat souboru
- **POST** `{cesta}?action=updatefile&file={soubor}`
  - Upraví metadata konkrétního souboru v aktuální složce.
  - Přístup: pouze uživatel s právem zápisu do složky (typicky přihlášený uživatel nebo admin)
  - Parametry v POST body (JSON):
    - `label` (string, volitelné): popisek
    - `description` (string, volitelné): popis
    - `addTags` (array, volitelné): tagy k přidání
    - `removeTags` (array, volitelné): tagy k odebrání
    - `addAnalyses` (array, volitelné): analýzy k přidání
    - `removeAnalyses` (array, volitelné): analýzy k odebrání
  - Odpověď: JSON s informacemi o souboru

### 8. Získání stromu dostupných složek pro uživatele
- **GET** `{cesta}?action=currentusertree`
  - Vrací strom složek, ke kterým má aktuální uživatel přístup.
  - Přístup: pouze přihlášený uživatel smí získat svůj vlastní seznam složek - není možné vypsat seznam složek jiného uživatele
  - Parametry: žádné
  - Odpověď: JSON se stromem složek

### 9. Výpis souborů v gridu (časové řazení napříč podsložkami)
- **GET** `{cesta}?action=grid`
  - Vrací soubory ze všech podsložek aktuální složky v časovém gridu (např. po hodinách, dnech, týdnech apod.), vhodné pro tabulkové zobrazení napříč podsložkami.
  - Přístup: kdokoli, kdo má právo složku zobrazit (včetně anonymních, pokud je složka veřejná)
  - Parametry v URL (volitelné):
    - `from` (int): časový začátek (timestamp)
    - `to` (int): časový konec (timestamp)
    - `tags` (string): filtr na tagy (čárkou oddělené)
    - `folders` (string): filtr na podsložky (čárkou oddělené slugs)
    - `info` (bool): zda vracet i info o složce
    - `by` (string): časová jednotka pro seskupení gridu. Dostupné hodnoty:
        - `hour` (hodiny)
        - `day` (dny)
        - `week` (týdny)
        - `month` (měsíce)
        - `year` (roky)
  - Odpověď: JSON s gridem souborů napříč podsložkami

## Přístupová práva a autentizace
- Uživatelé (root, guest, další) jsou definováni v `_users.json`.
- Každý uživatel má přístup pouze do vybraných složek.
- Autentizace probíhá pomocí session/cookie nebo API klíče (dle implementace).

## Tagy a metadata
- Tagy jsou ukládány v souborech `_tags.json` ve složkách.
- Metadata složek jsou v `_content.json`.
- Metadata souborů lze upravovat přes `updatefile`.

## Odpovědi
- Všechny endpointy vrací JSON s klíčem `success` (true/false), `data` (výsledek), případně `error` (chybová hláška).

## Příklady requestů

### Vytvoření podsložky
```http
POST {cesta}?action=create
{
  "name": "Nová složka",
  "description": "Popis složky",
  "meta": { "foo": "bar" },
  "tags": { "tag1": { "name": "Test tag" } }
}
```

### Update složky (přidání a odebrání tagů)
```http
POST {cesta}?action=update
{
  "addTags": { "tag2": { "name": "Druhý tag" } },
  "removeTags": ["tag1"]
}
```

### Update souboru
```http
POST {cesta}?action=updatefile&file=example.lrc
{
  "label": "Nový popisek",
  "addTags": ["tag3"],
  "removeTags": ["tag2"]
}
```




Nette Web Project
=================

Welcome to the Nette Web Project! This is a basic skeleton application built using
[Nette](https://nette.org), ideal for kick-starting your new web projects.

Nette is a renowned PHP web development framework, celebrated for its user-friendliness,
robust security, and outstanding performance. It's among the safest choices
for PHP frameworks out there.

If Nette helps you, consider supporting it by [making a donation](https://nette.org/donate).
Thank you for your generosity!


Requirements
------------

This Web Project is compatible with Nette 3.2 and requires PHP 8.1.


Installation
------------

To install the Web Project, Composer is the recommended tool. If you're new to Composer,
follow [these instructions](https://doc.nette.org/composer). Then, run:

	composer create-project nette/web-project path/to/install
	cd path/to/install

Ensure the `temp/` and `log/` directories are writable.


Web Server Setup
----------------

To quickly dive in, use PHP's built-in server:

	php -S localhost:8000 -t www

Then, open `http://localhost:8000` in your browser to view the welcome page.

For Apache or Nginx users, configure a virtual host pointing to your project's `www/` directory.

**Important Note:** Ensure `app/`, `config/`, `log/`, and `temp/` directories are not web-accessible.
Refer to [security warning](https://nette.org/security-warning) for more details.


Minimal Skeleton
----------------

For demonstrating issues or similar tasks, rather than starting a new project, use
this [minimal skeleton](https://github.com/nette/web-project/tree/minimal).
