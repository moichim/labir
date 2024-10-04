export type TimelineStructure = {



}

type CoordinatesType = {
    lat: number,
    lon: number
}

export type FileType = {
    thermalUrl: string,
    visibleUrl?: string
}

export type TimelinePlaceType = {

    name: string,
    coordinates?: CoordinatesType,

    files: FileType[]
}

