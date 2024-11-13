import { AbstractProperty, IBaseProperty } from "../abstractProperty";

export interface IWithLoading extends IBaseProperty {

    /** Stores the loading state and executes all the listeners. */
    loading: LoadingState

}

export class LoadingState extends AbstractProperty<boolean, IWithLoading> {

    protected validate(value: boolean): boolean {
        return value;
    }

    protected afterSetEffect() {
        
    }

    public markAsLoading() {
        if ( this.value === false ) {
            this.value = true;
        }
    }

    public markAsLoaded() {
        if ( this.value === true ) {
            this.value = false;
        }
    }

}