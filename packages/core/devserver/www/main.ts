import { ThermalFileReader } from "../../src/loading/workers/ThermalFileReader";
import { Instance } from "../../src/file/instance";
import { ThermalManager } from "../../src/hierarchy/ThermalManager";
import { getPool } from "../../src/utils/pool";
import { TestAnalysis } from "../../src/file/analysis/TestAnalysis";

const REGISTRY_ID = "registry_id";
const GROUP_ID = "group_id";

const pool = await getPool();

const manager = new ThermalManager( pool );
const registry = manager.addOrGetRegistry(REGISTRY_ID);
const group = registry.groups.addOrGetGroup(GROUP_ID);

const root = document.getElementById("root");

group.files.addListener("boot", value => {

    console.log( "OLD LOADED" );


    value.forEach(instance => {

        const element = document.createElement("div");
        root?.appendChild(element);
        element.style.width = "500px";
        // element.style.position = "relative";

        instance.mountToDom(element);

        instance.analysis.addAnalysis( new TestAnalysis( instance ) );

    });


})


// registry.loadOneFile( { thermalUrl: "/tucnaci_04.lrc" }, group.id );





const group_2 = registry.groups.addOrGetGroup("group_2");

const mountInstance = (instance: Instance) => {

    const container = document.createElement("div");
    root?.appendChild(container);
    container.style.width = "500px";

    // Canvas container
    const canvasContainer = document.createElement( "div" );
    container.appendChild( canvasContainer );

    instance.mountToDom(canvasContainer);
    instance.timeline.playbackSpeed = 5;

    // Playback button
    const playbackButton = document.createElement( "button" );
    playbackButton.innerHTML = "Playback";
    playbackButton.onclick = () => {

        // instance.timeline.play();
        console.log( "WTF? začínám hrát", instance.timeline.isPlaying );
        if ( instance.timeline.isPlaying === true ) {
            instance.timeline.pause();
        } else if ( instance.timeline.isPlaying === false ) {
            instance.timeline.play();
        }
    }
    // container.appendChild( playbackButton );

    let recording = false;

    // Record button
    const recordButton = document.createElement( "button" );
    recordButton.innerHTML = "Record";
    recordButton.onclick = () => {

        instance.recording.recordEntireFile();

        return;

        if ( recording === false ) {
            instance.recording.start();
            recording = true;
        } else {
            instance.recording.end();
            recording = false;
        }

    }

    container.appendChild( recordButton );

    // Description
    const desc = document.createElement( "div" );
    desc.innerHTML = `${instance.group.id} - ${instance.fileName}`;
    root?.appendChild( desc );

    /*
    container.addEventListener( "click", () => {

        if ( instance.timeline.isPlaying ) {
            instance.timeline.stop();
        } else {
            instance.timeline.play();
        }
        
    });
    */

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

    instances.forEach( instance => {
        instance.analysis.addAnalysis( new TestAnalysis( instance ) );
    } );

    console.log( "INSTANCES MOUNTED - SHOULD POSTPROCESS" );

    group_2.registry.postLoadedProcessing();

    setTimeout( () => {
        group_2.registry.range.imposeRange( {from: -40, to: 200} );
    }, 2000 );

}

batchLoading([
    // "/soustruh.lrc",
    // "/tucnaci_04.lrc",
    // "/image-thermal 2021-11-24 11-18-20.lrc",
    // "/image-thermal 2024-01-12 14-09-37.lrc",
    // "/image-thermal 2024-02-12 10-15-07.lrc",
    // "/image-thermal 2024-02-12 10-15-08.lrc",
    "/sequence.lrc"
]);