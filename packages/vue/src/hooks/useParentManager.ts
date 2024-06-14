import { ThermalManager } from "@labir/core";
import { inject } from "vue"

export const useManager = () => {
    const manager = inject<ThermalManager | undefined>( "manager" );

    if ( ! manager ) {
        return new ThermalManager;
    }
    return manager;
}