import {author, version } from "../package.json"

/**!
 * ===========
 * LabIR Embed
 * ===========
 * 
 * A webcomponents library for display and analysis of thermal images.
 * 
 */


// Log the start info
console.info( `@labir/embed ${version}
    Author: ${author}
    ` );

// 0. External components
import '@google-web-components/google-chart';

// 1. UI components
import "./ui/Dialog";
import "./ui/Button";
import "./ui/Dropdown";
import "./ui/Bar";
import "./ui/App";

import "./controls/AppInfoButton";


// 2. Providers
import "./hierarchy/providers/ManagerProvider";
import "./hierarchy/providers/RegistryProvider";
import "./hierarchy/providers/GroupProvider";
import "./hierarchy/providers/FileProvider";
import "./hierarchy/providers/FileDropin";
import "./controls/group/GroupDropin";


// 3. Manager controls
import "./controls/manager/PaletteDropdown";
import "./controls/manager/PaletteButtons";


// 4. Registry controls
import "./controls/registry/OpacitySlider";
import "./controls/registry/RangeAutoButton";
import "./controls/registry/RangeFullButton";
import "./controls/registry/TicksBar";
import "./controls/registry/RegistryLog";
import "./controls/registry/RangeSlider";
import "./controls/registry/RangeDisplay";
import "./controls/registry/Histogram";


// 5. Group controls
import "./controls/group/GroupToolButtons";


// 5. File controls
import "./controls/file/FileCanvas";
import "./controls/file/FileShareButton";
import "./controls/file/FileInfoButton";
import "./controls/file/FileDownloadDropdown";
import "./controls/file/FileTimeline";
import "./controls/file/FilePlaybackSpeedDropdown";
import "./controls/file/FileVideo";
import "./controls/file/markers/ImageMarker";
import "./controls/file/markers/MarkerTimeline";
import "./controls/file/markers/MarksContent";
import "./controls/file/FileAnalysis";
import "./controls/file/FileAnalysisTableRow";


// 7. Complex apps go last
import "./apps/SingleFileApp";
import "./apps/SingleFileAppIsolated";
import "./apps/DropinApp";






// Initialise dark mode
import {initialiseMode} from "./styles/mode";
initialiseMode();

// Append default styles
import {addDefaultStyles} from "./styles/defaultStyles";

addDefaultStyles();

document.addEventListener( "DOMContentLoaded", () => {
    // addDefaultStyles();
} )
