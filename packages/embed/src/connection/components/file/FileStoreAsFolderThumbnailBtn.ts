import { Instance, ThermalFileFailure } from "@labir/core";
import { css, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { AbstractFileAnalysisButton } from "./AbstractFileAnalysisButton";

@customElement("file-store-thumbnail")
export class FileStoreAsFolderThumbnailBtn extends AbstractFileAnalysisButton {

    public icon = "image";
    public iconStyle = "micro";

    public onFailure(error: ThermalFileFailure): void {

    }

    public onInstanceCreated(instance: Instance): void {

    }

    protected onClick?: ((file: Instance) => void) | undefined = async (file) => {

        this.log(file);
        this.log(file.export.canvas);

        if (this.client === undefined || this.client.auth.isLoggedIn() === false) {
            console.log("Musíš být přihlášen k prováídění této operace!");
            return;
        }

        try {
            // Získej canvas element
            const canvas = file.export.canvas;

            if (!canvas) {
                console.error("Canvas not available");
                return;
            }

            // Převeď canvas na blob
            canvas.toBlob(async (blob) => {

                if (this.client === undefined) {
                    return;
                }


                if (!blob) {
                    console.error("Failed to convert canvas to blob");
                    return;
                }

                // Vytvoř File objekt z blob
                const thumbnailFile = new File([blob], 'thumbnail.png', {
                    type: 'image/png'
                });

                // Pošli do API
                const request = this.client
                    .routes
                    .post
                    .updateFolder(this.folder.path);

                console.log( request );
                
                request.setThumbnail( thumbnailFile );

                try {
                    const response = await request.execute();
                    console.log("Thumbnail updated successfully:", response);
                } catch (error) {
                    console.error("Failed to update thumbnail:", error);
                }
            }, 'image/png');

        } catch (error) {
            console.error("Error in onClick handler:", error);
        }

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