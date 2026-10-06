Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let lit = require("lit");
let _lit_context = require("@lit/context");
let i18next = require("i18next");
i18next = __toESM(i18next);
let lit_directives_unsafe_svg_js = require("lit/directives/unsafe-svg.js");
let uuid = require("uuid");
let lit_decorators_js = require("lit/decorators.js");
let lit_directives_cache_js = require("lit/directives/cache.js");
let lit_directives_if_defined_js = require("lit/directives/if-defined.js");
let lit_directives_map_js = require("lit/directives/map.js");
let lit_directives_ref_js = require("lit/directives/ref.js");
let _floating_ui_dom = require("@floating-ui/dom");
let lit_directives_class_map_js = require("lit/directives/class-map.js");
let _labirthermal_core = require("@labirthermal/core");
let lit_directives_style_map_js = require("lit/directives/style-map.js");
require("@google-web-components/google-chart");
let public_ip = require("public-ip");
let date_fns = require("date-fns");

//#region src/utils/converters/booleanConverter.ts
const booleanConverter = (emptyValue) => {
	const fromAttribute = (value) => {
		if (value === void 0 || value === null || value?.trim().length === 0) return emptyValue;
		return value === "true";
	};
	const toAttribute = (value) => {
		if (value === true) return "true";
		return "false";
	};
	return {
		fromAttribute,
		toAttribute
	};
};

//#endregion
//#region src/utils/converters/durationConverter.ts
/** Converts a duration property indicated as string to millis and back */
const durationConverter = {
	fromAttribute: (value) => {
		if (value) {
			const parts = value.split(":").map(Number);
			if (parts.some(isNaN)) return void 0;
			if (parts.length === 3) {
				const [minutes, seconds, milliseconds] = parts;
				return minutes * 6e4 + seconds * 1e3 + milliseconds;
			} else if (parts.length === 4) {
				const [hours, minutes, seconds, milliseconds] = parts;
				return hours * 36e5 + minutes * 6e4 + seconds * 1e3 + milliseconds;
			}
		}
	},
	toAttribute: (value) => {
		if (value !== void 0) {
			const hours = Math.floor(value / 36e5);
			const minutes = Math.floor(value % 36e5 / 6e4);
			const seconds = Math.floor(value % 6e4 / 1e3);
			const milliseconds = value % 1e3;
			const formattedSeconds = String(seconds).padStart(2, "0");
			const formattedMilliseconds = String(milliseconds).padStart(3, "0");
			if (hours > 0) return `${hours}:${minutes}:${formattedSeconds}:${formattedMilliseconds}`;
			return `${minutes}:${formattedSeconds}:${formattedMilliseconds}`;
		}
	}
};

//#endregion
//#region src/utils/icons.ts
/**
* Definice SVG ikon s jejich variantami
* Každá ikona může mít více variant (outline, solid, mini, micro)
* Použití: přidejte novou ikonu s jejími variantami zde
*/
const svg = {
	lock: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clip-rule="evenodd" />
</svg>
` },
	document: { outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>` },
	eye: { solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
        </svg>` },
	play: { solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
        </svg>` },
	pause: { solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
        </svg>` },
	info: {
		mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />
        </svg>`,
		solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
        </svg>`,
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>`
	},
	settings: {
		solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
</svg>`,
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
`
	},
	back: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clip-rule="evenodd" />
</svg>` },
	share: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z" />
        </svg>`,
		mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" />
        </svg>`
	},
	folder: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 9.62 4H12.5A1.5 1.5 0 0 1 14 5.5v1.401a2.986 2.986 0 0 0-1.5-.401h-9c-.546 0-1.059.146-1.5.401V3.5ZM2 9.5v3A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8h-9A1.5 1.5 0 0 0 2 9.5Z" />
        </svg>`
	},
	wifi: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M14.188 7.063a8.75 8.75 0 0 0-12.374 0 .75.75 0 0 1-1.061-1.06c4.003-4.004 10.493-4.004 14.496 0a.75.75 0 1 1-1.061 1.06Zm-2.121 2.121a5.75 5.75 0 0 0-8.132 0 .75.75 0 0 1-1.06-1.06 7.25 7.25 0 0 1 10.252 0 .75.75 0 0 1-1.06 1.06Zm-2.122 2.122a2.75 2.75 0 0 0-3.889 0 .75.75 0 1 1-1.06-1.061 4.25 4.25 0 0 1 6.01 0 .75.75 0 0 1-1.06 1.06Zm-2.828 1.06a1.25 1.25 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.355.355a.75.75 0 0 1-1.06 0l-.354-.354a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>` },
	user: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
        </svg>` },
	image: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd" />
        </svg>`
	},
	upwards: { outline: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M20.24 20.249a.75.75 0 0 0-.75-.75H8.989V5.56l2.47 2.47a.75.75 0 0 0 1.06-1.061l-3.75-3.75a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l2.47-2.469V20.25c0 .414.335.75.75.75h11.25a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd" />
        </svg>` },
	copy: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>`,
		mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />
            <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" />
        </svg>`
	},
	right: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
        </svg>`
	},
	trash: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd" />
        </svg>` },
	addfolder: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path fill-rule="evenodd" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H9.621a1.5 1.5 0 0 1-1.06-.44L7.439 2.44A1.5 1.5 0 0 0 6.38 2H3.5ZM8 6a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 8 6Z" clip-rule="evenodd" />
        </svg>` },
	upload: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z" />
            <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
        </svg>` },
	close: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
        </svg>`
	},
	edit: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
        </svg>` },
	comment: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Zm3-3.49a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25ZM4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd" />
        </svg>` },
	grid: {
		solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clip-rule="evenodd" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2h-2ZM3.5 9A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9h-2ZM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2ZM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2Z" />
        </svg>`
	},
	list: {
		solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M3 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM4 12.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>`
	},
	check: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
        </svg>` },
	"check-circle": { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clip-rule="evenodd" />
</svg>` },
	"circle-dots": { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
</svg>` },
	save: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3h11l3 3v13H5V3Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 3v4h8V3M7 10h10M7 12h8" />
            <circle cx="17" cy="15" r="1.5" stroke="currentColor" fill="none" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="size-4">
            <path d="M2 2h9l3 3v8H2V2Zm2 1v3h6V3H4Zm0 4h8v1H4V7Zm0 2h6v1H4V9Zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>`
	},
	restore: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M6.25 12.5A2.75 2.75 0 0 0 9 9.75V4.56L6.78 6.78a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L10.5 4.56v5.19a4.25 4.25 0 0 1-8.5 0v-1a.75.75 0 0 1 1.5 0v1a2.75 2.75 0 0 0 2.75 2.75Z" clipRule="evenodd" />
</svg>`
	},
	unlink: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0l4.46 4.46c.128-.178.272-.349.432-.508l3-3a4 4 0 0 1 5.657 5.656l-1.225 1.225a.75.75 0 1 1-1.06-1.06l1.224-1.225a2.5 2.5 0 0 0-3.536-3.536l-3 3a2.504 2.504 0 0 0-.406.533l2.59 2.59a2.49 2.49 0 0 0-.79-1.254.75.75 0 1 1 .977-1.138 3.997 3.997 0 0 1 1.306 3.886l4.871 4.87a.75.75 0 1 1-1.06 1.061l-5.177-5.177-.006-.005-4.134-4.134a.65.65 0 0 1-.005-.006L2.22 3.28a.75.75 0 0 1 0-1.06Zm3.237 7.727a.75.75 0 0 1 0 1.06l-1.225 1.225a2.5 2.5 0 0 0 3.536 3.536l1.879-1.879a.75.75 0 1 1 1.06 1.06L8.83 16.83a4 4 0 0 1-5.657-5.657l1.224-1.225a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
        </svg>`
	},
	link: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
        </svg>`
	},
	zoom: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />
            <path fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />
        </svg>`
	},
	adjustment: {
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
        </svg>`,
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>`
	},
	range: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <g>
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="1.5"/>
                <line x1="5" y1="9" x2="5" y2="15" stroke="currentColor" stroke-width="2"/>
                <line x1="19" y1="9" x2="19" y2="15" stroke="currentColor" stroke-width="2"/>
            </g>
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
            <g>
                <line x1="3" y1="8" x2="13" y2="8" stroke="currentColor" stroke-width="1"/>
                <line x1="3" y1="6" x2="3" y2="10" stroke="currentColor" stroke-width="1.5"/>
                <line x1="13" y1="6" x2="13" y2="10" stroke="currentColor" stroke-width="1.5"/>
            </g>
        </svg>`
	},
	bigger: { mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path d="m13.28 7.78 3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 0 0 1.06 1.06ZM2 17.25v-4.5a.75.75 0 0 1 1.5 0v2.69l3.22-3.22a.75.75 0 0 1 1.06 1.06L4.56 16.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.747.747 0 0 1-.75-.75ZM12.22 13.28l3.22 3.22h-2.69a.75.75 0 0 0 0 1.5h4.5a.747.747 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69l-3.22-3.22a.75.75 0 1 0-1.06 1.06ZM3.5 4.56l3.22 3.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0V4.56Z" />
</svg>
` },
	smaller: { mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L5.44 6.5H2.75a.75.75 0 0 0 0 1.5h4.5A.75.75 0 0 0 8 7.25v-4.5a.75.75 0 0 0-1.5 0v2.69L3.28 2.22ZM13.5 2.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-2.69l3.22-3.22a.75.75 0 0 0-1.06-1.06L13.5 5.44V2.75ZM3.28 17.78l3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06ZM13.5 14.56l3.22 3.22a.75.75 0 1 0 1.06-1.06l-3.22-3.22h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-2.69Z" />
</svg>` },
	ellipsis: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
</svg>` },
	download: {
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
  <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
</svg>`,
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>`
	},
	clipboard: { outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>` },
	bulb: { outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>` },
	reload: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z" clip-rule="evenodd" />
</svg>` },
	warning: { outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>` },
	move: { mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z" clip-rule="evenodd" />
</svg>` }
};
/**
* Základní funkce pro vykreslení ikony
* @param name - název ikony (např. 'folder')
* @param variant - varianta ikony (např. 'outline')
* @param className - CSS třídy pro přidání
* @param styles - inline styly
*/
const icon = (name, variant, className, styles) => {
	const iconSvg = svg[name][variant];
	if (!iconSvg) {
		console.warn(`Icon variant "${String(variant)}" not found for icon "${String(name)}"`);
		return lit.html``;
	}
	let modifiedSvg = iconSvg;
	if (className || styles) {
		if (modifiedSvg.includes("class=\"")) modifiedSvg = modifiedSvg.replace(/class="([^"]*)"/, `class="$1 ${className || ""}"`);
		else modifiedSvg = modifiedSvg.replace(/<svg([^>]*)>/, `<svg$1 class="${className || ""}">`);
		if (styles) if (modifiedSvg.includes("style=\"")) modifiedSvg = modifiedSvg.replace(/style="([^"]*)"/, `style="$1; ${styles}"`);
		else modifiedSvg = modifiedSvg.replace(/<svg([^>]*)>/, `<svg$1 style="${styles}">`);
	}
	return modifiedSvg;
};
/**
* Automatické generování objektu ikon z definice svg
* Vytváří strukturu: icons.nazevIkony.varianta(className?, styles?)
*/
const createIcons = () => {
	const result = {};
	for (const iconName in svg) {
		const iconKey = iconName;
		result[iconKey] = {};
		const iconVariants = svg[iconKey];
		for (const variant in iconVariants) result[iconKey][variant] = (className, styles) => {
			return icon(iconName, variant, className, styles);
		};
	}
	return result;
};
/**
* Exportovaný objekt ikon s typovou bezpečností
* Použití: icons.folder.outline("my-class", "color: red")
*/
const icons = createIcons();

//#endregion
//#region src/translations/localeContext.ts
const localeContext = (0, _lit_context.createContext)("localeContext");

//#endregion
//#region src/translations/Languages.ts
/**
* Keys of all translation keys.
* 
* In the comment is the englis version. Use only the keys in any t() function.
*/
let T = /* @__PURE__ */ function(T) {
	T["moreoptions"] = "moreoptions";
	T["loading"] = "loading";
	T["config"] = "config";
	T["temperature"] = "temperature";
	T["upload"] = "upload";
	T["uploadafile"] = "uploadafile";
	T["selectfile"] = "selectfile";
	T["addfiles"] = "addfiles";
	T["clear"] = "clear";
	T["dragorselectfile"] = "dragorselectfile";
	T["share"] = "share";
	T["fileloadingerror"] = "fileloadingerror";
	T["embedhint"] = "embedhint";
	T["embedlibrary"] = "embedlibrary";
	T["embedcomponent"] = "embedcomponent";
	T["copy"] = "copy";
	T["create"] = "create";
	T["remotefoldersbrowseraddfolderhint"] = "remotefoldersbrowseraddfolderhint";
	T["file"] = "file";
	T["layout_simple"] = "layout_simple";
	T["layout_advanced"] = "layout_advanced";
	T["layout_nogui"] = "layout_nogui";
	T["layout_lesson"] = "layout_lesson";
	/** Next */
	T["next"] = "next";
	/** Previous */
	T["prev"] = "prev";
	/** Back */
	T["back"] = "back";
	/** Close */
	T["close"] = "close";
	T["open"] = "open";
	T["detail"] = "detail";
	T["showeverything"] = "showeverything";
	T["palette"] = "palette";
	/** Description */
	T["description"] = "description";
	/** Author */
	T["author"] = "author";
	/** License */
	T["license"] = "license";
	/** Recorded at */
	T["recordedat"] = "recordedat";
	/** Display settings */
	T["displaysettings"] = "displaysettings";
	/** File rendering */
	T["filerendering"] = "filerendering";
	/** Pixelated */
	T["pixelated"] = "pixelated";
	/** Smooth */
	T["smooth"] = "smooth";
	/** 'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are. */
	T["filerenderinghint"] = "filerenderinghint";
	/** Adjust time scale */
	T["adjusttimescale"] = "adjusttimescale";
	T["automaticrange"] = "automaticrange";
	T["fullrange"] = "fullrange";
	/** Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max). */
	T["adjusttimescalehint"] = "adjusttimescalehint";
	/** Select colour palette of thermal display. */
	T["colourpalettehint"] = "colourpalettehint";
	/** Palette {name} */
	T["palettename"] = "palettename";
	/** File info */
	T["fileinfo"] = "fileinfo";
	/** IR file name */
	T["thermalfilename"] = "thermalfilename";
	/** IR file URL */
	T["thermalfileurl"] = "thermalfileurl";
	/** Download the IR file */
	T["thermalfiledownload"] = "thermalfiledownload";
	/** Visible file name */
	T["visiblefilename"] = "visiblefilename";
	/** Visible file URL */
	T["visiblefileurl"] = "visiblefileurl";
	/** Download visible file */
	T["visiblefiledownload"] = "visiblefiledownload";
	T["togglevisibleimage"] = "togglevisibleimage";
	/** Time */
	T["time"] = "time";
	/** Duration */
	T["duration"] = "duration";
	/** Resolution */
	T["resolution"] = "resolution";
	/** Bytesize */
	T["bytesize"] = "bytesize";
	/** Minimal temperature */
	T["minimaltemperature"] = "minimaltemperature";
	/** Maximal temperature */
	T["maximaltemperature"] = "maximaltemperature";
	/** File type */
	T["filetype"] = "filetype";
	/** Type */
	T["type"] = "type";
	/** Supported devices */
	T["supporteddevices"] = "supporteddevices";
	T["numfiles"] = "numfiles";
	T["download"] = "download";
	T["downloadoriginalfiles"] = "downloadoriginalfiles";
	T["downloadoriginalfileshint"] = "downloadoriginalfileshint";
	T["downloadoriginalfile"] = "downloadoriginalfile";
	T["exportcurrentframeaspng"] = "exportcurrentframeaspng";
	T["convertentiresequencetovideo"] = "convertentiresequencetovideo";
	T["pngofindividualimages"] = "pngofindividualimages";
	T["pngofindividualimageshint"] = "pngofindividualimageshint";
	T["pngofentiregroup"] = "pngofentiregroup";
	T["pngofentiregrouphint"] = "pngofentiregrouphint";
	T["csvofanalysisdata"] = "csvofanalysisdata";
	T["csvofanalysisdatahint"] = "csvofanalysisdatahint";
	T["exportimagewidth"] = "exportimagewidth";
	T["exportimagefontsize"] = "exportimagefontsize";
	T["exportgroupname"] = "exportgroupname";
	T["exportfilenames"] = "exportfilenames";
	T["numberofcolumns"] = "numberofcolumns";
	T["exportdimensions"] = "exportdimensions";
	T["exportgroup"] = "exportgroup";
	T["thermalscale"] = "thermalscale";
	T["thermalrange"] = "thermalrange";
	T["filedate"] = "filedate";
	T["folder"] = "folder";
	T["folders"] = "folders";
	T["showingfolder"] = "showingfolder";
	T["showingfolders"] = "showingfolders";
	T["and"] = "and";
	T["or"] = "or";
	T["doyouwanttoadd"] = "doyouwanttoadd";
	T["youmayalsoadd"] = "youmayalsoadd";
	T["range"] = "range";
	T["info"] = "info";
	T["note"] = "note";
	T["group"] = "group";
	T["donotgroup"] = "donotgroup";
	T["groupby"] = "groupby";
	T["groupped"] = "groupped";
	T["bydays"] = "bydays";
	T["byhours"] = "byhours";
	T["byweeks"] = "byweeks";
	T["bymonths"] = "bymonths";
	T["byyears"] = "byyears";
	T["play"] = "play";
	T["pause"] = "pause";
	T["stop"] = "stop";
	T["date"] = "date";
	T["frame"] = "frame";
	T["playbackspeed"] = "playbackspeed";
	T["graphlines"] = "graphlines";
	T["straightlines"] = "straightlines";
	T["smoothlines"] = "smoothlines";
	T["graphlineshint"] = "graphlineshint";
	T["reload"] = "reload";
	T["analysis"] = "analysis";
	T["analyses"] = "analyses";
	T["avg"] = "avg";
	T["min"] = "min";
	T["max"] = "max";
	T["size"] = "size";
	T["edit"] = "edit";
	T["editsth"] = "editsth";
	T["remove"] = "remove";
	T["addpoint"] = "addpoint";
	T["addrectangle"] = "addrectangle";
	T["addellipsis"] = "addellipsis";
	T["analysishint"] = "analysishint";
	T["graph"] = "graph";
	T["graphhint1"] = "graphhint1";
	T["graphhint2"] = "graphhint2";
	T["rectangle"] = "rectangle";
	T["ellipsis"] = "ellipsis";
	T["point"] = "point";
	T["name"] = "name";
	T["color"] = "color";
	T["top"] = "top";
	T["left"] = "left";
	T["right"] = "right";
	T["bottom"] = "bottom";
	T["columns"] = "columns";
	T["fromto"] = "fromto";
	T["downloadgraphdataascsv"] = "downloadgraphdataascsv";
	T["apparenttemperature"] = "apparenttemperature";
	T["airtemperature"] = "airtemperature";
	T["relativeairhumidity"] = "relativeairhumidity";
	T["windspeed"] = "windspeed";
	T["inpercent"] = "inpercent";
	T["apparenttemperatureverbose"] = "apparenttemperatureverbose";
	T["youfeelwarmer"] = "youfeelwarmer";
	T["youfeelcolder"] = "youfeelcolder";
	T["apparenttemperaturehint"] = "apparenttemperaturehint";
	T["analysissync"] = "analysissync";
	/** Inspect tool */
	T["inspecttemperatures"] = "inspecttemperatures";
	T["usemousetoinspecttemperaturevalues"] = "usemousetoinspecttemperaturevalues";
	/**  Edit analysis tool */
	T["editanalysis"] = "editanalysis";
	T["dragcornersofselectedanalysis"] = "dragcornersofselectedanalysis";
	/** Add point tool */
	T["addpointanalysis"] = "addpointanalysis";
	T["clickandaddpoint"] = "clickandaddpoint";
	/** Add rectangle tool */
	T["addrectangleanalysis"] = "addrectangleanalysis";
	T["clickandaddrectangle"] = "clickandaddrectangle";
	/** Add ellipsis tool */
	T["addellipsisanalysis"] = "addellipsisanalysis";
	T["clickandaddellipsis"] = "clickandaddellipsis";
	/** Tutorial */
	T["tutorial"] = "tutorial";
	/** Colour Palette */
	T["colourpalette"] = "colourpalette";
	/** Use the dropdown to change the palette */
	T["palettehint"] = "palettehint";
	T["remotefoldersbrowser"] = "remotefoldersbrowser";
	/** Server */
	T["server"] = "server";
	T["networklog"] = "networklog";
	T["editfile"] = "editfile";
	T["editfolder"] = "editfolder";
	T["editcomment"] = "editcomment";
	T["user"] = "user";
	T["griddisplay"] = "griddisplay";
	T["tabledisplay"] = "tabledisplay";
	T["deletefile"] = "deletefile";
	T["deletefolder"] = "deletefolder";
	T["comments"] = "comments";
	T["deletecomment"] = "deletecomment";
	T["savecomment"] = "savecomment";
	T["addcomment"] = "addcomment";
	T["nocomments"] = "nocomments";
	T["savechanges"] = "savechanges";
	T["uploadfile"] = "uploadfile";
	T["compactview"] = "compactview";
	T["showdiscussion"] = "showdiscussion";
	T["edittags"] = "edittags";
	T["assignedtags"] = "assignedtags";
	T["availabletags"] = "availabletags";
	T["connectioninformation"] = "connectioninformation";
	T["serverurl"] = "serverurl";
	T["servername"] = "servername";
	T["login"] = "login";
	T["logout"] = "logout";
	T["logoutmessage"] = "logoutmessage";
	T["loginerror"] = "logineerror";
	T["password"] = "password";
	T["accessibletologgedinusers"] = "accessibletologgedinusers";
	T["display"] = "display";
	T["content"] = "content";
	T["syncanalyses"] = "syncanalyses";
	T["overviewofyourfolders"] = "overviewofyourfolders";
	T["uploadedby"] = "uploadedby";
	T["uploadeddat"] = "uploadeddat";
	T["createfolder"] = "createfolder";
	T["subfolder"] = "subfolder";
	T["createsubfolder"] = "createsubfolder";
	T["delete"] = "delete";
	T["export"] = "export";
	T["exportcontent"] = "exportcontent";
	T["histogram"] = "histogram";
	T["timeline"] = "timeline";
	T["exportwidth"] = "exportwidth";
	T["exportmargin"] = "exportmargin";
	T["exportgap"] = "exportgap";
	T["exportgrahpheight"] = "exportgrahpheight";
	T["imagecompression"] = "imagecompression";
	T["videoquality"] = "videoquality";
	T["exportvideo"] = "exportvideo";
	T["exportpng"] = "exportpng";
	T["exportrecordingframes"] = "exportrecordingframes";
	T["exportencodingfile"] = "exportencodingfile";
	T["exportdonotclosewindowhint"] = "exportdonotclosewindowhint";
	T["theme"] = "theme";
	T["light"] = "light";
	T["dark"] = "dark";
	T["foldermayhavefiles"] = "foldermayhavefiles";
	T["foldermayhavesubfolders"] = "foldermayhavesubfolders";
	return T;
}({});
const languages = [
	{
		code: "cs",
		name: "Čeština",
		flag: "🇨🇿"
	},
	{
		code: "cy",
		name: "Cymraeg",
		flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
		disabled: true
	},
	{
		code: "de",
		name: "Deutsch",
		flag: "🇩🇪"
	},
	{
		code: "en",
		name: "English",
		flag: "🇬🇧"
	},
	{
		code: "fr",
		name: "Français",
		flag: "🇫🇷"
	}
];
const languagesObject = Object.fromEntries(languages.map((l) => [l.code, l]));

//#endregion
//#region \0@oxc-project+runtime@0.114.0/helpers/decorateMetadata.js
function __decorateMetadata(k, v) {
	if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

//#endregion
//#region \0@oxc-project+runtime@0.114.0/helpers/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}

//#endregion
//#region src/hierarchy/AbstractThermalElement.ts
/** All the webcomponents of \@labirthermal/embed (and its extensions) should be based on the abstract class `AbstractThermalElement`. */
var AbstractThermalElement = class extends lit.LitElement {
	get UUID() {
		if (this._UUID === void 0) this._UUID = (0, uuid.v4)();
		return this._UUID;
	}
	getUUID(msg) {
		return this.UUID + "_" + msg;
	}
	log(...args) {
		console.log(this.tagName, this.UUID.substring(0, 5), ...args);
	}
	static {
		this.shadowRootOptions = {
			...lit.LitElement.shadowRootOptions,
			mode: "open"
		};
	}
	connectedCallback() {
		super.connectedCallback();
		i18next.default.on("languageChanged", (locale) => {
			this._locale = locale;
		});
	}
	i(str) {
		return lit.html`${(0, lit_directives_unsafe_svg_js.unsafeSVG)(str)}`;
	}
	/** Returns a translated string */
	t(key) {
		return (0, i18next.t)(T[key]);
	}
};
__decorate([(0, _lit_context.consume)({
	context: localeContext,
	subscribe: true
}), __decorateMetadata("design:type", String)], AbstractThermalElement.prototype, "_locale", void 0);

//#endregion
//#region src/hierarchy/providers/context/FileContexts.ts
/** A crucial context exposing the `Instance` object from `AbstractFileProvider` to `AbstractFileConsumers`. */
const fileContext = (0, _lit_context.createContext)("file");
const fileFailureContext = (0, _lit_context.createContext)("failure");
/** @deprecated Not used - remove */
const loadingContext = (0, _lit_context.createContext)("file-loading");
const readyContext = (0, _lit_context.createContext)("file-ready-context");
const fileProviderContext = (0, _lit_context.createContext)("file-provider-element");
const fileMsContext = (0, _lit_context.createContext)("file-ms-context");
const fileCursorContext = (0, _lit_context.createContext)("file-cursor");
const fileCursorSetterContext = (0, _lit_context.createContext)("file-cursor-setter");
const fileCurrentFrameContext = (0, _lit_context.createContext)("playback");
const durationContext = (0, _lit_context.createContext)("duration");
const filePlayingContext = (0, _lit_context.createContext)("file-playing-context");
const filePlaybackSpeedContext = (0, _lit_context.createContext)("file-playback-speed");
/** @deprecated */
const fileRecordingContext = (0, _lit_context.createContext)("recording");
/** @deprecated */
const filaMayStopContext = (0, _lit_context.createContext)("mayStop");
const fileAnalysisListContext = (0, _lit_context.createContext)("analysislist");

//#endregion
//#region src/hierarchy/providers/context/GroupContext.ts
const groupContext = (0, _lit_context.createContext)("group-instance");

//#endregion
//#region src/hierarchy/providers/context/RegistryContext.ts
const registryContext = (0, _lit_context.createContext)("registry-instance");
const registryOpacityContext = (0, _lit_context.createContext)("registry-opacity");
const registryRangeFromContext = (0, _lit_context.createContext)("registry-range-from");
const registryRangeToContext = (0, _lit_context.createContext)("registry-range-to");
const registryLoadingContext = (0, _lit_context.createContext)("registry-loading");
const registryMinContext = (0, _lit_context.createContext)("registry-min");
const registryMaxContext = (0, _lit_context.createContext)("registry-max");
/** 
* Highlight is an optional range of temperatures highlighted graphically on the thermal scale. It is used to indicate for example:
* - what is the range of a file within min/max of the entire group
* - what is the range of an analysis within the min/max of a file
* - what is the min/max of a group of files within multiple groups of files
* 
* This context is exposed by a registry provider. It need to be consumed manually.
*/
const registryHighlightContext = (0, _lit_context.createContext)("registry-highlight");
/**
* Highlight setter needs to be used in order to set/unset a temperature range on the thermal scale.
*/
const setRegistryHighlightContext = (0, _lit_context.createContext)("registry-highlight-setter");

//#endregion
//#region src/hierarchy/providers/context/ManagerContext.ts
const managerContext = (0, _lit_context.createContext)("manager-instance");
const managerPaletteContext = (0, _lit_context.createContext)("manager-palette-context");
const managerAdvancedPalettesContext = (0, _lit_context.createContext)("manager-advanced-palettes-context");
const managerSmoothContext = (0, _lit_context.createContext)("manager-smooth-context");
const managerGraphFunctionContext = (0, _lit_context.createContext)("manager-graph-function-context");
const languageContext = (0, _lit_context.createContext)("language");
const toolContext = (0, _lit_context.createContext)("tool-context");
/** @deprecated I do not know wha is this here. */
const toolsContext = (0, _lit_context.createContext)("tools-context");
const interactiveAnalysisContext = (0, _lit_context.createContext)("interactive-analysis-context");

//#endregion
//#region src/ui/App.ts
var _ref$19, _ref2$7;
var ThermalAppElement = class ThermalAppElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.language = i18next.default.language;
		this._overflowCount = 0;
		this._overflowOpen = false;
		this.fullscreen = "off";
		this.showfullscreen = false;
		this.dark = false;
		this.labelVariant = "foreground";
		this.chromiumwarning = false;
		this.headerRef = (0, lit_directives_ref_js.createRef)();
		this.contentRef = (0, lit_directives_ref_js.createRef)();
		this.barItemsRef = (0, lit_directives_ref_js.createRef)();
		this._overflowObserver = null;
		this._rafId = null;
		this._handleFullscreenChange = () => {
			if (!document.fullscreenElement) this.fullscreen = "off";
		};
	}
	connectedCallback() {
		super.connectedCallback();
		window.addEventListener("fullscreenchange", this._handleFullscreenChange);
		i18next.default.on("languageChanged", () => {
			this.language = i18next.default.language;
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("fullscreenchange", this._handleFullscreenChange);
		if (this._overflowObserver) {
			this._overflowObserver.disconnect();
			this._overflowObserver = null;
		}
		if (this._rafId !== null) {
			cancelAnimationFrame(this._rafId);
			this._rafId = null;
		}
	}
	_toggleOverflow() {
		this._overflowOpen = !this._overflowOpen;
	}
	_scheduleOverflowUpdate() {
		if (this._rafId !== null) cancelAnimationFrame(this._rafId);
		this._rafId = requestAnimationFrame(() => {
			this._rafId = null;
			this._doOverflowUpdate();
		});
	}
	_doOverflowUpdate() {
		const shadow = this.shadowRoot;
		if (!shadow) return;
		const overflowSlot = shadow.querySelector("slot[name=\"bar-overflow\"]");
		if (overflowSlot) {
			const items = [...overflowSlot.assignedElements()];
			for (const item of items) {
				item.slot = item.dataset.originalSlot ?? "bar-pre";
				delete item.dataset.originalSlot;
			}
		}
		const barItems = this.barItemsRef.value;
		if (!barItems) return;
		const preSlot = shadow.querySelector("slot[name=\"bar-pre\"]");
		const postSlot = shadow.querySelector("slot[name=\"bar-post\"]");
		const allItems = [...preSlot?.assignedElements({ flatten: true }) ?? [], ...postSlot?.assignedElements({ flatten: true }) ?? []];
		if (allItems.length === 0) {
			this._overflowCount = 0;
			return;
		}
		const GAP = 5;
		const HAMBURGER_W = 44;
		const totalItemsWidth = allItems.reduce((sum, el, i) => sum + el.offsetWidth + (i > 0 ? GAP : 0), 0);
		const containerWidth = barItems.offsetWidth;
		if (totalItemsWidth <= containerWidth) {
			this._overflowCount = 0;
			this._overflowOpen = false;
			return;
		}
		const availableWidth = containerWidth - HAMBURGER_W;
		let used = 0;
		let firstOverflow = allItems.length;
		for (let i = 0; i < allItems.length; i++) {
			const itemWidth = allItems[i].offsetWidth + (i > 0 ? GAP : 0);
			if (used + itemWidth > availableWidth) {
				firstOverflow = i;
				break;
			}
			used += itemWidth;
		}
		for (let i = firstOverflow; i < allItems.length; i++) {
			const item = allItems[i];
			item.dataset.originalSlot = item.slot;
			item.slot = "bar-overflow";
		}
		const newCount = allItems.length - firstOverflow;
		this._overflowCount = newCount;
		if (newCount === 0) this._overflowOpen = false;
	}
	toggleFullscreen() {
		if (this.fullscreen === "on") this.fullscreen = "off";
		else this.fullscreen = "on";
	}
	update(changedProperties) {
		super.update(changedProperties);
		if (this.observer === void 0 && this.contentRef.value !== void 0) {
			this.observer = new ResizeObserver((entries) => {
				const entry = entries[0];
				if (this.fullscreen === "on" && this.contentRef.value) {
					const offsetHeight = 175;
					const offsetWidth = 0;
					const windowHeight = entry.contentRect.height;
					const windowWidth = entry.contentRect.width;
					const availableHeight = windowHeight - offsetHeight;
					const availableWidth = windowWidth - offsetWidth;
					const contentHeight = this.contentRef.value.offsetHeight;
					const aspect = 4 / 3;
					let width = 0;
					let height = 0;
					if (contentHeight < availableHeight) {
						console.log("priorita šířky");
						width = availableWidth;
						height = width / aspect;
					} else {
						console.log("priorita výšky");
						height = availableHeight;
						width = height * aspect;
					}
				} else if (this.fullscreen === "off" && this.contentRef.value) this.contentRef.value.removeAttribute("style");
			});
			this.observer.observe(this);
		}
		if (!this._overflowObserver && this.barItemsRef.value) {
			this._overflowObserver = new ResizeObserver(() => {
				this._scheduleOverflowUpdate();
			});
			this._overflowObserver.observe(this.barItemsRef.value);
			this._scheduleOverflowUpdate();
		}
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "fullscreen") {
			if (value === "on") this.requestFullscreen();
			else if (value === "off" && _old !== null) {
				if (document.fullscreenElement) document.exitFullscreen();
			}
		}
	}
	static {
		this.styles = lit.css`

        :host {
            font-family: sans-serif;
            font-weight: normal;
            font-size: var( --thermal-fs );
            line-height: 1em;
            color: var( --thermal-foreground );

            display: block;

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );    
            position: relative; 
        }

        .dark {
            background-color: var( --thermal-slate ) !important;
        }

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );    
            position: relative;        

        }

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

        .bar-label {
            flex: 0 1 auto;
            min-width: 50px;
            overflow: hidden;
            display: flex;
            align-items: center;
        }

        .bar-items {
            flex: 1 1 0;
            min-width: 0;
            display: flex;
            gap: 5px;
            align-items: center;
            --thermal-direction: row;
        }

        .bar-items ::slotted([slot="bar-pre"]),
        .bar-items ::slotted([slot="bar-post"]) {
            flex-shrink: 0;
        }

        .bar-spacer {
            flex: 1 1 0;
            min-width: 0;
        }

        .bar-overflow-toggle {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            color: var(--thermal-foreground);
            cursor: pointer;
            padding: 0.3em 0.5em;
            line-height: 0;
        }

        .bar-overflow-toggle:hover {
            background-color: var(--thermal-slate-light);
        }

        .bar-overflow-panel {
            
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            align-items: center;
            padding: calc( var(--thermal-gap) * 0.4 ) 0;
            
            border-top: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            --thermal-direction: row;

            padding: .3em;
            
            background: var(--thermal-slate);
            border-radius: var(--thermal-radius);
            
            margin-bottom: .5em;

            > slot > * {
                width: 100%; 
            }

        }

        .bar-overflow-panel[hidden] {
            display: none;
        }

        :host([fullscreen="on"]) .container {
            border: 0;
            border-radius: 0;
            box-sizing: border-box;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
            padding-top: 0px;

            .app-header {
                padding-top: calc( var( --thermal-gap ) / 3 );
            }

            header,
            .content {
                width: 100%;
            }
        }


        .credits {

            display: flex;
            width: 100%;
            flex-wrap: wrap;
            font-size: calc( var(--thermal-fs-sm) * 0.8 );

            & > div {
                padding-top: calc( var(--thermal-gap) * .5 );
                padding-right: var( --thermal-gap );
            }
        
        }

        .credits-field {
            display: inline;
            opacity: .5;
        }

        .credit-value {
            display: inline;
        }

        .content {
            width: 100%;
            box-sizing: border-box;
        }

        .has-content {
            margin-top: calc( var(--thermal-gap) * .5);
            &::before {
                opacity: .5;
                font-size: calc( var(--thermal-fs-sm) * 0.8 );
                display: block;
                padding-bottom: calc( var(--thermal-gap) * .5);
            }
        }

        .app-header {
            position: sticky;
            top: 0;
            z-index: 9999;
            background: var(--thermal-slate-light);
            background: linear-gradient(var(--thermal-slate-light) calc(100% - 10px), transparent);
        }
    
    `;
	}
	renderLabel() {
		const interactiveProp = this.onlabel !== void 0 ? "true" : "false";
		return lit.html`
    <slot name="label">
        ${this.label ? lit.html`<thermal-btn
    variant="${this.labelVariant}"
    interactive=${interactiveProp}
    icon=${(0, lit_directives_if_defined_js.ifDefined)(this.labelIcon)}
    iconStyle=${(0, lit_directives_if_defined_js.ifDefined)(this.labelIconStyle)}
    tooltip=${(0, lit_directives_if_defined_js.ifDefined)(this.labelTooltip)}
    @click=${(0, lit_directives_if_defined_js.ifDefined)(this.onlabel)}
>${this.label}</thermal-btn>` : lit.nothing}
    </slot>`;
	}
	renderCreditField(label, value) {
		if (value === void 0 || value.trim().length === 0) return lit.nothing;
		return lit.html`<div>
    <div class="credits-field">${label}:</div>
    <div class="credit-value">${value}</div>
