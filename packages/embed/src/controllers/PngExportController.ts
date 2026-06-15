import { createContext } from "@lit/context";
import { AbstractThermalElement } from "../hierarchy/AbstractThermalElement";
import { AbstractReactiveController } from "./AbstractReactiveController";
import { IBaseElement } from "./IBaseElement";
import { SubscriberManager } from "./SubscriberManager";

/**
 * Application that provides the `ConfigBaseController` needs to implement this service. It is necessary that the fields of this interface are implemented using `@state` or `@property` decorators. Updates of these reactive properties will trigger all necessary updates and hooks.
 * @package `@labirthermal/embed`
 */
export interface IAppWithPngExport extends IBaseElement {

    /** The `PngExportController` instance exposed by the host as context by the host `@provide`. */
    pngExportController: PngExportController;

    /** The width of the simple PNG export in PX. @internal */
    pngExportWidth: number;

    /** The font size of the simple PNG export in PX. @internal */
    pngExportFontSize: number;

    /** Does the simply exported PNG's include analyses? @internal */
    pngExportsAnalysis: boolean;

    /** Does the simply exported PNG's include the file name(s)? @internal */
    pngExportsFileName: boolean;

    /** Does the simply exported PNG's include the thermal scale? @internal */
    pngExportsThermalScale: boolean;

    /** Does the simply exported PNG's include the file date(s)? @internal */
    pngExportsFileDate: boolean;

    /** The license included in simply exported images. */
    pngExportLicense: string | undefined;

}




/**
 * This context exposes the `PngExportController` to all descendant elements. The controller provides access to the base configuration properties for PNG exports, as well as some utility methods.
 * @package `@labirthermal/embed`
 */
export const pngExportContext = createContext<PngExportController>("config-png-export-controller");



/** 
 * A reactive controller for the base configuration properties. 
 * @package `@labirthermal/embed`
*/
export class PngExportController extends AbstractReactiveController<IAppWithPngExport> {

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

    public get exportWidth(): number { return this.host.pngExportWidth; }
    public get exportFontSize(): number { return this.host.pngExportFontSize; }
    public get exportsAnalyses(): boolean { return this.host.pngExportsAnalysis; }
    public get exportsFileName(): boolean { return this.host.pngExportsFileName; }
    public get exportsThermalScale(): boolean { return this.host.pngExportsThermalScale; }
    public get exportsFileDate(): boolean { return this.host.pngExportsFileDate; }
    public get exportLicense(): string | undefined { return this.host.pngExportLicense; }


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

    public setWidth(
        value: number
    ): void {
        this.host.pngExportWidth = value;
        this._subscribers.notifySubscribers();
    }

    public setFontSize(
        value: number
    ): void {
        this.host.pngExportFontSize = value;
        this._subscribers.notifySubscribers();
    }

    public setAnalyses(
        value: boolean
    ): void {
        this.host.pngExportsAnalysis = value;
        this._subscribers.notifySubscribers();
    }

    public setFileName(
        value: boolean
    ): void {
        this.host.pngExportsFileName = value;
        this._subscribers.notifySubscribers();
    }

    public setThermalScale(
        value: boolean
    ): void {
        this.host.pngExportsThermalScale = value;
        this._subscribers.notifySubscribers();
    }

    public setFileDate(
        value: boolean
    ): void {
        this.host.pngExportsFileDate = value;
        this._subscribers.notifySubscribers();
    }

    public setLicense(
        value: string | undefined = undefined
    ): void {
        this.host.pngExportLicense = value;
        this._subscribers.notifySubscribers();
    }

}