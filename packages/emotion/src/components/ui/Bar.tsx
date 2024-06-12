import React from "react";
import { FC, PropsWithChildren } from "react";
import { Skin } from "../../theme/Skin";
type BarProps = PropsWithChildren & {}

export const Bar: FC<BarProps> = props => {

    /*
    const styles = css`
    
        display: flex;
        padding: 5px;
        background: ${Skin.colorValue( "gray", 200 )}
    
    `;
    */

    return <div>
        {props.children}
    </div>
    
}