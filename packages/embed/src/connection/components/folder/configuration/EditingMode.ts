import { FolderInfo } from "@labir/server";
import { consume } from "@lit/context";
import { t } from "i18next";
import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { T } from "../../../../translations/Languages";
import { editTagsContext, editTagsSetterContext, showDiscussionContext, showDiscussionSetterContext } from "../../../ClientContext";
import { AbstractModeBar } from "./AbstractModeBar";

@customElement("editing-mode-settings")
export class EditingModeElement extends AbstractModeBar {


    @property({ type: Object, reflect: true })
    public folder?: FolderInfo;

    @consume({ context: showDiscussionContext, subscribe: true })
    protected showDiscussion: boolean = false;

    @consume({ context: showDiscussionSetterContext, subscribe: true })
    protected showDiscussionSetter: (columns: boolean) => void = () => { };

    @consume({ context: editTagsContext, subscribe: true })
    protected editableTags: boolean = false;

    @consume({ context: editTagsSetterContext, subscribe: true })
    protected editTagsSetter: (edit: boolean) => void = () => { };





    protected render(): unknown {
        return html`

            ${this.renderToggle(
            t(T.showdiscussion),
            this.showDiscussion,
            (checked) => this.showDiscussionSetter(checked)
        )}

            ${this.folder && this.folder.may_manage_files_in || this.folder?.may_manage_folders_in ? this.renderToggle(
            t(T.edittags),
            this.editableTags,
            (checked) => this.editTagsSetter(checked)
        ) : nothing}

        `;
    }

}