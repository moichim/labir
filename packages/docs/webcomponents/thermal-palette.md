# Thermal palette

Thermal palette is a key component of displaying IR images. 

## Relation of webcomponents and the core 

The core functionality related to thermal palette is managed by `@labirthermal/core` - particullary by the `PaletteDrive` class which is assigned to `ThermalManager`. It means the actual value of thermal palette setting is synchronised to all files within one `ThermalManager` context.

In `@labirthermal/webcomponents`, the thermal palette can be set using the `palette` and `advanced-palettes` attributes to supporting [context provider elements](#context-providers). The values may be controlled by [context consumer elements](#context-consumers).



## Context providers

The palette value is defined by top-level elements that control a `ThermalManager` object:

- <code>thermal-file-app</code>
- <code>thermal-dropin-app</code>
- <code>thermal-group-app</code>
- <code>manager-provider</code>

These components can have the following HTML attributes that indicates the current palette value of all nested elements:

- <code>palette="jet|iron|white_hot|black_hot|lava|amber|rainbow|rainbow_hc"</code>
- <code>advanced-palettes="true|false"</code>

## Available attribute values

The context provider attributes may have these values:

- when `advanced-palettes="false"`<br/>`palette="jet|iron|white_hot|black_hot"`
- when `advanced-palettes="true"`<br/>`palette="jet|iron|white_hot|black_hot|lava|amber|rainbow|rainbow_hc"`

### Example of setting the palette using context providers
Example of <code>manager-provider</code> with `advanced-palettes` enabled and `lava`.

```html
<manager-provider advanced-palettes="true" palette="lava">
    <registry-provider>
        <group-provider>
            <file-provider thermal="/files/makak.lrc">
                <file-canvas></file-canvas>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>
```

Result:
<manager-provider advanced-palettes="true" palette="lava">
    <registry-provider>
        <group-provider>
            <file-provider thermal="/files/makak.lrc">
                <file-canvas></file-canvas>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>

## Context consumers

As the [context providers](#context-providers) exposes the palette context, the actual value may be controlled using these components:

- `manager-palette-dropdown` - select palette
- `manager-palette-buttons` - select palette
- `manager-advanced-palette-switch` - toggle the advanced palettes value

These components need to be nested somewhere in a [context provider](#context-providers). These context consumers do not accept palette as a HTML attribute. Instead, they take the current value from the context provider and manipulate its value attribute.

### Example of context consumers

<manager-provider palette="iron">
    <table>
        <tr>
            <td>manager-palette-dropdown</td>
            <td><manager-palette-dropdown></manager-palette-dropdown></td>
        </tr>
        <tr>
            <td>manager-palette-buttons</td>
            <td><manager-palette-buttons></manager-palette-buttons></td>
        </tr>
        <tr>
            <td>manager-advanced-palette-switch</td>
            <td><manager-advanced-palette-switch></manager-advanced-palette-switch></td>
        </tr>
    </table>
    <registry-provider>
        <group-provider>
            <file-provider thermal="/files/makak.lrc">
                <file-canvas></file-canvas>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>

```html
<manager-provider palette="iron">
    <!-- The following webcomponents can be nested anywhere in the hierarchy below -->
    <table>
        <tr>
            <td>manager-palette-dropdown</td>
            <td><manager-palette-dropdown></manager-palette-dropdown></td>
        </tr>
        <tr>
            <td>manager-palette-buttons</td>
            <td><manager-palette-buttons></manager-palette-buttons></td>
        </tr>
        <tr>
            <td>manager-advanced-palette-switch</td>
            <td><manager-advanced-palette-switch></manager-advanced-palette-switch></td>
        </tr>
    </table>
    <registry-provider>
        <group-provider>
            <file-provider thermal="/files/makak.lrc">
                <file-canvas></file-canvas>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>
```

User may switch the current palette using `manager-palette-dropdown` or `manager-palette-buttons`.

## Set using setAttribute

The current palette can also be controlled by ordinary HTML buttons placed outside the web component. The buttons below change the `palette` and `advanced-palettes` attributes using [`setAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute).

<script setup>
import { ref } from 'vue'

const palette = ref('iron')
const advancedPalettes = ref("true")

const getPaletteApp = () => document.getElementById('palette-attribute-demo')

const setPalette = (value) => {
    getPaletteApp()?.setAttribute('palette', value)
    palette.value = value
}

const setAdvancedPalettes = (value) => {
    getPaletteApp()?.setAttribute('advanced-palettes', String(value))
    advancedPalettes.value = value
}
</script>

<div class="palette-attribute-demo">
    <div class="palette-attribute-controls">
        <div>
            <strong>Palette</strong>
            <div class="palette-attribute-buttons">
                <button type="button" @click="setPalette('iron')">Iron</button>
                <button type="button" @click="setPalette('jet')">Jet</button>
                <button type="button" @click="setPalette('lava')">Lava (only with advanced-palette enabled)</button>
            </div>
        </div>
        <div>
            <strong>Advanced palettes</strong>
            <div class="palette-attribute-buttons">
                <button type="button" @click="setAdvancedPalettes(true)">Enable</button>
                <button type="button" @click="setAdvancedPalettes(false)">Disable</button>
            </div>
        </div>
        <small>
            Current attributes:
            <code>palette="{{ palette }}"</code>
            <code>advanced-palettes="{{ advancedPalettes }}"</code>
        </small>
    </div>
    <thermal-file-app
        id="palette-attribute-demo"
        label="Manipulating the palette"
        thermal="/files/klokan.lrc"
        palette="{{palette}}"
        advanced-palettes="true"
    ></thermal-file-app>
</div>

`lava` is an advanced palette, so enable advanced palettes before selecting it.

```html
<div class="controls">
    <button type="button" onclick="setPalette('iron')">Iron</button>
    <button type="button" onclick="setPalette('jet')">Jet</button>
    <button type="button" onclick="setAdvancedPalettes(true)">Enable advanced palettes</button>
    <button type="button" onclick="setAdvancedPalettes(false)">Disable advanced palettes</button>
</div>

<thermal-file-app
    id="palette-app"
    thermal="/files/klokan.lrc"
    palette="iron"
    advanced-palettes="false"
></thermal-file-app>

<script>
    const getPaletteApp = () => document.getElementById('palette-app')

    const setPalette = (value) => {
        getPaletteApp().setAttribute('palette', value)
    }

    const setAdvancedPalettes = (value) => {
        getPaletteApp().setAttribute('advanced-palettes', String(value))
    }
</script>
```

<style scoped>
.palette-attribute-demo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
}

.palette-attribute-controls {
    display: flex;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
}

.palette-attribute-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.palette-attribute-controls small {
    display: grid;
    gap: 0.25rem;
}

@media (min-width: 768px) {
    .palette-attribute-demo {
        grid-template-columns: minmax(12rem, 1fr) minmax(0, 2fr);
    }
}
</style>
