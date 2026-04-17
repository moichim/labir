type ComponentsCatalog = Record<string, CustomElementConstructor>;

/**
 * Registers and defines all custom elements from a provided list
 */
export const defineAll = (
    catalog: ComponentsCatalog
) => {

    for ( const [tag, cls] of Object.entries( catalog ) ) {
        define( tag, cls );
    }

}

/**
 * Registers a custom element and defines it right away.
 */
export const define = (
    tag: string,
    cls: CustomElementConstructor
) => {

    if ( customElements.get( tag ) ) {
        console.warn(`Custom element '${tag}' is already defined. Skipping.`);
        return;
    }

    customElements.define( tag, cls );

}

