import { ThermalRegistry } from "@labir/core";
import React, { useCallback } from "react";
import {useDropzone} from 'react-dropzone'
import { useThermalGroupInstancesState } from "../../properties/lists/useThermalGroupInstancesState";
import { ThermalInstance } from "../instance/thermalInstance";

type ThermalDropinProps = {
    registry: ThermalRegistry,
    groupId: string
}

export const ThermalDropin: React.FC<ThermalDropinProps> = props => {

    const dropzone = useDropzone({
        onDrop: async ( acceptedFiles, rejectedFiles, event ) => {

            console.log( event );

            props.registry.processDroppedFiles( acceptedFiles, props.groupId );

        },
        accept: {
            "application/x-binary": [ ".lrc" ],
        },

    });

    const group = props.registry.groups.addOrGetGroup( props.groupId );

    const instances = useThermalGroupInstancesState( group, "ThermalDropin" );

    return <><div
        {...dropzone.getRootProps()}
    >

        Dropin

        <input {...dropzone.getInputProps()} />

        {
        dropzone.isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }

    </div>
    {instances.value.map( instance => <ThermalInstance instance={instance} /> )}
    </>

}