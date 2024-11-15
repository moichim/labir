# @labir/embed

A library of webcomponents for thermal imaging in the browser.

![A showcase of the simple application](docs/images/thermal-file-app.png)

This frontend library is a webcomponents implementation of [@labir/core](https://github.com/moichim/labir/tree/sequenced-loading/packages/core) which handles all the underlying functionality. The UI is implemented here using [Lit.js](https://lit.dev/).

## How to use

### 1. Include the library

Include the scripts in the `dist` folder which contains the latest build.

Recommended - use jsdelvr.net. The following code will use the latest production version.

```html
<script src=" https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js "></script>
<link href=" https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.css " rel="stylesheet">
```

### 2. Use our webcomponents anywhere in the page

See the list of available components and their parameters below. For a simple display of a LRC file, you will probably use one of these webcomponents:

```html
<!-- A simple display of thermal image -->
<thermal-file-app
    url="https://________.lrc"
></thermal-file-app>

<!-- An advanced layout designed for working with analyses -->
<thermal-file-app
    url="https://________.lrc"
></thermal-file-app>

<!-- A drop-in application (you can upload your own LRC files) -->
<thermal-dropin-app></thermal-dropin-app>

```

## Compatibility

All major browsers are supporting custom web components. See [the compatibility overview](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements).

## List of components

There are 3 types of available webcomponents:

1. **top-level applications** which includes the entire functionality in a single element
2. **structural elements** mirrors core hierarchy from @labir/core
3. **individual controls** provide all the buttons, sliders, canvases

**You will only use top-level applications** - the three key components:
- `<thermal-file-app></thermal-file-app>`
- `<thermal-file-analyser></thermal-file-analyser>`
- `<thermal-dropin-app></thermal-dropin-app>`

These components are internally built from structural elements and from individual controls. But you do not need to worry about that.Using the threee components above ensures correct implementation.

In case you want to create a custom layout, styling or if you want to combine thermal imaging with other HTML content, you can use structural elements and individual controls. But you need to do it correctly. See the example below or the `/src` folder for more information.


### Applications

```html
<!-- A simple display of thermal image -->
<thermal-file-app
    url="https://________.lrc"
></thermal-file-app>

<!-- An advanced layout designed for working with analyses -->
<thermal-file-app
    url="https://________.lrc"
></thermal-file-app>

<!-- A drop-in application (you can upload your own LRC files) -->
<thermal-dropin-app></thermal-dropin-app>

```