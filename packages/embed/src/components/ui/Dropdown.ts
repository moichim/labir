import { computePosition, flip, inline, offset, shift } from "@floating-ui/dom";
import { LitElement, PropertyValueMap, css, html } from "lit";
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { Ref, createRef, ref } from "lit/directives/ref.js";

@customElement("thermal-dropdown")
export class Dropdown extends LitElement {

    @queryAssignedElements({ slot: 'option' })
    _options!: Array<HTMLElement>;

    protected dropdownRef: Ref<HTMLDialogElement> = createRef();
    protected invokerRef: Ref<HTMLDialogElement> = createRef();
    protected optionsRef: Ref<HTMLButtonElement> = createRef();

    @property({ type: String, reflect: true })
    open: string = "close";

    @property({
        type: String,
        reflect: true
    })
    public variant: string = "slate";

    setOpen() {
        this.open = "open";
    }

    setClose() {
        this.open = "close";
    }

    toggle() {
        if (this.open === "open")
            this.open = "close";
        else
            this.open = "open";
    }

    connectedCallback(): void {
        super.connectedCallback();
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    placeOptions() {

        computePosition(this.invokerRef.value!, this.optionsRef.value!, {
            middleware: [offset(2), flip(), inline(), shift()],
            placement: "bottom-start"
        })
            .then(({ x, y }) => {

                if (this.optionsRef.value) {
                    this.optionsRef.value.style.left = `${x}px`;
                    this.optionsRef.value.style.top = `${y}px`;
                }

            });

    }

    protected updated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {
        super.updated(_changedProperties);
        this.placeOptions();
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {
        super.firstUpdated(_changedProperties);
        this._options.forEach(option => {
            option.childNodes.forEach(child => child.addEventListener("click", () => {
                this.setClose();
            }));
        });
    }



    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {

        if (name === "open") {
            if (value === "open") {
                this.optionsRef.value?.classList.add("dropdown-options__show");
                this.dropdownRef.value?.classList.add("dropdown__open");
            } else {
                this.optionsRef.value?.classList.remove("dropdown-options__show");
                this.dropdownRef.value?.classList.remove("dropdown__open");
            }
        }

    }



    static styles = css`

        .dropdown {
            width: max-content;
        }

        .dropdown-invoker {
            width: max-content;
            display: flex;
        }

        .dropdown-invoker-wrapper {
            display: flex;
            align-items: center;
        }

        .dropdown-invoker-wrapper-icon {
            width: calc( var( --thermal-gap ) * .856 );
            line-height: 0;
            padding-left: calc( var( --thermal-gap ) * .5 );
        }

        .dropdown-options {

            z-index: 9999;

            width: max-content;
            position: absolute;
            top: 0;
            left: 0;
            
            padding: calc( var( --thermal-gap ) * .5);

            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );

            background-color: var( --thermal-slate-light );

            box-shadow: var( --thermal-shadow );

            display: none;

            ::slotted( div:not(:last-child) ) {
                margin-bottom: calc( var( --thermal-gap ) * .5 );
            }

        }

        .dropdown-options__show {
            display: block;
        }

        .clicker {
            display: none;
        }

        .dropdown__open {
        
            .clicker {
                z-index: 9998;
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                //  backdrop-filter: blur(1px);
            }
        }
    
    `;

    render() {

        return html`

            <div class="dropdown" ${ref(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${ref(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open === "close"

                ? html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`
                : html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`
            }
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${ref(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `;

    }

}