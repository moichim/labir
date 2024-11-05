
import { __ } from '@wordpress/i18n';

import { useCallback, useMemo, useState } from '@wordpress/element';

import { useAnalysisEditor } from '../utils/analysisEditor/useAnalysisEditor';

import { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	Placeholder,
	SelectControl,
	TextControl,
	Tooltip
} from '@wordpress/components';

import './editor.scss';
import { useRegisterIframeScript } from '../utils/useRegisterIframeScript';

import { AnalysisEditorModal } from '../utils/analysisEditor/AnalysisEditorModal';
import { AnalysisEditorTrigger } from '../utils/analysisEditor/AnalysisEditorTrigger';

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

	/** Register the webcomponents if not already */
	useRegisterIframeScript();

	const {
		webcomponent,
		palette,
		thermal,
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

	const [thermalBackup, setThermalBackup] = useState(thermal);

	const [previewFile, setPreviewFile] = useState();

	const { open, setOpen } = useAnalysisEditor();

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

	const filePreviewCallback = useCallback(node => {

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
					setAttributes({ from: undefined, to: undefined });
				}
			});

		}

	}, []);

	const displaySettingsCallback = useCallback(node => {

		if (node) {

			node.registry.range.addListener(ID, value => {

				if (value instanceof Object) {
					setAttributes(value);
				} else {
					setAttributes({ from: undefined, to: undefined });
				}
			});

		}

	}, []);




	return (
		<>
			<MediaUploadCheck>

				<InspectorControls >

					<PanelBody title="Thermal file">

						<AnalysisEditorModal
							thermal={thermal}
							open={open}
							setOpen={setOpen}
							attributes={attributes}
							setAttributes={setAttributes}
						/>


						{thermal &&

							<manager-provider
								slug={ID + "___preview"}
								palette={palette}
							>
								<registry-provider
									from={from}
									to={to}
								>
									<group-provider>
										<file-provider
											thermal={thermal}
											ref={filePreviewCallback}
										>

											<file-canvas></file-canvas>

										</file-provider>
									</group-provider>
								</registry-provider>
							</manager-provider>
						}

						<div style={{ marginBottom: "1rem", marginTop: thermal ? "1rem" : "0" }}>

							<MediaUpload
								allowedTypes={['application/octet-stream']}
								onSelect={result => {
									successfullyUploadedFile(result.url);
								}}
								onClose={cancalUploadingFile}
								render={({ open }) => (
									<>
										<Button
											onClick={() => {
												startUploadingFile();
												open();
											}}
											variant="primary"
											size="compact"
										>
											{thermal ? "Change file" : "Upload or select a LRC file"}
										</Button>

										{thermal && <AnalysisEditorTrigger
											setOpen={setOpen}
										/>}

									</>
								)}
							/>
						</div>


					</PanelBody>

					<PanelBody title="Information" initialOpen={false}>

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

						<TextControl
							label={__(
								'Label',
								'thermal-display'
							)}
							help="Label appears on the black button on top & left of the app."
							value={label || ''}
							onChange={(value) =>
								setAttributes({ label: value })
							}
						/>

					</PanelBody>

					<PanelBody title="Display settings" initialOpen={true}>

						<manager-provider
							slug={ID + "___display"}
							palette={palette}
						>
							<registry-provider
								from={from}
								to={to}
								ref={displaySettingsCallback}
							>
								<group-provider>
									<file-provider thermal={thermal}>

										<SelectControl
											label="Variant"
											value={webcomponent}
											options={[
												{
													label: "Advanced analyser",
													value: "thermal-desktop-app"
												},
												{
													label: "Simplified display",
													value: "thermal-file-app"
												},
											]}
											onChange={(value) => setAttributes({ webcomponent: value })}
										>

										</SelectControl>

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

										<div style={{paddingBottom: "1rem"}}>

											<registry-range-slider></registry-range-slider>
											<registry-ticks-bar></registry-ticks-bar>

											<registry-range-display></registry-range-display>

										</div>

										{(previewFile && previewFile.timeline.isSequence) && <SelectControl
											label="Playback Speed"
											value={speed}
											options={[
												{
													label: "0.5x",
													value: 0.5
												},
												{
													label: "1x",
													value: 1
												},
												{
													label: "2x",
													value: 2
												},
												{
													label: "3x",
													value: 3
												},
												{
													label: "5x",
													value: 5
												},
												{
													label: "10x",
													value: 10
												},
											]}

											onChange={(value) => setAttributes({ speed: value })}
										/>}

									</file-provider>
								</group-provider>
							</registry-provider>
						</manager-provider>

					</PanelBody>




				</InspectorControls>


			</MediaUploadCheck>


			<div {...useBlockProps()}>
				{thermal
					? <Tooltip
						text="Click to edit"
						delay={300}
						hideOnClick={false}
					>
						<div>
							<div className="thermal__content-editor__container">


								<div>

									{webcomponent === "thermal-file-app" && <thermal-file-app
										url={thermal}
										palette={palette}
										author={author}
										license={license}
										label={label}
										description={description}
										from={from}
										to={to}
										analysis1={analysis1}
										analysis2={analysis2}
										analysis3={analysis3}
										analysis4={analysis4}
										analysis5={analysis5}
										analysis6={analysis6}
										analysis7={analysis7}
										style={{
											pointerEvents: "none"
										}}
										speed={speed}
									></thermal-file-app>}

									{webcomponent === "thermal-desktop-app" && <thermal-desktop-app
										url={thermal}
										palette={palette}
										author={author}
										license={license}
										label={label}
										description={description}
										from={from}
										to={to}
										analysis1={analysis1}
										analysis2={analysis2}
										analysis3={analysis3}
										analysis4={analysis4}
										analysis5={analysis5}
										analysis6={analysis6}
										analysis7={analysis7}
										style={{
											pointerEvents: "none"
										}}
										speed={speed}
									></thermal-desktop-app>}
								</div>

								<div className="thermal__content-editor__wrapper">
									<div>Edit parameters in the sidebar.</div>
								</div>
							</div>
						</div>
					</Tooltip>
					: <Placeholder
						label="Thermal display"
						instructions="An advanced thermal analysis app will display here once you provide a LRC file recorded by IR camera TIMI Edu."
						icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512">
							<g>
								<g id="Vrstva_1">
									<path d="M327.6,240c-5.4-4.7-13.6-7.1-24.6-7.1h-51.9v60.8h52c10.9,0,19-2.4,24.6-7.2s8.2-12.7,8.2-23.6-2.8-18.1-8.3-22.8Z" />
									<path d="M252.4,0L18.9,90.7h-.6v421.3h466.9V90.7h.6L252.4,0ZM161.8,411.9h-47.5v-216h47.5v216ZM342.1,411.9c-2.8-7.9-4.5-16.2-4.9-24.6-.6-9.5-1.5-18.4-2.7-27.2-1.6-11.3-5-19.5-10.3-24.8s-13.8-7.9-25.7-7.9h-47.5v84.4h-47.5v-215.9h116.4c8.9-.1,17.8,1.5,26.2,4.7,7.4,2.9,14.2,7.3,19.9,12.8,5.5,5.4,9.8,11.8,12.7,18.9,3,7.3,4.5,15.2,4.4,23.1.3,11.5-2.4,22.9-7.9,33-6,9.9-15.3,17.3-26.2,21.2v.6c5.3,1.3,10.3,3.9,14.5,7.4,3.8,3.3,7,7.3,9.4,11.8,2.5,4.7,4.3,9.7,5.3,15,1.1,5.4,1.9,10.9,2.3,16.3.2,3.4.4,7.5.6,12.1s.6,9.2,1.1,14.2c.5,4.6,1.3,9.2,2.4,13.7.9,4,2.6,7.7,5,11.1h-47.6Z" />
								</g>
							</g>
						</svg>}
					>
						<MediaUpload
							allowedTypes={['application/octet-stream']}
							onSelect={result => {
								successfullyUploadedFile(result.url);
							}}
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
					</Placeholder>
				}

			</div>

		</>
	);
}