</div>`;
	}
	renderCredits() {
		if (this.author || this.license || this.recorded) return lit.html`<div class="credits">
    ${this.renderCreditField((0, i18next.t)(T.recordedat), this.recorded)}
    ${this.renderCreditField((0, i18next.t)(T.author), this.author)}
    ${this.renderCreditField((0, i18next.t)(T.license), this.license)}
</div>`;
		return lit.nothing;
	}
	static {
		this.languages = [
			"en",
			"cs",
			"de",
			"fr",
			"cy"
		];
	}
	renderLanguageSwitcher() {
		return lit.html`<thermal-dropdown>
    <span slot="invoker">${this.language.toUpperCase()}</span>
    ${(0, lit_directives_cache_js.cache)((0, lit_directives_map_js.map)(ThermalAppElement.languages, (lang) => lit.html`<div slot="option">
        <thermal-btn
            @click=${() => {
			i18next.default.changeLanguage(lang);
			this.language = lang;
		}}
        >${languagesObject[lang].flag} ${languagesObject[lang].name}</thermal-btn>
    </div>`))}
</thermal-dropdown>`;
	}
	renderFullscreenButton() {
		if (this.showfullscreen === false) return lit.nothing;
		return lit.html`<thermal-btn
    class="app-fullscreen-button"
    @click=${this.toggleFullscreen.bind(this)}
    icon=${this.fullscreen === "on" ? "smaller" : "bigger"}
    iconStyle="mini"
    tooltip=${this.fullscreen === "on" ? (0, i18next.t)(T.close) : "Fullscreen"}
></thermal-btn>`;
	}
	renderOverflowToggle() {
		if (this._overflowCount === 0) return lit.nothing;
		let icon = "adjustment";
		let iconStyle = "outline";
		let variant = "default";
		if (this._overflowOpen) {
			icon = "close";
			iconStyle = "outline";
			variant = "bg";
		}
		return lit.html`<thermal-btn 
    @click=${this._toggleOverflow} 
    tooltip="${this.t("moreoptions")}}" 
    icon=${icon} 
    iconStyle=${iconStyle} 
    variant=${variant}
></thermal-btn>`;
	}
	render() {
		return lit.html`<header ${(0, lit_directives_ref_js.ref)(this.headerRef)} class="app-header">

        <div class="bar">

            <div class="bar-label">
                ${this.renderLabel()}
            </div>

            <div class="bar-items" ${(0, lit_directives_ref_js.ref)(this.barItemsRef)}>

                <slot name="bar-pre" @slotchange=${this._scheduleOverflowUpdate}></slot>
                <div class="bar-spacer"></div>
                <slot name="bar-post" @slotchange=${this._scheduleOverflowUpdate}></slot>

                ${this.renderOverflowToggle()}

            </div>

            <slot name="close"></slot>

            ${this.renderFullscreenButton()}

            ${this.renderLanguageSwitcher()}

        </div>

        ${this._overflowCount > 0 ? lit.html`
            <div class="bar-overflow-panel" ?hidden=${!this._overflowOpen}>
                <slot name="bar-overflow"></slot>
            </div>
        ` : lit.nothing}

        ${this.preElements.length >= 0 ? lit.html`<div class="pre">
            <slot name="pre"></slot>
        </div>` : ""}

    </header>

    <div class="content" part="app-content" ${(0, lit_directives_ref_js.ref)(this.contentRef)}>
        <slot></slot>
    </div>

    <div class="post">
        <slot name="post"></slot>
    </div>

    ${this.renderCredits()}

    <div class="content ${this.contentElements.length > 0 ? "has-content" : ""}">
        <slot name="content"></slot>
    </div>
`;
	}
};
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "language", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Number)], ThermalAppElement.prototype, "_overflowCount", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], ThermalAppElement.prototype, "_overflowOpen", void 0);
__decorate([(0, lit_decorators_js.queryAssignedElements)({
	slot: "pre",
	flatten: true
}), __decorateMetadata("design:type", typeof (_ref$19 = typeof Array !== "undefined" && Array) === "function" ? _ref$19 : Object)], ThermalAppElement.prototype, "preElements", void 0);
__decorate([(0, lit_decorators_js.queryAssignedElements)({
	slot: "content",
	flatten: true
}), __decorateMetadata("design:type", typeof (_ref2$7 = typeof Array !== "undefined" && Array) === "function" ? _ref2$7 : Object)], ThermalAppElement.prototype, "contentElements", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "fullscreen", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	converter: booleanConverter(false),
	attribute: "show-fullscreen"
}), __decorateMetadata("design:type", Boolean)], ThermalAppElement.prototype, "showfullscreen", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", Boolean)], ThermalAppElement.prototype, "dark", void 0);
__decorate([(0, lit_decorators_js.property)(), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "author", void 0);
__decorate([(0, lit_decorators_js.property)(), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "recorded", void 0);
__decorate([(0, lit_decorators_js.property)(), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "license", void 0);
__decorate([(0, lit_decorators_js.property)(), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "label", void 0);
__decorate([(0, lit_decorators_js.property)(), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "labelIcon", void 0);
__decorate([(0, lit_decorators_js.property)(), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "labelIconStyle", void 0);
__decorate([(0, lit_decorators_js.property)(), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "labelTooltip", void 0);
__decorate([(0, lit_decorators_js.property)(), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "labelVariant", void 0);
__decorate([(0, lit_decorators_js.property)({ type: Object }), __decorateMetadata("design:type", Function)], ThermalAppElement.prototype, "onlabel", void 0);
__decorate([(0, lit_decorators_js.property)({ converter: booleanConverter(false) }), __decorateMetadata("design:type", Boolean)], ThermalAppElement.prototype, "chromiumwarning", void 0);

//#endregion
//#region src/ui/Bar.ts
var ThermalBarElement = class extends lit.LitElement {
	constructor(..._args) {
		super(..._args);
		this.collapsed = false;
		this.drawerRef = (0, lit_directives_ref_js.createRef)();
		this.contentRef = (0, lit_directives_ref_js.createRef)();
		this.rulerContentRef = (0, lit_directives_ref_js.createRef)();
	}
	static {
		this.styles = lit.css`

        .container {
            // width: 100%;
            display: flex;
            gap: 5px;
            position: relative;
        }


        .ruler {
            width: 100%;
            position: absolute;
            height: 0;
            top: 0;
            left: 0;
        }

        .ruler-item {}

        .ruler-item__current {
            border: var(--thermal-border-width) var(--thermal-border-style) transparent;
            height: 0;
            margin-top: -1px;
            content: "";
        }

        .ruler-item__content {
            border: var(--thermal-border-width) var(--thermal-border-style) red;
            position: absolute;
            display: none;
        }


        .content {
            
            display: flex;
            gap: calc( 5px );
            width: max-content;

            align-items: center;
        
        }



        .icon {
            width: var( --thermal-gap );
            line-height: 0;
        }

        .collapsed-menu {
            --thermal-direction: column;
            --thermal-collapsible-display: block !important;
            --thermal-collapsible-width: 100%;
            --thermal-collapsible-grow: 1;
        }

    `;
	}
	connectedCallback() {
		super.connectedCallback();
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.hydrateObserver();
	}
	hydrateObserver() {
		if (this.drawerRef.value && this.observer === void 0) {
			this.observer = new ResizeObserver((entries) => {
				if (this.collapsed === false) this.lastContentWidth = this.contentRef.value.clientWidth;
				const entry = entries[0];
				if (this.lastContentWidth < entry.contentRect.width) {
					if (this.collapsed) this.collapsed = false;
				} else if (this.collapsed === false) this.collapsed = true;
			});
			this.observer.observe(this.drawerRef.value);
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.drawerRef.value) this.observer.unobserve(this.drawerRef.value);
		if (this.observer) this.observer.disconnect();
	}
	render() {
		return lit.html`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${(0, lit_directives_ref_js.ref)(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${(0, lit_directives_ref_js.ref)(this.rulerContentRef)} style="width: ${this.lastContentWidth + 1}px"></div>
                </div>
                <div class="content" ${(0, lit_directives_ref_js.ref)(this.contentRef)}>

                    ${this.collapsed === false ? lit.html`
                        <slot></slot>    
                    ` : lit.nothing}
                
                </div>

            </div>

            ${this.collapsed ? lit.html`
                <thermal-dropdown class="collapsed-menu">
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option" stacked="true"></slot>
                </thermal-dropdown>
            ` : lit.nothing}
        
        `;
	}
};
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], ThermalBarElement.prototype, "collapsed", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Number)], ThermalBarElement.prototype, "lastContentWidth", void 0);

//#endregion
//#region src/ui/Btn.ts
var _ref$18;
var ThermalBtnElement = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.tooltipPlacement = "top";
		this.iconStyle = "outline";
		this.tabindex = 0;
		this.align = "center";
		this.showTooltip = async () => {
			if (!this.tooltipElement || !this.arrowElement) return;
			this.tooltipElement.style.visibility = "visible";
			this.tooltipElement.style.opacity = "1";
			const updatePosition = async () => {
				if (!this.tooltipElement || !this.arrowElement) return;
				const { x, y, placement, middlewareData } = await (0, _floating_ui_dom.computePosition)(this, this.tooltipElement, {
					placement: this.tooltipPlacement,
					middleware: [
						(0, _floating_ui_dom.offset)(6),
						(0, _floating_ui_dom.flip)(),
						(0, _floating_ui_dom.shift)({ padding: 8 }),
						(0, _floating_ui_dom.arrow)({ element: this.arrowElement })
					]
				});
				Object.assign(this.tooltipElement.style, {
					left: `${x}px`,
					top: `${y}px`
				});
				const { x: arrowX, y: arrowY } = middlewareData.arrow || {};
				const staticSide = {
					top: "bottom",
					right: "left",
					bottom: "top",
					left: "right"
				}[placement.split("-")[0]];
				Object.assign(this.arrowElement.style, {
					left: arrowX != null ? `${arrowX}px` : "",
					top: arrowY != null ? `${arrowY}px` : "",
					right: "",
					bottom: "",
					[staticSide]: "-4px"
				});
			};
			updatePosition();
			this.cleanupAutoUpdate = (0, _floating_ui_dom.autoUpdate)(this, this.tooltipElement, updatePosition);
		};
		this.hideTooltip = () => {
			if (!this.tooltipElement) return;
			this.tooltipElement.style.opacity = "0";
			this.tooltipElement.style.visibility = "hidden";
			if (this.cleanupAutoUpdate) {
				this.cleanupAutoUpdate();
				this.cleanupAutoUpdate = void 0;
			}
		};
		this.handleClick = (event) => {
			if (this.disabled) {
				event.preventDefault();
				event.stopPropagation();
			}
		};
		this.handleKeydown = (event) => {
			if (this.disabled) return;
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				this.click();
			}
		};
	}
	firstUpdated() {
		if (!this.hasAttribute("tabindex")) this.setAttribute("tabindex", "0");
		this.addEventListener("keydown", this.handleKeydown);
		this.addEventListener("click", this.handleClick);
		if (this.tooltip) {
			this.addEventListener("mouseenter", this.showTooltip);
			this.addEventListener("mouseleave", this.hideTooltip);
			this.addEventListener("focus", this.showTooltip);
			this.addEventListener("blur", this.hideTooltip);
		}
	}
	updated(changedProperties) {
		if (changedProperties.has("tooltip")) if (this.tooltip) {
			this.addEventListener("mouseenter", this.showTooltip);
			this.addEventListener("mouseleave", this.hideTooltip);
			this.addEventListener("focus", this.showTooltip);
			this.addEventListener("blur", this.hideTooltip);
		} else {
			this.removeEventListener("mouseenter", this.showTooltip);
			this.removeEventListener("mouseleave", this.hideTooltip);
			this.removeEventListener("focus", this.showTooltip);
			this.removeEventListener("blur", this.hideTooltip);
		}
	}
	removeTooltip() {
		this.tooltipElement = void 0;
		this.arrowElement = void 0;
		if (this.cleanupAutoUpdate) {
			this.cleanupAutoUpdate();
			this.cleanupAutoUpdate = void 0;
		}
		this.removeEventListener("mouseenter", this.showTooltip);
		this.removeEventListener("mouseleave", this.hideTooltip);
		this.removeEventListener("focus", this.showTooltip);
		this.removeEventListener("blur", this.hideTooltip);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener("keydown", this.handleKeydown);
		this.removeEventListener("click", this.handleClick);
		this.removeTooltip();
		if (this.highlightTimeout) {
			clearTimeout(this.highlightTimeout);
			this.highlightTimeout = void 0;
		}
		this.classList.remove("highlight");
	}
	static {
		this.styles = lit.css`

        :host {

            font-family: var( --thermal-font-family );
            font-size: calc( var( --thermal-fs ) * .8);
            line-height: var( --thermal-line-height );
        
            --color: var( --thermal-foreground );
            --color-hover: var( --color );

            --bg: var( --thermal-slate-light );
            --bg-hover: var( --bg );

            --border-width: var(--thermal-border-width);
            --border-style: var(--thermal-border-style);
            --border-color: var( --thermal-slate );
            --border-color-hover: var( --border-color );

            --radius: var(--thermal-radius);
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
            
            --padding: .5em .7em;
            --icon-size: 1em;
            --gap: .5em;
            --opacity: 1;
            --letter-spacing: normal;

            --cursor: pointer;
            --transition-duration: .15s;

            --tooltip-bg: var(--thermal-foreground, black);
            --tooltip-color: var( --thermal-background, white);
            --tooltip-padding: 0.5em 0.75em;
            --tooltip-border-radius: var(--thermal-radius, 4px);
            --tooltip-font-size: 0.9em;
            --tooltip-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        }



        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 0;
            gap: var(--gap);
            vertical-align: middle;
            
            position: relative;

            margin: 0;
            padding: var(--padding);
            width: fit-content;
            box-sizing: border-box;

            border-width: var( --border-width );
            border-style: var( --border-style );
            border-color: var( --border-color );
            border-radius: var( --radius );
            
            background-color: var(--bg);
            color: var(--color);

            box-shadow: var( --shadow ); 
            
            cursor: var( --cursor );
            opacity: var( --opacity );
            
            --letter-spacing: var( --letter-spacing );
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;

            transition: all var(--transition-duration) ease-in-out;

            /* Focus styling */
            outline: none;

            
        }

        :host([align="left"]) {
            justify-content: flex-start;
        }


        :host(:focus),
        :host(:focus-visible),
        :host(:hover) {
            outline: none;
            box-shadow: var( --shadow-hover );
            background-color: var(--bg-hover);
            color: var(--color-hover);
            border-color: var( --border-color-hover );
        }

        svg,
        span {
            vertical-align: middle;
            display: inline-block;
        }



        :host([disabled=true]),
        :host([disabled="true"])
        :host([disabled="true"]:hover),
        :host([disabled="true"]:focus) {

            
            color: color-mix(in srgb, var(--color) 50%, transparent);
            background: color-mix(in srgb, var(--bg) 50%, transparent);
            border-color: color-mix(in srgb, var(--border-color) 50%, transparent);
            --cursor: not-allowed;
            --shadow: none;
            --shadow-hover: none;

            button {
                outline: 0 !important;
                pointer-events: none;
            }
        }


        :host([interactive="false"]),
        :host([interactive=false]),
        :host([interactive="false"]:hover),
        :host([interactive=false]:hover),
        :host([interactive="false"]:focus),
        :host([interactive=false]:focus) {
            --shadow-hover: none;
            --cursor: text;
            --color-hover: var( --color );
            --bg-hover: var( --bg );
        }





        :host([size="sm"]),
        :host([size=sm]) {
            --padding: .1em .2em;
            line-height: 1.2;
            --letter-spacing: 0.5px;
            font-size: .7em;
        }

        :host([size="lg"]),
        :host([size=lg]) {
            --padding: .5em .7em;
            line-height: 1.2;
            font-size: 1em;
        }

        :host([size="xl"]),
        :host([size=xl]) {
            line-height: 1.2;
            font-size: 2em;
        }

        :host([plain="true"]),
        :host([plain=true]) {
            --border-color: transparent;
            --border-color-hover: transparent;
            --border-width: 0px;
            border: none !important;
        }







        :host([variant="primary"]),
        :host([variant=primary]) {
            
            --color: var( --thermal-background );
            --color-hover: var( --thermal-background );
            
            --bg: var( --thermal-primary );
            --bg-hover: var( --thermal-primary-dark );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );

        }

        :host([variant="foreground"]),
        :host([variant=foreground]) {

            --color: var( --thermal-background );
            --color-hover: var( --thermal-background );
            
            --bg: var( --thermal-foreground );
            --bg-hover: var( --thermal-slate-dark );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
        }


        :host([variant="background"]),
        :host([variant=background]) {

            --color: var( --thermal-foreground );
            --color-hover: var( --thermal-foreground );
            
            --bg: var( --thermal-background );
            --bg-hover: var( --bg );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
        }



        :host([variant="text"]),
        :host([variant=text]) {

            --bg: transparent;
            --bg-hover: transparent;

            --border-color: transparent;
            --border-color-hover: transparent;

            --border-width: 0px;
            border: none !important;

            --shadow: none;
            --shadow-hover: none;

            --padding: 0px;
            --letter-spacing: normal;
        }

        



        .btn-icon {
            width: 1.3em;
        }


        /* Global tooltip styles */

        .thermal-tooltip {
            background-color: var(--tooltip-bg, #334155);
            color: var(--tooltip-color, white);
            padding: var(--tooltip-padding, 0.5em 0.75em);
            border-radius: var(--tooltip-border-radius, 4px);
            font-size: var(--tooltip-font-size, 1em);
            box-shadow: var(--tooltip-box-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));
            z-index: 9999;
            pointer-events: none;
            word-wrap: break-word;
            font-size: calc( var( --thermal-fs ) * 0.8 );
        }

        .thermal-tooltip-arrow {
            position: absolute;
            width: 8px;
            height: 8px;
            background: inherit;
            transform: rotate(45deg);
        }

        .prefix {
            font-weight: bold;
            padding-right: 0.25em;
        }

        .badge {
            position: absolute;
            top: 0;
            right: 0;
            width: .5em;
            height: .5em;
            background: red;
            border-radius: 50%;
        }

        /* highlight animation for attention-grabbing effect */
        @keyframes thermal-highlight {
            0%,100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        :host(.highlight) {
            animation: thermal-highlight 0.4s ease-in-out infinite;
            box-shadow: var(--thermal-shadow);
        }

    `;
	}
	renderBadge() {
		if (!this.badge) return lit.nothing;
		return lit.html`<span class="badge" style="background-color: ${this.badge}"></span>`;
	}
	/**
	* Apply a temporary highlight animation to the button. The animation
	* will pulse the element with a gentle scale up/down effect for the
	* specified duration (milliseconds).
	*/
	highlight(durationMs) {
		if (durationMs <= 0) return;
		if (this.highlightTimeout) {
			clearTimeout(this.highlightTimeout);
			this.highlightTimeout = void 0;
		}
		this.classList.add("highlight");
		const cleanup = () => {
			this.classList.remove("highlight");
			if (this.highlightTimeout) {
				clearTimeout(this.highlightTimeout);
				this.highlightTimeout = void 0;
			}
			this.removeEventListener("mouseenter", cleanup);
			this.removeEventListener("focus", cleanup);
		};
		this.addEventListener("mouseenter", cleanup);
		this.addEventListener("focus", cleanup);
		this.highlightTimeout = window.setTimeout(cleanup, durationMs);
	}
	render() {
		let icon = lit.nothing;
		if (this.icon && this.icon in icons) {
			const i = icons[this.icon];
			if (typeof i[this.iconStyle] === "function") icon = i[this.iconStyle]("btn-icon");
		}
		let tooltipHtml = lit.nothing;
		if (this.tooltip) tooltipHtml = lit.html`
                <div
                    class="thermal-tooltip"
                    style="position: absolute; top: 0; left: 0; visibility: hidden; opacity: 0; transition: opacity 0.2s ease-in-out;"
                    @mouseenter=${this.showTooltip}
                    @mouseleave=${this.hideTooltip}
                    @focus=${this.showTooltip}
                    @blur=${this.hideTooltip}
                    ${(0, lit_directives_ref_js.ref)((el) => {
			this.tooltipElement = el;
		})}
                >
                    ${this.tooltip}
                    <div class="thermal-tooltip-arrow" ${(0, lit_directives_ref_js.ref)((el) => {
			this.arrowElement = el;
		})}></div>
                </div>
            `;
		return lit.html`
            ${(0, lit_directives_unsafe_svg_js.unsafeSVG)(icon)}${this.pre ? lit.html`<span class="prefix">${this.pre}</span>` : lit.nothing}<slot></slot>
            ${tooltipHtml}
            ${this.renderBadge()}
        `;
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: "tooltip-placement"
}), __decorateMetadata("design:type", typeof (_ref$18 = typeof _floating_ui_dom.Placement !== "undefined" && _floating_ui_dom.Placement) === "function" ? _ref$18 : Object)], ThermalBtnElement.prototype, "tooltipPlacement", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalBtnElement.prototype, "pre", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", Object)], ThermalBtnElement.prototype, "variant", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", Object)], ThermalBtnElement.prototype, "size", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalBtnElement.prototype, "icon", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalBtnElement.prototype, "iconStyle", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	converter: booleanConverter(false)
}), __decorateMetadata("design:type", Boolean)], ThermalBtnElement.prototype, "disabled", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	converter: booleanConverter(false)
}), __decorateMetadata("design:type", Boolean)], ThermalBtnElement.prototype, "interactive", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	attribute: true
}), __decorateMetadata("design:type", Boolean)], ThermalBtnElement.prototype, "plain", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalBtnElement.prototype, "tooltip", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Number,
	reflect: true
}), __decorateMetadata("design:type", Number)], ThermalBtnElement.prototype, "tabindex", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: "badge",
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalBtnElement.prototype, "badge", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalBtnElement.prototype, "align", void 0);

//#endregion
//#region src/ui/Dialog.ts
var ThermalDialogElement = class extends lit.LitElement {
	constructor(..._args) {
		super(..._args);
		this.button = (0, i18next.t)(T.close);
		this.dialogRef = (0, lit_directives_ref_js.createRef)();
		this.closeButtonRef = (0, lit_directives_ref_js.createRef)();
		this.invokerRef = (0, lit_directives_ref_js.createRef)();
		this.isFullscreen = false;
		this._open = false;
	}
	static {
		this.shadowRootOptions = {
			...lit.LitElement.shadowRootOptions,
			mode: "open"
		};
	}
	get open() {
		return this._open;
	}
	setClose() {
		this.dialogRef.value?.close();
		window.document.body.style.removeProperty("overflow-y");
		window.document.body.style.removeProperty("height");
		this.removeAttribute("open");
		this._open = false;
		if (this.onCloseEveryTime) this.onCloseEveryTime();
	}
	setOpen() {
		this.dialogRef.value?.showModal();
		window.document.body.style.overflowY = "hidden";
		window.document.body.style.height = "100vh";
		this.setAttribute("open", "true");
		this._open = true;
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "open") if (value === "true") this.setOpen();
		else this.setClose();
	}
	connectedCallback() {
		super.connectedCallback();
	}
	static {
		this.styles = lit.css`

        :host {

            display: contents;

        }

        .dialog {
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
            border-style: var( --thermal-border-style );
            border-radius: var( --thermal-radius );
            border-color: var( --thermal-slate );
            border-width: var(--thermal-border-width);
            padding: calc( var( --thermal-gap ) * 1.5 );
            font-size: var( --thermal-fs-small );

            &::backdrop {
                backdrop-filter: blur(3px);
            }

            min-width: 150px;
            box-sizing: border-box;

            @media ( min-width: 300px ) {
                min-width: 250px;
            }

            @media ( min-width: 600px ) {
                min-width: 450px;
            }
        }

        .dialog-header {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between; 
        }

        .dialog-title {
            margin: 0;
            padding: 0;
        }

        .dialog-content {
            padding: var( --thermal-gap ) 0;
            white-space: normal;
        }

        .dialog-footer {

            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;

        }

        

        .dialog-close {

            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: var( --thermal-foreground );
            cursor: pointer;

            width: calc( var( --thermal-gap ) * 1.5);

            &:hover {
                color: var( --thermal-primary );
            }
        
        }

        :host([is-fullscreen="true"][open]) .dialog {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            display: grid;
            grid-template-rows: auto 1fr auto;

            .dialog-content {
                overflow: auto;
            }
        }

        
    
    `;
	}
	render() {
		return lit.html`
            <slot name="invoker" ${(0, lit_directives_ref_js.ref)(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${(0, lit_directives_ref_js.ref)(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${(0, lit_directives_ref_js.ref)(this.closeButtonRef)} @click=${this.setClose}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                    </button>
                
                
                </header>
                	
                <div class="dialog-content">
                    ${this._open ? lit.html`<slot name="content"></slot>` : lit.nothing}
                </div>

                <div class="dialog-footer">
                    <slot name="button"></slot>
                    <thermal-btn variant="foreground" @click=${async () => {
			if (this.beforeClose) {
				if (await this.beforeClose()) this.setClose();
			} else this.setClose();
		}}>
                        ${this.button}
                    </thermal-btn>
                </div>
                
            
            </dialog>
        `;
	}
	async closeFromTheOutside() {
		if (this.beforeClose) {
			if (await this.beforeClose()) this.setClose();
		} else this.setClose();
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: false
}), __decorateMetadata("design:type", String)], ThermalDialogElement.prototype, "button", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false),
	attribute: "is-fullscreen"
}), __decorateMetadata("design:type", Boolean)], ThermalDialogElement.prototype, "isFullscreen", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalDialogElement.prototype, "label", void 0);
__decorate([(0, lit_decorators_js.property)({ type: Object }), __decorateMetadata("design:type", Function)], ThermalDialogElement.prototype, "beforeClose", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], ThermalDialogElement.prototype, "_open", void 0);
__decorate([(0, lit_decorators_js.property)({ type: Object }), __decorateMetadata("design:type", Function)], ThermalDialogElement.prototype, "onCloseEveryTime", void 0);

//#endregion
//#region src/ui/Dropdown.ts
var _ref$17, _ref2$6, _ref3$2;
var ThermalDropdownElement = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.dropdownRef = (0, lit_directives_ref_js.createRef)();
		this.invokerRef = (0, lit_directives_ref_js.createRef)();
		this.optionsRef = (0, lit_directives_ref_js.createRef)();
		this.isOpen = "close";
		this.interactive = "on";
	}
	static {
		this.shadowRootOptions = { ...lit.LitElement.shadowRootOptions };
	}
	setOpen() {
		this.isOpen = "open";
	}
	setClose() {
		this.isOpen = "close";
	}
	toggle() {
		if (this.interactive === "off") return;
		if (this.isOpen === "open") this.isOpen = "close";
		else this.isOpen = "open";
	}
	connectedCallback() {
		super.connectedCallback();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
	}
	placeOptions() {
		if (!this.invokerRef.value || !this.optionsRef.value) return;
		(0, _floating_ui_dom.computePosition)(this.invokerRef.value, this.optionsRef.value, {
			middleware: [
				(0, _floating_ui_dom.offset)(2),
				(0, _floating_ui_dom.flip)(),
				(0, _floating_ui_dom.inline)(),
				(0, _floating_ui_dom.shift)()
			],
			placement: "bottom-start",
			strategy: "fixed"
		}).then(({ x, y }) => {
			if (this.optionsRef.value) {
				this.optionsRef.value.style.left = `${x}px`;
				this.optionsRef.value.style.top = `${y}px`;
			}
		});
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("isOpen")) this.placeOptions();
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this._options.forEach((option) => {
			option.childNodes.forEach((child) => child.addEventListener("click", () => {
				this.setClose();
			}));
		});
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "isopen") if (value === "open") {
			this.optionsRef.value?.classList.add("dropdown-options__show");
			this.dropdownRef.value?.classList.add("dropdown__open");
		} else {
			this.optionsRef.value?.classList.remove("dropdown-options__show");
			this.dropdownRef.value?.classList.remove("dropdown__open");
		}
	}
	static {
		this.styles = lit.css`

        .mayNot {
            opacity: .5;
            cursor: not-allowed;
        }

        .dropdown {
            width: max-content;
        }

        .dropdown-invoker {
            width: max-content;
            display: flex;
        }

        .dropdown-invoker-wrapper {
            display: flex;
            align-items: center;
        }

        .dropdown-invoker-wrapper-icon {
            width: calc( var( --thermal-gap ) * .856 );
            line-height: 0;
            padding-left: calc( var( --thermal-gap ) * .5 );
        }

        .dropdown-options {

            z-index: 9999;

            width: max-content;
            /** position: absolute; */
            position: fixed;
            top: 0;
            left: 0;
            
            padding: 5px 10px;

            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );

            background-color: var( --thermal-slate-light );

            box-shadow: var( --thermal-shadow );

            display: none;

            ::slotted( div:not(:last-child) ) {
                margin-bottom: calc( var( --thermal-gap ) * .5 );
            }

        }

        .dropdown-options__show {
            display: block;
        }

        .clicker {
            display: none;
        }

        .dropdown__open {
        
            .clicker {
                z-index: 9998;
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
            }
        }

        slot[name="option"]::slotted(*) {

            width: 100%;

            margin-top: 5px;
            margin-bottom: 5px;
            width: 100%;

        }


    
    `;
	}
	render() {
		const invokerClasses = {
			"dropdown-invoker": true,
			may: this.interactive === "on",
			mayNot: this.interactive === "off"
		};
		const disabled = this.interactive === "off" ? "true" : "false";
		return lit.html`

            <div class="dropdown" ${(0, lit_directives_ref_js.ref)(this.dropdownRef)}>
                <thermal-btn 
                    ${(0, lit_directives_ref_js.ref)(this.invokerRef)} 
                    class="${(0, lit_directives_class_map_js.classMap)(invokerClasses)}" 
                    @click=${this.toggle.bind(this)} 
                    variant=${(0, lit_directives_if_defined_js.ifDefined)(this.variant)}
                    size=${(0, lit_directives_if_defined_js.ifDefined)(this.size)}
                    ?plain=${this.plain}
                    disabled=${disabled}
                    tooltip="${this.tooltip !== void 0 ? this.tooltip : ""}"
                    part="invoker"
                >
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">
                        ${this.isOpen === "close" ? lit.html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>` : lit.html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-btn>
                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${(0, lit_directives_ref_js.ref)(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        `;
	}
};
__decorate([(0, lit_decorators_js.queryAssignedElements)({ slot: "option" }), __decorateMetadata("design:type", typeof (_ref$17 = typeof Array !== "undefined" && Array) === "function" ? _ref$17 : Object)], ThermalDropdownElement.prototype, "_options", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalDropdownElement.prototype, "isOpen", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], ThermalDropdownElement.prototype, "interactive", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", typeof (_ref2$6 = typeof BtnVariants$2 !== "undefined" && BtnVariants$2) === "function" ? _ref2$6 : Object)], ThermalDropdownElement.prototype, "variant", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", typeof (_ref3$2 = typeof BtnSizes$2 !== "undefined" && BtnSizes$2) === "function" ? _ref3$2 : Object)], ThermalDropdownElement.prototype, "size", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", Boolean)], ThermalDropdownElement.prototype, "plain", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true
}), __decorateMetadata("design:type", String)], ThermalDropdownElement.prototype, "tooltip", void 0);

