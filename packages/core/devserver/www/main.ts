import { ThermalFileReader } from "../../src/loading/workers/ThermalFileReader";
import { Instance } from "../../src/file/instance";
import { ThermalManager } from "../../src/hierarchy/ThermalManager";

const REGISTRY_ID = "registry_id";
const GROUP_ID = "group_id";

const manager = new ThermalManager;
const registry = manager.addOrGetRegistry(REGISTRY_ID);
const group = registry.groups.addOrGetGroup(GROUP_ID);

const root = document.getElementById("root");

group.instances.addListener("boot", value => {

    console.log( "OLD LOADED" );


    value.forEach(instance => {

        const element = document.createElement("div");
        root?.appendChild(element);
        element.style.width = "500px";
        // element.style.position = "relative";

        instance.mountToDom(element);

    });


})


// registry.loadOneFile( { thermalUrl: "/tucnaci_04.lrc" }, group.id );





const group_2 = registry.groups.addOrGetGroup("group_2");


// loaderTest( "/soustruh.lrc" );
// loaderTest( "/tucnaci_04.lrc" );
// loaderTest( "/sequence.lrc" );

const mountInstance = (instance: Instance) => {

    const element = document.createElement("div");
    root?.appendChild(element);
    element.style.width = "500px";

    // console.log( "mounting to", element );
    // console.log( "drawing" );
    instance.mountToDom(element);
    // instance.draw();

    const desc = document.createElement( "div" );
    desc.innerHTML = `${instance.group.id} - ${instance.fileName}`;
    root?.appendChild( desc );
    // root?.appendChild();

    element.addEventListener( "click", () => {

        if ( instance.timeline.isPlaying ) {
            instance.timeline.stop();
        } else {
            instance.timeline.play();
        }
        // console.log( "hraji" );
        
    });

}


const batchLoading = async (
    files: string[]
) => {

    console.log( "SERVICE LOADING START" );

    const services = await Promise.all(
        files.map(file => registry.service.loadFile(file) as Promise< ThermalFileReader > )
    );

    console.log( "SERVICE LOADING END - START INSTANTIATION", services );

    const instances = await Promise.all( 
        services.map( service => service.createInstance( group_2 ) )
     );

    console.log( "INSTANCES CREATED", instances );

    instances.map( mountInstance );

    console.log( "INSTANCES MOUNTED - SHOULD POSTPROCESS" );

    /*

    const instances = await services.map( async ( reader: FileReaderService ) => {
        const instance = await reader.createInstance( group_2 );
        mountInstance( instance );
        return instance;
    } );

    */

    //group_2.registry.range.imposeRange( {from: -40, to: 200} );

    //setTimeout( () => group_2.registry.postLoadedProcessing(), 0 );
    group_2.registry.postLoadedProcessing();

    // group_2.registry.range.imposeRange( {from: -40, to: 200} );

    setTimeout( () => {
        group_2.registry.range.imposeRange( {from: -40, to: 200} );
    }, 2000 );

}

/*

registry.loadFiles({
    [group.id]: [
        { thermalUrl: "/tucnaci_04.lrc" },
        { thermalUrl: "/soustruh.lrc" }
    ]
});

*/

batchLoading([
    // "/soustruh.lrc",
    // "/tucnaci_04.lrc",
    // "/image-thermal 2021-11-24 11-18-20.lrc",
    // "/image-thermal 2024-01-12 14-09-37.lrc",
    // "/image-thermal 2024-02-12 10-15-07.lrc",
    // "/image-thermal 2024-02-12 10-15-08.lrc",
    "/sequence.lrc"
]);