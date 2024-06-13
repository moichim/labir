import { ThermalFileInstance } from "@labir/core";
import { ThermalModal } from "../ui/ThermalModal";
import { ThermalButton } from "../ui/thermalButton";
import React from "react";

type InstanceEmbedModalProps = {
  instance: ThermalFileInstance;
};

export const ThermalInfoModal: React.FC<InstanceEmbedModalProps> = (props) => {
  return (
    <ThermalModal
      title="Informace o termogramu"
      buttonComponent={ThermalButton}
      buttonContent="Informace o souboru"
      content={
        <>
          <p>Název souboru: {props.instance.url} </p>
          <p>Rozlišení: {props.instance.width} x {props.instance.height} px</p>
          <p>Minimální teplota: {props.instance.min} °C</p>
          <p>Maximální teplota: {props.instance.max} °C</p>
          <p>Signatura: {props.instance.signature}</p>
          <p>Jednotky: {props.instance.unit === 2 ? "Stupně celsia" : "kelviny"}</p>
          <p></p>

        </>
      }
    />
  );
};
