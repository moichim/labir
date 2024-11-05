/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/edit.js":
/*!*************************!*\
  !*** ./src/app/edit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_analysisEditor_useAnalysisEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/analysisEditor/useAnalysisEditor */ "./src/utils/analysisEditor/useAnalysisEditor.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/app/editor.scss");
/* harmony import */ var _utils_useRegisterIframeScript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useRegisterIframeScript */ "./src/utils/useRegisterIframeScript.js");
/* harmony import */ var _utils_analysisEditor_AnalysisEditorModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/analysisEditor/AnalysisEditorModal */ "./src/utils/analysisEditor/AnalysisEditorModal.js");
/* harmony import */ var _utils_analysisEditor_AnalysisEditorTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/analysisEditor/AnalysisEditorTrigger */ "./src/utils/analysisEditor/AnalysisEditorTrigger.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit({
  attributes,
  setAttributes
}) {
  const ID = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => Math.random().toString());

  /** Register the webcomponents if not already */
  (0,_utils_useRegisterIframeScript__WEBPACK_IMPORTED_MODULE_6__.useRegisterIframeScript)();
  const {
    webcomponent,
    palette,
    thermal,
    opacity,
    visible,
    label,
    description,
    author,
    license,
    from,
    to,
    analysis1,
    analysis2,
    analysis3,
    analysis4,
    analysis5,
    analysis6,
    analysis7,
    speed
  } = attributes;
  const [thermalBackup, setThermalBackup] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(thermal);
  const [previewFile, setPreviewFile] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    open,
    setOpen
  } = (0,_utils_analysisEditor_useAnalysisEditor__WEBPACK_IMPORTED_MODULE_2__.useAnalysisEditor)();
  const startUploadingThermalFile = () => {
    const backup = thermal;
    setThermalBackup(backup);
    setAttributes({
      thermal: thermal
    });
  };
  const calcelUploadingThermalFile = () => {
    setAttributes({
      thermal: thermalBackup
    });
  };
  const successfullyUploadedThermalFile = file => {
    setAttributes({
      thermal: file
    });
    setThermalBackup(undefined);
  };
  const startUploadingVisibleFile = () => {};
  const successfullyUploadedVisibleFile = file => {
    setAttributes({
      visible: file
    });
  };
  const filePreviewCallback = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(node => {
    if (node) {
      node.onInstanceCreated.set(ID + "___sth", instance => {
        setPreviewFile(instance);
        if (instance.moutedBaseLayers) {
          instance.unmountFromDom();
        }
        instance.draw();
      });
      node.registry.range.addListener(ID, value => {
        if (value instanceof Object) {
          setAttributes(value);
        } else {
          setAttributes({
            from: undefined,
            to: undefined
          });
        }
      });
    }
  }, []);
  const displaySettingsCallback = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(node => {
    if (node) {
      node.registry.range.addListener(ID, value => {
        if (value instanceof Object) {
          setAttributes(value);
        } else {
          setAttributes({
            from: undefined,
            to: undefined
          });
        }
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
          title: "Thermal file",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_utils_analysisEditor_AnalysisEditorModal__WEBPACK_IMPORTED_MODULE_7__.AnalysisEditorModal, {
            thermal: thermal,
            open: open,
            setOpen: setOpen,
            attributes: attributes,
            setAttributes: setAttributes
          }), thermal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("manager-provider", {
            slug: ID + "___preview",
            palette: palette,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("registry-provider", {
              from: from,
              to: to,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("group-provider", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("file-provider", {
                  thermal: thermal,
                  ref: filePreviewCallback,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("file-canvas", {})
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            style: {
              marginBottom: "1rem",
              marginTop: thermal ? "1rem" : "0"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
              allowedTypes: ['application/octet-stream'],
              onSelect: result => {
                successfullyUploadedThermalFile(result.url);
              },
              onClose: calcelUploadingThermalFile,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
                  onClick: () => {
                    startUploadingThermalFile();
                    open();
                  },
                  variant: "primary",
                  size: "compact",
                  children: thermal ? "Change file" : "Upload or select a LRC file"
                }), thermal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_utils_analysisEditor_AnalysisEditorTrigger__WEBPACK_IMPORTED_MODULE_8__.AnalysisEditorTrigger, {
                  setOpen: setOpen
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
          title: "Visible file",
          initialOpen: false,
          children: [visible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            src: visible
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
            allowedTypes: "image",
            onSelect: result => {
              successfullyUploadedVisibleFile(result.url);
            },
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
              onClick: () => {
                startUploadingVisibleFile();
                open();
              },
              variant: "primary",
              children: visible ? "Change file" : "Upload or select a visible image"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
          title: "Information",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author', 'thermal-display'),
            value: author || '',
            onChange: value => setAttributes({
              author: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('License', 'thermal-display'),
            value: license || '',
            onChange: value => setAttributes({
              license: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label', 'thermal-display'),
            help: "Label appears on the black button on top & left of the app.",
            value: label || '',
            onChange: value => setAttributes({
              label: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
          title: "Display settings",
          initialOpen: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("manager-provider", {
            slug: ID + "___display",
            palette: palette,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("registry-provider", {
              from: from,
              to: to,
              ref: displaySettingsCallback,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("group-provider", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("file-provider", {
                  thermal: thermal,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
                    label: "Variant",
                    value: webcomponent,
                    options: [{
                      label: "Advanced analyser",
                      value: "thermal-desktop-app"
                    }, {
                      label: "Simplified display",
                      value: "thermal-file-app"
                    }],
                    onChange: value => setAttributes({
                      webcomponent: value
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
                    label: "Palette",
                    value: palette,
                    options: [{
                      label: "Iron",
                      value: "iron"
                    }, {
                      label: "Jet",
                      value: "jet"
                    }, {
                      label: "Grayscale",
                      value: "grayscale"
                    }],
                    onChange: value => setAttributes({
                      palette: value
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                    style: {
                      paddingBottom: "1rem"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("registry-range-slider", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("registry-ticks-bar", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("registry-range-display", {})]
                  }), previewFile && previewFile.timeline.isSequence && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
                    label: "Playback Speed",
                    value: speed,
                    options: [{
                      label: "0.5x",
                      value: 0.5
                    }, {
                      label: "1x",
                      value: 1
                    }, {
                      label: "2x",
                      value: 2
                    }, {
                      label: "3x",
                      value: 3
                    }, {
                      label: "5x",
                      value: 5
                    }, {
                      label: "10x",
                      value: 10
                    }],
                    onChange: value => setAttributes({
                      speed: value
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
                    __nextHasNoMarginBottom: true,
                    label: "Opacity",
                    value: opacity,
                    onChange: value => setAttributes({
                      opacity: value
                    }),
                    min: 0,
                    max: 1,
                    step: 0.01
                  })]
                })
              })
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(),
      children: thermal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
        text: "Click to edit",
        delay: 300,
        hideOnClick: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "thermal__content-editor__container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              children: [webcomponent === "thermal-file-app" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thermal-file-app", {
                url: thermal,
                visible: visible,
                palette: palette,
                author: author,
                license: license,
                label: label,
                description: description,
                from: from,
                to: to,
                analysis1: analysis1,
                analysis2: analysis2,
                analysis3: analysis3,
                analysis4: analysis4,
                analysis5: analysis5,
                analysis6: analysis6,
                analysis7: analysis7,
                style: {
                  pointerEvents: "none"
                },
                speed: speed,
                opacity: opacity
              }), webcomponent === "thermal-desktop-app" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thermal-desktop-app", {
                url: thermal,
                visible: visible,
                palette: palette,
                author: author,
                license: license,
                label: label,
                description: description,
                from: from,
                to: to,
                analysis1: analysis1,
                analysis2: analysis2,
                analysis3: analysis3,
                analysis4: analysis4,
                analysis5: analysis5,
                analysis6: analysis6,
                analysis7: analysis7,
                style: {
                  pointerEvents: "none"
                },
                speed: speed,
                opacity: opacity
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "thermal__content-editor__wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: "Edit parameters in the sidebar."
              })
            })]
          })
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
        label: "Thermal display",
        instructions: "An advanced thermal analysis app will display here once you provide a LRC file recorded by IR camera TIMI Edu.",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          viewBox: "0 0 512 512",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("g", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("g", {
              id: "Vrstva_1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("path", {
                d: "M327.6,240c-5.4-4.7-13.6-7.1-24.6-7.1h-51.9v60.8h52c10.9,0,19-2.4,24.6-7.2s8.2-12.7,8.2-23.6-2.8-18.1-8.3-22.8Z"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("path", {
                d: "M252.4,0L18.9,90.7h-.6v421.3h466.9V90.7h.6L252.4,0ZM161.8,411.9h-47.5v-216h47.5v216ZM342.1,411.9c-2.8-7.9-4.5-16.2-4.9-24.6-.6-9.5-1.5-18.4-2.7-27.2-1.6-11.3-5-19.5-10.3-24.8s-13.8-7.9-25.7-7.9h-47.5v84.4h-47.5v-215.9h116.4c8.9-.1,17.8,1.5,26.2,4.7,7.4,2.9,14.2,7.3,19.9,12.8,5.5,5.4,9.8,11.8,12.7,18.9,3,7.3,4.5,15.2,4.4,23.1.3,11.5-2.4,22.9-7.9,33-6,9.9-15.3,17.3-26.2,21.2v.6c5.3,1.3,10.3,3.9,14.5,7.4,3.8,3.3,7,7.3,9.4,11.8,2.5,4.7,4.3,9.7,5.3,15,1.1,5.4,1.9,10.9,2.3,16.3.2,3.4.4,7.5.6,12.1s.6,9.2,1.1,14.2c.5,4.6,1.3,9.2,2.4,13.7.9,4,2.6,7.7,5,11.1h-47.6Z"
              })]
            })
          })
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
          allowedTypes: ['application/octet-stream'],
          onSelect: result => {
            successfullyUploadedThermalFile(result.url);
          },
          render: ({
            open
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
            onClick: () => {
              startUploadingThermalFile();
              open();
            },
            variant: "primary",
            children: thermal ? "Change file" : "Upload or select a LRC file"
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/app/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/app/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/app/block.json");
/* harmony import */ var _utils_libScriptElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/libScriptElement */ "./src/utils/libScriptElement.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Load the external JS library for webcomponents
 * 
 * Uses ESM variant of the file downloaded from JSfiddle.
 * 
 * @todo Export ESM build right from @labir/embed
 */

const loadExternalLibrary = () => {
  const el = (0,_utils_libScriptElement__WEBPACK_IMPORTED_MODULE_4__.createLibScriptElement)(document);
  document.head.appendChild(el);
};
loadExternalLibrary();

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  icon: {
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      viewBox: "0 0 512 512",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("g", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("g", {
          id: "Layer one",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
            d: "M327.6,240c-5.4-4.7-13.6-7.1-24.6-7.1h-51.9v60.8h52c10.9,0,19-2.4,24.6-7.2s8.2-12.7,8.2-23.6-2.8-18.1-8.3-22.8Z"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
            d: "M252.4,0L18.9,90.7h-.6v421.3h466.9V90.7h.6L252.4,0ZM161.8,411.9h-47.5v-216h47.5v216ZM342.1,411.9c-2.8-7.9-4.5-16.2-4.9-24.6-.6-9.5-1.5-18.4-2.7-27.2-1.6-11.3-5-19.5-10.3-24.8s-13.8-7.9-25.7-7.9h-47.5v84.4h-47.5v-215.9h116.4c8.9-.1,17.8,1.5,26.2,4.7,7.4,2.9,14.2,7.3,19.9,12.8,5.5,5.4,9.8,11.8,12.7,18.9,3,7.3,4.5,15.2,4.4,23.1.3,11.5-2.4,22.9-7.9,33-6,9.9-15.3,17.3-26.2,21.2v.6c5.3,1.3,10.3,3.9,14.5,7.4,3.8,3.3,7,7.3,9.4,11.8,2.5,4.7,4.3,9.7,5.3,15,1.1,5.4,1.9,10.9,2.3,16.3.2,3.4.4,7.5.6,12.1s.6,9.2,1.1,14.2c.5,4.6,1.3,9.2,2.4,13.7.9,4,2.6,7.7,5,11.1h-47.6Z"
          })]
        })
      })
    })
  }
});

/***/ }),

/***/ "./src/utils/analysisEditor/AnalysisEditorModal.js":
/*!*********************************************************!*\
  !*** ./src/utils/analysisEditor/AnalysisEditorModal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalysisEditorModal: () => (/* binding */ AnalysisEditorModal)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const AnalysisEditorModal = ({
  thermal,
  open,
  setOpen,
  attributes,
  setAttributes
}) => {
  const ID = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (Math.random() * 1000000).toFixed(0), []);
  const getId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(input => `${ID}__${input}`, [ID]);
  const {
    palette,
    from,
    to,
    analysis1,
    analysis2,
    analysis3,
    analysis4,
    analysis5,
    analysis6,
    analysis7
  } = attributes;
  const fileProviderRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(node => {
    if (node) {
      /** Mirror internal changes of analysis to the global state */
      const closure = instance => {
        instance.slots.onSlot1Serialize.set(ID, value => setAttributes({
          analysis1: value
        }));
        instance.slots.onSlot2Serialize.set(ID, value => setAttributes({
          analysis2: value
        }));
        instance.slots.onSlot3Serialize.set(ID, value => setAttributes({
          analysis3: value
        }));
        instance.slots.onSlot4Serialize.set(ID, value => setAttributes({
          analysis4: value
        }));
        instance.slots.onSlot5Serialize.set(ID, value => setAttributes({
          analysis5: value
        }));
        instance.slots.onSlot6Serialize.set(ID, value => setAttributes({
          analysis6: value
        }));
        instance.slots.onSlot7Serialize.set(ID, value => setAttributes({
          analysis7: value
        }));
      };
      node.onInstanceCreated.set(getId("instance_created__2"), closure);
    }
  }, [thermal]);

  // Return nothing when closed
  if (!open) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: "Analysis editor",
    isFullScreen: true,
    onRequestClose: () => setOpen(false),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("manager-provider", {
      slug: getId("manager"),
      palette: palette,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("registry-provider", {
        from: from,
        to: to,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("group-provider", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("file-provider", {
            thermal: thermal,
            ref: fileProviderRef,
            analysis1: analysis1,
            analysis2: analysis2,
            analysis3: analysis3,
            analysis4: analysis4,
            analysis5: analysis5,
            analysis6: analysis6,
            analysis7: analysis7,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "modal-editor__container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "modal-editor__tools",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("group-tool-buttons", {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "modal-editor__canvas",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("file-canvas", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("file-timeline", {})
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "modal-editor__details",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  style: {
                    minHeight: "50%"
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("file-analysis-table", {})
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  style: {
                    height: 300
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("file-analysis-graph", {
                    style: {
                      height: "300px"
                    }
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: {
                width: "100%"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                size: "compact",
                variant: "primary",
                style: {
                  float: "right"
                },
                onClick: () => setOpen(false),
                children: "Close"
              })
            })]
          })
        })
      })
    })
  });
};

/***/ }),

