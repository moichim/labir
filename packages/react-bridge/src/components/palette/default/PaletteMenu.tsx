import { MenuProps } from "@headlessui/react"
import React from "react"

type PaletteMenuProps = React.PropsWithChildren & MenuProps & {
}

export const PaletteMenu: React.FC<PaletteMenuProps> = ({children,...props}, ref) => {

    console.log( props, ref );

    return <div {...props} style={{position: "relative"}}>
        {children}
    </div>
}