/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';


/**
 * Load the external JS library for webcomponents
 */
const loadExternalLibrary = () => {
	const script = document.createElement("script");
	script.type = "module";
	script.innerHTML = "import labirembed from 'https://cdn.jsdelivr.net/npm/@labir/embed@1.2.45/+esm'";
	document.head.appendChild(script);
	document.addEventListener( "loaded", () => {
		// document.head.appendChild(script);
	} );
}

loadExternalLibrary();



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
});
