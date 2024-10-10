import { AbstractAnalysis, Instance, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { provide } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fromAttribute, ParsedAnalysis, ParsedAreaAnalysis, ParsedPointAnalysis, toAttribute } from "../../controls/file/analysis/presets/analysis";
import { AbstractFileProvider } from "./AbstractFileProvider";
import { fileProviderContext } from "./context/FileContexts";

@customElement("file-provider")
export class FileProviderElement extends AbstractFileProvider {

    @provide({context: fileProviderContext})
    protected providedSelf: FileProviderElement = this;

    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public thermal!: string;

    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public visible!: string;

    
    @property( {
        type: String, 
        reflect: true, 
        attribute: true,
        converter: {
            fromAttribute: fromAttribute.bind( this ),
            toAttribute: toAttribute.bind(this)
        }
    } )
    public analysis1?: ParsedAnalysis;

    @property( {
        type: String, 
        reflect: true, 
        attribute: true,
        converter: {
            fromAttribute: fromAttribute.bind( this ),
            toAttribute: toAttribute.bind(this)
        }
    } )
    public analysis2?: ParsedAnalysis;

    @property( {
        type: String, 
        reflect: true, 
        attribute: true,
        converter: {
            fromAttribute: fromAttribute.bind( this ),
            toAttribute: toAttribute.bind(this)
        }
    } )
    public analysis3?: ParsedAnalysis;

    @property( {
        type: String, 
        reflect: true, 
        attribute: true,
        converter: {
            fromAttribute: fromAttribute.bind( this ),
            toAttribute: toAttribute.bind(this)
        }
    } )
    public analysis4?: ParsedAnalysis;

    @property( {
        type: String, 
        reflect: true, 
        attribute: true,
        converter: {
            fromAttribute: fromAttribute.bind( this ),
            toAttribute: toAttribute.bind(this)
        }
    } )
    public analysis5?: ParsedAnalysis;

    @property( {
        type: String, 
        reflect: true, 
        attribute: true,
        converter: {
            fromAttribute: fromAttribute.bind( this ),
            toAttribute: toAttribute.bind(this)
        }
    } )
    public analysis6?: ParsedAnalysis;

    @property( {
        type: String, 
        reflect: true, 
        attribute: true,
        converter: {
            fromAttribute: fromAttribute.bind( this ),
            toAttribute: toAttribute.bind(this)
        }
    } )
    public analysis7?: ParsedAnalysis;

    /** Load the file and call all necessary callbacks */
    protected async load() {

        this.loading = true;

        // Trigger all callbacks
        this.onLoadingStart.call();      

        // Load the file and create the instance
        const value = await this.registry.service.loadFile(this.thermal, this.visible)
            .then( async (result) => {
                
                // Success
                if (result instanceof ThermalFileReader) {

                    // Create the instance
                    return await result.createInstance(this.group).then(instance => {

                        // Assign the instance
                        this.file = instance;

                        // Call all callbacks
                        this.onSuccess.call( instance );

                        // Clear the callbacks to free the memory
                        this.clearCallbacks();

                        this.handleLoaded( instance );

                        instance.group.registry.postLoadedProcessing();

                        return instance;

                    });

                } 
                // Failure
                else {
                    // Assign failure
                    this.failure = result as ThermalFileFailure;
                    // Call all callbacks

                    this.onFailure.call( this.failure );
                    // Clear the callbacks to free the memory
                    this.clearCallbacks();

                    return result;
                }
            })
            .then( result => {

                this.loading = false;
                return result;

            } );

        return value;

    }

    protected handleLoaded(
        instance: Instance
    ) {

        this.handleAnalysis( instance, this.analysis1 );
        this.handleAnalysis( instance, this.analysis2 );
        this.handleAnalysis( instance, this.analysis3 );
        this.handleAnalysis( instance, this.analysis4 );
        this.handleAnalysis( instance, this.analysis5 );
        this.handleAnalysis( instance, this.analysis6 );
        this.handleAnalysis( instance, this.analysis7 );

    }

    protected handleAnalysis(
        instance: Instance,
        analysis?: ParsedAnalysis
    ): void {

        if ( analysis === undefined ) {
            return;
        }

        let obj: AbstractAnalysis|undefined = undefined;

        if ( analysis.type === "point" ) {
            const point = analysis as ParsedPointAnalysis
            obj = instance.analysis.layers.placePointAt( point.name,point.top, point.left, point.color );

            if ( point.avg ) {
                obj.graph.setAvgActivation(true);
            }

        } else  {

            const area = analysis as ParsedAreaAnalysis;

            if ( area.type === "rectangle" ) {
                obj = instance.analysis.layers.placeRectAt(
                    area.name,
                    area.top,
                    area.left,
                    area.width,
                    area.height,
                    area.color
                );
            } else if ( area.type === "ellipsis" ) {
                obj = instance.analysis.layers.placeEllipsisAt(
                    area.name,
                    area.top,
                    area.left,
                    area.width,
                    area.height,
                    area.color
                );
            }

            obj?.graph.setAvgActivation( area.avg );
            obj?.graph.setMinActivation( area.min );
            obj?.graph.setMaxActivation( area.max );


        }

        obj?.setSelected();

        this.log( obj );

    }


    /** @deprecated This should be moved in load!! Callbacks need not to be registered here. */
    connectedCallback(): void {

        super.connectedCallback();

        this.load().then( result => {
            if ( result instanceof Instance ) {

                this.recieveInstance( result );


            } else {
                this.failure = result as ThermalFileFailure;
            }
        } );

    }


    



    /** Rendering */

    protected render(): unknown {
        return html`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `;
    }

}