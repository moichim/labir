import { AbstractAnalysis } from "@labir/core";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import {ifDefined} from 'lit/directives/if-defined.js';
import { ThermalButton } from "../../ui/Button";

@customElement("file-analysis-row")
export class FileAnalysisList extends FileConsumer {

    @property({type: Object, attribute: true})
    analysis!: AbstractAnalysis;

    @property({type: String, reflect: true, attribute: true})
    selected: boolean = false;

    @property({type: String, reflect: true, attribute: true})
    active: boolean = false;

    @state()
    color!: string;

    @state()
    values: {min: number|undefined, max: number|undefined, avg: number|undefined} = {
        min: undefined,
        max: undefined,
        avg: undefined
    }

    public onInstanceCreated(): void {}

    public onFailure(): void {}

    @state()
    selectedRef: Ref<HTMLInputElement> = createRef();
    activeRef: Ref<HTMLInputElement> = createRef();

    protected uuid(value: string) {
        return `${this.UUID}__${value}`;
    }

    public connectedCallback(): void {
        
        super.connectedCallback();

        this.hydrate( this.analysis );

        /*

        this.selected = this.analysis.selected;
        this.active = this.analysis.active;
        this.color = this.analysis.initialColor;

        // Add listeners
        this.analysis.onActivation.add( 
            this.uuid( "onDeactivate" ),
            () => this.active = false 
        );
        this.analysis.onDeactivation.add( 
            this.uuid( "onDeactivate" ), 
            () => this.active = true 
        );

        this.analysis.onSelected.add( 
            this.uuid( "onSelected" ), 
            () => {
                this.selected = true;
            }
        );
        this.analysis.onDeselected.add( 
            this.uuid( "onDeselected" ), 
            () => {
                this.selected = false;
            } 
        );

        this.analysis.onValues.add(
            this.uuid( "onValues" ),
            (min,max, avg) => {
                this.values = {
                    min,max, avg
                };
            }
        );


        this.renderRoot.addEventListener( "click", () => {

            if ( this.selected === false ) {
                this.analysis.file.analysis.storage.select( this.analysis );
            } else {
                this.analysis.file.analysis.storage.deselect( this.analysis );
            }

        } );

        */

    
    }


    protected hydrate( analysis: AbstractAnalysis ) {

        this.log( "HYDRATUJI", analysis.key );


        this.selected = analysis.selected;
        this.active = analysis.active;
        this.color = analysis.initialColor;

        // Add listeners
        analysis.onActivation.add( 
            this.uuid( "onDeactivate" ),
            () => this.active = false 
        );
        analysis.onDeactivation.add( 
            this.uuid( "onDeactivate" ), 
            () => this.active = true 
        );

        analysis.onSelected.add( 
            this.uuid( "onSelected" ), 
            () => {
                this.selected = true;
            }
        );
        analysis.onDeselected.add( 
            this.uuid( "onDeselected" ), 
            () => {
                this.selected = false;
            } 
        );

        analysis.onValues.add(
            this.uuid( "onValues" ),
            (min,max, avg) => {
                this.values = {
                    min,max, avg
                };
            }
        );

        this.clickListener = (event: Event) => {

            console.log( analysis );

            // if ( ! ( event.target instanceof ThermalButton ) ) {

                if ( this.selected === false ) {
                    this.selected = true;
                    this.analysis.file.analysis.storage.select( analysis );
                } else {
                    this.selected = false;
                    this.analysis.file.analysis.storage.deselect( analysis );
                }

            // }

        };

        this.renderRoot.addEventListener( "click", this.clickListener! );

    }

    public clickListener?: EventListener

    protected dehydrate( analysis: AbstractAnalysis ) {

        this.log( "DEHYDRATUJI", analysis.key );


        // Add listeners
        analysis.onActivation.remove( this.uuid( "onDeactivate" ) );
        analysis.onDeactivation.remove( this.uuid( "onDeactivate" ) );

        analysis.onSelected.remove( this.uuid( "onSelected" ));
        analysis.onDeselected.remove( this.uuid( "onDeselected" ) );

        analysis.onValues.remove( this.uuid( "onValues" ) );

            this.renderRoot.removeEventListener( "click", this.clickListener! );

    }

    public handleClick() {

    }

    public willUpdate(_changedProperties: PropertyValues): void {

        super.willUpdate( _changedProperties );

        if ( _changedProperties.has( "analysis" ) ) {

            const oldAnalysis = _changedProperties.get("analysis") as AbstractAnalysis;

            if ( oldAnalysis ) {
                this.dehydrate( oldAnalysis );
            } 
            
            this.hydrate( this.analysis );

        }

    }


    static styles?: CSSResultGroup | undefined = css`

        :host {

            display: table-row;
            cursor: pointer;
            transiton: all .3s ease-in-out;
            background: var( --thermal-slate-light );
 
        }

        :host td {
            padding: calc( var( --thermal-gap ) / 3 );
        }

        .color {
            content: "";
            display: inline-block;
            width: 1rem;
            height: var(--thermal-fs);
        }

        .selected {
            width: calc( var( --thermal-gap ) / 2 );
            height: calc( var( --thermal-gap ) / 2 );
            border-radius: 50%;
            border: 2px solid var( --thermal-slate );
            display: inline-block;
        }

        :host([selected="true"]) {
            background: var(--thermal-background);
            .selected {
                background-color: var( --thermal-foreground )
            }

        }

        :host([selected="false"]) .title {
            text-decoration: line-through;
        }



    `;

    protected temperatureOrNothing( value: number | undefined ) {
        if ( value === undefined ) {
            return "-";
        }
        return value.toFixed(1) + " °C"
    }



    protected render(): unknown {

        if (this.analysis === undefined) {
            return nothing;
        }

        return html`
                <td>
                    <div class="selected"></div>
                    <span class="color" style="background-color:${this.analysis.initialColor};"></span>
                    <span class="title">${this.analysis.key}</span>
                </td>
                <td>${ this.temperatureOrNothing( this.values.min ) }</td>
                <td>${ this.temperatureOrNothing( this.values.max )}</td>
                <td>${ this.temperatureOrNothing( this.values.avg )}</td>
                <td>
                    <thermal-button @click=${()=> {this.analysis.file.analysis.storage.removeAnalysis( this.analysis.key )}}>Remove</thermal-button>
                </td>
        `;
    }

}