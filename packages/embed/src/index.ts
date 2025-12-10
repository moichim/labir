import { version } from "../package.json";

// import "./styles/styles.css";

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
import "./ui/Playground";
import "./ui/Radio";
import "./ui/Slot";
import "./ui/Spinner";
import "./ui/Tip";



import "./apps/apparent-temperature/AustralianApparentTemperature";

import "./controls/AppInfoButton";

import "./controls/manager/PngExportPanel";
import "./controls/registry/DisplaySettingsPanel";

import "./apps/gallery/GalleryApp";
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
import "./hierarchy/mirrors/FileMirror";
import "./hierarchy/mirrors/GroupMirror";
import "./hierarchy/mirrors/ManagerMirror";
import "./hierarchy/mirrors/RegistryMirror";


// 3. Manager controls
import "./controls/manager/GraphSmoothSwitch";
import "./controls/manager/GroupToolButtons";
import "./controls/manager/GroupToolsBar";
import "./controls/manager/PaletteButtons";
import "./controls/manager/PaletteDropdown";
import "./controls/manager/PngExportPanel";
import "./controls/manager/PngExportSettingDialog";
import "./controls/manager/SmoothSwitch";

// 4. Registry controls
import "./controls/registry/Histogram";
import "./controls/registry/OpacitySlider";
import "./controls/registry/RangeAutoButton";
import "./controls/registry/RangeDisplay";
import "./controls/registry/RangeFullButton";
import "./controls/registry/RangeSlider";
import "./controls/registry/RegistryRangeForm";
import "./controls/registry/TicksBar";


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


// 7. Complex apps go last
import "./apps/DropinApp";
import "./apps/file/FileApp";
import "./apps/group/GroupApp";
import "./apps/remote/RemoteBrowser";

import "./apps/connected/ConnectedApp";

// 8. Connection components

import "./connection/components/auth/LoginForm";
import "./connection/components/auth/UserButton";
import "./connection/components/server/ServerBar";
import "./connection/components/server/ServerBreadcrumb";

// 8.1. Folder related components

import "./connection/components/folder/configuration/AnalysisMode";
import "./connection/components/folder/configuration/DisplayMode";
import "./connection/components/folder/configuration/EditingMode";
import "./connection/components/folder/configuration/FolderTagsFilter";
import "./connection/components/folder/configuration/SubfoldersMode";
import "./connection/components/folder/crud/FolderAddDialog";
import "./connection/components/folder/crud/FolderDeleteDialog";
import "./connection/components/folder/crud/FolderEditDialog";
import "./connection/components/folder/crud/FolderUploadDialog";
import "./connection/components/folder/crud/FolderUploadForm";
import "./connection/components/folder/files/FolderFiles";
import "./connection/components/folder/files/FolderRemoveAnalyses";
import "./connection/components/folder/folders/FolderRow";
import "./connection/components/folder/folders/FolderSubfolders";
import "./connection/components/folder/folders/FolderThumbnail";
import "./connection/components/folder/grid/SubfoldersGrid";
import "./connection/components/folder/single/FolderBaseInfo";
import "./connection/components/folder/single/FolderBreadcrumb";

// 8.2 File related components

import "./connection/components/file/FileAnalysisRestoreButton";
import "./connection/components/file/FileAnalysisStoreButton";
import "./connection/components/file/FileComment";
import "./connection/components/file/FileCommentForm";
import "./connection/components/file/FileComments";
import "./connection/components/file/FileCommentsDialog";
import "./connection/components/file/FileDeleteDialog";
import "./connection/components/file/FileEditDialog";
import "./connection/components/file/FileTags";
import "./connection/components/file/FileThumbnail";
import "./connection/components/file/ServerFileDetail";
import "./connection/components/file/ServerFileHeader";


import "./connection/components/user/UserFolders";

import "./connection/components/file/FileAnalysesRemoveButton";
import "./connection/components/file/FileStoreAsFolderThumbnailBtn";

import "./connection/components/server/ShareDialog";

import "./connection/controllers/test/Controller";
import "./connection/controllers/test/Consumer";
import "./connection/controllers/components/FolderEditDialogNew";
import "./connection/controllers/components/LoginFormNew";


setTimeout( () => {
    window.dispatchEvent(new Event("labirthermal-webcomponents-loaded"));
}, 0);



