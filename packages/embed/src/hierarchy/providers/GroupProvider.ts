import { customElement, property } from "lit/decorators.js";
import { AbstractGroupProvider } from "../abstraction/AbstractGroupProvider";

@customElement("group-provider")
export class GroupProviderElement extends AbstractGroupProvider {

    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public slug!: string;

}