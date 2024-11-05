import { React, useCallback, useMemo } from '@wordpress/element';

import {
    Modal, Button, Notice
} from '@wordpress/components';

export const AnalysisEditorModal = ({
    thermal,
    open,
    setOpen,
    attributes,
    setAttributes
}) => {

    const ID = useMemo(() => (Math.random() * 1000000).toFixed(0), []);
    const getId = useCallback((input) => `${ID}__${input}`, [ID]);

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

    const fileProviderRef = useCallback(node => {

        if (node) {

            /** Mirror internal changes of analysis to the global state */
            const closure = instance => {

                instance.slots.onSlot1Serialize.set(ID, value => setAttributes({ analysis1: value }));

                instance.slots.onSlot2Serialize.set(ID, value => setAttributes({ analysis2: value }));

                instance.slots.onSlot3Serialize.set(ID, value => setAttributes({ analysis3: value }));

                instance.slots.onSlot4Serialize.set(ID, value => setAttributes({ analysis4: value }));

                instance.slots.onSlot5Serialize.set(ID, value => setAttributes({ analysis5: value }));

                instance.slots.onSlot6Serialize.set(ID, value => setAttributes({ analysis6: value }));

                instance.slots.onSlot7Serialize.set(ID, value => setAttributes({ analysis7: value }));

            }

            node.onInstanceCreated.set(getId("instance_created__2"), closure);

        }

    }, [thermal]);

    // Return nothing when closed
    if (!open) return <></>

    return <Modal
        title="Analysis editor"
        isFullScreen
        onRequestClose={() => setOpen(false)}
    >
        <manager-provider
            slug={getId("manager")}
            palette={palette}
        >

            <registry-provider
                from={from}
                to={to}
            >

                <group-provider>

                    <file-provider
                        thermal={thermal}
                        ref={fileProviderRef}
                        analysis1={analysis1}
                        analysis2={analysis2}
                        analysis3={analysis3}
                        analysis4={analysis4}
                        analysis5={analysis5}
                        analysis6={analysis6}
                        analysis7={analysis7}
                    >

                        <div className="modal-editor__container">

                            <div className="modal-editor__canvas" >
                                <file-canvas></file-canvas>
                                <div>
                                    <file-timeline></file-timeline>
                                </div>
                            </div>

                            <div className="modal-editor__details">

                                <p>Use the tools to draw analyses on the image!</p>

                                <group-tool-buttons style={{paddingBottom: "1rem"}}></group-tool-buttons>

                                <div style={{  }}>
                                    <file-analysis-table></file-analysis-table>
                                </div>
                                <div style={{ height: 300 }}>
                                    <file-analysis-graph style={{ height: "300px" }}></file-analysis-graph>
                                </div>
                            </div>

                        </div>

                        <div style={{ width: "100%", paddingTop: "1rem" }}>

                            <Button size="compact" variant="primary" style={{  }} onClick={() => setOpen(false)}>
                                Close
                            </Button>

                        </div>

                    </file-provider>

                </group-provider>

            </registry-provider>

        </manager-provider>

    </Modal>

}