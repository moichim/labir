import { customElement, state } from "lit/decorators.js";

import { DropinElementListener, ThermalFileReader } from "@labirthermal/core";
import { t } from "i18next";
import { css, html, PropertyValues } from "lit";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { T } from "../../translations/Languages";
import { AbstractGroupDropin } from "./AbstractGroupDropin";

@customElement("group-dropin-input")
export class GroupDropin extends AbstractGroupDropin {

  @state()
  protected container: Ref<HTMLVideoElement> = createRef();

  @state()
  protected hover: boolean = false;

  @state()
  protected uploading: boolean = false;

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

        svg {
            width: 1em;
        }



.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 21px;
  height: 1em;
}
.lds-ellipsis div {
  position: absolute;
  top: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 0px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 7px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 14px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 21px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0px, 0);
  }
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

      this.listener.onDrop.set(this.UUID, () => {
        this.uploading = true;
      });


      this.listener.onProcessingEnd.add(this.UUID, async (results) => {

        this.group.files.removeAllInstances();

        await Promise.all(results.map(async (result) => {
          if (result instanceof ThermalFileReader) {
            const instance = await result.createInstance(this.group);
            this.emitUpload(instance.fileName, instance.bytesize);
          }
        }));

        this.uploading = false;

      });

    }

  }

  render() {

    const title = this.uploading === false
      ? t(T.uploadafile)
      : html`<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`;

    return html`


            <thermal-btn @click="${() => {
        if (this.listener) {
          this.listener.openFileDialog(false);
        }
      }}"><slot>${title}</slot></thermal-btn>

            <div class="container">
            
                <div ${ref(this.container)}></div>

            </div>
        
        `;

  }


}