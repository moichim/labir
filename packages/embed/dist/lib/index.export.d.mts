import * as lit from "lit";
import { CSSResultGroup, LitElement, PropertyValueMap, PropertyValues, html } from "lit";
import { Ref } from "lit/directives/ref.js";
import { Placement } from "@floating-ui/dom";
import * as _labirthermal_core0 from "@labirthermal/core";
import { AbstractAnalysis, AvailableThermalPalette, CallbacksManager, Instance, ParsedTimelineFrame, PlaybackSpeeds, SlotNumber, ThermalFileFailure, ThermalGroup, ThermalManager, ThermalPaletteType, ThermalRangeOrUndefined, ThermalRegistry, ThermalTool } from "@labirthermal/core";

//#region src/utils/converters/booleanConverter.d.ts
declare const booleanConverter: (emptyValue: boolean) => {
  fromAttribute: (value: string | null) => boolean;
  toAttribute: (value: boolean) => "true" | "false";
};
//#endregion
//#region src/utils/converters/durationConverter.d.ts
/** Converts a duration property indicated as string to millis and back */
declare const durationConverter: {
  fromAttribute: (value: string | null) => number | undefined;
  toAttribute: (value: number | undefined) => string | undefined;
};
//#endregion
//#region src/utils/icons.d.ts
/**
 * Definice SVG ikon s jejich variantami
 * Každá ikona může mít více variant (outline, solid, mini, micro)
 * Použití: přidejte novou ikonu s jejími variantami zde
 */
