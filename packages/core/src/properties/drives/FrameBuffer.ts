import { ParsedFileFrame } from "../../reload/parsers/types";
import { ReTimelineDrive } from "./ReTimelineDrive";

export class FrameBuffer {

    protected _currentFrame!: ParsedFileFrame;
    public get currentFrame() { return this._currentFrame; }
    public set currentFrame( frame: ParsedFileFrame ) {

        // Store the value
        this._currentFrame = frame;
        
        const currentStep = this.getFrameStep( frame );


        // ABSOLUTNI TIMESTAMPY K KODSTRANENI

        // tento konkrétní jeden

        // Všechny, které jaou menší než tento konrkténí jeden

        // Všechny, které jsou v pořadí nad 4

        // Včechny, které nejsou kontinuální

        // ODSTRANOVANI Z RELATIVNIHO INDEXU

        const allSeps = Array.from( this.bufferByRelativeTime.keys() ).map( frame => this.drive.stepsByRelative.get(frame)! );

        let counter = currentStep.index;
        const stepsThatRemain = allSeps.filter( ( step, order ) => {

            if ( step.absolute === this.currentFrame.timestamp ) {
                return false;
            }

            if ( step.relative < currentStep.relative ) {
                return false;
            }

            if ( order > 4 ) {
                return false;
            }

            if ( order !== counter + 1 ) {
                return false;
            }

            counter = counter + 1;

        } );



        // this.bufferByRelativeTime =


        // Remove bad frames
        stepsThatRemain.forEach( step => {

            this.bufferByAbsoluteTime.delete( step.absolute );
            this.bufferByRelativeTime.delete( step.relative );
            this.bufferByIndex.delete( step.index );

            this.rowIndexes = this.rowIndexes.filter(st => st !== step.index );
            this.rowRelative = this.rowRelative.filter(st => st !== step.relative );

        } );

        const numberOfStepsToLoad = this.bufferSize - stepsThatRemain.length;

        const firstStepToLoad = stepsThat


        // ODENDAM KUR

        // ODENDAM MENSI

        // ODSTRANIM TY? KTERE NEJSOU V RADE

        // SLICNU 0 až 4

        

        
        
    }

    protected getFrameStep( frame: ParsedFileFrame ) {
        return this.drive.stepsByAbsolute.get( frame.timestamp )!;
    }

    protected rowRelative: number[] = [];
    protected rowIndexes: number[] = [];

    readonly bufferSize:number =  4;

    readonly bufferByRelativeTime: Map<number, ParsedFileFrame>
    = new Map;


    constructor(
        protected readonly drive: ReTimelineDrive,
        firstFrame: ParsedFileFrame
    ) {
        this.setFrame( firstFrame );
    }

    public async setFrame( parsedFrame: ParsedFileFrame ) {
        this._currentFrame = parsedFrame;

        console.log( "____Nastavuji frame", parsedFrame.timestamp );

        await this.preload();

        this.propagate();

    }

    protected async preload() {

        console.log( "obsah bufferu", Array.from( this.bufferByAbsoluteTime.keys()

     ) );

        // Smazat předchozí framy
        for ( const [absoluteTimestamp] of this.bufferByAbsoluteTime ) {

            console.log( "///////", absoluteTimestamp, this._currentFrame.timestamp );
            if ( absoluteTimestamp < this._currentFrame.timestamp ) {
                console.log( "Mažu přednačtený", absoluteTimestamp, "nechávám", this.currentFrame.timestamp );
                this.bufferByAbsoluteTime.delete( absoluteTimestamp );
            }
        }

        // Zjistit, jaké framy zbývají do naplnění bufferu
        const latestLoadedAbsoluteTimestamp = this.bufferByAbsoluteTime.size > 0
            ? Array.from( this.bufferByAbsoluteTime.values() )[this.bufferByAbsoluteTime.size-1].timestamp
            : this._currentFrame.timestamp;
        const latestLoadedIndex = this.drive.stepsByAbsolute.get( latestLoadedAbsoluteTimestamp )!.index;

        

        const subarrayEnd = this.drive._validateIndex( 
            latestLoadedIndex + this.bufferSize 
        );

        const framesToLoad = Object.keys( this.drive.relativeSteps ).slice( latestLoadedIndex + 1, subarrayEnd ).map( value => parseInt( value ) );

        console.log( "měl bych našíst toto", framesToLoad );

        // Provést dotaz
        const frames = await Promise.all( framesToLoad.map( index => this.drive.parent.service.frameData( index ) ) )

        frames.map( frame  => console.log( "frejm", frame.timestamp ) )

        
         frames.forEach( result => this.bufferByAbsoluteTime.set( result.timestamp, result ) );

        console.log(  "Obsah bufferu po načtení", this.currentFrame.timestamp, Array.from( this.bufferByAbsoluteTime.keys() ) );

        return;
    }

    protected propagate() {
        this.drive.parent.pixels = this._currentFrame.pixels;
    }

}