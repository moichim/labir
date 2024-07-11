import { ThermalManager } from "../src/manager/ThermalManager";
import { FileReaderService } from "../src/reload/FileReaderService";
import { Instance } from "../src/reload/instance";

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

const loaderTest = async (url: string) => {

    const element = document.createElement("div");
    root?.appendChild(element);
    element.style.width = "500px";
    const reader = await registry.service.loadFile(url) as FileReaderService;
    const instance = await reader.createInstance(group_2);
    instance.mountToDom(element);

    instance.draw();
}


// loaderTest( "/soustruh.lrc" );
// loaderTest( "/tucnaci_04.lrc" );
// loaderTest( "/sequence.lrc" );

const mountInstance = (instance: Instance) => {

    const element = document.createElement("div");
    root?.appendChild(element);
    element.style.width = "500px";

    instance.mountToDom(element);
    instance.draw();

    const desc = document.createElement( "div" );
    desc.innerHTML = `${instance.group.id} - ${instance.fileName}`;
    root?.appendChild( desc );
    // root?.appendChild();

}


const batchLoading = async (
    files: string[]
) => {

    const promises = await Promise.all(
        files.map(file => registry.service.loadFile(file) as Promise< FileReaderService > )
    );

    console.log( "SERVICE LOADED" );

    promises.forEach( async ( reader: FileReaderService ) => {
        const instance = await reader.createInstance( group_2 );
        mountInstance( instance );
    } );

    group_2.registry.range.imposeRange( {from: -40, to: 200} );

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
    "/soustruh.lrc",
    "/tucnaci_04.lrc",
    "/image-thermal 2021-11-24 11-18-20.lrc",
    "/image-thermal 2024-01-12 14-09-37.lrc",
    "/image-thermal 2024-02-12 10-15-07.lrc",
    "/image-thermal 2024-02-12 10-15-08.lrc",
    "/sequence.lrc"
]);