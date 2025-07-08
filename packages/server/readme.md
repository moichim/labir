
# Labir – API pro správu termálních dat a složek

Tento projekt obsahuje backendové API (PHP, Nette) pro správu složek, souborů, tagů, metadat a přístupových práv. API je určeno pro práci s daty z termokamer a podporuje správu uživatelů, tagování, přístupová práva a další operace. Součástí je také JS klient pro pohodlné volání API z aplikací nebo testů.

## Obecné principy
- Každá akce (routa) se vztahuje ke konkrétní složce, která musí existovat v datovém stromu.
- Pokud voláte akci `update` na složku, měníte vlastnosti této složky.
- Pokud voláte akci `create` na složku, vytváříte v ní novou podsložku.
- API je RESTful, používá HTTP metody GET a POST.



## Přehled endpointů, JS klienta a příkladů použití

### 1. Získání informací o složce
- **GET** `{cesta}`
- **Parametry:** žádné
- **JS klient:** `FolderApi.getInfo(path)`
- **Příklad:**
```js
import { FolderApi } from './routes/post/FolderApi';
const info = await FolderApi.getInfo('/data/zvirata');
```
- **Popis:** Vrací informace o složce, podsložkách, souborech, metadatech, tagách.



### 2. Vytvoření nové podsložky
- **POST** `{cesta}?action=create`
- **Parametry (JSON body):**
  - `name` (string, povinné)
  - `description` (string, volitelné)
  - `meta` (object, volitelné)
  - `tags` (object, volitelné)
  - `access` (object, volitelné)
- **JS klient:** `FolderApi.create(path, data)`
- **Příklad:**
```js
import { FolderApi } from './routes/post/FolderApi';
await FolderApi.create('/data', {
  name: 'Nová složka',
  description: 'Popis složky',
  meta: { foo: 'bar' },
  tags: { tag1: { name: 'Test tag' } },
  access: { show: true, may_have_files: true }
});
```



### 3. Úprava složky
- **POST** `{cesta}?action=update`
- **Parametry (JSON body):**
  - `name` (string, volitelné)
  - `description` (string, volitelné)
  - `meta` (object, volitelné)
  - `move` (bool, volitelné)
  - `addTags` (object, volitelné)
  - `removeTags` (array, volitelné)
- **JS klient:** `FolderApi.update(path, data)`
- **Příklad:**
```js
import { FolderApi } from './routes/post/FolderApi';
await FolderApi.update('/data/zvirata', {
  name: 'Zvířata',
  addTags: { tag2: { name: 'Druhý tag' } },
  removeTags: ['tag1']
});
```



### 4. Smazání složky
- **POST** `{cesta}?action=delete`
- **Parametry:** žádné
- **JS klient:** `FolderApi.delete(path)`
- **Příklad:**
```js
import { FolderApi } from './routes/post/FolderApi';
await FolderApi.delete('/data/zvirata');
```



### 5. Přesun složky
- **POST** `{cesta}?action=move`
- **Parametry (JSON body):**
  - `target` (string, povinné)
- **JS klient:** `FolderApi.move(path, target)`
- **Příklad:**
```js
import { FolderApi } from './routes/post/FolderApi';
await FolderApi.move('/data/zvirata', '/data/novy-cil');
```



### 6. Výpis souborů ve složce
- **GET** `{cesta}?action=files`
- **Parametry:** žádné
- **JS klient:** `FolderApi.listFiles(path)`
- **Příklad:**
```js
import { FolderApi } from './routes/post/FolderApi';
const files = await FolderApi.listFiles('/data/zvirata');
```



### 7. Upload souboru (.lrc + obrázky + metadata)
- **POST** `{cesta}?action=uploadfile`
- **Parametry (multipart/form-data):**
  - `lrc` (soubor, povinné) – pouze .lrc
  - `visual` (soubor, volitelné) – pouze .png
  - `preview` (soubor, volitelné) – pouze .png
  - `label` (string, volitelné)
  - `description` (string, volitelné)
  - `tags` (JSON/string pole, volitelné)
