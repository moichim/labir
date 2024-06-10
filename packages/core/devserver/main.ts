import { ThermalManager } from "../src/manager/ThermalManager";

const REGISTRY_ID = "registry_id";
const GROUP_ID = "group_id";

const manager = new ThermalManager;
const registry = manager.addOrGetRegistry( REGISTRY_ID );
const group = registry.groups.addOrGetGroup( GROUP_ID );

const root = document.getElementById( "root" );

group.instances.addListener( "boot", value => {


    value.forEach( instance => {

        const element = document.createElement( "div" );
        root?.appendChild( element );
        element.style.width = "500px";
        // element.style.position = "relative";

        instance.mountToDom( element );

    } );


})


// registry.loadOneFile( { thermalUrl: "/tucnaci_04.lrc" }, group.id );

registry.loadFiles( {
    [group.id]: [
        {thermalUrl: "/tucnaci_04.lrc" },
        {thermalUrl: "/soustruh.lrc"}
    ]
} );
