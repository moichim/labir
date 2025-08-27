import { Instance } from "../../instance";
import { AbstractLayer } from "./AbstractLayer";
import ThermalDomFactory from "../domFactories";
import { PointAnalysis } from "../../../properties/analysis/analysis/internals/point/PointAnalysis";

type AnalysisExtractDefinition = [
    /** Type */
    string,
    /** ID */
    string,
    /** Top */
    number,
    /** Left */
    number,
    /** Width */
    number,
    /** Height */
    number
]

/** Displays the canvas and renders it */
export class ThermalCanvasLayer extends AbstractLayer {

    protected renderCount: number = 0;

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
            this.canvas.style.opacity = this._opacity.toString();
        else {
            this.canvas.style.removeProperty("opacity");
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

        this.context.imageSmoothingEnabled = false;

        this.container.appendChild(this.canvas);

        this.opacity = this.instance.group.registry.opacity.value;



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

    public async draw(): Promise<boolean> {

        this.renderCount += 1;

        const paletteColors = this.getPalette();

        try {

            const analysis: AnalysisExtractDefinition[] = this.instance.analysis.value.map( a => {

                if ( a instanceof PointAnalysis ) {
                    return [ a.getType(), a.key, a.top, a.left, 1, 1 ]
                }

                return [ a.getType(), a.key, a.top, a.left, a.width, a.height ];

            } );


            // Transfer it to thread
            const image = await this.pool.exec(async (
                from: number,
                to: number,
                width: number,
                height: number,
                pixels: number[],
                palette: string[],
                analysis: AnalysisExtractDefinition[]
            ) => {

                const canvas = new OffscreenCanvas(width, height);

                const context = canvas.getContext("2d")!;

                const displayRange = to - from;


                const buffer = analysis.map( a => {
                    return {
                        id: a[1],
                        type: a[0],
                        min: {
                            value: Infinity,
                        },
                        max: {
                            value: -Infinity
                        },
                        avg: {
                            value: 0,
                            sum: 0,
                            count: 0
                        }
                    }
                } );


                for (let x = 0; x < width; x++) {

                    for (let y = 0; y < height; y++) {


                        /**
                         * Render the HTML to the offcanvas
                         */

                        const index = x + (y * width);

                        // Clamp temperature to the displayedRange
                        const rawTemperature = pixels[index];
                        let temperature = rawTemperature;
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


                        const isWithin = (x: number, y: number, la: number, ta: number, wa: number, ha: number): boolean => {
                            const centerX = la + wa / 2;
                            const centerY = ta + ha / 2;
                            const normalizedX = (x - centerX) / (wa / 2);
                            const normalizedY = (y - centerY) / (ha / 2);
                            return normalizedX * normalizedX + normalizedY * normalizedY <= 1;
                        }

                        /**
                         * Process the analysis
                         */
                        analysis.forEach( (a,index) => {

                            const bufferValue = buffer[index];

                            const [ type, id, top, left, w, h ] = a;

                            id;

                            // Point
                            if ( type === "point" ) {
                                if ( x === left && y === top ) {
                                    bufferValue.avg.value = rawTemperature;
                                }
                            }

                            // Rectangle
                            else if ( type === "rectangle" ) {

                                if ( 
                                    x >= left 
                                    && x < left + w 
                                    && y >= top
                                    && y < top + h
                                ) {

                                    if ( rawTemperature < bufferValue.min.value ) {
                                        bufferValue.min.value = rawTemperature;
                                    }
                                    if ( rawTemperature > bufferValue.max.value ) {
                                        bufferValue.max.value = rawTemperature;
                                    }
                                    bufferValue.avg.count = bufferValue.avg.count + 1;
                                    bufferValue.avg.sum = bufferValue.avg.sum + rawTemperature;

                                }

                            }

                            // Ellipsis
                            else if ( type === "ellipsis" ) {

                                if ( isWithin(x,y,left,top, width, height ) ) {
                                    if ( rawTemperature < bufferValue.min.value ) {
                                        bufferValue.min.value = rawTemperature;
                                    }
                                    if ( rawTemperature > bufferValue.max.value ) {
                                        bufferValue.max.value = rawTemperature;
                                    }

                                    bufferValue.avg.count = bufferValue.avg.count + 1;
                                    bufferValue.avg.sum = bufferValue.avg.sum + rawTemperature;
                                }

                            }

                        } );


                    }

                }

                const stats = buffer.map( a => {
                    return {
                        id: a.id,
                        min: a.min.value !== Infinity ? a.min.value : undefined,
                        max: a.max.value !== -Infinity ? a.max.value : undefined,
                        avg: a.type === "point"
                            ? a.avg.value
                            : a.avg.sum / a.avg.count
                    }
                } );

                const imageData = context.getImageData(0, 0, width, height);

                const result = await createImageBitmap(imageData);

                return {
                    image: result,
                    stats
                };

            }, [
                this.from,
                this.to,
                this.width,
                this.height,
                this.pixels,
                paletteColors,
                analysis
            ], {});

            image.stats.forEach( a => {
                const analysis = this.instance.analysis.layers.get( a.id );
                analysis?.dangerouslySetValues(a.avg, a.min, a.max);
            } );

            // Place it in context
            this.context.drawImage(image.image, 0, 0);

            return true;



        } catch (error) {

            if ( error instanceof Error ) {

                if ( error.message === "OffscreenCanvas is not defined" ) {
                    // do nothing
                    return false;
                }

                console.error( error );
            }

        }

        return false;



    }

    public exportAsPng() {
        const image = this.canvas.toDataURL()
        const link = document.createElement("a");
        link.download = this.instance.fileName.replace(".lrc", "_exported.png");
        link.href = image;
        link.click();
    }

}