/***/ "./src/utils/analysisEditor/AnalysisEditorTrigger.js":
/*!***********************************************************!*\
  !*** ./src/utils/analysisEditor/AnalysisEditorTrigger.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalysisEditorTrigger: () => (/* binding */ AnalysisEditorTrigger)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const AnalysisEditorTrigger = ({
  setOpen
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    variant: "secondary",
    size: "compact",
    onClick: () => setOpen(true),
    children: "Analysis editor"
  });
};

/***/ }),

/***/ "./src/utils/analysisEditor/useAnalysisEditor.js":
/*!*******************************************************!*\
  !*** ./src/utils/analysisEditor/useAnalysisEditor.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAnalysisEditor: () => (/* binding */ useAnalysisEditor)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/** Store the analysis editor state */
const useAnalysisEditor = () => {
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return {
    open,
    setOpen
  };
};

/***/ }),

/***/ "./src/utils/libScriptElement.js":
/*!***************************************!*\
  !*** ./src/utils/libScriptElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLibScriptElement: () => (/* binding */ createLibScriptElement),
/* harmony export */   documentHasLibScriptElement: () => (/* binding */ documentHasLibScriptElement)
/* harmony export */ });
const scriptId = "labir_embed_lib_dynamical";
const homeUrl = window.location.origin;

