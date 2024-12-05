import { author, version } from "../package.json"

import "./styles/styles.css";

import "./translations/i18n";

import i18next from 'i18next';
import { initLitI18n } from 'lit-i18n';
import LanguageDetector from 'i18next-browser-languagedetector';

/*
const result = i18next
    .use(initLitI18n)
    .use(LanguageDetector)
    .init(
    {
        // lng: 'de',
        fallbackLng: "en",
        resources: {
            en: {
                translation: {

                    next: "Next",
                    prev: "Previous",
                    back: "Back",

                    description: "Description",
                    author: "Author",
                    license: "License",
                    recordedat: "Recorded at",

                    displaysettings: "Display settings",

                    fileinfo: "File info",
                    thermalfilename: "IR file name",
                    thermalfileurl: "IR file URL",
                    thermalfiledownload: "Download the IR file",
                    visiblefilename: "Visible file name",
                    visiblefileurl: "Visible file URL",
                    visiblefiledownload: "Download the visible file",
                    time: "Time",



                    tutorial: "Tutorial",
                    colourpalette: "Colour palette",
                    palettehint: "Use the dropdown to change the palette.",

                    whatishow: '{{what}} is {{how}}',
                    datamodel: '{{person.name}} is a {{person.age}} year old and is male: {{person.male}}',
                },
            },
            fr: {
                translation: {

                    next: "Avancer",
                    prev: "Rétourner",
                    back: "Au derriére",
                    
                    description: "Description",
                    author: "Auteur",
                    license: "License",
                    recordedat: "Enrégistré à",

                    displaysettings: "Paramètres d'affichage",

                    fileinfo: "Informations sur le fichier",
                    thermalfilename: "Nom du fichier IR",
                    thermalfileurl: "URL du fichier IR",
                    thermalfiledownload: "Télécharger le fichier IR",
                    visiblefilename: "Nom de l'image visible",
                    visiblefileurl: "URL de l'image visible",
                    visiblefiledownload: "Télécharger l'image visible",
                    time: "Temps",


                    tutorial: "Tutoriel",
                    colourpalette: "Palette",
                    palettehint: "Utilisez le menu pour changer le palette.",


                    whatishow: '{{what}} est {{how}}',
                    datamodel: '{{person.name}} a {{person.age}} ans et est un homme: {{person.male}}',
                },
            },
            cs: {
                translation: {

                    next: "Další",
                    prev: "Předchozí",
                    back: "Zpět",

                    description: "Popis",
                    author: "Autor",
                    license: "Licence",
                    recordedat: "Nahráno",

                    displaysettings: "Nastavení zobrazení",

                    fileinfo: "O souboru",
                    thermalfilename: "Název IR souboru",
                    thermalfileurl: "URL IR souboru",
                    thermalfiledownload: "Stáhnout IR soubor",
                    visiblefilename: "Název visible souboru",
                    visiblefileurl: "URL visible souboru",
                    visiblefiledownload: "Stáhnout visible obrázek",
                    time: "Čas",


                    tutorial: "Tutorial",
                    colourpalette: "Barevná paleta",
                    palettehint: "Rozbalovací nabídka pro přepínání barevné palety.",

                    whatishow: '{{what}} je {{how}}',
                    datamodel: '{{person.name}} a {{person.age}} ans et est un homme: {{person.male}}',
                },
            },
            cy: {
                translation: {

                    next: "Nesaf",
                    prev: "Blaenorol",
                    back: "Yn ol",

                    description: "Disgrifiad",
                    author: "Awdur",
                    license: "Trwydded",
                    recordedat: "Wedi recordio yn",

                    displaysettings: "Gosodiadau arddangos",

                    fileinfo: "Gwybodaeth ffeil",
                    thermalfilename: "Enw ffeil IR",
                    thermalfileurl: "URL ffeil IR",
                    thermalfiledownload: "Lawrlwythwch y ffeil IR",
                    visiblefilename: "Enw ffeil weladwy",
                    visiblefileurl: "URL ffeil weladwy",
                    visiblefiledownload: "Lawrlwythwch y ffeil weladwy",
                    time: "Amser",


                    tutorial: "Tiwtorial",

                    colourpalette: "Palet lliw",
                    palettehint: "Defnyddiwch y gwymplen i newid y palet.",

                    whatishow: 'Mae {{what}} yn {{how}}',
                    datamodel: '{{person.name}} a {{person.age}} ans et est un homme: {{person.male}}',
                }
            }
        },
    }
);

*/

/**!
 * ===========
 * LabIR Embed
 * ===========
 * 
 * A webcomponents library for display and analysis of thermal images.
 * 
 */

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



import "./controls/AppInfoButton";




// 2. Providers
import "./hierarchy/providers/ManagerProvider";
import "./hierarchy/providers/RegistryProvider";
import "./hierarchy/providers/GroupProvider";
import "./hierarchy/providers/FileProvider";
import "./hierarchy/providers/FileDropin";
import "./controls/group/GroupDropin";

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
import "./controls/group/GroupToolsBar";


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


// 7. Complex apps go last
import "./apps/single/SingleFileApp";
import "./apps/single/SingleFileAppIsolated";
import "./apps/desktop/DesktopApp";
import "./apps/desktop/DesktopAppIsolated";
import "./apps/DropinApp";

import "./apps/registry/parts/TimeEntryElement";
import "./apps/registry/parts/TimeGroupElement";

import "./apps/registry/parts/TimeGroupFileElement";
import "./apps/registry/parts/TimeGroupRowElement";

import "./apps/group/GroupApp";
import "./apps/group/utils/GroupTimeline";

import "./apps/registry/RegistryApp";

import "./tour/TourStep";





// Initialise dark mode
import { initialiseMode } from "./styles/mode";
initialiseMode();

// Append default styles
import { addDefaultStyles, appendStyles } from "./styles/defaultStyles";
import { ThermalManager } from "@labir/core";

addDefaultStyles();

document.addEventListener("DOMContentLoaded", () => {
    // addDefaultStyles();
})
