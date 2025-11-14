import { ThermalFileReader, type AbstractFile } from "@labirthermal/core";
import { shallowRef } from "vue";
import { useProvidedOrNewGroup } from "../structure/providedOrNew/useProvidedOrNewGroup";

export const useFile = ( thermalUrl: string, visibleUrl?: string ) => {


    const {group, isProvided} = useProvidedOrNewGroup(`group-for-file__${thermalUrl}__${Math.random()}`);

    let shouldLoad = true;

    if ( isProvided ) {
        shouldLoad = false;
    }

    const instance = shallowRef<AbstractFile>();

    group.registry.service.loadFile( thermalUrl, visibleUrl )
        .then( async (reader) => {

            if ( reader instanceof ThermalFileReader ) {
                const instannce = await reader.createInstance( group );
                instance.value = instannce;
            }

        } )

    return {
        group,
        shouldLoad,
        instance
    }
}