//#endregion
//#region src/ui/Dropin.ts
var ThermalDropinElement = class extends AbstractThermalElement {
	static {
		this.styles = lit.css`
    
        :host {
            display: block;
            box-sizing: border-box;

            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);

            

            border: var(--thermal-border-width) var(--thermal-slate)var(--thermal-border-style);
            border-radius: var(--thermal-radius);

            transition: all .5s ease-in-out;

            position: relative;
            overflow: hidden;

            cursor: pointer;
            
        }

        .bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transition: all .3s ease-in-out;

            background: radial-gradient(circle, var(--thermal-slate-light) 0%, var(--thermal-slate) 100%);
        }

        .content {
            position: relative;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            padding: var(--thermal-gap);
            box-sizing: border-box;
        }

        :host {
        
            &:hover,
            &:focus {
            
                .bg {
                    transform: scale(1.05);
                }
            
            }
        
        }

        :host(:hover),
        :host(:focus) {
        
            .bg {
                transform: scale(1.05);
            }

        
        }
    
    `;
	}
	render() {
		return lit.html`
            <div class="bg"></div>
            <div class="content">
                <div>Thermal Dropin Component</div>
            </div>
        `;
	}
};
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalDropinElement.prototype, "prompt", void 0);

//#endregion
//#region src/ui/Expandable.ts
var _ref$16, _ref2$5, _ref3$1;
var ThermalExpandableElement = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.closeIcon = false;
		this.iconStyle = "outline";
		this.expanded = false;
	}
	static {
		this.styles = lit.css`
:host {
    --color: var(--thermal-foreground);
    --background: var(--thermal-slate-light);
    --font-size: var(--thermal-fs);
    --border-color: var(--thermal-slate);
    --border-radius: var(--thermal-radius);
    --display: block;
    --position: relative;
    --width: 100%;
    --padding: var(--thermal-gap);
    --spacing: var(--thermal-gap);
    --box-shadow: none;

    font-size: var(--font-size);
    color: var(--color);
}

aside.content {

    display: none;
    position: var(--position);

    box-sizing: border-box;
    width: var(--width);
    box-sizing: border-box;

    background: var(--background);
    border: var(--thermal-border-width) var(--thermal-border-style) var(--border-color);
    border-radius: var(--border-radius);
    padding: var(--padding);
    box-shadow: var(--box-shadow);

}

:host([expanded="true"]) aside.content {
    display: var(--display);
    margin-top: var(--spacing);
}

thermal-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
}
`;
	}
	render() {
		return lit.html`<thermal-btn
    .variant=${(0, lit_directives_if_defined_js.ifDefined)(this.expanded && this.variantExpanded ? this.variantExpanded : this.variant)}
    .size=${(0, lit_directives_if_defined_js.ifDefined)(this.size)}
    .icon=${(0, lit_directives_if_defined_js.ifDefined)(this.icon)}
    .iconStyle=${this.iconStyle}
    .disabled=${(0, lit_directives_if_defined_js.ifDefined)(this.disabled)}
    .plain=${(0, lit_directives_if_defined_js.ifDefined)(this.plain)}
    .tooltip=${(0, lit_directives_if_defined_js.ifDefined)(this.tooltip)}
    .interactive=${(0, lit_directives_if_defined_js.ifDefined)(this.interactive)}
    @click=${() => this.expanded = !this.expanded}
>${(0, lit_directives_if_defined_js.ifDefined)(this.label)}${this.closeIcon && this.expanded ? lit.html`<thermal-icon
    icon="close"
    variant="micro"
></thermal-icon>` : lit.nothing}</thermal-btn>
<aside class="content">
    <slot></slot>
</aside>
`;
	}
};
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalExpandableElement.prototype, "label", void 0);
__decorate([(0, lit_decorators_js.property)({
	attribute: true,
	reflect: true,
	converter: booleanConverter(false)
}), __decorateMetadata("design:type", Boolean)], ThermalExpandableElement.prototype, "closeIcon", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", typeof (_ref$16 = typeof BtnVariants$1 !== "undefined" && BtnVariants$1) === "function" ? _ref$16 : Object)], ThermalExpandableElement.prototype, "variant", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", typeof (_ref2$5 = typeof BtnVariants$1 !== "undefined" && BtnVariants$1) === "function" ? _ref2$5 : Object)], ThermalExpandableElement.prototype, "variantExpanded", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", typeof (_ref3$1 = typeof BtnSizes$1 !== "undefined" && BtnSizes$1) === "function" ? _ref3$1 : Object)], ThermalExpandableElement.prototype, "size", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalExpandableElement.prototype, "icon", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalExpandableElement.prototype, "iconStyle", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	converter: booleanConverter(false)
}), __decorateMetadata("design:type", Boolean)], ThermalExpandableElement.prototype, "disabled", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	converter: booleanConverter(false)
}), __decorateMetadata("design:type", Boolean)], ThermalExpandableElement.prototype, "interactive", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	attribute: true
}), __decorateMetadata("design:type", Boolean)], ThermalExpandableElement.prototype, "plain", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalExpandableElement.prototype, "tooltip", void 0);
__decorate([(0, lit_decorators_js.property)({
	converter: booleanConverter(false),
	reflect: true
}), __decorateMetadata("design:type", Boolean)], ThermalExpandableElement.prototype, "expanded", void 0);

//#endregion
//#region src/ui/Field.ts
var ThermalFieldElement = class extends lit.LitElement {
	static {
		this.styles = lit.css`
    
        :host {

            display: table-row;
            width: 100%;
            font-size: var( --thermal-fs );

        }

        .cell {

            display: table-cell;
            padding: calc( var( --thermal-gap ) * .5 );
        
        }

        .label {

        }

        .content {

        }

        .hint {
            font-size: calc( var( --thermal-fs-sm ) * .75 );
            padding-top: .5em;
            opacity: .5;
            max-width: 300px;
        }

    `;
	}
	render() {
		return lit.html`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint && lit.html`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `;
	}
};
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalFieldElement.prototype, "label", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalFieldElement.prototype, "hint", void 0);

//#endregion
//#region src/ui/Icon.ts
var ThermalIconElement = class extends AbstractThermalElement {
	connectedCallback() {
		super.connectedCallback();
		this.updateIcon();
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		this.updateIcon();
	}
	updateIcon() {
		if (this.icon === void 0 || this.icon.trim() === "" || this.variant === void 0 || this.variant.trim() === "") {
			this.element = void 0;
			return;
		} else {
			const factory = icons[this.icon && this.icon.trim() !== "" ? this.icon : false];
			if (factory) {
				if (this.variant in factory) {
					const fn = factory[this.variant];
					this.element = fn(this.classes, this.css);
				}
			}
		}
	}
	render() {
		if (!this.element) return lit.nothing;
		else return lit.html`${(0, lit_directives_unsafe_svg_js.unsafeSVG)(this.element)}`;
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalIconElement.prototype, "icon", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalIconElement.prototype, "variant", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalIconElement.prototype, "classes", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalIconElement.prototype, "css", void 0);

//#endregion
//#region src/ui/Loading.ts
var ThermalPosterElement = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.loaded = false;
		this.loading = true;
		this.bordercolor = "var(--thermal-slate)";
		this.bgcolor = "var(--thermal-slate-light)";
		this.textcolor = "var(--thermal-slate-dark)";
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		this.style.borderColor = this.bordercolor;
		this.style.backgroundColor = this.bgcolor;
		this.style.color = this.textcolor;
	}
	static {
		this.styles = lit.css`
    
        :host {
            font-size: var(--thermal-fs);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: .5em;
            width: 100%;
            min-height: 300px;

            border: var(--thermal-border-width) dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);
            
            box-sizing: border-box;
            padding: var(--thermal-gap);
            color: var(--thermal-slate-dark);
            background: var(--thermal-slate-light);
            
        }
    
    `;
	}
	render() {
		const content = [];
		if (this.loading) content.push(lit.html`<thermal-spinner style="display: block"></thermal-spinner>`);
		else {
			content.push(lit.html`<thermal-icon icon="${this.icon}" variant="${this.iconStyle}" style="height: 2em; aspect-ratio: 1 / 1; display: block;"></thermal-icon>`);
			if (this.message) content.push(lit.html`<div>${this.message}</div>`);
		}
		content.push(lit.html`<slot></slot>`);
		return content;
	}
};
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], ThermalPosterElement.prototype, "loaded", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], ThermalPosterElement.prototype, "loading", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalPosterElement.prototype, "icon", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalPosterElement.prototype, "iconStyle", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalPosterElement.prototype, "message", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalPosterElement.prototype, "bordercolor", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalPosterElement.prototype, "bgcolor", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalPosterElement.prototype, "textcolor", void 0);

//#endregion
//#region src/ui/Radio.ts
var ThermalRadioElement = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.type = "radio";
		this.checked = false;
	}
	handleChange(event) {
		this.checked = event.target.checked;
		if (this.onChange) this.onChange(this.checked);
		this.requestUpdate();
	}
	updated(changedProperties) {
		if (changedProperties.has("checked")) {
			const input = this.shadowRoot?.querySelector("input");
			if (input) input.checked = this.checked;
		}
	}
	handleClick(event) {
		event.preventDefault();
		this.checked = !this.checked;
		if (this.onChange) this.onChange(this.checked);
		this.requestUpdate();
	}
	connectedCallback() {
		super.connectedCallback();
	}
	static {
		this.styles = lit.css`
    
        :host {
            display: contents;
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }

        .radio {

            display: flex;
            align-items: center;
            gap: .25em;

            cursor: pointer;

            input,
            span {
                display: block;
            }

            span {
                font-size: .8em;
            }

            input[type="radio"] {
                transform: translateY(-.15em);
                pointer-events: none;
            }
        }

        input {    
            pointer-events: none;
        }
    
    `;
	}
	render() {
		return lit.html`
            <label class="radio" @click=${this.handleClick}>
                <input
                    type="${this.type}"
                    checked="${this.checked}"
                />
                <span><slot></slot></span>
            </label>
        `;
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalRadioElement.prototype, "type", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], ThermalRadioElement.prototype, "checked", void 0);
__decorate([(0, lit_decorators_js.property)({ type: Function }), __decorateMetadata("design:type", Function)], ThermalRadioElement.prototype, "onChange", void 0);

//#endregion
//#region src/ui/Slot.ts
var ThermalSlotElement = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this._slottedElements = [];
	}
	get slottedElements() {
		return Array.from(this.children);
	}
	handleSlotChange(e) {
		this._slottedElements = e.target.assignedElements();
		this.requestUpdate();
	}
	static {
		this.styles = lit.css`

        :host {
            font-size: var( --thermal-fs );
        }
    
        h3 {

            margin: 0 0 .5em 0;
            padding: 0;
            
            font-weight: normal;
            font-size: .7em;
            text-transform: uppercase;

            color: var(--thermal-slate);
            
            display: flex;
            align-items: center;
            gap: .5em;

            &::after {
                content: "";
                flex: 1;
                height: var(--thermal-border-width);
                background: var(--thermal-slate-light);
            }

        }

        .content {
            display: flex;
            flex-wrap: wrap;
            gap: .5em;
        }

        :host(:hover) {
            h3 {
                color: var(--thermal-foreground);
                &::after {
                    background: var(--thermal-slate);
                }
            }


        }
    
    `;
	}
	render() {
		if (this.slottedElements.length === 0) return lit.nothing;
		return lit.html`<section>

            ${this.label ? lit.html`<h3>${this.label}</h3>` : lit.nothing}
            <div class="content">
                <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
        </section>
        `;
	}
};
__decorate([(0, lit_decorators_js.property)(), __decorateMetadata("design:type", String)], ThermalSlotElement.prototype, "label", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Array)], ThermalSlotElement.prototype, "_slottedElements", void 0);

//#endregion
//#region src/ui/Spinner.ts
var ThermalSpinnerElement = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.color = "var(--thermal-primary)";
	}
	static {
		this.shadowRootOptions = {
			...lit.LitElement.shadowRootOptions,
			mode: "open"
		};
	}
	static {
		this.styles = lit.css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            text-align: center;
        }
        .spinner {
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 5px solid var(--thermal-primary);
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .message {
            margin-top: var(--thermal-gap);
            color: var(--thermal-slate-dark);
        }
    `;
	}
	render() {
		return lit.html`
            <div class="spinner" style="border-color: ${this.color}; border-top-color: transparent;"></div>
            ${this.message ? lit.html`<div class="message">${this.message}</div>` : lit.nothing}
        `;
	}
};
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalSpinnerElement.prototype, "message", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalSpinnerElement.prototype, "color", void 0);

//#endregion
//#region src/ui/Tip.ts
var ThermalTipElement = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.icon = "bulb";
		this.iconStyle = "outline";
	}
	static {
		this.styles = lit.css`
:host {

    --color: var(--thermal-foreground);
    --background: var(--thermal-slate-light);
    --font-size: var(--thermal-fs);
    --border-color: var(--thermal-slate);
    --icon-size: 1.5em;
    --radius: var(--thermal-radius);
    --padding: .5em;
    --spacing: var(--thermal-gap);
    --align-items: flex-start;

    font-size: var(--font-size);
    color: var(--color);
    background: var(--background);
    
    border: var(--thermal-border-width) var(--thermal-border-style) var(--border-color);
    border-radius: var(--radius);

    width: 100%;
    box-sizing: border-box;
    padding: var(--padding);

    display: flex;
    align-items: var(--align-items);
    gap: var(--spacing);

}

thermal-icon {
    display: block;
    width: var(--icon-size);
    height: var(--icon-size);
    color: var(--border-color);
}

:host( [variant="info"] ) {
    --background: #bed5fdff;
    --color: #0e46a1;
    --border-color: var(--color);
}

:host([variant="error"]) {
    --background: #e2b1b1ff;
    --color: #a10e0e;
    --border-color: var(--color);
}
`;
	}
	render() {
		return lit.html`<thermal-icon 
    icon=${this.icon} 
    variant=${this.iconStyle}
></thermal-icon>
<div class="tip-content">
    <slot></slot>
</div>`;
	}
};
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalTipElement.prototype, "icon", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalTipElement.prototype, "iconStyle", void 0);

//#endregion
//#region src/controllers/AbstractReactiveController.ts
var AbstractReactiveController = class {
	constructor(host) {
		this.host = host;
		host.addController(this);
	}
	/** Logs anything using the host's logging mechanism. Adds the controller's className as the first argument. */
	log(...args) {
		this.host.log(this.constructor.name, ...args);
	}
};

//#endregion
//#region src/hierarchy/controllers/AbstractHierarchyController.ts
/** Common internal state for host elements that should be only internal states. */
const INTERNAL_STATE_DECLARATION = {
	reflect: false,
	state: true
};
/** Abstract base class for controllers related to the hierarchy of `@labirthermal/core`.  */
var AbstractHierarchyController = class extends AbstractReactiveController {
	/** Retrieve the default slug from the host element, falling back to the element UUID. Should be called only in host connected. */
	_getDefaultSlugFromHost(primaryAttributeName) {
		return this.host.getAttribute(primaryAttributeName) ?? this.host.getAttribute("slug") ?? this.UUID;
	}
};

//#endregion
//#region src/hierarchy/controllers/GroupController.ts
const groupControllerContext = (0, _lit_context.createContext)("group-controller-context");
var GroupController = class extends AbstractHierarchyController {
	get UUID() {
		return this._UUID;
	}
	static {
		this.HOST_PROPERTIES = {
			managerController: INTERNAL_STATE_DECLARATION,
			registryController: INTERNAL_STATE_DECLARATION,
			groupSlug: {
				type: String,
				reflect: true,
				attribute: "group-slug"
			},
			groupObject: INTERNAL_STATE_DECLARATION,
			autoclearGroup: {
				type: Boolean,
				reflect: true,
				attribute: "autoclear-group",
				converter: booleanConverter(true)
			},
			groupController: INTERNAL_STATE_DECLARATION
		};
	}
	get groupObject() {
		return this.host.groupObject;
	}
	get slug() {
		return this.host.groupSlug;
	}
	get autoclearGroup() {
		return this.host.autoclearGroup;
	}
	constructor(host) {
		super(host);
		this._UUID = host.UUID + "_group-controller";
		this.groupControllerContextProvider = new _lit_context.ContextProvider(this.host, {
			context: groupControllerContext,
			initialValue: this
		});
		this.groupObjectContextProvider = new _lit_context.ContextProvider(this.host, { context: groupContext });
	}
	hostConnected() {
		const slug = this._getDefaultSlugFromHost("group-slug");
		this.host.groupSlug = slug;
		this.host.groupObject = this.host.registryController.addOrGetGroup(slug);
		this.groupObjectContextProvider.setValue(this.host.groupObject);
		this.log(this.host.groupObject);
	}
	hostDisconnected() {
		if (this.autoclearGroup && this.host.groupObject) this.host.registryController.removeGroup(this.host.groupObject);
	}
	hostUpdatedWatcher(value) {}
};

//#endregion
//#region src/hierarchy/providers/getters.ts
const defaultManager = new _labirthermal_core.ThermalManager();
window.Thermal = { managers: /* @__PURE__ */ new Map() };
window.Thermal.managers.set("default", defaultManager);
/** Create or get a manager instance from the global window object. */
const createOrGetManager = (slug, options) => {
	if (slug === void 0) return window.Thermal.managers.get("default");
	else if (window.Thermal.managers.has(slug)) return window.Thermal.managers.get(slug);
	else {
		const manager = new _labirthermal_core.ThermalManager(void 0, options);
		window.Thermal.managers.set(slug, manager);
		return manager;
	}
};
/** Remove the manager along with all its contents. */
const removeManager = (manager) => {
	let slug = void 0;
	window.Thermal.managers.forEach((m, key) => {
		if (m.id === manager.id) slug = key;
	});
	console.log("removing", manager);
	if (slug !== void 0) {
		console.log("found and removing", slug);
		const foundManager = window.Thermal.managers.get(slug);
		if (foundManager) {
			foundManager.forEveryRegistry((registry) => foundManager.removeRegistry(registry.id));
			window.Thermal.managers.delete(slug);
		}
	}
};

//#endregion
//#region src/utils/converters/paletteConverter.ts
/** A unified converter for thermal palettes. Recommended usage:
* @example
* ```ts
* import { paletteConverter } from "path/to/paletteConverter";
* class MyComponent extends LitElement {
*      @property({
*          type: String,
*          reflect: true,
*          converter: paletteConverter,
*      })
*      public palette: AvailableThermalPalette = "iron"; // IRON is used as default
* }
* ```
*/
const paletteConverter = {
	fromAttribute: (value) => {
		if (value === void 0 || value === null || typeof value !== "string" || value === "" || !(value in _labirthermal_core.ThermalPalettes)) return "iron";
		return value;
	},
	toAttribute: (value) => value
};

