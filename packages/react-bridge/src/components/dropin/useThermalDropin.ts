import { ThermalRegistry } from "@labir/core";
import { useDropzone } from "react-dropzone";
import { useThermalGroupInstancesState } from "../../properties/lists/useThermalGroupInstancesState";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";

export const useThermalDropin = (
    registry: ThermalRegistry,
    groupId: string
) => {

    const ID = useThermalObjectPurpose( registry, "useThermalDropin", true );

    const dropzone = useDropzone({
        onDrop: async ( acceptedFiles ) => {

            registry.processDroppedFiles( acceptedFiles, groupId );

        },
        accept: {
            "application/x-binary": [ ".lrc" ],
        },

    });

    const group = registry.groups.addOrGetGroup( groupId );

    const instances = useThermalGroupInstancesState( group, ID );

    return {
        group,
        instances,
        dropzone
    }

}