import { html } from "lit";
import { directive } from "lit/directive.js";
import { ConnectedAppBase } from "../../abstraction/ConnectedAppBase";
import { AbstractLayoutDirective } from "./layout/AbstractLayoutDirective";
import { FolderInfo } from "@labirthermal/server";
import { slotOrNothing } from "./SlotOrNothing";

class ConnectedFileDetail extends AbstractLayoutDirective {
    render(app: ConnectedAppBase): unknown {

        const thermalScale = slotOrNothing( 
            "thermalscale", 
            html`<registry-palette-dropdown></registry-palette-dropdown>
            <registry-range-form></registry-range-form>` 
        );

        const fileOperations = [];

        fileOperations.push( html`<file-download-dropdown></file-download-dropdown>` );

        const file = slotOrNothing(
            "file",
            fileOperations
        );


        const header = this.renderHeader( html`

            ${ this.renderBreadcrumb( app ) }

            <connected-folder-header
                .onParentClick=${ ( folder: FolderInfo ) => app.display.navigateToFolderAndLoad( folder.path ) }
            ></connected-folder-header>

            <connected-file-header>
                ${ file }
                ${ thermalScale }
            </connected-file-header>

        ` );

        const content = this.renderContent( 
            true, 
            "1fr 1fr", 
            undefined, 
            html`<div>
                <registry-histogram expandable="true"></registry-histogram>
                <registry-range-slider></registry-range-slider>
                <registry-ticks-bar></registry-ticks-bar>
                <file-canvas></file-canvas>
            </div>
            <div>
                <file-analysis-complex></file-analysis-complex>
            </div>`

        );

        return [header, content];

    }

}

export const connectedFileDetail = directive(ConnectedFileDetail);