import { provide } from "@lit/context";
import { property } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { booleanConverter } from "../../utils/booleanConverter";
import { interactiveAnalysisContext } from "../../utils/context";
import { GroupRenderer } from "./GroupRenderer";
import { InstanceRenderer } from "./InstanceRenderer";
import { pngExportFsContext, pngExportFsSetterContext, pngExportWidthContext, pngExportWidthSetterContext } from "../../utils/pngExportContext";
import { localeContext, localeConverter, Locales } from "../../translations/localeContext";

export type ParsedFileType = {
    thermal: string;
    visible?: string;
    label?: string;
    note?: string;
};

export abstract class AbstractMultipleApp extends BaseElement {

    @property({ type: String, reflect: false, attribute: true, converter: booleanConverter(false) })
    showembed: boolean = false;

    @property({ type: String, reflect: false, attribute: true, converter: booleanConverter(false) })
    showabout: boolean = false;

    @property({ type: String, reflect: false, attribute: true, converter: booleanConverter(false) })
    showtutorial: boolean = false;

    @property({ type: String, reflect: false, converter: booleanConverter(true) })
    showfullscreen: boolean = false;

    @property({ type: String, reflect: true, converter: booleanConverter(true) })
    showhistogram: boolean = true;

    @provide({ context: interactiveAnalysisContext })
    @property({ type: String, reflect: true, converter: booleanConverter(true) })
    interactiveanalysis: boolean = true;

    protected readonly instanceRenderer = new InstanceRenderer(this);

    protected readonly groupRenderer = new GroupRenderer(this);


    @provide({ context: pngExportWidthContext })
    protected pngExportWidth: number = 1200;

    @provide({ context: pngExportWidthSetterContext })
    protected pngExportWidthSetterContext = (value: number) => {
        this.pngExportWidth = value;
    }


    @provide({ context: pngExportFsContext })
    protected pngExportFs: number = 20;

    @provide({ context: pngExportFsSetterContext })
    protected pngExportFsSetterContext = (value: number) => {
        this.pngExportFs = value;
    }

    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    public locale!: Locales;

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