import { ThermalRegistry, ThermalGroup, ThermalFileInstance } from "@labir/core";
import { useMemo } from "react";
import { v4 as uuidv4 } from 'uuid';

/** Creates and stores a thermal object!s ID for the purpose of listeners */
export const useThermalObjectPurpose = (
    object: ThermalRegistry | ThermalGroup | ThermalFileInstance,
    purpose: string,
    individual: boolean | undefined = false
) => {

    return useMemo(() => {

        const iteration = (Math.random() * 10000).toFixed(0);

        let objectType = "object";

        if (object instanceof ThermalRegistry)
            objectType = "registry";
        else if (object instanceof ThermalGroup)
            objectType = "group";
        else if (object instanceof ThermalFileInstance)
            objectType = "instance";

        const buffer = [
            objectType,
            object.id,
            purpose,
            iteration
        ];

        if ( individual === true ) {
            buffer.push( uuidv4() );
        }
        
        return buffer.join( "__" );

    }, []);


}