import { ThermalFileReader } from "../../src/loading/workers/ThermalFileReader";
import { Instance } from "../../src/file/instance";
import { ThermalManager } from "../../src/hierarchy/ThermalManager";
import { getPool } from "../../src/utils/pool";
import { RectangleAnalysis } from "../../src/properties/analysis/internals/rectangle/RectangleAnalysis";
import { definedTools } from "../../src/properties/tool/ToolDrive";
import { supportedFileTypes, supportedFileTypesInputProperty } from "../../src/loading/workers/parsers";
import { ThermalFileFailure } from "../../src/loading/workers/ThermalFileFailure";

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

        // instance.analysis.storage.addAnalysis( new RectangleAnalysis( "sth", instance ) );

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

    /*
    instances.forEach( instance => {
        instance.analysis.storage.addAnalysis( new RectangleAnalysis( "sth", instance ) );
    } );
     */

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

const buildControls = () => {
    Object.entries( group_2.tool.tools ).forEach( ( [key, instance] ) => {
        const btn = document.createElement( "button" );
        btn.innerHTML = key;

        btn.onclick = () => {
            group_2.tool.selectTool( instance );
        }

        document.body.appendChild( btn );
    } );

    group_2.tool.addListener( "main manager", console.log );


    const randomizer = document.createElement( "button" );
    randomizer.innerHTML = "Vytvořit náhodnou";


    randomizer.addEventListener( "click", () => {

        group_2.forEveryInstance( instance => {

            const top = Math.random() * instance.height;
            const bottom = Math.random() * instance.height;
            const left = Math.random() * instance.width;
            const right = Math.random() * instance.width;

            instance.analysis.layers.placeRectAt( Math.random().toFixed(5), top, left, right, bottom );

        } );

    } );


    document.body.appendChild( randomizer );

    const rrand = document.createElement( "button" );
    rrand.innerHTML = "Vytvořit známou";


    rrand.addEventListener( "click", () => {

        group_2.forEveryInstance( instance => {

            instance.analysis.layers.placeRectAt( Math.random().toFixed(5), 10, 10, 100, 100 );

        } );

    } );


    document.body.appendChild( rrand );



    const upload = document.createElement( "input" );

    upload.type = "file";

    // upload.accept = supportedFileTypesInputProperty;

    upload.addEventListener( "change", async (event) => {
        console.log( event );

        const target = event.target as HTMLInputElement;

        if ( target.files ) {
            const file = target.files[0];

            const result = await manager.service.loadUploadedFile( file );

            if ( result instanceof ThermalFileReader ) {

                const r = manager.addOrGetRegistry( file.name );
                const g = r.groups.addOrGetGroup( file.name );

                const instance = await result.createInstance( g );

                const container = document.createElement( "div" );

                instance.mountToDom( container );
                instance.draw();

                document.body.appendChild( container );

                console.log( result );

            } else if ( result instanceof ThermalFileFailure ) {

                const container = document.createElement( "div" );

                container.innerHTML = result.message;

                document.body.appendChild( container );

            }

            console.log( await file.arrayBuffer() );

        }

    
    } );

    document.body.appendChild( upload );



    const dropin = document.createElement( "div" );

    dropin.style.backgroundColor = "gray";
    dropin.style.width = "300px";
    dropin.style.height = "100px";

    /*

    dropin.ondrop = event => {
        event.preventDefault();
        console.log( event.dataTransfer );
    }

    */

    const indicator = document.createElement( "div" );

    document.body.appendChild( indicator );

    dropin.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropin.classList.add("dropzone--over");
        indicator.innerHTML = "over";
      });

      ["dragleave", "dragend"].forEach((type) => {
        dropin.addEventListener(type, (e) => {
            dropin.classList.remove("dropzone--over");
            indicator.innerHTML = "out";
        });
      });

    dropin.addEventListener( "drop", async ( event ) => {
        event.preventDefault();


        const files = event.dataTransfer;

        if ( files && files.items ) {

            const array = Array.from( files.items );

            for ( let entry of array ) {
                console.log( entry, entry.getAsFile() );

                const file = entry.getAsFile();

                if ( file ) {
                    const service = await manager.service.loadUploadedFile( file );

                    if ( service instanceof ThermalFileReader ) {

                        const instance = await service.createInstance( group );

                        const container = document.createElement( "div" );

                        instance.mountToDom( container );
                        instance.draw();

                        instance.listenerLayer.getLayerRoot().addEventListener( "click", () => {
                            if ( instance.timeline.isPlaying ) {
                                instance.timeline.pause();
                            } else {
                                instance.timeline.play();
                            }
                        } )

                        document.body.appendChild( container );

                    }
                }

                

            }


        }
        console.log( event );
    } );


    document.body.appendChild( dropin );

    /** Dropzone */
    const dropzone = document.createElement( "div" );

    dropzone.style.backgroundColor = "red";
    dropzone.style.width = "500px";
    dropzone.style.height = "500px";

    const listener = manager.service.handleDropzone( dropzone );

    listener.onMouseEnter.add( "debug", () => {
        dropzone.style.backgroundColor = "yellow";
    } );

    listener.onMouseLeave.add( "debug", () => {
        dropzone.style.backgroundColor = "red";
    } );

    listener.onDrop.add( "debug", (value) => {
        console.log( "wtf", value );
        listener.dehydrate();
        console.log( listener );

        setTimeout( () => listener.hydrate(), 5000 );
    } );

    document.body.appendChild( dropzone );


}

buildControls();