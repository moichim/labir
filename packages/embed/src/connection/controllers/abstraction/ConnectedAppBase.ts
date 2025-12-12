import Client from "@labirthermal/server";
import { property, state } from "lit/decorators.js";
import { BaseAppWithPngExportContext } from "../../../utils/converters/pngExportContext";
import { AppWithClientController, ClientController } from "../ClientController";
import { AppWithContentController, ContentController } from "../ContentController";
import { provide } from "@lit/context";
import { ControlledClientContext, ControlledContentContext, DisplayControllerContext } from "../controllerContexts";
import { AppWithDisplayController, DisplayController, DisplayState, FileListDisplayMode, FolderListDisplayMode } from "../DisplayController";
import { booleanConverter } from "../../../utils/converters/booleanConverter";
import { css, CSSResultGroup, html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { cache } from "lit/directives/cache.js";

export abstract class ConnectedAppBase extends BaseAppWithPngExportContext implements AppWithClientController, AppWithContentController, AppWithDisplayController {

    /** Name of the listener event called upon initialisation of the connected app */
    public static readonly INITIALISATION_LISTENER = "connected-app-initialisation";

    @state()
    apiClient!: Client;

    /** The reactive reactive controller for the client connection */
    @provide({ context: ControlledClientContext })
    public readonly client = new ClientController(this);

    /** The reactive controller for contents */
    @provide({ context: ControlledContentContext })
    public readonly content = new ContentController(this);

    @provide({ context: DisplayControllerContext })
    public readonly display = new DisplayController(this);

    @property({
        type: String,
        reflect: true,
        attribute: "server-url"
    })
    serverUrl!: string;

    @property({
        type: String,
        attribute: "server-api-root"
    })
    serverApiRoot!: string;

    @property({
        type: String,
        attribute: "auth-url",
    })
    authUrl?: string | undefined;

    @property({
        type: String,
        attribute: "auth-token",
    })
    authToken?: string | undefined;

    @property({
        type: String,
        reflect: true,
        attribute: "folder-path"
    })
    public folderPath?: string | undefined;

    @property({
        type: String,
        attribute: "file-name",
        reflect: true
    })
    public fileName?: string | undefined;


    @property({
        type: String,
        attribute: "folder-display",
        reflect: true
    })
    public folderListDisplayMode: FolderListDisplayMode = FolderListDisplayMode.LIST;

    @property({
        type: String,
        attribute: "files-display",
        reflect: true
    })
    public fileDisplayMode: FileListDisplayMode = FileListDisplayMode.GRID;

    @property({
        type: Boolean,
        attribute: "edit-tags",
        converter: booleanConverter(false),
        reflect: true
    })
    public editTags: boolean = false;

    @property({
        type: Boolean,
        attribute: "display-comments",
        converter: booleanConverter(true),
        reflect: true
    })
    public displayComments: boolean = true;

    /** The crucial variable for routing the display */
    @state()
    public appState: DisplayState = DisplayState.LOADING;


    @property({
        type: String,
        attribute: "label",
        reflect: true
    })
    public label?: string;


    @property({
        type: String,
        attribute: "label-tooltip",
        reflect: true
    })
    public labelTooltip?: string;

    @property({
        type: String,
        attribute: "label-icon",
        reflect: true
    })
    public labelIcon?: string;

    @property({
        type: String,
        attribute: "label-icon-style",
        reflect: true

    })
    public labelIconStyle?: string;

    @property({
        type: String,
        attribute: "label-variant",
        reflect: true
    })
    public labelVariant?: string;


    /** States that have the registry around */
    private static readonly  STATES_WITH_REGISTRY = [
        DisplayState.FOLDER,
        DisplayState.FILE
    ];

    /**
     * Should we render the Registry provider around the content?
     */
    private get hasRegistryProvider(): boolean {
        return ConnectedAppBase.STATES_WITH_REGISTRY.includes( this.appState );
    }

    /**
     * Should we render the Group provider around the content?
     */
    private get hasGroupProvider(): boolean {

        if ( 
            this.appState === DisplayState.FILE 
            || ( 
                this.appState === DisplayState.FOLDER 
                && this.folderListDisplayMode !== FolderListDisplayMode.GRID
            )
        ) {
            return true;
        }

        return false;

    }

    public static styles?: CSSResultGroup | undefined = css`
    
        :host {
            display: block;
            width: 100%;
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);
        }

        .inspector {
            display: grid;
            grid-template-columns: 2em 1fr;
            gap: var(--thermal-gap);
            width: 100%;
        }

        .inspector__tools {

            group-tool-bar {
                position: sticky;
                top: 0px;
                z-index: 99;
            }

        }
    
    `;





    connectedCallback(): void {

        if (this.serverUrl === undefined || this.serverUrl.length === 0) {
            throw new Error("The 'server-url' attribute is required but was not provided.");
        }

        this.apiClient = new Client(
            this.serverUrl,
            this.serverApiRoot
        );

        super.connectedCallback();

        /** This is very important - call this before the client is ready */
        this.setupInitialStateBeforeClientIsRead();

        this.client.onReadyForContentRequests.add(ConnectedAppBase.INITIALISATION_LISTENER, async () => {


            this.log( "Client is ready for content requests, now initialise the app content" );

            await this.initialiseContentAfterClientReady();

            this.log( "The content is now ready" );

        });

    }







    
    /**
     * Renders the app wrapped in all necessary providers of internal context
     */
    protected renderAppWithInternals(
        innerContent: unknown
    ): unknown {

        const thermalApp = html`<thermal-app
            label=${ifDefined(this.label)}
            showfullscreen="true"
            labelTooltip=${ifDefined(this.labelTooltip)}
            labelIcon=${ifDefined(this.labelIcon)}
            labelIconStyle=${ifDefined(this.labelIconStyle)}
            labelVariant=${ifDefined(this.labelVariant)}
        >
            <thermal-btn 
                slot="close" 
                icon="reload"
                iconStyle="micro"
                tooltip="Reload the current view"
                @click=${() => {
                    this.display.reloadCurrentState();
                }}
            ></thermal-btn>

            <connected-user-button slot="close"></connected-user-button>

            <slot name="pre" slot="pre"></slot>

            <slot name="before-content"></slot>

            ${ innerContent }
            
            <slot name="after-content"></slot>

        </thermal-app>`;

        const fileBlock = this.content.file !== undefined && this.content.file.url !== undefined
            ? cache( html`
                <file-provider
                    thermal=${ this.content.file.url }
                    visual=${ ifDefined( this.content.file.visual ) }
                    batch="true"
                    autoclear="true"
                    analysis1=${ ifDefined( this.content.file.analyses[0] ) }
                    analysis2=${ ifDefined( this.content.file.analyses[1] ) }
                    analysis3=${ ifDefined( this.content.file.analyses[2] ) }
                    analysis4=${ ifDefined( this.content.file.analyses[3] ) }
                    analysis5=${ ifDefined( this.content.file.analyses[4] ) }
                    analysis6=${ ifDefined( this.content.file.analyses[5] ) }
                    analysis7=${ ifDefined( this.content.file.analyses[6] ) }
                >
                    ${ thermalApp }
                </file-provider>
            ` )
            : thermalApp;


        const groupBlock = this.hasGroupProvider
            ? cache( html`
                <group-provider
                    slug=${ this.display.slug }
                    batch="true"
                    autoclear="true"
                >
                    ${ fileBlock }
                </group-provider>
            ` )
            : fileBlock;


        const registryBlock = this.hasRegistryProvider
            ? cache( html`
                <registry-provider
                    slug=${ this.display.slug }
                    autoclear="true"
                >
                    ${ groupBlock }
                </registry-provider>
            ` )
            : groupBlock;



        return html`<manager-provider
            slug=${this.UUID}
            style="display: contents;"
        >
            ${ registryBlock }
        </manager-provider>`;
    }


    /**
     * Renders the inspector layout with header, content and tools 
     * @returns 
     */
    protected renderBrowserLayout(
        header: unknown,
        content: unknown
    ): unknown {


        return html`

        <!-- Draw the header content into the various slots -->
        ${ header }

        <div slot="pre">
            <registry-histogram expandable="true"></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
        </div>
        
        <!-- The inspector goes to the content slot of the thermal-app -->
        <main class="inspector">

            <section class="inspector__tools">
                <group-tool-bar></group-tool-bar>
            </section>
            
            <section class="inspector__content">
                ${ content }
            </section>
        </main>`;

    }


    /** This method is used to setup the absolutely initial state of the application before any initialisation of the client takes place. */
    protected abstract setupInitialStateBeforeClientIsRead(): void;

    /** 
     * This method is used for the initial content requests after the client is ready & logged in. It is called only once, in the same time as `this.client.onReadyForContentRequests`
     */
    protected abstract initialiseContentAfterClientReady(): Promise<void>;


}