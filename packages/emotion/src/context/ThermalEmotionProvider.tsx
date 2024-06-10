import React, { useMemo } from "react";
/** @jsx jsx */
import { jsx, Global, ClassNames } from "@emotion/react";
import { Variables } from "../theme/Variables";

import { v4 as uuid } from "uuid";

export const ThermalEmotionProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const variables = useMemo(() => new Variables(), []);

const ID = useMemo( () => uuid(), [] );

const appClass = useMemo( () => {
    return `lrc-app-${ID}`;
}, [ID] );

  const globalStyles = useMemo(() => {
    return {
      ":root": {
        ...variables.getColors(false),
      },
      ".lrc-light": {
        ...variables.getColors(false),
      },
      ".lrc-dark": {
        ...variables.getColors(true),
      },
      [`.${appClass}`]: {
        fontSize: "17px",
        fontFamily: "sans-serif"
      }
    };
  }, [variables]);

  return (
    <>
      <Global styles={globalStyles} />
      <ClassNames>
      {({ css, cx }) => (
        <div
          className={cx(
            appClass,
            'some-class',
            css`

              h1 {
                font-size: 28px;
              }
            `
          )}
        >
            {props.children}
        </div>
      )}
      </ClassNames>
    </>
  );
};
