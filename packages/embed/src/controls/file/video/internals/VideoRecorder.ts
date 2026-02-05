import { Instance } from "@labirthermal/core";
import { BufferTarget, getFirstEncodableVideoCodec, Mp4OutputFormat, Output, VideoSample, VideoSampleSource } from "mediabunny";
import { VideoRecorderStorage } from "./VideoRecorderStorage";
import { AbstractSingleVideoExport } from "../AbstractSingleVideoExport";

/**
 * Atribut pro označení dynamických elementů, které se mění mezi framy.
 * Tyto elementy budou mít svůj textContent aktualizován z originálu.
 */
export const DYNAMIC_CONTENT_ATTRIBUTE = "data-video-dynamic";

/**
 * Atribut pro označení canvas elementů, které se mají kopírovat.
 * Pixel data z originálního canvasu budou zkopírována do klonu.
 */
export const DYNAMIC_CANVAS_ATTRIBUTE = "data-video-canvas";

/**
 * Atribut pro označení SVG elementů, které se mění mezi framy.
 * Celý innerHTML SVG bude aktualizován z originálu.
 */
export const DYNAMIC_SVG_ATTRIBUTE = "data-video-svg";

/**
 * Atribut pro označení elementů, jejichž styly se mění mezi framy.
 * Inline styly budou aktualizovány z originálu.
 */
export const DYNAMIC_STYLE_ATTRIBUTE = "data-video-style";

export class VideoRecorder {

    private muxingCanvas?: OffscreenCanvas;
    private muxingContext?: OffscreenCanvasRenderingContext2D;

    private readonly file: Instance;
    private readonly exportedElement: HTMLElement;

    // === Připravené struktury pro rychlý export ===
    
    /** SVG wrapper obsahující foreignObject s klonovaným DOM */
    private preparedSvgWrapper?: SVGSVGElement;
    
    /** Klonovaný DOM element uvnitř foreignObject */
    private preparedClone?: HTMLElement;
    
    /** Šířka exportu v pixelech */
    private exportWidth: number = 0;
    
    /** Výška exportu v pixelech */
    private exportHeight: number = 0;

    /** Mapování: originální canvas -> <img> element v klonu */
    private canvasToImageMap: Map<HTMLCanvasElement, HTMLImageElement> = new Map();

    /** Mapování: originální dynamický element -> klonovaný element */
    private dynamicElementMap: Map<Element, Element> = new Map();

    /** Mapování: originální SVG -> klonované SVG (pro aktualizaci innerHTML) */
    private dynamicSvgMap: Map<SVGElement, SVGElement> = new Map();

    /** Mapování: originální element -> klonovaný element (pro aktualizaci stylů) */
    private dynamicStyleMap: Map<HTMLElement, HTMLElement> = new Map();

    constructor(
        private readonly app: AbstractSingleVideoExport
    ) {
        this.file = app.innerFile!;
        this.exportedElement = app.exportedElement!;
    }

    private getMuxingCanvas(): OffscreenCanvas {

        if (this.muxingCanvas) return this.muxingCanvas;

        const bounds = this.exportedElement.getBoundingClientRect();

        const canvas = new OffscreenCanvas(bounds.width, bounds.height);

        this.muxingCanvas = canvas;

        return this.muxingCanvas;

    }

    private getMuxingContext(): OffscreenCanvasRenderingContext2D {

        if (this.muxingContext) return this.muxingContext;
        if (this.muxingCanvas === undefined) this.getMuxingCanvas();
        this.muxingContext = this.muxingCanvas!.getContext("2d", { alpha: false })!;

        return this.muxingContext;
    }

    // =======================================================================
    // PŘÍPRAVA EXPORTU — volá se JEDNOU před začátkem renderování framů
    // =======================================================================