//#endregion
//#region src/hierarchy/controllers/ManagerController.ts
/** Exposes the main manager controller with all its setters and direct access to the host element values. */
const managerControllerContext = (0, _lit_context.createContext)("manager-controller-context");
var ManagerController = class extends AbstractHierarchyController {
	get UUID() {
		return this._UUID;
	}
	static {
		this.HOST_PROPERTIES = {
			managerSlug: {
				type: String,
				reflect: false,
				attribute: "manager-slug"
			},
			managerObject: INTERNAL_STATE_DECLARATION,
			managerController: INTERNAL_STATE_DECLARATION,
			palette: {
				type: String,
				reflect: true,
				attribute: "palette",
				converter: paletteConverter
			},
			advancedPalettes: {
				reflect: true,
				attribute: "advanced-palettes",
				converter: booleanConverter(false)
			},
			smoothThermograms: {
				reflect: true,
				attribute: "smooth-thermograms",
				converter: booleanConverter(false)
			},
			smoothGraph: {
				reflect: true,
				attribute: "smooth-graph",
				converter: booleanConverter(false)
			},
			tool: {
				type: String,
				reflect: true,
				attribute: "tool"
			}
		};
	}
	/** Accessor to the manageer slug from the host */
	get slug() {
		return this.host.managerSlug;
	}
	/** Accessor to the manager object from the host */
	get managerObject() {
		return this.host.managerObject;
	}
	/** Palette property value accessed from the host element */
	get palette() {
		return this.host.palette;
	}
	/** Smooth thermograms flag accessed from the host element */
	get smoothThermograms() {
		return this.host.smoothThermograms;
	}
	/** Tool property accessed from the host element */
	get tool() {
		return this.host.tool;
	}
	get toolObject() {
		return this.managerObject.tool.value;
	}
	/** Graph smoothing flag accessed from the host element */
	get smoothGraph() {
		return this.host.smoothGraph;
	}
	constructor(host) {
		super(host);
		this._UUID = host.UUID + "_manager-controller";
		this.managerControllerContextProvider = new _lit_context.ContextProvider(this.host, {
			context: managerControllerContext,
			initialValue: this
		});
		this.managerObjectContextPtovider = new _lit_context.ContextProvider(this.host, { context: managerContext });
		this.paletteContextProvider = new _lit_context.ContextProvider(this.host, { context: managerPaletteContext });
		this.advancedPalettesContextProvider = new _lit_context.ContextProvider(this.host, { context: managerAdvancedPalettesContext });
		this.smoothThermogramsContextProvider = new _lit_context.ContextProvider(this.host, { context: managerSmoothContext });
		this.toolContextProvider = new _lit_context.ContextProvider(this.host, { context: toolContext });
		this.smoothGraphContextProvider = new _lit_context.ContextProvider(this.host, { context: managerGraphFunctionContext });
	}
	hostConnected() {
		const slug = this._getDefaultSlugFromHost("manager-slug");
		this.host.managerSlug = slug;
		this.host.managerObject = createOrGetManager(slug);
		this.managerObjectContextPtovider.setValue(this.host.managerObject);
		const initialPaletteValue = paletteConverter.fromAttribute(this.host.palette);
		this.setPalette(initialPaletteValue);
		this.managerObject.palette.addListener(this.UUID, this.setPalette.bind(this));
		this.setAdvancedPalettes(this.host.advancedPalettes);
		this.setSmoothThermograms(this.host.smoothThermograms);
		this.managerObject.smooth.addListener(this.UUID, this.setSmoothThermograms.bind(this));
		this.setSmoothGraph(this.host.smoothGraph);
		this.managerObject.graphSmooth.addListener(this.UUID, this.setSmoothGraph.bind(this));
		this._setToolByKey(this.host.tool);
		this.managerObject.tool.addListener(this.UUID, this.setTool.bind(this));
	}
	hostDisconnected() {
		this.managerObject.palette.removeListener(this.UUID);
		this.managerObject.smooth.removeListener(this.UUID);
		this.managerObject.graphSmooth.removeListener(this.UUID);
		this.managerObject.tool.removeListener(this.UUID);
	}
	hostUpdate() {
		if (this.host.palette && this.host.palette !== this.managerObject.palette.value) this.setPalette(this.host.palette);
		if (this.host.advancedPalettes && this.host.advancedPalettes !== this.advancedPalettesContextProvider.value) this.setAdvancedPalettes(this.host.advancedPalettes);
	}
	hostUpdatedWatcher(value) {
		if (!value) return;
		if (value.has("palette")) this.setPalette(this.host.palette);
		if (value.has("advancedPalettes")) this.setAdvancedPalettes(this.host.advancedPalettes);
		if (value.has("smoothThermograms")) this.setSmoothThermograms(this.host.smoothThermograms);
		if (value.has("smoothGraph")) this.setSmoothGraph(this.host.smoothGraph);
		if (value.has("tool")) this._setToolByKey(this.host.tool);
	}
	/** 
	* Create or get a registry by its slug from the internal manager object. 
	*/
	createRegistry(slug) {
		return this.managerObject.addOrGetRegistry(slug);
	}
	_paletteStringToContextValue(palette) {
		return {
			key: palette,
			data: _labirthermal_core.ThermalPalettes[palette]
		};
	}
	/** 
	* This is the recommended way to set the advanced palettes flag - updates the value in the context provider and the host element. All updates are performed only when the new value differs from the current one. 
	*/
	setAdvancedPalettes(value) {
		if (this.host.advancedPalettes !== value) this.host.advancedPalettes = value;
		if (this.advancedPalettesContextProvider.value !== value) this.advancedPalettesContextProvider.setValue(value);
	}
	/** 
	* This is the recommended way to set the palette - updates the value in the core manager object, the context provider, and the host element. All updates are performed only when the new value differs from the current one. 
	*/
	setPalette(value) {
		const sanitizedValue = paletteConverter.fromAttribute(value);
		if (this.managerObject.palette.value !== sanitizedValue) this.managerObject.palette.setPalette(sanitizedValue);
		if (!this.paletteContextProvider.value) this.paletteContextProvider.setValue(this._paletteStringToContextValue(sanitizedValue));
		else if (this.paletteContextProvider.value.key !== sanitizedValue) this.paletteContextProvider.setValue(this._paletteStringToContextValue(sanitizedValue));
		if (this.host.palette !== sanitizedValue) this.host.palette = sanitizedValue;
	}
	/** 
	* This is the recommended way to set the smooth thermograms flag - updates the value in the core manager object, the context provider, and the host element. All updates are performed only when the new value differs from the current one. 
	*/
	setSmoothThermograms(value) {
		if (this.host.smoothThermograms !== value) this.host.smoothThermograms = value;
		if (this.smoothThermogramsContextProvider.value !== value) this.smoothThermogramsContextProvider.setValue(value);
		if (this.managerObject.smooth.value !== value) this.managerObject.smooth.setSmooth(value);
	}
	/** 
	* This is the recommended way to set the tool - updates the value in the core manager object, the context provider, and the host element. All updates are performed only when the new value differs from the current one. 
	*/
	setTool(value) {
		if (value && value.key !== this.host.tool) this.host.tool = value.key;
		if (this.toolContextProvider.value !== value) this.toolContextProvider.setValue(value);
		if (this.managerObject.tool.value !== value) this.managerObject.tool.selectTool(value);
	}
	_setToolByKey(value) {
		const toolObject = this._toolStringToObject(value);
		this.setTool(toolObject);
	}
	_toolStringToObject(value = "inspect") {
		const selectedTool = this.managerObject.tool.tools[value];
		if (!selectedTool) this.managerObject.tool.tools["inspect"];
		return selectedTool;
	}
	/**
	* This is the recommended way to set the smooth graph option - updates the value and the context provider. All updates are performed only when the new value differs from the current one.
	*/
	setSmoothGraph(value) {
		if (this.host.smoothGraph !== value) this.host.smoothGraph = value;
		if (this.smoothGraphContextProvider.value !== value) this.smoothGraphContextProvider.setValue(value);
	}
};

//#endregion
//#region src/hierarchy/consumers/AbstractManagerConsumer.ts
var _ref$15;
var AbstractManagerConsumer = class extends AbstractThermalElement {
	/** @deprecated Use the manager controller instead */
	get manager() {
		return this.managerController.managerObject;
	}
};
__decorate([(0, _lit_context.consume)({
	context: managerControllerContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref$15 = typeof ManagerController !== "undefined" && ManagerController) === "function" ? _ref$15 : Object)], AbstractManagerConsumer.prototype, "managerController", void 0);

//#endregion
//#region src/hierarchy/controllers/RegistryController.ts
const registryControllerContext = (0, _lit_context.createContext)("registry-controller-context");
var RegistryController = class extends AbstractHierarchyController {
	get UUID() {
		return this._UUID;
	}
	static {
		this.HOST_PROPERTIES = {
			managerController: INTERNAL_STATE_DECLARATION,
			registrySlug: {
				type: String,
				reflect: false,
				attribute: "registry-slug"
			},
			registryObject: INTERNAL_STATE_DECLARATION,
			registryController: INTERNAL_STATE_DECLARATION,
			opacity: {
				type: Number,
				reflect: true,
				attribute: "opacity"
			},
			min: {
				type: Number,
				reflect: false,
				state: true
			},
			max: {
				type: Number,
				reflect: false,
				state: true
			},
			from: {
				type: Number,
				reflect: true,
				attribute: "from"
			},
			to: {
				type: Number,
				reflect: true,
				attribute: "to"
			},
			loading: {
				type: Boolean,
				attribute: "is-loading",
				reflect: true
			}
		};
	}
	get registryObject() {
		return this.host.registryObject;
	}
	get slug() {
		return this.host.registrySlug;
	}
	get opacity() {
		return this.host.opacity;
	}
	get min() {
		return this.host.min;
	}
	get max() {
		return this.host.max;
	}
	get from() {
		return this.host.from;
	}
	get to() {
		return this.host.to;
	}
	get loading() {
		return this.host.loading;
	}
	constructor(host) {
		super(host);
		this._UUID = host.UUID + "_registry-controller";
		this.registryControllerContextProvider = new _lit_context.ContextProvider(this.host, {
			context: registryControllerContext,
			initialValue: this
		});
		this.registryObjectContextProvider = new _lit_context.ContextProvider(this.host, { context: registryContext });
		this.opacityContextProvider = new _lit_context.ContextProvider(this.host, { context: registryOpacityContext });
		this.minContextProvider = new _lit_context.ContextProvider(this.host, { context: registryMinContext });
		this.maxContextProvider = new _lit_context.ContextProvider(this.host, { context: registryMaxContext });
		this.fromContextProvider = new _lit_context.ContextProvider(this.host, { context: registryRangeFromContext });
		this.toContextProvider = new _lit_context.ContextProvider(this.host, { context: registryRangeToContext });
		this.loadingContextProvider = new _lit_context.ContextProvider(this.host, { context: registryLoadingContext });
		this.highlightContextProvider = new _lit_context.ContextProvider(this.host, { context: registryHighlightContext });
	}
	hostConnected() {
		const slug = this._getDefaultSlugFromHost("registry-slug");
		this.host.registrySlug = slug;
		this.host.registryObject = this.host.managerController.createRegistry(slug);
		this.registryObjectContextProvider.setValue(this.host.registryObject);
		this.setOpacity(this.host.opacity ?? 1);
		this.registryObject.opacity.addListener(this.UUID, this.setOpacity.bind(this));
		this.registryObject.minmax.addListener(this.UUID, (value) => {
			if (value === void 0) {
				this.host.min = void 0;
				this.host.max = void 0;
				this.minContextProvider.setValue(void 0);
				this.maxContextProvider.setValue(void 0);
			} else {
				if (value.min !== this.host.min) this.host.min = value.min;
				if (value.max !== this.host.max) this.host.max = value.max;
				if (value.min !== this.minContextProvider.value) this.minContextProvider.setValue(value.min);
				if (value.max !== this.maxContextProvider.value) this.maxContextProvider.setValue(value.max);
			}
		});
		this.registryObject.range.addListener(this.UUID, this._rangeListener.bind(this));
		this.registryObject.loading.addListener(this.UUID, this._loadingListener.bind(this));
	}
	hostDisconnected() {
		this.registryObject.opacity.removeListener(this.UUID);
		this.registryObject.minmax.removeListener(this.UUID);
		this.registryObject.range.removeListener(this.UUID);
		this.registryObject.loading.removeListener(this.UUID);
	}
	hostUpdatedWatcher(value) {
		if (value.has("opacity")) this.setOpacity(this.host.opacity ?? 1);
		if (value.has("from") || value.has("to")) if (this.host.from === void 0 || this.host.to === void 0) this._clearRange();
		else this.setRange(this.host.from, this.host.to);
	}
	addOrGetGroup(slug) {
		return this.registryObject.groups.addOrGetGroup(slug);
	}
	removeGroup(group) {
		this.registryObject.groups.removeGroup(group.id);
	}
	/**
	* This is the recommended way to set the opacity. Calling this method will 
	* - update the context provider element's attribute `opacity`
	* - set the internal value to `@labirthermal/core`
	* - update the context provider
	*/
	setOpacity(value) {
		const safeValue = isNaN(value) ? 1 : Math.max(0, Math.min(1, value));
		if (this.host.opacity !== safeValue) this.host.opacity = safeValue;
		if (this.registryObject.opacity.value !== safeValue) this.registryObject.opacity.imposeOpacity(safeValue);
		if (this.opacityContextProvider.value !== safeValue) this.opacityContextProvider.setValue(safeValue);
	}
	setRange(from, to) {
		if (this.registryObject.range.value === void 0 || this.registryObject.range.value.from !== from || this.registryObject.range.value.to !== to) this.registryObject.range.imposeRange({
			from,
			to
		});
		const currentInternalRange = this.registryObject.range.value;
		if (currentInternalRange === void 0) this._clearRange();
		else {
			this.host.from = currentInternalRange.from;
			this.host.to = currentInternalRange.to;
			this.fromContextProvider.setValue(currentInternalRange.from);
			this.toContextProvider.setValue(currentInternalRange.to);
		}
	}
	setRangeFull() {
		if (this.host.min !== void 0 && this.host.max !== void 0) this.setRange(this.host.min, this.host.max);
	}
	_rangeListener(value) {
		if (value !== void 0) this.setRange(value.from, value.to);
		else this._clearRange();
	}
	_clearRange() {
		this.host.from = void 0;
		this.host.to = void 0;
		this.fromContextProvider.setValue(void 0);
		this.toContextProvider.setValue(void 0);
	}
	_loadingListener(value) {
		if (value !== this.host.loading) this.host.loading = value;
		if (value !== this.loadingContextProvider.value) this.loadingContextProvider.setValue(value);
	}
	setHighlight(value) {
		if (this.highlightContextProvider.value !== value) this.highlightContextProvider.setValue(value);
	}
};

//#endregion
//#region src/hierarchy/consumers/AbstractRegistryConsumer.ts
var _ref$14;
var AbstractRegistryConsumer = class extends AbstractManagerConsumer {
	/** @deprecated Use registryController instead */
	get registry() {
		return this.registryController.registryObject;
	}
};
__decorate([(0, _lit_context.consume)({
	context: registryControllerContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref$14 = typeof RegistryController !== "undefined" && RegistryController) === "function" ? _ref$14 : Object)], AbstractRegistryConsumer.prototype, "registryController", void 0);

//#endregion
//#region src/hierarchy/consumers/AbstractGroupConsumer.ts
var _ref$13;
var AbstractGroupConsumer = class extends AbstractRegistryConsumer {
	/** @deprecated Use groupController instead */
	get group() {
		return this.groupController.groupObject;
	}
};
__decorate([(0, _lit_context.consume)({
	context: groupControllerContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref$13 = typeof GroupController !== "undefined" && GroupController) === "function" ? _ref$13 : Object)], AbstractGroupConsumer.prototype, "groupController", void 0);

//#endregion
//#region src/hierarchy/controllers/FileAnalysisSynchronisator.ts
var FileAnalysisSynchronisator = class FileAnalysisSynchronisator {
	/** Lit.js is using null for removed attributes - we need normalize the value to either string or undefined. */
	static normalize(value) {
		return value?.trim() || void 0;
	}
	get UUID_LISTENER() {
		return this._controller.UUID + "_" + this._attribute;
	}
	get _attributeValue() {
		return this._controller.host[this._attribute];
	}
	set _attributeValue(value) {
		if (value !== this._controller.host[this._attribute]) this._controller.host[this._attribute] = value;
	}
	get _mountKey() {
		return `${this._controller.UUID}_slot_${this._slotNumber}`;
	}
	get _internalSerialized() {
		return this._slotObject?.serialized;
	}
	get _slotObject() {
		return this._fileObject?.slots.getSlot(this._slotNumber);
	}
	constructor(_controller, _slotNumber) {
		this._controller = _controller;
		this._slotNumber = _slotNumber;
		this._attribute = `analysis${this._slotNumber}`;
	}
	/** Enables the listeners and internal objects necessary for synchronisation of the file analysis slot */
	fileAssigned(instance, coreWins = false) {
		this._fileObject = instance;
		instance.slots.getOnSerializeManager(this._slotNumber)?.set(this._controller.UUID, (value) => {
			if (value !== this._attributeValue) this._attributeValue = value;
		});
		const syncAction = () => {
			const attribute = FileAnalysisSynchronisator.normalize(this._attributeValue);
			if (coreWins || attribute === void 0) this._attributeValue = this._slotObject?.serialized;
			else this._applyToCore(attribute);
		};
		if (instance.dom?.built) syncAction();
		else instance.onMount.set(this._mountKey, () => {
			syncAction();
		});
	}
	/** Deactivates the listeners and internal objects - stopping the synchronisation of analyses */
	fileUnassigned() {
		this._fileObject?.slots.getOnSerializeManager(this._slotNumber)?.delete(this._controller.UUID);
		this._fileObject?.onMount.delete(this._mountKey);
		this._fileObject = void 0;
	}
	/** Looks for the changed attributes of the host and propagates them to internal state if necessary */
	handleHostUpdate(changedValues) {
		if (changedValues.has(this._attribute)) {
			const value = FileAnalysisSynchronisator.normalize(this._attributeValue);
			if (this._internalSerialized !== value) {
				if (this._fileObject?.dom?.built) this._applyToCore(value);
			}
		}
	}
	/** Very carrefully propagate the host attribute value to the analysis slot - this method manipulates the internal state of @labirthermal/core */
	_applyToCore(value) {
		const file = this._fileObject;
		if (!file) return;
		const slot = this._slotObject;
		if (value === void 0) {
			if (slot) file.slots.removeSlotAndAnalysis(this._slotNumber);
		} else if (slot) {
			slot.recieveSerialized(value);
			const canvasRoot = file.dom?.canvasLayer?.getLayerRoot();
			if (canvasRoot && !canvasRoot.contains(slot.analysis.layerRoot)) canvasRoot.appendChild(slot.analysis.layerRoot);
		} else file.slots.createAnalysisFromSerialized(value, this._slotNumber)?.setSelected();
	}
};

//#endregion
//#region src/hierarchy/controllers/FileAnalysisSynchronisators.ts
var FileAnalysisSynchronisators = class {
	constructor(_controller) {
		this._controller = _controller;
		this._synchronisators = [];
		for (let i = 1; i <= 7; i++) this._synchronisators.push(new FileAnalysisSynchronisator(this._controller, i));
	}
	_forEach(callback) {
		for (const synchronisator of this._synchronisators) callback(synchronisator);
	}
	/** Every synchronisator object will look into the changed properties and update its internal state accordingly */
	handleHostUpdate(changedValues) {
		this._forEach((synchronisator) => synchronisator.handleHostUpdate(changedValues));
	}
	/** Every synchronisator will be notified that a file has been assigned */
	handleFileAssigned(instance, coreWins = false) {
		this._forEach((synchronisator) => synchronisator.fileAssigned(instance, coreWins));
	}
	/** Every synchronisator will be notified that a file has been removed */
	handleFileUnassigned() {
		this._forEach((synchronisator) => synchronisator.fileUnassigned());
	}
};

//#endregion
//#region src/hierarchy/controllers/FileController.ts
const fileControllerContext = (0, _lit_context.createContext)("file-controller-context");
const ANALYSIS_STATE_DECLARATION = {
	type: String,
	reflect: true
};
var FileController = class extends AbstractHierarchyController {
	get UUID() {
		return this._UUID;
	}
	static {
		this.HOST_PROPERTIES = {
			managerController: INTERNAL_STATE_DECLARATION,
			registryController: INTERNAL_STATE_DECLARATION,
			groupController: INTERNAL_STATE_DECLARATION,
			fileController: INTERNAL_STATE_DECLARATION,
			file: INTERNAL_STATE_DECLARATION,
			failure: INTERNAL_STATE_DECLARATION,
			ms: {
				type: Number,
				reflect: true,
				attribute: "ms"
			},
			playbackSpeed: {
				type: Number,
				reflect: true,
				attribute: "speed"
			},
			analysis1: ANALYSIS_STATE_DECLARATION,
			analysis2: ANALYSIS_STATE_DECLARATION,
			analysis3: ANALYSIS_STATE_DECLARATION,
			analysis4: ANALYSIS_STATE_DECLARATION,
			analysis5: ANALYSIS_STATE_DECLARATION,
			analysis6: ANALYSIS_STATE_DECLARATION,
			analysis7: ANALYSIS_STATE_DECLARATION,
			autoHighlight: {
				type: Boolean,
				reflect: true,
				attribute: "autohighlight"
			}
		};
	}
	get fileObject() {
		return this.host.file;
	}
	get failure() {
		return this.host.failure;
	}
	get ms() {
		return this.host.ms;
	}
	get playbackSpeed() {
		return this.host.playbackSpeed;
	}
	get analysis1() {
		return this.host.analysis1;
	}
	get analysis2() {
		return this.host.analysis2;
	}
	get analysis3() {
		return this.host.analysis3;
	}
	get analysis4() {
		return this.host.analysis4;
	}
	get analysis5() {
		return this.host.analysis5;
	}
	get analysis6() {
		return this.host.analysis6;
	}
	get analysis7() {
		return this.host.analysis7;
	}
	get autoHighlight() {
		return this.host.autoHighlight;
	}
	get ready() {
		return this.readyContextProvider.value;
	}
	get recording() {
		return this.fileRecordingContextProvider.value;
	}
	get playing() {
		return this.filePlayingContextProvider.value;
	}
	get mayStop() {
		return this.fileMayStopContextProvider.value;
	}
	get cursor() {
		return this.fileCursorContextProvider.value;
	}
	get currentFrame() {
		return this.fileCurrentFrameContextProvider.value;
	}
	get analyses() {
		return this.fileAnalysesContextProvider.value;
	}
	get duration() {
		return this.fileDurationContextProvider.value;
	}
	constructor(host) {
		super(host);
		this.onLoadingStart = new _labirthermal_core.CallbacksManager();
		this.onSuccess = new _labirthermal_core.CallbacksManager();
		this.onFailure = new _labirthermal_core.CallbacksManager();
		this._analysisSynchronisators = new FileAnalysisSynchronisators(this);
		this._UUID = host.UUID + "_file-controller";
		this.fileControllerContextProvider = new _lit_context.ContextProvider(this.host, {
			context: fileControllerContext,
			initialValue: this
		});
		this.fileContextProvider = new _lit_context.ContextProvider(this.host, { context: fileContext });
		this.fileFailureContextProvider = new _lit_context.ContextProvider(this.host, { context: fileFailureContext });
		this.readyContextProvider = new _lit_context.ContextProvider(this.host, {
			context: readyContext,
			initialValue: false
		});
		this.fileDurationContextProvider = new _lit_context.ContextProvider(this.host, { context: durationContext });
		this.fileCurrentFrameContextProvider = new _lit_context.ContextProvider(this.host, { context: fileCurrentFrameContext });
		this.fileCursorContextProvider = new _lit_context.ContextProvider(this.host, { context: fileCursorContext });
		this.fileMsContextProvider = new _lit_context.ContextProvider(this.host, { context: fileMsContext });
		this.filePlaybackSpeedContextProvider = new _lit_context.ContextProvider(this.host, { context: filePlaybackSpeedContext });
		this.filePlayingContextProvider = new _lit_context.ContextProvider(this.host, { context: filePlayingContext });
		this.fileRecordingContextProvider = new _lit_context.ContextProvider(this.host, { context: fileRecordingContext });
		this.fileMayStopContextProvider = new _lit_context.ContextProvider(this.host, { context: filaMayStopContext });
		this.fileAnalysesContextProvider = new _lit_context.ContextProvider(this.host, { context: fileAnalysisListContext });
		this._propagateHighlightCache = (event) => this._propagateHighlight();
		this._unpropagateHighlightCache = (event) => this._unpropagateHighlight();
	}
	hostConnected() {
		this.host.addEventListener("mouseenter", this._propagateHighlightCache);
		this.host.addEventListener("focus", this._propagateHighlightCache);
		this.host.addEventListener("mouseleave", this._unpropagateHighlightCache);
		this.host.addEventListener("blur", this._unpropagateHighlightCache);
		if (this._attached) {
			this._propagateContexts(this._attached);
			this._bindListeners(this._attached, true);
		}
	}
	hostDisconnected() {
		this.host.removeEventListener("mouseenter", this._propagateHighlightCache);
		this.host.removeEventListener("focus", this._propagateHighlightCache);
		this.host.removeEventListener("mouseleave", this._unpropagateHighlightCache);
		this.host.removeEventListener("blur", this._unpropagateHighlightCache);
		this._unpropagateHighlight();
		if (this._attached) this._unbindListeners(this._attached);
	}
	hostUpdatedWatcher(value) {
		if (value.has("file")) this._syncAssignment();
		this._analysisSynchronisators.handleHostUpdate(value);
		if (value.has("ms")) this.setMs(this.host.ms);
		if (value.has("playbackSpeed") && this.host.file && this.host.file.timeline.isSequence) {
			if (this.host.playbackSpeed !== this.host.file.timeline.playbackSpeed) this.host.file.timeline.playbackSpeed = this.host.playbackSpeed;
		}
	}
	_propagateContexts(instance) {
		this.fileContextProvider.setValue(instance);
		this.readyContextProvider.setValue(true);
		this.fileDurationContextProvider.setValue({
			ms: instance.timeline.duration,
			time: instance.timeline.formatDuration(instance.timeline.duration)
		});
		this._propagateInstanceCurrentFrame(instance);
		this._propagateInstanceAnalysesArray(instance);
		this.fileMsContextProvider.setValue(instance.timeline.currentMs);
		this.filePlaybackSpeedContextProvider.setValue(instance.timeline.playbackSpeed);
		this.filePlayingContextProvider.setValue(instance.timeline.isPlaying);
		this.fileMayStopContextProvider.setValue(instance.recording.mayStop);
		this.fileRecordingContextProvider.setValue(instance.recording.value);
	}
	_resetAllContexts() {
		this.readyContextProvider.setValue(false);
		this.fileDurationContextProvider.setValue(void 0);
		this.fileCurrentFrameContextProvider.setValue(void 0);
		this.fileAnalysesContextProvider.setValue([]);
		this.fileContextProvider.setValue(void 0);
		this.fileRecordingContextProvider.setValue(false);
		this.filePlayingContextProvider.setValue(false);
		this.fileMayStopContextProvider.setValue(true);
		this.fileMsContextProvider.setValue(0);
		this.fileCursorContextProvider.setValue(void 0);
	}
	_syncAssignment() {
		const next = this.host.file;
		if (next === this._attached) return;
		const previous = this._attached;
		if (previous) this._detach(previous);
		if (next) this._attach(next, previous !== void 0);
		else {
			this._resetAllContexts();
			this.host.ms = 0;
		}
	}
	_attach(instance, isReplacement) {
		this._attached = instance;
		this.fileContextProvider.setValue(instance);
		this.host.failure = void 0;
		this.fileFailureContextProvider.setValue(void 0);
		if (this.host.playbackSpeed !== void 0) instance.timeline.playbackSpeed = this.host.playbackSpeed;
		this._propagateContexts(instance);
		this._bindListeners(instance);
		if (!isReplacement && this.host.ms > 0 && instance.timeline.isSequence) this.setMs(this.host.ms);
		else this.host.ms = instance.timeline.currentMs;
		this.onSuccess.call(instance);
	}
	_detach(instance) {
		this._unbindListeners(instance);
		this._unpropagateHighlight();
		this._attached = void 0;
		instance.unmountFromDom();
	}
	_bindListeners(instance, coreWins = false) {
		instance.timeline.callbacksPlay.set(this.UUID, () => {
			this.filePlayingContextProvider.setValue(true);
		});
		instance.timeline.callbacksPause.set(this.UUID, () => {
			this.filePlayingContextProvider.setValue(false);
		});
		instance.timeline.callbacksStop?.set(this.UUID, () => {
			this.filePlayingContextProvider.setValue(false);
		});
		instance.timeline.callbacksEnd?.set(this.UUID, () => {
			this.filePlayingContextProvider.setValue(false);
		});
		instance.timeline.callbacksChangeFrame.set(this.UUID, (frame) => {
			const value = {
				ms: frame.relative,
				time: instance.timeline.currentTime,
				percentage: instance.timeline.currentPercentage,
				index: frame.index,
				absolute: frame.absolute
			};
			this.fileCurrentFrameContextProvider.setValue(value);
			this.host.ms = frame.relative;
			this.fileMsContextProvider.setValue(frame.relative);
		});
		instance.timeline.callbackdPlaybackSpeed.set(this.UUID, (speed) => {
			this.host.playbackSpeed = speed;
			this.filePlaybackSpeedContextProvider.setValue(speed);
		});
		instance.recording.callbackMayStop.set(this.UUID, (value) => {
			this.fileMayStopContextProvider.setValue(value);
		});
		instance.recording.addListener(this.UUID, (value) => {
			this.fileRecordingContextProvider.setValue(value);
		});
		instance.analysis.addListener(this.UUID, (value) => {
			this.fileAnalysesContextProvider.setValue(value);
		});
		this._analysisSynchronisators.handleFileAssigned(instance, coreWins);
	}
	_unbindListeners(instance) {
		instance.timeline.callbacksPlay.delete(this.UUID);
		instance.timeline.callbacksPause.delete(this.UUID);
		instance.timeline.callbacksStop.delete(this.UUID);
		instance.timeline.callbacksEnd.delete(this.UUID);
		instance.timeline.callbacksChangeFrame.delete(this.UUID);
		instance.timeline.callbackdPlaybackSpeed.delete(this.UUID);
		instance.recording.removeListener(this.UUID);
		instance.recording.callbackMayStop?.delete(this.UUID);
		instance.analysis.removeListener(this.UUID);
		this._analysisSynchronisators.handleFileUnassigned();
	}
	/** 
	* This is crucial - once the instance is loaded or retrieved somewhere, all the magic happens. Existence of this method enables controller to change the instance at any time. 
	*/
	receiveInstance(instance) {
		this.host.file = instance;
		this._syncAssignment();
	}
	removeInstance() {
		this.host.file = void 0;
		this._syncAssignment();
	}
	receiveFailure(failure) {
		this.removeInstance();
		this.host.failure = failure;
		this.fileFailureContextProvider.setValue(failure);
		this.onFailure.call(failure);
	}
	_propagateInstanceCurrentFrame(instance) {
		this.fileCurrentFrameContextProvider.setValue({
			ms: instance.timeline.currentMs,
			time: instance.timeline.currentTime,
			percentage: instance.timeline.currentPercentage,
			index: instance.timeline.currentStep.index,
			absolute: instance.timeline.currentStep.absolute
		});
	}
	_propagateInstanceAnalysesArray(instance) {
		this.fileAnalysesContextProvider.setValue(instance.analysis.layers.all);
	}
	setTimeCursor(value) {
		if (value !== this.fileCursorContextProvider.value) {
			this.host.requestUpdate();
			this.fileCursorContextProvider.setValue(value);
		}
	}
	setTimePercentage(percentage) {
		const file = this._attached;
		if (!file?.timeline.isSequence) return;
		const clampedPercentage = Math.max(0, Math.min(percentage, 100));
		if (clampedPercentage !== file.timeline.currentPercentage) file.timeline.setValueByPercent(clampedPercentage);
	}
	play() {
		this._attached?.timeline.play();
	}
	stop() {
		this._attached?.timeline.stop();
	}
	pause() {
		this._attached?.timeline.pause();
	}
	setMs(value) {
		const file = this._attached;
		if (!file?.timeline.isSequence) return;
		const clampedRelativeTime = Math.max(0, Math.min(value, file.timeline.duration));
		if (clampedRelativeTime !== file.timeline.currentMs) file.timeline.setRelativeTime(clampedRelativeTime);
	}
	/** Impose this file's highlight into the registry */
	_propagateHighlight() {
		if (this.autoHighlight && this.fileObject) {
			this.host.setAttribute("is-highlight", "true");
			this.host.registryController.setHighlight({
				from: this.fileObject.min,
				to: this.fileObject.max
			});
		}
	}
	/** Remove the highlight from the registry */
	_unpropagateHighlight() {
		if (this.host.hasAttribute("is-highlight")) {
			this.host.removeAttribute("is-highlight");
			this.host.registryController.setHighlight(void 0);
		}
	}
	startLoading() {
		this.onLoadingStart.call();
		this.readyContextProvider.setValue(false);
	}
	endLoading() {
		this.readyContextProvider.setValue(true);
	}
};

