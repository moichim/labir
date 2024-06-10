import React from "react";
import { Orientation } from "../../../utilities/orientation";

type RangerTickProps = {
    tickLineColor?: React.CSSProperties["backgroundColor"],
    tickLabelColor?: React.CSSProperties["color"]
    className?: string,
    orientation?: Orientation,
    value: number,
    key: number,
    percentage: number,
    trackSizeInPx?: number
}

export const RangerTick: React.FC<RangerTickProps> = ({
    orientation = Orientation.HORIZONTAL,
    trackSizeInPx = 20,
    tickLineColor = "#ccc",
    tickLabelColor = "black",
    ...props
}) => {

    const mainCss: React.CSSProperties = {
        position: "absolute",
        fontSize: "12px",
        textAlign: "center",
        display: "flex",
        alignItems: "center"
    }

    const childCommonCss: React.CSSProperties = {

    }

    const markerCSS: React.CSSProperties = {
        ...childCommonCss,
        backgroundColor: tickLineColor,
        content: ""
    }

    const labelCss: React.CSSProperties = {
        ...childCommonCss,
        color: tickLabelColor

    }

    if ( orientation === Orientation.HORIZONTAL ) {

        mainCss.transform = "translateX(-50%)"
        mainCss.top = "-20px"
        mainCss.width = "28px"
        mainCss.textAlign = "center"
        mainCss.left = `${props.percentage}%`
        mainCss.flexDirection = "column"

        labelCss.width = "100%"
        labelCss.textAlign = "center"

        markerCSS.width = "1px"
        markerCSS.height = `${trackSizeInPx + 10}px`

    } else {

        mainCss.top = `${props.percentage}%`
        mainCss.left = "-5px"
        mainCss.textAlign = "left"
        mainCss.transform = "translateY(-50%)"

        markerCSS.order = "0"
        markerCSS.width = `${trackSizeInPx + 10}px`
        markerCSS.height = "1px"

        labelCss.order = "1"
        labelCss.paddingLeft = "5px"

    }

    return <div
        style={mainCss}
    >
        
        <span style={labelCss}>{props.value.toFixed(2)}</span>
        <span style={markerCSS}></span>
    </div>
}