    /**
     * Jednorázová příprava exportu:
     * 1. Klonuje DOM (pouze jednou)
     * 2. Inlinuje computed styles do klonu
     * 3. Embeduje obrázky jako data URI
     * 4. Vytváří SVG wrapper s foreignObject
     * 5. Mapuje dynamické elementy a canvasy pro rychlou aktualizaci
     */
    private async prepareExport(): Promise<void> {

        const element = this.exportedElement;
        this.exportWidth = element.clientWidth;
        this.exportHeight = element.clientHeight;

        console.log("[VideoRecorder] Preparing export...", this.exportWidth, "x", this.exportHeight);

        // 1. Klonuj DOM (pouze jednou!)
        const clone = element.cloneNode(true) as HTMLElement;

        // 2. Inlinuj computed styles z originálu do klonu
        console.log("[VideoRecorder] Inlining styles...");
        this.inlineStylesRecursive(element, clone);

        // 2.5 Zploštění custom elementů — nahradí je za statický HTML
        console.log("[VideoRecorder] Flattening custom elements...");
        this.flattenCustomElements(element, clone);

        console.log( clone );

        // 3. Embeduj obrázky jako data URI
        console.log("[VideoRecorder] Embedding images...");
        await this.embedImages(clone);

        // 4. Vytvoř mapování canvasů
        console.log("[VideoRecorder] Mapping canvases...");
        this.createCanvasMap(element, clone);

        // 5. Vytvoř mapování dynamických elementů
        console.log("[VideoRecorder] Mapping dynamic elements...");
        this.createDynamicElementMap(element, clone);

        // 5.1 Vytvoř mapování dynamických SVG
        console.log("[VideoRecorder] Mapping dynamic SVGs...");
        this.createDynamicSvgMap(element, clone);

        // 5.2 Vytvoř mapování elementů s dynamickými styly
        console.log("[VideoRecorder] Mapping dynamic style elements...");
        this.createDynamicStyleMap(element, clone);

        // 6. Připrav SVG wrapper
        console.log("[VideoRecorder] Creating SVG wrapper...");
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", String(this.exportWidth));
        svg.setAttribute("height", String(this.exportHeight));

        const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");

        // Nastav XHTML namespace pro HTML obsah
        clone.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
        
        foreignObject.appendChild(clone);
        svg.appendChild(foreignObject);

        this.preparedSvgWrapper = svg;
        this.preparedClone = clone;

        console.log("[VideoRecorder] Export prepared. Canvas count:", this.canvasToImageMap.size, "Dynamic elements:", this.dynamicElementMap.size);
    }

    /**
     * Rekurzivně inlinuje computed styles z originálu do klonu.
     * Kopíruje pouze důležité CSS vlastnosti pro zrychlení.
     */
    private inlineStylesRecursive(original: Element, clone: Element): void {

        if (!(original instanceof HTMLElement) || !(clone instanceof HTMLElement)) {
            return;
        }

        const computed = getComputedStyle(original);

        // Seznam důležitých CSS vlastností k inlinování
        const importantProperties = [
            // Layout
            "display", "position", "top", "left", "right", "bottom",
            "width", "height", "min-width", "min-height", "max-width", "max-height",
            "margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
            "padding", "padding-top", "padding-right", "padding-bottom", "padding-left",
            "box-sizing", "overflow", "overflow-x", "overflow-y",
            
            // Flexbox
            "flex", "flex-direction", "flex-wrap", "justify-content", "align-items", "align-content",
            "flex-grow", "flex-shrink", "flex-basis", "order", "gap",
            
            // Grid
            "grid", "grid-template-columns", "grid-template-rows", "grid-gap", "grid-column", "grid-row",
            
            // Background
            "background", "background-color", "background-image", "background-size", "background-position",
            
            // Border
            "border", "border-width", "border-style", "border-color", "border-radius",
            "border-top", "border-right", "border-bottom", "border-left",
            
            // Text
            "color", "font", "font-family", "font-size", "font-weight", "font-style",
            "line-height", "text-align", "text-decoration", "text-transform", "white-space",
            "letter-spacing", "word-spacing",
            
            // Visual
            "opacity", "visibility", "z-index", "transform", "box-shadow", "text-shadow",
            
            // Table
            "table-layout", "border-collapse", "border-spacing"
        ];

        for (const prop of importantProperties) {
            const value = computed.getPropertyValue(prop);
            if (value && value !== "none" && value !== "normal" && value !== "auto") {
                clone.style.setProperty(prop, value);
            }
        }

        // Rekurzivně pro děti
        const origChildren = Array.from(original.children);
        const cloneChildren = Array.from(clone.children);

        for (let i = 0; i < origChildren.length && i < cloneChildren.length; i++) {
            this.inlineStylesRecursive(origChildren[i], cloneChildren[i]);
        }
    }

