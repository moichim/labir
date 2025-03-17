import { publicIpv4 } from "public-ip";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { state } from "lit/decorators.js";

export abstract class AbstractGroupDropin extends GroupConsumer {

    @state()
    ip?: string;

    connectedCallback(): void {
        super.connectedCallback();

        publicIpv4().then( ip => this.ip = ip );

    }

    protected emitUpload(
        fileName: string,
        fileSize: number
    ) {

        const userAgent = window.navigator.userAgent;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const time = ( new Date() ).getTime();


        const event = new CustomEvent('uploaded', {
            bubbles: true,
            cancelable: false,
            detail: {
                ip : this.ip,
                userAgent,
                windowWidth: width,
                windowHeight: height,
                time,
                fileName,
                fileSize
            }
        });

        this.dispatchEvent( event );
    }

}