//#endregion
//#region src/hierarchy/abstraction/AbstractFileProvider.ts
var AbstractFileProvider = class extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.fileController = new FileController(this);
		this.loading = false;
		this.ready = false;
		this.ms = 0;
		this.playbackSpeed = 1;
		this.recording = false;
		this.playing = false;
		this.analyses = [];
		this.autoHighlight = false;
	}
	static {
		this.properties = { ...FileController.HOST_PROPERTIES };
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		this.fileController.hostUpdatedWatcher(_changedProperties);
	}
	/** Register instance callback listeners. @deprecated */
	recieveInstance(instance) {
		this.fileController.receiveInstance(instance);
	}
	/** @deprecated */
	removeInstance(instance) {
		this.fileController.removeInstance();
	}
	deleteFile() {
		if (this.file) this.removeInstance(this.file);
	}
	render() {
		return lit.html`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `;
	}
};
__decorate([
	(0, _lit_context.provide)({ context: loadingContext }),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Boolean)
], AbstractFileProvider.prototype, "loading", void 0);

//#endregion
//#region src/hierarchy/abstraction/AbstractGroupProvider.ts
var AbstractGroupProvider = class extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.groupController = new GroupController(this);
		this.autoclearGroup = true;
	}
	static {
		this.properties = { ...GroupController.HOST_PROPERTIES };
	}
	updated(values) {
		super.updated(values);
		this.groupController.hostUpdatedWatcher(values);
	}
	render() {
		return lit.html`<slot></slot>`;
	}
};

//#endregion
//#region src/hierarchy/abstraction/AbstractManagerProvider.ts
var _ref$12;
var AbstractManagerProvider = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.managerController = new ManagerController(this);
		this.palette = "jet";
		this.advancedPalettes = false;
		this.smoothThermograms = false;
		this.smoothGraph = false;
		this.autoclear = false;
	}
	static {
		this.properties = { ...ManagerController.HOST_PROPERTIES };
	}
	connectedCallback() {
		super.connectedCallback();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.managerObject !== void 0) removeManager(this.managerObject);
	}
	willUpdate(changedProperties) {
		super.willUpdate(changedProperties);
		this.log("Will update called with changed properties", changedProperties);
	}
	updated(changedProperties) {
		super.updated(changedProperties);
		this.log("Updated called with changed properties", changedProperties);
		this.managerController.hostUpdatedWatcher(changedProperties);
	}
	render() {
		return lit.html`<slot></slot>`;
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", typeof (_ref$12 = typeof _labirthermal_core.AvailableThermalPalette !== "undefined" && _labirthermal_core.AvailableThermalPalette) === "function" ? _ref$12 : Object)], AbstractManagerProvider.prototype, "palette", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], AbstractManagerProvider.prototype, "advancedPalettes", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], AbstractManagerProvider.prototype, "smoothThermograms", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], AbstractManagerProvider.prototype, "smoothGraph", void 0);

//#endregion
//#region src/hierarchy/abstraction/AbstractRegistryProvider.ts
var AbstractRegistryProvider = class extends AbstractManagerConsumer {
	constructor(..._args) {
		super(..._args);
		this.registryController = new RegistryController(this);
		this.opacity = 1;
		this.loading = false;
		this.autoclear = false;
		this.setHighlight = (value) => {
			this.highlight = value;
		};
	}
	static {
		this.properties = { ...RegistryController.HOST_PROPERTIES };
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.registryObject !== void 0) this.manager.removeRegistry(this.registryObject.id);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		this.registryController.hostUpdatedWatcher(_changedProperties);
	}
	render() {
		return lit.html`<slot></slot>`;
	}
};
__decorate([(0, _lit_context.provide)({ context: setRegistryHighlightContext }), __decorateMetadata("design:type", Object)], AbstractRegistryProvider.prototype, "setHighlight", void 0);

//#endregion
//#region src/hierarchy/consumers/AbstractFileConsumer.ts
var _ref$11, _ref2$4;
var AbstractFileConsumer = class extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.loading = true;
		this.recording = false;
	}
	getUUID() {
		return `${this.UUID}__internal_callback`;
	}
	get internalCallbackUUID() {
		return `${this.UUID}__internal_callback`;
	}
	connectedCallback() {
		super.connectedCallback();
		this.hookCallbacks();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.fileController) {
			this.fileController.onSuccess.delete(this.UUID);
			this.fileController.onFailure.delete(this.UUID);
		}
	}
	hookCallbacks() {
		if (this.fileController) {
			this.fileController.onSuccess.set(this.UUID, (instance) => {
				this.onInstanceCreated(instance);
				this.loading = false;
			});
			this.fileController.onFailure.set(this.UUID, (error) => {
				this.onFailure(error);
				this.loading = false;
			});
		} else throw new Error("Tento komponent není v souboru!");
	}
};
__decorate([(0, _lit_context.consume)({
	context: fileControllerContext,
	subscribe: true
}), __decorateMetadata("design:type", Object)], AbstractFileConsumer.prototype, "fileController", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: loadingContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Boolean)
], AbstractFileConsumer.prototype, "loading", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: fileContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref$11 = typeof _labirthermal_core.Instance !== "undefined" && _labirthermal_core.Instance) === "function" ? _ref$11 : Object)
], AbstractFileConsumer.prototype, "file", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: fileFailureContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref2$4 = typeof _labirthermal_core.ThermalFileFailure !== "undefined" && _labirthermal_core.ThermalFileFailure) === "function" ? _ref2$4 : Object)
], AbstractFileConsumer.prototype, "failure", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: fileRecordingContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Boolean)
], AbstractFileConsumer.prototype, "recording", void 0);

//#endregion
//#region package.json
var version = "1.3.4";

//#endregion
//#region src/controls/independent/AppInfoButton.ts
let AppInfoButton = class AppInfoButton extends AbstractThermalElement {
	static {
		this.styles = lit.css`

        .content {
            color: var( --thermal-foreground );
        }

        hr {
            border-top-color: currentcolor;
            border-bottom-width: 0;
        }

        small {
            opacity: .5;
        }

        a {
            color: var( --thermal-primary );
        }

        .logo {
            max-width: 200px;
            margin: 0 auto;
            padding: var( --thermal-gap ) 0;
            svg {
                width: 100%;
                height: auto;
            }
        }

        .row {

            &:not(:last-child) {
                padding-bottom: var( --thermal-gap );
                padding-top: var( --thermal-gap );
            }
        
        }

        @media ( min-width: 700px ) {
            .row {

                display: flex;
                flex-wrap: wrap;

                margin: 0 calc( var( --thermal-gap ) * -1 );

                & > div {

                    box-sizing: border-box;
                    width: 50%;
                    padding: 0 var( --thermal-gap );

                }
            
            }
        
        }
    
    `;
	}
	render() {
		return lit.html`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-btn slot="invoker">About</thermal-btn>
                <div slot="content">
                    <div class="content">
                        <div class="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="531.66" height="166.67" viewBox="0 0 531.66 166.67">
                                <g id="Vrstva_2" data-name="Vrstva 2">
                                    <g id="Podkres">
                                        <path
                                            d="M286.47,78.12c-1.77-1.54-4.43-2.32-8-2.32H261.56V95.59H278.5c3.54,0,6.2-.78,8-2.36s2.66-4.14,2.66-7.68S288.25,79.66,286.47,78.12Z" 
                                            fill="currentcolor"
                                            />
                                        <path
                                            d="M262,0,186,29.54h-.21V166.67h152V29.54H338ZM232.52,134.09H217.06V63.79h15.46Zm58.68,0a27.45,27.45,0,0,1-1.58-8c-.19-3.08-.49-6-.88-8.86-.53-3.67-1.64-6.36-3.35-8.07s-4.5-2.56-8.37-2.56H261.56v27.47H246.11V63.79H284a22.61,22.61,0,0,1,8.52,1.53A19.8,19.8,0,0,1,299,69.5a18.2,18.2,0,0,1,4.13,6.16,19.75,19.75,0,0,1,1.43,7.53A21.14,21.14,0,0,1,302,93.92a16.37,16.37,0,0,1-8.52,6.89v.2a11.89,11.89,0,0,1,4.73,2.41,13.28,13.28,0,0,1,3.05,3.84,17.8,17.8,0,0,1,1.72,4.87,42.51,42.51,0,0,1,.74,5.32c.07,1.12.13,2.43.2,3.94s.18,3,.35,4.63a30.6,30.6,0,0,0,.78,4.47,10.2,10.2,0,0,0,1.63,3.6Z"
                                            fill="currentcolor"
                                         />
                                        <path d="M414,63.79v13H376.89V91.85H411v12H376.89v17.23H414.8v13H361.43V63.79Z" fill="currentcolor" />
                                        <path
                                            d="M459.89,127.59a14.43,14.43,0,0,1-6.45,6,23.53,23.53,0,0,1-19.05-.4,20,20,0,0,1-7.14-6,27.21,27.21,0,0,1-4.23-8.72,36.59,36.59,0,0,1-1.43-10.23A34.4,34.4,0,0,1,423,98.3a25.75,25.75,0,0,1,4.23-8.42,20.53,20.53,0,0,1,16.89-8.07,20,20,0,0,1,8.61,1.92,15,15,0,0,1,6.45,5.66h.2V63.79h14v70.3H460.09v-6.5Zm-.59-25.15a14.68,14.68,0,0,0-2-5.12,11.34,11.34,0,0,0-3.69-3.6,10.83,10.83,0,0,0-5.71-1.38,11.33,11.33,0,0,0-5.81,1.38,10.93,10.93,0,0,0-3.79,3.64,16.39,16.39,0,0,0-2.07,5.17,27.93,27.93,0,0,0-.64,6.06,25.91,25.91,0,0,0,.69,5.91,16,16,0,0,0,2.22,5.26,12,12,0,0,0,3.84,3.74,10.29,10.29,0,0,0,5.56,1.43,11.12,11.12,0,0,0,5.76-1.38,10.36,10.36,0,0,0,3.69-3.69,16.42,16.42,0,0,0,2-5.27,31.24,31.24,0,0,0,.59-6.1A30.51,30.51,0,0,0,459.3,102.44Z" fill="currentcolor" />
                                        <path
                                            d="M518.37,134.09V127h-.29a15.75,15.75,0,0,1-6.9,6.4,20.37,20.37,0,0,1-8.66,2,24.39,24.39,0,0,1-9.21-1.48,13.32,13.32,0,0,1-5.66-4.18,16.59,16.59,0,0,1-2.9-6.6,40.82,40.82,0,0,1-.84-8.61V83.19h14v28.75q0,6.3,2,9.4t7,3.1q5.72,0,8.27-3.4t2.56-11.17V83.19h14v50.9Z" fill="currentcolor"/>
                                        <path d="M15.46,63.79v57.3H49.72v13H0V63.79Z" fill="currentcolor"/>
                                        <path
                                            d="M56.32,98.84a16.13,16.13,0,0,1,2.46-8.17,16.77,16.77,0,0,1,5.51-5.22,23.86,23.86,0,0,1,7.53-2.8,42.71,42.71,0,0,1,8.42-.84,57.28,57.28,0,0,1,7.78.54,23.87,23.87,0,0,1,7.19,2.12,14.2,14.2,0,0,1,5.31,4.38,12.23,12.23,0,0,1,2.07,7.43v26.49a53.68,53.68,0,0,0,.39,6.59,12.18,12.18,0,0,0,1.38,4.73H90.18a21.91,21.91,0,0,1-.64-2.41,20.76,20.76,0,0,1-.34-2.51A18.29,18.29,0,0,1,81.32,134a31.55,31.55,0,0,1-9.25,1.38,25,25,0,0,1-6.79-.89,15.64,15.64,0,0,1-5.52-2.75A13,13,0,0,1,56.07,127a15.91,15.91,0,0,1-1.33-6.79,14.81,14.81,0,0,1,1.53-7.14,12.72,12.72,0,0,1,3.94-4.48,17.47,17.47,0,0,1,5.51-2.51A58.91,58.91,0,0,1,72,104.75q3.15-.5,6.2-.79a36.91,36.91,0,0,0,5.42-.89,9.35,9.35,0,0,0,3.74-1.72,3.79,3.79,0,0,0,1.28-3.3,7.44,7.44,0,0,0-.74-3.59,5.45,5.45,0,0,0-2-2.07,7.7,7.7,0,0,0-2.85-1,22.69,22.69,0,0,0-3.5-.25,10.63,10.63,0,0,0-6.5,1.77c-1.57,1.19-2.49,3.15-2.75,5.91Zm32.29,10.34a6.25,6.25,0,0,1-2.22,1.23,22.33,22.33,0,0,1-2.85.74c-1,.2-2.09.36-3.2.49s-2.23.3-3.35.49a25.6,25.6,0,0,0-3.1.79,9.21,9.21,0,0,0-2.66,1.33,6.34,6.34,0,0,0-1.82,2.12,6.78,6.78,0,0,0-.69,3.25,6.61,6.61,0,0,0,.69,3.15,5.25,5.25,0,0,0,1.87,2,7.85,7.85,0,0,0,2.76,1,17.31,17.31,0,0,0,3.25.29,12.37,12.37,0,0,0,6.4-1.37,9.19,9.19,0,0,0,3.34-3.3,10.36,10.36,0,0,0,1.33-3.89,25.55,25.55,0,0,0,.25-3.15Z" fill="currentcolor"/>
                                        <path
                                            d="M127.4,63.79v25.6h.2a15,15,0,0,1,6.94-5.76,23.54,23.54,0,0,1,9.1-1.82A19.34,19.34,0,0,1,158,88.21a24.53,24.53,0,0,1,4.87,8.32,34.8,34.8,0,0,1,1.87,12.06,34.8,34.8,0,0,1-1.87,12.06A24.62,24.62,0,0,1,158,129a19.44,19.44,0,0,1-14.33,6.4,26.9,26.9,0,0,1-10-1.77,12.8,12.8,0,0,1-6.69-6h-.2v6.5H113.42V63.79ZM150,102.48a16.35,16.35,0,0,0-2.16-5.21,11.52,11.52,0,0,0-3.69-3.6,11.41,11.41,0,0,0-10.69,0,11.28,11.28,0,0,0-3.74,3.6,16.13,16.13,0,0,0-2.16,5.21,27.23,27.23,0,0,0-.69,6.21,26.72,26.72,0,0,0,.69,6.1,16.09,16.09,0,0,0,2.16,5.22,11.15,11.15,0,0,0,3.74,3.59,11.41,11.41,0,0,0,10.69,0,11.38,11.38,0,0,0,3.69-3.59,16.32,16.32,0,0,0,2.16-5.22,26.72,26.72,0,0,0,.69-6.1A27.23,27.23,0,0,0,150,102.48Z" fill="currentcolor" />
                                    </g>
                                </g>
                            </svg>
                    </div>
                    
                    <div style="text-align: center">
                        <p>A webapp reading thermal images from infrared cameras TIMI Edu.</p>
                        <p>version ${version}</p>
                    </div>


                    <hr />

                    <div class="row">

                        <div>
                            <h3>Source code</h3>
                            <p>
                                <a href="https://github.com/moichim/labir" target="_blank">github.com/moichim/labir</a>
                            </p>
                        </div>


                        <div>
                            <h3>Authors</h3>
                            <p>The code is being developed by the <a href="https://irt.zcu.cz/" target="_blank">Infrared technologies</a> research team at <a href="https://ntc.zcu.cz" target="_blank">NTC UWB</a> in Pilsen.</p>
                        </div>

                    </div>
                </div>
                </div>
            </thermal-dialog>

        `;
	}
};
AppInfoButton = __decorate([(0, lit_decorators_js.customElement)("app-info-button")], AppInfoButton);

//#endregion
//#region src/apps/AbstractControlledApp.ts
const advancedPalettesContext = (0, _lit_context.createContext)("advanced-palettes");
const advancedPalettesSetterContext = (0, _lit_context.createContext)("advanced-palettes-setter");
var AbstractControlledApp = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.advancedPalettes = false;
		this.setAdvancedPalettes = (value) => {
			this.advancedPalettes = value;
		};
	}
};
__decorate([
	(0, lit_decorators_js.property)({
		type: Boolean,
		reflect: true,
		attribute: "advanced-palettes",
		converter: booleanConverter(false)
	}),
	(0, _lit_context.provide)({ context: advancedPalettesContext }),
	__decorateMetadata("design:type", Boolean)
], AbstractControlledApp.prototype, "advancedPalettes", void 0);
__decorate([(0, _lit_context.provide)({ context: advancedPalettesSetterContext }), __decorateMetadata("design:type", Object)], AbstractControlledApp.prototype, "setAdvancedPalettes", void 0);

//#endregion
//#region src/controls/independent/DisplayPanel.ts
let DisplayPanel = class DisplayPanel extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.advancedPalettes = false;
		this.advancedPalettesSetter = () => {};
	}
	static {
		this.styles = lit.css`
    
        :host {
            display: contents;
        }
    
    `;
	}
	render() {
		return lit.html`
        <thermal-field label="${(0, i18next.t)(T.colourpalette)}" hint="Zvolte, jaké chcete používat palety.">
            <thermal-btn 
                variant="${!this.advancedPalettes ? "foreground" : "default"}"
                @click=${() => this.advancedPalettesSetter(false)}
                tooltip="IRON, JET, White hot, Black hot"
            >Základní</thermal-btn>
            <thermal-btn 
                variant="${this.advancedPalettes ? "foreground" : "default"}"
                @click=${() => this.advancedPalettesSetter(true)}
                tooltip="Všechny dostupné palety"
            >Pokročilé</thermal-btn>
        </thermal-field>
        <thermal-field label="${(0, i18next.t)(T.filerendering)}" hint="${(0, i18next.t)(T.filerenderinghint)}">
            <manager-image-smooth-switch></manager-image-smooth-switch>
        </thermal-field>
        <thermal-field label="${(0, i18next.t)(T.graphlines)}" hint="${(0, i18next.t)(T.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `;
	}
};
__decorate([
	(0, _lit_context.consume)({
		context: advancedPalettesContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Boolean)
], DisplayPanel.prototype, "advancedPalettes", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: advancedPalettesSetterContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Function)
], DisplayPanel.prototype, "advancedPalettesSetter", void 0);
DisplayPanel = __decorate([(0, lit_decorators_js.customElement)("display-panel")], DisplayPanel);

//#endregion
//#region src/controls/independent/ConfigDialog.ts
let ConfigDialog = class ConfigDialog extends AbstractThermalElement {
	render() {
		return lit.html`<thermal-dialog
            label="Nastavení aplikace"
        >
            <thermal-btn 
                slot="invoker"
                icon="settings"
                iconStyle="solid"
                tooltip=${this.t("config")}
            ></thermal-btn>

            <div slot="content">
                <manager-export-panel></manager-export-panel>
                <display-panel></display-panel>
            </div>
        </thermal-dialog>`;
	}
};
ConfigDialog = __decorate([(0, lit_decorators_js.customElement)("config-dialog")], ConfigDialog);

//#endregion
//#region src/hierarchy/providers/FileCopy.ts
var _ref$10;
/** This element creates a completely isolated hierarchy tree for the given original file. The file is copied and all contexts are exposed independently of the original context. */
var FileCopyElement = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.withAnalyses = true;
		this.managerController = new ManagerController(this);
		this.advancedPalettes = true;
		this.smoothThermograms = false;
		this.smoothGraph = false;
		this.tool = "edit";
		this.registryController = new RegistryController(this);
		this.opacity = 1;
		this.loading = false;
		this.groupController = new GroupController(this);
		this.autoclearGroup = true;
		this.fileController = new FileController(this);
		this.ms = 0;
		this.playbackSpeed = 1;
		this.autoHighlight = false;
		this._canRenderChildren = false;
	}
	static {
		this.properties = {
			...ManagerController.HOST_PROPERTIES,
			...RegistryController.HOST_PROPERTIES,
			...GroupController.HOST_PROPERTIES,
			...FileController.HOST_PROPERTIES
		};
	}
	getSlugManager() {
		return this._slugBase + "__copy-manager";
	}
	getSlugRegistry() {
		return this._slugBase + "__copy-registry";
	}
	getSlugGroup() {
		return this._slugBase + "__copy-group";
	}
	connectedCallback() {
		const originalFile = this.originalFile;
		this._slugBase = originalFile.thermalUrl + "__" + this.UUID.substring(0, 6);
		this.setAttribute("manager-slug", this.getSlugManager());
		this.setAttribute("group-slug", this.getSlugGroup());
		this.setAttribute("registry-slug", this.getSlugRegistry());
		this.palette = this.originalFile.group.registry.manager.palette.value;
		this.opacity = this.originalFile.group.registry.opacity.value;
		this.ms = originalFile.timeline.currentMs;
		if (this.withAnalyses) this.copyAnalysesFromParent();
		super.connectedCallback();
		this.originalFile.reader.createInstance(this.groupObject).then((copiedInstance) => {
			if (!this.isConnected) return;
			this.registryObject.postLoadedProcessing();
			this.fileController.receiveInstance(copiedInstance);
			const range = originalFile.group.registry.range.value;
			if (range) this.registryObject?.range.imposeRange(range);
			this._canRenderChildren = true;
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this._canRenderChildren = false;
		this.fileController.removeInstance();
		this.registryController.removeGroup(this.groupObject);
		this.managerObject.removeRegistry(this.registryObject.id);
		window.Thermal.managers.delete(this.managerSlug);
	}
	/** Take the current analyses of the original file. The file controller propagates them to the copied file. */
	copyAnalysesFromParent() {
		const slots = this.originalFile.slots;
		this.analysis1 = slots.getSlot(1)?.serialized;
		this.analysis2 = slots.getSlot(2)?.serialized;
		this.analysis3 = slots.getSlot(3)?.serialized;
		this.analysis4 = slots.getSlot(4)?.serialized;
		this.analysis5 = slots.getSlot(5)?.serialized;
		this.analysis6 = slots.getSlot(6)?.serialized;
		this.analysis7 = slots.getSlot(7)?.serialized;
	}
	/** Remove all analyses from the copied file. */
	clearAnalyses() {
		this.analysis1 = void 0;
		this.analysis2 = void 0;
		this.analysis3 = void 0;
		this.analysis4 = void 0;
		this.analysis5 = void 0;
		this.analysis6 = void 0;
		this.analysis7 = void 0;
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("withAnalyses") && _changedProperties.get("withAnalyses") !== void 0) if (this.withAnalyses) this.copyAnalysesFromParent();
		else this.clearAnalyses();
		this.managerController.hostUpdatedWatcher(_changedProperties);
		this.registryController.hostUpdatedWatcher(_changedProperties);
		this.groupController.hostUpdatedWatcher(_changedProperties);
		this.fileController.hostUpdatedWatcher(_changedProperties);
	}
	static {
		this.styles = lit.css`
    
        :host,
        registry-provider,
        group-provider {
            display: contents;
        }

    `;
	}
	render() {
		return lit.html`${this._canRenderChildren ? lit.html`<slot></slot>` : lit.nothing}`;
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: Object,
	attribute: false
}), __decorateMetadata("design:type", typeof (_ref$10 = typeof _labirthermal_core.Instance !== "undefined" && _labirthermal_core.Instance) === "function" ? _ref$10 : Object)], FileCopyElement.prototype, "originalFile", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	attribute: false
}), __decorateMetadata("design:type", Boolean)], FileCopyElement.prototype, "withAnalyses", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], FileCopyElement.prototype, "_canRenderChildren", void 0);

//#endregion
//#region src/hierarchy/providers/FileMirror.ts
var _ref$9, _ref2$3;
/** @deprecated Investigate why is this here. */
var FileMirrorElement = class extends AbstractFileProvider {
	constructor(..._args) {
		super(..._args);
		this.providedSelf = this;
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("thermal")) {
			const oldUrl = _changedProperties.get("thermal");
			if (oldUrl) {
				this.group.files.removeFile(oldUrl);
				this.file = void 0;
			}
		}
		if (_changedProperties.has("file")) {
			if (this.file) {
				this.loading = false;
				this.recieveInstance(this.file);
				setTimeout(() => this.file && this.onSuccess.call(this.file), 0);
			}
		}
	}
};
__decorate([(0, _lit_context.provide)({ context: fileProviderContext }), __decorateMetadata("design:type", typeof (_ref$9 = typeof FileMirrorElement !== "undefined" && FileMirrorElement) === "function" ? _ref$9 : Object)], FileMirrorElement.prototype, "providedSelf", void 0);
__decorate([
	(0, _lit_context.provide)({ context: fileContext }),
	(0, lit_decorators_js.property)(),
	__decorateMetadata("design:type", typeof (_ref2$3 = typeof _labirthermal_core.Instance !== "undefined" && _labirthermal_core.Instance) === "function" ? _ref2$3 : Object)
], FileMirrorElement.prototype, "file", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	converter: {
		fromAttribute(value) {
			return value === "true";
		},
		toAttribute(value) {
			if (value === true) return "true";
			return "false";
		}
	}
}), __decorateMetadata("design:type", Boolean)], FileMirrorElement.prototype, "batch", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], FileMirrorElement.prototype, "thermal", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], FileMirrorElement.prototype, "visible", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], FileMirrorElement.prototype, "analysis1", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], FileMirrorElement.prototype, "analysis2", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], FileMirrorElement.prototype, "analysis3", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], FileMirrorElement.prototype, "analysis4", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], FileMirrorElement.prototype, "analysis5", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], FileMirrorElement.prototype, "analysis6", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], FileMirrorElement.prototype, "analysis7", void 0);

//#endregion
//#region src/hierarchy/controllers/FileLoadController.ts
var FileLoadController = class extends AbstractHierarchyController {
	get UUID() {
		return this._UUID;
	}
	get group() {
		return this.host.fileController.host.groupController.groupObject;
	}
	get registry() {
		return this.group.registry;
	}
	static {
		this.HOST_PROPERTIES = {
			thermal: {
				type: String,
				reflect: true,
				attribute: "thermal"
			},
			visible: {
				type: String,
				reflect: true,
				attribute: "visible"
			}
		};
	}
	constructor(host) {
		super(host);
		this._UUID = host.UUID;
	}
	hostUpdatedWatcher(value) {
		if (value.has("thermal") && this.host.thermal) this._load(this.host.thermal, this.host.visible);
	}
	hostConnected() {}
	hostDisconnected() {}
	async _load(lrc, visible) {
		if (this.host.fileController.fileObject) this.group.files.removeFile(this.host.fileController.fileObject);
		this.host.fileController.startLoading();
		return this.registry.batch.request(lrc, visible, this.group, async (result) => {
			if (result instanceof _labirthermal_core.Instance) this.host.fileController.receiveInstance(result);
			else if (result instanceof _labirthermal_core.ThermalFileFailure) this.host.fileController.receiveFailure(result);
		});
	}
};

//#endregion
//#region src/hierarchy/providers/FileProvider.ts
var FileProviderElement = class extends AbstractFileProvider {
	constructor(..._args) {
		super(..._args);
		this.fileLoadController = new FileLoadController(this);
	}
};

//#endregion
//#region src/hierarchy/providers/GroupProvider.ts
var GroupProviderElement = class extends AbstractGroupProvider {};

//#endregion
//#region src/hierarchy/providers/ManagerProvider.ts
var ManagerProviderElement = class extends AbstractManagerProvider {
	constructor(..._args) {
		super(..._args);
		this.autoclear = false;
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], ManagerProviderElement.prototype, "slug", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], ManagerProviderElement.prototype, "autoclear", void 0);

//#endregion
//#region src/hierarchy/providers/RegistryProvider.ts
var RegistryProviderElement = class extends AbstractRegistryProvider {};

//#endregion
//#region src/hierarchy/providers/context/pngExportContext.ts
const pngExportWidthContext = (0, _lit_context.createContext)("pngExportWidthContext");
const pngExportWidthSetterContext = (0, _lit_context.createContext)("pngExportWidthSetterContext");
const pngExportFsContext = (0, _lit_context.createContext)("png-export-width-context");
const pngExportFsSetterContext = (0, _lit_context.createContext)("png-export-width-setter-context");
const pngExportAnalysisContext = (0, _lit_context.createContext)("pngExportAnalysisContext");
const pngExportAnalysisSetterContext = (0, _lit_context.createContext)("pngExportAnalysisSetterContext");
const pngExportScaleContext = (0, _lit_context.createContext)("pngExportScaleContext");
const pngExportScaleSetterContext = (0, _lit_context.createContext)("pngExportScaleSetterContext");
const pngExportFileNameContext = (0, _lit_context.createContext)("pngExportFileNameContext");
const pngExportFileNameSetterContext = (0, _lit_context.createContext)("pngExportFileNameSetterContext");
const pngExportFileDateContext = (0, _lit_context.createContext)("pngExportFileDateContext");
const pngExportFileDateSetterContext = (0, _lit_context.createContext)("pngExportFileDateSetterContext");
const pngExportLicenseContext = (0, _lit_context.createContext)("pngExportLicenseContext");
const pngExportLicenseSetterContext = (0, _lit_context.createContext)("pngExportLicenseSetterContext");
const pngExportColumnsContext = (0, _lit_context.createContext)("pngExportColumnsContext");
const pngExportColumnsSetterContext = (0, _lit_context.createContext)("pngExportColumnsSetterContext");
const pngExportGroupNameContext = (0, _lit_context.createContext)("pngExportGroupNameContext");
const pngExportGroupNameSetterContext = (0, _lit_context.createContext)("pngExportGroupNameSetterContext");
var BaseAppWithPngExportContext = class extends AbstractControlledApp {
	constructor(..._args) {
		super(..._args);
		this.pngWidth = 1200;
		this.pngWidthSetter = (value) => {
			this.pngWidth = value;
		};
		this.pngFs = 20;
		this.pngFsSetter = (value) => {
			this.pngFs = value;
		};
		this.pngAnalyses = true;
		this.pngExportAnalysesSetter = (value) => this.pngAnalyses = value;
		this.pngExportScale = true;
		this.pngExportScaleSetter = (value) => this.pngExportScale = value;
		this.pngExportLicense = true;
		this.pngExportLicenseSetter = (value) => this.pngExportLicense = value;
		this.pngExportFileName = false;
		this.pngExportFileNameSetter = (value) => this.pngExportFileName = value;
		this.pngExportFileDate = true;
		this.pngExportFileDateSetter = (value) => this.pngExportFileDate = value;
		this.pngExportColumns = 2;
		this.pngExportColumnsSetter = (value) => this.pngExportColumns = value;
		this.pngExportGroupName = true;
		this.pngExportGroupNameSetter = (value) => this.pngExportGroupName = value;
	}
};
__decorate([(0, _lit_context.provide)({ context: pngExportWidthContext }), __decorateMetadata("design:type", Number)], BaseAppWithPngExportContext.prototype, "pngWidth", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportWidthSetterContext }), __decorateMetadata("design:type", Object)], BaseAppWithPngExportContext.prototype, "pngWidthSetter", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportFsContext }), __decorateMetadata("design:type", Number)], BaseAppWithPngExportContext.prototype, "pngFs", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportFsSetterContext }), __decorateMetadata("design:type", Object)], BaseAppWithPngExportContext.prototype, "pngFsSetter", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportAnalysisContext }), __decorateMetadata("design:type", Boolean)], BaseAppWithPngExportContext.prototype, "pngAnalyses", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportAnalysisSetterContext }), __decorateMetadata("design:type", Object)], BaseAppWithPngExportContext.prototype, "pngExportAnalysesSetter", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportScaleContext }), __decorateMetadata("design:type", Boolean)], BaseAppWithPngExportContext.prototype, "pngExportScale", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportScaleSetterContext }), __decorateMetadata("design:type", Object)], BaseAppWithPngExportContext.prototype, "pngExportScaleSetter", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportLicenseContext }), __decorateMetadata("design:type", Boolean)], BaseAppWithPngExportContext.prototype, "pngExportLicense", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportLicenseSetterContext }), __decorateMetadata("design:type", Object)], BaseAppWithPngExportContext.prototype, "pngExportLicenseSetter", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportFileNameContext }), __decorateMetadata("design:type", Boolean)], BaseAppWithPngExportContext.prototype, "pngExportFileName", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportFileNameSetterContext }), __decorateMetadata("design:type", Object)], BaseAppWithPngExportContext.prototype, "pngExportFileNameSetter", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportFileDateContext }), __decorateMetadata("design:type", Boolean)], BaseAppWithPngExportContext.prototype, "pngExportFileDate", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportFileDateSetterContext }), __decorateMetadata("design:type", Object)], BaseAppWithPngExportContext.prototype, "pngExportFileDateSetter", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportColumnsContext }), __decorateMetadata("design:type", Number)], BaseAppWithPngExportContext.prototype, "pngExportColumns", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportColumnsSetterContext }), __decorateMetadata("design:type", Object)], BaseAppWithPngExportContext.prototype, "pngExportColumnsSetter", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportGroupNameContext }), __decorateMetadata("design:type", Boolean)], BaseAppWithPngExportContext.prototype, "pngExportGroupName", void 0);
__decorate([(0, _lit_context.provide)({ context: pngExportGroupNameSetterContext }), __decorateMetadata("design:type", Object)], BaseAppWithPngExportContext.prototype, "pngExportGroupNameSetter", void 0);

