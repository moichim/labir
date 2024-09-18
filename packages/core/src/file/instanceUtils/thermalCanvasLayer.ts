import { Instance } from "../instance";
import { AbstractLayer } from "./AbstractLayer";
import ThermalDomFactory from "./domFactories";

/** Displays the canvas and renders it */
export class ThermalCanvasLayer extends AbstractLayer {

    protected get pool() {
        return this.instance.pool;
    }

    protected container: HTMLDivElement;
    public readonly canvas: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;

    // protected offscreen: OffscreenCanvas;

    protected get width() { return this.instance.width; }
    protected get height() { return this.instance.height; }
    protected get pixels() { return this.instance.pixels; }
    protected get from() {
        return this.instance.group.registry.range.currentRange
            ? this.instance.group.registry.range.currentRange.from
            : this.instance.min;
    }
    protected get to() {
        return this.instance.group.registry.range.currentRange
            ? this.instance.group.registry.range.currentRange.to
            : this.instance.max;
    }

    protected _opacity: number = 1;
    public get opacity() { return this._opacity; }
    public set opacity(value: number) {
        this._opacity = Math.max(Math.min(value, 1), 0);
        if (this._opacity !== 1)
            this.getLayerRoot().style.opacity = this._opacity.toString();
        else {
            this.getLayerRoot().style.removeProperty("opacity");
        }
    }

    public constructor(
        instance: Instance
    ) {

        super(instance);

        this.container = ThermalDomFactory.createCanvasContainer();

        this.canvas = ThermalDomFactory.createCanvas();
        this.canvas.width = this.instance.width;
        this.canvas.height = this.instance.height;

        // this.offscreen = this.canvas.transferControlToOffscreen();

        this.context = this.canvas.getContext("2d")!;

        this.container.appendChild(this.canvas);



    }

    public getLayerRoot(): HTMLElement {
        return this.container;
    }

    protected onDestroy(): void {
        this.canvas.remove();
        this.container.remove();
    }

    /** Returns an array of 255 RGB colors */
    protected getPalette(): string[] {
        return this.instance.group.registry.palette.currentPalette.pixels;
    }

    public async draw(): Promise<void> {

        const paletteColors = this.getPalette();

        // Transfer it to thread
        const image = await this.pool.exec( async (
            from: number,
            to: number,
            width: number,
            height: number,
            pixels: number[],
            palette: string[]
        ) => {

            const canvas = new OffscreenCanvas( width, height );

            const context = canvas.getContext( "2d" )!;

            const displayRange = to - from;


            for (let x = 0; x <= width; x++) {

                for (let y = 0; y <= height; y++) {

                    const index = x + (y * width);

                    // Clamp temperature to the displayedRange
                    let temperature = pixels[index];
                    if (temperature < from)
                        temperature = from;
                    if (temperature > to)
                        temperature = to;

                    const temperatureRelative = temperature - from;
                    const temperatureAspect = temperatureRelative / displayRange;
                    const colorIndex = Math.round(255 * temperatureAspect);

                    const color = palette[colorIndex];

                    context!.fillStyle = color;
                    context!.fillRect(x, y, 1, 1);

                }

            }

            const imageData = context.getImageData(0,0,width,height);

            const result = await createImageBitmap( imageData );

            return result;

        }, [
            this.from,
            this.to,
            this.width,
            this.height,
            this.pixels,
            paletteColors
        ], {});

        // Place it in context
        this.context.drawImage( image, 0, 0 );

    }

    public exportAsPng() {
        const image = this.canvas.toDataURL()
        const link = document.createElement("a");
        link.download = this.instance.fileName.replace(".lrc", "_exported.png");
        link.href = image;
        link.click();
    }

}