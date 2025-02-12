import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { customElement, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { getCurrentNotationsByMs, grabNotationsFromSlot, IWithNotationContext, notationCurrentContext, NotationCurrentContext, notationDurationContext, notationListContext, NotationListContext } from "./NotationContext";
import { NotationEntry } from "./NotationEntry";

@customElement("notation-test")
export class NotationTestComponent extends BaseElement implements IWithNotationContext {

    @state()
    ms: number = 0;

    @state()
    @queryAssignedElements({ flatten: true })
    _notationSlot!: Array<HTMLElement>;

    @state()
    notations: NotationEntry[] = [];

    @state()
    @provide({context: notationDurationContext})
    duration: number = 1000 * 1000;

    @state()
    @provide({ context: notationListContext })
    notationList: NotationListContext = [];

    @state()
    @provide({ context: notationCurrentContext })
    notationCurrent: NotationCurrentContext;

    private observer: MutationObserver | null = null;

    connectedCallback(): void {
        super.connectedCallback();
        // this.observeSlotChanges();
    }

    observeSlotChanges() {

        const slot = this.renderRoot?.querySelector('slot[name="notation"]') as HTMLSlotElement | null | undefined;

        this.log("SLOT", slot);

        if (!slot) return;

        this.log("SLOT", slot.assignedElements());

        this.notationList = grabNotationsFromSlot(slot.assignedElements());

        this.observer = new MutationObserver(() => {
            this.notationList = grabNotationsFromSlot(slot.assignedElements());
        });

        slot.addEventListener('slotchange', () => {
            this.observer?.disconnect();
            this.notationList = grabNotationsFromSlot(slot.assignedElements());
        });

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.observeSlotChanges();
    }

    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate(_changedProperties);
        this.log("Changed", _changedProperties);
    }

    updateNotationsMs(ms: number) {

        this.notationCurrent = getCurrentNotationsByMs( ms, this );

    }


    protected render(): unknown {
        return html`
        
            <div>Toto je test notatora</div>

            <div>
                Počet ${this.notationList.length}
            </div>

            <div>${[1, 20, 1000, 1000 * 15, 1000 * 60, 1000 * 1000].map(time => html`<button @click=${() => this.updateNotationsMs(time)}>${time}</button>`)}</div>

            <div>
                <h2>Aktivní</h2>

                <slot name="notation"></slot>
            </div>

            <notation-timeline></notation-timeline>

            <notation-content></notation-content>
        
        `;
    }

}