declare const svg: {
  readonly lock: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n  <path fill-rule=\"evenodd\" d=\"M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z\" clip-rule=\"evenodd\" />\n</svg>\n";
  };
  readonly document: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z\" />\n</svg>";
  };
  readonly eye: {
    readonly solid: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-6\">\n            <path d=\"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" />\n                <path fill-rule=\"evenodd\" d=\"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly play: {
    readonly solid: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-6\">\n            <path fill-rule=\"evenodd\" d=\"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly pause: {
    readonly solid: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-6\">\n            <path fill-rule=\"evenodd\" d=\"M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly info: {
    readonly mini: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"size-5\">\n            <path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z\" clip-rule=\"evenodd\" />\n        </svg>";
    readonly solid: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-6\">\n            <path fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z\" clip-rule=\"evenodd\" />\n        </svg>";
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z\" />\n</svg>";
  };
  readonly settings: {
    readonly solid: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-6\">\n  <path fill-rule=\"evenodd\" d=\"M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z\" clip-rule=\"evenodd\" />\n</svg>";
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z\" />\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\" />\n</svg>\n";
  };
  readonly back: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z\" clip-rule=\"evenodd\" />\n</svg>";
  };
  readonly share: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path d=\"M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z\" />\n        </svg>";
    readonly mini: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"size-5\">\n            <path d=\"M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z\" />\n        </svg>";
  };
  readonly folder: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z\" /></svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n        <path d=\"M2 3.5A1.5 1.5 0 0 1 3.5 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 9.62 4H12.5A1.5 1.5 0 0 1 14 5.5v1.401a2.986 2.986 0 0 0-1.5-.401h-9c-.546 0-1.059.146-1.5.401V3.5ZM2 9.5v3A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8h-9A1.5 1.5 0 0 0 2 9.5Z\" />\n        </svg>";
  };
  readonly wifi: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path fill-rule=\"evenodd\" d=\"M14.188 7.063a8.75 8.75 0 0 0-12.374 0 .75.75 0 0 1-1.061-1.06c4.003-4.004 10.493-4.004 14.496 0a.75.75 0 1 1-1.061 1.06Zm-2.121 2.121a5.75 5.75 0 0 0-8.132 0 .75.75 0 0 1-1.06-1.06 7.25 7.25 0 0 1 10.252 0 .75.75 0 0 1-1.06 1.06Zm-2.122 2.122a2.75 2.75 0 0 0-3.889 0 .75.75 0 1 1-1.06-1.061 4.25 4.25 0 0 1 6.01 0 .75.75 0 0 1-1.06 1.06Zm-2.828 1.06a1.25 1.25 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.355.355a.75.75 0 0 1-1.06 0l-.354-.354a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly user: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n        <path fill-rule=\"evenodd\" d=\"M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly image: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n        <path fill-rule=\"evenodd\" d=\"M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly upwards: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-6\">\n        <path fill-rule=\"evenodd\" d=\"M20.24 20.249a.75.75 0 0 0-.75-.75H8.989V5.56l2.47 2.47a.75.75 0 0 0 1.06-1.061l-3.75-3.75a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l2.47-2.469V20.25c0 .414.335.75.75.75h11.25a.75.75 0 0 0 .75-.75Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly copy: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75\" />\n        </svg>";
    readonly mini: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"size-5\">\n            <path d=\"M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z\" />\n            <path d=\"M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z\" />\n        </svg>";
  };
  readonly right: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path fill-rule=\"evenodd\" d=\"M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly trash: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path fill-rule=\"evenodd\" d=\"M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly addfolder: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n        <path fill-rule=\"evenodd\" d=\"M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H9.621a1.5 1.5 0 0 1-1.06-.44L7.439 2.44A1.5 1.5 0 0 0 6.38 2H3.5ZM8 6a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 8 6Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly upload: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path d=\"M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z\" />\n            <path d=\"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z\" />\n        </svg>";
  };
  readonly close: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18 18 6M6 6l12 12\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n        <path d=\"M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z\" />\n        </svg>";
  };
  readonly edit: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n        <path d=\"M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z\" />\n        <path d=\"M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z\" />\n        </svg>";
  };
  readonly comment: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path fill-rule=\"evenodd\" d=\"M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Zm3-3.49a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25ZM4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly grid: {
    readonly solid: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-6\">\n            <path fill-rule=\"evenodd\" d=\"M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z\" clip-rule=\"evenodd\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path d=\"M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2h-2ZM3.5 9A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9h-2ZM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2ZM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2Z\" />\n        </svg>";
  };
  readonly list: {
    readonly solid: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-6\">\n            <path fill-rule=\"evenodd\" d=\"M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path d=\"M3 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM4 12.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" />\n        </svg>";
  };
  readonly check: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path fill-rule=\"evenodd\" d=\"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly "check-circle": {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z\" clip-rule=\"evenodd\" />\n</svg>";
  };
  readonly "circle-dots": {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n  <path fill-rule=\"evenodd\" d=\"M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" clip-rule=\"evenodd\" />\n</svg>";
  };
  readonly save: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 3h11l3 3v13H5V3Z\" />\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 3v4h8V3M7 10h10M7 12h8\" />\n            <circle cx=\"17\" cy=\"15\" r=\"1.5\" stroke=\"currentColor\" fill=\"none\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"size-4\">\n            <path d=\"M2 2h9l3 3v8H2V2Zm2 1v3h6V3H4Zm0 4h8v1H4V7Zm0 2h6v1H4V9Zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" />\n        </svg>";
  };
  readonly restore: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" className=\"size-4\">\n  <path fillRule=\"evenodd\" d=\"M6.25 12.5A2.75 2.75 0 0 0 9 9.75V4.56L6.78 6.78a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L10.5 4.56v5.19a4.25 4.25 0 0 1-8.5 0v-1a.75.75 0 0 1 1.5 0v1a2.75 2.75 0 0 0 2.75 2.75Z\" clipRule=\"evenodd\" />\n</svg>";
  };
  readonly unlink: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"size-5\">\n            <path fill-rule=\"evenodd\" d=\"M2.22 2.22a.75.75 0 0 1 1.06 0l4.46 4.46c.128-.178.272-.349.432-.508l3-3a4 4 0 0 1 5.657 5.656l-1.225 1.225a.75.75 0 1 1-1.06-1.06l1.224-1.225a2.5 2.5 0 0 0-3.536-3.536l-3 3a2.504 2.504 0 0 0-.406.533l2.59 2.59a2.49 2.49 0 0 0-.79-1.254.75.75 0 1 1 .977-1.138 3.997 3.997 0 0 1 1.306 3.886l4.871 4.87a.75.75 0 1 1-1.06 1.061l-5.177-5.177-.006-.005-4.134-4.134a.65.65 0 0 1-.005-.006L2.22 3.28a.75.75 0 0 1 0-1.06Zm3.237 7.727a.75.75 0 0 1 0 1.06l-1.225 1.225a2.5 2.5 0 0 0 3.536 3.536l1.879-1.879a.75.75 0 1 1 1.06 1.06L8.83 16.83a4 4 0 0 1-5.657-5.657l1.224-1.225a.75.75 0 0 1 1.06 0Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly link: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"size-5\">\n            <path d=\"M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z\" />\n            <path d=\"M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z\" />\n        </svg>";
  };
  readonly zoom: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6\" />\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path d=\"M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z\" />\n            <path fill-rule=\"evenodd\" d=\"M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z\" clip-rule=\"evenodd\" />\n        </svg>";
  };
  readonly adjustment: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n            <path d=\"M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z\" />\n        </svg>";
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75\" />\n        </svg>";
  };
  readonly range: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n            <g>\n                <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n                <line x1=\"5\" y1=\"9\" x2=\"5\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"2\"/>\n                <line x1=\"19\" y1=\"9\" x2=\"19\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"2\"/>\n            </g>\n        </svg>";
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\" class=\"size-4\">\n            <g>\n                <line x1=\"3\" y1=\"8\" x2=\"13\" y2=\"8\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                <line x1=\"3\" y1=\"6\" x2=\"3\" y2=\"10\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n                <line x1=\"13\" y1=\"6\" x2=\"13\" y2=\"10\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n            </g>\n        </svg>";
  };
  readonly bigger: {
    readonly mini: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"size-5\">\n  <path d=\"m13.28 7.78 3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 0 0 1.06 1.06ZM2 17.25v-4.5a.75.75 0 0 1 1.5 0v2.69l3.22-3.22a.75.75 0 0 1 1.06 1.06L4.56 16.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.747.747 0 0 1-.75-.75ZM12.22 13.28l3.22 3.22h-2.69a.75.75 0 0 0 0 1.5h4.5a.747.747 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69l-3.22-3.22a.75.75 0 1 0-1.06 1.06ZM3.5 4.56l3.22 3.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0V4.56Z\" />\n</svg>\n";
  };
  readonly smaller: {
    readonly mini: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"size-5\">\n  <path d=\"M3.28 2.22a.75.75 0 0 0-1.06 1.06L5.44 6.5H2.75a.75.75 0 0 0 0 1.5h4.5A.75.75 0 0 0 8 7.25v-4.5a.75.75 0 0 0-1.5 0v2.69L3.28 2.22ZM13.5 2.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-2.69l3.22-3.22a.75.75 0 0 0-1.06-1.06L13.5 5.44V2.75ZM3.28 17.78l3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06ZM13.5 14.56l3.22 3.22a.75.75 0 1 0 1.06-1.06l-3.22-3.22h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-2.69Z\" />\n</svg>";
  };
  readonly ellipsis: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n  <path d=\"M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z\" />\n</svg>";
  };
  readonly download: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n  <path d=\"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z\" />\n  <path d=\"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z\" />\n</svg>";
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3\" />\n</svg>";
  };
  readonly clipboard: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.8\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z\" />\n</svg>";
  };
  readonly bulb: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18\" />\n</svg>";
  };
  readonly reload: {
    readonly micro: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"size-4\">\n  <path fill-rule=\"evenodd\" d=\"M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z\" clip-rule=\"evenodd\" />\n</svg>";
  };
  readonly warning: {
    readonly outline: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z\" />\n</svg>";
  };
  readonly move: {
    readonly mini: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"size-5\">\n  <path fill-rule=\"evenodd\" d=\"M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z\" clip-rule=\"evenodd\" />\n  <path fill-rule=\"evenodd\" d=\"M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z\" clip-rule=\"evenodd\" />\n</svg>";
  };
};
/**
 * TypeScript typ pro automaticky generovaný objekt ikon
 * Zajišťuje typovou bezpečnost - pouze existující ikony a jejich varianty
 */
