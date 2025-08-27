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
import "./ui/Btn";
import "./ui/Dialog";
import "./ui/Button";
import "./ui/Dropdown";
import "./ui/Bar";
import "./ui/App";
import "./ui/Field";
import "./ui/Loading";
import "./ui/Spinner";
import "./ui/Icon";
import "./ui/Radio";
import "./ui/Slot";



import "./apps/apparent-temperature/AustralianApparentTemperature";

import "./controls/AppInfoButton";

import "./controls/manager/PngExportPanel";
import "./controls/registry/DisplaySettingsPanel";

import "./apps/gallery/GalleryApp";
import "./utils/multipleFiles/ThermalGroup";
import "./utils/multipleFiles/ThermalFile";



// 2. Providers
import "./hierarchy/providers/ManagerProvider";
import "./hierarchy/providers/RegistryProvider";
import "./hierarchy/providers/GroupProvider";
import "./hierarchy/providers/FileProvider";
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
import "./controls/manager/PngExportSettingDialog";

// 4. Registry controls
import "./controls/registry/OpacitySlider";
import "./controls/registry/RangeAutoButton";
import "./controls/registry/RangeFullButton";
import "./controls/registry/TicksBar";
import "./controls/registry/RangeSlider";
import "./controls/registry/RangeDisplay";
import "./controls/registry/Histogram";


// 5. Group controls
import "./controls/group/GroupDownloadDropdown";
import "./controls/group/GroupRangePropagator";
import "./controls/group/GroupDownloadButtons";
import "./controls/group/GroupChart";
import "./controls/group/GroupAnalysisSyncButton";
import "./controls/group/GroupTimeline";



// 5. File controls
import "./controls/file/FileCanvas";
import "./controls/file/FileShareButton";
import "./controls/file/FileInfoButton";
import "./controls/file/FileDownloadDropdown";
import "./controls/file/FileTimeline";
import "./controls/file/FilePlaybackSpeedDropdown";
import "./controls/file/FileVideo";
import "./controls/file/fileLabel";
// File analysis
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
import "./controls/file/analysis/FileAnalysisComplex";
// File buttons
import "./controls/file/buttons/FileLrcButton";
import "./controls/file/buttons/FilePngButton";
import "./controls/file/buttons/FileButton";
import "./controls/file/buttons/FileRangePropagator";
import "./controls/file/buttons/FileDropdown";
// File icons
import "./controls/file/icons/FileDetailIcon";
import "./controls/file/icons/FileOpacityIcon";
// File renderers
import "./renderers/FileThumbnail";
import "./renderers/FileDetail";
// File notations

import "./controls/file/notation/NotationEntry";
import "./controls/file/notation/NotationContent";
import "./controls/file/notation/NotationTimeline";
import "./controls/file/notation/NotationProvider";


// 7. Complex apps go last
import "./apps/DropinApp";
import "./apps/file/FileApp";
import "./apps/group/GroupApp";
import "./apps/remote/RemoteBrowser";

import "./apps/connected/ConnectedApp";

// 8. Connection components
import "./connection/components/auth/UserButton";
import "./connection/components/server/ServerBar"
import "./connection/components/folder/FolderBaseInfo";
import "./connection/components/folder/FolderSubfolders";
import "./connection/components/auth/LoginForm";
import "./connection/components/server/ServerBreadcrumb";
import "./connection/components/folder/FolderThumbnail";
import "./connection/components/folder/FolderBreadcrumb";
import "./connection/components/folder/FolderFiles";
import "./connection/components/folder/FolderAddDialog";
import "./connection/components/folder/FolderDeleteDialog";
import "./connection/components/folder/FolderUploadDialog";
import "./connection/components/folder/FolderEditDialog";
import "./connection/components/folder/DisplayMode";
import "./connection/components/folder/EditingMode";
import "./connection/components/folder/AnalysisMode";
import "./connection/components/folder/FolderTagsFilter";

import "./connection/components/file/ServerFileDetail";
import "./connection/components/file/ServerFileHeader";
import "./connection/components/file/FileEditDialog";
import "./connection/components/file/FileCommentForm";
import "./connection/components/file/FileComments";
import "./connection/components/file/FileComment";
import "./connection/components/file/FileDeleteDialog";
import "./connection/components/file/FileCommentsDialog";
import "./connection/components/file/FileAnalysisStoreButton";
import "./connection/components/file/FileAnalysisRestoreButton";
import "./connection/components/file/FileTags";
import "./connection/components/file/FileThumbnail";


import "./connection/components/user/UserFolders";

import "./connection/components/file/FileStoreAsFolderThumbnailBtn";






