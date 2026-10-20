# Thermal palette

<script setup>
import { withBase } from 'vitepress'
</script>

Thermal palette is a key component of displaying IR images. 

Thermal range is bound to `ThermalManager` provider and its value is synchronised to all its files.

## Overview of related elements

<div class="hierarchy">
    <manager-provider>
        <p>The thermal palette is controlled on the level of <code>ThermalManager</code>.</p>
            <table>
                <tbody>
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
                </tbody>
            </table>
        <registry-provider>
            <div class="stack">
            <group-provider>
                    <file-provider
                        :thermal="withBase('/files/makak.lrc')"
                        style="--hierarchy-content-post:' thermal=/files/makak.lrc'"
                    >
                        <file-canvas></file-canvas>
                    </file-provider>
                    <file-provider
                        :thermal="withBase('/files/klokan.lrc')"
                        style="--hierarchy-content-post:' thermal=/files/klokan.lrc'"
                    >
                        <file-canvas></file-canvas>
                    </file-provider>
            </group-provider>
            <div style="display: flex; flex-direction: column; gap: 2em;">
            <group-provider>
                <div class="stack">
                    <file-provider
                        :thermal="withBase('/files/husy.lrc')"
                        style="--hierarchy-content-post:' thermal=/files/husy.lrc'"
                    >
                        <file-canvas></file-canvas>
                    </file-provider>
                </div>
            </group-provider>
            <group-provider>
                <div class="stack">
                    <file-provider
                        :thermal="withBase('/files/kudlanka.lrc')"
                        style="--hierarchy-content-post:' thermal=/files/mantis.lrc'"
                    >
                        <file-canvas></file-canvas>
                    </file-provider>
                </div>
            </group-provider>
            </div>
            </div>
        </registry-provider>
    </manager-provider>
</div>

## Constraints

In sake of simplicity, the thermal palettes shown by default are only the most used ones:

- `iron`
- `jet`
- `white_hot`
- `black_hot`

After the `advanced-palettes` attribute is set to `true`, the following palettes becomes available:

- `arctic`
- `lava`
- `rainbow`
- `rainbow_hc`

## Setting default palette via attributes

If you want to have a particular setting by default, you can provide `palette` and/or `advanced-palettes` attribute to the `manager-provider`.

```html
<manager-provider palette="lava" advanced-palettes="true"></manager-provider>
```

These attributes are also supported by the following applications:

```html
<thermal-file-app palette="..."></thermal-file-app>
<thermal-group-app palette="..."></thermal-group-app>
<thermal-dropin-app palette="..."></thermal-dropin-app>
```

Example - a `thermal-file-app` with `lava` as default palette;

<thermal-file-app label="Example of default palette" palette="lava" advanced-palettes="true" :thermal="withBase('/files/makak.lrc')"></thermal-file-app>