//#endregion
//#region src/controls/manager/ManagerExportPanel.ts
var _ref$8, _ref2$2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
var ManagerExportPanel = class extends AbstractThermalElement {
	renderRow(label, content, hint) {
		return lit.html`<thermal-field label="${label}">
                <div>${content}</div>
                ${hint ? hint : lit.nothing}
            </thermal-field>`;
	}
	renderGroup(label, content) {
		return lit.html`<fieldset>
            <legend>${label}</legend>
            ${content}
        </fieldset>`;
	}
	formatTip(value) {
		return value ? lit.html`<div class="hint">${value}</div>` : "";
	}
	renderCheckbox(key, label, value, onChange) {
		return lit.html`<div>${lit.html`<input name="${key}" type="checkbox" ?checked="${value}" @input=${(event) => {
			const value = event.target.checked;
			onChange(value);
		}}>`}<label for="${key}">${label}</label></div>`;
	}
	renderSlider(key, label, value, unit, min, max, step, onChange, hint) {
		const content = lit.html`<input 
                name="${key}"
                value="${value}"
                min="${min}"
                max="${max}"
                step="${step}"
                type="range"
                @input="${(event) => {
			onChange(Math.min(max, Math.max(0, parseFloat(event.target.value))));
		}}"
            ></input>`;
		const help = lit.html`<strong>${value} ${unit}</strong> (${min} - ${max} ${unit})${hint ? "<br />" + hint : ""}`;
		const tip = this.formatTip(help);
		return this.renderRow(label, content, tip);
	}
	static {
		this.styles = lit.css`
        
            :host {
                display: contents;
            }

            .hint {
                font-size: calc( var( --thermal-fs-sm ) * .75 );
                padding-top: .2em;
            }

            fieldset {
                border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                border-radius: var(--thermal-radius);
                margin-bottom: var(--thermal-gap);

                legend {
                    border-radius: var(--thermal-radius);
                    border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                    padding: 0.3em 0.5em;
                }

            }
        
        `;
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (this.pngFs === void 0 || this.pngWidth === void 0 || this.pngWidthSetter === void 0 || this.pngFsSetter === void 0) return;
		for (const key of ["pngFs", "pngWidth"]) if (_changedProperties.has(key)) {
			const value = this[key];
			const element = this.shadowRoot?.querySelector(`input[name="${key}"]`);
			if (element && value) {
				const oldValue = element.value;
				if (parseInt(oldValue) !== value) {
					element.value = value.toString();
					this.log(`Updated ${key} from ${oldValue} to ${value}`);
				}
			}
		}
	}
	render() {
		if (this.pngFs === void 0 || this.pngWidth === void 0 || this.pngWidthSetter === void 0 || this.pngFsSetter === void 0) {}
		return lit.html`

        ${this.renderGroup((0, i18next.t)(T.exportcontent), lit.html`
            ${this.renderCheckbox("pngExportAnalyses", (0, i18next.t)(T.analyses), this.pngAnalyses, this.pngExportAnalysesSetter.bind(this))}
            ${this.renderCheckbox("pngExportScale", (0, i18next.t)(T.thermalscale), this.pngExportScale, this.pngExportScaleSetter.bind(this))}
            ${this.renderCheckbox("pngExportFileName", (0, i18next.t)(T.exportfilenames), this.pngExportFileName, this.pngExportFileNameSetter.bind(this))}
            ${this.renderCheckbox("pngExportFileDate", (0, i18next.t)(T.filedate), this.pngExportFileDate, this.pngExportFileDateSetter.bind(this))}
        `)}

        ${this.renderGroup((0, i18next.t)(T.exportdimensions), lit.html`
            ${this.renderSlider("pngWidth", (0, i18next.t)(T.exportimagewidth), this.pngWidth, "px", 500, 2e3, 50, this.pngWidthSetter.bind(this))}

            ${this.renderSlider("pngFs", (0, i18next.t)(T.exportimagefontsize), this.pngFs, "px", 10, 50, 1, this.pngFsSetter.bind(this))}
        `)}

        ${this.renderGroup((0, i18next.t)(T.exportgroup), lit.html`
            ${this.renderCheckbox("pngExportGroupName", (0, i18next.t)(T.exportgroupname), this.pngExportGroupName, this.pngExportGroupNameSetter.bind(this))}
            ${this.renderSlider("pngColumns", (0, i18next.t)(T.exportfilenames), this.pngExportColumns, "sloupců", 1, 5, 1, this.pngExportColumnsSetter.bind(this))}
        `)}

        `;
	}
};
__decorate([(0, _lit_context.consume)({
	context: pngExportWidthContext,
	subscribe: true
}), __decorateMetadata("design:type", Number)], ManagerExportPanel.prototype, "pngWidth", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportWidthSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref$8 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref$8 : Object)], ManagerExportPanel.prototype, "pngWidthSetter", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportFsContext,
	subscribe: true
}), __decorateMetadata("design:type", Number)], ManagerExportPanel.prototype, "pngFs", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportFsSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref2$2 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref2$2 : Object)], ManagerExportPanel.prototype, "pngFsSetter", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportAnalysisContext,
	subscribe: true
}), __decorateMetadata("design:type", Boolean)], ManagerExportPanel.prototype, "pngAnalyses", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportAnalysisSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref3 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref3 : Object)], ManagerExportPanel.prototype, "pngExportAnalysesSetter", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportScaleContext,
	subscribe: true
}), __decorateMetadata("design:type", Boolean)], ManagerExportPanel.prototype, "pngExportScale", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportScaleSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref4 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref4 : Object)], ManagerExportPanel.prototype, "pngExportScaleSetter", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportLicenseContext,
	subscribe: true
}), __decorateMetadata("design:type", Boolean)], ManagerExportPanel.prototype, "pngExportLicense", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportLicenseSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref5 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref5 : Object)], ManagerExportPanel.prototype, "pngExportLicenseSetter", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportFileNameContext,
	subscribe: true
}), __decorateMetadata("design:type", Boolean)], ManagerExportPanel.prototype, "pngExportFileName", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportFileNameSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref6 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref6 : Object)], ManagerExportPanel.prototype, "pngExportFileNameSetter", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportFileDateContext,
	subscribe: true
}), __decorateMetadata("design:type", Boolean)], ManagerExportPanel.prototype, "pngExportFileDate", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportFileDateSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref7 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref7 : Object)], ManagerExportPanel.prototype, "pngExportFileDateSetter", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportColumnsContext,
	subscribe: true
}), __decorateMetadata("design:type", Number)], ManagerExportPanel.prototype, "pngExportColumns", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportColumnsSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref8 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref8 : Object)], ManagerExportPanel.prototype, "pngExportColumnsSetter", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportGroupNameContext,
	subscribe: true
}), __decorateMetadata("design:type", Boolean)], ManagerExportPanel.prototype, "pngExportGroupName", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportGroupNameSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref9 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref9 : Object)], ManagerExportPanel.prototype, "pngExportGroupNameSetter", void 0);

//#endregion
//#region src/controls/manager/ManagerGraphSmoothSwitch.ts
var ManagerGraphSmoothSwitch = class extends AbstractManagerConsumer {
	static {
		this.styles = lit.css`
    
        :host {}

    `;
	}
	render() {
		return lit.html`

            <div>

                <thermal-btn
                    variant=${this.smooth ? "default" : "foreground"}
                    @click=${() => this.manager.graphSmooth.setGraphSmooth(false)}
                >${(0, i18next.t)(T.straightlines)}</thermal-btn>

                <thermal-btn
                    variant=${this.smooth ? "foreground" : "default"}
                    @click=${() => this.manager.graphSmooth.setGraphSmooth(true)}
                >${(0, i18next.t)(T.smoothlines)}</thermal-btn>

            </div>
        `;
	}
};
__decorate([(0, _lit_context.consume)({
	context: managerGraphFunctionContext,
	subscribe: true
}), __decorateMetadata("design:type", Boolean)], ManagerGraphSmoothSwitch.prototype, "smooth", void 0);

//#endregion
//#region src/controls/manager/ManagerImageSmoothSwitch.ts
var ManagerImageSmoothSwitch = class extends AbstractManagerConsumer {
	static {
		this.styles = lit.css`
    
        :host {
            display: block;
        }

    `;
	}
	render() {
		return lit.html`<thermal-btn
    variant=${this.smooth ? "default" : "foreground"}
    @click=${() => this.manager.smooth.setSmooth(false)}
>${(0, i18next.t)(T.pixelated)}</thermal-btn>

<thermal-btn
    variant=${this.smooth ? "foreground" : "default"}
    @click=${() => this.manager.smooth.setSmooth(true)}
>${(0, i18next.t)(T.smooth)}</thermal-btn>`;
	}
};
__decorate([(0, _lit_context.consume)({
	context: managerSmoothContext,
	subscribe: true
}), __decorateMetadata("design:type", Boolean)], ManagerImageSmoothSwitch.prototype, "smooth", void 0);

//#endregion
//#region src/controls/manager/AbstractPaletteSwitch.ts
var _ref$7;
var AbstractPaletteSwitch = class extends AbstractManagerConsumer {
	constructor(..._args) {
		super(..._args);
		this.advancedPalettesContext = false;
		this.palettes = [];
	}
	updated(_changedProperties) {
		const showAdvancedPalettes = this.advancedPalettesProperty ?? this.advancedPalettesContext;
		const basicPalettes = [
			"iron",
			"jet",
			"white_hot",
			"black_hot"
		];
		if (_changedProperties.has("advancedPalettesContext") || _changedProperties.has("advancedPalettesProperty")) if (showAdvancedPalettes) this.palettes = Object.values(_labirthermal_core.ThermalPalettes);
		else {
			this.palettes = Object.entries(_labirthermal_core.ThermalPalettes).filter(([key, palette]) => basicPalettes.includes(key)).map(([key, palette]) => palette);
			if (!basicPalettes.includes(this.value.key)) this.onSelect("iron");
		}
		if (_changedProperties.has("value") && !showAdvancedPalettes && !basicPalettes.includes(this.value.key)) this.onSelect("iron");
	}
	/** Handle user input events */
	onSelect(palette) {
		this.manager.palette.setPalette(palette);
	}
};
__decorate([
	(0, _lit_context.consume)({
		context: advancedPalettesContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Boolean)
], AbstractPaletteSwitch.prototype, "advancedPalettesContext", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	attribute: "advanced-palettes"
}), __decorateMetadata("design:type", Boolean)], AbstractPaletteSwitch.prototype, "advancedPalettesProperty", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Array)], AbstractPaletteSwitch.prototype, "palettes", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: managerPaletteContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref$7 = typeof ManagerPaletteContext !== "undefined" && ManagerPaletteContext) === "function" ? _ref$7 : Object)
], AbstractPaletteSwitch.prototype, "value", void 0);

//#endregion
//#region src/controls/manager/ManagerPaletteButtons.ts
var ManagerPaletteButtons = class extends AbstractPaletteSwitch {
	static {
		this.styles = lit.css`
:host {
    display: flex;
    width: content-width;
    gap: 5px;
}

.palette {
    width: calc( var( --thermal-gap ) * 2 );
    height: calc( var( --thermal-fs ) * .8 );
    border-radius: var( --thermal-fs-small );
}`;
	}
	paletteTemplate(palette) {
		return lit.html`<span class="palette" style="background:${palette.gradient}"></span>`;
	}
	render() {
		return this.palettes.map(((palette) => lit.html`<thermal-btn 
    @click=${() => this.onSelect(palette.slug)} 
    variant="${palette.name === this.manager.palette.currentPalette.name ? "background" : "default"}"
    tooltip="${(0, i18next.t)(T.palettename, { name: palette.name })}"
>
    ${this.paletteTemplate(palette)}
</thermal-btn>`));
	}
};

