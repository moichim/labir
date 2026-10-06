import type { ThermalManager } from "@labirthermal/core";
import { AbstractThermalElement } from "../hierarchy/AbstractThermalElement";
import { ConfigController } from "../hierarchy/controllers/ConfigController";

export abstract class AbstractControlledApp extends AbstractThermalElement {

    protected readonly configController = new ConfigController(this);

    public abstract get manager(): ThermalManager;

}