import { customElement, property } from "lit/decorators.js";
import { AbstractGroupProvider } from "../abstraction/AbstractGroupProvider";

@customElement("group-mirror")
export class GroupProviderElement extends AbstractGroupProvider {

    @property({ type: String })
    public slug!: string;


}