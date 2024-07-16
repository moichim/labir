import * as pjson from "../package.json"

// Import individual components

// import "./components/single/thermalFileElement";

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
import "./components/ui/Bar";

// Other components may go in any order
import "./components/properties/PaletteDropwodnElement";
import "./components/properties/OpacityRangeElement";
import "./components/buttons/RegistrySetAutoRange";
import "./components/buttons/RegistrySetMnimaxRangeButton";
import "./components/buttons/FileInfoButton";
import "./components/buttons/AppInfoButton";
import "./components/buttons/FileNameButton";
import "./components/buttons/FileDownloadButton";
import "./components/properties/RangeSliderElement";
import "./components/properties/Histogram";
import "./components/properties/Ticks";
import "./components/buttons/FileShareButton";
import "./components/properties/Timeline";

import "./components/lesson/Marker";
import "./components/lesson/Lesson";

import "./components/apps/SingleFileApp";
import "./components/apps/LessonApp";




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
