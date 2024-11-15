import { Instance } from "../instance";

export abstract class AbstractLayer {

    public constructor(
        public readonly instance: Instance
    ) {}

    public abstract getLayerRoot(): HTMLElement;

    protected _mounted = false;
    public get mounted() { return this._mounted; }

    public mount() {
        if ( !this._mounted )
        if ( this.instance.root !== null ) {
            this._mounted = true;
            this.instance.root.appendChild( this.getLayerRoot() );
        }
    }

    public unmount() {
        if ( this._mounted )
        if ( this.instance.root !== null ) {
            this._mounted = false;
            this.instance.root.removeChild( this.getLayerRoot() );
        }
    }

    public destroy(): void {
        this.onDestroy();
    }

    protected abstract onDestroy(): void;

}