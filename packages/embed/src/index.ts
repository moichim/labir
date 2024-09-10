import * as pjson from "../package.json"


// Log the start info
console.info( `@labir/embed ${pjson.version}
    Author: ${pjson.author}
    Repository: ${pjson.repository.url}
    ` );


// UI components go next
import "./ui/Dialog";
import "./ui/Button";
// import "./components/ui/DialogElement";
import "./ui/Dropdown";
import "./ui/Bar";
import "./ui/App";

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
import "./controls/file/FilePlaybackSpeedDropdown";
import "./controls/manager/PaletteButtons";
import "./controls/registry/RangeDisplay";
import "./controls/file/FileVideo";
import "./controls/file/markers/ImageMarker";
import "./controls/file/markers/MarkerTimeline";
import "./controls/file/markers/MarksContent";
import "./controls/group/GroupToolButtons";
import "./controls/file/FileAnalysis";
import "./controls/file/FileAnalysisTableRow";

import "./hierarchy/TestComponent";

import "./apps/SingleFileApp";

import "./apps/SingleFileAppIsolated";






// Initialise dark mode
import {initialiseMode} from "./styles/mode";
initialiseMode();

// Append default styles
import {addDefaultStyles} from "./styles/defaultStyles";

addDefaultStyles();

document.addEventListener( "DOMContentLoaded", () => {
    // addDefaultStyles();
} )
