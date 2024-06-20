import * as pjson from "../package.json"
import "./components/single/thermalFileElement";
import "./components/structure/manager/ManagerComponent";
import "./components/structure/registry/RegistryContextConponent";
import "./components/structure/group/GroupContextComponent";
import "./components/structure/file/FileContextElement"
import "./components/properties/PaletteDropwodnElement";
import "./components/properties/OpacityRangeElement";

console.info( `@labir/embed ${pjson.version}
Author: ${pjson.author}
Repository: ${pjson.repository.url}
` );

/*
document.addEventListener( "DOMContentLoaded", () => {

    const obj = document.getElementById( "from" );

    if ( obj ) {
        setTimeout( () => {
            // target?.appendChild( obj );
            obj.setAttribute( "name", "Jsme jméno" );
        }, 5000 );
    }

    console.log( document );

    const opacita = document.getElementById( "kanal" )!;

    setTimeout( () => {
        opacita.setAttribute( "value", "0.5" );
    }, 6000 );

} );

*/