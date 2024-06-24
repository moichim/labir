import { ThermalRegistry } from "@labir/core"
import { useHistogramResolutionInput, useOpacityInput } from "@labir/react-bridge"
import {Input, InputProps} from "@nextui-org/react"

type OpacityInputProps = InputProps & {
    registry: ThermalRegistry
}

/**
 * An input controlling opacity of a ThermalRegistry
 * @package `@labir/tailwind`
 */
export const HistogramResolutionInput: React.FC< OpacityInputProps > = ({
    registry,
    type="range",
    ...props
}) => {

    const resolution = useHistogramResolutionInput( registry );

    return <Input 
        {...props}
        value={resolution.internal.toString()}
        type={type}
        onChange={resolution.onChange}
        onValueChange={resolution.onBlur}
    />

}