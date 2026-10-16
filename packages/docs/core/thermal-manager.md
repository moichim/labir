# ThermalManager

The <code>ThermalManager</code> should be the top-level context of your entire application. 

## Nested registries

There can be multiple <code>ThermalRegistry</code> objects within one <code>ThermalManager</code>. Every registry is identified by their unique slug. To manage registries, see the following example:

```ts
import { ThermalManager } from @labirthermal/core;

// Create the manager
const manager = new ThermalManager( "A unique name" );

// Create two registries
const registryA = manager.createOrGetRegistry( "Registry A" );
const registryB = manager.createOrGetRegistry( "Registry B" );

// Get the reference on an existing registry
const registryAForTheSecondTime = manager.createOrGetRegistry( "Registry A" );

// Both referencies refer to the identical object
const referencesAreEqual = registryA === registryAForTheSecondTime;

// Remove the registry A
manager.removeRegistry( registryA );
```

## Thermal palette property

Palette is a property of <code>ThermalManager</code> and is shared across all registries, groups and instances within one manager.

How to use the <code>PaletteDrive</code> class in TypeScript:

```ts
// Object containing all available pallettes and their data
import { ThermalPalettes } from "@labirthermal/core";

// Type containing all available palette keys that can be used in setPalette
import type { AvailableThermalPalette } from "@labirthermal/core";

// Access the current value
const keyOfTheCurrentPalette = manager.palette.value;
const currentPaletteObject = manager.palette.currentPalette;

// Set the palette and invoke rerender of all files
manager.palette.setPalette( value );

// Listen to palette value change
manager.palette.addListener(
    "id-of-the-listener",
    ( value: AvailableThermalPalette ) => {
        console.log( "The palette has changed", value );
    }
);

```

Available thermal palette keys:

- <code>iron</code>
- <code>jet</code>
- <code>white_hot</code>
- <code>black_hot</code>
- <code>amber</code>
- <code>lava</code>
- <code>rainbow</code>
- <code>rainbow_hc</code>

Webcomponents example below shows how <code>@labirthermal/webcomponents</code> implements the functionality related to.

:::tabs
== Interactive demo
<manager-provider advanced-palettes="true" palette="lava" manager-slug="thermal-palette-demo">
    <manager-palette-buttons></manager-palette-buttons>
    <registry-provider>
        <group-provider>
            <file-provider thermal="/files/klokan.lrc">
                <file-canvas></file-canvas>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>
== HTML source
```html
<!-- See how the default palette is set in manager provider -->
<manager-provider advanced-palettes="true" palette="lava">
    <!-- Display the buttons -->
    <manager-palette-buttons></manager-palette-buttons>
    <registry-provider>
        <group-provider>
            <file-provider thermal="/files/klokan.lrc">
                <file-canvas></file-canvas>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>
```
:::

## IR image smoothing property

This property of <code>ThermalManager</code> indicates whether the included IR images will be displayed using CSS smooth property or not.

```ts

// Access the current value
const currentValue: boolean = manager.smooth.value;
const newValue: boolean = false;

// Set the palette and invoke rerender of all files
manager.smooth.setSmooth( newValue );

// Listen to palette value change
manager.smooth.addListener(
    "id-of-the-listener",
    ( value: boolean ) => {
        console.log( "The image smoothing has changed", value );
    }
);

```

Webcomponents example below shows how <code>@labirthermal/webcomponents</code> implements the related functionality.

:::tabs
== Interactive demo
<!-- See how the default palette is set in manager provider -->
<manager-provider advanced-palettes="true" palette="lava" manager-slug="manager-demo">
    <!-- Display the buttons -->
    <manager-image-smooth-switch></manager-image-smooth-switch>
    <span>Use the buttons to change image smoothing</span>
    <registry-provider>
        <group-provider>
            <file-provider thermal="/files/soustruh.lrc">
                <file-canvas></file-canvas>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>
== HTML source
```html
<!-- See how the default palette is set in manager provider -->
<manager-provider advanced-palettes="true" palette="lava">
    <!-- Display the buttons -->
    <manager-image-smooth-switch></manager-image-smooth-switch>
    <span>Use the buttons to change image smoothing</span>
    <registry-provider> 
        <group-provider>
            <file-provider thermal="/files/soustruh.lrc">
                <file-canvas></file-canvas>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>
```
:::


## Tool property

To work with thermal images, we need tools. The current tool setting is shared across the entire context.

```ts

// Access the current value
const currentValue: string = manager.smooth.value;
const newValue: string = "add-rect";

// Set the palette and invoke rerender of all files
manager.tool.setTool( newValue );

// Listen to palette value change
manager.tool.addListener(
    "id-of-the-listener",
    ( value: string ) => {
        console.log( "The tool has changed", value );
    }
);

```

:::tabs
== Interactive demo
<!-- See how the default palette is set in manager provider -->
<manager-provider advanced-palettes="true" palette="lava" manager-slug="tool-demo">
    <!-- Display the buttons -->
    <manager-tool-bar horizontal="true"></manager-tool-bar>
    <span>Use the buttons to change the tool and interact with the image.</span>
    <registry-provider> 
        <group-provider>
            <file-provider thermal="/files/soustruh.lrc">
                <file-canvas></file-canvas>
                <file-analysis-table></file-analysis-table>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>
== HTML source
```html
<!-- See how the default palette is set in manager provider -->
<manager-provider advanced-palettes="true" palette="lava">
    <!-- Display the buttons -->
    <manager-tool-bar horizontal="true"></manager-tool-bar>
    <span>Use the buttons to change the tool and interact with the image.</span>
    <registry-provider> 
        <group-provider>
            <file-provider thermal="/files/soustruh.lrc">
                <file-canvas></file-canvas>
                <file-analysis-table></file-analysis-table>
            </file-provider>
        </group-provider>
    </registry-provider>
</manager-provider>
```
:::

## Internal objects

### pool

A workerpool service for asynchronous reading of thermal files

### registries

Map of registries.

### service

Handles file loading and caching.

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Core scope</th>
            <th>Sets via provider atribute</th>
            <th>Control elements</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Thermal palette</td>
            <td><code>ThermalManager</code></td>
            <td><code>manager-provider palette="iron"</code></td>
            <td><code>manager-palette-dropdown</code> or <code>manager-palette-buttons</code></td>
        </tr>
        <tr>
            <td>Opacity of IR images</td>
            <td><code>ThermalManager</code></td>
            <td><code>manager-provider opacity="0.2"</code></td>
            <td><code>manager-olacity-slider</code></td>
        </tr>
    </tbody>
</table>

