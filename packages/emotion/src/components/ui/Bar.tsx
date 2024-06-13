import React from "react";
import { FC, PropsWithChildren } from "react";
import { Skin } from "../../theme/Skin";
import { useCss } from "../../context/CssContext";
type BarProps = PropsWithChildren & {
    secondRow?: React.ReactNode,
    mainContent?: React.ReactNode,
    name?: React.ReactNode
}

export const Bar: FC<BarProps> = props => {

   useCss( "thermalBar", `
    
    .lrc__bar {
        box-sizing: border-box;
        padding: ${Skin.gapValue(.3)};
        background: ${Skin.colorValue("gray", 100)};
        border: 1px solid ${Skin.colorValue( "gray", 300 )};
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        align-items: center;
        box-shadow: 3px 3px 10px ${Skin.colorValue( "gray", 200 )};
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
        {props.mainContent && <div className="lrc__bar__secondRow">{props.mainContent}</div>}
    </div>
    
}