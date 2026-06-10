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
let lit_directives_ref_js = require("lit/directives/ref.js");
let lit_directives_if_defined_js = require("lit/directives/if-defined.js");
let lit_directives_map_js = require("lit/directives/map.js");
let lit_directives_cache_js = require("lit/directives/cache.js");
let _floating_ui_dom = require("@floating-ui/dom");
let lit_directives_class_map_js = require("lit/directives/class-map.js");
let _labirthermal_core = require("@labirthermal/core");

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
/** @deprecated Not used - remove */
const loadedContext = (0, _lit_context.createContext)("file-loaded");
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
const fileAnalysisList = (0, _lit_context.createContext)("analysislist");

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
const managerSmoothContext = (0, _lit_context.createContext)("manager-smooth-context");
const managerGraphFunctionContext = (0, _lit_context.createContext)("manager-graph-function-context");
const languageContext = (0, _lit_context.createContext)("language");
const toolContext = (0, _lit_context.createContext)("tool-context");
/** @deprecated I do not know wha is this here. */
const toolsContext = (0, _lit_context.createContext)("tools-context");
const interactiveAnalysisContext = (0, _lit_context.createContext)("interactive-analysis-context");

//#endregion
//#region src/ui/App.ts
var _ref$19, _ref2$9, _ThermalAppElement;
let ThermalAppElement = class ThermalAppElement extends AbstractThermalElement {
	static {
		_ThermalAppElement = this;
	}
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
    ${(0, lit_directives_cache_js.cache)((0, lit_directives_map_js.map)(_ThermalAppElement.languages, (lang) => lit.html`<div slot="option">
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
}), __decorateMetadata("design:type", typeof (_ref2$9 = typeof Array !== "undefined" && Array) === "function" ? _ref2$9 : Object)], ThermalAppElement.prototype, "contentElements", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true
}), __decorateMetadata("design:type", String)], ThermalAppElement.prototype, "fullscreen", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true,
	converter: booleanConverter(false)
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
ThermalAppElement = _ThermalAppElement = __decorate([(0, lit_decorators_js.customElement)("thermal-app")], ThermalAppElement);

//#endregion
//#region src/ui/Bar.ts
let ThermalBarElement = class ThermalBarElement extends lit.LitElement {
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
ThermalBarElement = __decorate([(0, lit_decorators_js.customElement)("thermal-bar")], ThermalBarElement);

//#endregion
//#region src/ui/Btn.ts
var _ref$18;
let ThermalBtnElement = class ThermalBtnElement extends AbstractThermalElement {
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
ThermalBtnElement = __decorate([(0, lit_decorators_js.customElement)("thermal-btn")], ThermalBtnElement);

//#endregion
//#region src/ui/Dialog.ts
let ThermalDialogElement = class ThermalDialogElement extends lit.LitElement {
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
ThermalDialogElement = __decorate([(0, lit_decorators_js.customElement)("thermal-dialog")], ThermalDialogElement);

//#endregion
//#region src/ui/Dropdown.ts
var _ref$17, _ref2$8, _ref3$6;
let ThermalDropdownElement = class ThermalDropdownElement extends AbstractThermalElement {
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
}), __decorateMetadata("design:type", typeof (_ref2$8 = typeof BtnVariants$1 !== "undefined" && BtnVariants$1) === "function" ? _ref2$8 : Object)], ThermalDropdownElement.prototype, "variant", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", typeof (_ref3$6 = typeof BtnSizes$1 !== "undefined" && BtnSizes$1) === "function" ? _ref3$6 : Object)], ThermalDropdownElement.prototype, "size", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", Boolean)], ThermalDropdownElement.prototype, "plain", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true
}), __decorateMetadata("design:type", String)], ThermalDropdownElement.prototype, "tooltip", void 0);
ThermalDropdownElement = __decorate([(0, lit_decorators_js.customElement)("thermal-dropdown")], ThermalDropdownElement);

//#endregion
//#region src/ui/Dropin.ts
let ThermalDropinElement = class ThermalDropinElement extends AbstractThermalElement {
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
ThermalDropinElement = __decorate([(0, lit_decorators_js.customElement)("thermal-dropin")], ThermalDropinElement);

//#endregion
//#region src/ui/Expandable.ts
var _ref$16, _ref2$7, _ref3$5;
let ThermalExpandableElement = class ThermalExpandableElement extends AbstractThermalElement {
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
}), __decorateMetadata("design:type", typeof (_ref$16 = typeof BtnVariants !== "undefined" && BtnVariants) === "function" ? _ref$16 : Object)], ThermalExpandableElement.prototype, "variant", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", typeof (_ref2$7 = typeof BtnVariants !== "undefined" && BtnVariants) === "function" ? _ref2$7 : Object)], ThermalExpandableElement.prototype, "variantExpanded", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", typeof (_ref3$5 = typeof BtnSizes !== "undefined" && BtnSizes) === "function" ? _ref3$5 : Object)], ThermalExpandableElement.prototype, "size", void 0);
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
ThermalExpandableElement = __decorate([(0, lit_decorators_js.customElement)("thermal-expandable")], ThermalExpandableElement);

//#endregion
//#region src/ui/Field.ts
let ThermalFieldElement = class ThermalFieldElement extends lit.LitElement {
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
ThermalFieldElement = __decorate([(0, lit_decorators_js.customElement)("thermal-field")], ThermalFieldElement);

//#endregion
//#region src/ui/Icon.ts
let ThermalIconElement = class ThermalIconElement extends AbstractThermalElement {
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
ThermalIconElement = __decorate([(0, lit_decorators_js.customElement)("thermal-icon")], ThermalIconElement);

//#endregion
//#region src/ui/Loading.ts
let ThermalLoadingElement = class ThermalLoadingElement extends AbstractThermalElement {
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
__decorate([(0, lit_decorators_js.state)(), __decorateMetadata("design:type", Boolean)], ThermalLoadingElement.prototype, "loaded", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], ThermalLoadingElement.prototype, "loading", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalLoadingElement.prototype, "icon", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalLoadingElement.prototype, "iconStyle", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalLoadingElement.prototype, "message", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalLoadingElement.prototype, "bordercolor", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalLoadingElement.prototype, "bgcolor", void 0);
__decorate([(0, lit_decorators_js.property)({ type: String }), __decorateMetadata("design:type", String)], ThermalLoadingElement.prototype, "textcolor", void 0);
ThermalLoadingElement = __decorate([(0, lit_decorators_js.customElement)("thermal-poster")], ThermalLoadingElement);

//#endregion
//#region src/ui/Radio.ts
let ThermalRadioElement = class ThermalRadioElement extends AbstractThermalElement {
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
ThermalRadioElement = __decorate([(0, lit_decorators_js.customElement)("thermal-radio")], ThermalRadioElement);

//#endregion
//#region src/ui/Slot.ts
let ThermalSlotElement = class ThermalSlotElement extends AbstractThermalElement {
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
ThermalSlotElement = __decorate([(0, lit_decorators_js.customElement)("thermal-slot")], ThermalSlotElement);

//#endregion
//#region src/ui/Spinner.ts
let ThermalSpinnerElement = class ThermalSpinnerElement extends AbstractThermalElement {
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
ThermalSpinnerElement = __decorate([(0, lit_decorators_js.customElement)("thermal-spinner")], ThermalSpinnerElement);

//#endregion
//#region src/ui/Tip.ts
let ThermalTipElement = class ThermalTipElement extends AbstractThermalElement {
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
ThermalTipElement = __decorate([(0, lit_decorators_js.customElement)("thermal-tip")], ThermalTipElement);

//#endregion
//#region src/hierarchy/consumers/AbstractManagerConsumer.ts
var _ref$15;
var AbstractManagerConsumer = class extends AbstractThermalElement {};
__decorate([
	(0, _lit_context.consume)({
		context: managerContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref$15 = typeof _labirthermal_core.ThermalManager !== "undefined" && _labirthermal_core.ThermalManager) === "function" ? _ref$15 : Object)
], AbstractManagerConsumer.prototype, "manager", void 0);

//#endregion
//#region src/hierarchy/consumers/AbstractRegistryConsumer.ts
var _ref$14;
var AbstractRegistryConsumer = class extends AbstractManagerConsumer {};
__decorate([(0, _lit_context.consume)({
	context: registryContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref$14 = typeof _labirthermal_core.ThermalRegistry !== "undefined" && _labirthermal_core.ThermalRegistry) === "function" ? _ref$14 : Object)], AbstractRegistryConsumer.prototype, "registry", void 0);

//#endregion
//#region src/hierarchy/consumers/AbstractGroupConsumer.ts
var _ref$13;
var AbstractGroupConsumer = class extends AbstractRegistryConsumer {};
__decorate([(0, _lit_context.consume)({
	context: groupContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref$13 = typeof _labirthermal_core.ThermalGroup !== "undefined" && _labirthermal_core.ThermalGroup) === "function" ? _ref$13 : Object)], AbstractGroupConsumer.prototype, "group", void 0);

//#endregion
//#region src/hierarchy/abstraction/AbstractFileProvider.ts
var _ref$12, _ref2$6, _ref3$4, _ref4$1, _ref5$1, _ref6$1, _ref7$1, _ref8$1;
var AbstractFileProvider = class extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.loading = false;
		this.ready = false;
		this.cursor = void 0;
		this.cursorSetter = (percent) => {
			if (percent === void 0) {
				if (this.cursor !== void 0) this.cursor = void 0;
			} else if (this.file) {
				const relativeTime = this.file.timeline._convertPercenttRelative(percent);
				const frame = this.file.timeline.findPreviousRelative(relativeTime);
				this.cursor = {
					absolute: frame.absolute,
					ms: frame.relative,
					percentage: percent
				};
			}
		};
		this.ms = 0;
		this.speed = 1;
		this.recording = false;
		this.playing = false;
		this.mayStop = true;
		this.analyses = [];
		this.onLoadingStart = new _labirthermal_core.CallbacksManager();
		this.onSuccess = new _labirthermal_core.CallbacksManager();
		this.onFailure = new _labirthermal_core.CallbacksManager();
		this.autoHighlight = false;
		this.onInstanceCreated = new _labirthermal_core.CallbacksManager();
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("ms")) {
			if (this.file && this.duration && this.currentFrame) {
				const newMs = Math.min(this.duration.ms, Math.max(0, this.ms));
				if (newMs !== this.currentFrame.ms) this.file.timeline.setRelativeTime(newMs);
			}
		}
		if (_changedProperties.has("speed")) {
			if (this.file && this.speed) {
				if (this.speed !== this.file.timeline.playbackSpeed) this.file.timeline.playbackSpeed = this.speed;
			}
		}
		if (_changedProperties.has("playing")) {
			if (this.file) {
				if (this.playing && !this.file.timeline.isPlaying) this.file.timeline.play();
				else if (!this.playing && this.file.timeline.isPlaying) this.file.timeline.pause();
			}
		}
		this.handleAnalysisUpdate(1, _changedProperties);
		this.handleAnalysisUpdate(2, _changedProperties);
		this.handleAnalysisUpdate(3, _changedProperties);
		this.handleAnalysisUpdate(4, _changedProperties);
		this.handleAnalysisUpdate(5, _changedProperties);
		this.handleAnalysisUpdate(6, _changedProperties);
		this.handleAnalysisUpdate(7, _changedProperties);
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "recording") {
			if (this.file) {
				if (this.recording === true && value === "false") this.file.recording.end();
				else if (this.recording === false && value === "true") this.file.recording.start();
			}
		}
	}
	/** Register instance callback listeners */
	recieveInstance(instance) {
		this.file = instance;
		this.failure = void 0;
		this.loading = false;
		this.ready = true;
		this.duration = {
			ms: instance.timeline.duration,
			time: instance.timeline.formatDuration(instance.timeline.duration)
		};
		this.currentFrame = {
			ms: instance.timeline.currentMs,
			time: instance.timeline.currentTime,
			percentage: instance.timeline.currentPercentage,
			index: instance.timeline.currentStep.index,
			absolute: instance.timeline.currentStep.absolute
		};
		this.analyses = instance.analysis.layers.all;
		if (this.speed) instance.timeline.playbackSpeed = this.speed;
		this.playCallback = () => {
			this.playing = true;
		};
		this.stopCallback = () => {
			this.playing = false;
		};
		this.currentFrameChangeCallback = (frame) => {
			this.currentFrame = {
				ms: frame.relative,
				time: instance.timeline.currentTime,
				percentage: instance.timeline.currentPercentage,
				index: frame.index,
				absolute: frame.absolute
			};
			this.ms = frame.relative;
		};
		this.playbackSpeedCallback = (value) => {
			this.speed = value;
		};
		this.recordingCallback = (value) => {
			this.recording = value;
		};
		this.mayStopCallback = (value) => {
			this.mayStop = value;
		};
		this.analysisCallback = (value) => {
			this.analyses = value;
		};
		instance.timeline.callbacksPlay.add(this.UUID, this.playCallback);
		instance.timeline.callbacksPause.add(this.UUID, this.stopCallback);
		instance.timeline.callbacksStop.add(this.UUID, this.stopCallback);
		instance.timeline.callbacksEnd.add(this.UUID, this.stopCallback);
		instance.timeline.callbacksChangeFrame.add(this.UUID, this.currentFrameChangeCallback);
		instance.timeline.callbackdPlaybackSpeed.add(this.UUID, this.playbackSpeedCallback);
		instance.recording.addListener(this.UUID, this.recordingCallback);
		instance.recording.callbackMayStop.add(this.UUID, this.mayStopCallback);
		instance.analysis.addListener(this.UUID, this.analysisCallback);
		this.onInstanceCreated.call(instance);
		this.addEventListener("mouseenter", () => {
			if (this.autoHighlight && this.file && this.highlightSetter) this.highlightSetter({
				from: this.file.min,
				to: this.file.max
			});
		});
		this.addEventListener("mouseleave", () => {
			if (this.autoHighlight && this.highlightSetter) this.highlightSetter(void 0);
		});
	}
	removeInstance(instance) {
		instance.unmountFromDom();
		this.file = void 0;
		this.loading = false;
		this.ready = false;
		this.duration = void 0;
		this.currentFrame = void 0;
		this.analyses = [];
		instance.timeline.callbacksPlay.delete(this.UUID);
		instance.timeline.callbacksPause.delete(this.UUID);
		instance.timeline.callbacksStop.delete(this.UUID);
		instance.timeline.callbacksEnd.delete(this.UUID);
		instance.timeline.callbacksChangeFrame.delete(this.UUID);
		instance.timeline.callbackdPlaybackSpeed.delete(this.UUID);
		instance.recording.removeListener(this.UUID);
		instance.analysis.removeListener(this.UUID);
	}
	deleteFile() {
		if (this.file) this.removeInstance(this.file);
	}
	/**
	* Initialise slots & their listeners
	*/
	initAnalysesSync(instance) {
		instance.slots.onSlot1Serialize.set(this.UUID, (value) => this.analysis1 = value);
		instance.slots.onSlot2Serialize.set(this.UUID, (value) => this.analysis2 = value);
		instance.slots.onSlot3Serialize.set(this.UUID, (value) => this.analysis3 = value);
		instance.slots.onSlot4Serialize.set(this.UUID, (value) => this.analysis4 = value);
		instance.slots.onSlot5Serialize.set(this.UUID, (value) => this.analysis5 = value);
		instance.slots.onSlot6Serialize.set(this.UUID, (value) => this.analysis6 = value);
		instance.slots.onSlot7Serialize.set(this.UUID, (value) => this.analysis7 = value);
		this.createInitialAnalysis(instance, 1, this.analysis1);
		this.createInitialAnalysis(instance, 2, this.analysis2);
		this.createInitialAnalysis(instance, 3, this.analysis3);
		this.createInitialAnalysis(instance, 4, this.analysis4);
		this.createInitialAnalysis(instance, 5, this.analysis5);
		this.createInitialAnalysis(instance, 6, this.analysis6);
		this.createInitialAnalysis(instance, 7, this.analysis7);
	}
	handleAnalysisUpdate(index, _changedProperties) {
		const field = `analysis${index}`;
		if (_changedProperties.has(field)) {
			const oldValue = _changedProperties.get(field);
			const newValue = this[field];
			if (this.file) {
				const slot = this.file.slots.getSlot(index);
				if (slot === void 0 && newValue && newValue.trim().length > 0 && (!oldValue || oldValue?.trim().length > 0)) this.file.slots.createAnalysisFromSerialized(newValue, index)?.setSelected(false, true);
				else if (slot !== void 0 && oldValue && (!newValue || newValue?.trim().length === 0)) this.file.slots.removeSlotAndAnalysis(index);
				else if (slot && newValue) slot?.recieveSerialized(newValue);
			}
		}
	}
	createInitialAnalysis(instance, index, value) {
		if (value !== void 0 && value !== null && value.trim().length > 0) if (instance.slots.hasSlot(index)) {
			const analysis = instance.slots.getSlot(index);
			analysis?.recieveSerialized(value);
			analysis?.analysis.setSelected(false, true);
		} else instance.slots.createAnalysisFromSerialized(value, index)?.setSelected(false, true);
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
	(0, _lit_context.provide)({ context: fileContext }),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref$12 = typeof _labirthermal_core.Instance !== "undefined" && _labirthermal_core.Instance) === "function" ? _ref$12 : Object)
], AbstractFileProvider.prototype, "file", void 0);
__decorate([
	(0, _lit_context.provide)({ context: fileFailureContext }),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref2$6 = typeof _labirthermal_core.ThermalFileFailure !== "undefined" && _labirthermal_core.ThermalFileFailure) === "function" ? _ref2$6 : Object)
], AbstractFileProvider.prototype, "failure", void 0);
__decorate([
	(0, _lit_context.provide)({ context: loadingContext }),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Boolean)
], AbstractFileProvider.prototype, "loading", void 0);
__decorate([
	(0, _lit_context.provide)({ context: loadedContext }),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Object)
], AbstractFileProvider.prototype, "ready", void 0);
__decorate([
	(0, _lit_context.provide)({ context: durationContext }),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref3$4 = typeof DurationContext !== "undefined" && DurationContext) === "function" ? _ref3$4 : Object)
], AbstractFileProvider.prototype, "duration", void 0);
__decorate([
	(0, _lit_context.provide)({ context: fileCurrentFrameContext }),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref4$1 = typeof CurrentFrameContext !== "undefined" && CurrentFrameContext) === "function" ? _ref4$1 : Object)
], AbstractFileProvider.prototype, "currentFrame", void 0);
__decorate([(0, _lit_context.provide)({ context: fileCursorContext }), __decorateMetadata("design:type", typeof (_ref5$1 = typeof FileCursorContext !== "undefined" && FileCursorContext) === "function" ? _ref5$1 : Object)], AbstractFileProvider.prototype, "cursor", void 0);
__decorate([(0, _lit_context.provide)({ context: fileMsContext }), __decorateMetadata("design:type", Number)], AbstractFileProvider.prototype, "ms", void 0);
__decorate([(0, _lit_context.provide)({ context: filePlaybackSpeedContext }), __decorateMetadata("design:type", typeof (_ref6$1 = typeof _labirthermal_core.PlaybackSpeeds !== "undefined" && _labirthermal_core.PlaybackSpeeds) === "function" ? _ref6$1 : Object)], AbstractFileProvider.prototype, "speed", void 0);
__decorate([(0, _lit_context.provide)({ context: fileRecordingContext }), __decorateMetadata("design:type", Boolean)], AbstractFileProvider.prototype, "recording", void 0);
__decorate([(0, _lit_context.provide)({ context: filePlayingContext }), __decorateMetadata("design:type", Boolean)], AbstractFileProvider.prototype, "playing", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.provide)({ context: filaMayStopContext }),
	__decorateMetadata("design:type", Boolean)
], AbstractFileProvider.prototype, "mayStop", void 0);
__decorate([(0, _lit_context.provide)({ context: fileAnalysisList }), __decorateMetadata("design:type", typeof (_ref7$1 = typeof AnalysisList !== "undefined" && AnalysisList) === "function" ? _ref7$1 : Object)], AbstractFileProvider.prototype, "analyses", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
}), __decorateMetadata("design:type", Boolean)], AbstractFileProvider.prototype, "autoHighlight", void 0);
__decorate([(0, _lit_context.consume)({
	context: registryHighlightContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref8$1 = typeof _labirthermal_core.ThermalRangeOrUndefined !== "undefined" && _labirthermal_core.ThermalRangeOrUndefined) === "function" ? _ref8$1 : Object)], AbstractFileProvider.prototype, "highlight", void 0);
__decorate([(0, _lit_context.consume)({
	context: setRegistryHighlightContext,
	subscribe: true
}), __decorateMetadata("design:type", Function)], AbstractFileProvider.prototype, "highlightSetter", void 0);

//#endregion
//#region src/hierarchy/abstraction/AbstractGroupProvider.ts
var AbstractGroupProvider = class extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.UUIDGroupListeners = this.UUID + "__group-listener";
		this.autoclear = false;
	}
	connectedCallback() {
		super.connectedCallback();
		this.group = this.registry.groups.addOrGetGroup(this.slug);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.group !== void 0) this.registry.groups.removeGroup(this.group.id);
	}
	render() {
		return lit.html`<slot></slot>`;
	}
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
//#region src/hierarchy/abstraction/AbstractManagerProvider.ts
var _ref$11;
var AbstractManagerProvider = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.UUIDManagerListeners = this.UUID + "__manager-listener";
		this.palette = {
			key: "jet",
			data: _labirthermal_core.ThermalPalettes["jet"]
		};
		this.smooth = false;
		this.graphSmooth = false;
		this.autoclear = false;
	}
	connectedCallback() {
		super.connectedCallback();
		const options = {};
		options.palette = this.sanitizeStringPalette(this.palette.key);
		this.manager = createOrGetManager(this.slug, options);
		this.tool = this.manager.tool.value;
		this.tools = this.manager.tool.tools;
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.manager !== void 0) removeManager(this.manager);
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.manager.palette.addListener(this.UUIDManagerListeners, (value) => {
			this.setPalette(value);
		});
		this.manager.smooth.addListener(this.UUIDManagerListeners, (value) => {
			this.smooth = value;
		});
		this.manager.graphSmooth.addListener(this.UUIDManagerListeners, (value) => {
			this.graphSmooth = value;
		});
		this.manager.tool.addListener(this.UUIDManagerListeners, (value) => {
			this.tool = value;
		});
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "palette" && this.manager) {
			const palette = this.sanitizeStringPalette(value);
			this.manager.palette.setPalette(palette);
		}
	}
	sanitizeStringPalette(input) {
		let valid = true;
		if (input === null || input === void 0) valid = false;
		else if (!Object.keys(_labirthermal_core.ThermalPalettes).includes(input)) valid = false;
		return valid ? input : "jet";
	}
	setPalette(key) {
		this.palette = {
			key,
			data: _labirthermal_core.ThermalPalettes[key]
		};
	}
	render() {
		return lit.html`<slot></slot>`;
	}
};
__decorate([(0, _lit_context.provide)({ context: toolContext }), __decorateMetadata("design:type", typeof (_ref$11 = typeof _labirthermal_core.ThermalTool !== "undefined" && _labirthermal_core.ThermalTool) === "function" ? _ref$11 : Object)], AbstractManagerProvider.prototype, "tool", void 0);
__decorate([(0, _lit_context.provide)({ context: toolsContext }), __decorateMetadata("design:type", Object)], AbstractManagerProvider.prototype, "tools", void 0);

//#endregion
//#region src/hierarchy/abstraction/AbstractRegistryProvider.ts
var _ref$10;
var AbstractRegistryProvider = class extends AbstractManagerConsumer {
	constructor(..._args) {
		super(..._args);
		this.UUIDRegistryListeners = this.UUID + "__registry-listener";
		this.opacity = 1;
		this.loading = false;
		this.autoclear = false;
		this.forceNew = false;
		this.setHighlight = (value) => {
			this.highlight = value;
		};
	}
	createRegistry(slug) {
		const registry = this.manager.addOrGetRegistry(slug);
		registry.palette.setPalette(this.manager.palette.value);
		if (this.from !== void 0 && this.to !== void 0) registry.range.imposeRange({
			from: this.from,
			to: this.to
		});
		return registry;
	}
	hydrateRegistry(registry) {
		registry.opacity.addListener(this.UUIDRegistryListeners, (value) => {
			this.opacity = value;
		});
		registry.minmax.addListener(this.UUIDRegistryListeners, (value) => {
			if (value === void 0) {
				this.min = void 0;
				this.max = void 0;
			} else {
				this.min = value.min;
				this.max = value.max;
			}
		});
		registry.range.addListener(this.UUIDRegistryListeners, (value) => {
			if (value === void 0) {
				this.from = void 0;
				this.to = void 0;
			} else {
				this.from = value.from;
				this.to = value.to;
			}
		});
		registry.loading.addListener(this.UUIDRegistryListeners, (value) => {
			this.loading = value;
		});
	}
	connectedCallback() {
		super.connectedCallback();
		this.registry = this.createRegistry(this.slug);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.registry !== void 0) this.manager.removeRegistry(this.registry.id);
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.hydrateRegistry(this.registry);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("from") || _changedProperties.has("to")) {
			if (this.from !== void 0 && this.to !== void 0) this.registry.range.imposeRange({
				from: this.from,
				to: this.to
			});
		}
		if (_changedProperties.has("opacity")) {
			const sanitisedOpacity = Math.min(1, Math.max(0, this.opacity));
			if (sanitisedOpacity !== this.registry.opacity.value) this.registry.opacity.imposeOpacity(sanitisedOpacity);
		}
	}
	render() {
		return lit.html`<slot></slot>`;
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], AbstractRegistryProvider.prototype, "forceNew", void 0);
__decorate([(0, _lit_context.provide)({ context: registryHighlightContext }), __decorateMetadata("design:type", typeof (_ref$10 = typeof _labirthermal_core.ThermalRangeOrUndefined !== "undefined" && _labirthermal_core.ThermalRangeOrUndefined) === "function" ? _ref$10 : Object)], AbstractRegistryProvider.prototype, "highlight", void 0);
__decorate([(0, _lit_context.provide)({ context: setRegistryHighlightContext }), __decorateMetadata("design:type", Object)], AbstractRegistryProvider.prototype, "setHighlight", void 0);

//#endregion
//#region src/hierarchy/consumers/AbstractFileConsumer.ts
var _ref$9, _ref2$5, _ref3$3;
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
	hookCallbacks() {
		if (this.parentFileProviderElement) {
			if (this.parentFileProviderElement.file) this.onInstanceCreated(this.parentFileProviderElement.file);
			this.parentFileProviderElement.onSuccess.set(this.getUUID(), () => {
				this.loading = false;
			});
			this.parentFileProviderElement.onFailure.set(this.getUUID(), () => {
				this.loading = false;
			});
			this.parentFileProviderElement.onSuccess.set(this.UUID, this.onInstanceCreated.bind(this));
			this.parentFileProviderElement.onFailure.set(this.UUID, this.onFailure.bind(this));
		} else throw new Error("Tento komponent není v souboru!");
	}
};
__decorate([
	(0, _lit_context.consume)({
		context: fileProviderContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref$9 = typeof AbstractFileProvider !== "undefined" && AbstractFileProvider) === "function" ? _ref$9 : Object)
], AbstractFileConsumer.prototype, "parentFileProviderElement", void 0);
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
	__decorateMetadata("design:type", typeof (_ref2$5 = typeof _labirthermal_core.Instance !== "undefined" && _labirthermal_core.Instance) === "function" ? _ref2$5 : Object)
], AbstractFileConsumer.prototype, "file", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: fileFailureContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", typeof (_ref3$3 = typeof _labirthermal_core.ThermalFileFailure !== "undefined" && _labirthermal_core.ThermalFileFailure) === "function" ? _ref3$3 : Object)
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
//#region src/hierarchy/providers/FileCopy.ts
var _ref$8, _ref2$4, _ref3$2;
let FileCopyElement = class FileCopyElement extends AbstractFileProvider {
	constructor(..._args) {
		super(..._args);
		this.providedSelf = this;
		this.ms = 0;
		this.speed = 1;
		this.recording = false;
		this.playing = false;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		if (this.originalFile) this.processFileCopy(this.originalFile);
	}
	async processFileCopy(originalFile) {
		const originalRange = originalFile.group.registry.range.value;
		originalFile.group.registry;
		const copiedFile = await originalFile.reader.createInstance(this.group);
		copiedFile.group.registry.postLoadedProcessing();
		if (originalRange) copiedFile.group.registry.range.imposeRange(originalRange);
		this.onSuccess.call(copiedFile);
		this.recieveInstance(copiedFile);
		setTimeout(() => {
			try {
				copiedFile.draw();
			} catch (e) {
				console.warn("[file-copy] redraw failed for copied instance", e);
			}
		}, 0);
	}
	syncSlot(index) {
		if (this.originalFile === void 0 || this.file === void 0) {
			console.warn("cannot sync slot for file copy, original or copy is missing");
			return;
		}
		const serialized = this.originalFile.slots.getSlot(index)?.serialized;
		if (serialized) this.file.slots.createAnalysisFromSerialized(serialized, index);
	}
	copyAnalysesFromParent() {
		for (let i = 0; i < 7; i++) this.syncSlot(i);
	}
	clearAnalyses() {
		this.file?.analysis.layers.removeAllAnalyses();
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
		return lit.html`${this.ready ? lit.html`<slot></slot>` : lit.nothing}`;
	}
};
__decorate([(0, _lit_context.provide)({ context: fileProviderContext }), __decorateMetadata("design:type", typeof (_ref$8 = typeof FileCopyElement !== "undefined" && FileCopyElement) === "function" ? _ref$8 : Object)], FileCopyElement.prototype, "providedSelf", void 0);
__decorate([
	(0, lit_decorators_js.state)(),
	(0, _lit_context.consume)({
		context: fileContext,
		subscribe: true
	}),
	__decorateMetadata("design:type", typeof (_ref2$4 = typeof _labirthermal_core.Instance !== "undefined" && _labirthermal_core.Instance) === "function" ? _ref2$4 : Object)
], FileCopyElement.prototype, "originalFile", void 0);
__decorate([
	(0, lit_decorators_js.property)({
		type: Number,
		reflect: true,
		attribute: true
	}),
	(0, _lit_context.provide)({ context: fileMsContext }),
	__decorateMetadata("design:type", Number)
], FileCopyElement.prototype, "ms", void 0);
__decorate([
	(0, lit_decorators_js.property)({
		type: Number,
		reflect: true,
		attribute: true
	}),
	(0, _lit_context.provide)({ context: filePlaybackSpeedContext }),
	__decorateMetadata("design:type", typeof (_ref3$2 = typeof _labirthermal_core.PlaybackSpeeds !== "undefined" && _labirthermal_core.PlaybackSpeeds) === "function" ? _ref3$2 : Object)
], FileCopyElement.prototype, "speed", void 0);
__decorate([
	(0, lit_decorators_js.property)({
		type: String,
		reflect: true,
		attribute: true
	}),
	(0, _lit_context.provide)({ context: fileRecordingContext }),
	__decorateMetadata("design:type", Boolean)
], FileCopyElement.prototype, "recording", void 0);
__decorate([
	(0, lit_decorators_js.property)({
		type: String,
		reflect: true,
		attribute: true
	}),
	(0, _lit_context.provide)({ context: filePlayingContext }),
	__decorateMetadata("design:type", Boolean)
], FileCopyElement.prototype, "playing", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileCopyElement.prototype, "analysis1", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileCopyElement.prototype, "analysis2", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileCopyElement.prototype, "analysis3", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileCopyElement.prototype, "analysis4", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileCopyElement.prototype, "analysis5", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileCopyElement.prototype, "analysis6", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileCopyElement.prototype, "analysis7", void 0);
FileCopyElement = __decorate([(0, lit_decorators_js.customElement)("file-copy")], FileCopyElement);

//#endregion
//#region src/hierarchy/providers/FileMirror.ts
var _ref$7, _ref2$3;
let FileMirrorElement = class FileMirrorElement extends AbstractFileProvider {
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
__decorate([(0, _lit_context.provide)({ context: fileProviderContext }), __decorateMetadata("design:type", typeof (_ref$7 = typeof FileMirrorElement !== "undefined" && FileMirrorElement) === "function" ? _ref$7 : Object)], FileMirrorElement.prototype, "providedSelf", void 0);
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
FileMirrorElement = __decorate([(0, lit_decorators_js.customElement)("file-mirror")], FileMirrorElement);

//#endregion
//#region src/hierarchy/providers/FileProvider.ts
var _ref$6, _ref2$2;
let FileProviderElement = class FileProviderElement extends AbstractFileProvider {
	constructor(..._args) {
		super(..._args);
		this.keepinitialhistogram = false;
		this.ms = 0;
		this.speed = 1;
		this.providedSelf = this;
		this.recording = false;
		this.playing = false;
		this.batch = true;
	}
	/** 
	* Load the file and call all necessary callbacks
	*/
	async load() {
		return this.batch === true ? this.loadAsync() : this.loadSync();
	}
	/** 
	* @deprecated Use the batch loader instead.
	*/
	async loadSync() {
		this.loading = true;
		this.onLoadingStart.call();
		return await this.registry.service.loadFile(this.thermal, this.visible).then(async (result) => {
			if (result instanceof _labirthermal_core.ThermalFileReader) return await result.createInstance(this.group).then((instance) => {
				this.file = instance;
				this.onSuccess.call(instance);
				instance.group.registry.postLoadedProcessing();
				this.loading = false;
				this.recieveInstance(instance);
				this.initAnalysesSync(instance);
				return instance;
			});
			else {
				this.failure = result;
				this.onFailure.call(this.failure);
				this.loading = false;
				return result;
			}
		});
	}
	/**
	* Register new load request to the registry batch loader 
	* 
	*/
	loadAsync() {
		this.loading = true;
		this.onLoadingStart.call();
		return this.registry.batch.request(this.thermal, this.visible, this.group, this.asyncLoadCallback.bind(this));
	}
	async redraw() {
		this.loading = true;
		this.onLoadingStart.call();
		if (this.file) this.removeInstance(this.file);
		await this.load();
	}
	/**
	* 
	* @param result A crucial method called every time a loading ends
	*/
	async asyncLoadCallback(result) {
		if (result instanceof _labirthermal_core.Instance) {
			if (this.file !== void 0) {
				this.file.unmountFromDom();
				delete this.file;
			}
			this.file = result;
			this.onSuccess.call(result);
			this.initAnalysesSync(result);
			this.loading = false;
			this.recieveInstance(result);
		} else if (result instanceof _labirthermal_core.ThermalFileFailure) {
			this.failure = result;
			this.onFailure.call(this.failure);
			this.loading = false;
		}
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		if (this.registry) this.load();
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("thermal")) {
			const oldUrl = _changedProperties.get("thermal");
			if (oldUrl) {
				this.group.files.removeFile(oldUrl);
				this.file = void 0;
				this.load();
			}
		}
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
}), __decorateMetadata("design:type", Boolean)], FileProviderElement.prototype, "keepinitialhistogram", void 0);
__decorate([
	(0, lit_decorators_js.property)({
		type: Number,
		reflect: true,
		attribute: true
	}),
	(0, _lit_context.provide)({ context: fileMsContext }),
	__decorateMetadata("design:type", Number)
], FileProviderElement.prototype, "ms", void 0);
__decorate([
	(0, lit_decorators_js.property)({
		type: Number,
		reflect: true,
		attribute: true
	}),
	(0, _lit_context.provide)({ context: filePlaybackSpeedContext }),
	__decorateMetadata("design:type", typeof (_ref$6 = typeof _labirthermal_core.PlaybackSpeeds !== "undefined" && _labirthermal_core.PlaybackSpeeds) === "function" ? _ref$6 : Object)
], FileProviderElement.prototype, "speed", void 0);
__decorate([(0, _lit_context.provide)({ context: fileProviderContext }), __decorateMetadata("design:type", typeof (_ref2$2 = typeof FileProviderElement !== "undefined" && FileProviderElement) === "function" ? _ref2$2 : Object)], FileProviderElement.prototype, "providedSelf", void 0);
__decorate([
	(0, lit_decorators_js.property)({
		type: String,
		reflect: true,
		attribute: true
	}),
	(0, _lit_context.provide)({ context: fileRecordingContext }),
	__decorateMetadata("design:type", Boolean)
], FileProviderElement.prototype, "recording", void 0);
__decorate([
	(0, lit_decorators_js.property)({
		type: String,
		reflect: true,
		attribute: true
	}),
	(0, _lit_context.provide)({ context: filePlayingContext }),
	__decorateMetadata("design:type", Boolean)
], FileProviderElement.prototype, "playing", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true,
	attribute: true,
	converter: {
		fromAttribute(value) {
			return value === "true";
		},
		toAttribute(value) {
			if (value === true) return "true";
			return "false";
		}
	}
}), __decorateMetadata("design:type", Boolean)], FileProviderElement.prototype, "batch", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", String)], FileProviderElement.prototype, "thermal", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", String)], FileProviderElement.prototype, "visible", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileProviderElement.prototype, "analysis1", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileProviderElement.prototype, "analysis2", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileProviderElement.prototype, "analysis3", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileProviderElement.prototype, "analysis4", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileProviderElement.prototype, "analysis5", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileProviderElement.prototype, "analysis6", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], FileProviderElement.prototype, "analysis7", void 0);
FileProviderElement = __decorate([(0, lit_decorators_js.customElement)("file-provider")], FileProviderElement);

//#endregion
//#region src/hierarchy/providers/GroupProvider.ts
var _ref$5;
let GroupProviderElement = class GroupProviderElement extends AbstractGroupProvider {
	constructor(..._args) {
		super(..._args);
		this.autoclear = false;
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.group && this.registry) this.registry.groups.removeGroup(this.group.id);
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: String,
	attribute: true,
	reflect: true
}), __decorateMetadata("design:type", String)], GroupProviderElement.prototype, "slug", void 0);
__decorate([(0, _lit_context.provide)({ context: groupContext }), __decorateMetadata("design:type", typeof (_ref$5 = typeof _labirthermal_core.ThermalGroup !== "undefined" && _labirthermal_core.ThermalGroup) === "function" ? _ref$5 : Object)], GroupProviderElement.prototype, "group", void 0);
__decorate([(0, lit_decorators_js.property)({ type: Boolean }), __decorateMetadata("design:type", Boolean)], GroupProviderElement.prototype, "autoclear", void 0);
GroupProviderElement = __decorate([(0, lit_decorators_js.customElement)("group-provider")], GroupProviderElement);

//#endregion
//#region src/hierarchy/providers/ManagerProvider.ts
var _ref$4, _ref2$1, _ref3$1;
let ManagerProviderElement = class ManagerProviderElement extends AbstractManagerProvider {
	constructor(..._args) {
		super(..._args);
		this.UUIDManagerListeners = this.UUID + "__manager-listener";
		this.palette = {
			key: "jet",
			data: _labirthermal_core.ThermalPalettes["jet"]
		};
		this.smooth = false;
		this.graphSmooth = false;
		this.autoclear = false;
	}
};
__decorate([(0, _lit_context.provide)({ context: managerContext }), __decorateMetadata("design:type", typeof (_ref$4 = typeof _labirthermal_core.ThermalManager !== "undefined" && _labirthermal_core.ThermalManager) === "function" ? _ref$4 : Object)], ManagerProviderElement.prototype, "manager", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], ManagerProviderElement.prototype, "slug", void 0);
__decorate([
	(0, _lit_context.provide)({ context: managerPaletteContext }),
	(0, lit_decorators_js.property)({
		type: String,
		attribute: true,
		reflect: true,
		converter: {
			fromAttribute: (value) => {
				return {
					key: value,
					data: _labirthermal_core.ThermalPalettes[value]
				};
			},
			toAttribute: (value) => {
				return value.key.toString();
			}
		}
	}),
	__decorateMetadata("design:type", typeof (_ref2$1 = typeof ManagerPaletteContext$1 !== "undefined" && ManagerPaletteContext$1) === "function" ? _ref2$1 : Object)
], ManagerProviderElement.prototype, "palette", void 0);
__decorate([
	(0, _lit_context.provide)({ context: managerSmoothContext }),
	(0, lit_decorators_js.property)({
		type: String,
		reflect: true,
		attribute: true
	}),
	__decorateMetadata("design:type", Boolean)
], ManagerProviderElement.prototype, "smooth", void 0);
__decorate([
	(0, _lit_context.provide)({ context: managerGraphFunctionContext }),
	(0, lit_decorators_js.property)({
		type: String,
		reflect: true,
		attribute: true
	}),
	__decorateMetadata("design:type", Boolean)
], ManagerProviderElement.prototype, "graphSmooth", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], ManagerProviderElement.prototype, "autoclear", void 0);
__decorate([(0, _lit_context.provide)({ context: toolContext }), __decorateMetadata("design:type", typeof (_ref3$1 = typeof _labirthermal_core.ThermalTool !== "undefined" && _labirthermal_core.ThermalTool) === "function" ? _ref3$1 : Object)], ManagerProviderElement.prototype, "tool", void 0);
__decorate([(0, _lit_context.provide)({ context: toolsContext }), __decorateMetadata("design:type", Object)], ManagerProviderElement.prototype, "tools", void 0);
ManagerProviderElement = __decorate([(0, lit_decorators_js.customElement)("manager-provider")], ManagerProviderElement);

//#endregion
//#region src/hierarchy/providers/RegistryProvider.ts
var _ref$3;
let RegistryProviderElement = class RegistryProviderElement extends AbstractRegistryProvider {
	constructor(..._args) {
		super(..._args);
		this.opacity = 1;
		this.loading = false;
		this.autoclear = false;
	}
	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has("slug") === true && changedProperties.get("slug") !== this.slug) {
			if (this.registry !== void 0) {
				if (this.autoclear === true) {}
			}
		}
	}
};
__decorate([(0, lit_decorators_js.property)({
	type: String,
	reflect: true,
	attribute: true
}), __decorateMetadata("design:type", String)], RegistryProviderElement.prototype, "slug", void 0);
__decorate([(0, _lit_context.provide)({ context: registryContext }), __decorateMetadata("design:type", typeof (_ref$3 = typeof _labirthermal_core.ThermalRegistry !== "undefined" && _labirthermal_core.ThermalRegistry) === "function" ? _ref$3 : Object)], RegistryProviderElement.prototype, "registry", void 0);
__decorate([
	(0, _lit_context.provide)({ context: registryOpacityContext }),
	(0, lit_decorators_js.property)({
		type: Number,
		reflect: true,
		attribute: true
	}),
	__decorateMetadata("design:type", Number)
], RegistryProviderElement.prototype, "opacity", void 0);
__decorate([
	(0, _lit_context.provide)({ context: registryMinContext }),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Number)
], RegistryProviderElement.prototype, "min", void 0);
__decorate([
	(0, _lit_context.provide)({ context: registryMaxContext }),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Number)
], RegistryProviderElement.prototype, "max", void 0);
__decorate([
	(0, _lit_context.provide)({ context: registryRangeFromContext }),
	(0, lit_decorators_js.property)({
		type: Number,
		reflect: true,
		attribute: true
	}),
	__decorateMetadata("design:type", Number)
], RegistryProviderElement.prototype, "from", void 0);
__decorate([
	(0, _lit_context.provide)({ context: registryRangeToContext }),
	(0, lit_decorators_js.property)({
		type: Number,
		reflect: true,
		attribute: true
	}),
	__decorateMetadata("design:type", Number)
], RegistryProviderElement.prototype, "to", void 0);
__decorate([
	(0, _lit_context.provide)({ context: registryLoadingContext }),
	(0, lit_decorators_js.property)({
		type: String,
		reflect: true,
		attribute: true
	}),
	__decorateMetadata("design:type", Boolean)
], RegistryProviderElement.prototype, "loading", void 0);
__decorate([(0, lit_decorators_js.property)({
	type: Boolean,
	reflect: true
}), __decorateMetadata("design:type", Boolean)], RegistryProviderElement.prototype, "autoclear", void 0);
RegistryProviderElement = __decorate([(0, lit_decorators_js.customElement)("registry-provider")], RegistryProviderElement);

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
var _ref$2, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
let ManagerExportPanel = class ManagerExportPanel extends AbstractThermalElement {
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
}), __decorateMetadata("design:type", typeof (_ref$2 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref$2 : Object)], ManagerExportPanel.prototype, "pngWidthSetter", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportFsContext,
	subscribe: true
}), __decorateMetadata("design:type", Number)], ManagerExportPanel.prototype, "pngFs", void 0);
__decorate([(0, _lit_context.consume)({
	context: pngExportFsSetterContext,
	subscribe: true
}), __decorateMetadata("design:type", typeof (_ref2 = typeof ContextSetter !== "undefined" && ContextSetter) === "function" ? _ref2 : Object)], ManagerExportPanel.prototype, "pngFsSetter", void 0);
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
ManagerExportPanel = __decorate([(0, lit_decorators_js.customElement)("manager-export-panel")], ManagerExportPanel);

//#endregion
//#region src/controls/manager/ManagerGraphSmoothSwitch.ts
let ManagerGraphSmoothSwitch = class ManagerGraphSmoothSwitch extends AbstractManagerConsumer {
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
ManagerGraphSmoothSwitch = __decorate([(0, lit_decorators_js.customElement)("manager-graph-smooth-switch")], ManagerGraphSmoothSwitch);

//#endregion
//#region src/controls/manager/ManagerImageSmoothSwitch.ts
let ManagerImageSmoothSwitch = class ManagerImageSmoothSwitch extends AbstractManagerConsumer {
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
ManagerImageSmoothSwitch = __decorate([(0, lit_decorators_js.customElement)("manager-smooth-switch")], ManagerImageSmoothSwitch);

//#endregion
//#region src/controls/manager/AbstractPaletteSwitch.ts
var _ref$1;
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
	__decorateMetadata("design:type", typeof (_ref$1 = typeof ManagerPaletteContext !== "undefined" && ManagerPaletteContext) === "function" ? _ref$1 : Object)
], AbstractPaletteSwitch.prototype, "value", void 0);

//#endregion
//#region src/controls/manager/ManagerPaletteButtons.ts
let ManagerPaletteButtons = class ManagerPaletteButtons extends AbstractPaletteSwitch {
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
ManagerPaletteButtons = __decorate([(0, lit_decorators_js.customElement)("manager-palette-buttons")], ManagerPaletteButtons);

//#endregion
//#region src/controls/manager/ManagerPaletteDropdown.ts
let ManagerPaletteDropdown = class ManagerPaletteDropdown extends AbstractPaletteSwitch {
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
ManagerPaletteDropdown = __decorate([(0, lit_decorators_js.customElement)("manager-palette-dropdown")], ManagerPaletteDropdown);

//#endregion
//#region src/controls/manager/ManagerToolsBar.ts
var _ref;
let ManagerToolBar = class ManagerToolBar extends AbstractManagerConsumer {
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
	__decorateMetadata("design:type", typeof (_ref = typeof _labirthermal_core.ThermalTool !== "undefined" && _labirthermal_core.ThermalTool) === "function" ? _ref : Object)
], ManagerToolBar.prototype, "value", void 0);
__decorate([
	(0, _lit_context.consume)({
		context: toolsContext,
		subscribe: true
	}),
	(0, lit_decorators_js.state)(),
	__decorateMetadata("design:type", Object)
], ManagerToolBar.prototype, "tools", void 0);
ManagerToolBar = __decorate([(0, lit_decorators_js.customElement)("manager-tool-bar")], ManagerToolBar);

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
Object.defineProperty(exports, 'FileCopyElement', {
  enumerable: true,
  get: function () {
    return FileCopyElement;
  }
});
Object.defineProperty(exports, 'FileMirrorElement', {
  enumerable: true,
  get: function () {
    return FileMirrorElement;
  }
});
Object.defineProperty(exports, 'FileProviderElement', {
  enumerable: true,
  get: function () {
    return FileProviderElement;
  }
});
Object.defineProperty(exports, 'GroupProviderElement', {
  enumerable: true,
  get: function () {
    return GroupProviderElement;
  }
});
Object.defineProperty(exports, 'ManagerExportPanel', {
  enumerable: true,
  get: function () {
    return ManagerExportPanel;
  }
});
Object.defineProperty(exports, 'ManagerGraphSmoothSwitch', {
  enumerable: true,
  get: function () {
    return ManagerGraphSmoothSwitch;
  }
});
Object.defineProperty(exports, 'ManagerImageSmoothSwitch', {
  enumerable: true,
  get: function () {
    return ManagerImageSmoothSwitch;
  }
});
Object.defineProperty(exports, 'ManagerPaletteButtons', {
  enumerable: true,
  get: function () {
    return ManagerPaletteButtons;
  }
});
Object.defineProperty(exports, 'ManagerPaletteDropdown', {
  enumerable: true,
  get: function () {
    return ManagerPaletteDropdown;
  }
});
Object.defineProperty(exports, 'ManagerProviderElement', {
  enumerable: true,
  get: function () {
    return ManagerProviderElement;
  }
});
Object.defineProperty(exports, 'ManagerToolBar', {
  enumerable: true,
  get: function () {
    return ManagerToolBar;
  }
});
Object.defineProperty(exports, 'RegistryProviderElement', {
  enumerable: true,
  get: function () {
    return RegistryProviderElement;
  }
});
Object.defineProperty(exports, 'ThermalAppElement', {
  enumerable: true,
  get: function () {
    return ThermalAppElement;
  }
});
Object.defineProperty(exports, 'ThermalBarElement', {
  enumerable: true,
  get: function () {
    return ThermalBarElement;
  }
});
Object.defineProperty(exports, 'ThermalBtnElement', {
  enumerable: true,
  get: function () {
    return ThermalBtnElement;
  }
});
Object.defineProperty(exports, 'ThermalDialogElement', {
  enumerable: true,
  get: function () {
    return ThermalDialogElement;
  }
});
Object.defineProperty(exports, 'ThermalDropdownElement', {
  enumerable: true,
  get: function () {
    return ThermalDropdownElement;
  }
});
Object.defineProperty(exports, 'ThermalDropinElement', {
  enumerable: true,
  get: function () {
    return ThermalDropinElement;
  }
});
Object.defineProperty(exports, 'ThermalExpandableElement', {
  enumerable: true,
  get: function () {
    return ThermalExpandableElement;
  }
});
Object.defineProperty(exports, 'ThermalFieldElement', {
  enumerable: true,
  get: function () {
    return ThermalFieldElement;
  }
});
Object.defineProperty(exports, 'ThermalIconElement', {
  enumerable: true,
  get: function () {
    return ThermalIconElement;
  }
});
Object.defineProperty(exports, 'ThermalLoadingElement', {
  enumerable: true,
  get: function () {
    return ThermalLoadingElement;
  }
});
Object.defineProperty(exports, 'ThermalRadioElement', {
  enumerable: true,
  get: function () {
    return ThermalRadioElement;
  }
});
Object.defineProperty(exports, 'ThermalSlotElement', {
  enumerable: true,
  get: function () {
    return ThermalSlotElement;
  }
});
Object.defineProperty(exports, 'ThermalSpinnerElement', {
  enumerable: true,
  get: function () {
    return ThermalSpinnerElement;
  }
});
Object.defineProperty(exports, 'ThermalTipElement', {
  enumerable: true,
  get: function () {
    return ThermalTipElement;
  }
});
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