import { css, CSSResultGroup, html, nothing } from "lit";
import { ClientConsumer } from "../ClientConsumer";
import { customElement, property, state } from "lit/decorators.js";

@customElement("login-form")
export class LoginForm extends ClientConsumer {

    @property({ type: String, reflect: true })
    public prompt?: string;

    @state()
    protected error?: string;

    @state()
    protected message?: string;

    @state()
    protected isLoggingIn: boolean = false;

    protected get mayLogIn(): boolean {
        return this.isClientConnected
            && this.valueIsNotEmpty(this.login)
            && this.valueIsNotEmpty(this.password)
            && this.login!.length > 3
            && this.password!.length > 3;
    }

    @state()
    protected login?: string;

    @state()
    protected password?: string;

    connectedCallback(): void {
        super.connectedCallback();
    }

    private valueIsNotEmpty(value: string | undefined): boolean {
        return value !== undefined && value.trim() !== '';
    }

    protected validateFieldInput(event: Event, field: "login" | "password"): void {

        const input = event.target as HTMLInputElement;

        this[field] = input.value;

        this.requestUpdate();

    }

    protected handleKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' && this.mayLogIn) {
            event.preventDefault();
            this.doLoginInternal();
        }
    }

    /** 
     * The main operation that performs the request. 
     * Shall never be triggered externally. 
     */
    protected async doLoginInternal(): Promise<void> {

        // Do nothing when already logging in
        if ( this.isLoggingIn ) {
            return;
        }

        // Reset the error
        this.error = undefined;

        if (this.valueIsNotEmpty(this.login) === false || this.valueIsNotEmpty(this.password) === false) {
            this.error = "Login and password are required.";
            this.requestUpdate();
            return;
        }

        if (this.client === undefined) {
            this.error = "Client is undefined.";
        }

        this.isLoggingIn = true;

        const request = this.client!.routes.post.login(
            this.login ?? '',
            this.password ?? ''
        );

        const result = await request?.execute();

        this.isLoggingIn = false;

        if (result?.success === false) {
            this.error = result.message;
            this.requestUpdate();
            return;
        }

    }

    public static styles?: CSSResultGroup | undefined = css`
    
        .login-form {
            
            display: flex;
            flex-direction: column;
            gap: calc( var( --thermal-gap ) * .5 );
            width: 100%;

            input {
            
                background: var( --thermal-background );
                color: var( --thermal-foreground );

                border: 1px solid var( --thermal-slate );
                border-radius: var( --thermal-radius );

                box-sizing: border-box;
                padding: .5em;

                text-align: center;

            
            }

        }

        .login-error {
            color: red;
            text-align: center;
            font-size: calc( var( --thermal-fs ) * .8 );
        }

        thermal-button::part(btn) {
            width: 100%;
        }

    `;


    protected render(): unknown {

        return html`
            <div class="login-form">

                ${this.prompt
                    ? html`<div class="login-prompt">${this.prompt}</div>`
                    : nothing
                }

                <input 
                    type="text" 
                    name="login" 
                    placeholder="Login" 
                    required 
                    @input=${(event: InputEvent) => this.validateFieldInput(event, "login")}
                    @keydown=${this.handleKeyDown}
                ></input>

                <input 
                    type="password" 
                    name="password" 
                    placeholder="Heslo" 
                    required 
                    @input=${(event: InputEvent) => this.validateFieldInput(event, "password")}
                    @keydown=${this.handleKeyDown}
                ></input>

                ${this.error
                    ? html`<div class="login-error">${this.error}</div>`
                    : nothing
                }

                <thermal-button
                    @click=${() => this.doLoginInternal()}
                    interactive=${this.mayLogIn}
                    variant=${this.mayLogIn ? "primary" : "black"}
                >
                    ${this.isLoggingIn ? "Přihlašuji se..." : "Přihlásit se"}
                </thermal-button>
    
            </div>

            
        `;

    }




}