type IconsType = { [K in keyof typeof svg]: { [V in keyof typeof svg[K]]: (className?: string, styles?: string) => string } };
/**
 * Exportovaný objekt ikon s typovou bezpečností
 * Použití: icons.folder.outline("my-class", "color: red")
 */
declare const icons: IconsType;
//#endregion
//#region src/translations/Languages.d.ts
/**
 * Keys of all translation keys.
 *
 * In the comment is the englis version. Use only the keys in any t() function.
 */
declare enum T {
  moreoptions = "moreoptions",
  loading = "loading",
  config = "config",
  temperature = "temperature",
  upload = "upload",
  uploadafile = "uploadafile",
  selectfile = "selectfile",
  addfiles = "addfiles",
  clear = "clear",
  dragorselectfile = "dragorselectfile",
  share = "share",
  fileloadingerror = "fileloadingerror",
  embedhint = "embedhint",
  embedlibrary = "embedlibrary",
  embedcomponent = "embedcomponent",
  copy = "copy",
  create = "create",
  remotefoldersbrowseraddfolderhint = "remotefoldersbrowseraddfolderhint",
  file = "file",
  layout_simple = "layout_simple",
  layout_advanced = "layout_advanced",
  layout_nogui = "layout_nogui",
  layout_lesson = "layout_lesson",
  /** Next */
  next = "next",
  /** Previous */
  prev = "prev",
  /** Back */
  back = "back",
  /** Close */
  close = "close",
  open = "open",
  detail = "detail",
  showeverything = "showeverything",
  palette = "palette",
  /** Description */
  description = "description",
  /** Author */
  author = "author",
  /** License */
  license = "license",
  /** Recorded at */
  recordedat = "recordedat",
  /** Display settings */
  displaysettings = "displaysettings",
  /** File rendering */
  filerendering = "filerendering",
  /** Pixelated */
  pixelated = "pixelated",
  /** Smooth */
  smooth = "smooth",
  /** 'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are. */
  filerenderinghint = "filerenderinghint",
  /** Adjust time scale */
  adjusttimescale = "adjusttimescale",
  automaticrange = "automaticrange",
  fullrange = "fullrange",
  /** Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max). */
  adjusttimescalehint = "adjusttimescalehint",
  /** Select colour palette of thermal display. */
  colourpalettehint = "colourpalettehint",
  /** Palette {name} */
  palettename = "palettename",
  /** File info */
  fileinfo = "fileinfo",
  /** IR file name */
  thermalfilename = "thermalfilename",
  /** IR file URL */
  thermalfileurl = "thermalfileurl",
  /** Download the IR file */
  thermalfiledownload = "thermalfiledownload",
  /** Visible file name */
  visiblefilename = "visiblefilename",
  /** Visible file URL */
  visiblefileurl = "visiblefileurl",
  /** Download visible file */
  visiblefiledownload = "visiblefiledownload",
  togglevisibleimage = "togglevisibleimage",
  /** Time */
  time = "time",
  /** Duration */
  duration = "duration",
  /** Resolution */
  resolution = "resolution",
  /** Bytesize */
  bytesize = "bytesize",
  /** Minimal temperature */
  minimaltemperature = "minimaltemperature",
  /** Maximal temperature */
  maximaltemperature = "maximaltemperature",
  /** File type */
  filetype = "filetype",
  /** Type */
  type = "type",
  /** Supported devices */
  supporteddevices = "supporteddevices",
  numfiles = "numfiles",
  download = "download",
  downloadoriginalfiles = "downloadoriginalfiles",
  downloadoriginalfileshint = "downloadoriginalfileshint",
  downloadoriginalfile = "downloadoriginalfile",
  exportcurrentframeaspng = "exportcurrentframeaspng",
  convertentiresequencetovideo = "convertentiresequencetovideo",
  pngofindividualimages = "pngofindividualimages",
  pngofindividualimageshint = "pngofindividualimageshint",
  pngofentiregroup = "pngofentiregroup",
  pngofentiregrouphint = "pngofentiregrouphint",
  csvofanalysisdata = "csvofanalysisdata",
  csvofanalysisdatahint = "csvofanalysisdatahint",
  exportimagewidth = "exportimagewidth",
  exportimagefontsize = "exportimagefontsize",
  exportgroupname = "exportgroupname",
  exportfilenames = "exportfilenames",
  numberofcolumns = "numberofcolumns",
  exportdimensions = "exportdimensions",
  exportgroup = "exportgroup",
  thermalscale = "thermalscale",
  thermalrange = "thermalrange",
  filedate = "filedate",
  folder = "folder",
  folders = "folders",
  showingfolder = "showingfolder",
  showingfolders = "showingfolders",
  and = "and",
  or = "or",
  doyouwanttoadd = "doyouwanttoadd",
  youmayalsoadd = "youmayalsoadd",
  range = "range",
  info = "info",
  note = "note",
  group = "group",
  donotgroup = "donotgroup",
  groupby = "groupby",
  groupped = "groupped",
  bydays = "bydays",
  byhours = "byhours",
  byweeks = "byweeks",
  bymonths = "bymonths",
  byyears = "byyears",
  play = "play",
  pause = "pause",
  stop = "stop",
  date = "date",
  frame = "frame",
  playbackspeed = "playbackspeed",
  graphlines = "graphlines",
  straightlines = "straightlines",
  smoothlines = "smoothlines",
  graphlineshint = "graphlineshint",
  reload = "reload",
  analysis = "analysis",
  analyses = "analyses",
  avg = "avg",
  min = "min",
  max = "max",
  size = "size",
  edit = "edit",
  editsth = "editsth",
  remove = "remove",
  addpoint = "addpoint",
  addrectangle = "addrectangle",
  addellipsis = "addellipsis",
  analysishint = "analysishint",
  graph = "graph",
  graphhint1 = "graphhint1",
  graphhint2 = "graphhint2",
  rectangle = "rectangle",
  ellipsis = "ellipsis",
  point = "point",
  name = "name",
  color = "color",
  top = "top",
  left = "left",
  right = "right",
  bottom = "bottom",
  columns = "columns",
  fromto = "fromto",
  downloadgraphdataascsv = "downloadgraphdataascsv",
  apparenttemperature = "apparenttemperature",
  airtemperature = "airtemperature",
  relativeairhumidity = "relativeairhumidity",
  windspeed = "windspeed",
  inpercent = "inpercent",
  apparenttemperatureverbose = "apparenttemperatureverbose",
  youfeelwarmer = "youfeelwarmer",
  youfeelcolder = "youfeelcolder",
  apparenttemperaturehint = "apparenttemperaturehint",
  analysissync = "analysissync",
  /** Inspect tool */
  inspecttemperatures = "inspecttemperatures",
  usemousetoinspecttemperaturevalues = "usemousetoinspecttemperaturevalues",
  /**  Edit analysis tool */
  editanalysis = "editanalysis",
  dragcornersofselectedanalysis = "dragcornersofselectedanalysis",
  /** Add point tool */
  addpointanalysis = "addpointanalysis",
  clickandaddpoint = "clickandaddpoint",
  /** Add rectangle tool */
  addrectangleanalysis = "addrectangleanalysis",
  clickandaddrectangle = "clickandaddrectangle",
  /** Add ellipsis tool */
  addellipsisanalysis = "addellipsisanalysis",
  clickandaddellipsis = "clickandaddellipsis",
  /** Tutorial */
  tutorial = "tutorial",
  /** Colour Palette */
  colourpalette = "colourpalette",
  /** Use the dropdown to change the palette */
  palettehint = "palettehint",
  remotefoldersbrowser = "remotefoldersbrowser",
  /** Server */
  server = "server",
  networklog = "networklog",
  editfile = "editfile",
  editfolder = "editfolder",
  editcomment = "editcomment",
  user = "user",
  griddisplay = "griddisplay",
  tabledisplay = "tabledisplay",
  deletefile = "deletefile",
  deletefolder = "deletefolder",
  comments = "comments",
  deletecomment = "deletecomment",
  savecomment = "savecomment",
  addcomment = "addcomment",
  nocomments = "nocomments",
  savechanges = "savechanges",
  uploadfile = "uploadfile",
  compactview = "compactview",
  showdiscussion = "showdiscussion",
  edittags = "edittags",
  assignedtags = "assignedtags",
  availabletags = "availabletags",
  connectioninformation = "connectioninformation",
  serverurl = "serverurl",
  servername = "servername",
  login = "login",
  logout = "logout",
  logoutmessage = "logoutmessage",
  loginerror = "logineerror",
  password = "password",
  accessibletologgedinusers = "accessibletologgedinusers",
  display = "display",
  content = "content",
  syncanalyses = "syncanalyses",
  overviewofyourfolders = "overviewofyourfolders",
  uploadedby = "uploadedby",
  uploadeddat = "uploadeddat",
  createfolder = "createfolder",
  subfolder = "subfolder",
  createsubfolder = "createsubfolder",
  delete = "delete",
  export = "export",
  exportcontent = "exportcontent",
  histogram = "histogram",
  timeline = "timeline",
  exportwidth = "exportwidth",
  exportmargin = "exportmargin",
  exportgap = "exportgap",
  exportgrahpheight = "exportgrahpheight",
  imagecompression = "imagecompression",
  videoquality = "videoquality",
  exportvideo = "exportvideo",
  exportpng = "exportpng",
  exportrecordingframes = "exportrecordingframes",
  exportencodingfile = "exportencodingfile",
  exportdonotclosewindowhint = "exportdonotclosewindowhint",
  theme = "theme",
  light = "light",
  dark = "dark",
  foldermayhavefiles = "foldermayhavefiles",
  foldermayhavesubfolders = "foldermayhavesubfolders"
}
//#endregion
//#region src/hierarchy/AbstractThermalElement.d.ts
/** All the webcomponents of \@labirthermal/embed (and its extensions) should be based on the abstract class `AbstractThermalElement`. */
declare abstract class AbstractThermalElement extends LitElement {
  private _UUID?;
  get UUID(): string;
  getUUID(msg: string): string;
  log(...args: unknown[]): void;
  static shadowRootOptions: ShadowRootInit;
  protected _locale?: string;
  connectedCallback(): void;
  protected i(str: string): unknown;
  /** Returns a translated string */
  t(key: keyof typeof T): string;
}
//#endregion
//#region src/hierarchy/consumers/AbstractManagerConsumer.d.ts
declare abstract class AbstractManagerConsumer extends AbstractThermalElement {
  manager: ThermalManager;
}
//#endregion
//#region src/hierarchy/consumers/AbstractRegistryConsumer.d.ts
declare abstract class AbstractRegistryConsumer extends AbstractManagerConsumer {
  registry: ThermalRegistry;
}
//#endregion
//#region src/hierarchy/consumers/AbstractGroupConsumer.d.ts
declare abstract class AbstractGroupConsumer extends AbstractRegistryConsumer {
  group: ThermalGroup;
}
//#endregion
//#region src/hierarchy/abstraction/AbstractFileProvider.d.ts
declare abstract class AbstractFileProvider extends AbstractGroupConsumer {
  file?: Instance;
  protected failure?: ThermalFileFailure;
  loading: boolean;
  protected ready: boolean;
  protected duration?: DurationContext;
  protected currentFrame?: CurrentFrameContext;
  protected cursor: FileCursorContext;
  protected cursorSetter: (percent: number | undefined) => void;
  ms: number;
  speed?: PlaybackSpeeds;
  recording: boolean;
  playing: boolean;
  protected mayStop: boolean;
  /** List of all analyses taken from the `Instance.analysis.layers.all` */
  private analyses;
  analysis1?: string;
  analysis2?: string;
  analysis3?: string;
  analysis4?: string;
  analysis5?: string;
  analysis6?: string;
  analysis7?: string;
  /** Actions taken when a file starts loading */
  readonly onLoadingStart: CallbacksManager<() => void>;
  /** Actions taken when a file is loaded successfully */
  readonly onSuccess: CallbacksManager<(instance: Instance) => void>;
  /** Actions taken when loading ends with error */
  readonly onFailure: CallbacksManager<(error: ThermalFileFailure) => void>;
  autoHighlight: boolean;
  protected highlight?: ThermalRangeOrUndefined;
  protected highlightSetter?: (highlight: ThermalRangeOrUndefined) => void;
  updated(_changedProperties: PropertyValues<AbstractFileProvider>): void;
  attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
  readonly onInstanceCreated: CallbacksManager<(instance: Instance) => void>;
  /** Register instance callback listeners */
  recieveInstance(instance: Instance): void;
  removeInstance(instance: Instance): void;
  protected playCallback?: () => void;
  protected stopCallback?: () => void;
  protected currentFrameChangeCallback?: (frame: ParsedTimelineFrame) => void;
  protected playbackSpeedCallback?: (value: PlaybackSpeeds) => void;
  protected recordingCallback?: (value: boolean) => void;
  protected mayStopCallback?: (value: boolean) => void;
  protected analysisCallback?: (value: AbstractAnalysis[]) => void;
  deleteFile(): void;
  /**
   * Initialise slots & their listeners
   */
  protected initAnalysesSync(instance: Instance): void;
  protected handleAnalysisUpdate(index: SlotNumber, _changedProperties: PropertyValues<AbstractFileProvider>): void;
  protected createInitialAnalysis(instance: Instance, index: number, value?: string): void;
  protected render(): unknown;
}
//#endregion
//#region src/hierarchy/providers/context/FileContexts.d.ts
/** A crucial context exposing the `Instance` object from `AbstractFileProvider` to `AbstractFileConsumers`. */
declare const fileContext: {
  __context__: Instance | undefined;
};
declare const fileMsContext: {
  __context__: number;
};
type FileCursorContext = undefined | {
  absolute: number;
  ms: number;
  percentage: number;
};
type CurrentFrameContext = {
  index: number;
  ms: number;
  time: string;
  percentage: number;
  absolute: number;
};
declare const fileCurrentFrameContext: {
  __context__: CurrentFrameContext | undefined;
};
type DurationContext = {
  ms: number;
  time: string;
};
declare const filePlayingContext: {
  __context__: boolean;
};
//#endregion
//#region src/hierarchy/providers/context/GroupContext.d.ts
declare const groupContext: {
  __context__: ThermalGroup;
};
//#endregion
//#region src/hierarchy/providers/context/RegistryContext.d.ts
declare const registryContext: {
  __context__: ThermalRegistry;
};
declare const registryOpacityContext: {
  __context__: number;
};
declare const registryRangeFromContext: {
  __context__: number | undefined;
};
declare const registryRangeToContext: {
  __context__: number | undefined;
};
declare const registryLoadingContext: {
  __context__: boolean;
};
declare const registryMinContext: {
  __context__: number | undefined;
};
declare const registryMaxContext: {
  __context__: number | undefined;
};
/**
 * Highlight is an optional range of temperatures highlighted graphically on the thermal scale. It is used to indicate for example:
 * - what is the range of a file within min/max of the entire group
 * - what is the range of an analysis within the min/max of a file
 * - what is the min/max of a group of files within multiple groups of files
 *
 * This context is exposed by a registry provider. It need to be consumed manually.
 */
