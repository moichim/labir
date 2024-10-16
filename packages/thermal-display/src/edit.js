/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { useState, useMemo } from '@wordpress/element';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	PanelBody, TextControl, SelectControl, DropZone, Button, FormFileUpload, Card,
	CardBody,
	CardDivider,
	CardFooter,
	CardHeader,
	CardMedia,
	Placeholder
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const ID = useMemo(() => Math.random().toString());

	const {
		showStartingYear,
		startingYear,
		palette,
		thermal,
		author,
		license
	} = attributes;

	const [thermalBackup, setThermalBackup] = useState(thermal);

	const startUploadingFile = () => {
		const backup = thermal;
		setThermalBackup(backup);
		setAttributes({ thermal: thermal });
	}

	const cancalUploadingFile = () => {
		setAttributes({ thermal: thermalBackup });
	}

	const successfullyUploadedFile = (file) => {
		setAttributes({ thermal: file });
		setThermalBackup(undefined);
	}



	return (
		<>
			<InspectorControls>


				{thermal && <manager-provider
					slug={ID + "___"}
					palette={palette}
				>
					<registry-provider>
						<group-provider>
							<file-provider thermal={thermal}>
								<file-canvas></file-canvas>
							</file-provider>
						</group-provider>
					</registry-provider>
				</manager-provider>}


				{/*
				{ ( thermal !== undefined && thermal !== "" ) ? <div>
					<manager-provider slug={ID} palette={palette}>
						<registry-provider slug={ID}>
							<group-provider slug={ID}>
								<file-provider thermal={thermal}>
									<file-canvas></file-canvas>
								</file-provider>
							</group-provider>
						</registry-provider>
					</manager-provider>
					<code>{thermal}</code>
				</div> : <Placeholder
					icon={<SVG viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z" /></SVG>}
					instructions="Upload or select a LRC file."
					label="Thermal file"
				>
				</Placeholder>}

				*/}

				<div>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['application/octet-stream']}
							onSelect={result => {
								successfullyUploadedFile(result.url);
							}}
							// onClose={cancalUploadingFile}
							render={({ open }) => (
								<Button
									onClick={() => {
										startUploadingFile();
										open();
									}}
									variant="primary"
								>
									{thermal ? "Change file" : "Upload or select a LRC file"}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</div>

				<PanelBody title="Thermal display settings">

					<SelectControl
						label="Palette"
						value={palette}
						options={[
							{
								label: "Iron",
								value: "iron"
							},
							{
								label: "Jet",
								value: "jet"
							},
							{
								label: "Grayscale",
								value: "grayscale"
							},
						]}

						onChange={(value) => setAttributes({ palette: value })}
					/>

					<TextControl
						label={__(
							'Author',
							'thermal-display'
						)}
						value={author || ''}
						onChange={(value) =>
							setAttributes({ author: value })
						}
					/>

					<TextControl
						label={__(
							'License',
							'thermal-display'
						)}
						value={license || ''}
						onChange={(value) =>
							setAttributes({ license: value })
						}
					/>


				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div>{thermal}</div>
				<div style={{ width: "100%" }}>
					{thermal && <thermal-file-app url={thermal}></thermal-file-app>}
				</div>
			</div>
		</>
	);
}

console.log( window.CustomElementRegistry );
