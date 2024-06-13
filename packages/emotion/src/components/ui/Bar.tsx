import React from "react";
import { FC, PropsWithChildren } from "react";
import { Skin } from "../../theme/Skin";
import { useCss } from "../../context/CssContext";
type BarProps = PropsWithChildren & {
    secondRow?: React.ReactNode,
    name?: React.ReactNode
}

export const Bar: FC<BarProps> = props => {

   useCss( "thermalBar", `
    
    .lrc__bar {
        box-sizing: border-box;
        padding: ${Skin.gapValue(.3)};
        background: ${Skin.colorValue("gray", 100)};
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        align-items: center;
    }

    .lrc__bar__name {
        font-weight: bold;
        padding-left: 10px;
    }

    .lrc__bar__secondRow {
        width: 100%;
    }
   
   ` );

    return <div className="lrc__bar">
        {props.name && <div className="lrc__bar__name">{props.name}</div>}
        {props.children}
        {props.secondRow && <div className="lrc__bar__secondRow">{props.secondRow}</div>}
    </div>
    
}