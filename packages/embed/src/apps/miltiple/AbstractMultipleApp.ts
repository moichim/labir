import { css } from "lit";
import { state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { GroupRenderer } from "./GroupRenderer";
import { InstanceRenderer } from "./InstanceRenderer";

export type ParsedFileType = {
    thermal: string;
    visible?: string;
    label?: string;
    note?: string;
};

export abstract class AbstractMultipleApp extends BaseElement {

    @state()
    highlightFrom?: number;

    @state()
    highlightTo?: number;

    static styles? = [
        InstanceRenderer.styles,
        GroupRenderer.styles,
        css`
    
        `
    ];

    protected readonly instanceRenderer = new InstanceRenderer(this);

    protected readonly groupRenderer = new GroupRenderer(this);

    public static FILE_RECORD_SEPARATOR = ";";
    public static FILE_SEGMENT_SEPAROATOR = "|";
    public static FILE_COMPONENT_SEPAROATOR = "~";
    public static FILE_THERMAL_KEY = "thermal";
    public static FILE_VISIBLE_KEY = "visible";
    public static FILE_LABEL_KEY = "label";
    public static FILE_NOTE_KEY = "note";

    protected parseFilesProperty(
        property: string
    ): ParsedFileType[] {

        const pieces = property
            // Split records by semicolon => file string
            .split(AbstractMultipleApp.FILE_RECORD_SEPARATOR)
            // Extract individual records
            .map(record => {

                let thermal: string | undefined = undefined;
                let visible: string | undefined = undefined;
                let label: string | undefined = undefined;
                let note: string | undefined = undefined;

                record.trim()
                    // Split record into segments => segment strings were separated by |
                    .split(AbstractMultipleApp.FILE_SEGMENT_SEPAROATOR)
                    .forEach(segment => {

                        // Split segment to its components => [key,value]
                        const components = segment.trim().split(AbstractMultipleApp.FILE_COMPONENT_SEPAROATOR);

                        if (components.length > 2) {
                            return undefined;
                        }

                        const [key, value] = components;


                        const sanitizedKey = key.trim();
                        const sanitizedValue = value.trim();

                        switch (sanitizedKey) {

                            case AbstractMultipleApp.FILE_THERMAL_KEY:
                                thermal = sanitizedValue;
                                break;
                            case AbstractMultipleApp.FILE_VISIBLE_KEY:
                                visible = sanitizedValue;
                                break;
                            case AbstractMultipleApp.FILE_LABEL_KEY:
                                label = sanitizedValue;
                                break;
                            case AbstractMultipleApp.FILE_NOTE_KEY:
                                note = sanitizedValue;
                                break;

                        }


                    });

                if (thermal === undefined) {
                    return undefined;
                } else {
                    return {
                        thermal,
                        visible,
                        note,
                        label
                    } as ParsedFileType
                }



            });

        return pieces.filter(record => record !== undefined) as ParsedFileType[];


    }

}