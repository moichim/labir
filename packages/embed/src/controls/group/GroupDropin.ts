import { customElement, state } from "lit/decorators.js";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";

import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { css, html, PropertyValues } from "lit";
import { classMap } from "lit/directives/class-map.js";

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

    public static styles = css`

        .container {

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

        this.log(this.container.value);

        if (this.container.value !== undefined) {

            const listener = this.manager.service.handleDropzone(this.container.value);

            listener.onMouseEnter.add(this.UUID, () => {
                    this.hover = true;
            });

            listener.onMouseLeave.add(this.UUID, () => {
                    this.hover = false;
            });

        }

    }

    render() {

        const dropinClasses = {
            dropin: true,
            hover: this.hover
        }

        return html`

            <div class="container" ${ref(this.tourableElementRef)}>
            
                <div ${ref(this.container)} class="${classMap(dropinClasses)}"></div>

            </div>

            <slot name="tour"></slot>
        
        `;

    }


}