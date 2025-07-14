import { html } from "lit";

/**
 * Definice SVG ikon s jejich variantami
 * Každá ikona může mít více variant (outline, solid, mini, micro)
 * Použití: přidejte novou ikonu s jejími variantami zde
 */
const svg = {
    folder: {
        outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>`,
        // solid: `<svg>...</svg>`, // Přidejte další varianty podle potřeby
    },
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

