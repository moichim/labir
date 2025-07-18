import { consume } from "@lit/context";
import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { compactContext, compactContextSetter, DisplayMode, displayModeContext, displayModeSetterContext, editTagsContext, editTagsSetterContext, showDiscussionContext, showDiscussionSetterContext } from "../../ClientContext";
import { FolderInfo } from "@labir/server";

@customElement( "display-mode-settings" )
export class DisplayModeElement extends BaseElement {


    @property({type: Object, reflect: true })
    public folder?: FolderInfo;


    @consume({ context: displayModeContext, subscribe: true })
    protected displayMode: DisplayMode = DisplayMode.GRID;


    @consume({ context: displayModeSetterContext, subscribe: true })
    protected displayModeSetter: (mode: DisplayMode) => void = () => {};

    @consume({ context: compactContext, subscribe: true })
    protected isCompact: boolean = false;

    @consume({ context: compactContextSetter, subscribe: true })
    protected compactSetter: (compact: boolean) => void = () => {};

    @consume({ context: showDiscussionContext, subscribe: true })
    protected showDiscussion: boolean = false;

    @consume({ context: showDiscussionSetterContext, subscribe: true })
    protected showDiscussionSetter: (columns: boolean) => void = () => {};

    @consume({ context: editTagsContext, subscribe: true })
    protected editableTags: boolean = false;

    @consume({ context: editTagsSetterContext, subscribe: true })
    protected editTagsSetter: (edit: boolean) => void = () => {};


    public static styles?: CSSResultGroup | undefined = css`
    
        :host {
        
            display: flex;
            color: var(--thermal-foreground);
            cursor: pointer;
            align-items: center;
            gap: .25em;
        
        }


        .radio {

            display: flex;
            align-items: center;
            gap: .25em;

            cursor: pointer;

            input,
            span {
                display: block;
            }

            span {
                font-size: .8em;
            }
        }
    
    `;


    protected renderToggle(
        label: string,
        checked: boolean,
        onChange: (checked: boolean) => void
    ): unknown {

        return html`<thermal-radio
            type="checkbox"
            .checked=${checked}
            .onChange=${(value: boolean) => {
                onChange(value);
            }}
        >${label}</thermal-radio>`;

    }


    protected render(): unknown {
        return html`


            <thermal-btn
                icon="list"
                iconStyle="micro"
                size="sm"
                variant="${this.displayMode === DisplayMode.TABLE ? "foreground" : "default"}"
                @click="${() => {
                    this.compactSetter( false );
                    this.displayModeSetter(DisplayMode.TABLE);
                }}"
            ></thermal-btn>
        
            <thermal-btn
                icon="grid"
                iconStyle="micro"
                size="sm"
                variant="${this.displayMode === DisplayMode.GRID ? "foreground" : "default"}"
                @click="${() => this.displayModeSetter(DisplayMode.GRID)}"
            ></thermal-btn>

            ${this.displayMode === DisplayMode.GRID ? this.renderToggle(
                "Kompaktní zobrazení",
                this.isCompact,
                (checked) => this.compactSetter(checked)
            ) : nothing}

            ${this.renderToggle(
                "Zobrazit diskuzi",
                this.showDiscussion,
                (checked) => this.showDiscussionSetter(checked)
            )}

            ${this.folder && this.folder.may_manage_files_in ? this.renderToggle(
                "Upravit štítky",
                this.editableTags,
                (checked) => this.editTagsSetter(checked)
            ): nothing}

        `;
    }

}