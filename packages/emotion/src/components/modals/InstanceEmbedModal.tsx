import { ThermalFileInstance } from "@labir/core";
import { ThermalModal } from "../ui/ThermalModal";
import { ThermalButton } from "../ui/thermalButton";
import React from "react";

type InstanceEmbedModalProps = {
  instance: ThermalFileInstance;
};

export const ThermalEmbedModal: React.FC<InstanceEmbedModalProps> = (props) => {
  return (
    <ThermalModal
      title="Sdílejte termogram"
      buttonComponent={ThermalButton}
      buttonContent="Sdílet"
      content={
        <>
          <p>Do vašeho webu vložíte tento termogram pomocí následujícího kódu:</p>
          <pre>
            {`<script type="module" src="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.js"></script>
<thermal-file url="${props.instance.url}" />`}
          </pre>
        </>
      }
    />
  );
};
