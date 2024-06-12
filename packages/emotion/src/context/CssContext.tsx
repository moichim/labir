import React, {
    createContext,
    useCallback,
    useContext,
    useInsertionEffect,
    useMemo,
    useRef,
} from "react";

import pjson from "../../package.json";
import { Variables } from "../theme/Variables";
import { Skin } from "../theme/Skin";

const useCssInternal = (prefix: string = "lrc") => {
  /** Style elements are stored in a immutable object so that any operations and checks are independent on React render loop. */
  const elements = useRef<{
    [index: string]: HTMLStyleElement;
  }>({});

  /** Generate the ID of a stylesheet */
  const getId = useCallback(
    (key: string) => `${prefix}__${pjson.version}__${key}`,
    [prefix]
  );

  /** Create a style element */
  const styleElementFactory = useCallback(
    (key: string, style: string) => {
      const element = document.createElement("style");
      element.id = getId(key);
      element.innerHTML = style;
      return element;
    },
    [getId]
  );

  /** Check if a style exists */
  const styleExists = useCallback(
    (key: string) => {
      return key in elements.current;
    },
    [elements]
  );

  /** Get an existing instance of the style */
  const getExistingStyle = useCallback(
    (key: string) => {
      if (styleExists(key)) {
        return elements.current[key];
      }
      return undefined;
    },
    [elements, styleExists]
  );

  /** Add a stylesheet */
  const addCss = useCallback(
    (key: string, style: string) => {
      if (styleExists(key)) {
        // Do nothing
        return;
      }

      const element = styleElementFactory(key, style);
      elements.current[key] = element;
      document.head.appendChild(element);
    },
    [styleExists, styleElementFactory, elements]
  );

  /** Remove a stylesheet */
  const removeCss = useCallback(
    (key: string) => {
      const existing = getExistingStyle(key);
      if (existing !== undefined) {
        document.head.removeChild(existing);
        delete elements.current[key];
      }
    },
    [getExistingStyle, elements]
  );

  return {
    addCss,
    removeCss,
  };
};

type CssContextType = ReturnType<typeof useCssInternal>;

const cssContextDefaults: CssContextType = {
  addCss: () => {},
  removeCss: () => {},
};

const CssContext = createContext(cssContextDefaults);

export const CssContextProvider: React.FC<
  React.PropsWithChildren> = ({ ...props }) => {
  const context = useCssInternal();

  useInsertionEffect(() => {
    const variables = new Variables();

    context.addCss(
      "baseStyles",
      `
            :root {

                ${Variables.printCss(variables.getColorsVariables())}
                ${Variables.printCss( variables.getFontVariables() )}
                ${Variables.printCss( variables.getGapVariables() )}
                ${Variables.printCss( variables.getBreakpointsVariables() )}

                ${Skin.key( "gap" )}: ${Skin.value( "gap-xs" )};
                ${Skin.key( "font-size" )}: ${Skin.value( "font-size-xs" )};

            }

            .lrc-app__root {

                @media ( min-width: ${variables.breakpoints.sm}px ) {
                    ${Skin.key("gap")}: ${Skin.value( "gap-sm" )};
                    ${Skin.key( "font-size" )}: ${Skin.value( "font-size-sm" )};
                }
                @media ( min-width: ${variables.breakpoints.md}px ) {
                    ${Skin.key("gap")}: ${Skin.value( "gap-md" )};
                    ${Skin.key( "font-size" )}: ${Skin.value( "font-size-md" )};
                }
                @media ( min-width: ${variables.breakpoints.lg}px ) {
                    ${Skin.key("gap")}: ${Skin.value( "gap-lg" )};
                    ${Skin.key( "font-size" )}: ${Skin.value( "font-size-lg" )};
                }
                @media ( min-width: ${variables.breakpoints.xl}px ) {
                    ${Skin.key("gap")}: ${Skin.value( "gap-xl" )};
                    ${Skin.key( "font-size" )}: ${Skin.value( "font-size-xl" )};
                }

                font-size: ${Skin.value("font-size")};
                ${Skin.key( "font-size" )}: ${Skin.value( "font-size-xs" )};
                font-family: sans-serif;
            }
            
        `
    );
  }, []);

  return (
    <CssContext.Provider value={context}>
      <div className={"lrc-app__root"}>{props.children}</div>
    </CssContext.Provider>
  );
};

export const useCss = (key: string, css: string) => {
  const context = useContext(CssContext);

  useInsertionEffect(() => {
    context.addCss(key, css);

    return () => {
      context.removeCss(key);
    };
  }, []);
};
