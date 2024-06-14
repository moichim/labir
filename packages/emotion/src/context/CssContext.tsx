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

const useCssInternal = (
  appRoot: Element | undefined = undefined,
  prefix: string = "lrc"
) => {
  const elementsInHead = useRef<{
    [index: string]: HTMLStyleElement;
  }>({});

  const elementsInRoot = useRef<{
    [index: string]: HTMLStyleElement;
  }>({});

  /** The document.head allways holds base styles */
  const head = useMemo(() => document.head, []);

  /** The root for all other styles depends on implementation. In webcomponents, the style is added to the render container. Otherwise, the styles are added to the root. */
  const root = useMemo(() => {
    return appRoot !== undefined ? appRoot : document.head;
  }, [appRoot]);

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
      return key in elementsInRoot.current;
    },
    [elementsInRoot]
  );

  /** Get an existing instance of the style */
  const getExistingStyle = useCallback(
    (key: string) => {
      if (styleExists(key)) {
        return elementsInRoot.current[key];
      }
      return undefined;
    },
    [elementsInRoot, styleExists]
  );

  /** Add a css to the document head */
  const addHeadCss = useCallback(
    (key: string, css: string) => {
      if (key in elementsInHead.current) {
        // do nothing
        return;
      }

      const element = styleElementFactory(key, css);

      elementsInHead.current[key] = element;
      head.appendChild(element);
    },
    [head]
  );

  /** Add a stylesheet */
  const addCss = useCallback(
    (key: string, style: string) => {
      if (styleExists(key)) {
        // Do nothing
        return;
      }

      const element = styleElementFactory(key, style);
      elementsInRoot.current[key] = element;
      root.appendChild(element);
    },
    [styleExists, styleElementFactory, elementsInRoot, root]
  );

  /** Remove a stylesheet */
  const removeCss = useCallback(
    (key: string) => {
      const existing = getExistingStyle(key);
      if (existing !== undefined) {
        // root.removeChild(existing);
        // delete elementsInRoot.current[key];
      }
    },
    [getExistingStyle, elementsInRoot, root]
  );

  return {
    addCss,
    removeCss,
    addHeadCss,
  };
};

type CssContextType = ReturnType<typeof useCssInternal>;

const cssContextDefaults: CssContextType = {
  addCss: () => {},
  removeCss: () => {},
  addHeadCss: () => {},
};

const CssContext = createContext(cssContextDefaults);

export const CssContextProvider: React.FC<
  React.PropsWithChildren & {
    appRoot?: Element;
  }
> = ({ ...props }) => {
  const context = useCssInternal(props.appRoot);

  const variables = useMemo( () => new Variables(), [] );

  const implementationStyles = useMemo(
    () => `
  
    .lrc-light {
      ${Variables.printCss(variables.getColorsVariables())}
    }
    .lrc-dark {
        ${Variables.printCss(variables.getColorsVariables(true))}
    }

    .lrc-app__root {

        @media ( min-width: ${variables.breakpoints.sm}px ) {
            ${Skin.key("gap")}: ${Skin.value("gap-sm")};
            ${Skin.key("font-size")}: ${Skin.value("font-size-sm")};
        }
        @media ( min-width: ${variables.breakpoints.md}px ) {
            ${Skin.key("gap")}: ${Skin.value("gap-md")};
            ${Skin.key("font-size")}: ${Skin.value("font-size-md")};
        }
        @media ( min-width: ${variables.breakpoints.lg}px ) {
            ${Skin.key("gap")}: ${Skin.value("gap-lg")};
            ${Skin.key("font-size")}: ${Skin.value("font-size-lg")};
        }
        @media ( min-width: ${variables.breakpoints.xl}px ) {
            ${Skin.key("gap")}: ${Skin.value("gap-xl")};
            ${Skin.key("font-size")}: ${Skin.value("font-size-xl")};
        }

        font-size: ${Skin.value("font-size")};
        ${Skin.key("font-size")}: ${Skin.value("font-size-xs")};
        font-family: sans-serif;
    }
  
  `,
    []
  );

  useInsertionEffect(() => {

    context.addHeadCss(
      "baseStyles",
      `
            :root {

                ${Variables.printCss(variables.getColorsVariables())}
                ${Variables.printCss(variables.getFontVariables())}
                ${Variables.printCss(variables.getGapVariables())}
                ${Variables.printCss(variables.getBreakpointsVariables())}

                ${Skin.key("gap")}: ${Skin.value("gap-xs")};
                ${Skin.key("font-size")}: ${Skin.value("font-size-xs")};

            }
            
        `
    );

    context.addHeadCss("implementationStylesHead", implementationStyles);
    context.addCss("implementationStyles", implementationStyles);
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

export const useHeadCss = (key: string, css: string) => {
  const context = useContext(CssContext);

  useInsertionEffect(() => {
    context.addHeadCss(key, css);

    return () => {
      // context.removeCss(key);
    };
  }, []);
};
