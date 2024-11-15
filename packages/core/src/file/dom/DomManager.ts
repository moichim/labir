import { AbstractFile } from "../AbstractFile";
import { ThermalCanvasLayer } from "../instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "../instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "../instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "../instanceUtils/VisibleLayer";
import { InstanceDOM } from "./InstanceDom";

export class DomManager {

    public readonly map: Map<HTMLDivElement, InstanceDOM> = new Map();

    public get views() { return Array.from( this.map.values() ); }
    public get containers() { return Array.from( this.map.keys() ); }

    public constructor( 
        public readonly parent: AbstractFile 
    ) {

    }

    addView(
        container: HTMLDivElement
    ): InstanceDOM|false {

        // Do nothing ht the container is already added
        if ( this.map.has( container )) {
            return false;
        }

        const view = new InstanceDOM( this.parent, container );

        this.views.push( view );
        this.containers.push( container );

        return view;

    }

    removeView(
        container: HTMLDivElement
    ) {

        // Do nothing if the container is not registered
        if ( ! this.map.has( container ) ) {
            return;
        }

        const view = this.map.get( container )!;

        view.destroy();

        this.map.delete( container );

    }

    removeAllViews() {
        
        this.views.forEach( view => view.destroy() );
        this.map.clear();

    }

    forEveryListener(
        fn: ( listener: ThermalListenerLayer ) => void,
    ) {
        this.map.forEach( view => {
            if ( view.built && view.listenerLayer ) {
                fn( view.listenerLayer );
            }
        });
    }

    forEveryCanvas(
        fn: ( canvasLayer: ThermalCanvasLayer ) => void
    ) {
        this.map.forEach( view => {
            if ( view.built && view.canvasLayer ) {
                fn( view.canvasLayer );
            }
        });
    }

    forEveryCursor(
        fn: ( cursorLayer: ThermalCursorLayer ) => void
    ) {
        this.map.forEach( view => {
            if ( view.built && view.cursorLayer ) {
                fn( view.cursorLayer );
            }
        } );
    }

    forEveryVisible(
        fn: ( visibleLayer: VisibleLayer ) => void
    ) {
        this.map.forEach( view => {
            if ( view.built && view.visibleLayer ) {
                fn( view.visibleLayer );
            }
        } );
    }



}