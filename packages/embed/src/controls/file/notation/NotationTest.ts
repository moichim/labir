import { customElement, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { html } from "lit";
import { IWithNotationContext, notationCurrentContext, NotationCurrentContext, notationListContext, NotationListContext, notationSetListContext, NotationSetListContext } from "./NotationContext";
import { provide } from "@lit/context";
import { NotationEntry } from "./NotationEntry";

@customElement("notation-test")
export class NotationTestComponent extends BaseElement implements IWithNotationContext {

    @state()
    ms: number = 0;

    @state()
    duration: number = 15;

    @state()
    @provide({context: notationListContext})
    notationList: NotationListContext = [];

    @state()
    @provide({context: notationSetListContext})
    notationSetList: NotationSetListContext = ( entries: NotationEntry[] ) => {
        this.notationList =  entries; 
    }

    @state()
    @provide({context: notationCurrentContext})
    notationCurrent: NotationCurrentContext;

    updateNotationsMs( ms: number ) {

        const active: NotationEntry[] = [];

        this.notationList.forEach( notation => {
            notation.setMs( ms );
            this.log(notation, ms);
            if (notation._active) {
                active.push( notation );
            }
        } );

        this.notationCurrent = active;

    }


    protected render(): unknown {
        return html`
        
            <div>Toto je test notatora</div>
            <notation-container>
                <slot><slot>
            </notation-container>

            <div>
                Počet ${this.notationList.length}
            </div>

            <div>${[1, 20, 1000, 1000*15, 1000*60, 1000*1000].map(time => html`<button @click=${() => this.updateNotationsMs(time)}>${time}</button>`)}</div>

            <div>
                <h2>Aktivní</h2>
                ${this.notationCurrent?.map(notation => html`<div>
                    <div>${notation.from} - ${notation.to}</div>
                    <div>${notation.url}</div>
                    </div>`)}
            </div>
        
        `;
    }

}