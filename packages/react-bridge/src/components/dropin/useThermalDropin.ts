"use client";

import { ThermalFileReader, ThermalRegistry } from "@labirthermal/core";
import { useDropzone } from "react-dropzone";
import { useThermalGroupInstancesState } from "../../properties/lists/useThermalGroupInstancesState";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";

export const useThermalDropin = (
    registry: ThermalRegistry,
    groupId: string
) => {

    const ID = useThermalObjectPurpose( registry, "useThermalDropin", true );

    const group = registry.groups.addOrGetGroup( groupId );

    const dropzone = useDropzone({
        onDrop: async ( acceptedFiles ) => {

            await Promise.all(
                acceptedFiles.map( async (file) => {
                    const result = await registry.service.loadUploadedFile( file );
                    if ( result instanceof ThermalFileReader ) {
                        return await result.createInstance( group );
                    }
                } )
            );

            registry.postLoadedProcessing();


        },
        accept: {
            "application/x-binary": [ ".lrc" ],
        },

    });

    const instances = useThermalGroupInstancesState( group, ID );

    return {
        group,
        instances,
        dropzone
    }

}