    /**
     * Zploštění custom elementů — nahradí custom elementy za statický HTML.
     * Tím se zabrání spouštění jejich lifecycle (connectedCallback atd.)
     * při vložení klonu do dokumentu.
     * 
     * DŮLEŽITÉ: Canvasy jsou označeny data-canvas-index atributem pro pozdější mapování.
     */
    private flattenCustomElements(original: Element, clone: Element): void {

        // Nejdřív označ všechny canvasy v originálu indexem
        const originalCanvases = original.querySelectorAll("canvas");
        originalCanvases.forEach((canvas, index) => {
            canvas.setAttribute("data-canvas-index", String(index));
        });

        // Najdi všechny custom elementy v originálu (mají pomlčku v názvu)
        const originalElements = Array.from(original.querySelectorAll("*"));
        const cloneElements = Array.from(clone.querySelectorAll("*"));

        // Iteruj od konce, abychom mohli bezpečně nahrazovat
        for (let i = originalElements.length - 1; i >= 0; i--) {
            const origEl = originalElements[i];
            const cloneEl = cloneElements[i];

            if (!cloneEl) continue;

            // Detekuj custom element (má pomlčku v názvu)
            const isCustomElement = origEl.tagName.includes("-");

            if (isCustomElement && origEl instanceof HTMLElement) {
                
                // Vytvoř náhradní <div> element
                const replacement = document.createElement("div");
                replacement.setAttribute("data-flattened-from", origEl.tagName.toLowerCase());
                
                // Zkopíruj computed styles
                const computed = getComputedStyle(origEl);
                replacement.style.display = computed.display;
                replacement.style.width = computed.width;
                replacement.style.height = computed.height;
                replacement.style.position = computed.position;
                replacement.style.margin = computed.margin;
                replacement.style.padding = computed.padding;
                replacement.style.boxSizing = computed.boxSizing;
                replacement.style.background = computed.background;
                replacement.style.backgroundColor = computed.backgroundColor;

                // Pokud má shadow root, vezmi jeho obsah
                if (origEl.shadowRoot) {
                    // Přidej HTML obsah ze shadow DOM
                    for (const child of origEl.shadowRoot.children) {
                        if (child.tagName !== "STYLE") {
                            const childClone = child.cloneNode(true) as Element;
                            // Inlinuj styly i pro tento obsah
                            this.inlineStylesRecursive(child, childClone);
                            replacement.appendChild(childClone);
                        }
                    }
                } else {
                    // Není shadow DOM — zkopíruj light DOM obsah
                    for (const child of origEl.children) {
                        const childClone = child.cloneNode(true) as Element;
                        this.inlineStylesRecursive(child, childClone);
                        replacement.appendChild(childClone);
                    }
                }

                // Rekurzivně zpracuj i vnořené custom elementy v replacement
                const nestedCustom = replacement.querySelectorAll("*");
                for (const nested of nestedCustom) {
                    if (nested.tagName.includes("-")) {
                        // Najdi odpovídající originální element
                        const nestedOrig = origEl.shadowRoot?.querySelector(nested.tagName.toLowerCase()) 
                            || origEl.querySelector(nested.tagName.toLowerCase());
                        if (nestedOrig) {
                            // Rekurzivně zploštit
                            this.flattenSingleElement(nestedOrig as HTMLElement, nested as HTMLElement);
                        }
                    }
                }

                // Nahraď custom element za replacement
                cloneEl.parentNode?.replaceChild(replacement, cloneEl);

                console.log(`[VideoRecorder] Flattened: <${origEl.tagName.toLowerCase()}>`);
            }
        }
    }

