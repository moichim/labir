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
POST /access/{cesta}?action=create
{
  "name": "Nová složka",
  "description": "Popis složky",
  "meta": { "foo": "bar" },
  "tags": { "tag1": { "name": "Test tag" } }
}
```

### Update složky (přidání a odebrání tagů)
```http
POST /access/{cesta}?action=update
{
  "addTags": { "tag2": { "name": "Druhý tag" } },
  "removeTags": ["tag1"]
}
```

### Update souboru
```http
POST /access/{cesta}?action=updatefile&file=example.lrc
{
  "label": "Nový popisek",
  "addTags": ["tag3"],
  "removeTags": ["tag2"]
}
```

---

# Typescript tools for thermal imaging

Documentation and examples at [https://labir.vercel.app](https://labir.vercel.app).

Set of JS/TS packages for work with recordings from thermal cameras:

- `@labir/core` - the core functionality in pure TS
- `@labir/embed` - webcomponents on top of `@labir/core`
- `@labir/react-bridge` - React hooks and base components

Planned packages:
- `@labir/tailwind` - an UI based on @nextui/react
- `@labir/emotion` - an UI based on @emotion/react

Experimental packages:
- `@labir/vue` - a Vue 3 integration

## Development

Use **PNPM** package manager - we rely on its workspaces functionality.

**The build and release process should be done from the workspace root**. Do not build and publish packages individually - it might mess up version numbering (see below).


### Installation

```bash
git clone https://github.com/moichim/labir
pnpm install
```

### Development

Every `/package/*` has its own tests, build commands and devservers.

### Release

The release needs to be done from **the package root**. Make sure you build & release all packages at once - not individually.

We use `lerna` to facilitate versioning and builds.

```bash
# 1. run lint in all packages
pnpm run lint

# 2. run tests in all packages
pnpm run test

# 3. build all packages
pnpm run build

# 4. commit the entire work
git add -A && git commit -m "..."

# 5. see the packages that has changed since the last release
pnpm run changed

# 6. use lerna to increment version of packages
pnpm run version

# 7. publish the packages
pnpm publish --recursive
```