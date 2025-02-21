import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalNumberControl as NumberControl,
	SelectControl,
	Tooltip,
	Button
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

	/** Register the webcomponents if not already */
	useRegisterIframeScript();


	return (
		<>


			<div {...useBlockProps()}>


				<Tooltip
					text="Click to edit"
					delay={300}
					hideOnClick={false}
				>

					<div>
						<div className="thermal__content-editor__container">
							<div>

								<thermal-dropin-app></thermal-dropin-app>

								<div className="thermal__content-editor__wrapper">
									<div>Edit parameters in the sidebar.</div>
								</div>

							</div>
						</div>

					</div>

				</Tooltip>

			</div>

		</>
	);
}
