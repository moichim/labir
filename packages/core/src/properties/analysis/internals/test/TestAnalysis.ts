import { Instance } from "../../../../file/instance";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { TestArea } from "./TestArea";
import { TestPoint } from "./TestPoint";

export class TestAnalysis extends AbstractAnalysis {


    public readonly tl: TestPoint;
    public readonly tr: TestPoint;
    public readonly bl: TestPoint;
    public readonly br: TestPoint;

    public readonly area: TestArea;

    constructor(
        key: string,
        file: Instance
    ) {
        super(key, file);

        // Create points
        this.tl = this.addPoint( "tl", 10, 10, "pink" );
        this.tr = this.addPoint( "tr", 100, 10, "orange" );
        this.bl = this.addPoint( "bl", 10, 100, "lightgray" );
        this.br = this.addPoint("br", 100, 100, "violet");

        this.tl.syncXWith( this.bl );
        this.tl.syncYWith( this.tr );

        this.tr.syncXWith( this.br );
        this.tr.syncYWith( this.tl );

        this.bl.syncXWith( this.tl );
        this.bl.syncYWith( this.br );

        this.br.syncXWith( this.tr );
        this.br.syncYWith( this.bl );

        this.area = new TestArea( this, 10, 100, 10, 100 );

        this.tl.onX.add( "areaX", value => {
            this.area.setLeft(value);
        } );
        
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
        y: number,
        color: string
    ) {
        const point = new TestPoint(role, x, y, this, color);
        this.points.set( role, point );
        return point;
    }
    
}