import React, { useCallback } from 'react';
import { Button, ButtonProps } from '@headlessui/react';
import { ThermalRegistry } from '@labir/core';
import { useThermalRegistryRangeDrive } from '../../properties/drives/useThermalRegistryRangeDrive';
import { useThermalObjectPurpose } from '../../context/useThermalObjectPurpose';
import { useThermalRegistryMinmaxState } from '../../properties/states/useThermalRegistryMinmaxState';
import { useThermalRegistryHistogramState } from '../../properties/states/useThermalRegistryHistogramState';

type RangeButtonFullHeadlessProps = ButtonProps & {
    registry: ThermalRegistry
}

export const RangeButtonAutoHeadless: React.FC<RangeButtonFullHeadlessProps> = ({
    registry,
    children = "Automatický teplotní rozsah",
    ...props
}) => {

    const ID = useThermalObjectPurpose( registry, "RangeButtonAutoHeadless" );
    const range = useThermalRegistryRangeDrive( registry , ID );
    const minmax = useThermalRegistryMinmaxState( registry, ID );
    const histogram = useThermalRegistryHistogramState(registry, ID);

    const onClick = useCallback( () => {

        const length = histogram.value.length;
        const percentage = 100 / length;

        const newRangeTemp = histogram.value.filter( item => item.height >= percentage );

        const newRange = {from: newRangeTemp[0].from, to: newRangeTemp[newRangeTemp.length - 1].to };

        range.set( newRange );

    }, [minmax.value, range.set, histogram.resolution] );

    return <Button {...props} onClick={onClick}>{children}</Button>
}