import * as pjson from "../package.json"

// Import individual components

// import "./components/single/thermalFileElement";

// These must goo in the following order
/**

import "./components/structure/manager/ManagerComponent";
import "./components/structure/registry/RegistryContextConponent";
import "./components/structure/group/GroupContextComponent";
import "./components/structure/file/FileContextElement";

*/



// UI components go next
import "./components/ui/Dialog";
import "./components/ui/Button";
// import "./components/ui/DialogElement";
import "./components/ui/Dropdown";
import "./components/ui/Bar";
import "./components/ui/App";

/**
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

// import "./components/lesson/Marker";
// import "./components/lesson/Lesson";

import "./components/apps/SingleFileApp";
import "./components/apps/LessonApp";
*/

import "./controls/AppInfoButton";

import "./hierarchy/providers/ManagerProvider";
import "./hierarchy/providers/RegistryProvider";
import "./hierarchy/providers/GroupProvider";
import "./hierarchy/providers/FileProvider";
import "./controls/file/FileCanvas";

import "./controls/manager/PaletteDropdown";
import "./controls/registry/OpacitySlider";
import "./controls/file/FileShareButton";
import "./controls/file/FileInfoButton";
import "./controls/registry/RangeAutoButton";
import "./controls/registry/RangeFullButton";
import "./controls/registry/TicksBar";
import "./controls/registry/RegistryLog";
import "./controls/registry/RangeSlider";
import "./controls/file/FileDownloadDropdown";
import "./controls/registry/Histogram";
import "./controls/file/FileTimeline";

import "./hierarchy/TestComponent";

import "./apps/SingleFileApp";




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
