import { author, version } from "../package.json"

import "./styles/styles.css";

import "./translations/i18n";

/**!
 * ===========
 * LabIR Embed
 * ===========
 * 
 * A webcomponents library for display and analysis of thermal images.
 * 
 */


// Initialise dark mode
import { initialiseMode } from "./styles/mode";
initialiseMode();

// Append default styles
import { appendStyles } from "./styles/defaultStyles";

// addInlineStyles();

appendStyles();


// Log the start info
console.info(`@labir/embed ${version}
Author: ${author}`);

// 0. External components
import "./controls/file/analysis/chart/chart";

// 1. UI components
import "./ui/Dialog";
import "./ui/Button";
import "./ui/Dropdown";
import "./ui/Bar";
import "./ui/App";
import "./ui/Field";

import "./apps/registry/parts/TimeEntryElement";
import "./apps/registry/parts/TimeGroupElement";

import "./apps/apparent-temperature/AustralianApparentTemperature";

import "./controls/AppInfoButton";




// 2. Providers
import "./hierarchy/providers/ManagerProvider";
import "./hierarchy/providers/RegistryProvider";
import "./hierarchy/providers/GroupProvider";
import "./hierarchy/providers/FileProvider";
import "./hierarchy/providers/FileDropin";
import "./controls/group/GroupDropin";
import "./controls/group/GroupDropinInput";

// 2.1. Mirrors
import "./hierarchy/mirrors/ManagerMirror";
import "./hierarchy/mirrors/RegistryMirror";
import "./hierarchy/mirrors/GroupMirror";
import "./hierarchy/mirrors/FileMirror";


// 3. Manager controls
import "./controls/manager/PaletteDropdown";
import "./controls/manager/PaletteButtons";
import "./controls/manager/SmoothSwitch";
import "./controls/manager/GraphSmoothSwitch";
import "./controls/manager/GroupToolButtons";
import "./controls/manager/GroupToolsBar";

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
import "./controls/group/GroupDownloadDropdown";
import "./controls/group/GroupRangePropagator";
import "./controls/group/GroupDownloadButtons";
import "./controls/group/GroupChart";



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

import "./controls/file/analysis/edit/analysisName";
import "./controls/file/analysis/edit/analysisColor";
import "./controls/file/analysis/edit/editArea";
import "./controls/file/analysis/edit/editPoint";
import "./controls/file/analysis/FileAnalysisEdit";
import "./controls/file/analysis/FileAnalysisGraph";
import "./controls/file/analysis/FileAnalysisRow";
import "./controls/file/analysis/FileAnalysisTable";
import "./controls/file/analysis/FileAnalysisOverview";
import "./controls/file/analysis/FileAnalysisOverviewRow";

import "./controls/file/buttons/FileLrcButton";
import "./controls/file/buttons/FilePngButton";
import "./controls/file/buttons/FileButton";
import "./controls/file/buttons/FileRangePropagator";
import "./controls/file/buttons/FileDropdown";


// 7. Complex apps go last
import "./apps/single/SingleFileApp";
import "./apps/single/SingleFileAppIsolated";
import "./apps/desktop/DesktopApp";
import "./apps/desktop/DesktopAppIsolated";
import "./apps/DropinApp";



import "./apps/registry/parts/TimeGroupRowElement";
import "./apps/group/GroupApp";
import "./apps/group/utils/GroupTimeline";
import "./apps/registry/RegistryApp";
import "./tour/TourStep";


import "./apps/remote/RemoteFolderApp";
import "./apps/remote/RemoteBrowser";
import "./apps/remote/RemoteGridApp";


// Notation
import "./controls/file/notation/NotationEntry";
import "./controls/file/notation/NotationContent";
import "./controls/file/notation/NotationTest";
import "./controls/file/notation/NotationTimeline";


import "./apps/lesson/LessonApp";