declare const registryHighlightContext: {
  __context__: ThermalRangeOrUndefined;
};
/**
 * Highlight setter needs to be used in order to set/unset a temperature range on the thermal scale.
 */
declare const setRegistryHighlightContext: {
  __context__: (value: ThermalRangeOrUndefined) => void;
};
//#endregion
//#region src/hierarchy/providers/context/ManagerContext.d.ts
declare const managerContext: {
  __context__: ThermalManager;
};
type ManagerPaletteContext = {
  key: AvailableThermalPalette;
  data: ThermalPaletteType;
};
declare const managerSmoothContext: {
  __context__: boolean;
};
declare const languageContext: {
  __context__: string;
};
declare const toolContext: {
  __context__: ThermalTool;
};
//#endregion
//#region src/ui/App.d.ts
declare class ThermalAppElement extends AbstractThermalElement {
  language: string;
  private _overflowCount;
  private _overflowOpen;
  preElements: Array<HTMLElement>;
  contentElements: Array<HTMLElement>;
  fullscreen: string;
  showfullscreen: boolean;
  dark: boolean;
  author?: string;
  recorded?: string;
  license?: string;
  label?: string;
  labelIcon?: string;
  labelIconStyle?: string;
  labelTooltip?: string;
  labelVariant: string;
  onlabel?: () => void;
  chromiumwarning: boolean;
  protected headerRef: Ref<HTMLDivElement>;
  protected contentRef: Ref<HTMLDivElement>;
  protected barItemsRef: Ref<HTMLDivElement>;
  protected observer: ResizeObserver;
  private _overflowObserver;
  private _rafId;
  private _handleFullscreenChange;
  connectedCallback(): void;
  disconnectedCallback(): void;
  private _toggleOverflow;
  private _scheduleOverflowUpdate;
  private _doOverflowUpdate;
  toggleFullscreen(): void;
  protected update(changedProperties: PropertyValues): void;
  attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
  static styles: lit.CSSResult;
  private renderLabel;
  private renderCreditField;
  private renderCredits;
  private static readonly languages;
  private renderLanguageSwitcher;
  private renderFullscreenButton;
  private renderOverflowToggle;
  protected render(): unknown;
}
//#endregion
//#region src/ui/Bar.d.ts
declare class ThermalBarElement extends LitElement {
  static styles: lit.CSSResult;
  protected collapsed: boolean;
  protected lastContentWidth: number;
  protected drawerRef: Ref<HTMLDivElement>;
  protected contentRef: Ref<HTMLDivElement>;
  protected rulerContentRef: Ref<HTMLDivElement>;
  protected observer: ResizeObserver;
  connectedCallback(): void;
  protected firstUpdated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void;
  private hydrateObserver;
  disconnectedCallback(): void;
  protected render(): unknown;
}
//#endregion
//#region src/ui/Btn.d.ts
type BtnVariants = "primary" | "foreground" | "background" | "default" | "breadcrumb";
type BtnSizes = "sm" | "md" | "lg" | "xl";
declare class ThermalBtnElement extends AbstractThermalElement {
  tooltipPlacement: Placement;
  pre?: string;
  variant?: BtnVariants;
  size?: BtnSizes;
  icon?: string;
  iconStyle: string;
  disabled?: boolean;
  interactive?: boolean;
  plain?: boolean;
  tooltip?: string;
  tabindex: number;
  badge?: string;
  align: string;
  private tooltipElement?;
  private arrowElement?;
  private cleanupAutoUpdate?;
  private highlightTimeout?;
  protected firstUpdated(): void;
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
  private removeTooltip;
  private showTooltip;
  private hideTooltip;
  private handleClick;
  private handleKeydown;
  disconnectedCallback(): void;
  static styles: lit.CSSResult;
  private renderBadge;
  /**
   * Apply a temporary highlight animation to the button. The animation
   * will pulse the element with a gentle scale up/down effect for the
   * specified duration (milliseconds).
   */
  highlight(durationMs: number): void;
  protected render(): unknown;
}
//#endregion
//#region src/ui/Dialog.d.ts
declare class ThermalDialogElement extends LitElement {
  static shadowRootOptions: ShadowRootInit;
  button: string;
  protected dialogRef: Ref<HTMLDialogElement>;
  protected closeButtonRef: Ref<HTMLButtonElement>;
  protected invokerRef: Ref<HTMLSlotElement>;
  isFullscreen: boolean;
  label?: string;
  beforeClose?: () => Promise<boolean>;
  private _open;
  get open(): boolean;
  onCloseEveryTime?: () => void;
  setClose(): void;
  setOpen(): void;
  attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
  connectedCallback(): void;
  static styles: lit.CSSResult;
  render(): lit.TemplateResult<1>;
  closeFromTheOutside(): Promise<void>;
}
//#endregion
//#region src/ui/Dropdown.d.ts
declare class ThermalDropdownElement extends AbstractThermalElement {
  static shadowRootOptions: ShadowRootInit;
  _options: Array<HTMLElement>;
  protected dropdownRef: Ref<HTMLDialogElement>;
  protected invokerRef: Ref<HTMLDialogElement>;
  protected optionsRef: Ref<HTMLButtonElement>;
  isOpen: string;
  interactive: "on" | "off";
  variant?: BtnVariants;
  size?: BtnSizes;
  plain?: boolean;
  tooltip?: string;
  setOpen(): void;
  setClose(): void;
  toggle(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  private placeOptions;
  protected updated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void;
  protected firstUpdated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void;
  attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
  static styles: lit.CSSResult;
  render(): lit.TemplateResult<1>;
}
//#endregion
//#region src/ui/Dropin.d.ts
declare class ThermalDropinElement extends AbstractThermalElement {
  prompt?: string;
  static styles?: CSSResultGroup | undefined;
  protected render(): unknown;
}
//#endregion
//#region src/ui/Expandable.d.ts
declare class ThermalExpandableElement extends AbstractThermalElement {
  label?: string;
  closeIcon: boolean;
  variant?: BtnVariants;
  variantExpanded?: BtnVariants;
  size?: BtnSizes;
  icon?: string;
  iconStyle: string;
  disabled?: boolean;
  interactive?: boolean;
  plain?: boolean;
  tooltip?: string;
  expanded?: boolean;
  static styles?: CSSResultGroup | undefined;
  protected render(): unknown;
}
//#endregion
//#region src/ui/Field.d.ts
declare class ThermalFieldElement extends LitElement {
  label: string;
  hint?: string;
  static styles: lit.CSSResult;
  protected render(): unknown;
}
//#endregion
//#region src/ui/Icon.d.ts
declare class ThermalIconElement extends AbstractThermalElement {
  icon?: string;
  variant?: string;
  classes?: string;
  css?: string;
  protected element?: string;
  connectedCallback(): void;
  protected updated(_changedProperties: PropertyValues): void;
  protected updateIcon(): void;
  protected render(): unknown;
}
//#endregion
//#region src/ui/Loading.d.ts
declare class ThermalLoadingElement extends AbstractThermalElement {
  protected loaded: boolean;
  loading: boolean;
  icon?: string;
  iconStyle?: string;
  message?: string;
  bordercolor: string;
  bgcolor: string;
  textcolor: string;
  protected updated(_changedProperties: PropertyValues): void;
  static styles?: CSSResultGroup | undefined;
  protected render(): unknown;
}
//#endregion
//#region src/ui/Radio.d.ts
declare class ThermalRadioElement extends AbstractThermalElement {
  type: "radio" | "checkbox";
  checked: boolean;
  onChange?: (checked: boolean) => void;
  protected handleChange(event: Event): void;
  protected updated(changedProperties: Map<string, any>): void;
  protected handleClick(event: Event): void;
  connectedCallback(): void;
  static styles: lit.CSSResult;
  render(): lit.TemplateResult<1>;
}
//#endregion
//#region src/ui/Slot.d.ts
declare class ThermalSlotElement extends AbstractThermalElement {
  label?: string;
  private _slottedElements;
  protected get slottedElements(): Element[];
  private handleSlotChange;
  static styles: lit.CSSResult;
  protected render(): unknown;
}
//#endregion
//#region src/ui/Spinner.d.ts
declare class ThermalSpinnerElement extends AbstractThermalElement {
  message?: string;
  color: string;
  static shadowRootOptions: ShadowRootInit;
  static styles: lit.CSSResult;
  protected render(): lit.TemplateResult<1>;
}
//#endregion
//#region src/ui/Tip.d.ts
declare class ThermalTipElement extends AbstractThermalElement {
  icon: string;
  iconStyle: string;
  static styles: lit.CSSResult;
  protected render(): unknown;
}
//#endregion
//#region src/hierarchy/abstraction/AbstractGroupProvider.d.ts
declare abstract class AbstractGroupProvider extends AbstractRegistryConsumer {
  protected UUIDGroupListeners: string;
  slug: string;
  group: ThermalGroup;
  autoclear: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  protected render(): unknown;
}
//#endregion
//#region src/hierarchy/abstraction/AbstractManagerProvider.d.ts
declare abstract class AbstractManagerProvider extends AbstractThermalElement {
  protected UUIDManagerListeners: string;
  manager: ThermalManager;
  slug: string;
  palette: ManagerPaletteContext;
  smooth: boolean;
  graphSmooth: boolean;
  autoclear: boolean;
  tool: ThermalTool;
  tools: ThermalManager["tool"]["tools"];
  connectedCallback(): void;
  disconnectedCallback(): void;
  protected firstUpdated(_changedProperties: PropertyValues): void;
  attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
  private sanitizeStringPalette;
  private setPalette;
  protected render(): unknown;
}
//#endregion
//#region src/hierarchy/abstraction/AbstractRegistryProvider.d.ts
declare abstract class AbstractRegistryProvider extends AbstractManagerConsumer {
  protected UUIDRegistryListeners: string;
  slug: string;
  registry: ThermalRegistry;
  opacity: number;
  protected min?: number;
  protected max?: number;
  from?: number;
  to?: number;
  loading: boolean;
  autoclear: boolean;
  forceNew: boolean;
  protected highlight: ThermalRangeOrUndefined;
  setHighlight: (value: ThermalRangeOrUndefined) => void;
  protected createRegistry(slug: string): ThermalRegistry;
  protected hydrateRegistry(registry: ThermalRegistry): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  protected firstUpdated(_changedProperties: PropertyValues): void;
  protected updated(_changedProperties: PropertyValues): void;
  protected render(): unknown;
}
//#endregion
//#region src/hierarchy/consumers/AbstractFileConsumer.d.ts
declare abstract class AbstractFileConsumer extends AbstractGroupConsumer {
  protected parentFileProviderElement?: AbstractFileProvider;
  getUUID(): string;
  protected get internalCallbackUUID(): string;
  protected loading: boolean;
  protected file?: Instance;
  protected failure?: ThermalFileFailure;
  protected recording: boolean;
  connectedCallback(): void;
  protected hookCallbacks(): void;
  abstract onInstanceCreated(instance: Instance): void;
  abstract onFailure(error: ThermalFileFailure): void;
}
//#endregion
//#region src/hierarchy/providers/FileCopy.d.ts
declare class FileCopyElement extends AbstractFileProvider {
  protected providedSelf: FileCopyElement;
  private originalFile?;
  ms: number;
  speed?: PlaybackSpeeds;
  recording: boolean;
  playing: boolean;
  analysis1?: string;
  analysis2?: string;
  analysis3?: string;
  analysis4?: string;
  analysis5?: string;
  analysis6?: string;
  analysis7?: string;
  protected firstUpdated(_changedProperties: PropertyValues): void;
  private processFileCopy;
  private syncSlot;
  copyAnalysesFromParent(): void;
  clearAnalyses(): void;
  static styles?: CSSResultGroup | undefined;
  protected render(): unknown;
}
//#endregion
//#region src/hierarchy/providers/FileMirror.d.ts
/** @deprecated Investigate why is this here. */
declare class FileMirrorElement extends AbstractFileProvider {
  protected providedSelf: FileMirrorElement;
  file?: Instance;
  batch?: boolean;
  thermal: string;
  visible?: string;
  analysis1?: string;
  analysis2?: string;
  analysis3?: string;
  analysis4?: string;
  analysis5?: string;
  analysis6?: string;
  analysis7?: string;
  updated(_changedProperties: PropertyValues<FileMirrorElement>): void;
}
//#endregion
//#region src/hierarchy/providers/FileProvider.d.ts
declare class FileProviderElement extends AbstractFileProvider {
  keepinitialhistogram: boolean;
  ms: number;
  speed?: PlaybackSpeeds;
  protected providedSelf: FileProviderElement;
  recording: boolean;
  playing: boolean;
  batch: boolean;
  thermal: string;
  visible?: string;
  analysis1?: string;
  analysis2?: string;
  analysis3?: string;
  analysis4?: string;
  analysis5?: string;
  analysis6?: string;
  analysis7?: string;
  /**
   * Load the file and call all necessary callbacks
   */
  load(): Promise<Instance | _labirthermal_core0.Batch | _labirthermal_core0.AbstractFileResult>;
  /**
   * @deprecated Use the batch loader instead.
   */
  loadSync(): Promise<Instance | _labirthermal_core0.AbstractFileResult>;
  /**
   * Register new load request to the registry batch loader
   *
   */
  loadAsync(): _labirthermal_core0.Batch;
  redraw(): Promise<void>;
  /**
   *
   * @param result A crucial method called every time a loading ends
   */
  private asyncLoadCallback;
  protected firstUpdated(_changedProperties: PropertyValues): void;
  updated(_changedProperties: PropertyValues<FileProviderElement>): void;
}
//#endregion
//#region src/hierarchy/providers/GroupProvider.d.ts
declare class GroupProviderElement extends AbstractGroupProvider {
  slug: string;
  group: ThermalGroup;
  autoclear: boolean;
  disconnectedCallback(): void;
}
//#endregion
//#region src/hierarchy/providers/ManagerProvider.d.ts
declare class ManagerProviderElement extends AbstractManagerProvider {
  protected UUIDManagerListeners: string;
  manager: ThermalManager;
  slug: string;
  palette: ManagerPaletteContext;
  smooth: boolean;
  graphSmooth: boolean;
  autoclear: boolean;
  tool: ThermalTool;
  tools: ThermalManager["tool"]["tools"];
}
//#endregion
//#region src/hierarchy/providers/RegistryProvider.d.ts
declare class RegistryProviderElement extends AbstractRegistryProvider {
  slug: string;
  registry: ThermalRegistry;
  opacity: number;
  protected min?: number;
  protected max?: number;
  from?: number;
  to?: number;
  loading: boolean;
  autoclear: boolean;
  updated(changedProperties: Map<string | number | symbol, unknown>): void;
}
//#endregion
//#region src/hierarchy/providers/context/pngExportContext.d.ts
type ContextSetter<T> = (value: T) => void;
interface IWithPngExportContext {
  pngWidth: number;
  pngFs: number;
  pngAnalyses: boolean;
  pngExportScale: boolean;
  pngExportLicense: boolean;
  pngExportFileName: boolean;
  pngExportFileDate: boolean;
  pngExportColumns: number;
  pngExportGroupName: boolean;
  pngWidthSetter: ContextSetter<number>;
  pngFsSetter: ContextSetter<number>;
  pngExportAnalysesSetter: ContextSetter<boolean>;
  pngExportScaleSetter: ContextSetter<boolean>;
  pngExportLicenseSetter: ContextSetter<boolean>;
  pngExportFileNameSetter: ContextSetter<boolean>;
  pngExportFileDateSetter: ContextSetter<boolean>;
  pngExportColumnsSetter: ContextSetter<number>;
  pngExportGroupNameSetter: ContextSetter<boolean>;
}
//#endregion
//#region src/controls/manager/ManagerExportPanel.d.ts
declare class ManagerExportPanel extends AbstractThermalElement implements IWithPngExportContext {
  pngWidth: number;
  pngWidthSetter: ContextSetter<number>;
  pngFs: number;
  pngFsSetter: ContextSetter<number>;
  pngAnalyses: boolean;
  pngExportAnalysesSetter: ContextSetter<boolean>;
  pngExportScale: boolean;
  pngExportScaleSetter: ContextSetter<boolean>;
  pngExportLicense: boolean;
  pngExportLicenseSetter: ContextSetter<boolean>;
  pngExportFileName: boolean;
  pngExportFileNameSetter: ContextSetter<boolean>;
  pngExportFileDate: boolean;
  pngExportFileDateSetter: ContextSetter<boolean>;
  pngExportColumns: number;
  pngExportColumnsSetter: ContextSetter<number>;
  pngExportGroupName: boolean;
  pngExportGroupNameSetter: ContextSetter<boolean>;
  protected renderRow(label: string, content: ReturnType<typeof html>, hint?: ReturnType<typeof html> | string): lit.TemplateResult<1>;
  protected renderGroup(label: string, content: ReturnType<typeof html>): lit.TemplateResult<1>;
  protected formatTip(value?: ReturnType<typeof html> | string): lit.TemplateResult<1> | "";
  protected renderCheckbox(key: string, label: string, value: boolean, onChange: (value: boolean) => void): lit.TemplateResult<1>;
  protected renderSlider(key: string, label: string, value: number, unit: string, min: number, max: number, step: number, onChange: (value: number) => void, hint?: ReturnType<typeof html> | string): lit.TemplateResult<1>;
  static styles?: CSSResultGroup | undefined;
  protected updated(_changedProperties: PropertyValues): void;
  protected render(): unknown;
}
//#endregion
//#region src/controls/manager/ManagerGraphSmoothSwitch.d.ts
declare class ManagerGraphSmoothSwitch extends AbstractManagerConsumer {
  smooth: boolean;
  static styles: lit.CSSResult;
  protected render(): unknown;
}
//#endregion
//#region src/controls/manager/ManagerImageSmoothSwitch.d.ts
declare class ManagerImageSmoothSwitch extends AbstractManagerConsumer {
  smooth: boolean;
  static styles: lit.CSSResult;
  protected render(): unknown;
}
//#endregion
//#region src/controls/manager/AbstractPaletteSwitch.d.ts
declare abstract class AbstractPaletteSwitch extends AbstractManagerConsumer {
  protected advancedPalettesContext: boolean;
  advancedPalettesProperty?: boolean;
  protected palettes: ThermalPaletteType[];
  protected value: ManagerPaletteContext;
  protected updated(_changedProperties: PropertyValues): void;
  /** Handle user input events */
  protected onSelect(palette: AvailableThermalPalette): void;
}
//#endregion
//#region src/controls/manager/ManagerPaletteButtons.d.ts
declare class ManagerPaletteButtons extends AbstractPaletteSwitch {
  static styles: lit.CSSResult;
  private paletteTemplate;
  protected render(): unknown;
}
//#endregion
//#region src/controls/manager/ManagerPaletteDropdown.d.ts
declare class ManagerPaletteDropdown extends AbstractPaletteSwitch {
  static styles: lit.CSSResult;
  protected paletteTemplate(palette: ThermalPaletteType, className?: string): lit.TemplateResult<1>;
  protected render(): unknown;
}
//#endregion
//#region src/controls/manager/ManagerToolsBar.d.ts
/**
 * A standard toolbar that is either horizontal or vertical.
 */
declare class ManagerToolBar extends AbstractManagerConsumer {
  protected value: ThermalTool;
  protected tools: ThermalManager["tool"]["tools"];
  /** Handle user input events */
  protected onSelect(tool: ThermalTool): void;
  static styles: lit.CSSResult;
  protected renderTool(key: string, tool: ThermalTool): unknown;
  protected render(): unknown;
}
//#endregion
export { AbstractFileConsumer, AbstractFileProvider, AbstractGroupConsumer, AbstractGroupProvider, AbstractManagerConsumer, AbstractManagerProvider, AbstractRegistryConsumer, AbstractRegistryProvider, AbstractThermalElement, type BtnSizes, type BtnVariants, FileCopyElement, FileMirrorElement, FileProviderElement, GroupProviderElement, ManagerExportPanel, ManagerGraphSmoothSwitch, ManagerImageSmoothSwitch, ManagerPaletteButtons, ManagerPaletteDropdown, ManagerProviderElement, ManagerToolBar, RegistryProviderElement, ThermalAppElement, ThermalBarElement, ThermalBtnElement, ThermalDialogElement, ThermalDropdownElement, ThermalDropinElement, ThermalExpandableElement, ThermalFieldElement, ThermalIconElement, ThermalLoadingElement, ThermalRadioElement, ThermalSlotElement, ThermalSpinnerElement, ThermalTipElement, booleanConverter, durationConverter, fileContext, fileCurrentFrameContext, fileMsContext, filePlayingContext, groupContext, icons, languageContext, managerContext, managerSmoothContext, registryContext, registryHighlightContext, registryLoadingContext, registryMaxContext, registryMinContext, registryOpacityContext, registryRangeFromContext, registryRangeToContext, setRegistryHighlightContext, toolContext };
//# sourceMappingURL=index.export.d.mts.map