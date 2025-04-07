import { useNotations } from "./useNotations";

import { useCallback, useMemo, useState } from '@wordpress/element';

import {
    Button,
    PanelBody,
    Placeholder,
    SelectControl,
    TextControl,
    Tooltip,
    RangeControl,
    PanelHeader,
    CheckboxControl,
    Modal
} from '@wordpress/components';

/**
 * 
 * @param {*} notation 
 * @param {CallableFunction} update 
 */
const NotationForm = (
    notation,
    update
) => {

    return <div>

        Editor

        <Button>Save notation</Button>
    </div>

}

const NotationThumbnail = ({
    notation,
    setCurrentNotation
}) => {
    return <div
        onClick={() => setCurrentNotation(notation.id)}
    >
        Thumb:
        {notation.id}
    </div>
}

const Notation = ({
    notation,
    currentNotationId,
    setCurrentNotation,
    updateFn
}) => {

    if (notation.id === currentNotationId) {
        return <NotationForm notation={notation} update={updateFn} />
    }

    return <NotationThumbnail
        notation={notation}
        setCurrentNotation={setCurrentNotation}
    />

}

export const NotationsEditorLayout = ({
    attributes,
    setAttributes,
    duration,
    thermal
}) => {

    const n = useNotations(attributes.notations, setAttributes, duration);

    const [openNotation, setOpenNotation] = useState(undefined);


    return <>

        <manager-provider
            slug="notations-editor"
            palette={attributes.palette}
            autoclear={true}
        >
            <registry-provider
                slug="notations-editor"
                autoclear={true}
                from={attributes.from}
                to={attributes.to}
            >
                <group-provider
                    slug="notations-editor"
                    autoclear={true}
                >
                    <file-provider
                        thermal={thermal}
                        batch={true}
                        autoclear={true}
                    >


                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

                            <div>


                                <registry-histogram interactive={true}></registry-histogram>

                                <registry-range-slider></registry-range-slider>

                                <registry-ticks-bar></registry-ticks-bar>

                                <file-canvas></file-canvas>

                                <div position="relative">
                                    <file-timeline></file-timeline>
                                </div>

                            </div>

                            <div>

                                <div style={{ display: "flex", gap: "10px", width: "100%" }}>

                                    <registry-palette-dropdown />

                                    <registry-range-full-button />

                                    <registry-range-auto-button />

                                </div>

                                <h1>Add or edit notations here</h1>

                                <p>{duration} ms</p>

                                {n.array.map(notation => <Notation
                                    notation={notation}
                                    setAttributes={setAttributes}
                                    setCurrentNotation={setOpenNotation}
                                    currentNotationId={openNotation?.id}
                                />)}

                                <Button
                                    onClick={() => {
                                        const notation = n.addNotation(0, 0, "Popiska notace");

                                        setOpenNotation(notation);
                                    }}
                                >Add notation</Button>

                            </div>

                        </div>


                    </file-provider>

                </group-provider>

            </registry-provider>
        </manager-provider>

    </>

}

export const NotationEditor = ({
    attributes,
    setAttributes,
    duration,
    thermal
}) => {



    const [open, setOpen] = useState(false);

    return <>


        <Button
            variant="secondary"
            size="compact"
            onClick={() => setOpen(true)}
        >Notations</Button>


        {open &&
            <Modal
                title="Notations editor"
                isFullScreen
                onRequestClose={() => {
                    setOpen(false);
                }}
            >
                <NotationsEditorLayout
                    attributes={attributes}
                    setAttributes={setAttributes}
                    duration={duration}
                    thermal={thermal}
                />

            </Modal>
        }



    </>

}