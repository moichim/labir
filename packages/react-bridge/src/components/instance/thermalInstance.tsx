"use client";

import { ThermalFileInstance } from "@labir/core";
import classNames from "classnames";
import React, {
  MouseEvent,
  useEffect,
  useMemo,
  useRef
} from "react";
import { createPortal } from "react-dom";
import { useInstanceListener } from "./useInstanceListener";

export type ThermalInstanceEventHandler = (
  listenerLayerEvent: MouseEvent<HTMLDivElement>,
  instance: ThermalFileInstance
) => void;

type ThermalInstanceProps = React.PropsWithChildren & {
  instance: ThermalFileInstance;

  onMouseEnter?: ThermalInstanceEventHandler;
  onClick?: ThermalInstanceEventHandler;
  onMouseLeave?: ThermalInstanceEventHandler;
  onMouseMove?: ThermalInstanceEventHandler;

  style?: React.CSSProperties;
  className?: string;
};

/**
 * Displays an instance
 *
 * Creates the DOM inside which the instance shall be rendered.
 */
export const ThermalInstance: React.FC<ThermalInstanceProps> = ({
  className = "",
  instance,
  style = {},
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Mounting and unmounting
  useEffect(() => {
    if (ref.current) {
      instance.mountToDom(ref.current);
      instance.draw();
    }

    return () => instance.unmountFromDom();
  }, [instance]);

  // Memoised styles
  const css = useMemo(() => {
    const st = style;
    st.position = "relative";
    st.padding = 0;
    st.margin = 0;
    return st;
  }, [style]);

  // Memoised className
  const classes = useMemo(() => {
    return classNames(className, "lrc__instance-canvas");
  }, [className]);

  // EventListeners
  const onClick = useInstanceListener(props.onClick, instance);
  const onMouseEnter = useInstanceListener(props.onMouseEnter, instance);
  const onMouseMove = useInstanceListener(props.onMouseMove, instance);
  const onMouseLeave = useInstanceListener(props.onMouseLeave, instance);

  // Portal to the listener layer => props children shall be rendered there
  const listenerElement = useMemo(() => {
    return instance.listenerLayer.getLayerRoot();
  }, [instance]);

  return (
    <>
      <div
        ref={ref}
        className={classes}
        style={css}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      ></div>
      {children && createPortal(children, listenerElement)}
    </>
  );
};
