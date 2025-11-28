import { customElement, property, state } from "lit/decorators.js";
import { Identity } from "packages/server/client/src/responseEntities";
import { ClientConsumer } from "../ClientConsumer";
import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { ThermalDialog } from "packages/embed/src/ui/Dialog";
import { T } from "../../../translations/Languages";
import { t } from "i18next";
import { booleanConverter } from "../../../utils/converters/booleanConverter";

@customElement("labir-user-button")
export class UserButton extends ClientConsumer {

    @state()
    protected message?: string;

    @property({ reflect: true, attribute: "disable-logging", converter: booleanConverter(false) })
    public disableLogging: boolean = false;

    connectedCallback(): void {
        super.connectedCallback();

        this.client?.auth.onIdentity.set(this.UUID, (identity) => {
            this.message = undefined;
        });
    }

    public static styles?: CSSResultGroup | undefined = css`

        :host {
            font-size: var( --thermal-fs );
            color: var( --thermal-foreground );
        }

        .login-form {
            display: flex;
            gap: 1em;
            flex-wrap: wrap;
            width: 100%;
            box-sizing: border-box;
            justify-content: stretch;
        }

        input[type="text"],
        input[type="password"] {
            padding: 0.5em;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            box-sizing: border-box;
            flex: 1;
            min-width: 0;
        }

        .login-error {
            color: red;
            padding-top: .5em;
            font-size: .8em;
        }
    `;


    protected handleKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            event.preventDefault();
            // Najdeme thermal-dialog v shadowRoot
            const dialog = this.shadowRoot?.querySelector('thermal-dialog') as ThermalDialog;
            if (dialog) {
                // Zavoláme close metodu na dialogu
                dialog.closeFromTheOutside();
            }
        }
    }

    protected renderLoginForm(): TemplateResult {
        return html`
        <div class="login-form">
            <input 
                type="text" 
                name="login" 
                placeholder="Login" 
                required
                @keydown=${this.handleKeyDown}
            ></input>
            <input 
                type="password" 
                name="password" 
                placeholder="${t(T.password)}" 
                required
                @keydown=${this.handleKeyDown}
            ></input>
        </div>
        ${this.message ? html`<div class="login-error">${this.message}</div>` : nothing}
        `;
    }

    protected renderUserEditForm(): TemplateResult {
        return html`
            Opravdu se chcete odhlásit?
        `;
    }

    render(): unknown {

        const buttonLabel = this.identity?.meta.name ?? this.identity?.meta.login ?? t(T.login);

        const variant = this.isLoggedIn
            ? "primary"
            : "default";

        const label = this.isLoggedIn
            ? t(T.logout)
            : t(T.login);

        const submitLabel = this.isLoggedIn
            ? t(T.logout)
            : t(T.login);

        const content = this.isLoggedIn
            ? this.renderUserEditForm()
            : this.renderLoginForm();

        const beforeClose = this.isLoggedIn
            ? async () => {
                const result = await this.client?.routes.post.logout().execute();
                this.client?.auth.logout();
                return result && result.success;
            }
            : async () => {

                this.message = undefined;

                // Najdeme thermal-dialog v shadowRoot
                const dialog = this.shadowRoot?.querySelector('thermal-dialog');
                // Najdeme slot s obsahem ve shadowRoot thermal-dialogu
                const dialogShadow = (dialog as ThermalDialog)?.shadowRoot;
                const contentSlot = dialogShadow?.querySelector('slot[name="content"]') as HTMLSlotElement;

                if (contentSlot) {
                    // Získáme elementy vložené do slotu
                    const assigned = contentSlot.assignedElements({ flatten: true });
                    // Najdeme první div (váš <div slot="content">)
                    const contentDiv = assigned.find(el => el.tagName === "DIV");
                    if (contentDiv) {
                        const loginInput = contentDiv.querySelector('input[name="login"]') as HTMLInputElement;
                        const passwordInput = contentDiv.querySelector('input[name="password"]') as HTMLInputElement;

                        if (loginInput && passwordInput) {
                            const login = loginInput.value;
                            const password = passwordInput.value;

                            if (login && password) {
                                const result = await this.client?.routes.post.login(login, password).execute();

                                if (result && result.success) {
                                    this.message = "Přihlášení proběhlo úspěšně";
                                } else {
                                    this.message = "Přihlášení se nezdařilo";
                                }

                                return result && result.success;
                            }
                        }
                    }
                }

                return false;
            };

        // Pokud je vypnuté přihlašování a uživatel je přihlášený, zobraz pouze neaktivní button bez dialogu
        if ( this.disableLogging === true && this.isLoggedIn === true ) {

            return html`<thermal-btn slot="invoker" variant="background" disabled="true" tooltip="Aktuálně přihlášený uživatel" icon="user" iconStyle="micro">
                ${buttonLabel}
            </thermal-btn>`;

        } else if ( this.disableLogging === true && this.isLoggedIn === false ) {
            return nothing;
        }


        // Standardní login dialog
        return html`
            <thermal-dialog label="${label}" button="${submitLabel}" .beforeClose=${beforeClose}>

                <thermal-btn slot="invoker" variant=${variant} icon="user" iconStyle="micro">
                    ${buttonLabel}
                </thermal-btn>

                <div slot="content">
                    ${content}
                </div>

            </thermal-dialog>
        `;
    }

}