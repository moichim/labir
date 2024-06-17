import { computed, onMounted, ref, watch, type Ref } from "vue";
import { useFileHierarchy } from "./useFileHierarchy"
import type { ThermalFileInstance } from "@labir/core";

export const useFileInstance = (
    url: Ref<string>
) => {

    const hierarchy = useFileHierarchy( url.value );

    const {registry, group} = useFileHierarchy( url.value );

    const instance = ref<ThermalFileInstance>();

    const load = ( urlVal: string ) => {
        registry.loadOneFile( {
            thermalUrl: urlVal
        }, group.id );
    }

    group.instances.addListener( url.value, ( value ) => {
        console.log( "změnily se grupy", value );
        instance.value = group.instances.map.get( url.value )
    } )

    onMounted( () => {
        console.log( "komponenta byla mountována", url.value );
        load( url.value );
    } );

    watch( url, 
    ( newUrl ) => {

        load( newUrl );

    } )

    return instance;

}