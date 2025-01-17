/**
 * Keys of all translation keys.
 * 
 * In the comment is the englis version. Use only the keys in any t() function.
 */
export enum T {

    loading = "loading",

    /** Next */
    next = "next",
    /** Previous */
    prev = "prev",
    /** Back */
    back = "back",
    /** Close */
    close = "close",

    /** Description */
    description = "description",
    /** Author */
    author = "author",
    /** License */
    license = "license",
    /** Recorded at */
    recordedat = "recordedat",

    /** Display settings */
    displaysettings = "displaysettings",

    /** File rendering */
    filerendering = "filerendering",

    /** Pixelated */
    pixelated = "pixelated",

    /** Smooth */
    smooth = "smooth",

    /** 'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are. */
    filerenderinghint = "filerenderinghint",

    /** Adjust time scale */
    adjusttimescale = "adjusttimescale",

    automaticrange = "automaticrange",
    fullrange = "fullrange",

    /** Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max). */
    adjusttimescalehint = "adjusttimescalehint",

    /** Select colour palette of thermal display. */
    colourpalettehint = "colourpalettehint",

    /** Palette {name} */
    palettename = "palettename",


    /** File info */
    fileinfo = "fileinfo",
    /** IR file name */
    thermalfilename = "thermalfilename",
    /** IR file URL */
    thermalfileurl = "thermalfileurl",
    /** Download the IR file */
    thermalfiledownload = "thermalfiledownload",
    /** Visible file name */
    visiblefilename = "visiblefilename",
    /** Visible file URL */
    visiblefileurl = "visiblefileurl",
    /** Download visible file */
    visiblefiledownload = "visiblefiledownload",

    /** Time */
    time = "time",
    /** Duration */
    duration = "duration",
    /** Resolution */
    resolution = "resolution",
    /** Bytesize */
    bytesize = "bytesize",
    /** Minimal temperature */
    minimaltemperature = "minimaltemperature",
    /** Maximal temperature */
    maximaltemperature = "maximaltemperature",

    /** File type */
    filetype = "filetype",
    /** Type */
    type = "type",
    /** Supported devices */
    supporteddevices = "supporteddevices",



    download = "download",
    downloadoriginalfiles = "downloadoriginalfiles",
    downloadoriginalfileshint = "downloadoriginalfileshint",
    downloadoriginalfile = "downloadoriginalfile",
    exportcurrentframeaspng = "exportcurrentframeaspng",
    convertentiresequencetovideo = "convertentiresequencetovideo",
    pngofindividualimages = "pngofindividualimages",
    pngofindividualimageshint = "pngofindividualimageshint",
    pngofentiregroup = "pngofentiregroup",
    pngofentiregrouphint = "pngofentiregrouphint",
    csvofanalysisdata = "csvofanalysisdata",
    csvofanalysisdatahint = "csvofanalysisdatahint",

    range = "range",
    info = "info",
    note = "note",

    group = "group",
    donotgroup = "donotgroup",
    groupby = "groupby",

    byday = "by day",
    byhour = "by hour",
    byweek = "by week",
    bymonth = "by month",
    byyear = "by year",

    play = "play",
    pause = "pause",
    stop = "stop",
    date = "date",
    frame = "frame",
    playbackspeed = "playbackspeed",
    graphlines = "graphlines",
    straightlines = "straightlines",
    smoothlines = "smoothlines",
    graphlineshint = "graphlineshint",

    analysis = "analysis",
    avg = "avg",
    min = "min",
    max = "max",
    size = "size",
    edit = "edit",
    editsth = "editsth",
    remove = "remove",
    addpoint = "addpoint",
    addrectangle = "addrectangle",
    addellipsis = "addellipsis",
    analysishint = "analysishint",
    graph = "graph",
    graphhint1 = "graphhint1",
    graphhint2 = "graphhint2",

    rectangle = "rectangle",
    ellipsis = "ellipsis",
    point = "point",
    name = "name",
    color = "color",
    top = "top",
    left = "left",
    right = "right",
    bottom = "bottom",
    columns = "columns",

    fromto = "fromto",
    downloadgraphdataascsv = "downloadgraphdataascsv",


    apparenttemperature = "apparenttemperature",
    airtemperature = "airtemperature",
    relativeairhumidity = "relativeairhumidity",
    windspeed = "windspeed",
    inpercent = "inpercent",
    apparenttemperatureverbose = "apparenttemperatureverbose",
    youfeelwarmer = "youfeelwarmer",
    youfeelcolder = "youfeelcolder",
    apparenttemperaturehint = "apparenttemperaturehint",



    /** Inspect tool */
    inspecttemperatures = "inspecttemperatures",
    usemousetoinspecttemperaturevalues = "usemousetoinspecttemperaturevalues",

    /**  Edit analysis tool */
    editanalysis = "editanalysis",
    dragcornersofselectedanalysis = "dragcornersofselectedanalysis",

    /** Add point tool */
    addpointanalysis = "addpointanalysis",
    clickandaddpoint = "clickandaddpoint",

    /** Add rectangle tool */
    addrectangleanalysis = "addrectangleanalysis",
    clickandaddrectangle = "clickandaddrectangle",

    /** Add ellipsis tool */
    addellipsisanalysis = "addellipsisanalysis",
    clickandaddellipsis = "clickandaddellipsis",



    /** Tutorial */
    tutorial = "tutorial",
    /** Colour Palette */
    colourpalette = "colourpalette",
    /** Use the dropdown to change the palette */
    palettehint = "palettehint",

}

export default {
    T: T
}

export type Translation = {
    [K in keyof typeof T]: string
}

type LangDefinition = {
    code: string,
    name: string,
    flag: string,
    disabled?: true
}

export const languages: LangDefinition[] = [
    
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
    },
    
];

export const languagesObject = Object.fromEntries( languages.map( l => [l.code, l] ) );