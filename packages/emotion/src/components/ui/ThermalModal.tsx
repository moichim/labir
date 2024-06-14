import {
    Dialog,
    DialogPanel,
    DialogTitle
} from "@headlessui/react";
import React, { useState } from "react";
import { ThermalButton, ThermalButtonProps } from "./thermalButton";
import { Skin } from "../../theme/Skin";



type ThermalModalProps = {
  buttonComponent: React.FC<ThermalButtonProps>;
  buttonContent: React.ReactNode;
  content: React.ReactNode;
  title: React.ReactNode
};

export const ThermalModal: React.FC<ThermalModalProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const Button = props.buttonComponent;

  return (
    <>
      <Button onClick={() => setOpen(true)}>{props.buttonContent}</Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        static
        className="lrc-dark lrc-app__root"
      >
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            // background: "red",
            backdropFilter: "blur(10px)",
            top: 0,
            left: 0,
            zIndex: 9999,
            display: open ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              background: Skin.colorValue("gray", 100),
              padding: Skin.gapValue(),
              borderColor: Skin.colorValue("gray", 200),
              borderWidth: 1,
              borderStyle: "solid",
              boxShadow: `5px 5px 20px ${Skin.colorValue("gray", 50)}`,
              borderRadius: 10,
              color: "white",
            }}
          >
            <DialogPanel>
              <DialogTitle style={{marginTop: 0}}>{props.title}</DialogTitle>

              <div style={{opacity: .8}}>
              {props.content}
              </div>
              
              <ThermalButton onClick={() => setOpen(false)} style={{float:"right"}}>
                Zavřít
              </ThermalButton>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
