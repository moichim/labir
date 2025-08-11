import { consume } from "@lit/context";
import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { compactContext, compactContextSetter, DisplayMode, displayModeContext, displayModeSetterContext, editTagsContext, editTagsSetterContext, showDiscussionContext, showDiscussionSetterContext, syncAnalysisContext, syncAnalysisSetterContext } from "../../ClientContext";
import { FolderInfo } from "@labir/server";
import { T } from "../../../translations/Languages";
import { t } from "i18next";
import { AbstractModeBar } from "./AbstractModeBar";

@customElement( "display-mode-settings" )
export class DisplayModeElement extends AbstractModeBar {


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
                tooltip="${t(T.tabledisplay)}"
            >Tabulka</thermal-btn>
        
            <thermal-btn
                icon="grid"
                iconStyle="micro"
                size="sm"
                variant="${this.displayMode === DisplayMode.GRID ? "foreground" : "default"}"
                @click="${() => this.displayModeSetter(DisplayMode.GRID)}"
                tooltip="${t(T.griddisplay)}"
            >Mřížka</thermal-btn>

            ${this.displayMode === DisplayMode.GRID ? this.renderToggle(
                t(T.compactview),
                this.isCompact,
                (checked) => this.compactSetter(checked)
            ) : nothing}

        `;
    }

}