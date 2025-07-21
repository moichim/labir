import { customElement, state } from "lit/decorators.js";
import { Identity } from "packages/server/client/src/responseEntities";
import { ClientConsumer } from "../ClientConsumer";
import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { ThermalDialog } from "packages/embed/src/ui/Dialog";
import { T } from "../../../translations/Languages";
import { t } from "i18next";

@customElement("labir-user-button")
export class UserButton extends ClientConsumer {

    @state()
    protected message?: string;

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
            border: 1px solid var(--thermal-slate);
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

    render(): TemplateResult {

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

        return html`
            <thermal-dialog label="${label}" button="${submitLabel}" .beforeClose=${beforeClose}>

                <thermal-button slot="invoker" variant=${variant}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 1em; height: 1em; display: inline-block; vertical-align: middle;">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                    </svg>
                    ${buttonLabel}
                </thermal-button>

                <div slot="content">
                    ${content}
                </div>

            </thermal-dialog>
        `;
    }

}