/**
 * Create a script element with the ESM library 
 * 
 * It shall be used in block editor.
 * 
 * @param {Document} document 
 */
const createLibScriptElement = document => {
  const element = document.createElement("script");
  element.type = "module";
  element.id = scriptId;
  // element.innerHTML = `import '${homeUrl}/wp-content/plugins/thermal-display/assets/embed.es.js'`;
  element.innerHTML = `import 'https://cdn.jsdelivr.net/npm/@labir/embed@1.2.51/+esm'`;
  return element;
};

/**
 * Check if the given document includes the necessary script.
 * 
 * @param {Document} document 
 * @returns {Boolean}
 */
const documentHasLibScriptElement = document => {
  const element = document.getElementById(scriptId);
  return element ? true : false;
};

/***/ }),

/***/ "./src/utils/useRegisterIframeScript.js":
/*!**********************************************!*\
  !*** ./src/utils/useRegisterIframeScript.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRegisterIframeScript: () => (/* binding */ useRegisterIframeScript)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libScriptElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libScriptElement */ "./src/utils/libScriptElement.js");



/**
 * Make sure the external library is loaded whenever any instance of this component is being edited
 */
const useRegisterIframeScript = () => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const allIframes = document.querySelectorAll("iframe");
    for (let i = 0; i < allIframes.length; i++) {
      const iframe = allIframes[i];
      if (iframe.name === "editor-canvas") {
        const doc = iframe.contentWindow.document;
        if (!(0,_libScriptElement__WEBPACK_IMPORTED_MODULE_1__.documentHasLibScriptElement)(doc)) {
          const script = (0,_libScriptElement__WEBPACK_IMPORTED_MODULE_1__.createLibScriptElement)(doc);
          doc.head.appendChild(script);
        }
      }
    }
  }, []);
};

