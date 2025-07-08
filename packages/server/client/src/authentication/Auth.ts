import { Client } from "../Client";
import { Identity } from "../responseEntities";

export class Auth {

    protected identity?: Identity;
    protected session?: string;

    constructor(
        protected readonly client: Client
    ) {



    }

    public isLoggedIn(): boolean {
        return this.identity !== undefined;
    }


    public login(
        identity: Identity
    ): void {
        this.identity = identity;
    }

    public setSession(
        value: string | undefined
    ) {
        this.session = value;
    }

    public getSession(): string | undefined {
        return this.session;
    }

    public getIdentity(): Identity | undefined {
        return this.identity;
    }

    public getAuthorisationHeader(): string | undefined {
        if (this.identity) {

            const credentials = Buffer.from(`${this.identity.user}:${this.identity.token}`).toString("base64");

            return `Basic ${credentials}`;
        }
        return undefined;
    }

}