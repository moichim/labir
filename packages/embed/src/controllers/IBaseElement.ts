import { ReactiveControllerHost } from "lit";
import { AbstractThermalElement } from "../hierarchy/AbstractThermalElement";

export interface IBaseElement extends AbstractThermalElement, ReactiveControllerHost {

    // log(...args: any[]): void; // eslint-disable-line @typescript-eslint/no-explicit-any

}