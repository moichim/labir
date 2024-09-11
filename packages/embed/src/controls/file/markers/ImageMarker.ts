import { consume } from "@lit/context";
import { nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { fileMsContext } from "../../../hierarchy/providers/context/FileContexts";
import { msToTime, timeToMs } from "./utils";

const converter = {
    fromAttribute: (value: string | null) => {
        if (value === null)
            return null;
        return timeToMs(value);
    },
    toAttribute: (value: number | null) => {
        if (value === null)
            return null;
        return msToTime(value);
    }
}


@customElement("file-marker")
export class FileMarker extends FileConsumer {
    public onInstanceCreated(): void {
        // throw new Error("Method not implemented.");
    }
    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }

    @consume({ context: fileMsContext, subscribe: true })
    @state()
    protected ms: number = 0;

    @property({ type: String, reflect: true, attribute: true })
    public label?: string;

    @property({ type: String, reflect: true, attribute: true, converter })
    public start!: number;

    @property({ type: String, reflect: true, attribute: true, converter })
    public end?: number;

    @property({ type: String, reflect: true, attribute: true, converter })
    public dur?: number;

    @property({ type: String, reflect: true, attribute: true })
    public active: boolean = false;

    @property({ type: String, reflect: true, attribute: true })
    public pauseOnActivate: boolean = true;

    @property({ type: String, reflect: true, attribute: true })
    public say?: string;

    protected utterance?: SpeechSynthesisUtterance;
    protected isSpeaking: boolean = false;


    public get fromMs() {
        return this.start;
    }

    public get endMs() {
        if (this.end !== undefined) {
            return this.end;
        } else if (this.dur !== undefined) {
            return this.fromMs + this.dur;
        } else {
            return this.fromMs + 300;
        }
    }
    constructor() {
        super();
        /** Need to call this here since in Chrome, the first request gives empty array and a subsequent request gives voices. */
        window.speechSynthesis.getVoices();
    }


    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("ms")) {

            if (this.fromMs <= this.ms && this.endMs >= this.ms) {
                if (this.active === false) {
                    this.active = true;
                }
            } else {
                if (this.active === true) {
                    this.active = false;
                }
            }
        }
    }

    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback(name, _old, value);

        this.log(name, _old, value);

        // Say if needed to

        if (name === "active" && value === "true" ) {
            if ( this.say !== undefined) {

                this.speak();

                if (this.playing && this.pauseOnActivate) {
                    this.file?.timeline.pause();
                }

            }
        } else if ( name === "active" && value === "false" ) {

            if ( this.say !== undefined && this.isSpeaking) {
                window.speechSynthesis.cancel();
            }

        }
    }

    public async speak() {

        if (this.say !== undefined) {
            this.utterance = new SpeechSynthesisUtterance(this.say);

            const voice = await this.getVoice();
            if (voice) {
                this.utterance.voice = voice;
            }

            this.utterance.voice = voice;
            this.isSpeaking = true;

            window.speechSynthesis.speak(this.utterance);

            this.utterance.onend = () => {
                this.utterance = undefined;
                this.isSpeaking = false;
                if ( this.playing === false && this.pauseOnActivate ) {
                    this.file?.timeline.play();
                }
            };
        }

    }

    protected async getVoice() {
        const voices = await window.speechSynthesis.getVoices();

        // Czech voice
        const voice = voices.find(voice => voice.lang === "cs-CZ");
        if (voice) {
            return voice;
        }

        // Default voice
        const def = voices.find(voice => voice.default === true);
        if (def) {
            return def;
        }

        return null;
    }


    protected render(): unknown {

        return nothing;
    }

}