import { ref, watch } from "vue";
import { useDefineGroup } from "../structure/define/useDefineGroup";
import { useProvidedGroup } from "@/hooks/structure/provided/useProvidedGroup";
import { useProvidedOrNewGroup } from "../structure/providedOrNew/useProvidedOrNewGroup";
import type { ThermalFileInstance } from "@labir/core";
import { useRegistryLoaded } from "../properties/useRegistryLoaded";

export const useFile = ( thermalUrl: string, visibleUrl?: string ) => {


    const {group, isProvided} = useProvidedOrNewGroup(`group-for-file__${thermalUrl}__${Math.random()}`);

    let shouldLoad = true;

    console.log( group.registry );

    group.registry.enqueueFile( group.id, thermalUrl, visibleUrl );

    if ( isProvided ) {
        shouldLoad = false;
    }

    const instance = ref<ThermalFileInstance>();

    const loading = useRegistryLoaded( thermalUrl + Math.random().toFixed(3), group.registry );

    watch( loading.loading, ( next ) => {

        if ( next === false ) {
            console.log( "NAčteno", next, group.instances.map.get( thermalUrl ) );
            instance.value = group.instances.map.get( thermalUrl );
        }

    } );



    return {
        group,
        shouldLoad,
        instance
    }
}