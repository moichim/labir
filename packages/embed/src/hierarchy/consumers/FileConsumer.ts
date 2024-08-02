import { Instance, ThermalFileFailure } from "@labir/core";
import { FileProviderElement } from "../providers/FileProvider";
import { GroupConsumer } from "./GroupConsumer";
import { state } from "lit/decorators.js";
import { TemplateResult } from "lit";

export abstract class FileConsumer extends GroupConsumer {

    protected parentFileProviderElement?: FileProviderElement;

    @state()
    protected instance?: Instance;

    @state()
    protected error?: ThermalFileFailure;

    /** Accessible asynchronously after the file is loaded */


    /** Accessible asynchronously after the file is loaded */

    public constructor() {
        super();

        // Get the parent provider element from the hierarchy
        this.parentFileProviderElement = this.getParentFile();

        // if the provider exists, append all the callbacks
        if ( this.parentFileProviderElement ) {

            // INTERNAL CALLBACKS - ASSIGNEMENT TO LOCAL PROPERTIES

            this.parentFileProviderElement.registerSuccessCallback(
                [this.UUID, "internal"].join("_"),
                instance => {
                    this.instance = instance;
                }
            );

            this.parentFileProviderElement.registerFailureCallback(
                [this.UUID,"internal"].join( "_" ),
                failure => {
                    this.error = failure;
                }
            );


            // IMPLEMENTED CALLBACKS
            
            this.parentFileProviderElement.registerSuccessCallback( 
                this.UUID, 
                this.onInstanceCreated.bind( this ) 
            );

            this.parentFileProviderElement.registerFailureCallback( 
                this.UUID, 
                this.onFailure.bind( this ) 
            );
        } else {
            throw new Error( "Tento komponent není v souboru!" );
        }

        

    }

    private getParentFile(): FileProviderElement | undefined {
    
        let currentParent = this.parentElement;
        let provider: FileProviderElement | undefined;

        if ( !currentParent ) {
            return undefined;
        }


        while ( currentParent && !provider ) {

            if ( currentParent instanceof FileProviderElement ) {
                provider = currentParent;
                currentParent = null;
            } else {
                currentParent = currentParent.parentElement;
            }

        }

        return provider;
    
    }

    public abstract onInstanceCreated( instance: Instance ): void;

    public abstract onFailure( error: ThermalFileFailure ): void;

    protected abstract renderLoading(): TemplateResult;

    protected abstract renderSuccess(): TemplateResult;

    protected abstract renderFailure(): TemplateResult;

}