import classNames from "classnames";
import React, { useMemo } from "react";
import { Orientation } from "../../../utilities/orientation";

type RangerContainerProps = React.PropsWithChildren & {
  orientation?: Orientation;
  className?: string;
  style?: React.CSSProperties;
};

export const RangerContainerInner: React.FC<RangerContainerProps> = ({
  orientation = Orientation.HORIZONTAL,
  className,
  style = {},
  ...props
}) => {
  const css: React.CSSProperties = {
    ...style,
    position: "relative",
    display: "flex",
  };

  if (orientation === Orientation.HORIZONTAL) {
    css.paddingTop = "20px";
    css.paddingBottom = "20px";
    css.width = "100%";
    css.flexDirection = "column";
  } else {
    css.paddingLeft = "20px";
    css.paddingRight = "20px";

    css.height = "400px";
  }

  const wrapperCss = useMemo(() => {
    const css: React.CSSProperties = {};
    if (orientation === Orientation.HORIZONTAL) {
      css.paddingLeft = "20px";
      css.paddingRight = "20px";
    } else {
      css.paddingTop = "10px";
      css.paddingBottom = "10px";
    }
    return css;
  }, [orientation]);

  const classes = classNames(
    "lrc-ranger-container",
    `lrc-ranger-container__${orientation}`,
    className
  );

  return (
    <div style={wrapperCss}>
        <div className={classes} style={css}>
      {props.children}
    </div>
    </div>
  );
};
