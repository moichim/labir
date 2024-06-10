import React, { useCallback } from 'react';
import { Button, ButtonProps } from '@headlessui/react';
import { ThermalRegistry } from '@labir/core';
import { useThermalRegistryRangeDrive } from '../../properties/drives/useThermalRegistryRangeDrive';
import { useThermalObjectPurpose } from '../../context/useThermalObjectPurpose';
import { useThermalRegistryMinmaxState } from '../../properties/states/useThermalRegistryMinmaxState';

type RangeButtonFullHeadlessProps = ButtonProps & {
    registry: ThermalRegistry
}

export const RangeButtonFullHeadless: React.FC<RangeButtonFullHeadlessProps> = ({
    registry,
    children = "Nastavit paletu na celý rozsah teplot",
    ...props
}) => {

    const ID = useThermalObjectPurpose( registry, "RangeButtonFullHeadless" );
    const range = useThermalRegistryRangeDrive( registry , ID );
    const minmax = useThermalRegistryMinmaxState( registry, ID );

    const onClick = useCallback( () => {
        if (minmax.value !== undefined)
        range.set( {from: minmax.value.min, to: minmax.value.max} );
    }, [minmax.value, range.set] );

    return <Button {...props} onClick={onClick}>{children}</Button>
}