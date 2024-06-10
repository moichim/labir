// import React from "react";
/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/react'
import { Skin } from "../theme/Skin";
import { FC } from 'react';

export const Debug: FC = props => {

    const styles = css`

        color: ${Skin.colorValue( "primary", 500 )};
        background: ${Skin.colorValue( "gray", 100 )};

        .wtf {
            background: ${Skin.colorValue( "success", 300 )}
        }
    
    `;

    return <div css={styles} className="lrc-dark">
        Jsem zde

        <h1>
            Tady je nějaký nadpis
        </h1>

        <div className="wtf lrc-light">
            Tady je zase invers
        </div>
    </div>
}