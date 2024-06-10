import { Button, ButtonProps } from "@headlessui/react"

export type PaletteMenuButtonProps = React.PropsWithChildren & ButtonProps & {

}

export const PaletteMenuButton: React.FC<PaletteMenuButtonProps> = props => {
    return <Button {...props}/>
}