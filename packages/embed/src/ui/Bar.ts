import { LitElement, PropertyValueMap, css, html, nothing } from "lit";
import { customElement, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from "lit/directives/ref.js";

@customElement("thermal-bar")
export class ThermalBar extends LitElement {

    static styles = css`

        .container {
            // width: 100%;
        }


        .ruler {
            width: 100%;
        }

        .ruler-item {}

        .ruler-item__current {
            border: 1px solid transparent;
            height: 0;
            margin-top: -1px;
            content: "";
        }

        .ruler-item__content {
            border: 1px solid red;
            position: absolute;
            display: none;
        }


        .content {
            
            display: flex;
            gap: calc( 5px );
            width: max-content;

            align-items: center;
        
        }



        .icon {
            width: var( --thermal-gap );
            line-height: 0;
        }

    `;

    @state()
    protected collapsed: boolean = false;

    @state()
    protected lastContentWidth!: number;

    @state()
    protected drawerRef: Ref<HTMLDivElement> = createRef();
    protected contentRef: Ref<HTMLDivElement> = createRef();
    protected rulerContentRef: Ref<HTMLDivElement> = createRef();

    protected observer!: ResizeObserver;

    connectedCallback(): void {

        super.connectedCallback();
        
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {
        super.firstUpdated( _changedProperties );

        this.observer = new ResizeObserver( ( entries ) => {

            // if the bar is not collapsed, store the content width
            if ( this.collapsed === false ) {
                const contentWidth = this.contentRef.value!.clientWidth;
                this.lastContentWidth = contentWidth;
            }

            const entry = entries[0];

            // If content is larger, expand it
            if ( this.lastContentWidth < entry.contentRect.width ) {
                if ( this.collapsed ) {
                    this.collapsed = false;
                }
            }

            // If content is smaller, collapse it
            else {
                if ( this.collapsed === false ) {
                    this.collapsed = true;
                }
            }

        } );
        this.observer.observe( this.drawerRef.value! );

    }


    protected render(): unknown {
        return html`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${ref(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${ref(this.rulerContentRef)} style="width: ${this.lastContentWidth + 1}px"></div>
                </div>
                <div class="content" ${ref(this.contentRef)}>

                    ${this.collapsed === false ? html`
                        <slot></slot>    
                    ` : nothing}
                
                </div>

            </div>

            ${this.collapsed ? html`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            ` : nothing }
        
        `;
    }


}