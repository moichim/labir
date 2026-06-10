import { version } from "../package.json";

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
import { addInlineStyles } from "./styles/defaultStyles";

addInlineStyles();


// Log the start info
console.info("@labirthermal/webcomponents", version);

declare interface RestrictionTarget {}
declare var RestrictionTarget: {
    fromElement?: (el: Element) => Promise<RestrictionTarget>;
    fromRect?: (x: number, y: number, width: number, height: number) => Promise<RestrictionTarget>;
};

declare interface CropTarget {}
declare var CropTarget: {
    fromElement?: (el: Element) => Promise<CropTarget>;
    fromRect?: (x: number, y: number, width: number, height: number) => Promise<CropTarget>;
};

declare interface MediaStreamTrack {
    restrictTo?: (target: RestrictionTarget | CropTarget) => Promise<void> | void;
}

// 0. External components
import "./controls/file/analysis/chart/chart";

// 1. UI components
import "./ui/App";
import "./ui/Bar";
import "./ui/Btn";
import "./ui/Dialog";
import "./ui/Dropdown";
import "./ui/Dropin";
import "./ui/Expandable";
import "./ui/Field";
import "./ui/Icon";
import "./ui/Loading";
import "./ui/Radio";
import "./ui/Slot";
import "./ui/Spinner";
import "./ui/Tip";



import "./apps/AustralianApparentTemperature";

import "./controls/independent/AppInfoButton";

import "./controls/manager/ManagerExportPanel";
import "./controls/independent/DisplayPanel";

import "./apps/ThermalGalleryApp";
import "./utils/multipleFiles/ThermalFile";
import "./utils/multipleFiles/ThermalGroup";



// 2. Providers
import "./controls/group/GroupDropin";
import "./controls/group/GroupDropinInput";
import "./hierarchy/providers/FileProvider";
import "./hierarchy/providers/GroupProvider";
import "./hierarchy/providers/ManagerProvider";
import "./hierarchy/providers/RegistryProvider";

// 2.1. Mirrors
import "./hierarchy/providers/FileMirror";

// 2.2. FileCopy
import "./hierarchy/providers/FileCopy";


// 3. Manager controls
import "./controls/manager/ManagerGraphSmoothSwitch";
import "./controls/manager/ManagerToolsBar";
import "./controls/manager/ManagerPaletteButtons";
import "./controls/manager/ManagerPaletteDropdown";
import "./controls/manager/ManagerExportPanel";
import "./controls/manager/ManagerImageSmoothSwitch";

// 4. Registry controls
import "./controls/registry/RegistryHistogram";
import "./controls/registry/RegistryOpacitySlider";
import "./controls/registry/RangeAutoButton";
import "./controls/registry/RegistryRangeDisplay";
import "./controls/registry/RangeFullButton";
import "./controls/registry/RegistryRangeSlider";
import "./controls/registry/RegistryRangeForm";
import "./controls/registry/RegistryTicksBar";


// 5. Group controls
import "./controls/group/GroupAnalysisSyncButton";
import "./controls/group/GroupChart";
import "./controls/group/GroupDownloadButtons";
import "./controls/group/GroupDownloadDropdown";
import "./controls/group/GroupRangePropagator";
import "./controls/group/GroupTimeline";



// 5. File controls
import "./controls/file/FileCanvas";
import "./controls/file/FileDownloadDropdown";
import "./controls/file/FileInfoButton";
import "./controls/file/fileLabel";
import "./controls/file/FilePlaybackSpeedDropdown";
import "./controls/file/FileShareButton";
import "./controls/file/FileTimeline";
import "./controls/file/FileVideo";
// File analysis
import "./controls/file/analysis/edit/analysisColor";
import "./controls/file/analysis/edit/analysisName";
import "./controls/file/analysis/edit/editArea";
import "./controls/file/analysis/edit/editPoint";
import "./controls/file/analysis/FileAnalysisComplex";
import "./controls/file/analysis/FileAnalysisEdit";
import "./controls/file/analysis/FileAnalysisGraph";
import "./controls/file/analysis/FileAnalysisOverview";
import "./controls/file/analysis/FileAnalysisOverviewRow";
import "./controls/file/analysis/FileAnalysisRow";
import "./controls/file/analysis/FileAnalysisTable";
import "./controls/file/analysis/FileAnalysisDisplay";
// File buttons
import "./controls/file/buttons/FileButton";
import "./controls/file/buttons/FileDropdown";
import "./controls/file/buttons/FileLrcButton";
import "./controls/file/buttons/FilePngButton";
import "./controls/file/buttons/FileRangePropagator";
// File icons
import "./controls/file/icons/FileDetailIcon";
import "./controls/file/icons/FileOpacityIcon";
// File renderers
import "./renderers/FileDetail";
import "./renderers/FileThumbnail";
// File notations

