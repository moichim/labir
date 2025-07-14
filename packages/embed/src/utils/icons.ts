import { html } from "lit";

/**
 * Definice SVG ikon s jejich variantami
 * Každá ikona může mít více variant (outline, solid, mini, micro)
 * Použití: přidejte novou ikonu s jejími variantami zde
 */
const svg = {
    folder: {
        outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>`,
        micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 9.62 4H12.5A1.5 1.5 0 0 1 14 5.5v1.401a2.986 2.986 0 0 0-1.5-.401h-9c-.546 0-1.059.146-1.5.401V3.5ZM2 9.5v3A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8h-9A1.5 1.5 0 0 0 2 9.5Z" />
        </svg>`
    },
    wifi: {
        micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M14.188 7.063a8.75 8.75 0 0 0-12.374 0 .75.75 0 0 1-1.061-1.06c4.003-4.004 10.493-4.004 14.496 0a.75.75 0 1 1-1.061 1.06Zm-2.121 2.121a5.75 5.75 0 0 0-8.132 0 .75.75 0 0 1-1.06-1.06 7.25 7.25 0 0 1 10.252 0 .75.75 0 0 1-1.06 1.06Zm-2.122 2.122a2.75 2.75 0 0 0-3.889 0 .75.75 0 1 1-1.06-1.061 4.25 4.25 0 0 1 6.01 0 .75.75 0 0 1-1.06 1.06Zm-2.828 1.06a1.25 1.25 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.355.355a.75.75 0 0 1-1.06 0l-.354-.354a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>`
    },
    user: {
        micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
        </svg>`
    }
    // home: {
    //     outline: `<svg>...</svg>`,
    //     mini: `<svg>...</svg>`,
    // },
} as const;

// Typ pro dostupné varianty konkrétní ikony
type AvailableVariants<T extends keyof typeof svg> = keyof typeof svg[T];

/**
 * Základní funkce pro vykreslení ikony
 * @param name - název ikony (např. 'folder')
 * @param variant - varianta ikony (např. 'outline')
 * @param className - CSS třídy pro přidání
 * @param styles - inline styly
 */
const icon = <T extends keyof typeof svg>(
    name: T,
    variant: AvailableVariants<T>,
    className?: string,
    styles?: string
) => {
    const iconSvg = svg[name][variant] as string;

    if (!iconSvg) {
        console.warn(`Icon variant "${String(variant)}" not found for icon "${String(name)}"`);
        return html``;
    }

    // Modifikace SVG - přidání CSS tříd a stylů
    let modifiedSvg = iconSvg;

    if (className || styles) {
        // Pokud má SVG existující class atribut, přidej k němu
        if (modifiedSvg.includes('class="')) {
            modifiedSvg = modifiedSvg.replace(
                /class="([^"]*)"/,
                `class="$1 ${className || ''}"`
            );
        } else {
            // Pokud nemá class atribut, přidej ho do prvního SVG tagu
            modifiedSvg = modifiedSvg.replace(
                /<svg([^>]*)>/,
                `<svg$1 class="${className || ''}">`
            );
        }

        // Přidej styles pokud jsou specifikované
        if (styles) {
            if (modifiedSvg.includes('style="')) {
                modifiedSvg = modifiedSvg.replace(
                    /style="([^"]*)"/,
                    `style="$1; ${styles}"`
                );
            } else {
                modifiedSvg = modifiedSvg.replace(
                    /<svg([^>]*)>/,
                    `<svg$1 style="${styles}">`
                );
            }
        }
    }

    // Použij html literal pro bezpečné vložení SVG
    return modifiedSvg;
}

/**
 * Automatické generování objektu ikon z definice svg
 * Vytváří strukturu: icons.nazevIkony.varianta(className?, styles?)
 */
const createIcons = () => {
    const result = {} as any;

    // Iterace přes všechny ikony
    for (const iconName in svg) {
        const iconKey = iconName as keyof typeof svg;
        result[iconKey] = {};

        // Iterace přes všechny varianty ikony
        const iconVariants = svg[iconKey];
        for (const variant in iconVariants) {
            // Vytvoření funkce pro každou kombinaci ikona-varianta
            result[iconKey][variant] = (className?: string, styles?: string) => {
                return icon(iconName as keyof typeof svg, variant as any, className, styles);
            };
        }
    }

    return result;
}

/**
 * TypeScript typ pro automaticky generovaný objekt ikon
 * Zajišťuje typovou bezpečnost - pouze existující ikony a jejich varianty
 */
type IconsType = {
    [K in keyof typeof svg]: {
        [V in keyof typeof svg[K]]: (className?: string, styles?: string) => string
    }
};

/**
 * Exportovaný objekt ikon s typovou bezpečností
 * Použití: icons.folder.outline("my-class", "color: red")
 */
const icons = createIcons() as IconsType;

export default icons;

// Příklad použití:
// icons.folder.outline("text-blue-500", "width: 24px; height: 24px")

