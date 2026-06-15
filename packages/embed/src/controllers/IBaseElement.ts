import { ReactiveControllerHost } from "lit";
import { AbstractThermalElement } from "../index.export";

export interface IBaseElement extends AbstractThermalElement, ReactiveControllerHost {

    // log(...args: any[]): void; // eslint-disable-line @typescript-eslint/no-explicit-any

}