    /**
     * Zploští jeden custom element
     */
    private flattenSingleElement(original: HTMLElement, clone: HTMLElement): void {
        
        const replacement = document.createElement("div");
        replacement.setAttribute("data-flattened-from", original.tagName.toLowerCase());

        const computed = getComputedStyle(original);
        replacement.style.display = computed.display;
        replacement.style.width = computed.width;
        replacement.style.height = computed.height;

        if (original.shadowRoot) {
            for (const child of original.shadowRoot.children) {
                if (child.tagName !== "STYLE") {
                    const childClone = child.cloneNode(true) as Element;
                    this.inlineStylesRecursive(child, childClone);
                    replacement.appendChild(childClone);
                }
            }
        }

        clone.parentNode?.replaceChild(replacement, clone);
    }

    /**
     * Převede všechny <img> a background-image na data URI
     */
    private async embedImages(element: Element): Promise<void> {

        // <img> elementy
        const images = element.querySelectorAll("img");
        const imagePromises: Promise<void>[] = [];

        for (const img of images) {
            if (img.src && !img.src.startsWith("data:")) {
                imagePromises.push(
                    this.fetchAsDataUri(img.src)
                        .then(dataUri => { img.src = dataUri; })
                        .catch(e => console.warn("[VideoRecorder] Failed to embed image:", img.src, e))
                );
            }
        }

        await Promise.all(imagePromises);
    }