//#endregion
//#region src/controls/manager/ManagerPaletteDropdown.ts
var ManagerPaletteDropdown = class extends AbstractPaletteSwitch {
	static {
		this.styles = lit.css`

    .palette {
        display: block;
        width: calc( var( --thermal-gap ) * 2 );
        height: calc( var( --thermal-fs ) * .8 );
        border-radius: var( --thermal-fs-small );
    }

    thermal-btn {
        width: 100%;
        justify-content: flex-start;
    }

    `;
	}
	paletteTemplate(palette, className) {
		return lit.html`<span class="palette" style="background:${palette.gradient}"></span><span>${palette.name}</span>`;
	}
	render() {
		return lit.html`

            <thermal-dropdown .tooltip=${(0, i18next.t)(T.colourpalette)}>
                    <span slot="invoker" class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>

                ${this.palettes.map((palette) => lit.html`
                    <div slot="option"><thermal-btn @click=${() => this.onSelect(palette.slug)} variant="${palette.name === this.manager.palette.currentPalette.name ? "background" : "slate"}">
                        ${this.paletteTemplate(palette)}
                    </thermal-btn></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `;
	}
};

//#endregion
//#region src/controls/manager/ManagerToolsBar.ts
var _ref$6;
/**
* A standard toolbar that is either horizontal or vertical.
*/
var ManagerToolBar = class extends AbstractManagerConsumer {
	/** Handle user input events */
	onSelect(tool) {
		this.manager.tool.selectTool(tool);
	}
	static {
		this.styles = lit.css`
:host {
    display: flex;
    font-size: var(--thermal-fs);
    flex-direction: column;
    gap: 0.25em;
}

:host([horizontal="true"]) {
    flex-direction: row;
}

.active {
    color: var( --thermal-foreground );
}

thermal-btn {
    width: 2.5em;
    padding: 3px;
    &:hover {
        color: var(--thermal-primary);
    }
}`;
	}
	renderTool(key, tool) {
		const classes = {
			[key]: true,
			button: true,
			active: tool.key === this.value.key
		};
		return lit.html`<thermal-btn 
    tooltip=${(0, i18next.t)(T[tool.name])}
    tooltip-placement="right"
    class=${(0, lit_directives_class_map_js.classMap)(classes)} 
    @click=${() => {
			this.manager.tool.selectTool(tool);
		}}
    variant=${tool.key === this.value.key ? "background" : "default"}
>
    ${(0, lit_directives_unsafe_svg_js.unsafeSVG)(tool.icon)}
</thermal-btn>`;
	}
	render() {
		if (this.manager === void 0) return lit.nothing;
		return Object.entries(this.manager.tool.tools).map(([key, tool]) => {
			return this.renderTool(key, tool);
		});
	}
};
__decorate([
	(0, _lit_context.consume)({
		context: toolContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref$6 = typeof _labirthermal_core.ThermalTool !== "undefined" && _labirthermal_core.ThermalTool) === "function" ? _ref$6 : Object)
], ManagerToolBar.prototype, "value", void 0);

//#endregion
//#region src/controls/registry/RegistryRangeForm.ts
var RegistryRangeForm = class extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.stacked = false;
		this.step = 1;
		this.availableSteps = [
			.01,
			.1,
			.5,
			1,
			5,
			10
		];
		this.inputValues = {
			from: "",
			to: ""
		};
		this.isUpdatingFromRegistry = false;
		this.hasHistogram = false;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.hydrate();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.dehydrate();
		if (this.debounceTimer) clearTimeout(this.debounceTimer);
	}
	hydrate() {
		if (this.registry === void 0) return;
		this.recieveMinmax(this.registry.minmax.value);
		this.recieveRange(this.registry.range.value);
		this.registry.minmax.addListener(this.UUID, this.recieveMinmax.bind(this));
		this.registry.range.addListener(this.UUID, this.recieveRange.bind(this));
		this.registry.histogram.addListener(this.UUID, (value) => {
			this.hasHistogram = !!value;
		});
	}
	dehydrate() {
		if (this.registry === void 0) return;
		this.registry.minmax.removeListener(this.UUID);
		this.registry.range.removeListener(this.UUID);
	}
	recieveMinmax(value) {
		if (value) {
			if (this.min !== value.min) this.min = value.min;
			if (this.max !== value.max) this.max = value.max;
		} else {
			this.min = void 0;
			this.max = void 0;
			this.from = void 0;
			this.to = void 0;
			this.inputValues = {
				from: "",
				to: ""
			};
		}
	}
	recieveRange(value) {
		this.isUpdatingFromRegistry = true;
		if (value) {
			if (this.from !== value.from) {
				this.from = value.from;
				this.inputValues = {
					...this.inputValues,
					from: value.from?.toFixed(2) ?? ""
				};
			}
			if (this.to !== value.to) {
				this.to = value.to;
				this.inputValues = {
					...this.inputValues,
					to: value.to?.toFixed(2) ?? ""
				};
			}
		} else {
			this.from = void 0;
			this.to = void 0;
			this.inputValues = {
				from: "",
				to: ""
			};
		}
		this.isUpdatingFromRegistry = false;
	}
	updateFrom(value) {
		if (this.registry && value !== void 0 && this.to !== void 0) {
			this.from = value;
			this.registry.range.imposeRange({
				from: value,
				to: this.to
			});
		}
	}
	updateTo(value) {
		if (this.registry && value !== void 0 && this.from !== void 0) {
			this.to = value;
			this.registry.range.imposeRange({
				from: this.from,
				to: value
			});
		}
	}
	debouncedUpdate(type, value) {
		if (this.debounceTimer) clearTimeout(this.debounceTimer);
		this.debounceTimer = window.setTimeout(() => {
			if (this.isUpdatingFromRegistry) return;
			const numValue = parseFloat(value);
			if (isNaN(numValue)) return;
			if (type === "from" && this.isValidFromValue(numValue)) this.updateFrom(numValue);
			else if (type === "to" && this.isValidToValue(numValue)) this.updateTo(numValue);
		}, 300);
	}
	isValidFromValue(value) {
		if (this.min !== void 0 && value < this.min) return false;
		if (this.to !== void 0 && value > this.to) return false;
		return true;
	}
	isValidToValue(value) {
		if (this.max !== void 0 && value > this.max) return false;
		if (this.from !== void 0 && value < this.from) return false;
		return true;
	}
	canStepFrom(direction) {
		if (this.from === void 0) return false;
		const newValue = direction === "up" ? this.from + this.step : this.from - this.step;
		return this.isValidFromValue(newValue);
	}
	canStepTo(direction) {
		if (this.to === void 0) return false;
		const newValue = direction === "up" ? this.to + this.step : this.to - this.step;
		return this.isValidToValue(newValue);
	}
	canSetMin() {
		return this.min !== void 0 && this.to !== void 0 && this.min <= this.to && this.from !== this.min;
	}
	canSetMax() {
		return this.max !== void 0 && this.from !== void 0 && this.max >= this.from && this.to !== this.max;
	}
	stepFrom(direction) {
		if (this.from === void 0 || !this.canStepFrom(direction)) return;
		const newValue = direction === "up" ? this.from + this.step : this.from - this.step;
		const roundedValue = parseFloat(newValue.toFixed(2));
		this.inputValues.from = roundedValue.toFixed(2);
		this.updateFrom(roundedValue);
	}
	stepTo(direction) {
		if (this.to === void 0 || !this.canStepTo(direction)) return;
		const newValue = direction === "up" ? this.to + this.step : this.to - this.step;
		const roundedValue = parseFloat(newValue.toFixed(2));
		this.inputValues.to = roundedValue.toFixed(2);
		this.updateTo(roundedValue);
	}
	setMinValue() {
		if (!this.canSetMin() || this.min === void 0) return;
		this.inputValues.from = this.min.toFixed(2);
		this.updateFrom(this.min);
	}
	setMaxValue() {
		if (!this.canSetMax() || this.max === void 0) return;
		this.inputValues.to = this.max.toFixed(2);
		this.updateTo(this.max);
	}
	setStep(newStep) {
		this.step = newStep;
	}
	roundToNearestInteger(type) {
		const currentValue = type === "from" ? this.from : this.to;
		if (currentValue === void 0) return;
		const rounded = Math.round(currentValue);
		let safeValue = rounded;
		if (type === "from" && rounded < this.min) safeValue = Math.ceil(currentValue);
		if (type === "to" && rounded > this.max) safeValue = Math.floor(currentValue);
		if (type === "from" ? this.isValidFromValue(safeValue) : this.isValidToValue(safeValue)) if (type === "from") {
			this.inputValues.from = safeValue.toFixed(2);
			this.updateFrom(safeValue);
		} else {
			this.inputValues.to = safeValue.toFixed(2);
			this.updateTo(safeValue);
		}
	}
	getAvailableSteps() {
		return this.availableSteps.filter((step) => {
			const fromCanStep = this.from !== void 0 && (this.isValidFromValue(this.from + step) || this.isValidFromValue(this.from - step));
			const toCanStep = this.to !== void 0 && (this.isValidToValue(this.to + step) || this.isValidToValue(this.to - step));
			return fromCanStep || toCanStep;
		});
	}
	isWholeNumber(value) {
		return value !== void 0 && Math.round(value) === value;
	}
	getClosestValidValue(inputValue, type) {
		if (!inputValue.trim()) return type === "from" ? this.from : this.to;
		const numValue = parseFloat(inputValue);
		if (isNaN(numValue)) return type === "from" ? this.from : this.to;
		if (type === "from") {
			const minBound = this.min ?? Number.NEGATIVE_INFINITY;
			const maxBound = this.to ?? Number.POSITIVE_INFINITY;
			if (numValue < minBound) return minBound;
			if (numValue > maxBound) return maxBound;
			return numValue;
		} else {
			const minBound = this.from ?? Number.NEGATIVE_INFINITY;
			const maxBound = this.max ?? Number.POSITIVE_INFINITY;
			if (numValue < minBound) return minBound;
			if (numValue > maxBound) return maxBound;
			return numValue;
		}
	}
	handleInputBlur(type, inputValue) {
		const correctedValue = this.getClosestValidValue(inputValue, type);
		if (correctedValue !== void 0) {
			this.inputValues = {
				...this.inputValues,
				[type]: correctedValue.toFixed(2)
			};
			if (type === "from") this.updateFrom(correctedValue);
			else this.updateTo(correctedValue);
		}
	}
	static {
		this.styles = lit.css`

        :host {
            font-family: inherit;
            font-style: normal;
            font-size: var(--font-size);
            display: flex !important;
            flex-wrap: wrap;
            flex-direction: var( --thermal-direction, row );
            gap: .5em;
        }

        .fields {

            display: flex;
            flex-wrap: no-wrap;
            gap: 0em;
        
        }

        .fields__buttons {

            thermal-btn {
                min-height: 2em;
                flex-grow: var(--thermal-collapsible-grow, 0);
            }
        
        }

        .fields__separated {
            gap: .5em;
        }


        .separator {
            width: .5em;
            &.separator__line {
                display: flex;
                align-items: center;
                &::after {
                    content: "";
                    display: block;
                    height: var(--thermal-border-width);
                    width: 100%;
                    background: var( --thermal-slate );
                }
            }
        }

        .input-group {
            position: relative;
        }
    
        .input-group-inner {
            display: flex;
            align-items: stretch;
            height: 2em;
            position: relative;
            z-index: 1;
        }


        .input-group-outer {
            position: absolute;
            z-index: 0;
            text-align: center;
            width: 100%;

            font-size: .75em;
            height: 2em;
            background: var( --thermal-slate-light );

            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );

            opacity: 0;

            transition: all .25s ease-in-out;

            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .25em;

            &.input-group-outer__top {
                top: 3px;
                padding-bottom: .5em;
                border-radius: var( --thermal-radius ) var( --thermal-radius ) 0 0;
            }

            &.input-group-outer__bottom {
                bottom: 3px;
                padding-top: .5em;
                border-radius: 0 0 var( --thermal-radius ) var( --thermal-radius );
            }
        }

        .input-group:focus-within .input-group-outer {

            opacity: 1;

            &.input-group-outer__top {
                top: -1.5em;
            }

            &.input-group-outer__bottom {
                bottom: -1.5em;
            }
        }

        .input-group.is-whole-number .input-group-outer__bottom {
            opacity: 0;
            bottom: 3px;
        }

        .input-group button,
        .input-group aside,
        .input-group input {

            border: 0;
            border-top: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
            border-bottom: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );

            color: var( --thermal-foreground );
            background: var( --thermal-background );
            
            font-family: inherit;
            font-size: 1em;
            line-height: 1em;

            transition: all .25s ease-in-out;
        
        }

        .input-group-inner input, 
        .input-group-inner aside {
            display: block;
            vertical-align: middle;
        }

        .input-group-inner aside {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: .3em;
        }

        .input-group-inner input {

            outline: 0;
            padding: 0;
            margin: 0;

            text-align: right;

            width: 3.5em;

            &:hover,
            &:focus {
                color: var( --thermal-primary );
            }

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
            }

            &[type=number] {
                -moz-appearance:textfield; /* Firefox */
            }
            
        }

        .input-group-inner > button {

            cursor: pointer;

            outline: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            &.left {
                border-right: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
            }

            &.right {
                border-left: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
            }

            &:hover,
            &:focus {
                background: var( --thermal-slate-light );
            }

            &:disabled {
                
                cursor: not-allowed;
                color: var( --thermal-slate-light );
                
                &:hover,
                &:focus {
                    background: var( --thermal-background );
                }
            }

            &:first-child {
                border-left: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
                border-radius: var( --thermal-radius ) 0 0 var( --thermal-radius );
            }

            &:last-child {
                border-right: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
                border-radius: 0 var( --thermal-radius ) var( --thermal-radius ) 0;
            }

            svg {
                display: block;
            }
        
        }

        .step-button {
            
            color: var( --thermal-slate ) !important;
            cursor: pointer;
            font-size: .7em;
            padding: .2em .3em;
            transition: all .25s ease-in-out;

            background: transparent !important;
            border: none !important;

            &:hover:not(:disabled) {
                color: var( --thermal-primary );
            }

            &.active {
                font-weight: bold;
                color: var( --thermal-foreground ) !important;
            }

            &:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
        }

        .round-button {
            
            color: var( --thermal-foreground );
            cursor: pointer;
            font-size: .8em;
            padding: .3em .6em;
            transition: all .25s ease-in-out;
            border: 0 !important;
            background: transparent !important;

            &:hover:not(:disabled) {
                color: var( --thermal-primary );
            }

            &:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
        }
    
    `;
	}
	renderInput(type, before = void 0, after = void 0) {
		const value = type === "from" ? this.from : this.to;
		const inputValue = this.inputValues[type];
		const canStepDown = type === "from" ? this.canStepFrom("down") : this.canStepTo("down");
		const canStepUp = type === "from" ? this.canStepFrom("up") : this.canStepTo("up");
		const availableSteps = this.getAvailableSteps();
		return lit.html`
        <div class="input-group ${this.isWholeNumber(value) ? "is-whole-number" : ""}">
            <div class="input-group-outer input-group-outer__top">
                ${availableSteps.map((stepValue) => lit.html`
                    <button 
                        class="step-button ${stepValue === this.step ? "active" : ""}"
                        ?disabled=${!availableSteps.includes(stepValue)}
                        @click=${() => this.setStep(stepValue)}
                    >
                        ${stepValue}
                    </button>
                `)}
            </div>
            <div class="input-group-inner">
                ${before}
                <button 
                    class="left"
                    ?disabled=${!canStepDown}
                    @click=${() => type === "from" ? this.stepFrom("down") : this.stepTo("down")}
                >-</button>
                <input
                    .value=${inputValue}
                    type="number"
                    step=${this.step}
                    min=${type === "from" ? this.min : this.from}
                    max=${type === "from" ? this.to : this.max}
                    @input=${(e) => {
			const target = e.target;
			this.inputValues = {
				...this.inputValues,
				[type]: target.value
			};
			this.debouncedUpdate(type, target.value);
		}}
                    @blur=${(e) => {
			const target = e.target;
			this.handleInputBlur(type, target.value);
		}}
                    @keydown=${(e) => {
			if (e.key === "ArrowUp" || e.key === "ArrowDown") {
				e.preventDefault();
				const direction = e.key === "ArrowUp" ? "up" : "down";
				if (type === "from") this.stepFrom(direction);
				else this.stepTo(direction);
			}
		}}
                ></input>
                <aside>°C</aside>
                <button 
                    class="right"
                    ?disabled=${!canStepUp}
                    @click=${() => type === "from" ? this.stepFrom("up") : this.stepTo("up")}
                >+</button>
                ${after}
            </div>
            <div class="input-group-outer input-group-outer__bottom">
                <button 
                    class="round-button"
                    @click=${() => this.roundToNearestInteger(type)}
                >
                    Zaokrouhlit
                </button>
            </div>
        </div>
        `;
	}
	render() {
		return lit.html`
        <div class="fields">

            ${this.renderInput("from", lit.html`<button 
                    class="left"
                    ?disabled=${!this.canSetMin()}
                    @click=${() => this.setMinValue()}
                >
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <line x1="5" y1="2" x2="5" y2="14" stroke="currentColor" stroke-width="1"/>
                        <line x1="5" y1="8" x2="10" y2="4" stroke="currentColor" stroke-width="1"/>
                        <line x1="5" y1="8" x2="10" y2="12" stroke="currentColor" stroke-width="1"/>
                        <line x1="5" y1="8" x2="16" y2="8" stroke="currentColor" stroke-width="1"/>
                    </svg>
                </button>`, void 0)}
            <div class="separator separator__line"></div>
            ${this.renderInput("to", void 0, lit.html`<button 
                    class="right"
                    ?disabled=${!this.canSetMax()}
                    @click=${() => this.setMaxValue()}
                >
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <line x1="15" y1="2" x2="15" y2="14" stroke="currentColor" stroke-width="1"/>
                        <line x1="15" y1="8" x2="10" y2="4" stroke="currentColor" stroke-width="1"/>
                        <line x1="15" y1="8" x2="10" y2="12" stroke="currentColor" stroke-width="1"/>
                        <line x1="15" y1="8" x2="4" y2="8" stroke="currentColor" stroke-width="1"/>
                    </svg>
                </button>`)}

        </div>

        <div class="fields fields__separated fields__buttons">
            <thermal-btn
                tooltip=${(0, i18next.t)(T.fullrange)}
                @click=${() => {
			this.registry.range.applyMinmax();
		}}
                style="padding: 0 0.5em; display: flex; align-items: center; justify-content: center;"
                disabled="${this.canSetMin() || this.canSetMax() ? "false" : "true"}"
            >
                <svg width="35" height="16" viewBox="0 0 35 16" fill="none" style="display: block;" stroke-linecap="butt" stroke-linejoin="miter">
                    <!-- Levý symbol (min) -->
                    <line x1="3" y1="2" x2="3" y2="14" stroke="currentColor" stroke-width="1"/>
                    <line x1="3" y1="8" x2="8" y2="3" stroke="currentColor" stroke-width="1"/>
                    <line x1="3" y1="8" x2="8" y2="13" stroke="currentColor" stroke-width="1"/>
                    <!-- Spojitá čára se šipkami na koncích -->
                    <line x1="3" y1="8" x2="32" y2="8" stroke="currentColor" stroke-width="1"/>
                    <!-- Pravý symbol (max) -->
                    <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="1"/>
                    <line x1="32" y1="8" x2="27" y2="3" stroke="currentColor" stroke-width="1"/>
                    <line x1="32" y1="8" x2="27" y2="13" stroke="currentColor" stroke-width="1"/>
                </svg>
            </thermal-btn>
            
            <thermal-btn
                tooltip=${(0, i18next.t)(T.automaticrange)}
                @click=${() => {
			this.registry.range.applyAuto();
		}}
                disabled="${this.hasHistogram ? "false" : "true"}"
                style="padding: 0 0.5em; display: flex; align-items: center; justify-content: center;"
            >
                <svg width="56" height="16" viewBox="0 0 56 16" fill="none" style="display: block;">
                    <!-- All bars sorted by X coordinate - background (slate color) -->
                    <rect x="2" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="4" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="6" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="8" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="10" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="12" y="9" width="2" height="5" fill="var(--thermal-slate)"/>
                    <rect x="14" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="16" y="11" width="2" height="3" fill="var(--thermal-slate)"/>
                    <rect x="18" y="6" width="2" height="8" fill="var(--thermal-slate)"/>
                    <rect x="20" y="2" width="2" height="12" fill="var(--thermal-slate)"/>
                    <rect x="22" y="3" width="2" height="11" fill="var(--thermal-slate)"/>
                    <rect x="24" y="1" width="2" height="13" fill="var(--thermal-slate)"/>
                    <rect x="26" y="2" width="2" height="12" fill="var(--thermal-slate)"/>
                    <rect x="28" y="4" width="2" height="10" fill="var(--thermal-slate)"/>
                    <rect x="30" y="8" width="2" height="6" fill="var(--thermal-slate)"/>
                    <rect x="32" y="10" width="2" height="4" fill="var(--thermal-slate)"/>
                    <rect x="34" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="36" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="38" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="40" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="42" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="44" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="46" y="11" width="2" height="3" fill="var(--thermal-slate)"/>
                    <rect x="48" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="50" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="52" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <!-- Highlighted section - foreground color (sorted by X) -->
                    <rect x="18" y="6" width="2" height="8" fill="var(--thermal-foreground)"/>
                    <rect x="20" y="2" width="2" height="12" fill="var(--thermal-foreground)"/>
                    <rect x="22" y="3" width="2" height="11" fill="var(--thermal-foreground)"/>
                    <rect x="24" y="1" width="2" height="13" fill="var(--thermal-foreground)"/>
                    <rect x="26" y="2" width="2" height="12" fill="var(--thermal-foreground)"/>
                    <rect x="28" y="4" width="2" height="10" fill="var(--thermal-foreground)"/>
                    <!-- Bottom line with offset -->
                    <line x1="17" y1="15.5" x2="31" y2="15.5" stroke="currentColor" stroke-width="1"/>
                </svg>
            </thermal-btn>
        </div>

        `;
	}
};
__decorate([(0, lit_decorators_js.property)({
	reflect: true,
	converter: booleanConverter(true)
}), __decorateMetadata("design:type", Boolean)], RegistryRangeForm.prototype, "stacked", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Object)], RegistryRangeForm.prototype, "min", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Object)], RegistryRangeForm.prototype, "max", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Object)], RegistryRangeForm.prototype, "from", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Object)], RegistryRangeForm.prototype, "to", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Number)], RegistryRangeForm.prototype, "step", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Array)], RegistryRangeForm.prototype, "availableSteps", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Object)], RegistryRangeForm.prototype, "inputValues", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], RegistryRangeForm.prototype, "isUpdatingFromRegistry", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], RegistryRangeForm.prototype, "hasHistogram", void 0);

//#endregion
//#region src/controls/registry/RegistryTicksBar.ts
var _ref$5, _ref2$1;
var RegistryTicksBar = class RegistryTicksBar extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.ticksRef = (0, lit_directives_ref_js.createRef)();
		this.placement = "top";
		this.minmax = void 0;
		this.ticks = [];
		this.containerRef = (0, lit_directives_ref_js.createRef)();
	}
	static {
		this.TICK_WIDTH = 40;
	}
	static {
		this.TICK_FIXED = 2;
	}
	connectedCallback() {
		super.connectedCallback();
		this.registry.minmax.addListener(this.UUID, (value) => {
			this.minmax = value;
			if (this.ticksRef.value) this.calculateTicks(value, this.ticksRef.value.clientWidth);
		});
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.observer = new ResizeObserver((entries) => {
			const entry = entries[0];
			this.calculateTicks(this.minmax, entry.contentRect.width);
		});
		this.observer.observe(this.ticksRef.value);
	}
	clamp(input, min, max) {
		return input < min ? min : input > max ? max : input;
	}
	map(current, in_min, in_max, out_min, out_max) {
		const mapped = (current - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		return this.clamp(mapped, out_min, out_max);
	}
	calculateTicks(minmax, width) {
		if (minmax === void 0) this.ticks = [];
		else {
			const ticksPercentageBuffer = [0];
			const numTicks = Math.floor(width / RegistryTicksBar.TICK_WIDTH) - 2;
			const step = 100 / numTicks;
			for (let i = 1; i < numTicks; i++) ticksPercentageBuffer.push(step * i);
			ticksPercentageBuffer.push(100);
			this.ticks = ticksPercentageBuffer.map((percent) => this.calculateOneTick(minmax, percent)).filter((value) => value !== void 0);
		}
	}
	calculateOneTick(minmax, percent) {
		if (minmax === void 0) return;
		else return {
			percentage: percent,
			value: this.map(percent, 0, 100, minmax.min, minmax.max)
		};
	}
	static {
		this.styles = lit.css`

        .container {
            padding: 0 calc( var( --thermal-gap ) * .5 );
            height: var( --thermal-fs );
            
        }

        .skeleton {
            height: 100%;
            background: var( --thermal-slate-light );
        }

        .ready {
            .skeleton {
                display: none;
            }
        }

        .ticks {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            width: 100%;
            position: relative;
            color: var( --thermal-slate-dark );
            font-family: sans-serif;
            height: 1em;
        }

        .tick {

            position: relative;

            &::before {
                display: block;
                content: "";
                width: 1px;
                height: 10px;
                background: var(--thermal-slate);
            }
        
        }

        .placement-top {
            margin-top: 10x;
            padding-bottom: var( --thermal-gap );
            .tick {
                &::before {
                    background: var(--thermal-slate);
                }
            }
        }

        .placement-bottom {
            .tick {
                &::before {
                    display: block;
                    content: "";
                    width: 1px;
                    height: 5px;
                    background: currentcolor;

                    position: absolute;
                    top: 12px;
                }
            }
        }

        .tick-value {

            position: absolute;
            width: 40px;
            left: -20px;
            text-align: center;
        
        }


    `;
	}
	render() {
		let highlightLeft = void 0;
		let highlightWidth = void 0;
		if (this.registry.minmax.value && this.highlight) {
			const min = this.registry.minmax.value.min;
			const minmax = this.registry.minmax.value.max - min;
			highlightLeft = (this.highlight.from - min) / minmax * 100;
			highlightWidth = (this.highlight.to - min) / minmax * 100 - highlightLeft;
		}
		return lit.html`

            <div class="container ${this.minmax !== void 0 ? "ready" : "loading"} placement-${this.placement}" ${(0, lit_directives_ref_js.ref)(this.containerRef)}>

                <div class="skeleton" data-video-ignore></div>

                <div class="ticks" ${(0, lit_directives_ref_js.ref)(this.ticksRef)}>

                    ${highlightLeft !== void 0 && highlightWidth !== void 0 ? lit.html`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${highlightLeft}%; width: ${highlightWidth}%; background-color: var(--thermal-foreground)"></div>` : lit.nothing}

                    ${this.ticks.map((tick) => {
			return lit.html`
                    <div class="tick" >
                        <div class="tick-value">
                            ${tick.value.toFixed(RegistryTicksBar.TICK_FIXED)}
                        </div>
                    </div>
                        `;
		})}

                </div>                

            </div>
        
        `;
	}
};
__decorate([(0, _lit_context.consume)({
	context: registryHighlightContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref$5 = typeof _labirthermal_core.ThermalRangeOrUndefined !== "undefined" && _labirthermal_core.ThermalRangeOrUndefined) === "function" ? _ref$5 : Object)], RegistryTicksBar.prototype, "highlight", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], RegistryTicksBar.prototype, "placement", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", typeof (_ref2$1 = typeof _labirthermal_core.ThermalMinmaxOrUndefined !== "undefined" && _labirthermal_core.ThermalMinmaxOrUndefined) === "function" ? _ref2$1 : Object)], RegistryTicksBar.prototype, "minmax", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Array)], RegistryTicksBar.prototype, "ticks", void 0);

//#endregion
//#region src/controls/registry/RegistryRangeSlider.ts
var RegistryRangeSlider = class extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.loading = false;
		this.activeHandle = "from";
	}
	getClassName() {
		return "RangeSliderElement";
	}
	disconnectedCallback() {
		this.cancelDrag();
		super.disconnectedCallback();
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		if ([
			"min",
			"max",
			"from",
			"to",
			"loading",
			"registryController"
		].some((key) => changed.has(key))) {
			this.cancelDrag();
			if (this.min !== void 0 && this.max !== void 0 && this.from !== void 0 && this.to !== void 0 && !this.values) this.log("Invalid range slider values", {
				min: this.min,
				max: this.max,
				from: this.from,
				to: this.to
			});
		}
	}
	get values() {
		const { min, max, from, to } = this;
		if (min === void 0 || max === void 0 || from === void 0 || to === void 0) return void 0;
		if (![
			min,
			max,
			from,
			to,
			max - min
		].every(Number.isFinite) || min > max || from < min || to > max || from > to) return void 0;
		return {
			min,
			max,
			from,
			to
		};
	}
	percent(value, values) {
		return values.max === values.min ? 0 : (value - values.min) / (values.max - values.min) * 100;
	}
	constrain(handle, value, values, range) {
		return handle === "from" ? {
			from: Math.max(values.min, Math.min(range.to, value)),
			to: range.to
		} : {
			from: range.from,
			to: Math.min(values.max, Math.max(range.from, value))
		};
	}
	commit(range) {
		this.cancelDrag();
		if (range.from === this.from && range.to === this.to) return;
		this.registryController.setRange(range.from, range.to);
		this.from = this.registryController.from;
		this.to = this.registryController.to;
	}
	cancelDrag() {
		const drag = this.drag;
		this.drag = void 0;
		this.draft = void 0;
		if (drag?.element.hasPointerCapture(drag.pointerId)) drag.element.releasePointerCapture(drag.pointerId);
	}
	pointerDown(event) {
		const values = this.values;
		if (!values || this.loading || values.min === values.max || this.drag || event.button !== 0) return;
		const track = event.currentTarget;
		const target = event.target;
		if (!(track instanceof HTMLElement) || !(target instanceof HTMLElement)) return;
		const rect = track.getBoundingClientRect();
		if (rect.width === 0) return;
		const pointerPercent = (event.clientX - rect.left) / rect.width * 100;
		const clickedHandle = target.closest("[data-handle]")?.dataset.handle;
		let handle;
		if (clickedHandle === "from" || clickedHandle === "to") handle = clickedHandle;
		else {
			const fromDistance = Math.abs(pointerPercent - this.percent(values.from, values));
			const toDistance = Math.abs(pointerPercent - this.percent(values.to, values));
			handle = fromDistance === toDistance ? this.activeHandle : fromDistance < toDistance ? "from" : "to";
		}
		event.preventDefault();
		this.activeHandle = handle;
		track.querySelector(`[data-handle="${handle}"]`)?.focus({ preventScroll: true });
		this.draft = {
			from: values.from,
			to: values.to
		};
		const offset = clickedHandle ? event.clientX - rect.left - this.percent(values[handle], values) / 100 * rect.width : 0;
		this.drag = {
			pointerId: event.pointerId,
			handle,
			offset,
			element: track,
			values,
			controller: this.registryController
		};
		track.setPointerCapture(event.pointerId);
		this.pointerMove(event);
	}
	pointerMove(event) {
		const drag = this.drag;
		const values = this.values;
		if (!drag || event.pointerId !== drag.pointerId) return;
		if (!values || !this.draft || this.loading || this.registryController !== drag.controller || values.min !== drag.values.min || values.max !== drag.values.max || values.from !== drag.values.from || values.to !== drag.values.to) {
			this.cancelDrag();
			return;
		}
		const rect = drag.element.getBoundingClientRect();
		if (rect.width === 0) return;
		const fraction = Math.max(0, Math.min(1, (event.clientX - rect.left - drag.offset) / rect.width));
		const value = fraction === 0 ? values.min : fraction === 1 ? values.max : values.min + fraction * (values.max - values.min);
		this.draft = this.constrain(drag.handle, value, values, this.draft);
	}
	pointerUp(event) {
		if (this.drag?.pointerId !== event.pointerId) return;
		this.pointerMove(event);
		const range = this.draft;
		if (range) this.commit(range);
		else this.cancelDrag();
	}
	pointerCancel(event) {
		if (this.drag?.pointerId === event.pointerId) this.cancelDrag();
	}
	keyDown(event, handle) {
		const values = this.values;
		if (!values || this.loading || values.min === values.max) return;
		let value;
		switch (event.key) {
			case "ArrowLeft":
				value = Number((values[handle] - (values.max - values.min) / 100).toPrecision(15));
				break;
			case "ArrowRight":
				value = Number((values[handle] + (values.max - values.min) / 100).toPrecision(15));
				break;
			case "ArrowUp":
			case "Home":
				value = values.min;
				break;
			case "ArrowDown":
			case "End":
				value = values.max;
				break;
			default: return;
		}
		event.preventDefault();
		event.stopPropagation();
		this.activeHandle = handle;
		this.commit(this.constrain(handle, value, values, values));
	}
	wheel(event, handle) {
		const values = this.values;
		if (!values || this.loading || values.min === values.max || event.deltaY === 0 || this.drag) return;
		event.preventDefault();
		event.stopPropagation();
		this.activeHandle = handle;
		const value = Number((values[handle] + Math.sign(event.deltaY) * (values.max - values.min) / 100).toPrecision(15));
		this.commit(this.constrain(handle, value, values, values));
	}
	renderHandle(handle, values, range) {
		const disabled = values.min === values.max;
		return lit.html`
            <div class="handle-position ${this.activeHandle === handle ? "active" : ""}"
                style=${(0, lit_directives_style_map_js.styleMap)({ left: `${this.percent(range[handle], values)}%` })}>
                <button type="button" class="handle" data-handle=${handle} role="slider"
                    aria-label=${this.t(handle === "from" ? "minimaltemperature" : "maximaltemperature")}
                    aria-orientation="horizontal"
                    aria-valuemin=${handle === "from" ? values.min : range.from}
                    aria-valuemax=${handle === "from" ? range.to : values.max}
                    aria-valuenow=${range[handle]}
                    aria-valuetext=${`${range[handle].toFixed(2)} \u00b0C`}
                    ?disabled=${disabled}
                    style=${(0, lit_directives_style_map_js.styleMap)({ background: handle === "from" ? this.palette?.data.pixels[0] : this.palette?.data.pixels[this.palette.data.pixels.length - 1] })}
                    @focus=${() => {
			this.activeHandle = handle;
		}}
                    @keydown=${(event) => this.keyDown(event, handle)}
                    @wheel=${(event) => this.wheel(event, handle)}>
                </button>
                <span class="tooltip" aria-hidden="true">${range[handle].toFixed(2)}</span>
            </div>`;
	}
	static {
		this.styles = lit.css`
        :host { display: block; }
        .container {
            height: var(--thermal-gap);
            padding: 0 calc(var(--thermal-gap) * .5);
            margin-bottom: -6px;
            color: var(--thermal-slate-dark);
            font-size: 12px;
        }
        .slider-row { display: flex; align-items: center; }
        .track {
            position: relative; flex: 1; min-width: 0; height: 15px;
            background: var(--thermal-slate); cursor: pointer; touch-action: none;
        }
        .fill { position: absolute; height: 100%; pointer-events: none; }
        .handle-position { position: absolute; top: 50%; z-index: 20; }
        .handle-position.active { z-index: 21; }
        .handle {
            position: absolute; transform: translate(-50%, -50%);
            box-sizing: border-box; width: 14px; height: 20px; padding: 0; border-radius: 0;
            border: 2px solid var(--thermal-primary); background: var(--thermal-background);
            box-shadow: 0 0 5px var(--thermal-primary); cursor: grab; touch-action: none;
        }
        .handle:hover, .handle:focus-visible { box-shadow: 0 0 10px var(--thermal-primary); }
        .handle:focus-visible { outline: 2px solid var(--thermal-primary); outline-offset: 2px; }
        .handle:active { cursor: grabbing; }
        .handle:disabled { cursor: default; }
        .tooltip {
            position: absolute; transform: translate(-50%, -50%); white-space: nowrap; pointer-events: none;
            top: 22px; min-width: 40px; height: 20px; line-height: 20px; text-align: center;
            padding: 0 3px; background: var(--thermal-slate-dark); color: var(--thermal-background);
            border: 1px solid var(--thermal-slate-dark); border-radius: 3px;
        }
        .tooltip::before {
            content: ""; position: absolute; top: -4px; left: calc(50% - 4px);
            width: 7px; height: 7px; transform: rotate(45deg);
            background: var(--thermal-slate-dark);
        }
        .skeleton { height: calc(var(--thermal-fs) * .9); background: var(--thermal-slate); }
    `;
	}
	render() {
		const values = this.values;
		if (this.loading || !values) return lit.html`<div class="container loading" aria-busy=${this.loading}><div class="skeleton"></div></div><slot></slot>`;
		const range = this.draft ?? values;
		const left = this.percent(range.from, values);
		const right = this.percent(range.to, values);
		return lit.html`
            <div class="container ready">
                <div class="slider-row">
                    <div class="track"
                        @pointerdown=${this.pointerDown}
                        @pointermove=${this.pointerMove}
                        @pointerup=${this.pointerUp}
                        @pointercancel=${this.pointerCancel}
                        @lostpointercapture=${this.pointerCancel}
                        @wheel=${(event) => this.wheel(event, this.activeHandle)}>
                        <div class="fill" style=${(0, lit_directives_style_map_js.styleMap)({
			left: `${left}%`,
			width: `${right - left}%`,
			background: this.palette?.data.gradient
		})}></div>
                        ${this.renderHandle("from", values, range)}
                        ${this.renderHandle("to", values, range)}
                    </div>
                </div>
            </div>
            <slot></slot>`;
	}
};
__decorate([
	(0, _lit_context.consume)({
		context: registryMinContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Number)
], RegistryRangeSlider.prototype, "min", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: registryMaxContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Number)
], RegistryRangeSlider.prototype, "max", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: registryRangeFromContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Number)
], RegistryRangeSlider.prototype, "from", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: registryRangeToContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Number)
], RegistryRangeSlider.prototype, "to", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: managerPaletteContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Object)
], RegistryRangeSlider.prototype, "palette", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: registryLoadingContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Object)
], RegistryRangeSlider.prototype, "loading", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Object)], RegistryRangeSlider.prototype, "draft", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Object)], RegistryRangeSlider.prototype, "activeHandle", void 0);

//#endregion
//#region src/controls/registry/RegistryRangeFullButton.ts
var RegistryRangeFullButton = class extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.buttonRef = (0, lit_directives_ref_js.createRef)();
	}
	doAction() {
		this.registry.range.applyMinmax();
	}
	mouseenter() {
		if (this.registry.minmax.value !== void 0 && this.setter) this.setter({
			from: this.registry.minmax.value.min,
			to: this.registry.minmax.value.max
		});
	}
	mouseleave() {
		if (this.setter) this.setter(void 0);
	}
	render() {
		return lit.html`<thermal-btn 
    ${(0, lit_directives_ref_js.ref)(this.buttonRef)} 
    @click=${this.doAction} 
    @mouseenter="${this.mouseenter}" 
    @mouseleave="${this.mouseleave}"
    @focus="${this.mouseenter}"
    @blur="${this.mouseleave}"
