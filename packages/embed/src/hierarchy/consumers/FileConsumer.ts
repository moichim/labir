import { Instance, ThermalFileFailure } from "@labir/core";
import { state } from "lit/decorators.js";
import { FileProviderElement } from "../providers/FileProvider";
import { GroupConsumer } from "./GroupConsumer";
import { LitElement } from "lit";

export abstract class FileConsumer extends GroupConsumer {

    protected parentFileProviderElement?: FileProviderElement;

    protected internalCallbackUUID = `${this.UUID}__internal_callback`;

    @state()
    protected loading: boolean = true;

    @state()
    protected instance?: Instance;

    @state()
    protected error?: ThermalFileFailure;


    connectedCallback(): void {

        this.log( "Připojuji", this.tagName, this.parentFileProviderElement, this.parentElement );

        super.connectedCallback();

        // Get the parent provider element from the hierarchy
        this.parentFileProviderElement = this.getParentFile();

        // if the provider exists, append all the callbacks
        if (this.parentFileProviderElement) {

            // INTERNAL CALLBACKS - ASSIGNEMENT TO LOCAL PROPERTIES

            this.parentFileProviderElement.registerLoadingCallback(
                this.internalCallbackUUID,
                () => {
                    this.log( "načítání začítání" );
                    this.loading = true;
                }
            );

            this.parentFileProviderElement.registerSuccessCallback(
                this.internalCallbackUUID,
                instance => {
                    this.instance = instance;
                    this.loading = false;
                }
            );

            this.parentFileProviderElement.registerFailureCallback(
                this.internalCallbackUUID,
                failure => {
                    this.error = failure;
                    this.loading = false;
                }
            );


            // IMPLEMENTED CALLBACKS

            this.parentFileProviderElement.registerSuccessCallback(
                this.UUID,
                this.onInstanceCreated.bind(this)
            );

            this.parentFileProviderElement.registerFailureCallback(
                this.UUID,
                this.onFailure.bind(this)
            );
        } else {
            throw new Error("Tento komponent není v souboru!");
        }
    }

    private getParentFile(): FileProviderElement | undefined {

        let currentParent = this.parentElement;
        let provider: FileProviderElement | undefined;

        if (!currentParent) {
            return undefined;
        }

        if ( currentParent instanceof FileProviderElement ) {
            return currentParent;
        }


        while (currentParent && !provider) {

            if (currentParent instanceof FileProviderElement) {
                provider = currentParent;
                currentParent = null;
            } else {

                // If parent is a custom element, there is a chance that the parent is above the shadow DOM
                if ( currentParent instanceof LitElement ) {

                    // If the parent has a parent, take it
                    if ( currentParent.parentElement ) {
                        currentParent = currentParent.parentElement
                    } 
                    // If the parent has no parent, it means the component is nested and therefore we need to look beyond the shadow root boundaries
                    else {

                        const node = currentParent.getRootNode() as unknown as Element;

                        if ( "host" in node ) {
                            currentParent = node.host as HTMLElement; //eslint-disable-line
                        }
                    }

                } else {
                    currentParent = currentParent.parentElement;
                }

            }

        }

        return provider;

    }

    public abstract onLoadingStart(): void;

    public abstract onInstanceCreated(instance: Instance): void;

    public abstract onFailure(error: ThermalFileFailure): void;

}