import { Instance } from "../instance";
import { AbstractPoint } from "./AbstractPoint";

export abstract class AbstractAnalysis {

    public readonly points: Map<string,AbstractPoint> = new Map;

    public get arrayOfPoints() {
        return Array.from( this.points.values() );
    }

    public abstract init(): void;

    protected abstract draw(): void;

    public addToListener() {

    }

    public constructor(
        public readonly file: Instance
    ) {
        
    }

    

    

    

}