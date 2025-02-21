import { customElement, state } from "lit/decorators.js";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";

import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { css, html, PropertyValues } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { DropinElementListener, ThermalFileReader } from "@labir/core";
import { t } from "i18next";
import { T } from "../../translations/Languages";

@customElement("group-dropin-input")
export class GroupDropin extends GroupConsumer {

    @state()
    protected container: Ref<HTMLVideoElement> = createRef();

    @state()
    protected hover: boolean = false;

    protected tourableElementRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableElementRef.value;
    }

    listener?: DropinElementListener;

    public static styles = css`

        .container {
            display: none;
        }

        .dropin {
            background: var( --thermal-slate );
            width: 100%;
            aspect-ratio: 4 / 3;
        }

        .hover {
            background: var( --thermal-slate-light );
        }
    
    `;

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        if (this.container.value !== undefined) {

            this.listener = this.manager.service.handleDropzone(this.container.value, false);

            this.listener.onMouseEnter.add(this.UUID, () => {
                    this.hover = true;
            });

            this.listener.onMouseLeave.add(this.UUID, () => {
                    this.hover = false;
            });


            this.listener.onDrop.add(this.UUID, results => {

                this.group.files.removeAllInstances();

                results.forEach( async ( result ) => {
                    if ( result instanceof ThermalFileReader ) {
                        await result.createInstance(this.group );
                    }
                } );

            });

        }

    }

    render() {

        const dropinClasses = {
            dropin: true,
            hover: this.hover
        }

        return html`


            <thermal-button @click="${() => {
                if (this.listener) {
                    this.listener.openFileDialog(false);
                }
            }}"><slot>${t(T.uploadafile)}</slot></thermal-button>

            <div class="container" ${ref(this.tourableElementRef)}>
            
                <div ${ref(this.container)} class="${classMap(dropinClasses)}"></div>

            </div>

            <slot name="tour"></slot>
        
        `;

    }


}