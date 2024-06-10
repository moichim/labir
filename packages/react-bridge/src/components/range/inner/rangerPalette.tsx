import { ThermalPaletteType } from "@labir/core"
import { Ranger } from "@tanstack/react-ranger"
import React, { useMemo } from "react"
import { Orientation } from "../../../utilities/orientation"
import { useRangerValues } from "./useRangerValues"

type RangerPaletteProps = {
    palette: ThermalPaletteType,
    ranger: Ranger<HTMLDivElement>,
    values: ReturnType<typeof useRangerValues>,
    orientation: Orientation,
    volumeInPx?: number
}

export const RangerPalette: React.FC<RangerPaletteProps> = props => {

    const startInPercent = useMemo( () => {
        return `${props.ranger.getPercentageForValue( props.values.values[0] )}%`;
    }, [props.ranger,props.values] );

    const dimensionInPercent = useMemo( () => {
        return `${props.ranger.getPercentageForValue( props.values.values[1] ) - props.ranger.getPercentageForValue( props.values.values[0] )}%`;
    }, [props.ranger, props.values] );

    const css: React.CSSProperties = {
        position: "absolute",
        background: props.palette.gradient,
    }

    if ( props.orientation === Orientation.HORIZONTAL ) {
        css.left = startInPercent
        css.width = dimensionInPercent
        css.top = "0px"
        css.height = `${props.volumeInPx}px`
    } else {
        css.top = startInPercent
        css.height = dimensionInPercent
        css.left = "0px"
        css.width = `${props.volumeInPx}px`
        // css.transform = "rotate(90deg)"
        css.background = props.palette.gradient.replace( "90deg", "0deg" )
    }

    return <div
        style={css}
        className="lrc-ranger-highlight"
    ></div>

}