    /**
     * Načte URL jako data URI
     */
    private async fetchAsDataUri(url: string): Promise<string> {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    /**
     * Vytvoří mapování mezi originálními canvasy a <img> elementy v klonu.
     * Nahrazuje <canvas> elementy za <img> elementy v klonu.
     * Používá data-canvas-index atribut pro správné mapování po zploštění.
     */
    private createCanvasMap(original: Element, clone: Element): void {

        this.canvasToImageMap.clear();

        // Najdi všechny canvasy v originálu (ty mají data-canvas-index z flattenCustomElements)
        const originalCanvases = original.querySelectorAll("canvas");
        
        // Najdi všechny canvasy v klonu (mohou být v jiné struktuře po zploštění)
        const cloneCanvases = clone.querySelectorAll("canvas");

        console.log("[VideoRecorder] Found canvases in original:", originalCanvases.length);
        console.log("[VideoRecorder] Found canvases in clone:", cloneCanvases.length);

        // Mapuj canvasy podle data-canvas-index
        for (const origCanvas of originalCanvases) {
            const index = origCanvas.getAttribute("data-canvas-index");
            if (index === null) continue;

            // Najdi odpovídající canvas v klonu
            const cloneCanvas = clone.querySelector(`canvas[data-canvas-index="${index}"]`) as HTMLCanvasElement | null;
            
            if (!cloneCanvas) {
                console.warn(`[VideoRecorder] Canvas with index ${index} not found in clone`);
                continue;
            }

            const origCanvasEl = origCanvas as HTMLCanvasElement;
            
            // Vytvoř <img> element jako náhradu za canvas
            const img = document.createElement("img");
            img.width = origCanvasEl.width;
            img.height = origCanvasEl.height;
            img.style.width = cloneCanvas.style.width || `${origCanvasEl.width}px`;
            img.style.height = cloneCanvas.style.height || `${origCanvasEl.height}px`;
            img.style.display = "block";
            img.setAttribute("data-canvas-index", index);
            
            // Inicializuj s aktuálním obsahem canvasu
            try {
                const dataUrl = this.getCanvasDataUrl(origCanvasEl);
                if (dataUrl) {
                    img.src = dataUrl;
                }
            } catch (e) {
                console.warn("[VideoRecorder] Failed to get canvas data:", e);
            }
            
            // Nahraď canvas za img v klonu
            cloneCanvas.parentNode?.replaceChild(img, cloneCanvas);
            
            this.canvasToImageMap.set(origCanvasEl, img);
            console.log(`[VideoRecorder] Mapped canvas ${index}: ${origCanvasEl.width}x${origCanvasEl.height}`);
        }

        console.log("[VideoRecorder] Total canvas mappings:", this.canvasToImageMap.size);
    }

    /**
     * Vytvoří mapování mezi originálními a klonovanými dynamickými elementy.
     * Hledá elementy s atributem DYNAMIC_CONTENT_ATTRIBUTE včetně shadow DOM.
     */
    private createDynamicElementMap(original: Element, clone: Element): void {

        this.dynamicElementMap.clear();

        // Hledej v celém stromu včetně shadow DOM
        const originalDynamic = this.querySelectorAllDeep(original, `[${DYNAMIC_CONTENT_ATTRIBUTE}]`);
        const cloneDynamic = clone.querySelectorAll(`[${DYNAMIC_CONTENT_ATTRIBUTE}]`);

        console.log("[VideoRecorder] Found dynamic elements (including shadow DOM):", originalDynamic.length);
        console.log("[VideoRecorder] Found dynamic elements in clone:", cloneDynamic.length);

        // Mapuj podle data-dynamic-index
        originalDynamic.forEach((origEl, index) => {
            origEl.setAttribute("data-dynamic-index", String(index));
        });

        // Po zploštění bychom měli mít odpovídající elementy v klonu
        for (let i = 0; i < originalDynamic.length && i < cloneDynamic.length; i++) {
            this.dynamicElementMap.set(originalDynamic[i], cloneDynamic[i]);
        }
    }

    /**
     * Vytvoří mapování pro dynamické SVG elementy.
     * Hledá SVG s atributem DYNAMIC_SVG_ATTRIBUTE včetně shadow DOM.
     */
    private createDynamicSvgMap(original: Element, clone: Element): void {

        this.dynamicSvgMap.clear();

        const originalSvgs = this.querySelectorAllDeep(original, `svg[${DYNAMIC_SVG_ATTRIBUTE}]`);
        const cloneSvgs = clone.querySelectorAll(`svg[${DYNAMIC_SVG_ATTRIBUTE}]`);

        console.log("[VideoRecorder] Found dynamic SVGs (including shadow DOM):", originalSvgs.length);

        for (let i = 0; i < originalSvgs.length && i < cloneSvgs.length; i++) {
            this.dynamicSvgMap.set(originalSvgs[i] as SVGElement, cloneSvgs[i] as SVGElement);
        }
    }

    /**
     * Vytvoří mapování pro elementy s dynamickými styly.
     * Hledá elementy s atributem DYNAMIC_STYLE_ATTRIBUTE včetně shadow DOM.
     */
    private createDynamicStyleMap(original: Element, clone: Element): void {

        this.dynamicStyleMap.clear();

        const originalStyled = this.querySelectorAllDeep(original, `[${DYNAMIC_STYLE_ATTRIBUTE}]`);
        const cloneStyled = clone.querySelectorAll(`[${DYNAMIC_STYLE_ATTRIBUTE}]`);

        console.log("[VideoRecorder] Found dynamic style elements (including shadow DOM):", originalStyled.length);

        for (let i = 0; i < originalStyled.length && i < cloneStyled.length; i++) {
            this.dynamicStyleMap.set(originalStyled[i] as HTMLElement, cloneStyled[i] as HTMLElement);
        }
    }

    /**
     * querySelector pro celý DOM strom včetně shadow DOM
     */
    private querySelectorAllDeep(root: Element, selector: string): Element[] {
        const results: Element[] = [];

        // Hledej v aktuálním elementu
        const matches = root.querySelectorAll(selector);
        results.push(...Array.from(matches));

        // Hledej v shadow DOM všech custom elementů
        const allElements = root.querySelectorAll("*");
        for (const el of allElements) {
            if (el.shadowRoot) {
                const shadowMatches = el.shadowRoot.querySelectorAll(selector);
                results.push(...Array.from(shadowMatches));

                // Rekurzivně hledej v shadow DOM
                const nestedResults = this.querySelectorAllDeepInShadow(el.shadowRoot, selector);
                results.push(...nestedResults);
            }
        }

        return results;
    }

    /**
     * Rekurzivní helper pro hledání v shadow DOM
     */
    private querySelectorAllDeepInShadow(shadowRoot: ShadowRoot, selector: string): Element[] {
        const results: Element[] = [];

        const allElements = shadowRoot.querySelectorAll("*");
        for (const el of allElements) {
            if (el.shadowRoot) {
                const shadowMatches = el.shadowRoot.querySelectorAll(selector);
                results.push(...Array.from(shadowMatches));
                
                const nestedResults = this.querySelectorAllDeepInShadow(el.shadowRoot, selector);
                results.push(...nestedResults);
            }
        }

        return results;
    }

    // =======================================================================
    // AKTUALIZACE DYNAMICKÉHO OBSAHU — volá se pro KAŽDÝ frame
    // =======================================================================

    /**
     * Aktualizuje pouze dynamický obsah v klonu:
     * 1. Aktualizuje src <img> elementů z originálních canvasů
     * 2. Aktualizuje textContent dynamických elementů
     * 3. Aktualizuje innerHTML dynamických SVG
     * 4. Aktualizuje inline styly dynamických elementů
     * 
     * Toto je MNOHEM rychlejší než klonování celého DOM!
     */
    private updateDynamicContent(): void {

        // 1. Aktualizuj src <img> elementů z originálních canvasů
        for (const [origCanvas, img] of this.canvasToImageMap) {
            try {
                const dataUrl = this.getCanvasDataUrl(origCanvas);
                if (dataUrl) {
                    img.src = dataUrl;
                }
            } catch (e) {
                console.warn("[VideoRecorder] Failed to update canvas image:", e);
            }
        }

        // 2. Aktualizuj textContent dynamických elementů
        for (const [origEl, cloneEl] of this.dynamicElementMap) {
            if (cloneEl.textContent !== origEl.textContent) {
                cloneEl.textContent = origEl.textContent;
            }
        }

        // 3. Aktualizuj innerHTML dynamických SVG
        for (const [origSvg, cloneSvg] of this.dynamicSvgMap) {
            if (cloneSvg.innerHTML !== origSvg.innerHTML) {
                cloneSvg.innerHTML = origSvg.innerHTML;
            }
        }

        // 4. Aktualizuj inline styly dynamických elementů
        for (const [origEl, cloneEl] of this.dynamicStyleMap) {
            const origStyle = origEl.getAttribute("style") || "";
            const cloneStyle = cloneEl.getAttribute("style") || "";
            if (cloneStyle !== origStyle) {
                cloneEl.setAttribute("style", origStyle);
            }
        }
    }

    /**
     * Získá data URL z canvasu - podporuje i WebGL kontexty
     */
    private getCanvasDataUrl(canvas: HTMLCanvasElement): string | null {
        
        // Zkus zjistit typ kontextu
        const webgl2 = canvas.getContext("webgl2");
        const webgl = canvas.getContext("webgl");
        const ctx2d = canvas.getContext("2d");

        if (webgl2 || webgl) {
            // WebGL canvas - musíme číst pixels a překreslit na 2D canvas
            return this.webglCanvasToDataUrl(canvas, webgl2 || webgl!);
        } else if (ctx2d) {
            // Standardní 2D canvas
            return canvas.toDataURL("image/png");
        } else {
            // Zkus přímo toDataURL (může fungovat pro některé případy)
            try {
                return canvas.toDataURL("image/png");
            } catch (e) {
                console.warn("[VideoRecorder] Cannot get canvas data:", e);
                return null;
            }
        }
    }

    /**
     * Konvertuje WebGL canvas na data URL pomocí readPixels
     */
    private webglCanvasToDataUrl(
        canvas: HTMLCanvasElement, 
        gl: WebGLRenderingContext | WebGL2RenderingContext
    ): string | null {

        const width = canvas.width;
        const height = canvas.height;

        // Přečti pixels z WebGL
        const pixels = new Uint8Array(width * height * 4);
        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

        // Vytvoř pomocný canvas pro konverzi
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = width;
        tempCanvas.height = height;
        const tempCtx = tempCanvas.getContext("2d")!;

        // Vytvoř ImageData a vlož pixels (WebGL má Y osu obráceně)
        const imageData = tempCtx.createImageData(width, height);
        
        // Překopíruj pixels s obrácenou Y osou
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const srcIdx = ((height - y - 1) * width + x) * 4;
                const dstIdx = (y * width + x) * 4;
                imageData.data[dstIdx] = pixels[srcIdx];         // R
                imageData.data[dstIdx + 1] = pixels[srcIdx + 1]; // G
                imageData.data[dstIdx + 2] = pixels[srcIdx + 2]; // B
                imageData.data[dstIdx + 3] = pixels[srcIdx + 3]; // A
            }
        }

