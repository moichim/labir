import { ThermalManager } from "@labir/core";
import { BaseElement } from "../hierarchy/BaseElement";

export abstract class AbstractControlledApp extends BaseElement {

    public abstract get manager(): ThermalManager;

}