/***/ }),

/***/ "./src/app/editor.scss":
/*!*****************************!*\
  !*** ./src/app/editor.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/style.scss":
/*!****************************!*\
  !*** ./src/app/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/app/block.json":
/*!****************************!*\
  !*** ./src/app/block.json ***!
  \****************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"thermal-display/file","version":"0.1.0","title":"Thermal display","category":"thermal","icon":"file:./assets/icon.svg","description":"An interactive thermal image application.","example":{},"supports":{"interactivity":false,"html":false,"anchor":true,"lock":true,"align":["wide","full"],"spacing":{"padding":true,"margin":true}},"textdomain":"thermal-display","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js","keywords":["webcomponent","IR Camera","embed","LRC"],"attributes":{"layout":{"type":"object","default":{"type":"constrained"}},"webcomponent":{"type":"string","default":"thermal-file-app"},"thermal":{"type":"string"},"visible":{"type":"string"},"opacity":{"type":"number","default":1},"palette":{"type":"string","default":"iron"},"from":{"type":"number"},"to":{"type":"number"},"speed":{"type":"number","default":1},"label":{"type":"string"},"author":{"type":"string"},"license":{"type":"string","default":"CC BY-SA 4.0"},"description":{"type":"string"},"analysis1":{"type":"string"},"analysis2":{"type":"string"},"analysis3":{"type":"string"},"analysis4":{"type":"string"},"analysis5":{"type":"string"},"analysis6":{"type":"string"},"analysis7":{"type":"string"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app/index": 0,
/******/ 			"app/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_labir_wordpress"] = self["webpackChunk_labir_wordpress"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["app/style-index"], () => (__webpack_require__("./src/app/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map