        tempCtx.putImageData(imageData, 0, 0);
        
        return tempCanvas.toDataURL("image/png");
    }

    // =======================================================================
    // RASTERIZACE — převod SVG na JPEG blob
    // =======================================================================

    /**
     * Rasterizuje připravené SVG na JPEG blob.
     * Používá Blob URL pro načtení SVG a pak kreslí na canvas.
     */
    private async rasterize(): Promise<Blob | null> {

        if (!this.preparedSvgWrapper) {
            console.error("[VideoRecorder] SVG wrapper not prepared!");
            return null;
        }

        // Serializuj SVG
        const serialized = new XMLSerializer().serializeToString(this.preparedSvgWrapper);
        
        // Vytvoř Blob URL místo data URI (může pomoci s některými prohlížeči)
        const svgBlob = new Blob([serialized], { type: "image/svg+xml;charset=utf-8" });
        const blobUrl = URL.createObjectURL(svgBlob);

        try {
            // Načti jako Image
            const img = await new Promise<HTMLImageElement>((resolve, reject) => {
                const img = new Image();
                img.width = this.exportWidth;
                img.height = this.exportHeight;
                img.onload = () => resolve(img);
                img.onerror = (e) => {
                    console.error("[VideoRecorder] Image load error:", e);
                    reject(new Error(`Failed to load SVG image`));
                };
                img.src = blobUrl;
            });

            // Nakresli na canvas
            const canvas = this.getMuxingCanvas();
            canvas.width = this.exportWidth;
            canvas.height = this.exportHeight;

            const ctx = this.getMuxingContext();
            ctx.clearRect(0, 0, this.exportWidth, this.exportHeight);
            ctx.drawImage(img, 0, 0);

            // Převeď na JPEG blob
            return canvas.convertToBlob({
                type: "image/jpeg",
                quality: this.app.renderProps.jpegQuality
            });

        } finally {
            // Uvolni Blob URL
            URL.revokeObjectURL(blobUrl);
        }
    }

    // =======================================================================
    // HLAVNÍ METODA PRO ZÁZNAM FRAMŮ
    // =======================================================================

    private async recordFrames(
        storage: VideoRecorderStorage
    ): Promise<void> {

        // === PŘÍPRAVA (pouze jednou!) ===
        await this.prepareExport();

        const totalFrames = this.file.timeline.frames.length;
        console.log("[VideoRecorder] Starting frame recording. Total frames:", totalFrames);

        let frameCount = 0;

        for (const frame of this.file.timeline.frames) {

            // Nastav čas a překresli thermal data
            await this.file.timeline.setRelativeTime(frame.relative);
            await this.file.draw();

            // === AKTUALIZACE (pouze dynamický obsah!) ===
            this.updateDynamicContent();

            // === RASTERIZACE ===
            const blob = await this.rasterize();

            if (blob) {
                await storage.put(frame.index, frame.relative, blob);
            } else {
                console.warn("[VideoRecorder] Failed to rasterize frame:", frame.index);
            }

            frameCount++;
            if (frameCount % 10 === 0) {
                console.log(`[VideoRecorder] Progress: ${frameCount}/${totalFrames} frames`);
            }
        }

        console.log("[VideoRecorder] Frame recording complete.");
    }

    /**
     * Vyčistí připravené struktury po dokončení exportu
     */
    private cleanup(): void {
        this.preparedSvgWrapper = undefined;
        this.preparedClone = undefined;
        this.canvasToImageMap.clear();
        this.dynamicElementMap.clear();
        this.dynamicSvgMap.clear();
        this.dynamicStyleMap.clear();
        this.muxingCanvas = undefined;
        this.muxingContext = undefined;
    }


    private async composeVideo(
        storage: VideoRecorderStorage
    ): Promise<void> {

        const output = new Output({
            target: new BufferTarget(), // stored in memory
            format: new Mp4OutputFormat()
        });

        const getSupportedVideoCodecs = output.format.getSupportedVideoCodecs();

        console.log("Supported video codecs:", getSupportedVideoCodecs);

        const codec = await getFirstEncodableVideoCodec(
            output.format.getSupportedVideoCodecs()
        );

        console.log("selected codec:", codec);

        const source = new VideoSampleSource({
            codec: "vp9",//codec!,
            bitrate: this.app.renderProps.mp4Quality
        });

        output.addVideoTrack(source);

        output.start();

        const canvas = this.getMuxingCanvas();
        const width = canvas.width;
        const height = canvas.height;

        const context = this.getMuxingContext();

        await storage.forEveryRecord(async (record) => {

            const blob = new Blob([record.buffer], { type: record.type });

            const bitmap = await createImageBitmap(blob);
            context.clearRect(0, 0, width, height);
            context.drawImage(bitmap, 0, 0);

            const videoFrame = new VideoFrame(
                canvas,
                {
                    timestamp: record.timeInRelativeMs * 1000
                }
            );

            const sample = new VideoSample(
                videoFrame
            );

            await source.add(sample, {
                keyFrame: true
            });

            videoFrame.close();
            sample.close();
            bitmap.close();

        });

        source.close();

        await output.finalize();

        const blob = new Blob([output.target.buffer!], { type: "video/mp4" });

        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "exported-video.mp4";
        a.click();
        a.remove();



    }




    public async capture(): Promise<void> {

        const start = performance.now();

        const storage = new VideoRecorderStorage(this.file);

        try {
            await this.recordFrames(storage);

            const mid = performance.now();
            console.log("[VideoRecorder] Recording time:", mid - start, "ms");

            await this.composeVideo(storage);

            const end = performance.now();
            console.log("[VideoRecorder] Composing time:", end - mid, "ms");

            await storage.clear();

            const clear = performance.now();
            console.log("[VideoRecorder] Clear time:", clear - end, "ms");
            console.log("[VideoRecorder] Total time:", clear - start, "ms");

        } finally {
            // Vždy vyčisti připravené struktury
            this.cleanup();
        }
    }

}