import "./controls/file/notation/NotationContent";
import "./controls/file/notation/NotationEntry";
import "./controls/file/notation/NotationProvider";
import "./controls/file/notation/NotationTimeline";
import "./controls/file/FileVideoExport";


import "./controls/file/video/FileVideoExportPanel";




import "./controls/independent/ConfigDialog";


// 7. Complex apps go last
import "./apps/ThermalDropinApp";
import "./apps/ThermalFileApp";
import "./apps/ThermalGroupApp";


import "./connection/controllers/apps/ConnectedBrowserApp";
import "./connection/controllers/components/FolderEditDialogNew";
import "./connection/controllers/components/user/LoginFormNew";
import "./connection/controllers/components/folder/ConnectedFolderHeader";
import "./connection/controllers/components/folder/listing/ConnectedSubfolderList";
import "./connection/controllers/components/folder/listing/ConnetcedFileList";
import "./connection/controllers/components/folder/upload/ConnectedUploadForm";
import "./connection/controllers/components/user/ConnectedUserButton";
import "./connection/controllers/components/ConnectedBreadcrumb";
import "./connection/controllers/components/configuration/ConnectedConfigSubfolderMode";
import "./connection/controllers/components/configuration/ConnectedConfigFileDisplayMode";
import "./connection/controllers/components/file/ConnectedFileThumbnail";
import "./connection/controllers/components/configuration/ConnectedConfigFileContentMode";
import "./connection/controllers/components/file/ConnectedFileEditDialog";
import "./connection/controllers/components/file/ConnectedFileDeleteDialog";
import "./connection/controllers/components/file/ConnectedFileTags";
import "./connection/controllers/components/file/comments/ConnectedFileComment";
import "./connection/controllers/components/file/comments/ConnectedFileComments";
import "./connection/controllers/components/file/comments/ControlledFileCommentForm";
import "./connection/controllers/components/folder/crud/ConnectedFolderEditDialog";
import "./connection/controllers/components/folder/crud/ConnectedFolderDeleteDialog";
import "./connection/controllers/components/folder/crud/ConnectedFolderCreateDialog";
import "./connection/controllers/components/file/ConnectedFileHeader";
import "./connection/controllers/components/folder/listing/ConnectedSubfoldersGrid";
import "./connection/controllers/components/folder/upload/ConnectedUploadDialog";
import "./connection/controllers/components/folder/crud/ConnectedFolderContentModeSwitch";
import "./connection/controllers/components/file/analysis/ConnectedFileAnalysisButtons";
import "./connection/controllers/components/selection/ConnectedFileSelectionCheckbox";
import "./connection/controllers/components/selection/ConnectedFileSelectionActions";
import "./connection/controllers/components/selection/move/ConnectedLocationSelector";
import "./connection/controllers/components/file/ConnectedFileMoveDialog";
import "./connection/controllers/components/folder/crud/ConnectedFolderMoveDialog";
import "./connection/controllers/components/selection/ConnectedFolderSelectionCheckbox";
import "./connection/controllers/components/selection/ConnectedFolderSelectionActions";
import "./connection/controllers/components/ConnectedShareDialog";


import "./connection/controllers/components/folder/thumbs/ConnectedFolderThumbnail";
import "./connection/controllers/components/folder/thumbs/ConnectedFolderRow";

setTimeout( () => {
    window.dispatchEvent(new Event("labirthermal-webcomponents-loaded"));
}, 0);



