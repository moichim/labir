import { customElement, property } from "lit/decorators.js";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { css, CSSResultGroup, html } from "lit";
import { booleanConverter } from "../../utils/booleanConverter";
import { t } from "i18next";
import { T } from "../../translations/Languages";

@customElement("group-analysis-sync-button")
export class GroupAnalysisSyncButton extends GroupConsumer {
    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    @property({type: Boolean, reflect: true, converter: booleanConverter(false)})
    public on!: boolean;

    connectedCallback(): void {
        super.connectedCallback();

        if ( this.on ) {
            const id = this.UUID + "__initial";
            this.group.files.addListener( id, value => {
                if ( value.length > 0 ) {
                    this.group.analysisSync.turnOn(value[0]);
                    this.group.files.removeListener(id);
                }
            } );
        } else {
            this.on = this.group.analysisSync.value;
        }

        this.group.analysisSync.addListener(this.UUID, value => {
            this.on = value;
        });

        this.addEventListener("click", () => {
            this.toggle();
        });
    }

    public turnOn() {
        if ( this.group.files.value.length > 0 ) {
            this.group.analysisSync.turnOn(this.group.files.value[0]);
        }
    }

    public turnOff() {
        this.group.analysisSync.turnOff();
    }

    public toggle() {
        this.on ? this.turnOff() : this.turnOn();
    }

    public static styles?: CSSResultGroup | undefined = css`
    
        :host {
            font-size: var(--thermal-fs);
            cursor: pointer;
        }

        :host(:hover) {
            span {
                
            }
        }

        :host([on=true]) {
            span i {
                background: var(--thermal-primary);
            }
        }

        :host([on=false]) {
            span i {
                background: var(--thermal-slate);
            }
        }

        span {
            transition: all .3s ease-in-out;
            display: inline-block;
            width: .8em;
            height: .8em;
            border-radius: 50%;
            border: 1px solid var(--thermal-slate);
            position: relative;
            overflow: hidden;
        }

        i {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid var(--thermal-background);
            box-sizing: border-box;
        }

        input {
            display: none;
        }

        div {
            font-size: .9em;
            pointer-events: visible;
            display: inline-block;
        }
    
    `;

    public render(): unknown {
        return html`  
        <span><i></i></span>      
        <div>${t(T.analysissync)}</div>
        `;
    }

}