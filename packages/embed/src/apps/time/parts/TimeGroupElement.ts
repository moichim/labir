import { customElement, property, queryAssignedNodes, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { html, PropertyValues } from "lit";
import { GroupConsumer } from "../../../hierarchy/consumers/GroupConsumer";
import { TimeEntryElement } from "./TimeEntryElement";

@customElement( "time-group" )
export class TimeGroupElement extends GroupConsumer {

    @state()
    @queryAssignedNodes({slot: 'entry', flatten: true})
    entries!: Array<Node>;

    public connectedCallback(): void {
        super.connectedCallback();

        this.group.files.addListener( this.UUID, console.log );

        this.registry.batch.onBatchComplete.set( this.UUID, console.log );

    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated( _changedProperties );
        console.log( this.entries, _changedProperties );

        this.registry.batch.closeBatch();

        this.entries
            .filter( entry => entry instanceof TimeEntryElement )
            .map( ( entry: TimeEntryElement) => {
                console.log( entry.thermal );



                this.registry.batch.request(
                    entry.thermal,
                    undefined,
                    this.group,
                    async result => {
                        console.log( result );
                    }
                );

            } );


            this.registry.batch.closeBatch();

            

    }

    render() {
        return html`
            <slot></slot>
            <slot name="entry"></slot>
        `;
    }

}