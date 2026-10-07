import { publicIpv4 } from "public-ip";
import { AbstractGroupConsumer } from "../../hierarchy/consumers/AbstractGroupConsumer";
import { state } from "lit/decorators.js";

export abstract class AbstractGroupDropin extends AbstractGroupConsumer {

    @state()
    ip?: string;

    connectedCallback(): void {
        super.connectedCallback();

        publicIpv4().then( ip => this.ip = ip );

    }

    private _getUserInfo() {
        return {
            ip: this.ip,
            userAgent: window.navigator.userAgent,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            time: ( new Date() ).getTime()
        }
    }

    public emitMultipleUpload(
        fileNames?: string[] | undefined
    ): void {

        const event = new CustomEvent( "multiple-upload", {
            bubbles: true,
            cancelable: false,
            detail: {
                ...this._getUserInfo(),
                fileNames
            }
        });
        this.dispatchEvent( event );

    }

    protected emitSingleUpload(
        fileName: string,
        fileSize: number
    ) {

        const event = new CustomEvent('uploaded', {
            bubbles: true,
            cancelable: false,
            detail: {
                ...this._getUserInfo(),
                fileName,
                fileSize
            }
        });

        this.dispatchEvent( event );
    }

}