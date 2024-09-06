import { Instance } from "../instance";
import { AbstractAnalysis } from "./AbstractAnalysis";
import { TestPoint } from "./TestPoint";

export class TestAnalysis extends AbstractAnalysis {

    constructor(
        file: Instance
    ) {
        super(file);
        this.addPoint( "debug", 15, 51 );
        this.addPoint( "another", 14, 50 );
        this.addPoint( "yet another", 50, 10 );
    }

    public init(): void {
        this.points.forEach( point => point.createElement() );
        this.points.forEach( point => point.draw() );
    }

    protected draw(): void {
        // throw new Error("Method not implemented.");
    }

    addPoint(
        role: string,
        x: number,
        y: number
    ) {
        this.points.set( role, new TestPoint( x, y, this ) );
    }
    
}