>${(0, i18next.t)(T.fullrange)}</thermal-btn>`;
	}
};
__decorate([(0, _lit_context.consume)({
	context: setRegistryHighlightContext,
	subscribe: true
}), __decorateMetadata("design:type", Function)], RegistryRangeFullButton.prototype, "setter", void 0);

//#endregion
//#region src/controls/registry/RegistryRangeAutoButton.ts
var RegistryRangeAutoButton = class extends AbstractRegistryConsumer {
	doAction() {
		this.registry.range.applyAuto();
	}
	render() {
		return lit.html`<thermal-btn @click=${this.doAction}>${(0, i18next.t)(T.automaticrange)}</thermal-btn>`;
	}
};

//#endregion
//#region src/controls/registry/RegistryRangeDisplay.ts
var RegistryRangeDisplay = class extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.fixed = 2;
		this.separator = "-";
	}
	render() {
		if (this.from === void 0 || this.to === void 0) return lit.nothing;
		return lit.html`
            <div>
                <span>${this.from?.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${this.to?.toFixed(this.fixed)} °C</span>
            </div>
        `;
	}
};
__decorate([(0, _lit_context.consume)({
	context: registryRangeFromContext,
	subscribe: true
}), __decorateMetadata("design:type", Number)], RegistryRangeDisplay.prototype, "from", void 0);
__decorate([(0, _lit_context.consume)({
	context: registryRangeToContext,
	subscribe: true
}), __decorateMetadata("design:type", Number)], RegistryRangeDisplay.prototype, "to", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true,
	converter: {
		fromAttribute: (value) => {
			return Math.round(parseFloat(value));
		},
		toAttribute: (value) => {
			return value.toString();
		}
	}
}), __decorateMetadata("design:type", Number)], RegistryRangeDisplay.prototype, "fixed", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], RegistryRangeDisplay.prototype, "separator", void 0);

//#endregion
//#region src/controls/registry/RegistryOpacitySlider.ts
var RegistryOpacitySlider = class extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.containerRef = (0, lit_directives_ref_js.createRef)();
	}
	connectedCallback() {
		super.connectedCallback();
		const handleIncomingChange = (value) => {
			if (this.value !== value) this.renderRoot.querySelector("#handler").value = value.toString();
		};
		this.registry.opacity.addListener(this.UUID, handleIncomingChange.bind(this));
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.registry.opacity.removeListener(this.UUID);
	}
	/** Handle user input events */
	handleUserChangeEvent(event) {
		const value = parseFloat(event.target.value);
		this.registry.opacity.imposeOpacity(value);
	}
	static {
		this.styles = lit.css`

        :host {
        }

        .thermal-opacity-handler {
            display: block;
            width: 100%;
            max-width: 100px;
            min-width: 75px;
            cursor: pointer;
            accent-color: var(--thermal-primary);
            
        }
        
        .thermal-opacity-container {
            display: flex;
            width: 100%;
            align-items: space-between;
            justify-content: space-between;
            color: var( --thermal-slate-dark );
            font-size: calc( var( --thermal-fs-sm ) * .7 );
            max-width: 100px;
            min-width: 75px;
        }
    
    `;
	}
	render() {
		return lit.html`
            <div ${(0, lit_directives_ref_js.ref)(this.containerRef)}>
                <input
                    id="handler"
                    class="thermal-opacity-handler"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value="${this.value}"
                    @input="${this.handleUserChangeEvent}"
                />
                <div class="thermal-opacity-container">
                    <div>VIS</div>
                    <div>${this.value}</div>
                    <div>IR</div>
                </div>
            </div>
            <slot></slot>
        `;
	}
};
__decorate([(0, _lit_context.consume)({
	context: registryOpacityContext,
	subscribe: true
}), __decorateMetadata("design:type", Number)], RegistryOpacitySlider.prototype, "value", void 0);

//#endregion
//#region src/controls/group/GroupChartElement.ts
/**
* @license
* Copyright 2014-2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _ref$4;
var GroupChartElement = class extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.instances = [];
		this.on = false;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.group.files.addListener(this.UUID, () => {
			this.group.analysisGraph.turnOn();
		});
		this.group.analysisGraph.addListener(this.UUID, (value) => {
			if (value !== void 0) {
				this.data = value.data;
				this.colors = value.colors;
				this.on = true;
			} else {
				this.data = void 0;
				this.colors = void 0;
				this.on = false;
			}
		});
	}
	static {
		this.styles = lit.css`
    
        .wrapper {
            transition: all 0.3s ease-in-out;
            width: 100%;
            overflow: hidden;
        }

        .on {
            height: 300px;
            border-bottom: 1px solid var( --thermalforeground );
        }

        .off {
            height: 0px;
        }

    `;
	}
	download() {
		const svg = this.shadowRoot?.querySelectorAll("google-chart");
		console.log(svg);
	}
	render() {
		return lit.html`
            <div class="wrapper ${this.on ? "on" : "off"}">

                ${this.on === true ? lit.html`
                    <google-chart 
                        .data=${this.data} 
                        .options=${{
			colors: this.colors,
			legend: { position: "bottom" },
			hAxis: { title: "Time" },
			vAxis: { title: "Temperature °C" },
			chartArea: { width: "90%" }
		}}
                        type="line"
                        width="100%"
                        style="width: 100%;height: 300px"
                    ></google-chart>
                ` : lit.nothing}
                
            </div>
        `;
	}
};
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Array)], GroupChartElement.prototype, "instances", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", typeof (_ref$4 = typeof NodeJS !== "undefined" && NodeJS.Timeout) === "function" ? _ref$4 : Object)], GroupChartElement.prototype, "timeout", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Object)], GroupChartElement.prototype, "data", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Array)], GroupChartElement.prototype, "colors", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], GroupChartElement.prototype, "on", void 0);

//#endregion
//#region src/controls/group/GroupAnalysisSyncButton.ts
var GroupAnalysisSyncButton = class extends AbstractGroupConsumer {
	connectedCallback() {
		super.connectedCallback();
		if (this.on) {
			const id = this.UUID + "__initial";
			this.group.files.addListener(id, (value) => {
				if (value.length > 0) {
					this.group.analysisSync.turnOn(value[0]);
					this.group.files.removeListener(id);
				}
			});
		} else this.on = this.group.analysisSync.value;
		this.group.analysisSync.addListener(this.UUID, (value) => {
			this.on = value;
		});
		this.addEventListener("click", () => {
			this.toggle();
		});
	}
	turnOn() {
		if (this.group.files.value.length > 0) this.group.analysisSync.turnOn(this.group.files.value[0]);
	}
	turnOff() {
		this.group.analysisSync.turnOff();
	}
	toggle() {
		this.on ? this.turnOff() : this.turnOn();
	}
	static {
		this.styles = lit.css`
    
        :host {
            font-size: var(--thermal-fs);
            cursor: pointer;
        }

        :host(:hover) {
            span {
                
            }
        }

        :host([on=true]) {
            span i {
                background: var(--thermal-primary);
            }
        }

        :host([on=false]) {
            span i {
                background: var(--thermal-slate);
            }
        }

        span {
            transition: all .3s ease-in-out;
            display: inline-block;
            width: .8em;
            height: .8em;
            border-radius: 50%;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            position: relative;
            overflow: hidden;
        }

        i {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid var(--thermal-background);
            box-sizing: border-box;
        }

        input {
            display: none;
        }

        div {
            font-size: .9em;
            pointer-events: visible;
            display: inline-block;
        }
    
    `;
	}
	render() {
		return lit.html`  
        <span><i></i></span>      
        <div>${(0, i18next.t)(T.analysissync)}</div>
        `;
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
}), __decorateMetadata("design:type", Boolean)], GroupAnalysisSyncButton.prototype, "on", void 0);

//#endregion
//#region src/controls/group/GroupDownloadDropdown.ts
var GroupDownloadDropdown = class extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.pngColumns = 3;
		this.pngGroupName = false;
		this.pngFontSize = 12;
		this.pngShowAnalysis = true;
		this.pngFileDate = true;
		this.pngFileName = false;
		this.pngWidth = 800;
		this.pngShowScale = true;
	}
	static {
		this.styles = lit.css`
        thermal-btn {
            text-align: left;
        }
    `;
	}
	render() {
		return lit.html`
        
            <thermal-dropdown class="download ${this.classList.contains("small") ? "small" : ""}">
            
                <span slot="invoker">${(0, i18next.t)(T.download)}</span>
            
                <thermal-btn 
                    slot="option" 
                    pre="LRC" 
                    @click=${() => this.group.files.downloadAllFiles()}
                    tooltip=${(0, i18next.t)(T.downloadoriginalfileshint)}
                    tooltip-placement="right"
                >
                    ${(0, i18next.t)(T.downloadoriginalfiles)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="PNG" 
                    @click=${() => this.group.forEveryInstance((instance) => instance.export.downloadPng())}
                    tooltip=${(0, i18next.t)(T.pngofindividualimageshint)}
                    tooltip-placement="right"
                >
                    ${(0, i18next.t)(T.pngofindividualimages)}
                </thermal-btn>

                <thermal-btn 
                    slot="option"
                    pre="PNG" 
                    @click=${() => this.group.analysisSync.png.downloadPng({
			columns: this.pngColumns,
			showGroupName: this.pngGroupName,
			fontSize: this.pngFontSize,
			showAnalysis: this.pngShowAnalysis,
			showFileDate: this.pngFileDate,
			showFileName: this.pngFileName,
			showThermalScale: this.pngShowScale,
			width: this.pngWidth
		})}
                    tooltip="${(0, i18next.t)(T.pngofentiregrouphint)}"
                    tooltip-placement="right"
                >
                    ${(0, i18next.t)(T.pngofentiregroup)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="CSV" 
                    @click=${() => {
			this.group.analysisSync.csv.downloadAsCsv();
		}}
                    tooltip=${(0, i18next.t)(T.csvofanalysisdatahint)}
                    tooltip-placement="right"
                >
                    ${(0, i18next.t)(T.csvofanalysisdata)}
                </thermal-btn>
            
            </thermal-dropdown>
        
        `;
	}
};
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportColumnsContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Number)
], GroupDownloadDropdown.prototype, "pngColumns", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportGroupNameContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadDropdown.prototype, "pngGroupName", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportFsContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Number)
], GroupDownloadDropdown.prototype, "pngFontSize", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportAnalysisContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadDropdown.prototype, "pngShowAnalysis", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportFileDateContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadDropdown.prototype, "pngFileDate", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportFileNameContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadDropdown.prototype, "pngFileName", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportWidthContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Number)
], GroupDownloadDropdown.prototype, "pngWidth", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportScaleContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadDropdown.prototype, "pngShowScale", void 0);

//#endregion
//#region src/controls/group/GroupDownloadButtons.ts
var GroupDownloadButtons = class extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.pngWidth = 1350;
	}
	static {
		this.styles = lit.css`

        :host {
        
            display: flex;
            flex-direction: column;
            gap: 5px;

        }

        button.default {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var(--thermal-foreground);
            border-color: var(--thermal-slate);
            border-style: solid;
            border-width: 1px;
            border-radius: var( --thermal-radius );
            background-color: var(--thermal-slate-light);
            white-space: preserve nowrap;
            &:hover {
                cursor: pointer;
                background: var(--thermal-background);
            }
        }
    
    `;
	}
	render() {
		return lit.html`
        
                <button class="default" @click=${() => this.group.files.downloadAllFiles()}>${(0, i18next.t)(T.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${() => this.group.forEveryInstance((instance) => instance.export.downloadPng())}>${(0, i18next.t)(T.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${() => this.group.analysisSync.png.downloadPng({
			columns: this.pngColumns,
			showAnalysis: this.pngAnalyses,
			showFileDate: this.pngFileDate,
			showFileName: this.pngFileName,
			showThermalScale: this.pngExportScale,
			showGroupName: this.pngExportGroupName,
			label: this.label,
			fontSize: this.pngFs
		})}>${(0, i18next.t)(T.pngofentiregroup)}</button>
            
                <button class="default" @click=${() => {
			this.group.analysisSync.csv.downloadAsCsv();
		}}>${(0, i18next.t)(T.csvofanalysisdata)}</button>
        
        `;
	}
};
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], GroupDownloadButtons.prototype, "label", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportWidthContext,
	subscribe: true
}), __decorateMetadata("design:type", Number)], GroupDownloadButtons.prototype, "pngWidth", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportFsContext,
	subscribe: true
}), __decorateMetadata("design:type", Number)], GroupDownloadButtons.prototype, "pngFs", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportAnalysisContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadButtons.prototype, "pngAnalyses", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportScaleContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadButtons.prototype, "pngExportScale", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportFileNameContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadButtons.prototype, "pngFileName", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportFileDateContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadButtons.prototype, "pngFileDate", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportColumnsContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Number)
], GroupDownloadButtons.prototype, "pngColumns", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: pngExportGroupNameContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", Boolean)
], GroupDownloadButtons.prototype, "pngExportGroupName", void 0);

//#endregion
//#region src/controls/group/AbstractGroupDropin.ts
var AbstractGroupDropin = class extends AbstractGroupConsumer {
	connectedCallback() {
		super.connectedCallback();
		(0, public_ip.publicIpv4)().then((ip) => this.ip = ip);
	}
	emitUpload(fileName, fileSize) {
		const userAgent = window.navigator.userAgent;
		const width = window.innerWidth;
		const height = window.innerHeight;
		const time = (/* @__PURE__ */ new Date()).getTime();
		const event = new CustomEvent("uploaded", {
			bubbles: true,
			cancelable: false,
			detail: {
				ip: this.ip,
				userAgent,
				windowWidth: width,
				windowHeight: height,
				time,
				fileName,
				fileSize
			}
		});
		this.dispatchEvent(event);
	}
};
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", String)], AbstractGroupDropin.prototype, "ip", void 0);

//#endregion
//#region src/controls/group/GroupDropinElement.ts
var _ref$3;
var GroupDropinElement = class extends AbstractGroupDropin {
	constructor(..._args) {
		super(..._args);
		this.container = (0, lit_directives_ref_js.createRef)();
		this.hover = false;
		this.uploading = false;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		if (this.container.value !== void 0) {
			const listener = this.manager.service.handleDropzone(this.container.value, false);
			listener.onMouseEnter.add(this.UUID, () => {
				console.log("mouseenter");
				this.hover = true;
			});
			listener.onMouseLeave.add(this.UUID, () => {
				console.log("mouseleave");
				this.hover = false;
			});
			listener.onDrop.set(this.UUID, () => {
				this.uploading = true;
			});
			listener.onProcessingEnd.add(this.UUID, async (results) => {
				await Promise.all(results.map(async (result) => {
					if (result instanceof _labirthermal_core.ThermalFileReader) {
						const instance = await result.createInstance(this.group);
						this.emitUpload(instance.fileName, instance.bytesize);
					}
				}));
				this.uploading = false;
			});
		}
	}
	static {
		this.styles = lit.css`

        .container {
            color: var(--thermal-foreground);
        }

        .dropin {
            width: 100%;
            aspect-ratio: 4 / 3;
            max-height: 700px;
            transition: background .5s ease-in-out;
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            cursor: pointer;
            background: var( --thermal-slate );
            position: relative;
            overflow: hidden;

        }

        .dropin-gradient {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, var(--thermal-slate-light) 0%, var(--thermal-slate) 100%);
            opacity: 0;
            transition: opacity .5s ease-in-out;
        }

        .hover,
        .dropin:hover {
            .dropin-gradient {
                opacity: .5;
            }
        }

        .dropin-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var( --thermal-gap );
            transition: all .3s ease-in-out;
        }

        @-webkit-keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }

        @keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }

        .dropin-uploading {
            transition: all .3s ease-in-out;
            position: absolute;
            
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            transform: translateY(100px);
            opacity: 0;

            color: var(--thermal-foreground);

            svg {
                width: 100px;
                -webkit-animation: action .5s infinite  alternate;
                animation: action .5s infinite  alternate;
            }

        }

        .dropin.uploading {
            .dropin-content {
                opacity: 0;
                transform: translateY( -100px );
            }
            .dropin-uploading {
                opacity: 1;
                transform: translateY(0);
            }
        }

    `;
	}
	render() {
		const dropinClasses = {
			dropin: true,
			hover: this.hover,
			uploading: this.uploading
		};
		return lit.html`

            <div class="container">
            
                <div ${(0, lit_directives_ref_js.ref)(this.container)} class="${(0, lit_directives_class_map_js.classMap)(dropinClasses)}">

                    <div class="dropin-gradient"></div>

                    <div class="dropin-content">
                        <div>${(0, i18next.t)(T.dragorselectfile)}</div>
                        <thermal-btn variant="foreground">${(0, i18next.t)(T.selectfile)}</thermal-btn>
                    </div>

                    <div class="dropin-uploading">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                    </div>
                
                </div>

            </div>
        
        `;
	}
};
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", typeof (_ref$3 = typeof lit_directives_ref_js.Ref !== "undefined" && lit_directives_ref_js.Ref) === "function" ? _ref$3 : Object)], GroupDropinElement.prototype, "container", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], GroupDropinElement.prototype, "hover", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], GroupDropinElement.prototype, "uploading", void 0);

//#endregion
//#region src/controls/group/GroupDropinInput.ts
var _ref$2;
var GroupDropinInputElement = class extends AbstractGroupDropin {
	constructor(..._args) {
		super(..._args);
		this.container = (0, lit_directives_ref_js.createRef)();
		this.hover = false;
		this.uploading = false;
	}
	static {
		this.styles = lit.css`

        .container {
            display: none;
        }

        .dropin {
            background: var( --thermal-slate );
            width: 100%;
            aspect-ratio: 4 / 3;
        }

        .hover {
            background: var( --thermal-slate-light );
        }

        svg {
            width: 1em;
        }



.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 21px;
  height: 1em;
}
.lds-ellipsis div {
  position: absolute;
  top: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 0px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 7px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 14px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 21px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0px, 0);
  }
}


    
    `;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		if (this.container.value !== void 0) {
			this.listener = this.manager.service.handleDropzone(this.container.value, false);
			this.listener.onMouseEnter.add(this.UUID, () => {
				this.hover = true;
			});
			this.listener.onMouseLeave.add(this.UUID, () => {
				this.hover = false;
			});
			this.listener.onDrop.set(this.UUID, () => {
				this.uploading = true;
			});
			this.listener.onProcessingEnd.add(this.UUID, async (results) => {
				this.group.files.removeAllInstances();
				await Promise.all(results.map(async (result) => {
					if (result instanceof _labirthermal_core.ThermalFileReader) {
						const instance = await result.createInstance(this.group);
						this.emitUpload(instance.fileName, instance.bytesize);
					}
				}));
				this.uploading = false;
			});
		}
	}
	render() {
		return lit.html`


            <thermal-btn @click="${() => {
			if (this.listener) this.listener.openFileDialog(false);
		}}"><slot>${this.uploading === false ? (0, i18next.t)(T.uploadafile) : lit.html`<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`}</slot></thermal-btn>

            <div class="container">
            
                <div ${(0, lit_directives_ref_js.ref)(this.container)}></div>

            </div>
        
        `;
	}
};
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", typeof (_ref$2 = typeof lit_directives_ref_js.Ref !== "undefined" && lit_directives_ref_js.Ref) === "function" ? _ref$2 : Object)], GroupDropinInputElement.prototype, "container", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], GroupDropinInputElement.prototype, "hover", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], GroupDropinInputElement.prototype, "uploading", void 0);

//#endregion
//#region src/controls/file/buttons/AbstractFileButton.ts
var _ref$1, _ref2;
var AbstractFileButton = class extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.size = "sm";
		this.ref = (0, lit_directives_ref_js.createRef)();
	}
	onInstanceCreated(file) {}
	onFailure() {}
	static {
		this.styles = lit.css`
slot {
    display: content;
}`;
	}
	render() {
		return lit.html`<slot 
    @click=${this.action} 
    @mouseenter=${this.enter}
    @focus=${this.enter}
    @mouseleave=${this.leave}
    @blur=${this.leave}
    ${(0, lit_directives_ref_js.ref)(this.ref)}
>
    <thermal-btn 
        variant=${this.variant || "default"}
        size=${this.size || "sm"}
        plain="${this.plain || false}"
        class="default"
        tooltip=${this.tooltip}
        icon=${(0, lit_directives_if_defined_js.ifDefined)(this.icon)}
        iconStyle=${(0, lit_directives_if_defined_js.ifDefined)(this.iconStyle)}
    >${this.getDefaultLabel()}</thermal-btn>
</slot>`;
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: false
}), __decorateMetadata("design:type", typeof (_ref$1 = typeof BtnVariants !== "undefined" && BtnVariants) === "function" ? _ref$1 : Object)], AbstractFileButton.prototype, "variant", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", typeof (_ref2 = typeof BtnSizes !== "undefined" && BtnSizes) === "function" ? _ref2 : Object)], AbstractFileButton.prototype, "size", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], AbstractFileButton.prototype, "icon", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], AbstractFileButton.prototype, "iconStyle", void 0);
__decorate([(0, lit_decorators_js.property)({ type: Boolean }), __decorateMetadata("design:type", Boolean)], AbstractFileButton.prototype, "plain", void 0);

//#endregion
//#region src/controls/group/GroupRangePropagator.ts
var GroupRangePropagatorElement = class extends AbstractGroupConsumer {
	static {
		this.styles = AbstractFileButton.styles;
	}
	connectedCallback() {
		super.connectedCallback();
		this.onmouseenter = () => {
			if (this.group && this.group.minmax.value && this.setter) this.setter({
				from: this.group.minmax.value.min,
				to: this.group.minmax.value.max
			});
		};
		this.onmouseleave = () => {
			if (this.setter) this.setter(void 0);
		};
		this.onclick = () => {
			if (this.group && this.group.minmax.value) this.group.registry.range.imposeRange({
				from: this.group.minmax.value.min,
				to: this.group.minmax.value.max
			});
		};
	}
	render() {
		return lit.html`
            <slot>
                <button class="default">${(0, i18next.t)(T.range).toLowerCase()}</button>
            </slot>
        `;
	}
};
__decorate([(0, _lit_context.consume)({
	context: setRegistryHighlightContext,
	subscribe: true
}), __decorateMetadata("design:type", Function)], GroupRangePropagatorElement.prototype, "setter", void 0);

//#endregion
//#region src/utils/timelineTicks.ts
var TICK = /* @__PURE__ */ function(TICK) {
	TICK["MINOR"] = "minor";
	TICK["MAJOR"] = "major";
	TICK["BOUND"] = "bound";
	return TICK;
}(TICK || {});
/**
* Format data into a tick value
*/
const tick = (ms, duration, type) => ({
	ms,
	percent: ms / duration * 100,
	type,
	label: (0, date_fns.format)(ms, "m:ss")
});
/**
* Take a minute interval, divide it into a given number of segments and return array of `Tick` objects:
* - any number of TICK.MINOR for seconds
* - one last TICK.MAJOR for minute end
* All ticks are returned only when they are smaller than the overall duration.
*/
const processTickMinute = (from, to, count, duration) => {
	const ticks = [];
	let i = 1;
	const partial = (to - from) / count;
	while (i < count) {
		const value = from + i * partial;
		if (value < duration) ticks.push(tick(value, duration, TICK.MINOR));
		i += 1;
	}
	if (to < duration) ticks.push(tick(to, duration, TICK.MAJOR));
	return ticks;
};
const minute = 60 * 1e3;
const tickWidth = 50;
const tickPointerHeight = 3;
const calculateTicks = (width, duration) => {
	const ticksPerMinuteRaw = Math.floor(width / tickWidth) / Math.floor(duration / (60 * 1e3));
	let ticksPerMinute = 2;
	if (ticksPerMinuteRaw >= 2) ticksPerMinute = 4;
	if (ticksPerMinuteRaw >= 6) ticksPerMinute = 6;
	if (ticksPerMinuteRaw >= 12) ticksPerMinute = 12;
	if (ticksPerMinuteRaw >= 30) ticksPerMinute = 30;
	const ticks = [];
	let from = 0;
	let to = minute;
	while (from < duration) {
		processTickMinute(from, to, ticksPerMinute, duration).forEach((tick) => ticks.push(tick));
		from += minute;
		to += minute;
	}
	ticks.push(tick(0, duration, TICK.BOUND));
	ticks.push(tick(duration, duration, TICK.BOUND));
	return ticks;
};
const renderTick = (tick) => {
	return lit.html`<div
        class="tick tick-${tick.type}"
        style="left: ${tick.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${tick.label}</div>
    </div>`;
};
const renderPointer = (percent, label, type) => {
	return lit.html`<div 
        class="indicator-cursor indicator-cursor__${type}"
        style="left: ${percent}%;"
        data-video-rerender
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${label}</div>
    </div>`;
};
const renderTicks = (duration, ticks, currentMs, pointerMs) => {
	const currentPercent = currentMs / duration * 100;
	const pointerPercent = pointerMs !== void 0 ? pointerMs / duration * 100 : void 0;
	return lit.html`<div class="ticks">
        
        ${ticks.map(renderTick)}

        ${renderPointer(currentPercent, (0, date_fns.format)(currentMs, "m:ss:SSS"), "primary")}

        ${pointerMs !== void 0 && pointerPercent !== void 0 ? renderPointer(pointerPercent, (0, date_fns.format)(pointerMs, "m:ss:SSS"), "pointer") : lit.nothing}

    </div>`;
};
const ticksCss = lit.css`

    :host {

            --tick-color: var( --thermal-slate );
            --tick-opacity: 1;

            --cursor-color: var( --thermal-primary );
            --cursor-bg: var( --thermal-background );

            --fs-sm: calc( var(--thermal-fs) * .7 );

    }

    .indicator-cursor {
        position: absolute;
        width: 0px;
        right: 0;
        font-size: var( --fs-sm );
        z-index: 11;        
    }

        .indicator-cursor__primary {
            --cursor-bg: var( --thermal-primary );
            --cursor-color: white;
        }

        .indicator-cursor__pointer {
            --cursor-bg: var( --thermal-foreground );
            --cursor-color: white;

            .indicator-cursor-arrow {
                position: absolute;
                top: calc( var( --thermal-fs ) * -1 - 6px);
            }

            .indicator-cursor-label {
                position: absolute;
                top: calc( var( --thermal-fs ) * -2 - 3px );
            }
        }

        .indicator-cursor-arrow {
            position: relative;
            width: 6px;
            height: 6px;
            content: "";
            background: var( --cursor-bg );
            left: -4px;
            rotate: 45deg;
        }

        .indicator-cursor-label {
            position: relative;
            top: -3px;
            width: ${tickWidth}px;
            left: -${tickWidth / 2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${tickPointerHeight}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${tickWidth / 2}px;
            padding-right: ${tickWidth / 2}px;
            box-sizing: border-box;
            width: 100%;
        }

        .tick {
            position: absolute;
            width: 0;
            color: var( --tick-color );
            opacity: var( --tick-opacity );
            font-size: var( --fs-sm );
        }

        .tick-bound {

            --tick-color: var( --thermal-foreground );

            .tick-label {
                background: var(--thermal-slate-dark);
                color: var(--thermal-background);
                position: relative;
                top: -${tickPointerHeight}px;
            }

            .tick-pointer {
                width: ${tickPointerHeight * 2}px;
                height: ${tickPointerHeight * 2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${tickPointerHeight}px;
                rotate: 45deg;
            }
            
        }

    .tick-major {
        --tick-color: var( --thermal-slate-dark );
    }

    .tick-minor {
        --tick-color: var( --thermal-slate );
    }


    .tick-pointer {
            height: ${tickPointerHeight}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${tickWidth}px;
            position: relative;
            left: -${tickWidth / 2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;

//#endregion
//#region src/controls/group/GroupTimeline.ts
var _ref;
var GroupTimelineElement = class extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.ms = 0;
		this.playing = false;
		this.instances = [];
		this.has = false;
		this.ticks = [];
		this.timelineRef = (0, lit_directives_ref_js.createRef)();
		this.indicatorRef = (0, lit_directives_ref_js.createRef)();
	}
	static {
		this.TICK_WIDTH = 50;
	}
	static {
		this.TICK_POINTER_HEIGHT = 3;
	}
	connectedCallback() {
		super.connectedCallback();
		this.group.registry.batch.onBatchComplete.set(this.UUID, this.onRegistryBatchEnded.bind(this));
		this.group.files.addListener(this.UUID, (value) => {
			if (this.listener !== void 0) clearTimeout(this.listener);
			this.listener = setTimeout(async () => {
				this.onRegistryBatchEnded(value);
			}, 0);
		});
		this.group.playback.addListener(this.UUID, (value) => this.ms = value);
		this.group.playback.onPlayingStatusChange.set(this.UUID, (value) => this.playing = value);
		this.group.playback.onHasAnyCallback.set(this.UUID, (value) => this.has = value);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("ms")) {
			if (this.ms !== void 0) {
				if (this.ms !== this.group.playback.value) this.group.playback.setValueByRelativeMs(this.ms);
				if (this.indicatorRef.value) this.indicatorRef.value.style.width = this.msToPercent(this.ms) + "%";
			}
		}
	}
	onRegistryBatchEnded(results) {
		let length = 0;
		this.forEveryAffectedInstance((instance) => instance.unmountFromDom());
		this.instances = results.filter((result) => {
			if (result instanceof _labirthermal_core.ThermalFileFailure) return false;
			return result.group.id === this.group.id;
		});
		this.instances.forEach((result) => {
			if (result.timeline.duration > length) length = result.timeline.duration;
		});
		this.longestDurationInMs = length;
		setTimeout(() => {
			const timeline = this.getTimelineElement();
			if (timeline && this.longestDurationInMs !== void 0) {
				this.calculateTicks(timeline.clientWidth, this.longestDurationInMs);
				new ResizeObserver((entries) => {
					const e = entries[0];
					if (this.longestDurationInMs) this.calculateTicks(e.contentRect.width, this.longestDurationInMs);
				}).observe(timeline);
			}
		}, 0);
	}
	calculateTicks(width, duration) {
		this.ticks = calculateTicks(width, duration);
	}
	forEveryAffectedInstance(fn) {
		this.instances.forEach(fn);
	}
	percentToMs(percent) {
		if (this.longestDurationInMs === void 0) return;
		return Math.floor(this.longestDurationInMs * (percent / 100));
	}
	msToPercent(ms) {
		if (this.longestDurationInMs === void 0) return;
		return ms / this.longestDurationInMs * 100;
	}
	getValueFromEvent(event) {
		const percent = event.layerX / event.target.clientWidth * 100;
		return {
			percent,
			ms: this.percentToMs(percent)
		};
	}
	handlePlayButtonClick() {
		this.group.playback.playing ? this.group.playback.stop() : this.group.playback.play();
	}
	handleTimelineClick(event) {
		const percent = event.layerX / event.target.clientWidth * 100;
		const ms = this.percentToMs(percent);
		if (ms) this.ms = ms;
	}
	handleTimelineEnter(event) {
		const { ms } = this.getValueFromEvent(event);
		this.pointerMs = ms;
	}
	handleTimelineMove(event) {
		const { ms } = this.getValueFromEvent(event);
		this.pointerMs = ms;
	}
	handleTimelineLeave() {
		this.pointerMs = void 0;
	}
	static {
		this.styles = lit.css`


        :host {

            --tick-color: var( --thermal-slate );
            --tick-opacity: 1;

            --cursor-color: var( --thermal-primary );
            --cursor-bg: var( --thermal-background );

            --fs-sm: calc( var(--thermal-fs) * .7 );

        }

        .container {

            padding-top: calc( var(--thermal-fs) + 6px);

        }

        .timeline {
            width: 100%;
            height: var( --thermal-fs );
            position: relative;
            cursor: pointer;
            box-sizing: border-box;
        }

        .background {
            width: 100%;
            height: 100%;
            background-color: var( --thermal-slate );
            pointer-events: none;
        }

        .indicator {
            height: 100%;
            position: absolute;
            content:"";
            top: 0;
            left: 0;
            background-color: var( --thermal-primary );
            pointer-events: none;
        }


        ${ticksCss}
    
    `;
	}
	getTimelineElement() {
		return this.renderRoot.querySelector(".timeline");
	}
	render() {
		if (this.has === false) return lit.nothing;
		return lit.html`<div class="container ticks-horizontal-indent">

            <div 
                class="timeline" 
                ${(0, lit_directives_ref_js.ref)(this.timelineRef)}
                @click=${(event) => this.handleTimelineClick(event)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${(0, lit_directives_ref_js.ref)(this.indicatorRef)}></div>
            </div>

            ${this.longestDurationInMs !== void 0 ? renderTicks(this.longestDurationInMs, this.ticks, this.ms, this.pointerMs) : lit.nothing}

        </div>`;
	}
};
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Number)], GroupTimelineElement.prototype, "longestDurationInMs", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Number)], GroupTimelineElement.prototype, "ms", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Number)], GroupTimelineElement.prototype, "pointerMs", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], GroupTimelineElement.prototype, "playing", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Array)], GroupTimelineElement.prototype, "instances", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], GroupTimelineElement.prototype, "has", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Array)], GroupTimelineElement.prototype, "ticks", void 0);
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", typeof (_ref = typeof ReturnType !== "undefined" && ReturnType) === "function" ? _ref : Object)], GroupTimelineElement.prototype, "listener", void 0);

//#endregion
exports.AbstractFileConsumer = AbstractFileConsumer;
exports.AbstractFileProvider = AbstractFileProvider;
exports.AbstractGroupConsumer = AbstractGroupConsumer;
exports.AbstractGroupProvider = AbstractGroupProvider;
exports.AbstractManagerConsumer = AbstractManagerConsumer;
exports.AbstractManagerProvider = AbstractManagerProvider;
exports.AbstractRegistryConsumer = AbstractRegistryConsumer;
exports.AbstractRegistryProvider = AbstractRegistryProvider;
exports.AbstractThermalElement = AbstractThermalElement;
Object.defineProperty(exports, 'AppInfoButton', {
  enumerable: true,
  get: function () {
    return AppInfoButton;
  }
});
Object.defineProperty(exports, 'ConfigDialog', {
  enumerable: true,
  get: function () {
    return ConfigDialog;
  }
});
Object.defineProperty(exports, 'DisplayPanel', {
  enumerable: true,
  get: function () {
    return DisplayPanel;
  }
});
exports.FileCopyElement = FileCopyElement;
exports.FileMirrorElement = FileMirrorElement;
exports.FileProviderElement = FileProviderElement;
exports.GroupAnalysisSyncButton = GroupAnalysisSyncButton;
exports.GroupChart = GroupChartElement;
exports.GroupDownloadButtons = GroupDownloadButtons;
exports.GroupDownloadDropdown = GroupDownloadDropdown;
exports.GroupDropin = GroupDropinElement;
exports.GroupDropinInput = GroupDropinInputElement;
exports.GroupProviderElement = GroupProviderElement;
exports.GroupRangePropagator = GroupRangePropagatorElement;
exports.GroupTimeline = GroupTimelineElement;
exports.ManagerExportPanel = ManagerExportPanel;
exports.ManagerGraphSmoothSwitch = ManagerGraphSmoothSwitch;
exports.ManagerImageSmoothSwitch = ManagerImageSmoothSwitch;
exports.ManagerPaletteButtons = ManagerPaletteButtons;
exports.ManagerPaletteDropdown = ManagerPaletteDropdown;
exports.ManagerProviderElement = ManagerProviderElement;
exports.ManagerToolBar = ManagerToolBar;
exports.RegistryOpacitySlider = RegistryOpacitySlider;
exports.RegistryProviderElement = RegistryProviderElement;
exports.RegistryRangeDisplay = RegistryRangeDisplay;
exports.RegistryRangeForm = RegistryRangeForm;
exports.RegistryRangeSlider = RegistryRangeSlider;
exports.RegistrySetAutoRangeElement = RegistryRangeAutoButton;
exports.RegistrySetFullRangeElement = RegistryRangeFullButton;
exports.RegistryTicksBar = RegistryTicksBar;
exports.ThermalAppElement = ThermalAppElement;
exports.ThermalBarElement = ThermalBarElement;
exports.ThermalBtnElement = ThermalBtnElement;
exports.ThermalDialogElement = ThermalDialogElement;
exports.ThermalDropdownElement = ThermalDropdownElement;
exports.ThermalDropinElement = ThermalDropinElement;
exports.ThermalExpandableElement = ThermalExpandableElement;
exports.ThermalFieldElement = ThermalFieldElement;
exports.ThermalIconElement = ThermalIconElement;
exports.ThermalLoadingElement = ThermalPosterElement;
exports.ThermalRadioElement = ThermalRadioElement;
exports.ThermalSlotElement = ThermalSlotElement;
exports.ThermalSpinnerElement = ThermalSpinnerElement;
exports.ThermalTipElement = ThermalTipElement;
exports.booleanConverter = booleanConverter;
exports.durationConverter = durationConverter;
exports.fileContext = fileContext;
exports.fileCurrentFrameContext = fileCurrentFrameContext;
exports.fileMsContext = fileMsContext;
exports.filePlayingContext = filePlayingContext;
exports.groupContext = groupContext;
exports.icons = icons;
exports.languageContext = languageContext;
exports.managerContext = managerContext;
exports.managerSmoothContext = managerSmoothContext;
exports.registryContext = registryContext;
exports.registryHighlightContext = registryHighlightContext;
exports.registryLoadingContext = registryLoadingContext;
exports.registryMaxContext = registryMaxContext;
exports.registryMinContext = registryMinContext;
exports.registryOpacityContext = registryOpacityContext;
exports.registryRangeFromContext = registryRangeFromContext;
exports.registryRangeToContext = registryRangeToContext;
exports.setRegistryHighlightContext = setRegistryHighlightContext;
exports.toolContext = toolContext;
//# sourceMappingURL=index.export.cjs.map