- **JS klient:**  
  - Třída: `UploadFile`
  - Metody:  
    - `setLrcFile(file: File)`
    - `setVisualFile(file: File)`
    - `setPreviewFile(file: File)`
    - `setLabel(label: string)`
    - `setDescription(desc: string)`
    - `setTags(tags: string[] | object)`
    - `upload()`
- **Příklad:**
```js
import { UploadFile } from './routes/post/UploadFile';
const uploader = new UploadFile('/data/zvirata');
uploader.setLrcFile(lrcFile); // File = .lrc
uploader.setVisualFile(visualPng); // File = .png
uploader.setPreviewFile(previewPng); // File = .png
uploader.setLabel('Makak v zoo');
uploader.setDescription('Termální snímek makaka');
uploader.setTags(['zoo', 'makak']);
await uploader.upload();
```
- **Popis:** Nahraje .lrc soubor a volitelné obrázky, nastaví metadata.  
  Odpověď obsahuje informace o souboru včetně uživatele (`uploadedby`), labelu, popisu, tagů.

---

### 8. Úprava metadat souboru
- **POST** `{cesta}?action=updatefile&file={soubor}`
- **Parametry (JSON body):**
  - `label` (string, volitelné)
  - `description` (string, volitelné)
  - `addTags` (array, volitelné)
  - `removeTags` (array, volitelné)
  - `addAnalyses` (array, volitelné)
  - `removeAnalyses` (array, volitelné)
- **JS klient:**  
  - Třída: `FileApi`
  - Metoda: `update(path, file, data)`
- **Příklad:**
```js
import { FileApi } from './routes/post/FileApi';
await FileApi.update('/data/zvirata', 'makak.lrc', {
  label: 'Nový popisek',
  addTags: ['tag3'],
  removeTags: ['tag2']
});
```



### 9. Získání stromu dostupných složek pro uživatele
- **GET** `{cesta}?action=currentusertree`
- **Parametry:** žádné
- **JS klient:** `FolderApi.getUserTree(path)`
- **Příklad:**
```js
import { FolderApi } from './routes/post/FolderApi';
const tree = await FolderApi.getUserTree('/data');
```



### 10. Výpis souborů v gridu (časové řazení napříč podsložkami)
- **GET** `{cesta}?action=grid`
- **Parametry (URL):**
  - `from` (int, volitelné)
  - `to` (int, volitelné)
  - `tags` (string, volitelné)
  - `folders` (string, volitelné)
  - `info` (bool, volitelné)
  - `by` (string, volitelné: hour, day, week, month, year)
- **JS klient:** `FolderApi.getGrid(path, params)`
- **Příklad:**
```js
import { FolderApi } from './routes/post/FolderApi';
const grid = await FolderApi.getGrid('/data/zvirata', { from: 1700000000, by: 'day' });
```

## Přístupová práva a autentizace
- Uživatelé (root, guest, další) jsou definováni v `_users.json`.
- Každý uživatel má přístup pouze do vybraných složek.
- Autentizace probíhá pomocí session/cookie nebo API klíče (dle implementace).

## Tagy a metadata
- Tagy jsou ukládány v souborech `_tags.json` ve složkách.
- Metadata složek jsou v `_content.json`.
- Metadata souborů lze upravovat přes `updatefile` nebo při uploadu souboru (`label`, `description`, `tags`).

## Použití JS klienta

Pro pohodlnou práci s API použijte JS klienta (`client/src/routes/post/`). Klient poskytuje metody pro všechny akce popsané výše, včetně správného odesílání souborů a metadat.

**Základní použití:**
```js
import { UploadFile } from './routes/post/UploadFile';

const uploader = new UploadFile('/cesta/ke/slozce');
uploader.setLrcFile(file); // File = .lrc soubor
uploader.setVisualFile(visual); // File = .png (volitelné)
uploader.setPreviewFile(preview); // File = .png (volitelné)
uploader.setLabel('Popisek');
uploader.setDescription('Popis');
uploader.setTags(['tag1', 'tag2']);
await uploader.upload();
```

Každá metoda klienta odpovídá konkrétní routě API a umožňuje pohodlné volání v testech i aplikacích. U každé routy výše najdete konkrétní příklad.

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
