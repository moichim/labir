import { ThermalManager } from "@labir/core";
import { BaseElement } from "../BaseElement";
import { getParentManagerOrDefault } from "../providers/getters";

export abstract class ManagerConsumer extends BaseElement {

    public readonly manager: ThermalManager;

    public constructor() {
        super();

        this.manager = getParentManagerOrDefault( this.parentElement );

    }

}