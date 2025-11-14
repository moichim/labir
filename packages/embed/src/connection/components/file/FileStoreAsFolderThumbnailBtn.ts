import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { css, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { AbstractFileAnalysisButton } from "./AbstractFileAnalysisButton";

import domtoimage from "dom-to-image";

/**
 * @todo Nefunguje správně kvůli webgl2 renderingu
 */
@customElement("file-store-thumbnail")
export class FileStoreAsFolderThumbnailBtn extends AbstractFileAnalysisButton {

    public icon = "image";
    public iconStyle = "micro";

    public onFailure(error: ThermalFileFailure): void {

    }

    public onInstanceCreated(instance: Instance): void {

    }

    protected onClick?: ((file: Instance) => void) | undefined = async (file) => {
        this.log("file", file);

        this.log( file.export.canvas.toDataURL() );

        if (this.client === undefined || this.client.auth.isLoggedIn() === false) {
            console.log("Musíš být přihlášen k prováídění této operace!");
            return;
        }

        try {
            // Získej canvas element nebo jiný DOM node
            const canvas = file.dom!.canvasLayer!.canvas;
            this.log(canvas);
            if (!canvas) {
                console.error("Canvas not available");
                return;
            }

            // Použij domtoimage k získání PNG Data URL
            const dataUrl = await domtoimage.toPng(file.dom!.canvasLayer!.canvas);


            const thumbnailFile = this.dataUrlToFile(dataUrl, "_thumb.png");

            // Pošli do API
            const request = this.client
                .routes
                .post
                .updateFolder(this.folder.path);

            request.setThumbnail(thumbnailFile);

            console.log(request);

            try {
                const response = await request.execute();
                console.log("Thumbnail updated successfully:", response);
            } catch (error) {
                console.error("Failed to update thumbnail:", error);
            }
        } catch (error) {
            console.error("Error in onClick handler:", error);
        }
    }

    private dataUrlToFile(dataUrl: string, filename: string): File {
        const arr = dataUrl.split(',');
        const mime = arr[0].match(/:(.*?);/)![1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    static styles = css`
    
        :host {
            
            display: flex;
            align-items: stretch;
            
        }
    
    `;


    protected render(): unknown {
        if (!this.file) {
            return nothing;
        }

        return super.render();

    }


}