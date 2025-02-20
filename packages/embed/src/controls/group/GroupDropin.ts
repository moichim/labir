import { customElement, state } from "lit/decorators.js";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";

import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { css, html, PropertyValues } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ThermalFileReader } from "@labir/core";
import { t } from "i18next";
import { T } from "../../translations/Languages";

@customElement("group-dropin")
export class GroupDropin extends GroupConsumer {

    @state()
    protected container: Ref<HTMLVideoElement> = createRef();

    @state()
    protected hover: boolean = false;

    protected tourableElementRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableElementRef.value;
    }



    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        this.log(this.container.value);

        if (this.container.value !== undefined) {

            const listener = this.manager.service.handleDropzone(this.container.value);

            listener.onMouseEnter.add(this.UUID, () => {
                console.log("mouseenter");
                this.hover = true;
            });

            listener.onMouseLeave.add(this.UUID, () => {
                console.log("mouseleave");
                this.hover = false;
            });


            listener.onDrop.add(this.UUID, results => {

                results.forEach(async (result) => {
                    if (result instanceof ThermalFileReader) {
                        const instance = await result.createInstance(this.group);
                    }
                });

                this.log(results);
            });

        }

    }


    public static styles = css`

        .container {

        }

        .dropin {
            width: 100%;
            aspect-ratio: 4 / 3;
            max-height: 700px;
            transition: background .5s ease-in-out;
            border: 1px solid var( --thermal-slate-dark );
            border-radius: var( --thermal-radius );
            cursor: pointer;
            background: var( --thermal-slate );
            position: relative;
            overflow: hidden;

        }

        .dropin-gradient {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, var(--thermal-slate-light) 0%, var(--thermal-slate) 100%);
            opacity: 0;
            transition: opacity .5s ease-in-out;
        }

        .hover,
        .dropin:hover {
            .dropin-gradient {
                opacity: 1;
            }
        }

        .dropin-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var( --thermal-gap );
        }

    `;


    render() {

        const dropinClasses = {
            dropin: true,
            hover: this.hover
        }

        return html`

            <div class="container" ${ref(this.tourableElementRef)}>
            
                <div ${ref(this.container)} class="${classMap(dropinClasses)}">

                    <div class="dropin-gradient"></div>

                    <div class="dropin-content">
                        <div>${t(T.dragorselectfile)}</div>
                        <thermal-button variant="foreground">${t(T.selectfile)}</thermal-button>
                    </div>
                
                </div>

            </div>

            <slot name="tour"></slot>
        
        `;

    }


}