import * as pjson from "../package.json"

// Import individual components

import "./components/single/thermalFileElement";

// These must goo in the following order
import "./components/structure/manager/ManagerComponent";
import "./components/structure/registry/RegistryContextConponent";
import "./components/structure/group/GroupContextComponent";
import "./components/structure/file/FileContextElement"



// UI components go next
import "./components/ui/Dialog";
import "./components/ui/Button";
// import "./components/ui/DialogElement";
import "./components/ui/Dropdown";

// Other components may go in any order
import "./components/properties/PaletteDropwodnElement";
import "./components/properties/OpacityRangeElement";
import "./components/buttons/RegistrySetAutoRange";
import "./components/buttons/RegistrySetMnimaxRangeButton";
import "./components/buttons/FileInfoButton";
import "./components/buttons/AppInfoButton";
import "./components/buttons/FileNameButton";
import "./components/properties/RangeSliderElement";

import "./components/apps/SingleFileApp";




// Log the start info
console.info( `@labir/embed ${pjson.version}
Author: ${pjson.author}
Repository: ${pjson.repository.url}
` );

// Initialise dark mode
import {initialiseMode} from "./styles/mode";
initialiseMode();

// Append default styles
import {addDefaultStyles} from "./styles/defaultStyles";

addDefaultStyles();

document.addEventListener( "DOMContentLoaded", () => {
    // addDefaultStyles();
} )





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