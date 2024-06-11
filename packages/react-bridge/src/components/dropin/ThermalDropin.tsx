import { ThermalRegistry } from "@labir/core";
import React from "react";
import { ThermalInstance } from "../instance/thermalInstance";
import { useThermalDropin } from "./useThermalDropin";

type ThermalDropinProps = {
  registry: ThermalRegistry;
  groupId: string;
};
/** @deprecated Should implement the hook individually! */
export const ThermalDropin: React.FC<ThermalDropinProps> = (props) => {
  const { instances, dropzone } = useThermalDropin(
    props.registry,
    props.groupId
  );

  return (
    <>
      <div {...dropzone.getRootProps()}>
        Dropin
        <input {...dropzone.getInputProps()} />
        {dropzone.isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {instances.value.map((instance) => (
        <ThermalInstance key={instance.id} instance={instance} />
      ))}
    </>
  );
};
