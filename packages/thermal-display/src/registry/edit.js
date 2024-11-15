

import { useCallback, useEffect, useMemo, useState } from '@wordpress/element';

import { InspectorControls, useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	RangeControl
} from '@wordpress/components';


import { useRegisterIframeScript } from '../utils/useRegisterIframeScript';
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

	const ID = useMemo(() => (Math.random() * 10000).toFixed(0));

	const [counter,setCounter] = useState( 0 );

	useEffect( () => {
		setTimeout( () => setCounter(1), 10 );
	}, [] );

	/** Register the webcomponents if not already */
	useRegisterIframeScript();

	const blockProps = useBlockProps();
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps);

	const {
		opacity,
		slug
	} = attributes;

	useEffect(() => {

		if (slug === "default_slug") {
			setAttributes({ slug: "registry_" + ID });
		}

	}, []);




	const panelRef = useCallback(node => {

		if (node) {

			/*

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

			*/

		}

	}, []);

	const previewRef = useCallback(node => {

		if (node) {

			console.log(node);

			/*

			node.registry.range.addListener(ID, value => {

				if (value instanceof Object) {
					setAttributes(value);
				} else {
					setAttributes({ from: undefined, to: undefined });
				}
			});

			*/

		}

	}, []);

	if ( counter === 0 ) {
		console.log( "ještě ne" );
		// return <></>
	}


	return (
		<>
			<InspectorControls>
				<PanelBody label="Configuration">

						<TextControl
							label="Unique ID"
							help="Every manager needs to have a unique ID."
							value={slug}
							onChange={(value) => setAttributes({ slug: value })}
						/>

						<RangeControl
							__nextHasNoMarginBottom
							label="IR image opacity"
							help="If a visible file is provided, you can set the initial transparency of the thermal file."
							value={opacity}
							onChange={(value) => setAttributes({ opacity: value })}
							min={0}
							max={1}
							step={0.01}
						/>

				</PanelBody>
			</InspectorControls>



			<div style={{
				border: "1px dotted var(--wp-admin-theme-color)",
				borderRadius: "5px"
			}}>
				<div {...blockProps} {...innerBlocksProps} >

					<div style={{
						borderRadius: "5px",
						fontSize: "small",
						padding: ".3rem",
						background: "var(--wp-admin-theme-color)",
						color: "var(--wp--preset--color--white)",
						display: "flex",
						gap: "5px",
						alignItems: "center"
					}}>
						<div style={{ width: "1em" }}>
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512">
								<g>
									<g id="Layer one">
										<path d="M327.6,240c-5.4-4.7-13.6-7.1-24.6-7.1h-51.9v60.8h52c10.9,0,19-2.4,24.6-7.2s8.2-12.7,8.2-23.6-2.8-18.1-8.3-22.8Z" fill="currentcolor" />
										<path d="M252.4,0L18.9,90.7h-.6v421.3h466.9V90.7h.6L252.4,0ZM161.8,411.9h-47.5v-216h47.5v216ZM342.1,411.9c-2.8-7.9-4.5-16.2-4.9-24.6-.6-9.5-1.5-18.4-2.7-27.2-1.6-11.3-5-19.5-10.3-24.8s-13.8-7.9-25.7-7.9h-47.5v84.4h-47.5v-215.9h116.4c8.9-.1,17.8,1.5,26.2,4.7,7.4,2.9,14.2,7.3,19.9,12.8,5.5,5.4,9.8,11.8,12.7,18.9,3,7.3,4.5,15.2,4.4,23.1.3,11.5-2.4,22.9-7.9,33-6,9.9-15.3,17.3-26.2,21.2v.6c5.3,1.3,10.3,3.9,14.5,7.4,3.8,3.3,7,7.3,9.4,11.8,2.5,4.7,4.3,9.7,5.3,15,1.1,5.4,1.9,10.9,2.3,16.3.2,3.4.4,7.5.6,12.1s.6,9.2,1.1,14.2c.5,4.6,1.3,9.2,2.4,13.7.9,4,2.6,7.7,5,11.1h-47.6Z" fill="currentcolor" />
									</g>
								</g>
							</svg>
						</div>
						<div>Thermal Registry</div>
						<div>Opacity: {opacity}</div>
					</div>

					{ counter === 1 && <registry-provider ref={previewRef} opacity={opacity}>

						<InnerBlocks />

					</registry-provider>
	}

				</div>
			</div>


		</>
	);
}
