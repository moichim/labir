import { ReactiveController } from "lit";
import { IBaseElement } from "./IBaseElement";
import { createContext } from "@lit/context";
import { SubscriberManager } from "./SubscriberManager";
import { AbstractThermalElement } from "../hierarchy/AbstractThermalElement";

/**
 * Application that provides the `ConfigBaseController` needs to implement this service. It is necessary that the fields of this interface are implemented using `@state` or `@property` decorators. Updates of these reactive properties will trigger all necessary updates and hooks.
 * @package `@labirthermal/embed`
 */
export interface IAppWithConfigBase extends IBaseElement {

    /** The `ConfigBaseController` instance exposed by the host as context by the host `@provide`. */
    configBaseController: ConfigBaseController;

    /** The width of the simple PNG export in PX. @internal */
    configBasePngExportWidth: number;

    /** The font size of the simple PNG export in PX. @internal */
    configBasePngExportFontSize: number;

    /** Does the simply exported PNG's include analyses? @internal */
    configBasePngExportsAnalysis: boolean;

    /** Does the simply exported PNG's include the file name(s)? @internal */
    configBasePngExportsFileName: boolean;

    /** Does the simply exported PNG's include the thermal scale? @internal */
    configBasePngExportsThermalScale: boolean;

    /** Does the simply exported PNG's include the file date(s)? @internal */
    configBasePngExportsFileDate: boolean;

    /** The license included in simply exported images. */
    configBasePngExportLicense: string | undefined;

}




/**
 * Theis context exposes the `ConfigBaseController` to all descendant elements. The controller provides access to the base configuration properties for PNG exports, as well as some utility methods.
 * @package `@labirthermal/embed`
 */
export const configBaseControllerContext = createContext<ConfigBaseController>("config-base-controller");



/** 
 * A reactive controller for the base configuration properties. 
 * @package `@labirthermal/embed`
*/
export class ConfigBaseController implements ReactiveController {

    declare host: IAppWithConfigBase;

    /** Manages the child elements depending on the configuration changes. */
    private _subscribers: SubscriberManager = new SubscriberManager();

    hostConnected(): void {}

    hostDisconnected(): void {
        this._subscribers.clear();
    }

    /** Logs anything using the host's logging mechanism. Adds the controller's className as the first argument. */
    protected log(...args: any[]): void {
        this.host.log( 
            this.constructor.name, 
            ...args 
        );
    }

    public get pngExportWidth(): number { return this.host.configBasePngExportWidth; }
    public get pngExportFontSize(): number { return this.host.configBasePngExportFontSize; }
    public get pngExportsAnalyses(): boolean { return this.host.configBasePngExportsAnalysis; }
    public get pngExportsFileName(): boolean { return this.host.configBasePngExportsFileName; }
    public get pngExportsThermalScale(): boolean { return this.host.configBasePngExportsThermalScale; }
    public get pngExportsFileDate(): boolean { return this.host.configBasePngExportsFileDate; }
    public get pngExportLicense(): string | undefined { return this.host.configBasePngExportLicense; }


    /**
     * Subscribe an element with an optional callback to changes of values in this responsive controller. Whenever a value is is changed, the `SubscriberManager.notifyUpdates` is called.
     */
    public subscribe(
        element: AbstractThermalElement,
        optionalCallback?: ( element: AbstractThermalElement ) => void
    ): void {
        this._subscribers.subscribe(
            element,
            optionalCallback
        );
    }

    /**
     * Unsubscribe an element from the configuration changes.
     */
    public ubsubscribe(
        element: AbstractThermalElement
    ): void {
        this._subscribers.delete(element.UUID);
    }

    public setPngExportWidth(
        value: number
    ): void {
        this.host.configBasePngExportWidth = value;
        this._subscribers.notifySubscribers();
    }

    public setPngFontSize(
        value: number
    ): void {
        this.host.configBasePngExportFontSize = value;
        this._subscribers.notifySubscribers();
    }

    public setPngExportsAnalyses(
        value: boolean
    ): void {
        this.host.configBasePngExportsAnalysis = value;
        this._subscribers.notifySubscribers();
    }

    public setPngExportsFileName(
        value: boolean
    ): void {
        this.host.configBasePngExportsFileName = value;
        this._subscribers.notifySubscribers();
    }

    public setPngExportsThermalScale(
        value: boolean
    ): void {
        this.host.configBasePngExportsThermalScale = value;
        this._subscribers.notifySubscribers();
    }

    public setPngExportsFileDate(
        value: boolean
    ): void {
        this.host.configBasePngExportsFileDate = value;
        this._subscribers.notifySubscribers();
    }

    public setPngExportLicense(
        value: string | undefined = undefined
    ): void {
        this.host.configBasePngExportLicense = value;
        this._subscribers.notifySubscribers();
    }

}