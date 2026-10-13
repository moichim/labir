import { property } from "lit/decorators.js";
import { AbstractManagerProvider } from "../abstraction/AbstractManagerProvider";

export class ManagerProviderElement extends AbstractManagerProvider {

    @property({ 
        type: String, 
        reflect: true, 
        attribute: true 
    })
    public slug!: string;

}