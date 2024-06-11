import { ThermalInstance, useThermalContext, useThermalGroupInstancesState, ThermalRegistryRange } from "@labir/react-bridge"
import React, { useEffect } from "react"

type ThermalFileComponentProps = {
    url: string
}

export const ThermalFile: React.FC<ThermalFileComponentProps> = props => {

    const manager = useThermalContext();

    const registry = manager.addOrGetRegistry( "default", {histogramResolution: 200} );
    const group = registry.groups.addOrGetGroup( "default" );
    const instances = useThermalGroupInstancesState( group, "default" );


    useEffect( () => {

        registry.loadOneFile( { thermalUrl: props.url }, group.id );

    }, [ props.url ] );

    return <>

        {instances.value.map( instance => <div key={instance.id}>
            <ThermalRegistryRange registry={ registry } step={0.1} />
            <ThermalInstance instance={instance}/>
        </div> )}
    
    </>
}