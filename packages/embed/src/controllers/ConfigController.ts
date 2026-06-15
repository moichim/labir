import { AbstractReactiveController } from "./AbstractReactiveController";
import { IBaseElement } from "./IBaseElement";

export interface IAppWithConfig extends IBaseElement {

    advancedPalettes: boolean;

}

export class ConfigController extends AbstractReactiveController<IAppWithConfig> {

    hostConnected(): void {
        
    }

    hostDisconnected(): void {
        
    }

}