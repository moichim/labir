import i18next, { t } from "i18next";
import { initLitI18n } from "lit-i18n";
import LanguageDetector from "i18next-browser-languagedetector";
import { LitElement, css, html, nothing } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { AbstractAddTool, AbstractAreaAnalysis, CallbacksManager, Instance, PointAnalysis, ThermalFileFailure, ThermalFileReader, ThermalManager, ThermalPalettes, TimeFormat, availableAnalysisColors, playbackSpeed, zip } from "@labirthermal/core";
import { createRef, ref } from "lit/directives/ref.js";
import { consume, createContext, provide } from "@lit/context";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { v4 } from "uuid";
import { ifDefined } from "lit/directives/if-defined.js";
import { map } from "lit/directives/map.js";
import { cache } from "lit/directives/cache.js";
import { arrow, autoUpdate, computePosition, flip, inline, offset, shift } from "@floating-ui/dom";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { publicIpv4 } from "public-ip";
import "toolcool-range-slider";
import "toolcool-range-slider/dist/plugins/tcrs-marks.min.js";
import "toolcool-range-slider/src/plugins/moving-tooltip-plugin";
import "@google-web-components/google-chart";
import { endOfDay, endOfHour, endOfMonth, endOfWeek, endOfYear, format, startOfDay, startOfHour, startOfMonth, startOfWeek, startOfYear } from "date-fns";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { BufferTarget, Mp4OutputFormat, Output, QUALITY_HIGH, QUALITY_LOW, QUALITY_MEDIUM, QUALITY_VERY_HIGH, QUALITY_VERY_LOW, VideoSample, VideoSampleSource } from "mediabunny";
import { Directive, directive } from "lit/directive.js";
import Client from "@labirthermal/server";

//#region package.json
var version$1 = "1.3.4";

//#endregion
//#region src/translations/languages/en.ts
const en = {
	delete: "Delete",
	create: "Create",
	createfolder: "Create a folder",
	createsubfolder: "Create a subfolder",
	subfolder: "Subfolder",
	display: "Display",
	syncanalyses: "Synchronise analyses",
	uploadedby: "Uploaded by",
	uploadeddat: "Uploaded at",
	overviewofyourfolders: "Overview of your folders",
	content: "Content",
	palette: "Palette",
	layout_simple: "Simple layout",
	layout_advanced: "Evaluation layout",
	layout_nogui: "No GUI",
	layout_lesson: "Lesson layout",
	share: "Share",
	fileloadingerror: "File loading error",
	embedhint: "To embed this block in another website, use the following code:",
	embedlibrary: "Insert the library - once in HTML head",
	embedcomponent: "Use the following code anywhere in HTML body",
	copy: "Copy",
	remotefoldersbrowseraddfolderhint: "If you add another folder in the storage, you will see additional evaluation options here.",
	loading: "Loading",
	config: "Settings",
	temperature: "Temperature",
	file: "File",
	upload: "Upload",
	uploadafile: "Upload a file",
	selectfile: "Select a file",
	addfiles: "Add file(s)",
	clear: "Clear",
	dragorselectfile: "Drag and drop an LRC file or select it from disk",
	detail: "Detail",
	showeverything: "Show everything",
	next: "Next",
	prev: "Previous",
	back: "Back",
	close: "Close",
	reload: "Reload",
	open: "Open",
	description: "Description",
	author: "Author",
	license: "License",
	recordedat: "Recorded at",
	displaysettings: "Display settings",
	filerendering: "File rendering",
	pixelated: "Pixelated",
	smooth: "Smooth",
	filerenderinghint: "'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",
	adjusttimescale: "Adjust temperature scale",
	automaticrange: "Automatic range",
	fullrange: "Full range",
	adjusttimescalehint: "Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",
	palettename: "{{name}} palette",
	colourpalettehint: "Select colour palette of thermal display.",
	fileinfo: "File info",
	thermalfilename: "IR file name",
	thermalfileurl: "IR file URL",
	thermalfiledownload: "Download the IR file",
	visiblefilename: "Visual file name",
	visiblefileurl: "Visual file URL",
	visiblefiledownload: "Visual file download",
	togglevisibleimage: "Switch IR / VIS image",
	time: "Time",
	duration: "Duration",
	resolution: "Resolution",
	bytesize: "Bytesize",
	minimaltemperature: "Minimal temperature",
	maximaltemperature: "Maximal temperature",
	filetype: "File type",
	type: "Type",
	supporteddevices: "Supported devices",
	numfiles: "{{num}} files",
	download: "Download",
	downloadoriginalfiles: "- individual files",
	downloadoriginalfileshint: "Download all source IR files",
	downloadoriginalfile: "- Original thermal file {{type}}",
	exportcurrentframeaspng: "- Current frame",
	convertentiresequencetovideo: "- Convert entire sequence to video",
	pngofindividualimages: "- individual files",
	pngofindividualimageshint: "Export all files individually.",
	pngofentiregroup: "- group",
	pngofentiregrouphint: "Export the entire group as one image",
	csvofanalysisdata: "- analysis data",
	csvofanalysisdatahint: "Table of temperatures in analyses",
	exportimagewidth: "Exported image width",
	exportimagefontsize: "Exported image font size",
	exportgroupname: "Export group name",
	exportfilenames: "Export file names",
	exportdimensions: "Export dimensions",
	exportgroup: "Export group",
	exportcontent: "Export content",
	numberofcolumns: "Number of columns",
	thermalscale: "Thermal scale",
	thermalrange: "Thermal range",
	filedate: "File date",
	folder: "Folder",
	folders: "Folders",
	range: "Range",
	info: "Info",
	note: "Note",
	group: "Group",
	donotgroup: "Do not group",
	groupby: "Group {{era}}",
	groupped: "groupped",
	showingfolder: "Displaying the folder",
	showingfolders: "Displaying folders",
	and: "and",
	or: "or",
	doyouwanttoadd: "Do you want to diaplay also",
	youmayalsoadd: "You may also display",
	bydays: "by day",
	byhours: "by hour",
	byweeks: "by week",
	bymonths: "by month",
	byyears: "by year",
	play: "Play",
	pause: "Pause",
	stop: "Stop",
	date: "Date",
	frame: "Frame",
	playbackspeed: "Playback speed",
	graphlines: "Graph lines",
	straightlines: "Straight lines",
	smoothlines: "Smooth lines",
	graphlineshint: "'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",
	analysis: "Analysis",
	analyses: "Analyses",
	avg: "AVG",
	min: "MIN",
	max: "MAX",
	size: "Size",
	edit: "Edit",
	editsth: "Edit {{what}}",
	remove: "Remove",
	addpoint: "Add point",
	addellipsis: "Add ellipsis",
	addrectangle: "Add rectangle",
	analysishint: "You may select area in the IR image to see its temperatures.",
	graph: "Graph",
	graphhint1: "Add analysis first to see the graph!",
	graphhint2: "Click on an analysis <thermal-btn variant='background' interactive='false' tooltip='You can see them in the table above...'>value</thermal-btn> to see its graph here!",
	rectangle: "rectangle",
	ellipsis: "ellipsis",
	point: "point",
	name: "Name",
	color: "Color",
	top: "Top",
	left: "Left",
	right: "Right",
	bottom: "Bottom",
	columns: "{{num}} images in a row",
	fromto: "From {{from}} to {{to}}",
	downloadgraphdataascsv: "Download graph data as CSV",
	apparenttemperature: "Apparent temperature",
	apparenttemperaturehint: "This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",
	airtemperature: "Air temperature",
	relativeairhumidity: "Relative air humidity",
	windspeed: "Wind speed",
	inpercent: "in percent",
	analysissync: "Synchronise analyses",
	apparenttemperatureverbose: "The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",
	youfeelwarmer: "The apparent temperature is {{diff}} °C higher than the air temperature.",
	youfeelcolder: "The apparent temperature is {{diff}} °C lower than the air temperature.",
	inspecttemperatures: "Inspect temperatures",
	usemousetoinspecttemperaturevalues: "Use mouse to inspect temperature values.",
	editanalysis: "Edit analysis",
	dragcornersofselectedanalysis: "Drag corners of any selected analysis.",
	addpointanalysis: "Add a point analysis",
	clickandaddpoint: "Click on the IR image to add a point analysis",
	addrectangleanalysis: "Add a rectangular analysis",
	clickandaddrectangle: "Click and drag on the IR image to add a rectangular analysis.",
	addellipsisanalysis: "Add an elyptical analysis",
	clickandaddellipsis: "Click and drag on the thermogram to add an elyptical analysis.",
	tutorial: "Tutorial",
	colourpalette: "Colour palette",
	palettehint: "Use the menu to change the colour palette.",
	remotefoldersbrowser: "Remote folders browser",
	server: "Server",
	networklog: "Network Log",
	editfile: "Edit File",
	editfolder: "Edit Folder",
	editcomment: "Edit Comment",
	user: "User",
	griddisplay: "Grid display",
	tabledisplay: "Table display",
	deletefile: "Delete File",
	deletefolder: "Delete Folder",
	comments: "Comments",
	deletecomment: "Delete Comment",
	savecomment: "Save Comment",
	addcomment: "Add Comment",
	nocomments: "No comments",
	savechanges: "Save Changes",
	uploadfile: "Upload File",
	compactview: "Compact View",
	showdiscussion: "Show Discussion",
	edittags: "Edit Tags",
	availabletags: "Available Tags",
	assignedtags: "Assigned Tags",
	connectioninformation: "Connection Information",
	serverurl: "Server URL",
	servername: "Server Name",
	login: "Login",
	logout: "Logout",
	password: "Password",
	logoutmessage: "Are you sure you want to log out?",
	loginerror: "Unable to log in.",
	accessibletologgedinusers: "This page is accessible only to logged-in users.",
	export: "Export",
	exportvideo: "Export Video",
	exportpng: "Export Image",
	exportdonotclosewindowhint: "Do not close this window, the file will download automatically.",
	exportencodingfile: "Encoding video file...",
	exportrecordingframes: "Recording frames...",
	histogram: "Histogram",
	timeline: "Timeline",
	exportwidth: "Width",
	exportmargin: "Margins",
	exportgap: "Gap",
	exportgrahpheight: "Graph height",
	videoquality: "Video quality",
	imagecompression: "Image compression",
	theme: "Theme",
	light: "Light",
	dark: "Dark",
	foldermayhavefiles: "Folder for files",
	foldermayhavesubfolders: "Folder for subfolders"
};

//#endregion
//#region src/translations/languages/fr.ts
const fr = {
	delete: "Supprimer",
	create: "Créer",
	createfolder: "Créer un dossier",
	createsubfolder: "Créer un sous-dossier",
	subfolder: "Sous-dossier",
	display: "Affichage",
	syncanalyses: "Synchroniser les analyses",
	uploadedby: "Téléversé par",
	uploadeddat: "Téléversé le",
	overviewofyourfolders: "Aperçu de vos dossiers",
	content: "Contenu",
	palette: "Palette",
	loading: "Chargement",
	config: "Einstellungen",
	temperature: "Temperature",
	upload: "Téléverser",
	uploadafile: "Téléverser un fichier",
	selectfile: "Sélectionner un fichier",
	addfiles: "Ajouter un/des fichier(s)",
	clear: "Effacer",
	dragorselectfile: "Glissez-déposez un fichier LRC ou sélectionnez-le depuis le disque",
	share: "Partager",
	fileloadingerror: "Erreur de chargement du fichier",
	embedhint: "Pour intégrer ce bloc dans un autre site Web, utilisez le code suivant :",
	embedlibrary: "Insérez la bibliothèque – une seule fois dans l'en-tête HTML",
	embedcomponent: "Utilisez le code suivant n'importe où dans le corps HTML",
	copy: "Copier",
	remotefoldersbrowseraddfolderhint: "Si vous ajoutez un autre dossier dans le référentiel, vous verrez ici des options d'évaluation supplémentaires.",
	file: "fichier",
	detail: "Détail",
	showeverything: "Montrer tout",
	analysissync: "Synchroniser les analyses",
	layout_simple: "Disposition simple",
	layout_advanced: "Disposition d'analyse",
	layout_nogui: "Pas d'interface graphique",
	layout_lesson: "Disposition de leçon",
	next: "Avancer",
	prev: "Rétourner",
	back: "Au derriére",
	close: "Fermer",
	reload: "Recharger",
	open: "Ouvrir",
	description: "Description",
	author: "Auteur",
	license: "License",
	recordedat: "Enrégistré à",
	displaysettings: "Paramètres d'affichage",
	filerendering: "Rendu de l'image",
	pixelated: "Pixelisé",
	smooth: "Lisse",
	filerenderinghint: "Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",
	adjusttimescale: "Ajuster l'échelle de température",
	automaticrange: "Gamme automatique",
	fullrange: "Gamme compléte",
	adjusttimescalehint: "Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",
	palettename: "Palette {{name}}",
	colourpalettehint: "Sélectionnez la palette de couleurs de l'affichage thermique.",
	fileinfo: "Informations sur le fichier",
	thermalfilename: "Nom du fichier IR",
	thermalfileurl: "URL du fichier IR",
	thermalfiledownload: "Télécharger le fichier IR",
	visiblefilename: "Nom de l'image visuel",
	visiblefileurl: "URL de l'image visuel",
	visiblefiledownload: "Télécharger l'image visuel",
	togglevisibleimage: "Commuter l'image IR / VIS",
	time: "Temps",
	duration: "Durée",
	resolution: "Résolution",
	minimaltemperature: "Température minimale",
	maximaltemperature: "Température maximale",
	filetype: "Genre du fichier",
	type: "Genre",
	supporteddevices: "Appareils compatibles",
	bytesize: "Taille en octets",
	numfiles: "{{num}} fichiers",
	download: "Télécharger",
	downloadoriginalfiles: "- fichiers individuels",
	downloadoriginalfileshint: "Téléchargez tous les fichiers IR sources",
	downloadoriginalfile: "- Fichier thermique original {{type}}",
	exportcurrentframeaspng: "- Cadre actuel en tant qu'image",
	convertentiresequencetovideo: "- Convertir la séquence entière en vidéo",
	pngofindividualimages: "- fichiers individuels",
	pngofindividualimageshint: "Exporter tous les fichiers individuellement.",
	pngofentiregroup: "- groupe",
	pngofentiregrouphint: "Exporter l'ensemble du groupe sous forme d'une seule image",
	csvofanalysisdata: "- données d'analyse",
	csvofanalysisdatahint: "Tableau des températures dans les analyses",
	exportimagewidth: "Largeur de l'image exportée",
	exportimagefontsize: "Taille de la police de l'image exportée",
	exportgroupname: "Nom du groupe exporté",
	exportfilenames: "Noms de fichiers exportés",
	exportdimensions: "Dimensions d'exportation",
	exportgroup: "Exporter le groupe",
	exportcontent: "Exporter le contenu",
	numberofcolumns: "Nombre de colonnes",
	thermalscale: "Échelle thermique",
	thermalrange: "Plage thermique",
	analyses: "Analyses",
	filedate: "Date du fichier",
	folder: "Dossier",
	folders: "Dossiers",
	range: "Gamme",
	info: "Info",
	note: "Note",
	group: "Groupe",
	donotgroup: "Ne pas groupper",
	groupby: "Groupe {{era}}",
	groupped: "groupés",
	showingfolder: "Affichage du dossier",
	showingfolders: "Affichage des dossiers",
	and: "et",
	or: "ou",
	doyouwanttoadd: "Voulez-vous afficher aussi",
	youmayalsoadd: "Vous pouvez afficher aussi",
	bydays: "par jour",
	byhours: "par heure",
	byweeks: "par semaine",
	bymonths: "par mois",
	byyears: "par année",
	play: "Lecture",
	pause: "Pause",
	stop: "Arrêter",
	date: "Date",
	frame: "Image",
	playbackspeed: "Vitesse de lecture",
	graphlines: "Lignes graphiques",
	straightlines: "Lignes droites",
	smoothlines: "Lignes lisses",
	graphlineshint: "Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",
	analysis: "Analyse",
	avg: "AVG",
	min: "MIN",
	max: "MAX",
	size: "Taille",
	edit: "Modifier",
	editsth: "Modifier {{what}}",
	remove: "Retirer",
	addpoint: "Ajouter un point",
	addellipsis: "Ajouter une ellipse",
	addrectangle: "Ajouter un rectangle",
	analysishint: "Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",
	graph: "Graphique",
	graphhint1: "Ajoutez d'abord une analyse pour voir le graphique !",
	graphhint2: "Cliquez sur une <thermal-btn variant='background' interactive='false' tooltip='Vous pouvez les voir dans le tableau ci-dessus...'>valeur</thermal-btn> d'analyse pour voir son graphique ici !",
	rectangle: "rectangle",
	ellipsis: "ellipse",
	point: "point",
	name: "Nom",
	color: "Couleur",
	top: "Côté supérieure",
	left: "Côté gauche",
	right: "Côté droite",
	bottom: "Côté inférieure",
	columns: "{{num}} images par ligne",
	fromto: "De {{from}} à {{to}}",
	downloadgraphdataascsv: "Télécharger les données graphiques au format CSV",
	apparenttemperature: "Température ressentie",
	apparenttemperaturehint: "Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",
	airtemperature: "Température de l'air",
	relativeairhumidity: "Humidité relative de l'air",
	windspeed: "Vitesse du vent",
	inpercent: "en pourcentage",
	apparenttemperatureverbose: "Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",
	youfeelwarmer: "La température ressentie est de {{diff}} °C supérieure à la température de l'air.",
	youfeelcolder: "La température ressentie est de {{diff}} °C inférieure à la température de l'air.",
	inspecttemperatures: "Inspecter les températures",
	usemousetoinspecttemperaturevalues: "Utilisez la souris pour inspecter les valeurs de température.",
	editanalysis: "Modifier l'analyse",
	dragcornersofselectedanalysis: "Faites glisser les coins de l'analyse sélectionnée.",
	addpointanalysis: "Ajouter une analyse de point",
	clickandaddpoint: "Cliquez sur le thermogramme pour ajouter une analyse de point.",
	addrectangleanalysis: "Ajouter une analyse rectangulaire",
	clickandaddrectangle: "Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",
	addellipsisanalysis: "Ajouter une analyse elliptique",
	clickandaddellipsis: "Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",
	tutorial: "Tutoriel",
	colourpalette: "Palette",
	palettehint: "Utilisez le menu pour changer le palette.",
	remotefoldersbrowser: "Navigateur de dossiers distants",
	server: "Serveur",
	networklog: "Journal réseau",
	editfile: "Modifier le fichier",
	editfolder: "Modifier le dossier",
	editcomment: "Modifier le commentaire",
	user: "Utilisateur",
	griddisplay: "Afficher en grille",
	tabledisplay: "Afficher en tableau",
	deletefile: "Supprimer le fichier",
	deletefolder: "Supprimer le dossier",
	comments: "Commentaires",
	deletecomment: "Supprimer le commentaire",
	savecomment: "Enregistrer le commentaire",
	addcomment: "Ajouter un commentaire",
	nocomments: "Aucun commentaire",
	savechanges: "Enregistrer les modifications",
	uploadfile: "Téléverser un fichier",
	compactview: "Vue compacte",
	showdiscussion: "Afficher la discussion",
	edittags: "Modifier les tags",
	assignedtags: "Tags assignés",
	availabletags: "Tags disponibles",
	connectioninformation: "Informations de connexion",
	serverurl: "URL du serveur",
	servername: "Nom du serveur",
	login: "Connexion",
	logout: "Déconnexion",
	password: "Mot de passe",
	logoutmessage: "Êtes-vous sûr de vouloir vous déconnecter ?",
	loginerror: "Impossible de se connecter.",
	accessibletologgedinusers: "Cette page est accessible uniquement aux utilisateurs connectés.",
	export: "Exporter",
	exportvideo: "Exporter la vidéo",
	exportpng: "Exporter l'image",
	exportdonotclosewindowhint: "Ne fermez pas cette fenêtre, le fichier sera téléchargé automatiquement.",
	exportencodingfile: "Encodage du fichier vidéo...",
	exportrecordingframes: "Enregistrement des images...",
	histogram: "Histogramme",
	timeline: "Chronologie",
	exportwidth: "Largeur",
	exportmargin: "Marges",
	exportgap: "Espace",
	exportgrahpheight: "Hauteur du graphique",
	videoquality: "Qualité vidéo",
	imagecompression: "Compression d'image",
	theme: "Thème",
	light: "Clair",
	dark: "Sombre",
	foldermayhavefiles: "Dossier pour les fichiers",
	foldermayhavesubfolders: "Dossier pour les sous-dossiers"
};

//#endregion
//#region src/translations/languages/cs.ts
const cs = {
	delete: "Smazat",
	create: "Vytvořit",
	createfolder: "Vytvořit složku",
	createsubfolder: "Vytvořit podsložku",
	subfolder: "Podsložka",
	display: "Zobrazení",
	syncanalyses: "Synchronizovat analýzy",
	uploadedby: "Nahráno uživatelem",
	uploadeddat: "Nahráno dne",
	overviewofyourfolders: "Přehled vašich složek",
	content: "Obsah",
	palette: "Paleta",
	loading: "Načítám",
	config: "Nastavení",
	layout_simple: "Jednoduché rozvržení",
	layout_advanced: "Analytické rozvržení",
	layout_nogui: "Bez GUI",
	layout_lesson: "Rozvržení lekce",
	share: "Sdílet",
	fileloadingerror: "Chyba při načítání souboru",
	embedhint: "Chcete-li vložit tento blok na jinou webovou stránku, použijte následující kód:",
	embedlibrary: "Vložte knihovnu – jednou v HTML hlavičce",
	embedcomponent: "Použijte následující kód kdekoli v HTML těle",
	copy: "Kopírovat",
	remotefoldersbrowseraddfolderhint: "Pokud v úložišti přidáte další složku, uvidíte zde další možnosti vyhodnocení.",
	temperature: "Teplota",
	upload: "Nahrát",
	uploadafile: "Nahrát soubor",
	selectfile: "Vybrat soubor",
	addfiles: "Přidat soubor(y)",
	clear: "Smazat",
	dragorselectfile: "Přetáhněte LRC soubor nebo jej vyberte z disku",
	file: "soubor",
	detail: "Detail",
	showeverything: "Zobrazit vše",
	next: "Další",
	prev: "Předchozí",
	back: "Zpět",
	close: "Zavřít",
	reload: "Načíst znovu",
	open: "Otevřít",
	description: "Popis",
	author: "Autor",
	license: "Licence",
	recordedat: "Nahráno",
	displaysettings: "Nastavení zobrazení",
	filerendering: "Vykreslování termogramu",
	pixelated: "Pixelované",
	smooth: "Vyhlazené",
	filerenderinghint: "Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",
	adjusttimescale: "Teplotní rozsah",
	automaticrange: "Automatický rozsah",
	fullrange: "Plný rozsah",
	adjusttimescalehint: "Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",
	palettename: "Paleta {{name}}",
	colourpalettehint: "Zvolte barevnou paletu",
	numfiles: "{{num}} souborů",
	fileinfo: "Informace o souboru",
	thermalfilename: "Název IR souboru",
	thermalfileurl: "URL IR souboru",
	thermalfiledownload: "Stáhnout IR soubor",
	visiblefilename: "Název visible souboru",
	visiblefileurl: "URL visible souboru",
	visiblefiledownload: "Stáhnout visible obrázek",
	togglevisibleimage: "Přepnout IR / VIS obraz",
	time: "Čas",
	duration: "Délka sekvence",
	resolution: "Rozlišení",
	bytesize: "Bytů",
	minimaltemperature: "Minimální teplota",
	maximaltemperature: "Maximální teplota",
	filetype: "Typ souboru",
	type: "Typ",
	supporteddevices: "Kompatibilní zařízení",
	download: "Stáhnout",
	downloadoriginalfiles: "- jednotlivé soubory",
	downloadoriginalfileshint: "Stáhnout jednotlivé zdrojové termogramy",
	downloadoriginalfile: "- Původní IR soubor {{type}}",
	exportcurrentframeaspng: "- Aktuální snímek",
	convertentiresequencetovideo: "- Převést celou sekvenci do videa",
	pngofindividualimages: "- jednotlivé soubory",
	pngofindividualimageshint: "Exportovat všechny soubor po jednom, každý do samostatného obrázku.",
	pngofentiregroup: "- skupina",
	pngofentiregrouphint: "Exportovat celou skupinu do 1 obrázku.",
	csvofanalysisdata: "- data analýz",
	csvofanalysisdatahint: "Tabulka s teplotami v aktuálně nastavených analýzách",
	exportimagewidth: "Šířka exportovaných obrázků",
	exportimagefontsize: "Velikost písma v exportovaných obrázcích",
	exportgroupname: "Název skupiny",
	exportfilenames: "Názvy souborů",
	exportdimensions: "Rozměry exportu",
	exportgroup: "Export skupiny",
	exportcontent: "Obsah exportu",
	numberofcolumns: "Počet sloupců",
	thermalscale: "Teplotní škála",
	thermalrange: "Teplotní rozsah",
	analyses: "Analýzy",
	filedate: "File date",
	folder: "Složka",
	folders: "Složky",
	range: "Rozsah",
	info: "Info",
	note: "Pozn.",
	group: "Skupina",
	donotgroup: "Neseskupovat",
	groupby: "Seskupit {{era}}",
	groupped: "seskupené",
	showingfolder: "Zobrazuji složku",
	showingfolders: "Zobrazuji složky",
	and: "a",
	or: "či",
	doyouwanttoadd: "Chcete přidat ještě",
	youmayalsoadd: "Můžete přidat ještě",
	bydays: "po dnech",
	byhours: "po hodinách",
	byweeks: "po týdnech",
	bymonths: "po měsících",
	byyears: "po rocích",
	play: "Přehrát",
	pause: "Pozastavit",
	stop: "Stop",
	date: "Datum",
	frame: "Snímek",
	playbackspeed: "Rychlost přehrávání",
	graphlines: "Čáry v grafu",
	straightlines: "Přímé linie",
	smoothlines: "Hladké linie",
	graphlineshint: "'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",
	analysis: "Analýza",
	avg: "PRŮM",
	min: "MIN",
	max: "MAX",
	size: "Velikost",
	edit: "Upravit",
	editsth: "Upravit {{what}}",
	remove: "Odstranit",
	addpoint: "Přidat bod",
	addellipsis: "Přidat elipsu",
	addrectangle: "Přidat obdélník",
	analysishint: "Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",
	graph: "Graf",
	graphhint1: "Nejprve přidejte analýzu!",
	graphhint2: "Pro zobrazení grafu klikněte na <thermal-btn variant='background' interactive='false' tooltip='Najdete je v tabulce výše...'>hodnotu</thermal-btn> některé analýzy!",
	rectangle: "obdélník",
	ellipsis: "elipsu",
	point: "bod",
	name: "Název",
	color: "Barva",
	top: "Horní strana",
	left: "Levá strana",
	right: "Pravá strana",
	bottom: "Spodní strana",
	columns: "{{num}} souborů na řádku",
	fromto: "Od {{from}} do {{to}}",
	downloadgraphdataascsv: "Stáhnout data grafu jako CSV",
	analysissync: "Synchronizovat analýzy",
	apparenttemperature: "Pocitová teplota",
	apparenttemperaturehint: "Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",
	airtemperature: "Teplota vzduchu",
	relativeairhumidity: "Relativní vlhkost vzduchu",
	windspeed: "Rychlost větru",
	inpercent: "v procentech",
	apparenttemperatureverbose: "Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",
	youfeelwarmer: "Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",
	youfeelcolder: "Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",
	inspecttemperatures: "Prohlížet teploty",
	usemousetoinspecttemperaturevalues: "S pomocí kurzoru prohlížejte teploty v termogramu.",
	editanalysis: "Upravit analýzu",
	dragcornersofselectedanalysis: "Klikněte a táhněte roh aktivní analýzy.",
	addpointanalysis: "Přidat bodovou analýzu",
	clickandaddpoint: "Klikněte na termogram a přidejte bodovou analýzu.",
	addrectangleanalysis: "Přidat obdélníkovou analýzu",
	clickandaddrectangle: "Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",
	addellipsisanalysis: "Přidat eliptickou analýzu",
	clickandaddellipsis: "Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",
	tutorial: "Tutorial",
	colourpalette: "Barevná paleta",
	palettehint: "Rozbalovací nabídka pro přepínání barevné palety.",
	remotefoldersbrowser: "Prohlížeč vzdálených složek",
	server: "Server",
	networklog: "Síťový záznam",
	editfile: "Upravit soubor",
	editfolder: "Upravit složku",
	editcomment: "Upravit komentář",
	user: "Uživatel",
	griddisplay: "Zobrazit jako mřížku",
	tabledisplay: "Zobrazit jako tabulku",
	deletefile: "Smazat soubor",
	deletefolder: "Smazat složku",
	comments: "Komentáře",
	deletecomment: "Smazat komentář",
	savecomment: "Uložit komentář",
	addcomment: "Přidat komentář",
	nocomments: "Žádné komentáře",
	savechanges: "Uložit změny",
	uploadfile: "Nahrát soubor",
	compactview: "Kompaktní zobrazení",
	showdiscussion: "Zobrazit diskuzi",
	edittags: "Upravit štítky",
	availabletags: "Dostupné štítky",
	assignedtags: "Přiřazené štítky",
	connectioninformation: "Informace o připojení",
	serverurl: "URL serveru",
	servername: "Název serveru",
	login: "Přihlášení",
	logout: "Odhlášení",
	password: "Heslo",
	logoutmessage: "Opravdu se chcete odhlásit?",
	loginerror: "Nelze se přihlásit.",
	accessibletologgedinusers: "Tato stránka je přístupná pouze přihlášeným uživatelům.",
	export: "Export",
	exportvideo: "Exportovat video",
	exportpng: "Exportovat obrázek",
	exportdonotclosewindowhint: "Nezavírejte toto okno, soubor se stáhne automaticky.",
	exportencodingfile: "Enkóduji video soubor...",
	exportrecordingframes: "Zaznamenávám snímky...",
	histogram: "Histogram",
	timeline: "Časová osa",
	exportwidth: "Šířka ",
	exportmargin: "Okraje",
	exportgap: "Mezera",
	exportgrahpheight: "Výška grafu",
	videoquality: "Kvalita videa",
	imagecompression: "Komprese obrázku",
	theme: "Motiv",
	light: "Světlý",
	dark: "Tmavý",
	foldermayhavefiles: "Složka pro soubory",
	foldermayhavesubfolders: "Složka pro podsložky"
};

//#endregion
//#region src/translations/languages/cy.ts
const cy = {
	delete: "Dileu",
	create: "Creu",
	createfolder: "Creu ffolder",
	createsubfolder: "Creu is-ffolder",
	subfolder: "Is-ffolder",
	display: "Arddangos",
	syncanalyses: "Cydamseru dadansoddiadau",
	uploadedby: "Wedi'i lwytho i fyny gan",
	uploadeddat: "Wedi'i lwytho i fyny ar",
	overviewofyourfolders: "Trosolwg o'ch ffolderi",
	content: "Cynnwys",
	palette: "Palet",
	loading: "Llwytho",
	config: "Gosodiadau",
	temperature: "Tymheredd",
	upload: "Llwytho i fyny",
	uploadafile: "Llwytho ffeil i fyny",
	selectfile: "Dewis ffeil",
	addfiles: "Ychwanegu ffeil(iau)",
	clear: "Clirio",
	dragorselectfile: "Llusgwch ffeil LRC neu dewiswch hi o'r ddisg",
	share: "Rhannu",
	fileloadingerror: "Gwall wrth lwytho'r ffeil",
	embedhint: "I fewnosod y bloc hwn mewn gwefan arall, defnyddiwch y cod canlynol:",
	embedlibrary: "Mewnosodwch y llyfrgell – unwaith yn pennyn HTML",
	embedcomponent: "Defnyddiwch y cod canlynol yn unrhyw le yn y corff HTML",
	copy: "Copïo",
	remotefoldersbrowseraddfolderhint: "Os ychwanegwch ffolder arall yn y gadwrfa, fe welwch opsiynau gwerthuso ychwanegol yma.",
	analysissync: "Cydamseru dadansoddiadau",
	file: "ffeil",
	detail: "Manylder",
	open: "Agor",
	showeverything: "Dangos popeth",
	layout_simple: "Cynllun syml",
	layout_advanced: "Cynllun dadansoddi",
	layout_nogui: "Dim GUI",
	layout_lesson: "Cynllun gwers",
	next: "Nesaf",
	prev: "Blaenorol",
	back: "Yn ôl",
	close: "Cau",
	reload: "Ail-lwytho",
	description: "Disgrifiad",
	author: "Awdur",
	license: "Trwydded",
	recordedat: "Wedi recordio yn",
	displaysettings: "Gosodiadau arddangos",
	filerendering: "Rendro ffeil",
	pixelated: "Picselaidd",
	smooth: "Llyfn",
	filerenderinghint: "Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r delwedd isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",
	adjusttimescale: "Graddfa tymheredd",
	automaticrange: "Ystod awtomatig",
	fullrange: "Ystod llawn",
	adjusttimescalehint: "Addaswch yr ystod thermol yn awtomatig neu cyflewch yr ystod i fand lawn.",
	palettename: "Palet {{name}}",
	colourpalettehint: "Dewiswch balet lliw o arddangos thermol.",
	fileinfo: "Gwybodaeth ffeil",
	thermalfilename: "Enw ffeil isgoch",
	thermalfileurl: "URL ffeil isgoch",
	thermalfiledownload: "Lawrlwythwch y ffeil isgoch",
	visiblefilename: "Enw ffeil weledol",
	visiblefileurl: "URL ffeil weledol",
	visiblefiledownload: "Lawrlwythwch y ffeil weledol",
	togglevisibleimage: "Newid delwedd IR/VIS",
	time: "Amser",
	duration: "Hyd",
	resolution: "Datrysiad",
	bytesize: "Maint",
	minimaltemperature: "Tymheredd lleiaf",
	maximaltemperature: "Tymheredd uchaf",
	filetype: "Math o ffeil",
	type: "Math",
	supporteddevices: "Dyfeisiau a gefnogir",
	numfiles: "{{num}} ffeil",
	download: "Lawrlwythwch",
	downloadoriginalfiles: "- ffeiliau thermol wreiddiol unigol",
	downloadoriginalfileshint: "Lawrlwythwch ffeiliau isgoch unigol.",
	downloadoriginalfile: "- Ffeil thermol wreiddiol {{type}}",
	exportcurrentframeaspng: "- Ffrâm gyfredol fel delwedd",
	convertentiresequencetovideo: "- Trosi dilyniant cyfan i fideo",
	pngofindividualimages: "- ffeiliau unigol",
	pngofindividualimageshint: "Allforio pob ffeil yn unigol.",
	pngofentiregroup: "- grwp",
	pngofentiregrouphint: "Allforio'r grŵp cyfan fel un ddelwedd",
	csvofanalysisdata: "- data dadansoddi",
	csvofanalysisdatahint: "Tabl tymheredd mewn dadansoddiadau",
	exportimagewidth: "Lled delwedd wedi'i hallforio",
	exportimagefontsize: "Maint ffont delwedd wedi'i hallforio",
	exportgroupname: "Enw'r grŵp allforio",
	exportfilenames: "Enwau'r ffeiliau allforio",
	exportdimensions: "Dimensiynau allforio",
	exportgroup: "Allforio'r grŵp",
	exportcontent: "Allforio'r cynnwys",
	numberofcolumns: "Nifer y colofnau",
	thermalscale: "Graddfa thermol",
	thermalrange: "Ystod thermol",
	analyses: "Dadansoddiadau",
	filedate: "Dyddiad y ffeil",
	folder: "Ffolder",
	folders: "Ffolderi",
	range: "Ystod",
	info: "Gwybodaeth",
	note: "Nodyn",
	group: "Grwp",
	donotgroup: "Peidiwch â grwpio",
	groupby: "grwpio {{era}}",
	groupped: "wedi'u cetegoreiddio",
	showingfolder: "Yn dangos y ffolder",
	showingfolders: "Yn dangos y ffolderi",
	and: "a",
	or: "neu",
	doyouwanttoadd: "Ydych chi eisiau arddangos hefyd",
	youmayalsoadd: "Gallwch hefyd ddangos",
	bydays: "yn ôl dydd",
	byhours: "yn ôl awr",
	byweeks: "yn ôl wythnos",
	bymonths: "yn ôl mis",
	byyears: "yn ôl blwyddyn",
	play: "Chwarae",
	pause: "Oedwch",
	stop: "Stopio",
	date: "Dyddiad",
	frame: "Ffrâm",
	playbackspeed: "Cyflymder chwarae",
	graphlines: "Llinellau graff",
	straightlines: "Llinellau syth",
	smoothlines: "Llinellau llyfn",
	graphlineshint: "Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",
	analysis: "Dadansoddi",
	avg: "Cyfartaledd",
	min: "Lleiaf",
	max: "Uchafswm",
	size: "Maint",
	edit: "Golygu",
	editsth: "Golygu {{what}}",
	remove: "Dileu",
	addpoint: "Addio pwynt",
	addellipsis: "Addio elips",
	addrectangle: "Addio petryal",
	analysishint: "Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",
	graph: "Graff",
	graphhint1: "Addio ddadansoddiad yn gyntaf i weld y graff!",
	graphhint2: "Cliciwch ar <thermal-btn variant='background' interactive='false'  tooltip='Fe welwch nhw yn y tabl uchod...'>werth</thermal-btn> dadansoddiad i weld ei graff yma!",
	rectangle: "petryal",
	ellipsis: "elipsis",
	point: "pwynt",
	name: "Enw",
	color: "Lliw",
	top: "Ochr uchaf",
	left: "Ochr chwith",
	right: "Ochr dde",
	bottom: "Ochr gwaelod",
	columns: "{{num}} delwedd mewn rhes",
	fromto: "O {{from}} i {{to}}",
	downloadgraphdataascsv: "Lawrlwythwch data graff fel CSV",
	apparenttemperature: "Tymheredd tebygol",
	apparenttemperaturehint: "Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",
	airtemperature: "Tymheredd aer",
	relativeairhumidity: "Lleithder cymharol aer",
	windspeed: "Cyflymder gwynt",
	inpercent: "mewn canran",
	apparenttemperatureverbose: "Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",
	youfeelwarmer: "Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",
	youfeelcolder: "Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",
	inspecttemperatures: "Archwilio'r tymheredd",
	usemousetoinspecttemperaturevalues: "Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",
	editanalysis: "Golygu dadansoddiad",
	dragcornersofselectedanalysis: "Llusgwch gorneli'r dadansoddiad a ddewiswyd.",
	addpointanalysis: "Adio dadansoddiad pwynt",
	clickandaddpoint: "Cliciwch ar y delwedd isgoch i ychwanegu dadansoddiad pwynt.",
	addrectangleanalysis: "Adio dadansoddiad petryal",
	clickandaddrectangle: "Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad petryal.",
	addellipsisanalysis: "Adio dadansoddiad eliptig",
	clickandaddellipsis: "Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad eliptig.",
	tutorial: "Tiwtorial",
	colourpalette: "Palet lliw",
	palettehint: "Defnyddiwch y gwymplen i newid y palet.",
	remotefoldersbrowser: "Porwr o ffolderi anghysbell",
	server: "Gweinydd",
	networklog: "Log rhwydwaith",
	editfile: "Golygu ffeil",
	editfolder: "Golygu ffolder",
	editcomment: "Golygu sylw",
	user: "Defnyddiwr",
	griddisplay: "Dangos fel grid",
	tabledisplay: "Dangos fel tabl",
	deletefile: "Dileu ffeil",
	deletefolder: "Dileu ffolder",
	comments: "Sylwadau",
	deletecomment: "Dileu sylw",
	savecomment: "Cadw sylw",
	addcomment: "Ychwanegu sylw",
	nocomments: "Dim sylwadau",
	savechanges: "Cadw newidiadau",
	uploadfile: "Uwchlwytho ffeil",
	compactview: "Golwg gryno",
	showdiscussion: "Dangos trafodaeth",
	edittags: "Golygu tagiau",
	availabletags: "Tagiau ar gael",
	assignedtags: "Tagiau a neilltuwyd",
	connectioninformation: "Gwybodaeth cysylltiad",
	serverurl: "URL y gweinydd",
	servername: "Enw'r gweinydd",
	login: "Mewngofnodi",
	logout: "Allgofnodi",
	password: "Cyfrinair",
	logoutmessage: "Ydych chi’n siŵr eich bod eisiau allgofnodi?",
	loginerror: "Methu mewngofnodi.",
	accessibletologgedinusers: "Mae'r dudalen hon ar gael i ddefnyddwyr sydd wedi mewngofnodi yn unig.",
	export: "Allforio",
	exportvideo: "Allforio fideo",
	exportpng: "Allforio delwedd",
	exportdonotclosewindowhint: "Peidiwch â chau'r ffenestr hon, bydd y ffeil yn cael ei lawrlwytho'n awtomatig.",
	exportencodingfile: "Wrthi'n amgodio'r ffeil fideo...",
	exportrecordingframes: "Wrthi'n cofnodi fframiau...",
	histogram: "Histogram",
	timeline: "Llinell amser",
	exportwidth: "Lled",
	exportmargin: "Ymylon",
	exportgap: "Bwlch",
	exportgrahpheight: "Uchder y graff",
	videoquality: "Ansawdd fideo",
	imagecompression: "Cywasgu delwedd",
	theme: "Thema",
	light: "Golau",
	dark: "Tywyll",
	foldermayhavefiles: "Ffolder ar gyfer ffeiliau",
	foldermayhavesubfolders: "Ffolder ar gyfer is-ffolderi"
};

//#endregion
//#region src/translations/languages/de.ts
const de = {
	delete: "Löschen",
	create: "Erstellen",
	createfolder: "Einen Ordner erstellen",
	createsubfolder: "Einen Unterordner erstellen",
	subfolder: "Unterordner",
	display: "Anzeige",
	syncanalyses: "Analysen synchronisieren",
	uploadedby: "Hochgeladen von",
	uploadeddat: "Hochgeladen am",
	overviewofyourfolders: "Übersicht Ihrer Ordner",
	content: "Inhalt",
	palette: "Palette",
	loading: "Loading",
	config: "Paramètres",
	layout_simple: "Einfaches Layout",
	layout_advanced: "Analyse-Layout",
	layout_nogui: "Kein GUI",
	layout_lesson: "Lektions-Layout",
	share: "Teilen",
	fileloadingerror: "Fehler beim Laden der Datei",
	embedhint: "Um diesen Block in eine andere Website einzubetten, verwenden Sie den folgenden Code:",
	embedlibrary: "Bibliothek einfügen – einmal im HTML-Head",
	embedcomponent: "Verwenden Sie den folgenden Code überall im HTML-Body",
	copy: "Kopieren",
	remotefoldersbrowseraddfolderhint: "Wenn Sie einen weiteren Ordner im Repository hinzufügen, werden Ihnen hier zusätzliche Auswertungsmöglichkeiten angezeigt.",
	temperature: "Temperatur",
	upload: "Hochladen",
	uploadafile: "Datei hochladen",
	selectfile: "Datei auswählen",
	addfiles: "Datei(en) hinzufügen",
	clear: "Löschen",
	dragorselectfile: "Ziehen Sie eine LRC-Datei hierher oder wählen Sie sie von der Festplatte aus",
	analysissync: "Analysen synchronisieren",
	file: "Datei",
	detail: "Detail",
	showeverything: "Alles anzeigen",
	next: "Weiter",
	prev: "Zurück",
	back: "Zurück",
	close: "Schließen",
	reload: "Neu laden",
	open: "Öffnen",
	description: "Beschreibung",
	author: "Autor",
	license: "Lizenz",
	recordedat: "Aufgenommen am",
	displaysettings: "Anzeigeeinstellungen",
	filerendering: "Thermogramm-Wiedergabe",
	pixelated: "Pixelig",
	smooth: "Glatt",
	filerenderinghint: "Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",
	adjusttimescale: "Temperaturbereich",
	automaticrange: "Automatischer Bereich",
	fullrange: "Voller Bereich",
	adjusttimescalehint: "Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",
	palettename: "Palette {{name}}",
	colourpalettehint: "Wählen Sie eine Farbpalette",
	numfiles: "{{num}} Dateien",
	fileinfo: "Dateiinformationen",
	thermalfilename: "Name der IR-Datei",
	thermalfileurl: "URL der IR-Datei",
	thermalfiledownload: "IR-Datei herunterladen",
	visiblefilename: "Name der sichtbaren Datei",
	visiblefileurl: "URL der sichtbaren Datei",
	visiblefiledownload: "Sichtbares Bild herunterladen",
	togglevisibleimage: "IR/VIS-Bild umschalten",
	time: "Zeit",
	duration: "Sequenzdauer",
	resolution: "Auflösung",
	bytesize: "Bytes",
	minimaltemperature: "Minimale Temperatur",
	maximaltemperature: "Maximale Temperatur",
	filetype: "Dateityp",
	type: "Typ",
	supporteddevices: "Kompatible Geräte",
	download: "Herunterladen",
	downloadoriginalfiles: "- Einzelne Dateien",
	downloadoriginalfileshint: "Laden Sie alle Original-IR-Dateien herunter",
	downloadoriginalfile: "- Original-IR-Datei {{type}}",
	exportcurrentframeaspng: "- Aktuelles Bild",
	convertentiresequencetovideo: "- Gesamte Sequenz in Video umwandeln",
	pngofindividualimages: "- Einzelne Dateien",
	pngofindividualimageshint: "Exportieren Sie jede Datei einzeln als Bild.",
	pngofentiregroup: "- Gruppe",
	pngofentiregrouphint: "Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",
	csvofanalysisdata: "- Analysedaten",
	csvofanalysisdatahint: "Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",
	exportimagewidth: "Exportierte Bildbreite",
	exportimagefontsize: "Exportierte Bildschriftgröße",
	exportgroupname: "Exportgruppenname",
	exportfilenames: "Dateinamen exportieren",
	exportdimensions: "Exportabmessungen",
	exportgroup: "Gruppe exportieren",
	exportcontent: "Inhalt exportieren",
	numberofcolumns: "Anzahl der Spalten",
	thermalscale: "Thermische Skala",
	thermalrange: "Temperaturbereich",
	analyses: "Analysen",
	filedate: "Dateidatum",
	folder: "Ordner",
	folders: "Ordner",
	range: "Bereich",
	info: "Info",
	note: "Hinweis",
	group: "Gruppe",
	donotgroup: "Nicht gruppieren",
	groupby: "Gruppieren nach {{era}}",
	groupped: "grupiert",
	showingfolder: "Ordner anzeigen",
	showingfolders: "Ordner anzeigen",
	and: "und",
	or: "oder",
	doyouwanttoadd: "Möchten Sie auch anzeigen",
	youmayalsoadd: "Sie können auch anzeigen",
	bydays: "nach Tagen",
	byhours: "nach Stunden",
	byweeks: "nach Wochen",
	bymonths: "nach Monaten",
	byyears: "nach Jahren",
	play: "Abspielen",
	pause: "Pause",
	stop: "Stopp",
	date: "Datum",
	frame: "Bild",
	playbackspeed: "Abspielgeschwindigkeit",
	graphlines: "Grafiklinien",
	straightlines: "Gerade Linien",
	smoothlines: "Glatte Linien",
	graphlineshint: "'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",
	analysis: "Analyse",
	avg: "MITTL",
	min: "MIN",
	max: "MAX",
	size: "Größe",
	edit: "Bearbeiten",
	editsth: "{{what}} bearbeiten",
	remove: "Entfernen",
	addpoint: "Punkt hinzufügen",
	addellipsis: "Ellipse hinzufügen",
	addrectangle: "Rechteck hinzufügen",
	analysishint: "Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",
	graph: "Grafik",
	graphhint1: "Fügen Sie zuerst eine Analyse hinzu!",
	graphhint2: "Klicken Sie auf einen <thermal-btn variant='background' interactive='false' tooltip='Sie finden sie in der obigen Tabelle...'>Wert</thermal-btn> einer Analyse, um hier die Grafik zu sehen!",
	rectangle: "Rechteck",
	ellipsis: "Ellipse",
	point: "Punkt",
	name: "Name",
	color: "Farbe",
	top: "Oben",
	left: "Links",
	right: "Rechts",
	bottom: "Unten",
	columns: "{{num}} Bilder in einer Reihe",
	fromto: "Von {{from}} bis {{to}}",
	downloadgraphdataascsv: "Grafikdaten als CSV herunterladen",
	apparenttemperature: "Gefühlte Temperatur",
	apparenttemperaturehint: "Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",
	airtemperature: "Lufttemperatur",
	relativeairhumidity: "Relative Luftfeuchtigkeit",
	windspeed: "Windgeschwindigkeit",
	inpercent: "in Prozent",
	apparenttemperatureverbose: "Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",
	youfeelwarmer: "Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",
	youfeelcolder: "Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",
	inspecttemperatures: "Temperaturen inspizieren",
	usemousetoinspecttemperaturevalues: "Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",
	editanalysis: "Analyse bearbeiten",
	dragcornersofselectedanalysis: "Ziehen Sie die Ecken der ausgewählten Analyse.",
	addpointanalysis: "Punktanalyse hinzufügen",
	clickandaddpoint: "Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",
	addrectangleanalysis: "Rechteckanalyse hinzufügen",
	clickandaddrectangle: "Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",
	addellipsisanalysis: "Elliptische Analyse hinzufügen",
	clickandaddellipsis: "Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",
	tutorial: "Tutorial",
	colourpalette: "Farbpalette",
	palettehint: "Dropdown-Menü zum Wechseln der Farbpalette.",
	remotefoldersbrowser: "Browser für Remote-Ordner",
	server: "Server",
	networklog: "Netzwerkprotokoll",
	editfile: "Datei bearbeiten",
	editfolder: "Ordner bearbeiten",
	editcomment: "Kommentar bearbeiten",
	user: "Benutzer",
	griddisplay: "Als Raster anzeigen",
	tabledisplay: "Als Tabelle anzeigen",
	deletefile: "Datei löschen",
	deletefolder: "Ordner löschen",
	comments: "Kommentare",
	deletecomment: "Kommentar löschen",
	savecomment: "Kommentar speichern",
	addcomment: "Kommentar hinzufügen",
	nocomments: "Keine Kommentare",
	savechanges: "Änderungen speichern",
	uploadfile: "Datei hochladen",
	compactview: "Kompaktansicht",
	showdiscussion: "Diskussion anzeigen",
	edittags: "Tags bearbeiten",
	availabletags: "Verfügbare Tags",
	assignedtags: "Zugewiesene Tags",
	connectioninformation: "Verbindungsinformationen",
	serverurl: "Server-URL",
	servername: "Servername",
	login: "Anmelden",
	logout: "Abmelden",
	password: "Passwort",
	logoutmessage: "Möchten Sie sich wirklich abmelden?",
	loginerror: "Anmeldung nicht möglich.",
	accessibletologgedinusers: "Diese Seite ist nur für angemeldete Benutzer zugänglich.",
	export: "Export",
	exportvideo: "Video exportieren",
	exportpng: "Bild exportieren",
	exportdonotclosewindowhint: "Schließen Sie dieses Fenster nicht, die Datei wird automatisch heruntergeladen.",
	exportencodingfile: "Videodatei wird kodiert...",
	exportrecordingframes: "Frames werden aufgezeichnet...",
	histogram: "Histogramm",
	timeline: "Zeitleiste",
	exportwidth: "Breite",
	exportmargin: "Ränder",
	exportgap: "Abstand",
	exportgrahpheight: "Grafikhöhe",
	videoquality: "Videoqualität",
	imagecompression: "Bildkompression",
	theme: "Design",
	light: "Hell",
	dark: "Dunkel",
	foldermayhavefiles: "Ordner für Dateien",
	foldermayhavesubfolders: "Ordner für Unterordner"
};

//#endregion
//#region src/translations/i18n.ts
/** initialise the I18n object */
i18next.use(initLitI18n).use(LanguageDetector).init({
	fallbackLng: "en",
	resources: {
		cs: { translation: cs },
		cy: { translation: cy },
		de: { translation: de },
		en: { translation: en },
		fr: { translation: fr }
	}
});
window.i18next = i18next;

//#endregion
//#region src/styles/mode.ts
const mode = window.matchMedia("(prefers-color-scheme: dark)");
const DARK_MODE_CLASS = "thermal-dark-mode";
const activateDrkMode = () => {
	document.body.classList.add(DARK_MODE_CLASS);
};
const deactivateDarkMode = () => {
	document.body.classList.remove(DARK_MODE_CLASS);
};
const initialiseMode = () => {
	if (mode.matches) activateDrkMode();
	const handler = (event) => {
		if (event.matches) activateDrkMode();
		else deactivateDarkMode();
	};
	mode.addEventListener("change", handler);
	mode.addListener(handler);
};

//#endregion
//#region src/styles/defaultStyles.ts
const version = version$1.toString().replaceAll(".", "-");
const getStylesheetId = (scope) => {
	return `labirthermal__${scope}__${version}`;
};
const cssStyleIsAppended = (scope) => {
	return document.getElementById(getStylesheetId(scope)) !== null;
};
const appendHeadCss = (scope, styles) => {
	if (!cssStyleIsAppended(scope)) {
		const element = document.createElement("style");
		element.setAttribute("id", getStylesheetId(scope));
		element.innerHTML = styles;
		document.head.appendChild(element);
	}
};
const addInlineStyles = () => {
	appendHeadCss("rootVariables", `

        :root {

            /** Colors */
            --thermal-foreground: black;
            --thermal-background: white;

            /** Primary - base */
            --thermal-primary-base: blue;
            --thermal-primary-base-dark: navy;
            --thermal-primary-base-light: lightblue;

            /** Primary */
            --thermal-primary: var( --thermal-primary-base );
            --thermal-primary-light: var( --thermal-primary-base-light );
            --thermal-primary-dark: var( --thermal-primary-base-dark );

            /** Slate -base */
            --thermal-slate-base: #8e8c8f;
            --thermal-slate-base-light: #dad7db;
            --thermal-slate-base-dark: #49474a;

            /** Slate */
            --thermal-slate: var( --thermal-slate-base );
            --thermal-slate-light: var( --thermal-slate-base-light );
            --thermal-slate-dark: var( --thermal-slate-base-dark );

            /** Gaps */
            --thermal-gap-base: 16px;
            --thermal-gap-sm: 17px;
            --thermal-gap-md: 18px;
            --thermal-gap-lg: 19px;
            --thermal-gap-xl: 20px; 
            --thermal-gap: var( --thermal-gap-base );

            /** Font sizes */
            --thermal-fs-base: 16px;
            --thermal-fs-sm: 16px;
            --thermal-fs-md: 16px;
            --thermal-fs-lg: 16px;
            --thermal-fs-xl: 16px; 
            --thermal-fs: var( --thermal-fs-base );
            --thermal-fs-small: calc( var( --thermal-fs ) * 0.9 );
            --thermal-fs-large: calc( var( --thermal-fs ) * 1.2 );

            /** Round corners */
            --thermal-radius-base: 5px;
            --thermal-radius-sm: 6px;
            --thermal-radius-md: 7px;
            --thermal-radius-lg: 8px;
            --thermal-radius-xl: 9px;
            --thermal-radius: var( --thermal-radius-base );

            /** Shadows */
            --thermal-shadow: 0px 0px 5px var( --thermal-slate-dark );
            --thermal-shadow-none: 0px 0px 0px transparent;

            --thermal-border-width: 1px;
            --thermal-border-style: solid;
        
        }

        :root {
        
            @media ( min-width: 640px ) {
                --thermal-gap: var( --thermal-gap-sm );
                --thermal-fs: var( --thermal-fs-sm );
                --thermal-radius: var( --thermal-radius-sm );
            }

            @media ( min-width: 960px ) {
                --thermal-gap: var( --thermal-gap-md );
                --thermal-fs: var( --thermal-fs-md );
                --thermal-radius: var( --thermal-radius-md );
            }
            
            @media ( min-width: 1250px ) {
                --thermal-gap: var( --thermal-gap-lg );
                --thermal-fs: var( --thermal-fs-lg );
                --thermal-radius: var( --thermal-radius-lg );
            }

            @media ( min-width: 1440px ) {
                --thermal-gap: var( --thermal-gap-xl );
                --thermal-fs: var( --thermal-fs-xl );
                --thermal-radius: var( --thermal-radius-xl );
            }
        
        }


            
        
        `);
	appendHeadCss("darkModeOverrides", `
        
            body.${DARK_MODE_CLASS} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `);
	appendHeadCss("solarizedSkin", `*[skin="solarized"] {
--thermal-foreground: #cef0faff;
--thermal-background: #1d5766ff;

--thermal-slate-dark: #39aaa1ff;
--thermal-slate: #27888bff;
--thermal-slate-light: #073642;

--thermal-primary-dark: #defdffff;
--thermal-primary: #9de9f3ff;
--thermal-primary-light: #67bcddff;
}`);
	appendHeadCss("systemSkin", `*[skin="system"] {
--thermal-foreground: buttontext;
--thermal-background: field;
        
--thermal-slate: ButtonBorder;
--thermal-slate-dark: GrayText;
--thermal-slate-light: ButtonFace;

--thermal-primary: accentcolor;
--thermal-primary-dark: linktext;
--thermal-primary-light: selecteditem;
}`);
	appendHeadCss("darkSkin", `*[skin="dark"] {
--thermal-primary: aqua;
--thermal-foreground: white;
--thermal-background: black;

--thermal-primary-light: var( --thermal-primary-base-dark );
--thermal-primary-dark: var( --thermal-primary-base-light );

--thermal-slate-light: var( --thermal-slate-base-dark );
--thermal-slate-dark: var( --thermal-slate-base-light );
}`);
	appendHeadCss("darkHC", `*[skin="darkhc"] {
--thermal-foreground: black;
--thermal-background: white;
        
--thermal-slate: gray;
--thermal-slate-dark: #454545;
--thermal-slate-light: lightgray;

--thermal-primary: blue;
--thermal-primary-dark: navy;
--thermal-primary-light: lightblue;

}`);
	appendHeadCss("narrowCorners", `*[corners="narrow"] {
--thermal-radius: 0px;
`);
	appendHeadCss("lineStyles", `*[lines="big"] {
--thermal-border-width: 3px;
`);
};

//#endregion
//#region src/controls/file/analysis/chart/loader.ts
/**
* @license
* Copyright 2014-2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Promise that resolves when the gviz loader script is loaded, which
* provides access to the Google Charts loading API.
*/
const loaderPromise = new Promise((resolve, reject) => {
	if (typeof google !== "undefined" && google.charts && typeof google.charts.load === "function") resolve();
	else {
		let loaderScript = document.querySelector("script[src=\"https://www.gstatic.com/charts/loader.js\"]");
		if (!loaderScript) {
			loaderScript = document.createElement("script");
			loaderScript.src = "https://www.gstatic.com/charts/loader.js";
			document.head.appendChild(loaderScript);
		}
		loaderScript.addEventListener("load", resolve);
		loaderScript.addEventListener("error", reject);
	}
});
/**
* Loads Google Charts API with the selected settings or using defaults.
*
* The following settings are available:
* - version: which version of library to load, default: 'current',
* - packages: which chart packages to load, default: ['corechart'],
* - language: what language to load library in, default: `lang` attribute on
*   `<html>` or 'en' if not specified,
* - mapsApiKey: key to use for maps API.
*/
async function load(settings = {}) {
	await loaderPromise;
	const { version = "current", packages = ["corechart"], language = document.documentElement.lang || "en", mapsApiKey } = settings;
	return google.charts.load(version, {
		"packages": packages,
		"language": language,
		"mapsApiKey": mapsApiKey
	});
}
/**
* Creates a DataTable object for use with a chart.
*
* Multiple different argument types are supported. This is because the
* result of loading the JSON data URL is fed into this function for
* DataTable construction and its format is unknown.
*
* The data argument can be one of a few options:
*
* - null/undefined: An empty DataTable is created. Columns must be added
* - !DataTable: The object is simply returned
* - {{cols: !Array, rows: !Array}}: A DataTable in object format
* - {{cols: !Array}}: A DataTable in object format without rows
* - !Array<!Array>: A DataTable in 2D array format
*
* Un-supported types:
*
* - Empty !Array<!Array>: (e.g. `[]`) While technically a valid data
*   format, this is rejected as charts will not render empty DataTables.
*   DataTables must at least have columns specified. An empty array is most
*   likely due to a bug or bad data. If one wants an empty DataTable, pass
*   no arguments.
* - Anything else
*
* See <a
* href="https://developers.google.com/chart/interactive/docs/reference#datatable-class">the
* docs</a> for more details.
*
* @param data The data which we should use to construct new DataTable object
*/
async function dataTable(data) {
	await load();
	if (data == null) return new google.visualization.DataTable();
	else if (data.getNumberOfRows) return data;
	else if (data.cols) return new google.visualization.DataTable(data);
	else if (data.length > 0) return google.visualization.arrayToDataTable(data);
	else if (data.length === 0) throw new Error("Data was empty.");
	throw new Error("Data format was not recognized.");
}
/**
* Creates new `ChartWrapper`.
* @param container Element in which the chart will be drawn
*/
async function createChartWrapper(container) {
	await load();
	return new google.visualization.ChartWrapper({ "container": container });
}

//#endregion
//#region \0@oxc-project+runtime@0.114.0/helpers/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}

//#endregion
//#region src/controls/file/analysis/chart/chart.ts
/**
* @license
* Copyright 2014-2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const DEFAULT_EVENTS = ["ready", "select"];
/**
* Constructor names for supported chart types.
*
* `ChartWrapper` expects a constructor name and assumes `google.visualization`
*  as the default namespace.
*/
const CHART_TYPES = {
	"area": "AreaChart",
	"bar": "BarChart",
	"md-bar": "google.charts.Bar",
	"bubble": "BubbleChart",
	"calendar": "Calendar",
	"candlestick": "CandlestickChart",
	"column": "ColumnChart",
	"combo": "ComboChart",
	"gantt": "Gantt",
	"gauge": "Gauge",
	"geo": "GeoChart",
	"histogram": "Histogram",
	"line": "LineChart",
	"md-line": "google.charts.Line",
	"org": "OrgChart",
	"pie": "PieChart",
	"sankey": "Sankey",
	"scatter": "ScatterChart",
	"md-scatter": "google.charts.Scatter",
	"stepped-area": "SteppedAreaChart",
	"table": "Table",
	"timeline": "Timeline",
	"treemap": "TreeMap",
	"wordtree": "WordTree"
};
let ThermalChart = class ThermalChart extends LitElement {
	constructor(..._args) {
		super(..._args);
		this.type = "column";
		this.events = [];
		this.options = void 0;
		this.cols = void 0;
		this.rows = void 0;
		this.data = void 0;
		this.view = void 0;
		this.selection = void 0;
		this.drawn = false;
		this._data = void 0;
		this.chartWrapper = null;
		this.redrawTimeoutId = void 0;
		this.chartRef = createRef();
		this.onWrapper = new CallbacksManager();
		this.left = 0;
		this.top = 0;
		this.w = 0;
		this.h = 0;
	}
	static {
		this.styles = css`
    :host {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      margin: 0;
      padding: 0;
      width: 400px;
      height: 300px;
    }

    :host([hidden]) {
      display: none;
    }

    :host([type="gauge"]) {
      width: 300px;
      height: 300px;
    }

    #chartdiv {
      width: 100%;
    }

    /* Workaround for slow initial ready event for tables. */
    .google-visualization-table-loadtest {
      padding-left: 6px;
    }
  `;
	}
	render() {
		return html`
      <div id="styles"></div>
      <div ${ref(this.chartRef)} id="chartdiv"></div>
    `;
	}
	getRef() {
		return this.chartRef.value;
	}
	firstUpdated() {
		createChartWrapper(this.shadowRoot.getElementById("chartdiv")).then((chartWrapper) => {
			this.chartWrapper = chartWrapper;
			this.onWrapper.call(chartWrapper);
			this.typeChanged();
			google.visualization.events.addListener(chartWrapper, "ready", () => {
				this.drawn = true;
				if (this.selection) this.selectionChanged();
			});
			google.visualization.events.addListener(chartWrapper, "select", () => {
				this.selection = chartWrapper.getChart().getSelection();
			});
			this.propagateEvents(DEFAULT_EVENTS, chartWrapper);
		});
	}
	updated(changedProperties) {
		if (changedProperties.has("type")) this.typeChanged();
		if (changedProperties.has("rows") || changedProperties.has("cols")) this.rowsOrColumnsChanged();
		if (changedProperties.has("data")) this.dataChanged();
		if (changedProperties.has("view")) this.viewChanged();
		if (changedProperties.has("_data") || changedProperties.has("options")) this.redraw();
		if (changedProperties.has("selection")) this.selectionChanged();
	}
	/** Reacts to chart type change. */
	typeChanged() {
		if (this.chartWrapper == null) return;
		this.chartWrapper.setChartType(CHART_TYPES[this.type] || this.type);
		const lastChart = this.chartWrapper.getChart();
		google.visualization.events.addOneTimeListener(this.chartWrapper, "ready", () => {
			const chart = this.chartWrapper.getChart();
			if (chart !== lastChart) this.propagateEvents(this.events.filter((eventName) => !DEFAULT_EVENTS.includes(eventName)), chart);
			const stylesDiv = this.shadowRoot.getElementById("styles");
			if (!stylesDiv.children.length) this.localizeGlobalStylesheets(stylesDiv);
		});
		this.redraw();
	}
	/**
	* Adds listeners to propagate events from the chart.
	*/
	propagateEvents(events, eventTarget) {
		for (const eventName of events) google.visualization.events.addListener(eventTarget, eventName, (event) => {
			this.dispatchEvent(new CustomEvent(`google-chart-${eventName}`, {
				bubbles: true,
				composed: true,
				detail: {
					chart: this.chartWrapper.getChart(),
					data: event
				}
			}));
		});
	}
	/** Sets the selectiton on the chart. */
	selectionChanged() {
		if (this.chartWrapper == null) return;
		const chart = this.chartWrapper.getChart();
		if (chart == null) return;
		if (chart.setSelection) {
			if (this.type === "timeline") {
				const oldSelection = JSON.stringify(chart.getSelection());
				if (JSON.stringify(this.selection) === oldSelection) return;
			}
			chart.setSelection(this.selection);
		}
	}
	/**
	* Redraws the chart.
	*
	* Called automatically when data/type/selection attributes change.
	* Call manually to handle view updates, page resizes, etc.
	*/
	redraw() {
		if (this.chartWrapper == null || this._data == null) return;
		this.chartWrapper.setDataTable(this._data);
		this.chartWrapper.setOptions(this.options || {});
		this.drawn = false;
		if (this.redrawTimeoutId !== void 0) clearTimeout(this.redrawTimeoutId);
		this.redrawTimeoutId = window.setTimeout(() => {
			this.chartWrapper.draw();
			const dimensions = this.chartWrapper.visualization.ha.O;
			this.left = dimensions.left;
			this.top = dimensions.top;
			this.w = dimensions.width;
			this.h = dimensions.height;
		}, 5);
	}
	/**
	* Returns the chart serialized as an image URI.
	*
	* Call this after the chart is drawn (`google-chart-ready` event).
	*/
	get imageURI() {
		if (this.chartWrapper == null) return null;
		const chart = this.chartWrapper.getChart();
		return chart && chart.getImageURI();
	}
	/** Handles changes to the `view` attribute. */
	viewChanged() {
		if (!this.view) return;
		this._data = this.view;
	}
	/** Handles changes to the rows & columns attributes. */
	async rowsOrColumnsChanged() {
		const { rows, cols } = this;
		if (!rows || !cols) return;
		try {
			const dt = await dataTable({ cols });
			dt.addRows(rows);
			this._data = dt;
		} catch (reason) {
			this.shadowRoot.getElementById("chartdiv").textContent = String(reason);
		}
	}
	/**
	* Handles changes to the `data` attribute.
	*/
	dataChanged() {
		let data = this.data;
		let dataPromise;
		if (!data) return;
		let isString = false;
		try {
			data = JSON.parse(data);
		} catch (e) {
			isString = typeof data === "string" || data instanceof String;
		}
		if (isString) dataPromise = fetch(data).then((response) => response.json());
		else dataPromise = Promise.resolve(data);
		dataPromise.then(dataTable).then((data) => {
			this._data = data;
		});
	}
	/**
	* Queries global document head for Google Charts `link#load-css-*` and clones
	* them into the local root's `div#styles` element for shadow dom support.
	*/
	localizeGlobalStylesheets(stylesDiv) {
		const stylesheets = Array.from(document.head.querySelectorAll("link[rel=\"stylesheet\"][type=\"text/css\"][id^=\"load-css-\"]"));
		for (const stylesheet of stylesheets) {
			const clonedStylesheet = document.createElement("link");
			clonedStylesheet.setAttribute("rel", "stylesheet");
			clonedStylesheet.setAttribute("type", "text/css");
			clonedStylesheet.setAttribute("href", stylesheet.getAttribute("href"));
			stylesDiv.appendChild(clonedStylesheet);
		}
	}
};
__decorate([property({
	type: String,
	reflect: true
})], ThermalChart.prototype, "type", void 0);
__decorate([property({ type: Array })], ThermalChart.prototype, "events", void 0);
__decorate([property({
	type: Object,
	hasChanged: () => true
})], ThermalChart.prototype, "options", void 0);
__decorate([property({ type: Array })], ThermalChart.prototype, "cols", void 0);
__decorate([property({ type: Array })], ThermalChart.prototype, "rows", void 0);
__decorate([property({ type: String })], ThermalChart.prototype, "data", void 0);
__decorate([property({ type: Object })], ThermalChart.prototype, "view", void 0);
__decorate([property({ type: Array })], ThermalChart.prototype, "selection", void 0);
__decorate([property({ type: Object })], ThermalChart.prototype, "_data", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalChart.prototype, "left", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalChart.prototype, "top", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalChart.prototype, "w", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalChart.prototype, "h", void 0);
ThermalChart = __decorate([customElement("thermal-chart")], ThermalChart);

//#endregion
//#region src/translations/localeContext.ts
const localeContext = createContext("localeContext");
const initLocalesInTopLevelElement = (element) => {
	i18next.on("languageChanged", (locale) => {
		element.locale = locale;
	});
	if (element.locale === void 0) element.locale = i18next.language;
	else i18next.changeLanguage(element.locale);
};
const localeMap = {
	cs: [
		"cs",
		"cz",
		"cs_CZ",
		"cs_CS"
	],
	fr: [
		"fr",
		"fr_FR",
		"fr_CA"
	],
	de: [
		"de",
		"de_DE",
		"de_AT",
		"de_CH"
	],
	cy: [
		"cy",
		"cy_GB",
		"cy"
	],
	en: [
		"en",
		"en_US",
		"en_GB",
		"en_CA",
		"en_AU",
		"en_NZ",
		"en_IE",
		"en_ZA"
	]
};
const localeConverter = {
	fromAttribute: (value) => {
		let safe = void 0;
		let index = 0;
		while (index < Object.keys(localeMap).length && safe === void 0) {
			const key = Object.keys(localeMap)[index];
			if (localeMap[key].includes(value)) safe = key;
			index++;
		}
		return safe ?? "en";
	},
	toAttribute: (value) => {
		return value;
	}
};

//#endregion
//#region src/translations/Languages.ts
/**
* Keys of all translation keys.
* 
* In the comment is the englis version. Use only the keys in any t() function.
*/
let T = /* @__PURE__ */ function(T) {
	T["loading"] = "loading";
	T["config"] = "config";
	T["temperature"] = "temperature";
	T["upload"] = "upload";
	T["uploadafile"] = "uploadafile";
	T["selectfile"] = "selectfile";
	T["addfiles"] = "addfiles";
	T["clear"] = "clear";
	T["dragorselectfile"] = "dragorselectfile";
	T["share"] = "share";
	T["fileloadingerror"] = "fileloadingerror";
	T["embedhint"] = "embedhint";
	T["embedlibrary"] = "embedlibrary";
	T["embedcomponent"] = "embedcomponent";
	T["copy"] = "copy";
	T["create"] = "create";
	T["remotefoldersbrowseraddfolderhint"] = "remotefoldersbrowseraddfolderhint";
	T["file"] = "file";
	T["layout_simple"] = "layout_simple";
	T["layout_advanced"] = "layout_advanced";
	T["layout_nogui"] = "layout_nogui";
	T["layout_lesson"] = "layout_lesson";
	/** Next */
	T["next"] = "next";
	/** Previous */
	T["prev"] = "prev";
	/** Back */
	T["back"] = "back";
	/** Close */
	T["close"] = "close";
	T["open"] = "open";
	T["detail"] = "detail";
	T["showeverything"] = "showeverything";
	T["palette"] = "palette";
	/** Description */
	T["description"] = "description";
	/** Author */
	T["author"] = "author";
	/** License */
	T["license"] = "license";
	/** Recorded at */
	T["recordedat"] = "recordedat";
	/** Display settings */
	T["displaysettings"] = "displaysettings";
	/** File rendering */
	T["filerendering"] = "filerendering";
	/** Pixelated */
	T["pixelated"] = "pixelated";
	/** Smooth */
	T["smooth"] = "smooth";
	/** 'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are. */
	T["filerenderinghint"] = "filerenderinghint";
	/** Adjust time scale */
	T["adjusttimescale"] = "adjusttimescale";
	T["automaticrange"] = "automaticrange";
	T["fullrange"] = "fullrange";
	/** Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max). */
	T["adjusttimescalehint"] = "adjusttimescalehint";
	/** Select colour palette of thermal display. */
	T["colourpalettehint"] = "colourpalettehint";
	/** Palette {name} */
	T["palettename"] = "palettename";
	/** File info */
	T["fileinfo"] = "fileinfo";
	/** IR file name */
	T["thermalfilename"] = "thermalfilename";
	/** IR file URL */
	T["thermalfileurl"] = "thermalfileurl";
	/** Download the IR file */
	T["thermalfiledownload"] = "thermalfiledownload";
	/** Visible file name */
	T["visiblefilename"] = "visiblefilename";
	/** Visible file URL */
	T["visiblefileurl"] = "visiblefileurl";
	/** Download visible file */
	T["visiblefiledownload"] = "visiblefiledownload";
	T["togglevisibleimage"] = "togglevisibleimage";
	/** Time */
	T["time"] = "time";
	/** Duration */
	T["duration"] = "duration";
	/** Resolution */
	T["resolution"] = "resolution";
	/** Bytesize */
	T["bytesize"] = "bytesize";
	/** Minimal temperature */
	T["minimaltemperature"] = "minimaltemperature";
	/** Maximal temperature */
	T["maximaltemperature"] = "maximaltemperature";
	/** File type */
	T["filetype"] = "filetype";
	/** Type */
	T["type"] = "type";
	/** Supported devices */
	T["supporteddevices"] = "supporteddevices";
	T["numfiles"] = "numfiles";
	T["download"] = "download";
	T["downloadoriginalfiles"] = "downloadoriginalfiles";
	T["downloadoriginalfileshint"] = "downloadoriginalfileshint";
	T["downloadoriginalfile"] = "downloadoriginalfile";
	T["exportcurrentframeaspng"] = "exportcurrentframeaspng";
	T["convertentiresequencetovideo"] = "convertentiresequencetovideo";
	T["pngofindividualimages"] = "pngofindividualimages";
	T["pngofindividualimageshint"] = "pngofindividualimageshint";
	T["pngofentiregroup"] = "pngofentiregroup";
	T["pngofentiregrouphint"] = "pngofentiregrouphint";
	T["csvofanalysisdata"] = "csvofanalysisdata";
	T["csvofanalysisdatahint"] = "csvofanalysisdatahint";
	T["exportimagewidth"] = "exportimagewidth";
	T["exportimagefontsize"] = "exportimagefontsize";
	T["exportgroupname"] = "exportgroupname";
	T["exportfilenames"] = "exportfilenames";
	T["numberofcolumns"] = "numberofcolumns";
	T["exportdimensions"] = "exportdimensions";
	T["exportgroup"] = "exportgroup";
	T["thermalscale"] = "thermalscale";
	T["thermalrange"] = "thermalrange";
	T["filedate"] = "filedate";
	T["folder"] = "folder";
	T["folders"] = "folders";
	T["showingfolder"] = "showingfolder";
	T["showingfolders"] = "showingfolders";
	T["and"] = "and";
	T["or"] = "or";
	T["doyouwanttoadd"] = "doyouwanttoadd";
	T["youmayalsoadd"] = "youmayalsoadd";
	T["range"] = "range";
	T["info"] = "info";
	T["note"] = "note";
	T["group"] = "group";
	T["donotgroup"] = "donotgroup";
	T["groupby"] = "groupby";
	T["groupped"] = "groupped";
	T["bydays"] = "bydays";
	T["byhours"] = "byhours";
	T["byweeks"] = "byweeks";
	T["bymonths"] = "bymonths";
	T["byyears"] = "byyears";
	T["play"] = "play";
	T["pause"] = "pause";
	T["stop"] = "stop";
	T["date"] = "date";
	T["frame"] = "frame";
	T["playbackspeed"] = "playbackspeed";
	T["graphlines"] = "graphlines";
	T["straightlines"] = "straightlines";
	T["smoothlines"] = "smoothlines";
	T["graphlineshint"] = "graphlineshint";
	T["reload"] = "reload";
	T["analysis"] = "analysis";
	T["analyses"] = "analyses";
	T["avg"] = "avg";
	T["min"] = "min";
	T["max"] = "max";
	T["size"] = "size";
	T["edit"] = "edit";
	T["editsth"] = "editsth";
	T["remove"] = "remove";
	T["addpoint"] = "addpoint";
	T["addrectangle"] = "addrectangle";
	T["addellipsis"] = "addellipsis";
	T["analysishint"] = "analysishint";
	T["graph"] = "graph";
	T["graphhint1"] = "graphhint1";
	T["graphhint2"] = "graphhint2";
	T["rectangle"] = "rectangle";
	T["ellipsis"] = "ellipsis";
	T["point"] = "point";
	T["name"] = "name";
	T["color"] = "color";
	T["top"] = "top";
	T["left"] = "left";
	T["right"] = "right";
	T["bottom"] = "bottom";
	T["columns"] = "columns";
	T["fromto"] = "fromto";
	T["downloadgraphdataascsv"] = "downloadgraphdataascsv";
	T["apparenttemperature"] = "apparenttemperature";
	T["airtemperature"] = "airtemperature";
	T["relativeairhumidity"] = "relativeairhumidity";
	T["windspeed"] = "windspeed";
	T["inpercent"] = "inpercent";
	T["apparenttemperatureverbose"] = "apparenttemperatureverbose";
	T["youfeelwarmer"] = "youfeelwarmer";
	T["youfeelcolder"] = "youfeelcolder";
	T["apparenttemperaturehint"] = "apparenttemperaturehint";
	T["analysissync"] = "analysissync";
	/** Inspect tool */
	T["inspecttemperatures"] = "inspecttemperatures";
	T["usemousetoinspecttemperaturevalues"] = "usemousetoinspecttemperaturevalues";
	/**  Edit analysis tool */
	T["editanalysis"] = "editanalysis";
	T["dragcornersofselectedanalysis"] = "dragcornersofselectedanalysis";
	/** Add point tool */
	T["addpointanalysis"] = "addpointanalysis";
	T["clickandaddpoint"] = "clickandaddpoint";
	/** Add rectangle tool */
	T["addrectangleanalysis"] = "addrectangleanalysis";
	T["clickandaddrectangle"] = "clickandaddrectangle";
	/** Add ellipsis tool */
	T["addellipsisanalysis"] = "addellipsisanalysis";
	T["clickandaddellipsis"] = "clickandaddellipsis";
	/** Tutorial */
	T["tutorial"] = "tutorial";
	/** Colour Palette */
	T["colourpalette"] = "colourpalette";
	/** Use the dropdown to change the palette */
	T["palettehint"] = "palettehint";
	T["remotefoldersbrowser"] = "remotefoldersbrowser";
	/** Server */
	T["server"] = "server";
	T["networklog"] = "networklog";
	T["editfile"] = "editfile";
	T["editfolder"] = "editfolder";
	T["editcomment"] = "editcomment";
	T["user"] = "user";
	T["griddisplay"] = "griddisplay";
	T["tabledisplay"] = "tabledisplay";
	T["deletefile"] = "deletefile";
	T["deletefolder"] = "deletefolder";
	T["comments"] = "comments";
	T["deletecomment"] = "deletecomment";
	T["savecomment"] = "savecomment";
	T["addcomment"] = "addcomment";
	T["nocomments"] = "nocomments";
	T["savechanges"] = "savechanges";
	T["uploadfile"] = "uploadfile";
	T["compactview"] = "compactview";
	T["showdiscussion"] = "showdiscussion";
	T["edittags"] = "edittags";
	T["assignedtags"] = "assignedtags";
	T["availabletags"] = "availabletags";
	T["connectioninformation"] = "connectioninformation";
	T["serverurl"] = "serverurl";
	T["servername"] = "servername";
	T["login"] = "login";
	T["logout"] = "logout";
	T["logoutmessage"] = "logoutmessage";
	T["loginerror"] = "logineerror";
	T["password"] = "password";
	T["accessibletologgedinusers"] = "accessibletologgedinusers";
	T["display"] = "display";
	T["content"] = "content";
	T["syncanalyses"] = "syncanalyses";
	T["overviewofyourfolders"] = "overviewofyourfolders";
	T["uploadedby"] = "uploadedby";
	T["uploadeddat"] = "uploadeddat";
	T["createfolder"] = "createfolder";
	T["subfolder"] = "subfolder";
	T["createsubfolder"] = "createsubfolder";
	T["delete"] = "delete";
	T["export"] = "export";
	T["exportcontent"] = "exportcontent";
	T["histogram"] = "histogram";
	T["timeline"] = "timeline";
	T["exportwidth"] = "exportwidth";
	T["exportmargin"] = "exportmargin";
	T["exportgap"] = "exportgap";
	T["exportgrahpheight"] = "exportgrahpheight";
	T["imagecompression"] = "imagecompression";
	T["videoquality"] = "videoquality";
	T["exportvideo"] = "exportvideo";
	T["exportpng"] = "exportpng";
	T["exportrecordingframes"] = "exportrecordingframes";
	T["exportencodingfile"] = "exportencodingfile";
	T["exportdonotclosewindowhint"] = "exportdonotclosewindowhint";
	T["theme"] = "theme";
	T["light"] = "light";
	T["dark"] = "dark";
	T["foldermayhavefiles"] = "foldermayhavefiles";
	T["foldermayhavesubfolders"] = "foldermayhavesubfolders";
	return T;
}({});
const languages = [
	{
		code: "cs",
		name: "Čeština",
		flag: "🇨🇿"
	},
	{
		code: "cy",
		name: "Cymraeg",
		flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
		disabled: true
	},
	{
		code: "de",
		name: "Deutsch",
		flag: "🇩🇪"
	},
	{
		code: "en",
		name: "English",
		flag: "🇬🇧"
	},
	{
		code: "fr",
		name: "Français",
		flag: "🇫🇷"
	}
];
const languagesObject = Object.fromEntries(languages.map((l) => [l.code, l]));

//#endregion
//#region src/hierarchy/AbstractThermalElement.ts
/** All the webcomponents of \@labirthermal/embed (and its extensions) should be based on the abstract class `AbstractThermalElement`. */
var AbstractThermalElement = class extends LitElement {
	get UUID() {
		if (this._UUID === void 0) this._UUID = v4();
		return this._UUID;
	}
	getUUID(msg) {
		return this.UUID + "_" + msg;
	}
	log(...args) {
		console.log(this.tagName, this.UUID.substring(0, 5), ...args);
	}
	static {
		this.shadowRootOptions = {
			...LitElement.shadowRootOptions,
			mode: "open"
		};
	}
	connectedCallback() {
		super.connectedCallback();
		i18next.on("languageChanged", (locale) => {
			this._locale = locale;
		});
	}
	i(str) {
		return html`${unsafeSVG(str)}`;
	}
	/** Returns a translated string */
	t(key) {
		return t(T[key]);
	}
};
__decorate([consume({
	context: localeContext,
	subscribe: true
})], AbstractThermalElement.prototype, "_locale", void 0);

//#endregion
//#region src/utils/converters/booleanConverter.ts
const booleanConverter = (emptyValue) => {
	const fromAttribute = (value) => {
		if (value === void 0 || value === null || value?.trim().length === 0) return emptyValue;
		return value === "true";
	};
	const toAttribute = (value) => {
		if (value === true) return "true";
		return "false";
	};
	return {
		fromAttribute,
		toAttribute
	};
};

//#endregion
//#region src/ui/App.ts
var _ThermalAppElement;
let ThermalAppElement = class ThermalAppElement extends AbstractThermalElement {
	static {
		_ThermalAppElement = this;
	}
	constructor(..._args) {
		super(..._args);
		this.language = i18next.language;
		this.fullscreen = "off";
		this.showfullscreen = false;
		this.dark = false;
		this.labelVariant = "foreground";
		this.chromiumwarning = false;
		this.headerRef = createRef();
		this.contentRef = createRef();
		this._handleFullscreenChange = () => {
			if (!document.fullscreenElement) this.fullscreen = "off";
		};
	}
	connectedCallback() {
		super.connectedCallback();
		window.addEventListener("fullscreenchange", this._handleFullscreenChange);
		i18next.on("languageChanged", () => {
			this.language = i18next.language;
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("fullscreenchange", this._handleFullscreenChange);
	}
	toggleFullscreen() {
		if (this.fullscreen === "on") this.fullscreen = "off";
		else this.fullscreen = "on";
	}
	update(changedProperties) {
		super.update(changedProperties);
		if (this.observer === void 0 && this.contentRef.value !== void 0) {
			this.observer = new ResizeObserver((entries) => {
				const entry = entries[0];
				if (this.fullscreen === "on" && this.contentRef.value) {
					const offsetHeight = 175;
					const offsetWidth = 0;
					const windowHeight = entry.contentRect.height;
					const windowWidth = entry.contentRect.width;
					const availableHeight = windowHeight - offsetHeight;
					const availableWidth = windowWidth - offsetWidth;
					const contentHeight = this.contentRef.value.offsetHeight;
					const aspect = 4 / 3;
					let width = 0;
					let height = 0;
					if (contentHeight < availableHeight) {
						console.log("priorita šířky");
						width = availableWidth;
						height = width / aspect;
					} else {
						console.log("priorita výšky");
						height = availableHeight;
						width = height * aspect;
					}
				} else if (this.fullscreen === "off" && this.contentRef.value) this.contentRef.value.removeAttribute("style");
			});
			this.observer.observe(this);
		}
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "fullscreen") {
			if (value === "on") this.requestFullscreen();
			else if (value === "off" && _old !== null) {
				if (document.fullscreenElement) document.exitFullscreen();
			}
		}
	}
	static {
		this.styles = css`

        :host {
            font-family: sans-serif;
            font-weight: normal;
            font-size: var( --thermal-fs );
            line-height: 1em;
            color: var( --thermal-foreground );

            display: block;

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );    
            position: relative; 
        }

        .dark {
            background-color: var( --thermal-slate ) !important;
        }

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );    
            position: relative;        

        }

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;

            .bar-content {
                flex-grow: 1;
            }

            .bar-separator {
                flex-grow: 100;
                content: "";
            }


        }

        :host([fullscreen="on"]) .container {
            border: 0;
            border-radius: 0;
            box-sizing: border-box;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
            padding-top: 0px;

            .app-header {
                padding-top: calc( var( --thermal-gap ) / 3 );
            }

            header,
            .content {
                width: 100%;
            }
        }


        .credits {

            display: flex;
            width: 100%;
            flex-wrap: wrap;
            font-size: calc( var(--thermal-fs-sm) * 0.8 );

            & > div {
                padding-top: calc( var(--thermal-gap) * .5 );
                padding-right: var( --thermal-gap );
            }
        
        }

        .credits-field {
            display: inline;
            opacity: .5;
        }

        .credit-value {
            display: inline;
        }

        .content {
            width: 100%;
            box-sizing: border-box;
        }

        .has-content {
            margin-top: calc( var(--thermal-gap) * .5);
            &::before {
                opacity: .5;
                font-size: calc( var(--thermal-fs-sm) * 0.8 );
                display: block;
                padding-bottom: calc( var(--thermal-gap) * .5);
            }
        }

        .app-header {
            position: sticky;
            top: 0;
            z-index: 9999;
            background: var(--thermal-slate-light);
            background: linear-gradient(var(--thermal-slate-light) calc(100% - 10px), transparent);
        }
    
    `;
	}
	renderLabel() {
		const interactiveProp = this.onlabel !== void 0 ? "true" : "false";
		return html`
    <slot name="label">
        ${this.label ? html`<thermal-btn
    variant="${this.labelVariant}"
    interactive=${interactiveProp}
    icon=${ifDefined(this.labelIcon)}
    iconStyle=${ifDefined(this.labelIconStyle)}
    tooltip=${ifDefined(this.labelTooltip)}
    @click=${ifDefined(this.onlabel)}
>${this.label}</thermal-btn>` : nothing}
    </slot>`;
	}
	renderCreditField(label, value) {
		if (value === void 0 || value.trim().length === 0) return nothing;
		return html`<div>
    <div class="credits-field">${label}:</div>
    <div class="credit-value">${value}</div>
</div>`;
	}
	renderCredits() {
		if (this.author || this.license || this.recorded) return html`<div class="credits">
    ${this.renderCreditField(t(T.recordedat), this.recorded)}
    ${this.renderCreditField(t(T.author), this.author)}
    ${this.renderCreditField(t(T.license), this.license)}
</div>`;
		return nothing;
	}
	static {
		this.languages = [
			"en",
			"cs",
			"de",
			"fr",
			"cy"
		];
	}
	renderLanguageSwitcher() {
		return html`<thermal-dropdown>
    <span slot="invoker">${this.language.toUpperCase()}</span>
    ${cache(map(_ThermalAppElement.languages, (lang) => html`<div slot="option">
        <thermal-btn
            @click=${() => {
			i18next.changeLanguage(lang);
			this.language = lang;
		}}
        >${languagesObject[lang].flag} ${languagesObject[lang].name}</thermal-btn>
    </div>`))}
</thermal-dropdown>`;
	}
	renderFullscreenButton() {
		if (this.showfullscreen === false) return nothing;
		return html`<thermal-btn
    class="app-fullscreen-button"
    @click=${this.toggleFullscreen.bind(this)}
    icon=${this.fullscreen === "on" ? "smaller" : "bigger"}
    iconStyle="mini"
    tooltip=${this.fullscreen === "on" ? t(T.close) : "Fullscreen"}
></thermal-btn>`;
	}
	render() {
		return html`<header ${ref(this.headerRef)} class="app-header">

        <div class="bar ${this.barElements.length > 0 ? "has-bar" : "no-bar"}">

            ${this.renderLabel()}

            <slot name="bar-persistent"></slot>

            <div class="bar-content">

                <thermal-bar>

                    <slot name="bar-pre"></slot>
                    <div class="bar-separator"></div>
                    <slot name="bar-post"></slot>

                </thermal-bar>
                
            </div>

            <slot name="close"></slot>

            ${this.renderFullscreenButton()}

            ${this.renderLanguageSwitcher()}

        </div>

        ${this.preElements.length >= 0 ? html`<div class="pre" class="pre">
            <slot name="pre"></slot>
        </div>` : ""}

    </header>

    <div class="content" part="app-content" ${ref(this.contentRef)}>
        <slot></slot>
    </div>

    <div class="post">
        <slot name="post"></slot>
    </div>

    ${this.renderCredits()}

    <div class="content ${this.contentElements.length > 0 ? "has-content" : ""}">
        <slot name="content"></slot>
    </div>
`;
	}
};
__decorate([state()], ThermalAppElement.prototype, "language", void 0);
__decorate([queryAssignedElements({
	slot: "bar",
	flatten: true
})], ThermalAppElement.prototype, "barElements", void 0);
__decorate([queryAssignedElements({
	slot: "pre",
	flatten: true
})], ThermalAppElement.prototype, "preElements", void 0);
__decorate([queryAssignedElements({
	slot: "content",
	flatten: true
})], ThermalAppElement.prototype, "contentElements", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalAppElement.prototype, "fullscreen", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true,
	converter: booleanConverter(false)
})], ThermalAppElement.prototype, "showfullscreen", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], ThermalAppElement.prototype, "dark", void 0);
__decorate([property()], ThermalAppElement.prototype, "author", void 0);
__decorate([property()], ThermalAppElement.prototype, "recorded", void 0);
__decorate([property()], ThermalAppElement.prototype, "license", void 0);
__decorate([property()], ThermalAppElement.prototype, "label", void 0);
__decorate([property()], ThermalAppElement.prototype, "labelIcon", void 0);
__decorate([property()], ThermalAppElement.prototype, "labelIconStyle", void 0);
__decorate([property()], ThermalAppElement.prototype, "labelTooltip", void 0);
__decorate([property()], ThermalAppElement.prototype, "labelVariant", void 0);
__decorate([property({ type: Object })], ThermalAppElement.prototype, "onlabel", void 0);
__decorate([property({ converter: booleanConverter(false) })], ThermalAppElement.prototype, "chromiumwarning", void 0);
ThermalAppElement = _ThermalAppElement = __decorate([customElement("thermal-app")], ThermalAppElement);

//#endregion
//#region src/ui/Bar.ts
let ThermalBarElement = class ThermalBarElement extends LitElement {
	constructor(..._args) {
		super(..._args);
		this.collapsed = false;
		this.drawerRef = createRef();
		this.contentRef = createRef();
		this.rulerContentRef = createRef();
	}
	static {
		this.styles = css`

        .container {
            // width: 100%;
            display: flex;
            gap: 5px;
            position: relative;
        }


        .ruler {
            width: 100%;
            position: absolute;
            height: 0;
            top: 0;
            left: 0;
        }

        .ruler-item {}

        .ruler-item__current {
            border: var(--thermal-border-width) var(--thermal-border-style) transparent;
            height: 0;
            margin-top: -1px;
            content: "";
        }

        .ruler-item__content {
            border: var(--thermal-border-width) var(--thermal-border-style) red;
            position: absolute;
            display: none;
        }


        .content {
            
            display: flex;
            gap: calc( 5px );
            width: max-content;

            align-items: center;
        
        }



        .icon {
            width: var( --thermal-gap );
            line-height: 0;
        }

        .collapsed-menu {
            --thermal-direction: column;
            --thermal-collapsible-display: block !important;
            --thermal-collapsible-width: 100%;
            --thermal-collapsible-grow: 1;
        }

    `;
	}
	connectedCallback() {
		super.connectedCallback();
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.hydrateObserver();
	}
	hydrateObserver() {
		if (this.drawerRef.value && this.observer === void 0) {
			this.observer = new ResizeObserver((entries) => {
				if (this.collapsed === false) this.lastContentWidth = this.contentRef.value.clientWidth;
				const entry = entries[0];
				if (this.lastContentWidth < entry.contentRect.width) {
					if (this.collapsed) this.collapsed = false;
				} else if (this.collapsed === false) this.collapsed = true;
			});
			this.observer.observe(this.drawerRef.value);
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.drawerRef.value) this.observer.unobserve(this.drawerRef.value);
		if (this.observer) this.observer.disconnect();
	}
	render() {
		return html`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${ref(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${ref(this.rulerContentRef)} style="width: ${this.lastContentWidth + 1}px"></div>
                </div>
                <div class="content" ${ref(this.contentRef)}>

                    ${this.collapsed === false ? html`
                        <slot></slot>    
                    ` : nothing}
                
                </div>

            </div>

            ${this.collapsed ? html`
                <thermal-dropdown class="collapsed-menu">
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option" stacked="true"></slot>
                </thermal-dropdown>
            ` : nothing}
        
        `;
	}
};
__decorate([state()], ThermalBarElement.prototype, "collapsed", void 0);
__decorate([state()], ThermalBarElement.prototype, "lastContentWidth", void 0);
ThermalBarElement = __decorate([customElement("thermal-bar")], ThermalBarElement);

//#endregion
//#region src/utils/icons.ts
/**
* Definice SVG ikon s jejich variantami
* Každá ikona může mít více variant (outline, solid, mini, micro)
* Použití: přidejte novou ikonu s jejími variantami zde
*/
const svg = {
	lock: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clip-rule="evenodd" />
</svg>
` },
	document: { outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>` },
	eye: { solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
        </svg>` },
	play: { solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
        </svg>` },
	pause: { solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
        </svg>` },
	info: {
		mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />
        </svg>`,
		solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
        </svg>`,
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>`
	},
	settings: {
		solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
</svg>`,
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
`
	},
	back: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clip-rule="evenodd" />
</svg>` },
	share: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z" />
        </svg>`,
		mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" />
        </svg>`
	},
	folder: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 9.62 4H12.5A1.5 1.5 0 0 1 14 5.5v1.401a2.986 2.986 0 0 0-1.5-.401h-9c-.546 0-1.059.146-1.5.401V3.5ZM2 9.5v3A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8h-9A1.5 1.5 0 0 0 2 9.5Z" />
        </svg>`
	},
	wifi: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M14.188 7.063a8.75 8.75 0 0 0-12.374 0 .75.75 0 0 1-1.061-1.06c4.003-4.004 10.493-4.004 14.496 0a.75.75 0 1 1-1.061 1.06Zm-2.121 2.121a5.75 5.75 0 0 0-8.132 0 .75.75 0 0 1-1.06-1.06 7.25 7.25 0 0 1 10.252 0 .75.75 0 0 1-1.06 1.06Zm-2.122 2.122a2.75 2.75 0 0 0-3.889 0 .75.75 0 1 1-1.06-1.061 4.25 4.25 0 0 1 6.01 0 .75.75 0 0 1-1.06 1.06Zm-2.828 1.06a1.25 1.25 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.355.355a.75.75 0 0 1-1.06 0l-.354-.354a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>` },
	user: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
        </svg>` },
	image: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd" />
        </svg>`
	},
	upwards: { outline: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M20.24 20.249a.75.75 0 0 0-.75-.75H8.989V5.56l2.47 2.47a.75.75 0 0 0 1.06-1.061l-3.75-3.75a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l2.47-2.469V20.25c0 .414.335.75.75.75h11.25a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd" />
        </svg>` },
	copy: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>`,
		mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />
            <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" />
        </svg>`
	},
	right: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
        </svg>`
	},
	trash: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd" />
        </svg>` },
	addfolder: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path fill-rule="evenodd" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H9.621a1.5 1.5 0 0 1-1.06-.44L7.439 2.44A1.5 1.5 0 0 0 6.38 2H3.5ZM8 6a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 8 6Z" clip-rule="evenodd" />
        </svg>` },
	upload: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z" />
            <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
        </svg>` },
	close: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
        </svg>`
	},
	edit: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
        </svg>` },
	comment: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Zm3-3.49a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25ZM4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd" />
        </svg>` },
	grid: {
		solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clip-rule="evenodd" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2h-2ZM3.5 9A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9h-2ZM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2ZM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2Z" />
        </svg>`
	},
	list: {
		solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M3 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM4 12.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>`
	},
	check: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
        </svg>` },
	"check-circle": { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clip-rule="evenodd" />
</svg>` },
	"circle-dots": { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
</svg>` },
	save: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3h11l3 3v13H5V3Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 3v4h8V3M7 10h10M7 12h8" />
            <circle cx="17" cy="15" r="1.5" stroke="currentColor" fill="none" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="size-4">
            <path d="M2 2h9l3 3v8H2V2Zm2 1v3h6V3H4Zm0 4h8v1H4V7Zm0 2h6v1H4V9Zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>`
	},
	restore: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M6.25 12.5A2.75 2.75 0 0 0 9 9.75V4.56L6.78 6.78a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L10.5 4.56v5.19a4.25 4.25 0 0 1-8.5 0v-1a.75.75 0 0 1 1.5 0v1a2.75 2.75 0 0 0 2.75 2.75Z" clipRule="evenodd" />
</svg>`
	},
	unlink: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0l4.46 4.46c.128-.178.272-.349.432-.508l3-3a4 4 0 0 1 5.657 5.656l-1.225 1.225a.75.75 0 1 1-1.06-1.06l1.224-1.225a2.5 2.5 0 0 0-3.536-3.536l-3 3a2.504 2.504 0 0 0-.406.533l2.59 2.59a2.49 2.49 0 0 0-.79-1.254.75.75 0 1 1 .977-1.138 3.997 3.997 0 0 1 1.306 3.886l4.871 4.87a.75.75 0 1 1-1.06 1.061l-5.177-5.177-.006-.005-4.134-4.134a.65.65 0 0 1-.005-.006L2.22 3.28a.75.75 0 0 1 0-1.06Zm3.237 7.727a.75.75 0 0 1 0 1.06l-1.225 1.225a2.5 2.5 0 0 0 3.536 3.536l1.879-1.879a.75.75 0 1 1 1.06 1.06L8.83 16.83a4 4 0 0 1-5.657-5.657l1.224-1.225a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
        </svg>`
	},
	link: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
        </svg>`
	},
	zoom: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />
            <path fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />
        </svg>`
	},
	adjustment: {
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
        </svg>`,
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>`
	},
	range: {
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <g>
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="1.5"/>
                <line x1="5" y1="9" x2="5" y2="15" stroke="currentColor" stroke-width="2"/>
                <line x1="19" y1="9" x2="19" y2="15" stroke="currentColor" stroke-width="2"/>
            </g>
        </svg>`,
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
            <g>
                <line x1="3" y1="8" x2="13" y2="8" stroke="currentColor" stroke-width="1"/>
                <line x1="3" y1="6" x2="3" y2="10" stroke="currentColor" stroke-width="1.5"/>
                <line x1="13" y1="6" x2="13" y2="10" stroke="currentColor" stroke-width="1.5"/>
            </g>
        </svg>`
	},
	bigger: { mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path d="m13.28 7.78 3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 0 0 1.06 1.06ZM2 17.25v-4.5a.75.75 0 0 1 1.5 0v2.69l3.22-3.22a.75.75 0 0 1 1.06 1.06L4.56 16.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.747.747 0 0 1-.75-.75ZM12.22 13.28l3.22 3.22h-2.69a.75.75 0 0 0 0 1.5h4.5a.747.747 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69l-3.22-3.22a.75.75 0 1 0-1.06 1.06ZM3.5 4.56l3.22 3.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0V4.56Z" />
</svg>
` },
	smaller: { mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L5.44 6.5H2.75a.75.75 0 0 0 0 1.5h4.5A.75.75 0 0 0 8 7.25v-4.5a.75.75 0 0 0-1.5 0v2.69L3.28 2.22ZM13.5 2.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-2.69l3.22-3.22a.75.75 0 0 0-1.06-1.06L13.5 5.44V2.75ZM3.28 17.78l3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06ZM13.5 14.56l3.22 3.22a.75.75 0 1 0 1.06-1.06l-3.22-3.22h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-2.69Z" />
</svg>` },
	ellipsis: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
</svg>` },
	download: {
		micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
  <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
</svg>`,
		outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>`
	},
	clipboard: { outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>` },
	bulb: { outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>` },
	reload: { micro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z" clip-rule="evenodd" />
</svg>` },
	warning: { outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>` },
	move: { mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z" clip-rule="evenodd" />
</svg>` }
};
/**
* Základní funkce pro vykreslení ikony
* @param name - název ikony (např. 'folder')
* @param variant - varianta ikony (např. 'outline')
* @param className - CSS třídy pro přidání
* @param styles - inline styly
*/
const icon = (name, variant, className, styles) => {
	const iconSvg = svg[name][variant];
	if (!iconSvg) {
		console.warn(`Icon variant "${String(variant)}" not found for icon "${String(name)}"`);
		return html``;
	}
	let modifiedSvg = iconSvg;
	if (className || styles) {
		if (modifiedSvg.includes("class=\"")) modifiedSvg = modifiedSvg.replace(/class="([^"]*)"/, `class="$1 ${className || ""}"`);
		else modifiedSvg = modifiedSvg.replace(/<svg([^>]*)>/, `<svg$1 class="${className || ""}">`);
		if (styles) if (modifiedSvg.includes("style=\"")) modifiedSvg = modifiedSvg.replace(/style="([^"]*)"/, `style="$1; ${styles}"`);
		else modifiedSvg = modifiedSvg.replace(/<svg([^>]*)>/, `<svg$1 style="${styles}">`);
	}
	return modifiedSvg;
};
/**
* Automatické generování objektu ikon z definice svg
* Vytváří strukturu: icons.nazevIkony.varianta(className?, styles?)
*/
const createIcons = () => {
	const result = {};
	for (const iconName in svg) {
		const iconKey = iconName;
		result[iconKey] = {};
		const iconVariants = svg[iconKey];
		for (const variant in iconVariants) result[iconKey][variant] = (className, styles) => {
			return icon(iconName, variant, className, styles);
		};
	}
	return result;
};
/**
* Exportovaný objekt ikon s typovou bezpečností
* Použití: icons.folder.outline("my-class", "color: red")
*/
const icons = createIcons();

//#endregion
//#region src/ui/Btn.ts
let ThermalBtnElement = class ThermalBtnElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.tooltipPlacement = "top";
		this.iconStyle = "outline";
		this.tabindex = 0;
		this.align = "center";
		this.showTooltip = async () => {
			if (!this.tooltipElement || !this.arrowElement) return;
			this.tooltipElement.style.visibility = "visible";
			this.tooltipElement.style.opacity = "1";
			const updatePosition = async () => {
				if (!this.tooltipElement || !this.arrowElement) return;
				const { x, y, placement, middlewareData } = await computePosition(this, this.tooltipElement, {
					placement: this.tooltipPlacement,
					middleware: [
						offset(6),
						flip(),
						shift({ padding: 8 }),
						arrow({ element: this.arrowElement })
					]
				});
				Object.assign(this.tooltipElement.style, {
					left: `${x}px`,
					top: `${y}px`
				});
				const { x: arrowX, y: arrowY } = middlewareData.arrow || {};
				const staticSide = {
					top: "bottom",
					right: "left",
					bottom: "top",
					left: "right"
				}[placement.split("-")[0]];
				Object.assign(this.arrowElement.style, {
					left: arrowX != null ? `${arrowX}px` : "",
					top: arrowY != null ? `${arrowY}px` : "",
					right: "",
					bottom: "",
					[staticSide]: "-4px"
				});
			};
			updatePosition();
			this.cleanupAutoUpdate = autoUpdate(this, this.tooltipElement, updatePosition);
		};
		this.hideTooltip = () => {
			if (!this.tooltipElement) return;
			this.tooltipElement.style.opacity = "0";
			this.tooltipElement.style.visibility = "hidden";
			if (this.cleanupAutoUpdate) {
				this.cleanupAutoUpdate();
				this.cleanupAutoUpdate = void 0;
			}
		};
		this.handleClick = (event) => {
			if (this.disabled) {
				event.preventDefault();
				event.stopPropagation();
			}
		};
		this.handleKeydown = (event) => {
			if (this.disabled) return;
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				this.click();
			}
		};
	}
	firstUpdated() {
		if (!this.hasAttribute("tabindex")) this.setAttribute("tabindex", "0");
		this.addEventListener("keydown", this.handleKeydown);
		this.addEventListener("click", this.handleClick);
		if (this.tooltip) {
			this.addEventListener("mouseenter", this.showTooltip);
			this.addEventListener("mouseleave", this.hideTooltip);
			this.addEventListener("focus", this.showTooltip);
			this.addEventListener("blur", this.hideTooltip);
		}
	}
	updated(changedProperties) {
		if (changedProperties.has("tooltip")) if (this.tooltip) {
			this.addEventListener("mouseenter", this.showTooltip);
			this.addEventListener("mouseleave", this.hideTooltip);
			this.addEventListener("focus", this.showTooltip);
			this.addEventListener("blur", this.hideTooltip);
		} else {
			this.removeEventListener("mouseenter", this.showTooltip);
			this.removeEventListener("mouseleave", this.hideTooltip);
			this.removeEventListener("focus", this.showTooltip);
			this.removeEventListener("blur", this.hideTooltip);
		}
	}
	removeTooltip() {
		this.tooltipElement = void 0;
		this.arrowElement = void 0;
		if (this.cleanupAutoUpdate) {
			this.cleanupAutoUpdate();
			this.cleanupAutoUpdate = void 0;
		}
		this.removeEventListener("mouseenter", this.showTooltip);
		this.removeEventListener("mouseleave", this.hideTooltip);
		this.removeEventListener("focus", this.showTooltip);
		this.removeEventListener("blur", this.hideTooltip);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener("keydown", this.handleKeydown);
		this.removeEventListener("click", this.handleClick);
		this.removeTooltip();
		if (this.highlightTimeout) {
			clearTimeout(this.highlightTimeout);
			this.highlightTimeout = void 0;
		}
		this.classList.remove("highlight");
	}
	static {
		this.styles = css`

        :host {

            font-family: var( --thermal-font-family );
            font-size: calc( var( --thermal-fs ) * .8);
            line-height: var( --thermal-line-height );
        
            --color: var( --thermal-foreground );
            --color-hover: var( --color );

            --bg: var( --thermal-slate-light );
            --bg-hover: var( --bg );

            --border-width: var(--thermal-border-width);
            --border-style: var(--thermal-border-style);
            --border-color: var( --thermal-slate );
            --border-color-hover: var( --border-color );

            --radius: var(--thermal-radius);
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
            
            --padding: .5em .7em;
            --icon-size: 1em;
            --gap: .5em;
            --opacity: 1;
            --letter-spacing: normal;

            --cursor: pointer;
            --transition-duration: .15s;

            --tooltip-bg: var(--thermal-foreground, black);
            --tooltip-color: var( --thermal-background, white);
            --tooltip-padding: 0.5em 0.75em;
            --tooltip-border-radius: var(--thermal-radius, 4px);
            --tooltip-font-size: 0.9em;
            --tooltip-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        }



        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 0;
            gap: var(--gap);
            vertical-align: middle;
            
            position: relative;

            margin: 0;
            padding: var(--padding);
            width: fit-content;
            box-sizing: border-box;

            border-width: var( --border-width );
            border-style: var( --border-style );
            border-color: var( --border-color );
            border-radius: var( --radius );
            
            background-color: var(--bg);
            color: var(--color);

            box-shadow: var( --shadow ); 
            
            cursor: var( --cursor );
            opacity: var( --opacity );
            
            --letter-spacing: var( --letter-spacing );
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;

            transition: all var(--transition-duration) ease-in-out;

            /* Focus styling */
            outline: none;

            
        }

        :host([align="left"]) {
            justify-content: flex-start;
        }


        :host(:focus),
        :host(:focus-visible),
        :host(:hover) {
            outline: none;
            box-shadow: var( --shadow-hover );
            background-color: var(--bg-hover);
            color: var(--color-hover);
            border-color: var( --border-color-hover );
        }

        svg,
        span {
            vertical-align: middle;
            display: inline-block;
        }



        :host([disabled=true]),
        :host([disabled="true"])
        :host([disabled="true"]:hover),
        :host([disabled="true"]:focus) {

            
            color: color-mix(in srgb, var(--color) 50%, transparent);
            background: color-mix(in srgb, var(--bg) 50%, transparent);
            border-color: color-mix(in srgb, var(--border-color) 50%, transparent);
            --cursor: not-allowed;
            --shadow: none;
            --shadow-hover: none;

            button {
                outline: 0 !important;
                pointer-events: none;
            }
        }


        :host([interactive="false"]),
        :host([interactive=false]),
        :host([interactive="false"]:hover),
        :host([interactive=false]:hover),
        :host([interactive="false"]:focus),
        :host([interactive=false]:focus) {
            --shadow-hover: none;
            --cursor: text;
            --color-hover: var( --color );
            --bg-hover: var( --bg );
        }





        :host([size="sm"]),
        :host([size=sm]) {
            --padding: .1em .2em;
            line-height: 1.2;
            --letter-spacing: 0.5px;
            font-size: .7em;
        }

        :host([size="lg"]),
        :host([size=lg]) {
            --padding: .5em .7em;
            line-height: 1.2;
            font-size: 1em;
        }

        :host([size="xl"]),
        :host([size=xl]) {
            line-height: 1.2;
            font-size: 2em;
        }

        :host([plain="true"]),
        :host([plain=true]) {
            --border-color: transparent;
            --border-color-hover: transparent;
            --border-width: 0px;
            border: none !important;
        }







        :host([variant="primary"]),
        :host([variant=primary]) {
            
            --color: var( --thermal-background );
            --color-hover: var( --thermal-background );
            
            --bg: var( --thermal-primary );
            --bg-hover: var( --thermal-primary-dark );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );

        }

        :host([variant="foreground"]),
        :host([variant=foreground]) {

            --color: var( --thermal-background );
            --color-hover: var( --thermal-background );
            
            --bg: var( --thermal-foreground );
            --bg-hover: var( --thermal-slate-dark );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
        }


        :host([variant="background"]),
        :host([variant=background]) {

            --color: var( --thermal-foreground );
            --color-hover: var( --thermal-foreground );
            
            --bg: var( --thermal-background );
            --bg-hover: var( --bg );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
        }



        :host([variant="text"]),
        :host([variant=text]) {

            --bg: transparent;
            --bg-hover: transparent;

            --border-color: transparent;
            --border-color-hover: transparent;

            --border-width: 0px;
            border: none !important;

            --shadow: none;
            --shadow-hover: none;

            --padding: 0px;
            --letter-spacing: normal;
        }

        



        .btn-icon {
            width: 1.3em;
        }


        /* Global tooltip styles */

        .thermal-tooltip {
            background-color: var(--tooltip-bg, #334155);
            color: var(--tooltip-color, white);
            padding: var(--tooltip-padding, 0.5em 0.75em);
            border-radius: var(--tooltip-border-radius, 4px);
            font-size: var(--tooltip-font-size, 1em);
            box-shadow: var(--tooltip-box-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));
            z-index: 9999;
            pointer-events: none;
            word-wrap: break-word;
            font-size: calc( var( --thermal-fs ) * 0.8 );
        }

        .thermal-tooltip-arrow {
            position: absolute;
            width: 8px;
            height: 8px;
            background: inherit;
            transform: rotate(45deg);
        }

        .prefix {
            font-weight: bold;
            padding-right: 0.25em;
        }

        .badge {
            position: absolute;
            top: 0;
            right: 0;
            width: .5em;
            height: .5em;
            background: red;
            border-radius: 50%;
        }

        /* highlight animation for attention-grabbing effect */
        @keyframes thermal-highlight {
            0%,100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        :host(.highlight) {
            animation: thermal-highlight 0.4s ease-in-out infinite;
            box-shadow: var(--thermal-shadow);
        }

    `;
	}
	renderBadge() {
		if (!this.badge) return nothing;
		return html`<span class="badge" style="background-color: ${this.badge}"></span>`;
	}
	/**
	* Apply a temporary highlight animation to the button. The animation
	* will pulse the element with a gentle scale up/down effect for the
	* specified duration (milliseconds).
	*/
	highlight(durationMs) {
		if (durationMs <= 0) return;
		if (this.highlightTimeout) {
			clearTimeout(this.highlightTimeout);
			this.highlightTimeout = void 0;
		}
		this.classList.add("highlight");
		const cleanup = () => {
			this.classList.remove("highlight");
			if (this.highlightTimeout) {
				clearTimeout(this.highlightTimeout);
				this.highlightTimeout = void 0;
			}
			this.removeEventListener("mouseenter", cleanup);
			this.removeEventListener("focus", cleanup);
		};
		this.addEventListener("mouseenter", cleanup);
		this.addEventListener("focus", cleanup);
		this.highlightTimeout = window.setTimeout(cleanup, durationMs);
	}
	render() {
		let icon = nothing;
		if (this.icon && this.icon in icons) {
			const i = icons[this.icon];
			if (typeof i[this.iconStyle] === "function") icon = i[this.iconStyle]("btn-icon");
		}
		let tooltipHtml = nothing;
		if (this.tooltip) tooltipHtml = html`
                <div
                    class="thermal-tooltip"
                    style="position: absolute; top: 0; left: 0; visibility: hidden; opacity: 0; transition: opacity 0.2s ease-in-out;"
                    @mouseenter=${this.showTooltip}
                    @mouseleave=${this.hideTooltip}
                    @focus=${this.showTooltip}
                    @blur=${this.hideTooltip}
                    ${ref((el) => {
			this.tooltipElement = el;
		})}
                >
                    ${this.tooltip}
                    <div class="thermal-tooltip-arrow" ${ref((el) => {
			this.arrowElement = el;
		})}></div>
                </div>
            `;
		return html`
            ${unsafeSVG(icon)}${this.pre ? html`<span class="prefix">${this.pre}</span>` : nothing}<slot></slot>
            ${tooltipHtml}
            ${this.renderBadge()}
        `;
	}
};
__decorate([property({
	type: String,
	attribute: "tooltip-placement"
})], ThermalBtnElement.prototype, "tooltipPlacement", void 0);
__decorate([property({ type: String })], ThermalBtnElement.prototype, "pre", void 0);
__decorate([property({
	type: String,
	attribute: true,
	reflect: true
})], ThermalBtnElement.prototype, "variant", void 0);
__decorate([property({
	type: String,
	attribute: true,
	reflect: true
})], ThermalBtnElement.prototype, "size", void 0);
__decorate([property({ type: String })], ThermalBtnElement.prototype, "icon", void 0);
__decorate([property({ type: String })], ThermalBtnElement.prototype, "iconStyle", void 0);
__decorate([property({
	type: String,
	converter: booleanConverter(false)
})], ThermalBtnElement.prototype, "disabled", void 0);
__decorate([property({
	type: String,
	converter: booleanConverter(false)
})], ThermalBtnElement.prototype, "interactive", void 0);
__decorate([property({
	type: Boolean,
	attribute: true
})], ThermalBtnElement.prototype, "plain", void 0);
__decorate([property({ type: String })], ThermalBtnElement.prototype, "tooltip", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalBtnElement.prototype, "tabindex", void 0);
__decorate([property({
	type: String,
	attribute: "badge",
	reflect: true
})], ThermalBtnElement.prototype, "badge", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalBtnElement.prototype, "align", void 0);
ThermalBtnElement = __decorate([customElement("thermal-btn")], ThermalBtnElement);

//#endregion
//#region src/ui/Dialog.ts
let ThermalDialogElement = class ThermalDialogElement extends LitElement {
	constructor(..._args) {
		super(..._args);
		this.button = t(T.close);
		this.dialogRef = createRef();
		this.closeButtonRef = createRef();
		this.invokerRef = createRef();
		this.isFullscreen = false;
		this._open = false;
	}
	static {
		this.shadowRootOptions = {
			...LitElement.shadowRootOptions,
			mode: "open"
		};
	}
	get open() {
		return this._open;
	}
	setClose() {
		this.dialogRef.value?.close();
		window.document.body.style.removeProperty("overflow-y");
		window.document.body.style.removeProperty("height");
		this.removeAttribute("open");
		this._open = false;
		if (this.onCloseEveryTime) this.onCloseEveryTime();
	}
	setOpen() {
		this.dialogRef.value?.showModal();
		window.document.body.style.overflowY = "hidden";
		window.document.body.style.height = "100vh";
		this.setAttribute("open", "true");
		this._open = true;
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "open") if (value === "true") this.setOpen();
		else this.setClose();
	}
	connectedCallback() {
		super.connectedCallback();
	}
	static {
		this.styles = css`

        :host {

            display: contents;

        }

        .dialog {
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
            border-style: var( --thermal-border-style );
            border-radius: var( --thermal-radius );
            border-color: var( --thermal-slate );
            border-width: var(--thermal-border-width);
            padding: calc( var( --thermal-gap ) * 1.5 );
            font-size: var( --thermal-fs-small );

            &::backdrop {
                backdrop-filter: blur(3px);
            }

            min-width: 150px;
            box-sizing: border-box;

            @media ( min-width: 300px ) {
                min-width: 250px;
            }

            @media ( min-width: 600px ) {
                min-width: 450px;
            }
        }

        .dialog-header {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between; 
        }

        .dialog-title {
            margin: 0;
            padding: 0;
        }

        .dialog-content {
            padding: var( --thermal-gap ) 0;
            white-space: normal;
        }

        .dialog-footer {

            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;

        }

        

        .dialog-close {

            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: var( --thermal-foreground );
            cursor: pointer;

            width: calc( var( --thermal-gap ) * 1.5);

            &:hover {
                color: var( --thermal-primary );
            }
        
        }

        :host([is-fullscreen="true"][open]) .dialog {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            display: grid;
            grid-template-rows: auto 1fr auto;

            .dialog-content {
                overflow: auto;
            }
        }

        
    
    `;
	}
	render() {
		return html`
            <slot name="invoker" ${ref(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${ref(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${ref(this.closeButtonRef)} @click=${this.setClose}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                    </button>
                
                
                </header>
                	
                <div class="dialog-content">
                    ${this._open ? html`<slot name="content"></slot>` : nothing}
                </div>

                <div class="dialog-footer">
                    <slot name="button"></slot>
                    <thermal-btn variant="foreground" @click=${async () => {
			if (this.beforeClose) {
				if (await this.beforeClose()) this.setClose();
			} else this.setClose();
		}}>
                        ${this.button}
                    </thermal-btn>
                </div>
                
            
            </dialog>
        `;
	}
	async closeFromTheOutside() {
		if (this.beforeClose) {
			if (await this.beforeClose()) this.setClose();
		} else this.setClose();
	}
};
__decorate([property({
	type: String,
	reflect: false
})], ThermalDialogElement.prototype, "button", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false),
	attribute: "is-fullscreen"
})], ThermalDialogElement.prototype, "isFullscreen", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalDialogElement.prototype, "label", void 0);
__decorate([property({ type: Object })], ThermalDialogElement.prototype, "beforeClose", void 0);
__decorate([state()], ThermalDialogElement.prototype, "_open", void 0);
__decorate([property({ type: Object })], ThermalDialogElement.prototype, "onCloseEveryTime", void 0);
ThermalDialogElement = __decorate([customElement("thermal-dialog")], ThermalDialogElement);

//#endregion
//#region src/ui/Dropdown.ts
let ThermalDropdownElement = class ThermalDropdownElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.dropdownRef = createRef();
		this.invokerRef = createRef();
		this.optionsRef = createRef();
		this.isOpen = "close";
		this.interactive = "on";
	}
	static {
		this.shadowRootOptions = { ...LitElement.shadowRootOptions };
	}
	setOpen() {
		this.isOpen = "open";
	}
	setClose() {
		this.isOpen = "close";
	}
	toggle() {
		if (this.interactive === "off") return;
		if (this.isOpen === "open") this.isOpen = "close";
		else this.isOpen = "open";
	}
	connectedCallback() {
		super.connectedCallback();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
	}
	placeOptions() {
		if (!this.invokerRef.value || !this.optionsRef.value) return;
		computePosition(this.invokerRef.value, this.optionsRef.value, {
			middleware: [
				offset(2),
				flip(),
				inline(),
				shift()
			],
			placement: "bottom-start",
			strategy: "fixed"
		}).then(({ x, y }) => {
			if (this.optionsRef.value) {
				this.optionsRef.value.style.left = `${x}px`;
				this.optionsRef.value.style.top = `${y}px`;
			}
		});
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("isOpen")) this.placeOptions();
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this._options.forEach((option) => {
			option.childNodes.forEach((child) => child.addEventListener("click", () => {
				this.setClose();
			}));
		});
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "isopen") if (value === "open") {
			this.optionsRef.value?.classList.add("dropdown-options__show");
			this.dropdownRef.value?.classList.add("dropdown__open");
		} else {
			this.optionsRef.value?.classList.remove("dropdown-options__show");
			this.dropdownRef.value?.classList.remove("dropdown__open");
		}
	}
	static {
		this.styles = css`

        .mayNot {
            opacity: .5;
            cursor: not-allowed;
        }

        .dropdown {
            width: max-content;
        }

        .dropdown-invoker {
            width: max-content;
            display: flex;
        }

        .dropdown-invoker-wrapper {
            display: flex;
            align-items: center;
        }

        .dropdown-invoker-wrapper-icon {
            width: calc( var( --thermal-gap ) * .856 );
            line-height: 0;
            padding-left: calc( var( --thermal-gap ) * .5 );
        }

        .dropdown-options {

            z-index: 9999;

            width: max-content;
            /** position: absolute; */
            position: fixed;
            top: 0;
            left: 0;
            
            padding: 5px 10px;

            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );

            background-color: var( --thermal-slate-light );

            box-shadow: var( --thermal-shadow );

            display: none;

            ::slotted( div:not(:last-child) ) {
                margin-bottom: calc( var( --thermal-gap ) * .5 );
            }

        }

        .dropdown-options__show {
            display: block;
        }

        .clicker {
            display: none;
        }

        .dropdown__open {
        
            .clicker {
                z-index: 9998;
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
            }
        }

        slot[name="option"]::slotted(*) {

            width: 100%;

            margin-top: 5px;
            margin-bottom: 5px;
            width: 100%;

        }


    
    `;
	}
	render() {
		const invokerClasses = {
			"dropdown-invoker": true,
			may: this.interactive === "on",
			mayNot: this.interactive === "off"
		};
		const disabled = this.interactive === "off" ? "true" : "false";
		return html`

            <div class="dropdown" ${ref(this.dropdownRef)}>
                <thermal-btn 
                    ${ref(this.invokerRef)} 
                    class="${classMap(invokerClasses)}" 
                    @click=${this.toggle.bind(this)} 
                    variant=${ifDefined(this.variant)}
                    size=${ifDefined(this.size)}
                    ?plain=${this.plain}
                    disabled=${disabled}
                    tooltip="${this.tooltip !== void 0 ? this.tooltip : ""}"
                    part="invoker"
                >
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">
                        ${this.isOpen === "close" ? html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>` : html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-btn>
                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${ref(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        `;
	}
};
__decorate([queryAssignedElements({ slot: "option" })], ThermalDropdownElement.prototype, "_options", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalDropdownElement.prototype, "isOpen", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], ThermalDropdownElement.prototype, "interactive", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalDropdownElement.prototype, "variant", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], ThermalDropdownElement.prototype, "size", void 0);
__decorate([property({ type: String })], ThermalDropdownElement.prototype, "plain", void 0);
__decorate([property({
	type: String,
	attribute: true
})], ThermalDropdownElement.prototype, "tooltip", void 0);
ThermalDropdownElement = __decorate([customElement("thermal-dropdown")], ThermalDropdownElement);

//#endregion
//#region src/ui/Dropin.ts
let ThermalDropinElement = class ThermalDropinElement extends AbstractThermalElement {
	static {
		this.styles = css`
    
        :host {
            display: block;
            box-sizing: border-box;

            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);

            

            border: var(--thermal-border-width) var(--thermal-slate)var(--thermal-border-style);
            border-radius: var(--thermal-radius);

            transition: all .5s ease-in-out;

            position: relative;
            overflow: hidden;

            cursor: pointer;
            
        }

        .bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transition: all .3s ease-in-out;

            background: radial-gradient(circle, var(--thermal-slate-light) 0%, var(--thermal-slate) 100%);
        }

        .content {
            position: relative;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            padding: var(--thermal-gap);
            box-sizing: border-box;
        }

        :host {
        
            &:hover,
            &:focus {
            
                .bg {
                    transform: scale(1.05);
                }
            
            }
        
        }

        :host(:hover),
        :host(:focus) {
        
            .bg {
                transform: scale(1.05);
            }

        
        }
    
    `;
	}
	render() {
		return html`
            <div class="bg"></div>
            <div class="content">
                <div>Thermal Dropin Component</div>
            </div>
        `;
	}
};
__decorate([property({ type: String })], ThermalDropinElement.prototype, "prompt", void 0);
ThermalDropinElement = __decorate([customElement("thermal-dropin")], ThermalDropinElement);

//#endregion
//#region src/ui/Expandable.ts
let ThermalExpandableElement = class ThermalExpandableElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.closeIcon = false;
		this.iconStyle = "outline";
		this.expanded = false;
	}
	static {
		this.styles = css`
:host {
    --color: var(--thermal-foreground);
    --background: var(--thermal-slate-light);
    --font-size: var(--thermal-fs);
    --border-color: var(--thermal-slate);
    --border-radius: var(--thermal-radius);
    --display: block;
    --position: relative;
    --width: 100%;
    --padding: var(--thermal-gap);
    --spacing: var(--thermal-gap);
    --box-shadow: none;

    font-size: var(--font-size);
    color: var(--color);
}

aside.content {

    display: none;
    position: var(--position);

    box-sizing: border-box;
    width: var(--width);
    box-sizing: border-box;

    background: var(--background);
    border: var(--thermal-border-width) var(--thermal-border-style) var(--border-color);
    border-radius: var(--border-radius);
    padding: var(--padding);
    box-shadow: var(--box-shadow);

}

:host([expanded="true"]) aside.content {
    display: var(--display);
    margin-top: var(--spacing);
}

thermal-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
}
`;
	}
	render() {
		return html`<thermal-btn
    .variant=${ifDefined(this.expanded && this.variantExpanded ? this.variantExpanded : this.variant)}
    .size=${ifDefined(this.size)}
    .icon=${ifDefined(this.icon)}
    .iconStyle=${this.iconStyle}
    .disabled=${ifDefined(this.disabled)}
    .plain=${ifDefined(this.plain)}
    .tooltip=${ifDefined(this.tooltip)}
    .interactive=${ifDefined(this.interactive)}
    @click=${() => this.expanded = !this.expanded}
>${ifDefined(this.label)}${this.closeIcon && this.expanded ? html`<thermal-icon
    icon="close"
    variant="micro"
></thermal-icon>` : nothing}</thermal-btn>
<aside class="content">
    <slot></slot>
</aside>
`;
	}
};
__decorate([property({ type: String })], ThermalExpandableElement.prototype, "label", void 0);
__decorate([property({
	attribute: true,
	reflect: true,
	converter: booleanConverter(false)
})], ThermalExpandableElement.prototype, "closeIcon", void 0);
__decorate([property({
	type: String,
	attribute: true,
	reflect: true
})], ThermalExpandableElement.prototype, "variant", void 0);
__decorate([property({
	type: String,
	attribute: true,
	reflect: true
})], ThermalExpandableElement.prototype, "variantExpanded", void 0);
__decorate([property({
	type: String,
	attribute: true,
	reflect: true
})], ThermalExpandableElement.prototype, "size", void 0);
__decorate([property({ type: String })], ThermalExpandableElement.prototype, "icon", void 0);
__decorate([property({ type: String })], ThermalExpandableElement.prototype, "iconStyle", void 0);
__decorate([property({
	type: String,
	converter: booleanConverter(false)
})], ThermalExpandableElement.prototype, "disabled", void 0);
__decorate([property({
	type: String,
	converter: booleanConverter(false)
})], ThermalExpandableElement.prototype, "interactive", void 0);
__decorate([property({
	type: Boolean,
	attribute: true
})], ThermalExpandableElement.prototype, "plain", void 0);
__decorate([property({ type: String })], ThermalExpandableElement.prototype, "tooltip", void 0);
__decorate([property({
	converter: booleanConverter(false),
	reflect: true
})], ThermalExpandableElement.prototype, "expanded", void 0);
ThermalExpandableElement = __decorate([customElement("thermal-expandable")], ThermalExpandableElement);

//#endregion
//#region src/ui/Field.ts
let ThermalFieldElement = class ThermalFieldElement extends LitElement {
	static {
		this.styles = css`
    
        :host {

            display: table-row;
            width: 100%;
            font-size: var( --thermal-fs );

        }

        .cell {

            display: table-cell;
            padding: calc( var( --thermal-gap ) * .5 );
        
        }

        .label {

        }

        .content {

        }

        .hint {
            font-size: calc( var( --thermal-fs-sm ) * .75 );
            padding-top: .5em;
            opacity: .5;
            max-width: 300px;
        }

    `;
	}
	render() {
		return html`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint && html`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `;
	}
};
__decorate([property({ type: String })], ThermalFieldElement.prototype, "label", void 0);
__decorate([property({ type: String })], ThermalFieldElement.prototype, "hint", void 0);
ThermalFieldElement = __decorate([customElement("thermal-field")], ThermalFieldElement);

//#endregion
//#region src/ui/Icon.ts
let ThermalIconElement = class ThermalIconElement extends AbstractThermalElement {
	connectedCallback() {
		super.connectedCallback();
		this.updateIcon();
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		this.updateIcon();
	}
	updateIcon() {
		if (this.icon === void 0 || this.icon.trim() === "" || this.variant === void 0 || this.variant.trim() === "") {
			this.element = void 0;
			return;
		} else {
			const factory = icons[this.icon && this.icon.trim() !== "" ? this.icon : false];
			if (factory) {
				if (this.variant in factory) {
					const fn = factory[this.variant];
					this.element = fn(this.classes, this.css);
				}
			}
		}
	}
	render() {
		if (!this.element) return nothing;
		else return html`${unsafeSVG(this.element)}`;
	}
};
__decorate([property({
	type: String,
	reflect: true
})], ThermalIconElement.prototype, "icon", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalIconElement.prototype, "variant", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalIconElement.prototype, "classes", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalIconElement.prototype, "css", void 0);
ThermalIconElement = __decorate([customElement("thermal-icon")], ThermalIconElement);

//#endregion
//#region src/ui/Loading.ts
let ThermalLoadingElement = class ThermalLoadingElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.loaded = false;
		this.loading = true;
		this.bordercolor = "var(--thermal-slate)";
		this.bgcolor = "var(--thermal-slate-light)";
		this.textcolor = "var(--thermal-slate-dark)";
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		this.style.borderColor = this.bordercolor;
		this.style.backgroundColor = this.bgcolor;
		this.style.color = this.textcolor;
	}
	static {
		this.styles = css`
    
        :host {
            font-size: var(--thermal-fs);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: .5em;
            width: 100%;
            min-height: 300px;

            border: var(--thermal-border-width) dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);
            
            box-sizing: border-box;
            padding: var(--thermal-gap);
            color: var(--thermal-slate-dark);
            background: var(--thermal-slate-light);
            
        }
    
    `;
	}
	render() {
		const content = [];
		if (this.loading) content.push(html`<thermal-spinner style="display: block"></thermal-spinner>`);
		else {
			content.push(html`<thermal-icon icon="${this.icon}" variant="${this.iconStyle}" style="height: 2em; aspect-ratio: 1 / 1; display: block;"></thermal-icon>`);
			if (this.message) content.push(html`<div>${this.message}</div>`);
		}
		content.push(html`<slot></slot>`);
		return content;
	}
};
__decorate([state()], ThermalLoadingElement.prototype, "loaded", void 0);
__decorate([property({
	type: Boolean,
	reflect: true
})], ThermalLoadingElement.prototype, "loading", void 0);
__decorate([property({ type: String })], ThermalLoadingElement.prototype, "icon", void 0);
__decorate([property({ type: String })], ThermalLoadingElement.prototype, "iconStyle", void 0);
__decorate([property({ type: String })], ThermalLoadingElement.prototype, "message", void 0);
__decorate([property({ type: String })], ThermalLoadingElement.prototype, "bordercolor", void 0);
__decorate([property({ type: String })], ThermalLoadingElement.prototype, "bgcolor", void 0);
__decorate([property({ type: String })], ThermalLoadingElement.prototype, "textcolor", void 0);
ThermalLoadingElement = __decorate([customElement("thermal-poster")], ThermalLoadingElement);

//#endregion
//#region src/ui/Radio.ts
let ThermalRadioElement = class ThermalRadioElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.type = "radio";
		this.checked = false;
	}
	handleChange(event) {
		this.checked = event.target.checked;
		if (this.onChange) this.onChange(this.checked);
		this.requestUpdate();
	}
	updated(changedProperties) {
		if (changedProperties.has("checked")) {
			const input = this.shadowRoot?.querySelector("input");
			if (input) input.checked = this.checked;
		}
	}
	handleClick(event) {
		event.preventDefault();
		this.checked = !this.checked;
		if (this.onChange) this.onChange(this.checked);
		this.requestUpdate();
	}
	connectedCallback() {
		super.connectedCallback();
	}
	static {
		this.styles = css`
    
        :host {
            display: contents;
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }

        .radio {

            display: flex;
            align-items: center;
            gap: .25em;

            cursor: pointer;

            input,
            span {
                display: block;
            }

            span {
                font-size: .8em;
            }

            input[type="radio"] {
                transform: translateY(-.15em);
                pointer-events: none;
            }
        }

        input {    
            pointer-events: none;
        }
    
    `;
	}
	render() {
		return html`
            <label class="radio" @click=${this.handleClick}>
                <input
                    type="${this.type}"
                    checked="${this.checked}"
                />
                <span><slot></slot></span>
            </label>
        `;
	}
};
__decorate([property({
	type: String,
	reflect: true
})], ThermalRadioElement.prototype, "type", void 0);
__decorate([property({
	type: Boolean,
	reflect: true
})], ThermalRadioElement.prototype, "checked", void 0);
__decorate([property({ type: Function })], ThermalRadioElement.prototype, "onChange", void 0);
ThermalRadioElement = __decorate([customElement("thermal-radio")], ThermalRadioElement);

//#endregion
//#region src/ui/Slot.ts
let ThermalSlotElement = class ThermalSlotElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this._slottedElements = [];
	}
	get slottedElements() {
		return Array.from(this.children);
	}
	handleSlotChange(e) {
		this._slottedElements = e.target.assignedElements();
		this.requestUpdate();
	}
	static {
		this.styles = css`

        :host {
            font-size: var( --thermal-fs );
        }
    
        h3 {

            margin: 0 0 .5em 0;
            padding: 0;
            
            font-weight: normal;
            font-size: .7em;
            text-transform: uppercase;

            color: var(--thermal-slate);
            
            display: flex;
            align-items: center;
            gap: .5em;

            &::after {
                content: "";
                flex: 1;
                height: var(--thermal-border-width);
                background: var(--thermal-slate-light);
            }

        }

        .content {
            display: flex;
            flex-wrap: wrap;
            gap: .5em;
        }

        :host(:hover) {
            h3 {
                color: var(--thermal-foreground);
                &::after {
                    background: var(--thermal-slate);
                }
            }


        }
    
    `;
	}
	render() {
		if (this.slottedElements.length === 0) return nothing;
		return html`<section>

            ${this.label ? html`<h3>${this.label}</h3>` : nothing}
            <div class="content">
                <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
        </section>
        `;
	}
};
__decorate([property()], ThermalSlotElement.prototype, "label", void 0);
__decorate([state()], ThermalSlotElement.prototype, "_slottedElements", void 0);
ThermalSlotElement = __decorate([customElement("thermal-slot")], ThermalSlotElement);

//#endregion
//#region src/ui/Spinner.ts
let ThermalSpinnerElement = class ThermalSpinnerElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.color = "var(--thermal-primary)";
	}
	static {
		this.shadowRootOptions = {
			...LitElement.shadowRootOptions,
			mode: "open"
		};
	}
	static {
		this.styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            text-align: center;
        }
        .spinner {
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 5px solid var(--thermal-primary);
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .message {
            margin-top: var(--thermal-gap);
            color: var(--thermal-slate-dark);
        }
    `;
	}
	render() {
		return html`
            <div class="spinner" style="border-color: ${this.color}; border-top-color: transparent;"></div>
            ${this.message ? html`<div class="message">${this.message}</div>` : nothing}
        `;
	}
};
__decorate([property({ type: String })], ThermalSpinnerElement.prototype, "message", void 0);
__decorate([property({ type: String })], ThermalSpinnerElement.prototype, "color", void 0);
ThermalSpinnerElement = __decorate([customElement("thermal-spinner")], ThermalSpinnerElement);

//#endregion
//#region src/ui/Tip.ts
let ThermalTipElement = class ThermalTipElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.icon = "bulb";
		this.iconStyle = "outline";
	}
	static {
		this.styles = css`
:host {

    --color: var(--thermal-foreground);
    --background: var(--thermal-slate-light);
    --font-size: var(--thermal-fs);
    --border-color: var(--thermal-slate);
    --icon-size: 1.5em;
    --radius: var(--thermal-radius);
    --padding: .5em;
    --spacing: var(--thermal-gap);
    --align-items: flex-start;

    font-size: var(--font-size);
    color: var(--color);
    background: var(--background);
    
    border: var(--thermal-border-width) var(--thermal-border-style) var(--border-color);
    border-radius: var(--radius);

    width: 100%;
    box-sizing: border-box;
    padding: var(--padding);

    display: flex;
    align-items: var(--align-items);
    gap: var(--spacing);

}

thermal-icon {
    display: block;
    width: var(--icon-size);
    height: var(--icon-size);
    color: var(--border-color);
}

:host( [variant="info"] ) {
    --background: #bed5fdff;
    --color: #0e46a1;
    --border-color: var(--color);
}

:host([variant="error"]) {
    --background: #e2b1b1ff;
    --color: #a10e0e;
    --border-color: var(--color);
}
`;
	}
	render() {
		return html`<thermal-icon 
    icon=${this.icon} 
    variant=${this.iconStyle}
></thermal-icon>
<div class="tip-content">
    <slot></slot>
</div>`;
	}
};
__decorate([property({ type: String })], ThermalTipElement.prototype, "icon", void 0);
__decorate([property({ type: String })], ThermalTipElement.prototype, "iconStyle", void 0);
ThermalTipElement = __decorate([customElement("thermal-tip")], ThermalTipElement);

//#endregion
//#region src/apps/AustralianApparentTemperature.ts
var VUNIT = /* @__PURE__ */ function(VUNIT) {
	VUNIT["mps"] = "mps";
	VUNIT["kph"] = "kph";
	return VUNIT;
}(VUNIT || {});
const converters = {
	fromAttribute(value) {
		if (typeof value === "string") {
			const trimmedValue = value.trim();
			if (trimmedValue.length > 0) return parseFloat(trimmedValue);
			else return;
		} else return;
	},
	toAttribute(value) {
		if (value !== void 0) return value.toString();
		else return;
	}
};
let AatAppElement = class AatAppElement extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.tRef = createRef();
		this.vRef = createRef();
		this.vunitsRef = createRef();
		this.haRef = createRef();
		this.vunits = VUNIT.mps;
	}
	kphToMps(kph) {
		return kph * .2778;
	}
	calculateE(h, t) {
		return h * (6.105 / 100) * Math.exp(17.27 * t / (237.7 + t));
	}
	calculateTa(t, e, v) {
		return t + .33 * e - .7 * v - 4;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		initLocalesInTopLevelElement(this);
		if (this.tRef.value) this.tRef.value.addEventListener("change", (event) => {
			const target = event.target;
			const value = parseFloat(target.value);
			if (!isNaN(value)) this.temperature = Math.min(100, Math.max(-275.4, value));
		});
		if (this.haRef.value) this.haRef.value.addEventListener("change", (event) => {
			const target = event.target;
			const value = parseFloat(target.value);
			if (!isNaN(value)) this.ha = Math.min(100, Math.max(0, value));
		});
		if (this.vRef.value) this.vRef.value.addEventListener("change", (event) => {
			const target = event.target;
			const value = parseFloat(target.value);
			if (!isNaN(value)) this.v = Math.max(0, value);
		});
	}
	processValueChange(_changedProperties, key) {
		if (_changedProperties.has(key)) {
			const newValue = this[key];
			const inputRef = this[`${key}Ref`];
			if (inputRef.value) if (newValue !== void 0 && newValue !== null) inputRef.value.value = newValue.toString();
			else inputRef.value.value = "";
			this.recalculateVa();
		}
	}
	recalculateVa() {
		if (this.temperature !== void 0 && this.ha !== void 0 && this.v !== void 0) {
			const v = this.vunits === VUNIT.mps ? this.v : this.kphToMps(this.v);
			const e = this.calculateE(this.ha, this.temperature);
			this.ta = this.calculateTa(this.temperature, e, v);
		} else this.ta = void 0;
	}
	shouldUpdate(_changedProperties) {
		super.shouldUpdate(_changedProperties);
		if (this.ha) {
			if (this.ha < 0) {
				this.ha = 0;
				if (this.haRef.value) this.haRef.value.value = "0";
			}
			if (this.ha > 100) {
				this.ha = 100;
				if (this.haRef.value) this.haRef.value.value = "100";
			}
		}
		return true;
	}
	willUpdate(_changedProperties) {
		super.willUpdate(_changedProperties);
		this.processValueChange(_changedProperties, "t");
		this.processValueChange(_changedProperties, "v");
		this.processValueChange(_changedProperties, "ha");
		if (_changedProperties.has("vunits")) {
			if (this.vunitsRef.value) {
				this.vunitsRef.value.value = this.vunits;
				this.recalculateVa();
			}
		}
	}
	static {
		this.styles = css`

        .table {
            display: table;
            width: 100%;
            border-collapse: collapse;
        }
    
        .field {

            width: 100%;
            display: table-row;

        }

        .column {
            display: table-cell;
            padding: calc( var(--thermal-gap) * .5 );
        }

        .column__label {
            text-align: right;
        }

        .column__value {
        
        }

        .input_wrapper {

            background: var( --thermal-background );

            width: 200px;
            padding: calc( var( --thermal-gap ) / 2 );

            border-radius: var( --thermal-radius );
        
        }

        input {

            font-size: var(--thermal-fs);
            width: 120px;
            text-align: right;
            border: 0;
            border-bottom: 1px var(--thermal-border-style)var( --thermal-slate-light );
            background: transparent;
            color: var( --thermal-foreground );

            -moz-appearance: textfield;

            &:focus {
                outline: 0;
                border-bottom: 1px var(--thermal-border-style)var( --thermal-primary );
            }
        
        }

        select, option, input {
            font-size: var(--thermal-fs);
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate-light );
            border-radius: var( --thermal-radius );
        }



        .result {

            padding: calc(var(--thermal-gap) * .7);
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            text-align: center;

            & > p {
                margin: 0;
                padding: calc( var( --thermal-gap ) * .25 );
            }

        }

        .result_value {
            font-weight: bold;
            font-size: calc( var(--thermal-fs) * 1.2 )
        }

        .result_label {
        }

        .result_comment {
            font-size: calc( var(--thermal-fs) * .8 )
        }

        .tabindex {
            border-radius: var( --thermal-radius );
            &:focus {
                outline: 3px var(--thermal-border-style)var(--thermal-primary);
            }
        }


    `;
	}
	renderNumberField(inputRef, id, label, unit, value, min, max, step, hint) {
		const u = typeof unit === "string" ? unsafeHTML(unit) : unit;
		return html`
            <div class="field">

                <div class="column column__label">
                    <label for=${id}>
                        ${label}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${ref(inputRef)} 
                            id=${id}
                            name=${id}
                            value=${ifDefined(value)}
                            min=${ifDefined(min)}
                            max=${ifDefined(max)}
                            step=${ifDefined(step)}
                            type="number"
                            @blur=${(event) => {
			const target = event.target;
			const value = target.value.trim();
			if (value === "" || value === void 0 || value === null) this[id] = void 0;
			else this[id] = parseFloat(target.value);
		}}
                        ></input>
                        <span>${u}</span>
                    </div>

                    ${hint ? html`<label for=${id}>${hint}</label>` : nothing}

                </div>

            </div>

            
        `;
	}
	renderResult(apparentTemperature, temperature) {
		const diff = apparentTemperature - temperature;
		const prop = {
			diff: Math.abs(diff).toFixed(2),
			app: apparentTemperature.toFixed(2),
			t: temperature
		};
		const summary = t(T.apparenttemperatureverbose, prop);
		const comment = diff < 0 ? t(T.youfeelcolder, prop) : t(T.youfeelwarmer, prop);
		const result = apparentTemperature.toFixed(2);
		return html`<div class="result">

            <p class="result_label">${t(T.apparenttemperature)}</p>

            <p class="result_value">
                ${result} °C
            </p>

            <p class="result_comment">${summary}</p>

            <p class="result_comment">${comment}</p>
        
        </div>`;
	}
	render() {
		return html`
            <thermal-app 
                label=${t(T.apparenttemperature)} 
                author="LabIR Edu" 
                license="CC BY-SA 4.0"
            >

                <thermal-dialog label=${t(T.info)} slot="bar-pre">
                    <thermal-btn slot="invoker">${t(T.info)}</thermal-btn>
                    <div slot="content">
                        ${unsafeHTML(t(T.apparenttemperaturehint, { href: "https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature" }))}
                    </div>
                </thermal-dialog>

                ${this.t !== void 0 || this.v !== void 0 || this.ha !== void 0 ? html`<thermal-btn @click=${() => {
			this.temperature = void 0;
			this.ha = void 0;
			this.ta = void 0;
			this.v = void 0;
		}}>Reset</thermal-btn>` : nothing}


                <section class="table">

                ${this.renderNumberField(this.tRef, "temperature", t(T.airtemperature), "°C", this.temperature, -273.15, 100, .1)}

                ${this.renderNumberField(this.vRef, "v", t(T.windspeed), html`<select 
                    @change=${(event) => {
			this.vunits = event.target.value;
		}} 
                    value=${this.vunits}
                    ${ref(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`, this.v, 0, void 0, .1)}

                ${this.renderNumberField(this.haRef, "ha", t(T.relativeairhumidity), "%", this.ha, 0, 100, .1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta !== void 0 && this.temperature !== void 0 ? this.renderResult(this.ta, this.temperature) : nothing}
                </div>
                

            </thermal-app>
        `;
	}
};
__decorate([property({
	type: String,
	reflect: true,
	attribute: "t",
	converter: converters
})], AatAppElement.prototype, "temperature", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true,
	converter: converters
})], AatAppElement.prototype, "v", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true,
	converter: converters
})], AatAppElement.prototype, "ha", void 0);
__decorate([state()], AatAppElement.prototype, "ta", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], AatAppElement.prototype, "vunits", void 0);
__decorate([provide({ context: localeContext }), property({
	reflect: true,
	converter: localeConverter
})], AatAppElement.prototype, "locale", void 0);
AatAppElement = __decorate([customElement("apparent-temperature-aat")], AatAppElement);

//#endregion
//#region src/controls/AppInfoButton.ts
let AppInfoButton = class AppInfoButton extends AbstractThermalElement {
	static {
		this.styles = css`

        .content {
            color: var( --thermal-foreground );
        }

        hr {
            border-top-color: currentcolor;
            border-bottom-width: 0;
        }

        small {
            opacity: .5;
        }

        a {
            color: var( --thermal-primary );
        }

        .logo {
            max-width: 200px;
            margin: 0 auto;
            padding: var( --thermal-gap ) 0;
            svg {
                width: 100%;
                height: auto;
            }
        }

        .row {

            &:not(:last-child) {
                padding-bottom: var( --thermal-gap );
                padding-top: var( --thermal-gap );
            }
        
        }

        @media ( min-width: 700px ) {
            .row {

                display: flex;
                flex-wrap: wrap;

                margin: 0 calc( var( --thermal-gap ) * -1 );

                & > div {

                    box-sizing: border-box;
                    width: 50%;
                    padding: 0 var( --thermal-gap );

                }
            
            }
        
        }
    
    `;
	}
	render() {
		return html`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-btn slot="invoker">About</thermal-btn>
                <div slot="content">
                    <div class="content">
                        <div class="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="531.66" height="166.67" viewBox="0 0 531.66 166.67">
                                <g id="Vrstva_2" data-name="Vrstva 2">
                                    <g id="Podkres">
                                        <path
                                            d="M286.47,78.12c-1.77-1.54-4.43-2.32-8-2.32H261.56V95.59H278.5c3.54,0,6.2-.78,8-2.36s2.66-4.14,2.66-7.68S288.25,79.66,286.47,78.12Z" 
                                            fill="currentcolor"
                                            />
                                        <path
                                            d="M262,0,186,29.54h-.21V166.67h152V29.54H338ZM232.52,134.09H217.06V63.79h15.46Zm58.68,0a27.45,27.45,0,0,1-1.58-8c-.19-3.08-.49-6-.88-8.86-.53-3.67-1.64-6.36-3.35-8.07s-4.5-2.56-8.37-2.56H261.56v27.47H246.11V63.79H284a22.61,22.61,0,0,1,8.52,1.53A19.8,19.8,0,0,1,299,69.5a18.2,18.2,0,0,1,4.13,6.16,19.75,19.75,0,0,1,1.43,7.53A21.14,21.14,0,0,1,302,93.92a16.37,16.37,0,0,1-8.52,6.89v.2a11.89,11.89,0,0,1,4.73,2.41,13.28,13.28,0,0,1,3.05,3.84,17.8,17.8,0,0,1,1.72,4.87,42.51,42.51,0,0,1,.74,5.32c.07,1.12.13,2.43.2,3.94s.18,3,.35,4.63a30.6,30.6,0,0,0,.78,4.47,10.2,10.2,0,0,0,1.63,3.6Z"
                                            fill="currentcolor"
                                         />
                                        <path d="M414,63.79v13H376.89V91.85H411v12H376.89v17.23H414.8v13H361.43V63.79Z" fill="currentcolor" />
                                        <path
                                            d="M459.89,127.59a14.43,14.43,0,0,1-6.45,6,23.53,23.53,0,0,1-19.05-.4,20,20,0,0,1-7.14-6,27.21,27.21,0,0,1-4.23-8.72,36.59,36.59,0,0,1-1.43-10.23A34.4,34.4,0,0,1,423,98.3a25.75,25.75,0,0,1,4.23-8.42,20.53,20.53,0,0,1,16.89-8.07,20,20,0,0,1,8.61,1.92,15,15,0,0,1,6.45,5.66h.2V63.79h14v70.3H460.09v-6.5Zm-.59-25.15a14.68,14.68,0,0,0-2-5.12,11.34,11.34,0,0,0-3.69-3.6,10.83,10.83,0,0,0-5.71-1.38,11.33,11.33,0,0,0-5.81,1.38,10.93,10.93,0,0,0-3.79,3.64,16.39,16.39,0,0,0-2.07,5.17,27.93,27.93,0,0,0-.64,6.06,25.91,25.91,0,0,0,.69,5.91,16,16,0,0,0,2.22,5.26,12,12,0,0,0,3.84,3.74,10.29,10.29,0,0,0,5.56,1.43,11.12,11.12,0,0,0,5.76-1.38,10.36,10.36,0,0,0,3.69-3.69,16.42,16.42,0,0,0,2-5.27,31.24,31.24,0,0,0,.59-6.1A30.51,30.51,0,0,0,459.3,102.44Z" fill="currentcolor" />
                                        <path
                                            d="M518.37,134.09V127h-.29a15.75,15.75,0,0,1-6.9,6.4,20.37,20.37,0,0,1-8.66,2,24.39,24.39,0,0,1-9.21-1.48,13.32,13.32,0,0,1-5.66-4.18,16.59,16.59,0,0,1-2.9-6.6,40.82,40.82,0,0,1-.84-8.61V83.19h14v28.75q0,6.3,2,9.4t7,3.1q5.72,0,8.27-3.4t2.56-11.17V83.19h14v50.9Z" fill="currentcolor"/>
                                        <path d="M15.46,63.79v57.3H49.72v13H0V63.79Z" fill="currentcolor"/>
                                        <path
                                            d="M56.32,98.84a16.13,16.13,0,0,1,2.46-8.17,16.77,16.77,0,0,1,5.51-5.22,23.86,23.86,0,0,1,7.53-2.8,42.71,42.71,0,0,1,8.42-.84,57.28,57.28,0,0,1,7.78.54,23.87,23.87,0,0,1,7.19,2.12,14.2,14.2,0,0,1,5.31,4.38,12.23,12.23,0,0,1,2.07,7.43v26.49a53.68,53.68,0,0,0,.39,6.59,12.18,12.18,0,0,0,1.38,4.73H90.18a21.91,21.91,0,0,1-.64-2.41,20.76,20.76,0,0,1-.34-2.51A18.29,18.29,0,0,1,81.32,134a31.55,31.55,0,0,1-9.25,1.38,25,25,0,0,1-6.79-.89,15.64,15.64,0,0,1-5.52-2.75A13,13,0,0,1,56.07,127a15.91,15.91,0,0,1-1.33-6.79,14.81,14.81,0,0,1,1.53-7.14,12.72,12.72,0,0,1,3.94-4.48,17.47,17.47,0,0,1,5.51-2.51A58.91,58.91,0,0,1,72,104.75q3.15-.5,6.2-.79a36.91,36.91,0,0,0,5.42-.89,9.35,9.35,0,0,0,3.74-1.72,3.79,3.79,0,0,0,1.28-3.3,7.44,7.44,0,0,0-.74-3.59,5.45,5.45,0,0,0-2-2.07,7.7,7.7,0,0,0-2.85-1,22.69,22.69,0,0,0-3.5-.25,10.63,10.63,0,0,0-6.5,1.77c-1.57,1.19-2.49,3.15-2.75,5.91Zm32.29,10.34a6.25,6.25,0,0,1-2.22,1.23,22.33,22.33,0,0,1-2.85.74c-1,.2-2.09.36-3.2.49s-2.23.3-3.35.49a25.6,25.6,0,0,0-3.1.79,9.21,9.21,0,0,0-2.66,1.33,6.34,6.34,0,0,0-1.82,2.12,6.78,6.78,0,0,0-.69,3.25,6.61,6.61,0,0,0,.69,3.15,5.25,5.25,0,0,0,1.87,2,7.85,7.85,0,0,0,2.76,1,17.31,17.31,0,0,0,3.25.29,12.37,12.37,0,0,0,6.4-1.37,9.19,9.19,0,0,0,3.34-3.3,10.36,10.36,0,0,0,1.33-3.89,25.55,25.55,0,0,0,.25-3.15Z" fill="currentcolor"/>
                                        <path
                                            d="M127.4,63.79v25.6h.2a15,15,0,0,1,6.94-5.76,23.54,23.54,0,0,1,9.1-1.82A19.34,19.34,0,0,1,158,88.21a24.53,24.53,0,0,1,4.87,8.32,34.8,34.8,0,0,1,1.87,12.06,34.8,34.8,0,0,1-1.87,12.06A24.62,24.62,0,0,1,158,129a19.44,19.44,0,0,1-14.33,6.4,26.9,26.9,0,0,1-10-1.77,12.8,12.8,0,0,1-6.69-6h-.2v6.5H113.42V63.79ZM150,102.48a16.35,16.35,0,0,0-2.16-5.21,11.52,11.52,0,0,0-3.69-3.6,11.41,11.41,0,0,0-10.69,0,11.28,11.28,0,0,0-3.74,3.6,16.13,16.13,0,0,0-2.16,5.21,27.23,27.23,0,0,0-.69,6.21,26.72,26.72,0,0,0,.69,6.1,16.09,16.09,0,0,0,2.16,5.22,11.15,11.15,0,0,0,3.74,3.59,11.41,11.41,0,0,0,10.69,0,11.38,11.38,0,0,0,3.69-3.59,16.32,16.32,0,0,0,2.16-5.22,26.72,26.72,0,0,0,.69-6.1A27.23,27.23,0,0,0,150,102.48Z" fill="currentcolor" />
                                    </g>
                                </g>
                            </svg>
                    </div>
                    
                    <div style="text-align: center">
                        <p>A webapp reading thermal images from infrared cameras TIMI Edu.</p>
                        <p>version ${version$1}</p>
                    </div>


                    <hr />

                    <div class="row">

                        <div>
                            <h3>Source code</h3>
                            <p>
                                <a href="https://github.com/moichim/labir" target="_blank">github.com/moichim/labir</a>
                            </p>
                        </div>


                        <div>
                            <h3>Authors</h3>
                            <p>The code is being developed by the <a href="https://irt.zcu.cz/" target="_blank">Infrared technologies</a> research team at <a href="https://ntc.zcu.cz" target="_blank">NTC UWB</a> in Pilsen.</p>
                        </div>

                    </div>
                </div>
                </div>
            </thermal-dialog>

        `;
	}
};
AppInfoButton = __decorate([customElement("app-info-button")], AppInfoButton);

//#endregion
//#region src/apps/AbstractControlledApp.ts
const advancedPalettesContext = createContext("advanced-palettes");
const advancedPalettesSetterContext = createContext("advanced-palettes-setter");
var AbstractControlledApp = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.advancedPalettes = false;
		this.setAdvancedPalettes = (value) => {
			this.advancedPalettes = value;
		};
	}
};
__decorate([property({
	type: Boolean,
	reflect: true,
	attribute: "advanced-palettes",
	converter: booleanConverter(false)
}), provide({ context: advancedPalettesContext })], AbstractControlledApp.prototype, "advancedPalettes", void 0);
__decorate([provide({ context: advancedPalettesSetterContext })], AbstractControlledApp.prototype, "setAdvancedPalettes", void 0);

//#endregion
//#region src/hierarchy/providers/context/pngExportContext.ts
const pngExportWidthContext = createContext("pngExportWidthContext");
const pngExportWidthSetterContext = createContext("pngExportWidthSetterContext");
const pngExportFsContext = createContext("png-export-width-context");
const pngExportFsSetterContext = createContext("png-export-width-setter-context");
const pngExportAnalysisContext = createContext("pngExportAnalysisContext");
const pngExportAnalysisSetterContext = createContext("pngExportAnalysisSetterContext");
const pngExportScaleContext = createContext("pngExportScaleContext");
const pngExportScaleSetterContext = createContext("pngExportScaleSetterContext");
const pngExportFileNameContext = createContext("pngExportFileNameContext");
const pngExportFileNameSetterContext = createContext("pngExportFileNameSetterContext");
const pngExportFileDateContext = createContext("pngExportFileDateContext");
const pngExportFileDateSetterContext = createContext("pngExportFileDateSetterContext");
const pngExportLicenseContext = createContext("pngExportLicenseContext");
const pngExportLicenseSetterContext = createContext("pngExportLicenseSetterContext");
const pngExportColumnsContext = createContext("pngExportColumnsContext");
const pngExportColumnsSetterContext = createContext("pngExportColumnsSetterContext");
const pngExportGroupNameContext = createContext("pngExportGroupNameContext");
const pngExportGroupNameSetterContext = createContext("pngExportGroupNameSetterContext");
var BaseAppWithPngExportContext = class extends AbstractControlledApp {
	constructor(..._args) {
		super(..._args);
		this.pngWidth = 1200;
		this.pngWidthSetter = (value) => {
			this.pngWidth = value;
		};
		this.pngFs = 20;
		this.pngFsSetter = (value) => {
			this.pngFs = value;
		};
		this.pngAnalyses = true;
		this.pngExportAnalysesSetter = (value) => this.pngAnalyses = value;
		this.pngExportScale = true;
		this.pngExportScaleSetter = (value) => this.pngExportScale = value;
		this.pngExportLicense = true;
		this.pngExportLicenseSetter = (value) => this.pngExportLicense = value;
		this.pngExportFileName = false;
		this.pngExportFileNameSetter = (value) => this.pngExportFileName = value;
		this.pngExportFileDate = true;
		this.pngExportFileDateSetter = (value) => this.pngExportFileDate = value;
		this.pngExportColumns = 2;
		this.pngExportColumnsSetter = (value) => this.pngExportColumns = value;
		this.pngExportGroupName = true;
		this.pngExportGroupNameSetter = (value) => this.pngExportGroupName = value;
	}
};
__decorate([provide({ context: pngExportWidthContext })], BaseAppWithPngExportContext.prototype, "pngWidth", void 0);
__decorate([provide({ context: pngExportWidthSetterContext })], BaseAppWithPngExportContext.prototype, "pngWidthSetter", void 0);
__decorate([provide({ context: pngExportFsContext })], BaseAppWithPngExportContext.prototype, "pngFs", void 0);
__decorate([provide({ context: pngExportFsSetterContext })], BaseAppWithPngExportContext.prototype, "pngFsSetter", void 0);
__decorate([provide({ context: pngExportAnalysisContext })], BaseAppWithPngExportContext.prototype, "pngAnalyses", void 0);
__decorate([provide({ context: pngExportAnalysisSetterContext })], BaseAppWithPngExportContext.prototype, "pngExportAnalysesSetter", void 0);
__decorate([provide({ context: pngExportScaleContext })], BaseAppWithPngExportContext.prototype, "pngExportScale", void 0);
__decorate([provide({ context: pngExportScaleSetterContext })], BaseAppWithPngExportContext.prototype, "pngExportScaleSetter", void 0);
__decorate([provide({ context: pngExportLicenseContext })], BaseAppWithPngExportContext.prototype, "pngExportLicense", void 0);
__decorate([provide({ context: pngExportLicenseSetterContext })], BaseAppWithPngExportContext.prototype, "pngExportLicenseSetter", void 0);
__decorate([provide({ context: pngExportFileNameContext })], BaseAppWithPngExportContext.prototype, "pngExportFileName", void 0);
__decorate([provide({ context: pngExportFileNameSetterContext })], BaseAppWithPngExportContext.prototype, "pngExportFileNameSetter", void 0);
__decorate([provide({ context: pngExportFileDateContext })], BaseAppWithPngExportContext.prototype, "pngExportFileDate", void 0);
__decorate([provide({ context: pngExportFileDateSetterContext })], BaseAppWithPngExportContext.prototype, "pngExportFileDateSetter", void 0);
__decorate([provide({ context: pngExportColumnsContext })], BaseAppWithPngExportContext.prototype, "pngExportColumns", void 0);
__decorate([provide({ context: pngExportColumnsSetterContext })], BaseAppWithPngExportContext.prototype, "pngExportColumnsSetter", void 0);
__decorate([provide({ context: pngExportGroupNameContext })], BaseAppWithPngExportContext.prototype, "pngExportGroupName", void 0);
__decorate([provide({ context: pngExportGroupNameSetterContext })], BaseAppWithPngExportContext.prototype, "pngExportGroupNameSetter", void 0);

//#endregion
//#region src/controls/manager/ManagerExportPanel.ts
let ManagerExportPanel = class ManagerExportPanel extends AbstractThermalElement {
	renderRow(label, content, hint) {
		return html`<thermal-field label="${label}">
                <div>${content}</div>
                ${hint ? hint : nothing}
            </thermal-field>`;
	}
	renderGroup(label, content) {
		return html`<fieldset>
            <legend>${label}</legend>
            ${content}
        </fieldset>`;
	}
	formatTip(value) {
		return value ? html`<div class="hint">${value}</div>` : "";
	}
	renderCheckbox(key, label, value, onChange) {
		return html`<div>${html`<input name="${key}" type="checkbox" ?checked="${value}" @input=${(event) => {
			const value = event.target.checked;
			onChange(value);
		}}>`}<label for="${key}">${label}</label></div>`;
	}
	renderSlider(key, label, value, unit, min, max, step, onChange, hint) {
		const content = html`<input 
                name="${key}"
                value="${value}"
                min="${min}"
                max="${max}"
                step="${step}"
                type="range"
                @input="${(event) => {
			onChange(Math.min(max, Math.max(0, parseFloat(event.target.value))));
		}}"
            ></input>`;
		const help = html`<strong>${value} ${unit}</strong> (${min} - ${max} ${unit})${hint ? "<br />" + hint : ""}`;
		const tip = this.formatTip(help);
		return this.renderRow(label, content, tip);
	}
	static {
		this.styles = css`
        
            :host {
                display: contents;
            }

            .hint {
                font-size: calc( var( --thermal-fs-sm ) * .75 );
                padding-top: .2em;
            }

            fieldset {
                border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                border-radius: var(--thermal-radius);
                margin-bottom: var(--thermal-gap);

                legend {
                    border-radius: var(--thermal-radius);
                    border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                    padding: 0.3em 0.5em;
                }

            }
        
        `;
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (this.pngFs === void 0 || this.pngWidth === void 0 || this.pngWidthSetter === void 0 || this.pngFsSetter === void 0) return;
		for (const key of ["pngFs", "pngWidth"]) if (_changedProperties.has(key)) {
			const value = this[key];
			const element = this.shadowRoot?.querySelector(`input[name="${key}"]`);
			if (element && value) {
				const oldValue = element.value;
				if (parseInt(oldValue) !== value) {
					element.value = value.toString();
					this.log(`Updated ${key} from ${oldValue} to ${value}`);
				}
			}
		}
	}
	render() {
		if (this.pngFs === void 0 || this.pngWidth === void 0 || this.pngWidthSetter === void 0 || this.pngFsSetter === void 0) {}
		return html`

        ${this.renderGroup(t(T.exportcontent), html`
            ${this.renderCheckbox("pngExportAnalyses", t(T.analyses), this.pngAnalyses, this.pngExportAnalysesSetter.bind(this))}
            ${this.renderCheckbox("pngExportScale", t(T.thermalscale), this.pngExportScale, this.pngExportScaleSetter.bind(this))}
            ${this.renderCheckbox("pngExportFileName", t(T.exportfilenames), this.pngExportFileName, this.pngExportFileNameSetter.bind(this))}
            ${this.renderCheckbox("pngExportFileDate", t(T.filedate), this.pngExportFileDate, this.pngExportFileDateSetter.bind(this))}
        `)}

        ${this.renderGroup(t(T.exportdimensions), html`
            ${this.renderSlider("pngWidth", t(T.exportimagewidth), this.pngWidth, "px", 500, 2e3, 50, this.pngWidthSetter.bind(this))}

            ${this.renderSlider("pngFs", t(T.exportimagefontsize), this.pngFs, "px", 10, 50, 1, this.pngFsSetter.bind(this))}
        `)}

        ${this.renderGroup(t(T.exportgroup), html`
            ${this.renderCheckbox("pngExportGroupName", t(T.exportgroupname), this.pngExportGroupName, this.pngExportGroupNameSetter.bind(this))}
            ${this.renderSlider("pngColumns", t(T.exportfilenames), this.pngExportColumns, "sloupců", 1, 5, 1, this.pngExportColumnsSetter.bind(this))}
        `)}

        `;
	}
};
__decorate([consume({
	context: pngExportWidthContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngWidth", void 0);
__decorate([consume({
	context: pngExportWidthSetterContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngWidthSetter", void 0);
__decorate([consume({
	context: pngExportFsContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngFs", void 0);
__decorate([consume({
	context: pngExportFsSetterContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngFsSetter", void 0);
__decorate([consume({
	context: pngExportAnalysisContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngAnalyses", void 0);
__decorate([consume({
	context: pngExportAnalysisSetterContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportAnalysesSetter", void 0);
__decorate([consume({
	context: pngExportScaleContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportScale", void 0);
__decorate([consume({
	context: pngExportScaleSetterContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportScaleSetter", void 0);
__decorate([consume({
	context: pngExportLicenseContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportLicense", void 0);
__decorate([consume({
	context: pngExportLicenseSetterContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportLicenseSetter", void 0);
__decorate([consume({
	context: pngExportFileNameContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportFileName", void 0);
__decorate([consume({
	context: pngExportFileNameSetterContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportFileNameSetter", void 0);
__decorate([consume({
	context: pngExportFileDateContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportFileDate", void 0);
__decorate([consume({
	context: pngExportFileDateSetterContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportFileDateSetter", void 0);
__decorate([consume({
	context: pngExportColumnsContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportColumns", void 0);
__decorate([consume({
	context: pngExportColumnsSetterContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportColumnsSetter", void 0);
__decorate([consume({
	context: pngExportGroupNameContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportGroupName", void 0);
__decorate([consume({
	context: pngExportGroupNameSetterContext,
	subscribe: true
})], ManagerExportPanel.prototype, "pngExportGroupNameSetter", void 0);
ManagerExportPanel = __decorate([customElement("manager-export-panel")], ManagerExportPanel);

//#endregion
//#region src/controls/registry/DisplaySettingsPanel.ts
let ExportConfigPanel = class ExportConfigPanel extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.advancedPalettes = false;
		this.advancedPalettesSetter = () => {};
	}
	static {
		this.styles = css`
    
        :host {
            display: contents;
        }
    
    `;
	}
	render() {
		return html`
        <thermal-field label="${t(T.colourpalette)}" hint="Zvolte, jaké chcete používat palety.">
            <thermal-btn 
                variant="${!this.advancedPalettes ? "foreground" : "default"}"
                @click=${() => this.advancedPalettesSetter(false)}
                tooltip="IRON, JET, White hot, Black hot"
            >Základní</thermal-btn>
            <thermal-btn 
                variant="${this.advancedPalettes ? "foreground" : "default"}"
                @click=${() => this.advancedPalettesSetter(true)}
                tooltip="Všechny dostupné palety"
            >Pokročilé</thermal-btn>
        </thermal-field>
        <thermal-field label="${t(T.filerendering)}" hint="${t(T.filerenderinghint)}">
            <manager-image-smooth-switch></manager-image-smooth-switch>
        </thermal-field>
        <thermal-field label="${t(T.graphlines)}" hint="${t(T.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `;
	}
};
__decorate([consume({
	context: advancedPalettesContext,
	subscribe: true
}), state()], ExportConfigPanel.prototype, "advancedPalettes", void 0);
__decorate([consume({
	context: advancedPalettesSetterContext,
	subscribe: true
}), state()], ExportConfigPanel.prototype, "advancedPalettesSetter", void 0);
ExportConfigPanel = __decorate([customElement("registry-display-panel")], ExportConfigPanel);

//#endregion
//#region src/utils/multipleFiles/ThermalFile.ts
let ThermalFileElement = class ThermalFileElement extends AbstractThermalElement {
	static {
		this.styles = css`
        :host {
            display: none;
        }
    `;
	}
	render() {
		return nothing;
	}
};
__decorate([property({ type: String })], ThermalFileElement.prototype, "lrc", void 0);
__decorate([property({ type: String })], ThermalFileElement.prototype, "png", void 0);
__decorate([property({ type: String })], ThermalFileElement.prototype, "label", void 0);
ThermalFileElement = __decorate([customElement("thermal-file")], ThermalFileElement);

//#endregion
//#region src/utils/multipleFiles/ThermalGroup.ts
let ThermalGroup = class ThermalGroup extends AbstractThermalElement {
	static {
		this.styles = css`
        :host {
            display: none;
        }
    `;
	}
	render() {
		return html`<slot></slot>`;
	}
};
__decorate([property()], ThermalGroup.prototype, "name", void 0);
ThermalGroup = __decorate([customElement("thermal-group")], ThermalGroup);

//#endregion
//#region src/apps/ThermalGalleryApp.ts
var STATE$1 = /* @__PURE__ */ function(STATE) {
	STATE["MAIN"] = "main";
	STATE["GROUP"] = "group";
	STATE["FILE"] = "file";
	return STATE;
}(STATE$1 || {});
let ThermalGalleryApp = class ThermalGalleryApp extends BaseAppWithPngExportContext {
	constructor(..._args) {
		super(..._args);
		this.label = "Gallery of IR images";
		this.palette = "jet";
		this.state = STATE$1.MAIN;
		this.registryRef = createRef();
		this.pngExportWidth = 1200;
		this.pngExportWidthSetterContext = (value) => {
			this.pngExportWidth = value;
		};
		this.pngExportFs = 20;
		this.pngExportFsSetterContext = (value) => {
			this.pngExportFs = value;
		};
		this.columns = 3;
	}
	get manager() {
		return this.registryRef.value.registry.manager;
	}
	connectedCallback() {
		super.connectedCallback();
		initLocalesInTopLevelElement(this);
		this.addEventListener("slotchange", () => {
			this.processSlots();
		});
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.processSlots();
		this.resetRegistry();
		if (this.registryRef.value) {
			this.registryRef.value?.registry.palette.setPalette(this.palette);
			this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID, () => {
				if (this.registryRef.value) this.registryRef.value.registry.range.applyMinmax();
			});
			this.registryRef.value.registry.groups.addListener(this.UUID, () => {
				if (this.registryRef.value) this.registryRef.value.registry.range.applyMinmax();
			});
		}
	}
	processSlots() {
		setTimeout(() => {
			this.structure = this.slottedElements.filter((element) => element instanceof ThermalGroup).map((element) => {
				return {
					label: element.getAttribute("label"),
					description: element.getAttribute("description"),
					lat: element.getAttribute("lat"),
					lon: element.getAttribute("lon"),
					files: Array.from(element.children).filter((child) => {
						return child instanceof ThermalFileElement && child.hasAttribute("lrc");
					}).map((child) => {
						return {
							lrc: child.getAttribute("lrc"),
							png: child.getAttribute("png"),
							label: child.getAttribute("label")
						};
					})
				};
			}).filter((element) => element.files.length > 0);
		}, 1e3);
	}
	actionMainOpen() {
		this.state = STATE$1.MAIN;
		this.resetRegistry();
		setTimeout(() => {
			this.group = void 0;
			this.file = void 0;
		}, 0);
	}
	actionGroupOpen(group) {
		this.resetRegistry();
		setTimeout(() => {
			this.group = group;
			this.columns = Math.min(4, group.files.length);
			if (group.files.length > 1) this.state = STATE$1.GROUP;
			else {
				this.state = STATE$1.FILE;
				this.file = group.files[0];
			}
		}, 0);
	}
	actionDetailOpen(file) {
		if (this.group === void 0) throw new Error("Group not yet set");
		this.state = STATE$1.FILE;
		this.resetRegistry();
		setTimeout(() => {
			this.file = file;
		}, 0);
	}
	actionDetailClose() {
		this.state = STATE$1.GROUP;
		this.resetRegistry();
		setTimeout(() => {
			this.file = void 0;
		}, 0);
	}
	resetRegistry() {
		if (this.registryRef.value) {
			this.registryRef.value.registry.forEveryInstance((instance) => instance.unmountFromDom());
			this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID, () => {
				this.registryRef.value?.registry.range.applyMinmax();
			});
		}
	}
	renderMain() {
		if (this.structure === void 0) return html`<thermal-poster label="Načítám data"></thermal-poster>`;
		return html`
            <div class="main">
                ${this.structure.map((group) => {
			const { files, ...rest } = group;
			return {
				...rest,
				file: files[0],
				group
			};
		}).map((group, index) => {
			const slug = group.label ?? `group_preview_${index}`;
			return html`<registry-provider slug="${slug}" autoclear="true">
            <group-provider slug="${slug}" autoclear="true" batch="true">
                <button class="group-thumbnail" @click="${() => this.actionGroupOpen(group.group)}">
                    <div class="header">
                        <div class="info">
                            <div class="title">${group.label}</div>
                            <div class="count">${t(T.numfiles, { num: group.group.files.length })}</div>
                        </div>
                        <div class="button">
                            ${group.group.files.length > 1 ? html`<thermal-icon icon="folder" variant="outline"></thermal-icon>` : html`<thermal-icon icon="image" variant="outline"></thermal-icon>`}
                        </div>
                    </div>
                    <file-provider thermal="${group.file.lrc}" batch="true" autoclear="true">
                        <file-canvas></file-canvas>
                    </file-provider>
                </button>
            </group-provider>
            </registry-provider>
            `;
		})}
            </div>
        `;
	}
	renderGroup() {
		if (this.structure === void 0 || this.group === void 0) return html`<thermal-poster></thermal-poster>`;
		return this.renderBrowser(html`
            <group-provider slug="${this.group.label ?? `group_detail_${Math.random()}`}" autoclear="true">

                <group-chart slot="pre"></group-chart>

                <header>

                    <thermal-btn variant="foreground" @click="${() => this.actionMainOpen()}" tooltip="Zavřít skupinu" icon="close" iconStyle="micro"></thermal-btn>

                    <thermal-dropdown>
                        <span slot="invoker">${this.group.label}</span>
                        ${this.structure.filter((group) => group.label !== this.group?.label).map((group) => {
			return html`<div slot="option">
                                <thermal-btn @click="${() => this.actionGroupOpen(group)}">${group.label}</thermal-btn>
                            </div>`;
		})}
                    </thermal-dropdown>

                    <group-download-dropdown></group-download-dropdown>

                    <div>
                        <input type="range" min="1" max="4" step="1" value=${this.columns} @input=${(event) => {
			const value = event.target?.value;
			if (value !== void 0) this.columns = parseInt(value);
		}}></input>
                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${t(T.columns, { num: this.columns })}</div>
                    </div>
                    
                    <group-analysis-sync-button></group-analysis-sync-button>

                </header>

                ${this.group.description ? html`<section class="group-description">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <p>${this.group.description}</p>
                    </section>` : nothing}

                <section class="files columns_${this.columns}">
            
                    ${this.group.files.map((file) => html`<file-provider thermal="${file.lrc}" batch="true" autoclear="true">
                        <file-thumbnail .ondetail="${() => this.actionDetailOpen(file)}"></file-thumbnail>
                    </file-provider>`)}
            
                </section>

            </group-provider>
        `);
	}
	renderFile() {
		if (this.structure === void 0 || this.group === void 0 || this.file === void 0) return html`<thermal-poster></thermal-poster>`;
		return this.renderBrowser(html`<group-provider slug="${this.file.lrc}" autoclear="true">

            <file-provider batch="true" autoclear="true" thermal="${this.file.lrc}">
                <file-detail label="${this.group.label}" .onback="${() => {
			this.group?.files.length === 1 ? this.actionMainOpen() : this.actionDetailClose();
		}}"></file-detail>
            </file-provider>

        </group-provider>`);
	}
	renderBrowser(content) {
		return html`<div class="browser state_${this.state}">
            <section>
                <manager-tool-bar></manager-tool-bar>
            </section>
            <section>
                ${content}
            </section>
        </div>`;
	}
	static {
		this.styles = css`
        .group-thumbnail {
            
            margin: 0;
            padding: 0;
            cursor: pointer;

            overflow: hidden;
            width: 100%;

            border-radius: var(--thermal-radius);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);

            background: var(--thermal-slate-light);
            color: var(--thermal-foreground);

            transition: all .4s ease-in-out;

            box-shadow: 0 0 5px var(--thermal-slate);

            div.header {

                display: grid;
                grid-template-columns: auto 1.5em;
                padding: var(--thermal-gap);
                gap: var(--thermal-gap);
                text-align: left;

                .title {
                    font-weight: bold;
                    font-size: 1.2em;
                    margin-bottom: .5em;
                }

                .count {
                    font-size: .9em;
                    opacity: .8;
                }

                .button {
                    opacity: .8;
                }
            }

            file-provider {
                overflow: hidden;
                display: block;
            }

            file-canvas {
                overflow: hidden;
                display: block;
                transition: all .4s ease-in-out;
            }

            &:hover,
            &:focus {
                background: var(--thermal-background);
                box-shadow: 0 0 15px var(--thermal-slate-dark);
                file-canvas {
                    transform: scale(1.1);
                }
            }
        }

        .browser {
            display: grid;
            grid-template-columns: 3em 1fr;

            &.state_file {
                file-provider {
                    display: block;
                    background: var(--thermal-background);
                    padding: var(--thermal-gap);
                    border-radius: var(--thermal-radius);
                    border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                }
            }
        
            &.state_group {
                group-provider {

                    display: block;
                    width: 100%;
                    box-sizing: border-box;
                    padding: var(--thermal-gap);
                    border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                    border-radius: var(--thermal-radius);

                    header {
                        display: flex;
                        gap: 5px;
                        margin-bottom: var(--thermal-gap);
                    }

                    .group-description {
                        border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                        border-radius: var(--thermal-radius);
                        padding: var(--thermal-gap);
                        box-sizing: border-box;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        gap: var(--thermal-gap);
                        margin-bottom: var(--thermal-gap);

                        svg {
                            opacity: .8;
                            width: 1em;
                        }

                        p {
                            margin: 0;
                            padding: 0;
                            font-size: calc(var(--thermal-gap) * .8);
                        }
                    }

                    .files {

                        display: grid;
                        margin: calc( var(--thermal-gap) * .5 * -1);

                        &.columns_1 { grid-template-columns: 100%; }
                        &.columns_2 { grid-template-columns: repeat( 2, 50% ); }
                        &.columns_3 { grid-template-columns: repeat( 3, calc(100% / 3) ); }
                        &.columns_4 { grid-template-columns: repeat( 4, calc(100% / 4) ); }
                        &.columns_5 { grid-template-columns: repeat( 5, calc(100% / 5) ); }
                        &.columns_6 { grid-template-columns: repeat( 6, calc(100% / 6) ); }
                        &.columns_7 { grid-template-columns: repeat( 7, calc(100% / 7) ); }
                        &.columns_8 { grid-template-columns: repeat( 8, calc(100% / 8) ); }
                        &.columns_9 { grid-template-columns: repeat( 9, calc(100% / 9) ); }
                        &.columns_10 { grid-template-columns: repeat( 10, calc(100% / 10) ); }

                        file-thumbnail {
                            padding: calc( var(--thermal-gap) * .5);
                        }
                    }
                }
            }
        }


        .main {

            display: grid;
            grid-template-columns: repeat( auto-fill, minmax(300px, 1fr) );
            gap: var(--thermal-gap);

            group-provider {
                width: 100%;
            }
        }
    `;
	}
	render() {
		return html`<manager-provider slug="${this.UUID}">
            <registry-provider slug="${this.UUID}" ${ref(this.registryRef)} palette="${this.palette}">
                <thermal-app 
                    author="${ifDefined(this.author)}" 
                    license="${this.license}" 
                    showfullscreen="true"
                    label="${this.label}"
                    .onlabel="${() => this.actionMainOpen()}"
                >


                    <manager-palette-dropdown slot="bar-persistent"></manager-palette-dropdown>

                    ${this.structure !== void 0 && this.state !== STATE$1.MAIN ? html`
                        <registry-range-form slot="bar-pre"></registry-range-form>
                        <registry-histogram slot="pre" expandable="true"></registry-histogram>
                        <registry-range-slider slot="pre"></registry-range-slider>
                        <registry-ticks-bar slot="pre"></registry-ticks-bar>
                        ` : nothing}
                    

                    <thermal-dialog label="${t(T.config)}" slot="close">
                            
                        <thermal-btn slot="invoker" icon="settings" iconStyle="solid" tooltip="${t(T.config)}"></thermal-btn>

                        <div slot="content">
                            <table>
                                <manager-export-panel></manager-export-panel>
                                <registry-display-panel></registry-display-panel>
                            </table>
                        </div>
                    </thermal-dialog>

                    ${this.state === STATE$1.MAIN ? this.renderMain() : nothing}
                    ${this.state === STATE$1.GROUP ? this.renderGroup() : nothing}
                    ${this.state === STATE$1.FILE ? this.renderFile() : nothing}

                    <slot></slot>


                </thermal-app>
            </registry-provider>
        </manager-provider>`;
	}
};
__decorate([property({
	type: String,
	reflect: true
})], ThermalGalleryApp.prototype, "author", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGalleryApp.prototype, "label", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGalleryApp.prototype, "license", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], ThermalGalleryApp.prototype, "palette", void 0);
__decorate([state(), queryAssignedElements({ flatten: true })], ThermalGalleryApp.prototype, "slottedElements", void 0);
__decorate([state()], ThermalGalleryApp.prototype, "structure", void 0);
__decorate([state()], ThermalGalleryApp.prototype, "state", void 0);
__decorate([state()], ThermalGalleryApp.prototype, "group", void 0);
__decorate([state()], ThermalGalleryApp.prototype, "file", void 0);
__decorate([provide({ context: pngExportWidthContext })], ThermalGalleryApp.prototype, "pngExportWidth", void 0);
__decorate([provide({ context: pngExportWidthSetterContext })], ThermalGalleryApp.prototype, "pngExportWidthSetterContext", void 0);
__decorate([provide({ context: pngExportFsContext })], ThermalGalleryApp.prototype, "pngExportFs", void 0);
__decorate([provide({ context: pngExportFsSetterContext })], ThermalGalleryApp.prototype, "pngExportFsSetterContext", void 0);
__decorate([provide({ context: localeContext }), property({
	reflect: true,
	converter: localeConverter
})], ThermalGalleryApp.prototype, "locale", void 0);
__decorate([state()], ThermalGalleryApp.prototype, "columns", void 0);
ThermalGalleryApp = __decorate([customElement("thermal-gallery-app")], ThermalGalleryApp);

//#endregion
//#region src/hierarchy/providers/context/GroupContext.ts
const groupContext = createContext("group-instance");

//#endregion
//#region src/hierarchy/providers/context/RegistryContext.ts
const registryContext = createContext("registry-instance");
const registryOpacityContext = createContext("registry-opacity");
const registryRangeFromContext = createContext("registry-range-from");
const registryRangeToContext = createContext("registry-range-to");
const registryLoadingContext = createContext("registry-loading");
const registryMinContext = createContext("registry-min");
const registryMaxContext = createContext("registry-max");
/** 
* Highlight is an optional range of temperatures highlighted graphically on the thermal scale. It is used to indicate for example:
* - what is the range of a file within min/max of the entire group
* - what is the range of an analysis within the min/max of a file
* - what is the min/max of a group of files within multiple groups of files
* 
* This context is exposed by a registry provider. It need to be consumed manually.
*/
const registryHighlightContext = createContext("registry-highlight");
/**
* Highlight setter needs to be used in order to set/unset a temperature range on the thermal scale.
*/
const setRegistryHighlightContext = createContext("registry-highlight-setter");

//#endregion
//#region src/hierarchy/providers/context/ManagerContext.ts
const managerContext = createContext("manager-instance");
const managerPaletteContext = createContext("manager-palette-context");
const managerSmoothContext = createContext("manager-smooth-context");
const managerGraphFunctionContext = createContext("manager-graph-function-context");
const languageContext = createContext("language");
const toolContext = createContext("tool-context");
/** @deprecated I do not know wha is this here. */
const toolsContext = createContext("tools-context");
const interactiveAnalysisContext = createContext("interactive-analysis-context");

//#endregion
//#region src/hierarchy/consumers/AbstractManagerConsumer.ts
var AbstractManagerConsumer = class extends AbstractThermalElement {};
__decorate([consume({
	context: managerContext,
	subscribe: true
}), state()], AbstractManagerConsumer.prototype, "manager", void 0);

//#endregion
//#region src/hierarchy/consumers/AbstractRegistryConsumer.ts
var AbstractRegistryConsumer = class extends AbstractManagerConsumer {};
__decorate([consume({
	context: registryContext,
	subscribe: true
})], AbstractRegistryConsumer.prototype, "registry", void 0);

//#endregion
//#region src/hierarchy/consumers/AbstractGroupConsumer.ts
var AbstractGroupConsumer = class extends AbstractRegistryConsumer {};
__decorate([consume({
	context: groupContext,
	subscribe: true
})], AbstractGroupConsumer.prototype, "group", void 0);

//#endregion
//#region src/controls/group/AbstractGroupDropin.ts
var AbstractGroupDropin = class extends AbstractGroupConsumer {
	connectedCallback() {
		super.connectedCallback();
		publicIpv4().then((ip) => this.ip = ip);
	}
	emitUpload(fileName, fileSize) {
		const userAgent = window.navigator.userAgent;
		const width = window.innerWidth;
		const height = window.innerHeight;
		const time = (/* @__PURE__ */ new Date()).getTime();
		const event = new CustomEvent("uploaded", {
			bubbles: true,
			cancelable: false,
			detail: {
				ip: this.ip,
				userAgent,
				windowWidth: width,
				windowHeight: height,
				time,
				fileName,
				fileSize
			}
		});
		this.dispatchEvent(event);
	}
};
__decorate([state()], AbstractGroupDropin.prototype, "ip", void 0);

//#endregion
//#region src/controls/group/GroupDropin.ts
let GroupDropin$1 = class GroupDropin extends AbstractGroupDropin {
	constructor(..._args) {
		super(..._args);
		this.container = createRef();
		this.hover = false;
		this.uploading = false;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		if (this.container.value !== void 0) {
			const listener = this.manager.service.handleDropzone(this.container.value, false);
			listener.onMouseEnter.add(this.UUID, () => {
				console.log("mouseenter");
				this.hover = true;
			});
			listener.onMouseLeave.add(this.UUID, () => {
				console.log("mouseleave");
				this.hover = false;
			});
			listener.onDrop.set(this.UUID, () => {
				this.uploading = true;
			});
			listener.onProcessingEnd.add(this.UUID, async (results) => {
				await Promise.all(results.map(async (result) => {
					if (result instanceof ThermalFileReader) {
						const instance = await result.createInstance(this.group);
						this.emitUpload(instance.fileName, instance.bytesize);
					}
				}));
				this.uploading = false;
			});
		}
	}
	static {
		this.styles = css`

        .container {
            color: var(--thermal-foreground);
        }

        .dropin {
            width: 100%;
            aspect-ratio: 4 / 3;
            max-height: 700px;
            transition: background .5s ease-in-out;
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            cursor: pointer;
            background: var( --thermal-slate );
            position: relative;
            overflow: hidden;

        }

        .dropin-gradient {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, var(--thermal-slate-light) 0%, var(--thermal-slate) 100%);
            opacity: 0;
            transition: opacity .5s ease-in-out;
        }

        .hover,
        .dropin:hover {
            .dropin-gradient {
                opacity: .5;
            }
        }

        .dropin-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var( --thermal-gap );
            transition: all .3s ease-in-out;
        }

        @-webkit-keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }

        @keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }

        .dropin-uploading {
            transition: all .3s ease-in-out;
            position: absolute;
            
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            transform: translateY(100px);
            opacity: 0;

            color: var(--thermal-foreground);

            svg {
                width: 100px;
                -webkit-animation: action .5s infinite  alternate;
                animation: action .5s infinite  alternate;
            }

        }

        .dropin.uploading {
            .dropin-content {
                opacity: 0;
                transform: translateY( -100px );
            }
            .dropin-uploading {
                opacity: 1;
                transform: translateY(0);
            }
        }

    `;
	}
	render() {
		const dropinClasses = {
			dropin: true,
			hover: this.hover,
			uploading: this.uploading
		};
		return html`

            <div class="container">
            
                <div ${ref(this.container)} class="${classMap(dropinClasses)}">

                    <div class="dropin-gradient"></div>

                    <div class="dropin-content">
                        <div>${t(T.dragorselectfile)}</div>
                        <thermal-btn variant="foreground">${t(T.selectfile)}</thermal-btn>
                    </div>

                    <div class="dropin-uploading">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                    </div>
                
                </div>

            </div>
        
        `;
	}
};
__decorate([state()], GroupDropin$1.prototype, "container", void 0);
__decorate([state()], GroupDropin$1.prototype, "hover", void 0);
__decorate([state()], GroupDropin$1.prototype, "uploading", void 0);
GroupDropin$1 = __decorate([customElement("group-dropin")], GroupDropin$1);

//#endregion
//#region src/controls/group/GroupDropinInput.ts
let GroupDropin = class GroupDropin extends AbstractGroupDropin {
	constructor(..._args) {
		super(..._args);
		this.container = createRef();
		this.hover = false;
		this.uploading = false;
	}
	static {
		this.styles = css`

        .container {
            display: none;
        }

        .dropin {
            background: var( --thermal-slate );
            width: 100%;
            aspect-ratio: 4 / 3;
        }

        .hover {
            background: var( --thermal-slate-light );
        }

        svg {
            width: 1em;
        }



.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 21px;
  height: 1em;
}
.lds-ellipsis div {
  position: absolute;
  top: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 0px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 7px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 14px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 21px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0px, 0);
  }
}


    
    `;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		if (this.container.value !== void 0) {
			this.listener = this.manager.service.handleDropzone(this.container.value, false);
			this.listener.onMouseEnter.add(this.UUID, () => {
				this.hover = true;
			});
			this.listener.onMouseLeave.add(this.UUID, () => {
				this.hover = false;
			});
			this.listener.onDrop.set(this.UUID, () => {
				this.uploading = true;
			});
			this.listener.onProcessingEnd.add(this.UUID, async (results) => {
				this.group.files.removeAllInstances();
				await Promise.all(results.map(async (result) => {
					if (result instanceof ThermalFileReader) {
						const instance = await result.createInstance(this.group);
						this.emitUpload(instance.fileName, instance.bytesize);
					}
				}));
				this.uploading = false;
			});
		}
	}
	render() {
		return html`


            <thermal-btn @click="${() => {
			if (this.listener) this.listener.openFileDialog(false);
		}}"><slot>${this.uploading === false ? t(T.uploadafile) : html`<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`}</slot></thermal-btn>

            <div class="container">
            
                <div ${ref(this.container)}></div>

            </div>
        
        `;
	}
};
__decorate([state()], GroupDropin.prototype, "container", void 0);
__decorate([state()], GroupDropin.prototype, "hover", void 0);
__decorate([state()], GroupDropin.prototype, "uploading", void 0);
GroupDropin = __decorate([customElement("group-dropin-input")], GroupDropin);

//#endregion
//#region src/hierarchy/providers/context/FileContexts.ts
/** A crucial context exposing the `Instance` object from `AbstractFileProvider` to `AbstractFileConsumers`. */
const fileContext = createContext("file");
const fileFailureContext = createContext("failure");
/** @deprecated Not used - remove */
const loadingContext = createContext("file-loading");
/** @deprecated Not used - remove */
const loadedContext = createContext("file-loaded");
const fileProviderContext = createContext("file-provider-element");
const fileMsContext = createContext("file-ms-context");
const fileCursorContext = createContext("file-cursor");
const fileCursorSetterContext = createContext("file-cursor-setter");
const fileCurrentFrameContext = createContext("playback");
const durationContext = createContext("duration");
const filePlayingContext = createContext("file-playing-context");
const filePlaybackSpeedContext = createContext("file-playback-speed");
/** @deprecated */
const fileRecordingContext = createContext("recording");
/** @deprecated */
const filaMayStopContext = createContext("mayStop");
const fileAnalysisList = createContext("analysislist");

//#endregion
//#region src/hierarchy/abstraction/AbstractFileProvider.ts
var AbstractFileProvider = class extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.loading = false;
		this.ready = false;
		this.cursor = void 0;
		this.cursorSetter = (percent) => {
			if (percent === void 0) {
				if (this.cursor !== void 0) this.cursor = void 0;
			} else if (this.file) {
				const relativeTime = this.file.timeline._convertPercenttRelative(percent);
				const frame = this.file.timeline.findPreviousRelative(relativeTime);
				this.cursor = {
					absolute: frame.absolute,
					ms: frame.relative,
					percentage: percent
				};
			}
		};
		this.ms = 0;
		this.speed = 1;
		this.recording = false;
		this.playing = false;
		this.mayStop = true;
		this.analyses = [];
		this.onLoadingStart = new CallbacksManager();
		this.onSuccess = new CallbacksManager();
		this.onFailure = new CallbacksManager();
		this.autoHighlight = false;
		this.onInstanceCreated = new CallbacksManager();
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("ms")) {
			if (this.file && this.duration && this.currentFrame) {
				const newMs = Math.min(this.duration.ms, Math.max(0, this.ms));
				if (newMs !== this.currentFrame.ms) this.file.timeline.setRelativeTime(newMs);
			}
		}
		if (_changedProperties.has("speed")) {
			if (this.file && this.speed) {
				if (this.speed !== this.file.timeline.playbackSpeed) this.file.timeline.playbackSpeed = this.speed;
			}
		}
		if (_changedProperties.has("playing")) {
			if (this.file) {
				if (this.playing && !this.file.timeline.isPlaying) this.file.timeline.play();
				else if (!this.playing && this.file.timeline.isPlaying) this.file.timeline.pause();
			}
		}
		this.handleAnalysisUpdate(1, _changedProperties);
		this.handleAnalysisUpdate(2, _changedProperties);
		this.handleAnalysisUpdate(3, _changedProperties);
		this.handleAnalysisUpdate(4, _changedProperties);
		this.handleAnalysisUpdate(5, _changedProperties);
		this.handleAnalysisUpdate(6, _changedProperties);
		this.handleAnalysisUpdate(7, _changedProperties);
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "recording") {
			if (this.file) {
				if (this.recording === true && value === "false") this.file.recording.end();
				else if (this.recording === false && value === "true") this.file.recording.start();
			}
		}
	}
	/** Register instance callback listeners */
	recieveInstance(instance) {
		this.file = instance;
		this.failure = void 0;
		this.loading = false;
		this.ready = true;
		this.duration = {
			ms: instance.timeline.duration,
			time: instance.timeline.formatDuration(instance.timeline.duration)
		};
		this.currentFrame = {
			ms: instance.timeline.currentMs,
			time: instance.timeline.currentTime,
			percentage: instance.timeline.currentPercentage,
			index: instance.timeline.currentStep.index,
			absolute: instance.timeline.currentStep.absolute
		};
		this.analyses = instance.analysis.layers.all;
		if (this.speed) instance.timeline.playbackSpeed = this.speed;
		this.playCallback = () => {
			this.playing = true;
		};
		this.stopCallback = () => {
			this.playing = false;
		};
		this.currentFrameChangeCallback = (frame) => {
			this.currentFrame = {
				ms: frame.relative,
				time: instance.timeline.currentTime,
				percentage: instance.timeline.currentPercentage,
				index: frame.index,
				absolute: frame.absolute
			};
			this.ms = frame.relative;
		};
		this.playbackSpeedCallback = (value) => {
			this.speed = value;
		};
		this.recordingCallback = (value) => {
			this.recording = value;
		};
		this.mayStopCallback = (value) => {
			this.mayStop = value;
		};
		this.analysisCallback = (value) => {
			this.analyses = value;
		};
		instance.timeline.callbacksPlay.add(this.UUID, this.playCallback);
		instance.timeline.callbacksPause.add(this.UUID, this.stopCallback);
		instance.timeline.callbacksStop.add(this.UUID, this.stopCallback);
		instance.timeline.callbacksEnd.add(this.UUID, this.stopCallback);
		instance.timeline.callbacksChangeFrame.add(this.UUID, this.currentFrameChangeCallback);
		instance.timeline.callbackdPlaybackSpeed.add(this.UUID, this.playbackSpeedCallback);
		instance.recording.addListener(this.UUID, this.recordingCallback);
		instance.recording.callbackMayStop.add(this.UUID, this.mayStopCallback);
		instance.analysis.addListener(this.UUID, this.analysisCallback);
		this.onInstanceCreated.call(instance);
		this.addEventListener("mouseenter", () => {
			if (this.autoHighlight && this.file && this.highlightSetter) this.highlightSetter({
				from: this.file.min,
				to: this.file.max
			});
		});
		this.addEventListener("mouseleave", () => {
			if (this.autoHighlight && this.highlightSetter) this.highlightSetter(void 0);
		});
	}
	removeInstance(instance) {
		instance.unmountFromDom();
		this.file = void 0;
		this.loading = false;
		this.ready = false;
		this.duration = void 0;
		this.currentFrame = void 0;
		this.analyses = [];
		instance.timeline.callbacksPlay.delete(this.UUID);
		instance.timeline.callbacksPause.delete(this.UUID);
		instance.timeline.callbacksStop.delete(this.UUID);
		instance.timeline.callbacksEnd.delete(this.UUID);
		instance.timeline.callbacksChangeFrame.delete(this.UUID);
		instance.timeline.callbackdPlaybackSpeed.delete(this.UUID);
		instance.recording.removeListener(this.UUID);
		instance.analysis.removeListener(this.UUID);
	}
	deleteFile() {
		if (this.file) this.removeInstance(this.file);
	}
	/**
	* Initialise slots & their listeners
	*/
	initAnalysesSync(instance) {
		instance.slots.onSlot1Serialize.set(this.UUID, (value) => this.analysis1 = value);
		instance.slots.onSlot2Serialize.set(this.UUID, (value) => this.analysis2 = value);
		instance.slots.onSlot3Serialize.set(this.UUID, (value) => this.analysis3 = value);
		instance.slots.onSlot4Serialize.set(this.UUID, (value) => this.analysis4 = value);
		instance.slots.onSlot5Serialize.set(this.UUID, (value) => this.analysis5 = value);
		instance.slots.onSlot6Serialize.set(this.UUID, (value) => this.analysis6 = value);
		instance.slots.onSlot7Serialize.set(this.UUID, (value) => this.analysis7 = value);
		this.createInitialAnalysis(instance, 1, this.analysis1);
		this.createInitialAnalysis(instance, 2, this.analysis2);
		this.createInitialAnalysis(instance, 3, this.analysis3);
		this.createInitialAnalysis(instance, 4, this.analysis4);
		this.createInitialAnalysis(instance, 5, this.analysis5);
		this.createInitialAnalysis(instance, 6, this.analysis6);
		this.createInitialAnalysis(instance, 7, this.analysis7);
	}
	handleAnalysisUpdate(index, _changedProperties) {
		const field = `analysis${index}`;
		if (_changedProperties.has(field)) {
			const oldValue = _changedProperties.get(field);
			const newValue = this[field];
			if (this.file) {
				const slot = this.file.slots.getSlot(index);
				if (slot === void 0 && newValue && newValue.trim().length > 0 && (!oldValue || oldValue?.trim().length > 0)) this.file.slots.createAnalysisFromSerialized(newValue, index)?.setSelected(false, true);
				else if (slot !== void 0 && oldValue && (!newValue || newValue?.trim().length === 0)) this.file.slots.removeSlotAndAnalysis(index);
				else if (slot && newValue) slot?.recieveSerialized(newValue);
			}
		}
	}
	createInitialAnalysis(instance, index, value) {
		if (value !== void 0 && value !== null && value.trim().length > 0) if (instance.slots.hasSlot(index)) {
			const analysis = instance.slots.getSlot(index);
			analysis?.recieveSerialized(value);
			analysis?.analysis.setSelected(false, true);
		} else instance.slots.createAnalysisFromSerialized(value, index)?.setSelected(false, true);
	}
	render() {
		return html`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `;
	}
};
__decorate([provide({ context: fileContext }), state()], AbstractFileProvider.prototype, "file", void 0);
__decorate([provide({ context: fileFailureContext }), state()], AbstractFileProvider.prototype, "failure", void 0);
__decorate([provide({ context: loadingContext }), state()], AbstractFileProvider.prototype, "loading", void 0);
__decorate([provide({ context: loadedContext }), state()], AbstractFileProvider.prototype, "ready", void 0);
__decorate([provide({ context: durationContext }), state()], AbstractFileProvider.prototype, "duration", void 0);
__decorate([provide({ context: fileCurrentFrameContext }), state()], AbstractFileProvider.prototype, "currentFrame", void 0);
__decorate([provide({ context: fileCursorContext })], AbstractFileProvider.prototype, "cursor", void 0);
__decorate([provide({ context: fileMsContext })], AbstractFileProvider.prototype, "ms", void 0);
__decorate([provide({ context: filePlaybackSpeedContext })], AbstractFileProvider.prototype, "speed", void 0);
__decorate([provide({ context: fileRecordingContext })], AbstractFileProvider.prototype, "recording", void 0);
__decorate([provide({ context: filePlayingContext })], AbstractFileProvider.prototype, "playing", void 0);
__decorate([state(), provide({ context: filaMayStopContext })], AbstractFileProvider.prototype, "mayStop", void 0);
__decorate([provide({ context: fileAnalysisList })], AbstractFileProvider.prototype, "analyses", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
})], AbstractFileProvider.prototype, "autoHighlight", void 0);
__decorate([consume({
	context: registryHighlightContext,
	subscribe: true
})], AbstractFileProvider.prototype, "highlight", void 0);
__decorate([consume({
	context: setRegistryHighlightContext,
	subscribe: true
})], AbstractFileProvider.prototype, "highlightSetter", void 0);

//#endregion
//#region src/hierarchy/providers/FileProvider.ts
let FileProviderElement = class FileProviderElement extends AbstractFileProvider {
	constructor(..._args) {
		super(..._args);
		this.keepinitialhistogram = false;
		this.ms = 0;
		this.speed = 1;
		this.providedSelf = this;
		this.recording = false;
		this.playing = false;
		this.batch = true;
	}
	/** 
	* Load the file and call all necessary callbacks
	*/
	async load() {
		return this.batch === true ? this.loadAsync() : this.loadSync();
	}
	/** 
	* @deprecated Use the batch loader instead.
	*/
	async loadSync() {
		this.loading = true;
		this.onLoadingStart.call();
		return await this.registry.service.loadFile(this.thermal, this.visible).then(async (result) => {
			if (result instanceof ThermalFileReader) return await result.createInstance(this.group).then((instance) => {
				this.file = instance;
				this.onSuccess.call(instance);
				instance.group.registry.postLoadedProcessing();
				this.loading = false;
				this.recieveInstance(instance);
				this.initAnalysesSync(instance);
				return instance;
			});
			else {
				this.failure = result;
				this.onFailure.call(this.failure);
				this.loading = false;
				return result;
			}
		});
	}
	/**
	* Register new load request to the registry batch loader 
	* 
	*/
	loadAsync() {
		this.loading = true;
		this.onLoadingStart.call();
		return this.registry.batch.request(this.thermal, this.visible, this.group, this.asyncLoadCallback.bind(this));
	}
	async redraw() {
		this.loading = true;
		this.onLoadingStart.call();
		if (this.file) this.removeInstance(this.file);
		await this.load();
	}
	/**
	* 
	* @param result A crucial method called every time a loading ends
	*/
	async asyncLoadCallback(result) {
		if (result instanceof Instance) {
			if (this.file !== void 0) {
				this.file.unmountFromDom();
				delete this.file;
			}
			this.file = result;
			this.onSuccess.call(result);
			this.initAnalysesSync(result);
			this.loading = false;
			this.recieveInstance(result);
		} else if (result instanceof ThermalFileFailure) {
			this.failure = result;
			this.onFailure.call(this.failure);
			this.loading = false;
		}
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		if (this.registry) this.load();
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("thermal")) {
			const oldUrl = _changedProperties.get("thermal");
			if (oldUrl) {
				this.group.files.removeFile(oldUrl);
				this.file = void 0;
				this.load();
			}
		}
	}
};
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
})], FileProviderElement.prototype, "keepinitialhistogram", void 0);
__decorate([property({
	type: Number,
	reflect: true,
	attribute: true
}), provide({ context: fileMsContext })], FileProviderElement.prototype, "ms", void 0);
__decorate([property({
	type: Number,
	reflect: true,
	attribute: true
}), provide({ context: filePlaybackSpeedContext })], FileProviderElement.prototype, "speed", void 0);
__decorate([provide({ context: fileProviderContext })], FileProviderElement.prototype, "providedSelf", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
}), provide({ context: fileRecordingContext })], FileProviderElement.prototype, "recording", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
}), provide({ context: filePlayingContext })], FileProviderElement.prototype, "playing", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	attribute: true,
	converter: {
		fromAttribute(value) {
			return value === "true";
		},
		toAttribute(value) {
			if (value === true) return "true";
			return "false";
		}
	}
})], FileProviderElement.prototype, "batch", void 0);
__decorate([property({
	type: String,
	attribute: true,
	reflect: true
})], FileProviderElement.prototype, "thermal", void 0);
__decorate([property({
	type: String,
	attribute: true,
	reflect: true
})], FileProviderElement.prototype, "visible", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileProviderElement.prototype, "analysis1", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileProviderElement.prototype, "analysis2", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileProviderElement.prototype, "analysis3", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileProviderElement.prototype, "analysis4", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileProviderElement.prototype, "analysis5", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileProviderElement.prototype, "analysis6", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileProviderElement.prototype, "analysis7", void 0);
FileProviderElement = __decorate([customElement("file-provider")], FileProviderElement);

//#endregion
//#region src/hierarchy/abstraction/AbstractGroupProvider.ts
var AbstractGroupProvider = class extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.UUIDGroupListeners = this.UUID + "__group-listener";
		this.autoclear = false;
	}
	connectedCallback() {
		super.connectedCallback();
		this.group = this.registry.groups.addOrGetGroup(this.slug);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.group !== void 0) this.registry.groups.removeGroup(this.group.id);
	}
	render() {
		return html`<slot></slot>`;
	}
};

//#endregion
//#region src/hierarchy/providers/GroupProvider.ts
let GroupProviderElement = class GroupProviderElement extends AbstractGroupProvider {
	constructor(..._args) {
		super(..._args);
		this.autoclear = false;
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.group && this.registry) this.registry.groups.removeGroup(this.group.id);
	}
};
__decorate([property({
	type: String,
	attribute: true,
	reflect: true
})], GroupProviderElement.prototype, "slug", void 0);
__decorate([provide({ context: groupContext })], GroupProviderElement.prototype, "group", void 0);
__decorate([property({ type: Boolean })], GroupProviderElement.prototype, "autoclear", void 0);
GroupProviderElement = __decorate([customElement("group-provider")], GroupProviderElement);

//#endregion
//#region src/hierarchy/providers/getters.ts
const defaultManager = new ThermalManager();
window.Thermal = { managers: /* @__PURE__ */ new Map() };
window.Thermal.managers.set("default", defaultManager);
/** Create or get a manager instance from the global window object. */
const createOrGetManager = (slug, options) => {
	if (slug === void 0) return window.Thermal.managers.get("default");
	else if (window.Thermal.managers.has(slug)) return window.Thermal.managers.get(slug);
	else {
		const manager = new ThermalManager(void 0, options);
		window.Thermal.managers.set(slug, manager);
		return manager;
	}
};
/** Remove the manager along with all its contents. */
const removeManager = (manager) => {
	let slug = void 0;
	window.Thermal.managers.forEach((m, key) => {
		if (m.id === manager.id) slug = key;
	});
	console.log("removing", manager);
	if (slug !== void 0) {
		console.log("found and removing", slug);
		const foundManager = window.Thermal.managers.get(slug);
		if (foundManager) {
			foundManager.forEveryRegistry((registry) => foundManager.removeRegistry(registry.id));
			window.Thermal.managers.delete(slug);
		}
	}
};

//#endregion
//#region src/hierarchy/abstraction/AbstractManagerProvider.ts
var AbstractManagerProvider = class extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.UUIDManagerListeners = this.UUID + "__manager-listener";
		this.palette = {
			key: "jet",
			data: ThermalPalettes["jet"]
		};
		this.smooth = false;
		this.graphSmooth = false;
		this.autoclear = false;
	}
	connectedCallback() {
		super.connectedCallback();
		const options = {};
		options.palette = this.sanitizeStringPalette(this.palette.key);
		this.manager = createOrGetManager(this.slug, options);
		this.tool = this.manager.tool.value;
		this.tools = this.manager.tool.tools;
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.manager !== void 0) removeManager(this.manager);
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.manager.palette.addListener(this.UUIDManagerListeners, (value) => {
			this.setPalette(value);
		});
		this.manager.smooth.addListener(this.UUIDManagerListeners, (value) => {
			this.smooth = value;
		});
		this.manager.graphSmooth.addListener(this.UUIDManagerListeners, (value) => {
			this.graphSmooth = value;
		});
		this.manager.tool.addListener(this.UUIDManagerListeners, (value) => {
			this.tool = value;
		});
	}
	attributeChangedCallback(name, _old, value) {
		super.attributeChangedCallback(name, _old, value);
		if (name === "palette" && this.manager) {
			const palette = this.sanitizeStringPalette(value);
			this.manager.palette.setPalette(palette);
		}
	}
	sanitizeStringPalette(input) {
		let valid = true;
		if (input === null || input === void 0) valid = false;
		else if (!Object.keys(ThermalPalettes).includes(input)) valid = false;
		return valid ? input : "jet";
	}
	setPalette(key) {
		this.palette = {
			key,
			data: ThermalPalettes[key]
		};
	}
	render() {
		return html`<slot></slot>`;
	}
};
__decorate([provide({ context: toolContext })], AbstractManagerProvider.prototype, "tool", void 0);
__decorate([provide({ context: toolsContext })], AbstractManagerProvider.prototype, "tools", void 0);

//#endregion
//#region src/hierarchy/providers/ManagerProvider.ts
let ManagerProviderElement = class ManagerProviderElement extends AbstractManagerProvider {
	constructor(..._args) {
		super(..._args);
		this.UUIDManagerListeners = this.UUID + "__manager-listener";
		this.palette = {
			key: "jet",
			data: ThermalPalettes["jet"]
		};
		this.smooth = false;
		this.graphSmooth = false;
		this.autoclear = false;
	}
};
__decorate([provide({ context: managerContext })], ManagerProviderElement.prototype, "manager", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], ManagerProviderElement.prototype, "slug", void 0);
__decorate([provide({ context: managerPaletteContext }), property({
	type: String,
	attribute: true,
	reflect: true,
	converter: {
		fromAttribute: (value) => {
			return {
				key: value,
				data: ThermalPalettes[value]
			};
		},
		toAttribute: (value) => {
			return value.key.toString();
		}
	}
})], ManagerProviderElement.prototype, "palette", void 0);
__decorate([provide({ context: managerSmoothContext }), property({
	type: String,
	reflect: true,
	attribute: true
})], ManagerProviderElement.prototype, "smooth", void 0);
__decorate([provide({ context: managerGraphFunctionContext }), property({
	type: String,
	reflect: true,
	attribute: true
})], ManagerProviderElement.prototype, "graphSmooth", void 0);
__decorate([property({
	type: Boolean,
	reflect: true
})], ManagerProviderElement.prototype, "autoclear", void 0);
__decorate([provide({ context: toolContext })], ManagerProviderElement.prototype, "tool", void 0);
__decorate([provide({ context: toolsContext })], ManagerProviderElement.prototype, "tools", void 0);
ManagerProviderElement = __decorate([customElement("manager-provider")], ManagerProviderElement);

//#endregion
//#region src/hierarchy/abstraction/AbstractRegistryProvider.ts
var AbstractRegistryProvider = class extends AbstractManagerConsumer {
	constructor(..._args) {
		super(..._args);
		this.UUIDRegistryListeners = this.UUID + "__registry-listener";
		this.opacity = 1;
		this.loading = false;
		this.autoclear = false;
		this.forceNew = false;
		this.setHighlight = (value) => {
			this.highlight = value;
		};
	}
	createRegistry(slug) {
		const registry = this.manager.addOrGetRegistry(slug);
		registry.palette.setPalette(this.manager.palette.value);
		if (this.from !== void 0 && this.to !== void 0) registry.range.imposeRange({
			from: this.from,
			to: this.to
		});
		return registry;
	}
	hydrateRegistry(registry) {
		registry.opacity.addListener(this.UUIDRegistryListeners, (value) => {
			this.opacity = value;
		});
		registry.minmax.addListener(this.UUIDRegistryListeners, (value) => {
			if (value === void 0) {
				this.min = void 0;
				this.max = void 0;
			} else {
				this.min = value.min;
				this.max = value.max;
			}
		});
		registry.range.addListener(this.UUIDRegistryListeners, (value) => {
			if (value === void 0) {
				this.from = void 0;
				this.to = void 0;
			} else {
				this.from = value.from;
				this.to = value.to;
			}
		});
		registry.loading.addListener(this.UUIDRegistryListeners, (value) => {
			this.loading = value;
		});
	}
	connectedCallback() {
		super.connectedCallback();
		this.registry = this.createRegistry(this.slug);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.autoclear === true && this.registry !== void 0) this.manager.removeRegistry(this.registry.id);
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.hydrateRegistry(this.registry);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("from") || _changedProperties.has("to")) {
			if (this.from !== void 0 && this.to !== void 0) this.registry.range.imposeRange({
				from: this.from,
				to: this.to
			});
		}
		if (_changedProperties.has("opacity")) {
			const sanitisedOpacity = Math.min(1, Math.max(0, this.opacity));
			if (sanitisedOpacity !== this.registry.opacity.value) this.registry.opacity.imposeOpacity(sanitisedOpacity);
		}
	}
	render() {
		return html`<slot></slot>`;
	}
};
__decorate([property({
	type: Boolean,
	reflect: true
})], AbstractRegistryProvider.prototype, "forceNew", void 0);
__decorate([provide({ context: registryHighlightContext })], AbstractRegistryProvider.prototype, "highlight", void 0);
__decorate([provide({ context: setRegistryHighlightContext })], AbstractRegistryProvider.prototype, "setHighlight", void 0);

//#endregion
//#region src/hierarchy/providers/RegistryProvider.ts
let RegistryProviderElement = class RegistryProviderElement extends AbstractRegistryProvider {
	constructor(..._args) {
		super(..._args);
		this.opacity = 1;
		this.loading = false;
		this.autoclear = false;
	}
	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has("slug") === true && changedProperties.get("slug") !== this.slug) {
			if (this.registry !== void 0) {
				if (this.autoclear === true) {}
			}
		}
	}
};
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], RegistryProviderElement.prototype, "slug", void 0);
__decorate([provide({ context: registryContext })], RegistryProviderElement.prototype, "registry", void 0);
__decorate([provide({ context: registryOpacityContext }), property({
	type: Number,
	reflect: true,
	attribute: true
})], RegistryProviderElement.prototype, "opacity", void 0);
__decorate([provide({ context: registryMinContext }), state()], RegistryProviderElement.prototype, "min", void 0);
__decorate([provide({ context: registryMaxContext }), state()], RegistryProviderElement.prototype, "max", void 0);
__decorate([provide({ context: registryRangeFromContext }), property({
	type: Number,
	reflect: true,
	attribute: true
})], RegistryProviderElement.prototype, "from", void 0);
__decorate([provide({ context: registryRangeToContext }), property({
	type: Number,
	reflect: true,
	attribute: true
})], RegistryProviderElement.prototype, "to", void 0);
__decorate([provide({ context: registryLoadingContext }), property({
	type: String,
	reflect: true,
	attribute: true
})], RegistryProviderElement.prototype, "loading", void 0);
__decorate([property({
	type: Boolean,
	reflect: true
})], RegistryProviderElement.prototype, "autoclear", void 0);
RegistryProviderElement = __decorate([customElement("registry-provider")], RegistryProviderElement);

//#endregion
//#region src/hierarchy/providers/FileMirror.ts
let FileMirrorElement = class FileMirrorElement extends AbstractFileProvider {
	constructor(..._args) {
		super(..._args);
		this.providedSelf = this;
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("thermal")) {
			const oldUrl = _changedProperties.get("thermal");
			if (oldUrl) {
				this.group.files.removeFile(oldUrl);
				this.file = void 0;
			}
		}
		if (_changedProperties.has("file")) {
			if (this.file) {
				this.loading = false;
				this.recieveInstance(this.file);
				setTimeout(() => this.file && this.onSuccess.call(this.file), 0);
			}
		}
	}
};
__decorate([provide({ context: fileProviderContext })], FileMirrorElement.prototype, "providedSelf", void 0);
__decorate([provide({ context: fileContext }), property()], FileMirrorElement.prototype, "file", void 0);
__decorate([property({
	type: Boolean,
	converter: {
		fromAttribute(value) {
			return value === "true";
		},
		toAttribute(value) {
			if (value === true) return "true";
			return "false";
		}
	}
})], FileMirrorElement.prototype, "batch", void 0);
__decorate([property({ type: String })], FileMirrorElement.prototype, "thermal", void 0);
__decorate([property({ type: String })], FileMirrorElement.prototype, "visible", void 0);
__decorate([property({ type: String })], FileMirrorElement.prototype, "analysis1", void 0);
__decorate([property({ type: String })], FileMirrorElement.prototype, "analysis2", void 0);
__decorate([property({ type: String })], FileMirrorElement.prototype, "analysis3", void 0);
__decorate([property({ type: String })], FileMirrorElement.prototype, "analysis4", void 0);
__decorate([property({ type: String })], FileMirrorElement.prototype, "analysis5", void 0);
__decorate([property({ type: String })], FileMirrorElement.prototype, "analysis6", void 0);
__decorate([property({ type: String })], FileMirrorElement.prototype, "analysis7", void 0);
FileMirrorElement = __decorate([customElement("file-mirror")], FileMirrorElement);

//#endregion
//#region src/hierarchy/providers/FileCopy.ts
let FileCopyElement = class FileCopyElement extends AbstractFileProvider {
	constructor(..._args) {
		super(..._args);
		this.providedSelf = this;
		this.ms = 0;
		this.speed = 1;
		this.recording = false;
		this.playing = false;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		if (this.originalFile) this.processFileCopy(this.originalFile);
	}
	async processFileCopy(originalFile) {
		const originalRange = originalFile.group.registry.range.value;
		originalFile.group.registry;
		const copiedFile = await originalFile.reader.createInstance(this.group);
		copiedFile.group.registry.postLoadedProcessing();
		if (originalRange) copiedFile.group.registry.range.imposeRange(originalRange);
		this.onSuccess.call(copiedFile);
		this.recieveInstance(copiedFile);
		setTimeout(() => {
			try {
				copiedFile.draw();
			} catch (e) {
				console.warn("[file-copy] redraw failed for copied instance", e);
			}
		}, 0);
	}
	syncSlot(index) {
		if (this.originalFile === void 0 || this.file === void 0) {
			console.warn("cannot sync slot for file copy, original or copy is missing");
			return;
		}
		const serialized = this.originalFile.slots.getSlot(index)?.serialized;
		if (serialized) this.file.slots.createAnalysisFromSerialized(serialized, index);
	}
	copyAnalysesFromParent() {
		for (let i = 0; i < 7; i++) this.syncSlot(i);
	}
	clearAnalyses() {
		this.file?.analysis.layers.removeAllAnalyses();
	}
	static {
		this.styles = css`
    
        :host,
        registry-provider,
        group-provider {
            display: contents;
        }

    `;
	}
	render() {
		return html`${this.ready ? html`<slot></slot>` : nothing}`;
	}
};
__decorate([provide({ context: fileProviderContext })], FileCopyElement.prototype, "providedSelf", void 0);
__decorate([state(), consume({
	context: fileContext,
	subscribe: true
})], FileCopyElement.prototype, "originalFile", void 0);
__decorate([property({
	type: Number,
	reflect: true,
	attribute: true
}), provide({ context: fileMsContext })], FileCopyElement.prototype, "ms", void 0);
__decorate([property({
	type: Number,
	reflect: true,
	attribute: true
}), provide({ context: filePlaybackSpeedContext })], FileCopyElement.prototype, "speed", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
}), provide({ context: fileRecordingContext })], FileCopyElement.prototype, "recording", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
}), provide({ context: filePlayingContext })], FileCopyElement.prototype, "playing", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileCopyElement.prototype, "analysis1", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileCopyElement.prototype, "analysis2", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileCopyElement.prototype, "analysis3", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileCopyElement.prototype, "analysis4", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileCopyElement.prototype, "analysis5", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileCopyElement.prototype, "analysis6", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileCopyElement.prototype, "analysis7", void 0);
FileCopyElement = __decorate([customElement("file-copy")], FileCopyElement);

//#endregion
//#region src/controls/manager/ManagerGraphSmoothSwitch.ts
let ManagerGraphSmoothSwitch = class ManagerGraphSmoothSwitch extends AbstractManagerConsumer {
	static {
		this.styles = css`
    
        :host {}

    `;
	}
	render() {
		return html`

            <div>

                <thermal-btn
                    variant=${this.smooth ? "default" : "foreground"}
                    @click=${() => this.manager.graphSmooth.setGraphSmooth(false)}
                >${t(T.straightlines)}</thermal-btn>

                <thermal-btn
                    variant=${this.smooth ? "foreground" : "default"}
                    @click=${() => this.manager.graphSmooth.setGraphSmooth(true)}
                >${t(T.smoothlines)}</thermal-btn>

            </div>
        `;
	}
};
__decorate([consume({
	context: managerGraphFunctionContext,
	subscribe: true
})], ManagerGraphSmoothSwitch.prototype, "smooth", void 0);
ManagerGraphSmoothSwitch = __decorate([customElement("manager-graph-smooth-switch")], ManagerGraphSmoothSwitch);

//#endregion
//#region src/controls/manager/ManagerToolsBar.ts
let ManagerToolBar = class ManagerToolBar extends AbstractManagerConsumer {
	/** Handle user input events */
	onSelect(tool) {
		this.manager.tool.selectTool(tool);
	}
	static {
		this.styles = css`
:host {
    display: flex;
    font-size: var(--thermal-fs);
    flex-direction: column;
    gap: 0.25em;
}

:host([horizontal="true"]) {
    flex-direction: row;
}

.active {
    color: var( --thermal-foreground );
}

thermal-btn {
    width: 2.5em;
    padding: 3px;
    &:hover {
        color: var(--thermal-primary);
    }
}`;
	}
	renderTool(key, tool) {
		const classes = {
			[key]: true,
			button: true,
			active: tool.key === this.value.key
		};
		return html`<thermal-btn 
    tooltip=${t(T[tool.name])}
    tooltip-placement="right"
    class=${classMap(classes)} 
    @click=${() => {
			this.manager.tool.selectTool(tool);
		}}
    variant=${tool.key === this.value.key ? "background" : "default"}
>
    ${unsafeSVG(tool.icon)}
</thermal-btn>`;
	}
	render() {
		if (this.manager === void 0) return nothing;
		return Object.entries(this.manager.tool.tools).map(([key, tool]) => {
			return this.renderTool(key, tool);
		});
	}
};
__decorate([consume({
	context: toolContext,
	subscribe: true
}), state()], ManagerToolBar.prototype, "value", void 0);
__decorate([consume({
	context: toolsContext,
	subscribe: true
}), state()], ManagerToolBar.prototype, "tools", void 0);
ManagerToolBar = __decorate([customElement("manager-tool-bar")], ManagerToolBar);

//#endregion
//#region src/controls/manager/AbstractPaletteSwitch.ts
var AbstractPaletteSwitch = class extends AbstractManagerConsumer {
	constructor(..._args) {
		super(..._args);
		this.advancedPalettesContext = false;
		this.palettes = [];
	}
	updated(_changedProperties) {
		const showAdvancedPalettes = this.advancedPalettesProperty ?? this.advancedPalettesContext;
		const basicPalettes = [
			"iron",
			"jet",
			"white_hot",
			"black_hot"
		];
		if (_changedProperties.has("advancedPalettesContext") || _changedProperties.has("advancedPalettesProperty")) if (showAdvancedPalettes) this.palettes = Object.values(ThermalPalettes);
		else {
			this.palettes = Object.entries(ThermalPalettes).filter(([key, palette]) => basicPalettes.includes(key)).map(([key, palette]) => palette);
			if (!basicPalettes.includes(this.value.key)) this.onSelect("iron");
		}
		if (_changedProperties.has("value") && !showAdvancedPalettes && !basicPalettes.includes(this.value.key)) this.onSelect("iron");
	}
	/** Handle user input events */
	onSelect(palette) {
		this.manager.palette.setPalette(palette);
	}
};
__decorate([consume({
	context: advancedPalettesContext,
	subscribe: true
}), state()], AbstractPaletteSwitch.prototype, "advancedPalettesContext", void 0);
__decorate([property({
	type: Boolean,
	attribute: "advanced-palettes"
})], AbstractPaletteSwitch.prototype, "advancedPalettesProperty", void 0);
__decorate([state()], AbstractPaletteSwitch.prototype, "palettes", void 0);
__decorate([consume({
	context: managerPaletteContext,
	subscribe: true
}), state()], AbstractPaletteSwitch.prototype, "value", void 0);

//#endregion
//#region src/controls/manager/ManagerPaletteButtons.ts
let ManagerPaletteButtons = class ManagerPaletteButtons extends AbstractPaletteSwitch {
	static {
		this.styles = css`
:host {
    display: flex;
    width: content-width;
    gap: 5px;
}

.palette {
    width: calc( var( --thermal-gap ) * 2 );
    height: calc( var( --thermal-fs ) * .8 );
    border-radius: var( --thermal-fs-small );
}`;
	}
	paletteTemplate(palette) {
		return html`<span class="palette" style="background:${palette.gradient}"></span>`;
	}
	render() {
		return this.palettes.map(((palette) => html`<thermal-btn 
    @click=${() => this.onSelect(palette.slug)} 
    variant="${palette.name === this.manager.palette.currentPalette.name ? "background" : "default"}"
    tooltip="${t(T.palettename, { name: palette.name })}"
>
    ${this.paletteTemplate(palette)}
</thermal-btn>`));
	}
};
ManagerPaletteButtons = __decorate([customElement("manager-palette-buttons")], ManagerPaletteButtons);

//#endregion
//#region src/controls/manager/ManagerPaletteDropdown.ts
let ManagerPaletteDropdown = class ManagerPaletteDropdown extends AbstractPaletteSwitch {
	static {
		this.styles = css`

    .palette {
        display: block;
        width: calc( var( --thermal-gap ) * 2 );
        height: calc( var( --thermal-fs ) * .8 );
        border-radius: var( --thermal-fs-small );
    }

    thermal-btn {
        width: 100%;
        justify-content: flex-start;
    }

    `;
	}
	paletteTemplate(palette, className) {
		return html`<span class="palette" style="background:${palette.gradient}"></span><span>${palette.name}</span>`;
	}
	render() {
		return html`

            <thermal-dropdown .tooltip=${t(T.colourpalette)}>
                    <span slot="invoker" class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>

                ${this.palettes.map((palette) => html`
                    <div slot="option"><thermal-btn @click=${() => this.onSelect(palette.slug)} variant="${palette.name === this.manager.palette.currentPalette.name ? "background" : "slate"}">
                        ${this.paletteTemplate(palette)}
                    </thermal-btn></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `;
	}
};
ManagerPaletteDropdown = __decorate([customElement("manager-palette-dropdown")], ManagerPaletteDropdown);

//#endregion
//#region src/controls/manager/ManagerImageSmoothSwitch.ts
let ManagerImageSmoothSwitch = class ManagerImageSmoothSwitch extends AbstractManagerConsumer {
	static {
		this.styles = css`
    
        :host {
            display: block;
        }

    `;
	}
	render() {
		return html`<thermal-btn
    variant=${this.smooth ? "default" : "foreground"}
    @click=${() => this.manager.smooth.setSmooth(false)}
>${t(T.pixelated)}</thermal-btn>

<thermal-btn
    variant=${this.smooth ? "foreground" : "default"}
    @click=${() => this.manager.smooth.setSmooth(true)}
>${t(T.smooth)}</thermal-btn>`;
	}
};
__decorate([consume({
	context: managerSmoothContext,
	subscribe: true
})], ManagerImageSmoothSwitch.prototype, "smooth", void 0);
ManagerImageSmoothSwitch = __decorate([customElement("manager-smooth-switch")], ManagerImageSmoothSwitch);

//#endregion
//#region src/controls/registry/Histogram.ts
let HistogramElement = class HistogramElement extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.histogram = [];
		this.height = "calc( var( --thermal-gap ) * 1.5 )";
		this.heightExpanded = "400px";
		this.expandable = false;
		this.expanded = false;
		this.loading = false;
		this.error = false;
	}
	getClassName() {
		return "HistogramElement";
	}
	connectedCallback() {
		super.connectedCallback();
		this.loading = this.registry.histogram.loading;
		this.registry.histogram.onCalculationStart.set(this.UUID, () => {
			this.loading = true;
			this.error = false;
		});
		this.registry.histogram.onCalculationEnd.set(this.UUID, (success) => {
			this.loading = false;
			this.error = !success;
		});
		this.registry.loading.addListener(this.UUID, (value) => {
			if (value === true) this.loading = true;
		});
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.registry.histogram.addListener(this.UUID, (value) => {
			this.histogram = value;
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.registry.loading.removeListener(this.UUID);
		this.registry.histogram.removeListener(this.UUID);
		this.registry.histogram.onCalculationStart.delete(this.UUID);
		this.registry.histogram.onCalculationEnd.delete(this.UUID);
	}
	static {
		this.styles = css`

        @keyframes spinner {
            0% {left: 0px; width: 0%;}
            50% {left: 25%; width: 50%;}
            100% {left: 100%; width: 0%;}
        }

        .container {
            padding: 0 calc( var( --thermal-gap ) * .5 );
            position: relative;

            .spinner {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: none;
                align-items: center;
                justify-content: center;
                

                span {
                    width: calc( 100% - var(--thermal-gap) );
                    height: 6px;
                    display: block;
                    position: relative;
                    overflow: hidden;
                    border-radius: 3px;

                    &::after {
                        content: "";
                        display: block;
                        background: var(--thermal-slate-dark);
                        position: absolute;
                        opacity: .2;
                        height: 100%;
                        animation-name: spinner;
                        animation-duration: 1s;
                        animation-iteration-count: infinite;
                        animation-timing-function: linear
                    }
                }

            }

            &.loading:not(.has-error) {

                .spinner {
                    display: flex;
                }

                .histogram {
                    opacity: .8;
                }
            }

        }

        .histogram {
            display: flex;
            width: 100%;
            background:  transparent;
            transition: opacity .3s ease-in-out;

            &.expandable {
                transition: all .2s ease-in-out;
                cursor: pointer;
                &:hover {
                    background: var(--thermal-background);
                }
            }
        }

        .histogram-bar {
            flex-grow: 1;
            position: relative;
            height: 100%;

            &:hover {
                .histogram-bar-inner {
                    background: var(--thermal-foreground);
                }
            }
        }

        .histogram-bar-inner {
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            background: var(--thermal-slate-dark);
            transition: height .5s ease-in-out;
        }

        .error {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--thermal-slate-light);
            color: var(--thermal-slate);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
        }


    `;
	}
	render() {
		return html`

            <div class="container ${this.histogram.length > 0 && this.loading === false ? "ready" : "loading"} ${this.error ? "has-error" : "is-ok"}">

                <div class="histogram ${this.expandable === true ? "expandable" : ""}" style="height: ${this.expanded ? this.heightExpanded : this.height}" part="bg" @click=${() => {
			if (this.expandable === true) this.expanded = !this.expanded;
		}}>

                    ${this.histogram.map((item) => {
			return html`
                            <div class="histogram-bar" data-height="${item.height}" data-percentage="${item.percentage}" data-count="${item.count}" data-from="${item.from}" data-to="${item.to}">
                                <div style="height: ${item.height}%" class="histogram-bar-inner"></div>
                            </div
                        `;
		})}

                </div>

                ${this.error === true ? html`<div class="error">Unable to calculate the histogram</div>` : nothing}

                <div class="spinner">
                    <span></span>
                </div>

            </div>
        
        `;
	}
};
__decorate([state()], HistogramElement.prototype, "histogram", void 0);
__decorate([property({
	type: String,
	reflect: true
})], HistogramElement.prototype, "height", void 0);
__decorate([property({
	type: String,
	reflect: true
})], HistogramElement.prototype, "heightExpanded", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
})], HistogramElement.prototype, "expandable", void 0);
__decorate([state()], HistogramElement.prototype, "expanded", void 0);
__decorate([state()], HistogramElement.prototype, "loading", void 0);
__decorate([state()], HistogramElement.prototype, "error", void 0);
HistogramElement = __decorate([customElement("registry-histogram")], HistogramElement);

//#endregion
//#region src/controls/registry/OpacitySlider.ts
let OpacityRangeElement = class OpacityRangeElement extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.containerRef = createRef();
	}
	connectedCallback() {
		super.connectedCallback();
		const handleIncomingChange = (value) => {
			if (this.value !== value) this.renderRoot.querySelector("#handler").value = value.toString();
		};
		this.registry.opacity.addListener(this.UUID, handleIncomingChange.bind(this));
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.registry.opacity.removeListener(this.UUID);
	}
	/** Handle user input events */
	handleUserChangeEvent(event) {
		const value = parseFloat(event.target.value);
		this.registry.opacity.imposeOpacity(value);
	}
	static {
		this.styles = css`

        :host {
        }

        .thermal-opacity-handler {
            display: block;
            width: 100%;
            max-width: 100px;
            min-width: 75px;
            cursor: pointer;
            accent-color: var(--thermal-primary);
            
        }
        
        .thermal-opacity-container {
            display: flex;
            width: 100%;
            align-items: space-between;
            justify-content: space-between;
            color: var( --thermal-slate-dark );
            font-size: calc( var( --thermal-fs-sm ) * .7 );
            max-width: 100px;
            min-width: 75px;
        }
    
    `;
	}
	render() {
		return html`
            <div ${ref(this.containerRef)}>
                <input
                    id="handler"
                    class="thermal-opacity-handler"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value="${this.value}"
                    @input="${this.handleUserChangeEvent}"
                />
                <div class="thermal-opacity-container">
                    <div>VIS</div>
                    <div>${this.value}</div>
                    <div>IR</div>
                </div>
            </div>
            <slot></slot>
        `;
	}
};
__decorate([consume({
	context: registryOpacityContext,
	subscribe: true
})], OpacityRangeElement.prototype, "value", void 0);
OpacityRangeElement = __decorate([customElement("registry-opacity-slider")], OpacityRangeElement);

//#endregion
//#region src/controls/registry/RangeAutoButton.ts
let RegistrySetAutoRangeElement$1 = class RegistrySetAutoRangeElement extends AbstractRegistryConsumer {
	doAction() {
		this.registry.range.applyAuto();
	}
	render() {
		return html`<thermal-btn @click=${this.doAction}>${t(T.automaticrange)}</thermal-btn>`;
	}
};
RegistrySetAutoRangeElement$1 = __decorate([customElement("registry-range-auto-button")], RegistrySetAutoRangeElement$1);

//#endregion
//#region src/controls/registry/RangeDisplay.ts
let RegistryRangeDisplay = class RegistryRangeDisplay extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.fixed = 2;
		this.separator = "-";
	}
	render() {
		if (this.from === void 0 || this.to === void 0) return nothing;
		return html`
            <div>
                <span>${this.from?.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${this.to?.toFixed(this.fixed)} °C</span>
            </div>
        `;
	}
};
__decorate([consume({
	context: registryRangeFromContext,
	subscribe: true
})], RegistryRangeDisplay.prototype, "from", void 0);
__decorate([consume({
	context: registryRangeToContext,
	subscribe: true
})], RegistryRangeDisplay.prototype, "to", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true,
	converter: {
		fromAttribute: (value) => {
			return Math.round(parseFloat(value));
		},
		toAttribute: (value) => {
			return value.toString();
		}
	}
})], RegistryRangeDisplay.prototype, "fixed", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], RegistryRangeDisplay.prototype, "separator", void 0);
RegistryRangeDisplay = __decorate([customElement("registry-range-display")], RegistryRangeDisplay);

//#endregion
//#region src/controls/registry/RangeFullButton.ts
let RegistrySetAutoRangeElement = class RegistrySetAutoRangeElement extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.buttonRef = createRef();
	}
	doAction() {
		this.registry.range.applyMinmax();
	}
	mouseenter() {
		if (this.registry.minmax.value !== void 0 && this.setter) this.setter({
			from: this.registry.minmax.value.min,
			to: this.registry.minmax.value.max
		});
	}
	mouseleave() {
		if (this.setter) this.setter(void 0);
	}
	render() {
		return html`<thermal-btn 
    ${ref(this.buttonRef)} 
    @click=${this.doAction} 
    @mouseenter="${this.mouseenter}" 
    @mouseleave="${this.mouseleave}"
    @focus="${this.mouseenter}"
    @blur="${this.mouseleave}"
>${t(T.fullrange)}</thermal-btn>`;
	}
};
__decorate([consume({
	context: setRegistryHighlightContext,
	subscribe: true
})], RegistrySetAutoRangeElement.prototype, "setter", void 0);
RegistrySetAutoRangeElement = __decorate([customElement("registry-range-full-button")], RegistrySetAutoRangeElement);

//#endregion
//#region src/controls/registry/RangeSlider.ts
let RangeSliderElement = class RangeSliderElement extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.hasInitialValues = false;
		this.sliderRef = createRef();
		this.initialised = false;
		this.loading = false;
	}
	getClassName() {
		return "RangeSliderElement";
	}
	connectedCallback() {
		super.connectedCallback();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.registry.range.removeListener(this.UUID);
		this.registry.minmax.removeListener(this.UUID);
		this.initialised = false;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.registry.minmax.addListener(this.UUID, (value) => {
			if (this.registry.range.value) this.registry.range.imposeRange({
				from: this.registry.range.value.from,
				to: this.registry.range.value.to
			});
		});
	}
	willUpdate(_changedProperties) {
		super.willUpdate(_changedProperties);
		if ("from" in _changedProperties && "to" in _changedProperties) this.registry.range.imposeRange({
			from: _changedProperties.from,
			to: _changedProperties.to
		});
	}
	getSlider() {
		return this.renderRoot?.querySelector("tc-range-slider");
	}
	sliderDownListener(event) {
		const detail = event.detail;
		this.from = detail.value1;
		this.to = detail.value2;
	}
	sliderUpListener() {
		if (this.from !== void 0 && this.to !== void 0) this.registry.range.imposeRange({
			from: this.from,
			to: this.to
		});
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("loading") && this.loading === false) this.initialiseSlider();
	}
	/**
	* Create the initial listeners and bind the CSS to the slider
	*/
	initialiseSlider() {
		this.initialised = true;
		setTimeout(() => {
			const slider = this.sliderRef.value;
			if (slider) {
				slider.addCSS(`
.tooltip {
    font-size: 12px;
}
.pointer-shape {
    border-radius: 0;
    width: 10px;
}`);
				slider.addEventListener("change", (event) => {
					const detail = event.detail;
					this.from = detail.value1;
					this.to = detail.value2;
				});
				slider.addEventListener("onMouseUp", () => {
					if (this.from !== void 0 && this.to !== void 0) this.registry.range.imposeRange({
						from: this.from,
						to: this.to
					});
				});
			}
		}, 0);
		this.registry.range.addListener(this.UUID, (value) => {
			if (value) {
				if (this.from !== void 0 && this.to !== void 0) if (this.max < value.from) {
					this.to = value.to;
					this.from = value.from;
				} else {
					this.from = value.from;
					this.to = value.to;
				}
				else {
					this.from = value.from;
					this.to = value.to;
				}
				if (this.sliderRef.value) {
					if (value.from && this.from) this.sliderRef.value.setAttribute("value1", this.from.toString());
					if (value.to && this.to) this.sliderRef.value.setAttribute("value2", this.to.toString());
				}
			}
		});
	}
	static {
		this.styles = css`
.container {
    height: var( --thermal-gap );
    padding: calc( var( --thermal-gap ) * .5 );
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: -6px;
}

.loading {
    .skeleton {
        background: var( --thermal-slate );
        height: calc( var( --thermal-fs ) * .9 );
    }
    tc-range-slider {
        display: none;
    }
}

.ready {
    .skeleton {
        display: none;
    }
}`;
	}
	render() {
		if (this.loading === true) return html`<div class="container loading"><div class"skeleton"></div></div>`;
		return html`
<div class="container ready">

    <div class="skeleton"></div>

    <tc-range-slider 
${ref(this.sliderRef)}
slider-width="100%"
slider-height="15px"
animate-onclick="false"
min="${this.min}"
max="${this.max}"

value1="${this.from}"
value2="${this.to}"

slider-radius="0"

slider-bg="var( --thermal-slate )"
slider-bg-hover="var( --thermal-slate )"
slider-bg-fill="${this.palette.data.gradient}"
pointer-shadow="0 0 5px var(--thermal-primary)"
pointer-shadow-hover="0 0 10px var(--thermal-primary)"
pointer-shadow-hover="0 0 10px var(--thermal-primary)"

pointer-border="2px solid var(--thermal-primary)"
pointer-border-hover="2px solid var(--thermal-primary)"
pointer-border-focus="2px solid var(--thermal-primary)"
pointer-bg="${this.palette.data.pixels[0]}"
                
pointer2-border="2px solid var(--thermal-primary)"
pointer2-border-hover="2px solid var(--thermal-primary)"
pointer2-border-focus="2px solid var(--thermal-primary)"
pointer2-bg="${this.palette.data.pixels[this.palette.data.pixels.length - 1]}"
                
generate-labels="true"

moving-tooltip="true"
moving-tooltip-distance-to-pointer="-30"
moving-tooltip-width="40"
moving-tooltip-height="20"
moving-tooltip-bg="var(--thermal-slate-dark)"
moving-tooltip-text-color="var(--thermal-background)"            
    ></tc-range-slider>

</div>

<slot></slot>`;
	}
};
__decorate([consume({
	context: registryMinContext,
	subscribe: true
}), state()], RangeSliderElement.prototype, "min", void 0);
__decorate([consume({
	context: registryMaxContext,
	subscribe: true
}), state()], RangeSliderElement.prototype, "max", void 0);
__decorate([consume({
	context: registryRangeFromContext,
	subscribe: true
}), state()], RangeSliderElement.prototype, "from", void 0);
__decorate([consume({
	context: registryRangeToContext,
	subscribe: true
}), state()], RangeSliderElement.prototype, "to", void 0);
__decorate([state()], RangeSliderElement.prototype, "hasInitialValues", void 0);
__decorate([consume({
	context: managerPaletteContext,
	subscribe: true
}), state()], RangeSliderElement.prototype, "palette", void 0);
__decorate([state()], RangeSliderElement.prototype, "sliderRef", void 0);
__decorate([state()], RangeSliderElement.prototype, "initialised", void 0);
__decorate([state(), consume({
	context: loadingContext,
	subscribe: true
})], RangeSliderElement.prototype, "loading", void 0);
RangeSliderElement = __decorate([customElement("registry-range-slider")], RangeSliderElement);

//#endregion
//#region src/controls/registry/RegistryRangeForm.ts
let RegistryRangeForm = class RegistryRangeForm extends AbstractRegistryConsumer {
	constructor(..._args) {
		super(..._args);
		this.stacked = false;
		this.step = 1;
		this.availableSteps = [
			.01,
			.1,
			.5,
			1,
			5,
			10
		];
		this.inputValues = {
			from: "",
			to: ""
		};
		this.isUpdatingFromRegistry = false;
		this.hasHistogram = false;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.hydrate();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.dehydrate();
		if (this.debounceTimer) clearTimeout(this.debounceTimer);
	}
	hydrate() {
		if (this.registry === void 0) return;
		this.recieveMinmax(this.registry.minmax.value);
		this.recieveRange(this.registry.range.value);
		this.registry.minmax.addListener(this.UUID, this.recieveMinmax.bind(this));
		this.registry.range.addListener(this.UUID, this.recieveRange.bind(this));
		this.registry.histogram.addListener(this.UUID, (value) => {
			this.hasHistogram = !!value;
		});
	}
	dehydrate() {
		if (this.registry === void 0) return;
		this.registry.minmax.removeListener(this.UUID);
		this.registry.range.removeListener(this.UUID);
	}
	recieveMinmax(value) {
		if (value) {
			if (this.min !== value.min) this.min = value.min;
			if (this.max !== value.max) this.max = value.max;
		} else {
			this.min = void 0;
			this.max = void 0;
			this.from = void 0;
			this.to = void 0;
			this.inputValues = {
				from: "",
				to: ""
			};
		}
	}
	recieveRange(value) {
		this.isUpdatingFromRegistry = true;
		if (value) {
			if (this.from !== value.from) {
				this.from = value.from;
				this.inputValues = {
					...this.inputValues,
					from: value.from?.toFixed(2) ?? ""
				};
			}
			if (this.to !== value.to) {
				this.to = value.to;
				this.inputValues = {
					...this.inputValues,
					to: value.to?.toFixed(2) ?? ""
				};
			}
		} else {
			this.from = void 0;
			this.to = void 0;
			this.inputValues = {
				from: "",
				to: ""
			};
		}
		this.isUpdatingFromRegistry = false;
	}
	updateFrom(value) {
		if (this.registry && value !== void 0 && this.to !== void 0) {
			this.from = value;
			this.registry.range.imposeRange({
				from: value,
				to: this.to
			});
		}
	}
	updateTo(value) {
		if (this.registry && value !== void 0 && this.from !== void 0) {
			this.to = value;
			this.registry.range.imposeRange({
				from: this.from,
				to: value
			});
		}
	}
	debouncedUpdate(type, value) {
		if (this.debounceTimer) clearTimeout(this.debounceTimer);
		this.debounceTimer = window.setTimeout(() => {
			if (this.isUpdatingFromRegistry) return;
			const numValue = parseFloat(value);
			if (isNaN(numValue)) return;
			if (type === "from" && this.isValidFromValue(numValue)) this.updateFrom(numValue);
			else if (type === "to" && this.isValidToValue(numValue)) this.updateTo(numValue);
		}, 300);
	}
	isValidFromValue(value) {
		if (this.min !== void 0 && value < this.min) return false;
		if (this.to !== void 0 && value > this.to) return false;
		return true;
	}
	isValidToValue(value) {
		if (this.max !== void 0 && value > this.max) return false;
		if (this.from !== void 0 && value < this.from) return false;
		return true;
	}
	canStepFrom(direction) {
		if (this.from === void 0) return false;
		const newValue = direction === "up" ? this.from + this.step : this.from - this.step;
		return this.isValidFromValue(newValue);
	}
	canStepTo(direction) {
		if (this.to === void 0) return false;
		const newValue = direction === "up" ? this.to + this.step : this.to - this.step;
		return this.isValidToValue(newValue);
	}
	canSetMin() {
		return this.min !== void 0 && this.to !== void 0 && this.min <= this.to && this.from !== this.min;
	}
	canSetMax() {
		return this.max !== void 0 && this.from !== void 0 && this.max >= this.from && this.to !== this.max;
	}
	stepFrom(direction) {
		if (this.from === void 0 || !this.canStepFrom(direction)) return;
		const newValue = direction === "up" ? this.from + this.step : this.from - this.step;
		const roundedValue = parseFloat(newValue.toFixed(2));
		this.inputValues.from = roundedValue.toFixed(2);
		this.updateFrom(roundedValue);
	}
	stepTo(direction) {
		if (this.to === void 0 || !this.canStepTo(direction)) return;
		const newValue = direction === "up" ? this.to + this.step : this.to - this.step;
		const roundedValue = parseFloat(newValue.toFixed(2));
		this.inputValues.to = roundedValue.toFixed(2);
		this.updateTo(roundedValue);
	}
	setMinValue() {
		if (!this.canSetMin() || this.min === void 0) return;
		this.inputValues.from = this.min.toFixed(2);
		this.updateFrom(this.min);
	}
	setMaxValue() {
		if (!this.canSetMax() || this.max === void 0) return;
		this.inputValues.to = this.max.toFixed(2);
		this.updateTo(this.max);
	}
	setStep(newStep) {
		this.step = newStep;
	}
	roundToNearestInteger(type) {
		const currentValue = type === "from" ? this.from : this.to;
		if (currentValue === void 0) return;
		const rounded = Math.round(currentValue);
		let safeValue = rounded;
		if (type === "from" && rounded < this.min) safeValue = Math.ceil(currentValue);
		if (type === "to" && rounded > this.max) safeValue = Math.floor(currentValue);
		if (type === "from" ? this.isValidFromValue(safeValue) : this.isValidToValue(safeValue)) if (type === "from") {
			this.inputValues.from = safeValue.toFixed(2);
			this.updateFrom(safeValue);
		} else {
			this.inputValues.to = safeValue.toFixed(2);
			this.updateTo(safeValue);
		}
	}
	getAvailableSteps() {
		return this.availableSteps.filter((step) => {
			const fromCanStep = this.from !== void 0 && (this.isValidFromValue(this.from + step) || this.isValidFromValue(this.from - step));
			const toCanStep = this.to !== void 0 && (this.isValidToValue(this.to + step) || this.isValidToValue(this.to - step));
			return fromCanStep || toCanStep;
		});
	}
	isWholeNumber(value) {
		return value !== void 0 && Math.round(value) === value;
	}
	getClosestValidValue(inputValue, type) {
		if (!inputValue.trim()) return type === "from" ? this.from : this.to;
		const numValue = parseFloat(inputValue);
		if (isNaN(numValue)) return type === "from" ? this.from : this.to;
		if (type === "from") {
			const minBound = this.min ?? Number.NEGATIVE_INFINITY;
			const maxBound = this.to ?? Number.POSITIVE_INFINITY;
			if (numValue < minBound) return minBound;
			if (numValue > maxBound) return maxBound;
			return numValue;
		} else {
			const minBound = this.from ?? Number.NEGATIVE_INFINITY;
			const maxBound = this.max ?? Number.POSITIVE_INFINITY;
			if (numValue < minBound) return minBound;
			if (numValue > maxBound) return maxBound;
			return numValue;
		}
	}
	handleInputBlur(type, inputValue) {
		const correctedValue = this.getClosestValidValue(inputValue, type);
		if (correctedValue !== void 0) {
			this.inputValues = {
				...this.inputValues,
				[type]: correctedValue.toFixed(2)
			};
			if (type === "from") this.updateFrom(correctedValue);
			else this.updateTo(correctedValue);
		}
	}
	static {
		this.styles = css`

        :host {
            font-family: inherit;
            font-style: normal;
            font-size: var(--font-size);
            display: flex !important;
            flex-wrap: wrap;
            flex-direction: var( --thermal-direction, row );
            gap: .5em;
        }

        .fields {

            display: flex;
            flex-wrap: no-wrap;
            gap: 0em;
        
        }

        .fields__buttons {

            thermal-btn {
                min-height: 2em;
                flex-grow: var(--thermal-collapsible-grow, 0);
            }
        
        }

        .fields__separated {
            gap: .5em;
        }


        .separator {
            width: .5em;
            &.separator__line {
                display: flex;
                align-items: center;
                &::after {
                    content: "";
                    display: block;
                    height: var(--thermal-border-width);
                    width: 100%;
                    background: var( --thermal-slate );
                }
            }
        }

        .input-group {
            position: relative;
        }
    
        .input-group-inner {
            display: flex;
            align-items: stretch;
            height: 2em;
            position: relative;
            z-index: 1;
        }


        .input-group-outer {
            position: absolute;
            z-index: 0;
            text-align: center;
            width: 100%;

            font-size: .75em;
            height: 2em;
            background: var( --thermal-slate-light );

            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );

            opacity: 0;

            transition: all .25s ease-in-out;

            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .25em;

            &.input-group-outer__top {
                top: 3px;
                padding-bottom: .5em;
                border-radius: var( --thermal-radius ) var( --thermal-radius ) 0 0;
            }

            &.input-group-outer__bottom {
                bottom: 3px;
                padding-top: .5em;
                border-radius: 0 0 var( --thermal-radius ) var( --thermal-radius );
            }
        }

        .input-group:focus-within .input-group-outer {

            opacity: 1;

            &.input-group-outer__top {
                top: -1.5em;
            }

            &.input-group-outer__bottom {
                bottom: -1.5em;
            }
        }

        .input-group.is-whole-number .input-group-outer__bottom {
            opacity: 0;
            bottom: 3px;
        }

        .input-group button,
        .input-group aside,
        .input-group input {

            border: 0;
            border-top: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
            border-bottom: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );

            color: var( --thermal-foreground );
            background: var( --thermal-background );
            
            font-family: inherit;
            font-size: 1em;
            line-height: 1em;

            transition: all .25s ease-in-out;
        
        }

        .input-group-inner input, 
        .input-group-inner aside {
            display: block;
            vertical-align: middle;
        }

        .input-group-inner aside {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: .3em;
        }

        .input-group-inner input {

            outline: 0;
            padding: 0;
            margin: 0;

            text-align: right;

            width: 3.5em;

            &:hover,
            &:focus {
                color: var( --thermal-primary );
            }

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
            }

            &[type=number] {
                -moz-appearance:textfield; /* Firefox */
            }
            
        }

        .input-group-inner > button {

            cursor: pointer;

            outline: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            &.left {
                border-right: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
            }

            &.right {
                border-left: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
            }

            &:hover,
            &:focus {
                background: var( --thermal-slate-light );
            }

            &:disabled {
                
                cursor: not-allowed;
                color: var( --thermal-slate-light );
                
                &:hover,
                &:focus {
                    background: var( --thermal-background );
                }
            }

            &:first-child {
                border-left: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
                border-radius: var( --thermal-radius ) 0 0 var( --thermal-radius );
            }

            &:last-child {
                border-right: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
                border-radius: 0 var( --thermal-radius ) var( --thermal-radius ) 0;
            }

            svg {
                display: block;
            }
        
        }

        .step-button {
            
            color: var( --thermal-slate ) !important;
            cursor: pointer;
            font-size: .7em;
            padding: .2em .3em;
            transition: all .25s ease-in-out;

            background: transparent !important;
            border: none !important;

            &:hover:not(:disabled) {
                color: var( --thermal-primary );
            }

            &.active {
                font-weight: bold;
                color: var( --thermal-foreground ) !important;
            }

            &:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
        }

        .round-button {
            
            color: var( --thermal-foreground );
            cursor: pointer;
            font-size: .8em;
            padding: .3em .6em;
            transition: all .25s ease-in-out;
            border: 0 !important;
            background: transparent !important;

            &:hover:not(:disabled) {
                color: var( --thermal-primary );
            }

            &:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
        }
    
    `;
	}
	renderInput(type, before = void 0, after = void 0) {
		const value = type === "from" ? this.from : this.to;
		const inputValue = this.inputValues[type];
		const canStepDown = type === "from" ? this.canStepFrom("down") : this.canStepTo("down");
		const canStepUp = type === "from" ? this.canStepFrom("up") : this.canStepTo("up");
		const availableSteps = this.getAvailableSteps();
		return html`
        <div class="input-group ${this.isWholeNumber(value) ? "is-whole-number" : ""}">
            <div class="input-group-outer input-group-outer__top">
                ${availableSteps.map((stepValue) => html`
                    <button 
                        class="step-button ${stepValue === this.step ? "active" : ""}"
                        ?disabled=${!availableSteps.includes(stepValue)}
                        @click=${() => this.setStep(stepValue)}
                    >
                        ${stepValue}
                    </button>
                `)}
            </div>
            <div class="input-group-inner">
                ${before}
                <button 
                    class="left"
                    ?disabled=${!canStepDown}
                    @click=${() => type === "from" ? this.stepFrom("down") : this.stepTo("down")}
                >-</button>
                <input
                    .value=${inputValue}
                    type="number"
                    step=${this.step}
                    min=${type === "from" ? this.min : this.from}
                    max=${type === "from" ? this.to : this.max}
                    @input=${(e) => {
			const target = e.target;
			this.inputValues = {
				...this.inputValues,
				[type]: target.value
			};
			this.debouncedUpdate(type, target.value);
		}}
                    @blur=${(e) => {
			const target = e.target;
			this.handleInputBlur(type, target.value);
		}}
                    @keydown=${(e) => {
			if (e.key === "ArrowUp" || e.key === "ArrowDown") {
				e.preventDefault();
				const direction = e.key === "ArrowUp" ? "up" : "down";
				if (type === "from") this.stepFrom(direction);
				else this.stepTo(direction);
			}
		}}
                ></input>
                <aside>°C</aside>
                <button 
                    class="right"
                    ?disabled=${!canStepUp}
                    @click=${() => type === "from" ? this.stepFrom("up") : this.stepTo("up")}
                >+</button>
                ${after}
            </div>
            <div class="input-group-outer input-group-outer__bottom">
                <button 
                    class="round-button"
                    @click=${() => this.roundToNearestInteger(type)}
                >
                    Zaokrouhlit
                </button>
            </div>
        </div>
        `;
	}
	render() {
		return html`
        <div class="fields">

            ${this.renderInput("from", html`<button 
                    class="left"
                    ?disabled=${!this.canSetMin()}
                    @click=${() => this.setMinValue()}
                >
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <line x1="5" y1="2" x2="5" y2="14" stroke="currentColor" stroke-width="1"/>
                        <line x1="5" y1="8" x2="10" y2="4" stroke="currentColor" stroke-width="1"/>
                        <line x1="5" y1="8" x2="10" y2="12" stroke="currentColor" stroke-width="1"/>
                        <line x1="5" y1="8" x2="16" y2="8" stroke="currentColor" stroke-width="1"/>
                    </svg>
                </button>`, void 0)}
            <div class="separator separator__line"></div>
            ${this.renderInput("to", void 0, html`<button 
                    class="right"
                    ?disabled=${!this.canSetMax()}
                    @click=${() => this.setMaxValue()}
                >
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <line x1="15" y1="2" x2="15" y2="14" stroke="currentColor" stroke-width="1"/>
                        <line x1="15" y1="8" x2="10" y2="4" stroke="currentColor" stroke-width="1"/>
                        <line x1="15" y1="8" x2="10" y2="12" stroke="currentColor" stroke-width="1"/>
                        <line x1="15" y1="8" x2="4" y2="8" stroke="currentColor" stroke-width="1"/>
                    </svg>
                </button>`)}

        </div>

        <div class="fields fields__separated fields__buttons">
            <thermal-btn
                tooltip=${t(T.fullrange)}
                @click=${() => {
			this.registry.range.applyMinmax();
		}}
                style="padding: 0 0.5em; display: flex; align-items: center; justify-content: center;"
                disabled="${this.canSetMin() || this.canSetMax() ? "false" : "true"}"
            >
                <svg width="35" height="16" viewBox="0 0 35 16" fill="none" style="display: block;" stroke-linecap="butt" stroke-linejoin="miter">
                    <!-- Levý symbol (min) -->
                    <line x1="3" y1="2" x2="3" y2="14" stroke="currentColor" stroke-width="1"/>
                    <line x1="3" y1="8" x2="8" y2="3" stroke="currentColor" stroke-width="1"/>
                    <line x1="3" y1="8" x2="8" y2="13" stroke="currentColor" stroke-width="1"/>
                    <!-- Spojitá čára se šipkami na koncích -->
                    <line x1="3" y1="8" x2="32" y2="8" stroke="currentColor" stroke-width="1"/>
                    <!-- Pravý symbol (max) -->
                    <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="1"/>
                    <line x1="32" y1="8" x2="27" y2="3" stroke="currentColor" stroke-width="1"/>
                    <line x1="32" y1="8" x2="27" y2="13" stroke="currentColor" stroke-width="1"/>
                </svg>
            </thermal-btn>
            
            <thermal-btn
                tooltip=${t(T.automaticrange)}
                @click=${() => {
			this.registry.range.applyAuto();
		}}
                disabled="${this.hasHistogram ? "false" : "true"}"
                style="padding: 0 0.5em; display: flex; align-items: center; justify-content: center;"
            >
                <svg width="56" height="16" viewBox="0 0 56 16" fill="none" style="display: block;">
                    <!-- All bars sorted by X coordinate - background (slate color) -->
                    <rect x="2" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="4" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="6" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="8" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="10" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="12" y="9" width="2" height="5" fill="var(--thermal-slate)"/>
                    <rect x="14" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="16" y="11" width="2" height="3" fill="var(--thermal-slate)"/>
                    <rect x="18" y="6" width="2" height="8" fill="var(--thermal-slate)"/>
                    <rect x="20" y="2" width="2" height="12" fill="var(--thermal-slate)"/>
                    <rect x="22" y="3" width="2" height="11" fill="var(--thermal-slate)"/>
                    <rect x="24" y="1" width="2" height="13" fill="var(--thermal-slate)"/>
                    <rect x="26" y="2" width="2" height="12" fill="var(--thermal-slate)"/>
                    <rect x="28" y="4" width="2" height="10" fill="var(--thermal-slate)"/>
                    <rect x="30" y="8" width="2" height="6" fill="var(--thermal-slate)"/>
                    <rect x="32" y="10" width="2" height="4" fill="var(--thermal-slate)"/>
                    <rect x="34" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="36" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="38" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="40" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="42" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="44" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="46" y="11" width="2" height="3" fill="var(--thermal-slate)"/>
                    <rect x="48" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="50" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="52" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <!-- Highlighted section - foreground color (sorted by X) -->
                    <rect x="18" y="6" width="2" height="8" fill="var(--thermal-foreground)"/>
                    <rect x="20" y="2" width="2" height="12" fill="var(--thermal-foreground)"/>
                    <rect x="22" y="3" width="2" height="11" fill="var(--thermal-foreground)"/>
                    <rect x="24" y="1" width="2" height="13" fill="var(--thermal-foreground)"/>
                    <rect x="26" y="2" width="2" height="12" fill="var(--thermal-foreground)"/>
                    <rect x="28" y="4" width="2" height="10" fill="var(--thermal-foreground)"/>
                    <!-- Bottom line with offset -->
                    <line x1="17" y1="15.5" x2="31" y2="15.5" stroke="currentColor" stroke-width="1"/>
                </svg>
            </thermal-btn>
        </div>

        `;
	}
};
__decorate([property({
	reflect: true,
	converter: booleanConverter(true)
})], RegistryRangeForm.prototype, "stacked", void 0);
__decorate([state()], RegistryRangeForm.prototype, "min", void 0);
__decorate([state()], RegistryRangeForm.prototype, "max", void 0);
__decorate([state()], RegistryRangeForm.prototype, "from", void 0);
__decorate([state()], RegistryRangeForm.prototype, "to", void 0);
__decorate([state()], RegistryRangeForm.prototype, "step", void 0);
__decorate([state()], RegistryRangeForm.prototype, "availableSteps", void 0);
__decorate([state()], RegistryRangeForm.prototype, "inputValues", void 0);
__decorate([state()], RegistryRangeForm.prototype, "isUpdatingFromRegistry", void 0);
__decorate([state()], RegistryRangeForm.prototype, "hasHistogram", void 0);
RegistryRangeForm = __decorate([customElement("registry-range-form")], RegistryRangeForm);

//#endregion
//#region src/controls/registry/TicksBar.ts
var _TicksElement;
let TicksElement = class TicksElement extends AbstractRegistryConsumer {
	static {
		_TicksElement = this;
	}
	constructor(..._args) {
		super(..._args);
		this.ticksRef = createRef();
		this.placement = "top";
		this.minmax = void 0;
		this.ticks = [];
		this.containerRef = createRef();
	}
	static {
		this.TICK_WIDTH = 40;
	}
	static {
		this.TICK_FIXED = 2;
	}
	connectedCallback() {
		super.connectedCallback();
		this.registry.minmax.addListener(this.UUID, (value) => {
			this.minmax = value;
			if (this.ticksRef.value) this.calculateTicks(value, this.ticksRef.value.clientWidth);
		});
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.observer = new ResizeObserver((entries) => {
			const entry = entries[0];
			this.calculateTicks(this.minmax, entry.contentRect.width);
		});
		this.observer.observe(this.ticksRef.value);
	}
	clamp(input, min, max) {
		return input < min ? min : input > max ? max : input;
	}
	map(current, in_min, in_max, out_min, out_max) {
		const mapped = (current - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		return this.clamp(mapped, out_min, out_max);
	}
	calculateTicks(minmax, width) {
		if (minmax === void 0) this.ticks = [];
		else {
			const ticksPercentageBuffer = [0];
			const numTicks = Math.floor(width / _TicksElement.TICK_WIDTH) - 2;
			const step = 100 / numTicks;
			for (let i = 1; i < numTicks; i++) ticksPercentageBuffer.push(step * i);
			ticksPercentageBuffer.push(100);
			this.ticks = ticksPercentageBuffer.map((percent) => this.calculateOneTick(minmax, percent)).filter((value) => value !== void 0);
		}
	}
	calculateOneTick(minmax, percent) {
		if (minmax === void 0) return;
		else return {
			percentage: percent,
			value: this.map(percent, 0, 100, minmax.min, minmax.max)
		};
	}
	static {
		this.styles = css`

        .container {
            padding: 0 calc( var( --thermal-gap ) * .5 );
            height: var( --thermal-fs );
            
        }

        .skeleton {
            height: 100%;
            background: var( --thermal-slate-light );
        }

        .ready {
            .skeleton {
                display: none;
            }
        }

        .ticks {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            width: 100%;
            position: relative;
            color: var( --thermal-slate-dark );
            font-family: sans-serif;
            height: 1em;
        }

        .tick {

            position: relative;

            &::before {
                display: block;
                content: "";
                width: 1px;
                height: 10px;
                background: var(--thermal-slate);
            }
        
        }

        .placement-top {
            margin-top: 10x;
            padding-bottom: var( --thermal-gap );
            .tick {
                &::before {
                    background: var(--thermal-slate);
                }
            }
        }

        .placement-bottom {
            .tick {
                &::before {
                    display: block;
                    content: "";
                    width: 1px;
                    height: 5px;
                    background: currentcolor;

                    position: absolute;
                    top: 12px;
                }
            }
        }

        .tick-value {

            position: absolute;
            width: 40px;
            left: -20px;
            text-align: center;
        
        }


    `;
	}
	render() {
		let highlightLeft = void 0;
		let highlightWidth = void 0;
		if (this.registry.minmax.value && this.highlight) {
			const min = this.registry.minmax.value.min;
			const minmax = this.registry.minmax.value.max - min;
			highlightLeft = (this.highlight.from - min) / minmax * 100;
			highlightWidth = (this.highlight.to - min) / minmax * 100 - highlightLeft;
		}
		return html`

            <div class="container ${this.minmax !== void 0 ? "ready" : "loading"} placement-${this.placement}" ${ref(this.containerRef)}>

                <div class="skeleton" data-video-ignore></div>

                <div class="ticks" ${ref(this.ticksRef)}>

                    ${highlightLeft !== void 0 && highlightWidth !== void 0 ? html`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${highlightLeft}%; width: ${highlightWidth}%; background-color: var(--thermal-foreground)"></div>` : nothing}

                    ${this.ticks.map((tick) => {
			return html`
                    <div class="tick" >
                        <div class="tick-value">
                            ${tick.value.toFixed(_TicksElement.TICK_FIXED)}
                        </div>
                    </div>
                        `;
		})}

                </div>                

            </div>
        
        `;
	}
};
__decorate([consume({
	context: registryHighlightContext,
	subscribe: true
})], TicksElement.prototype, "highlight", void 0);
__decorate([property({
	type: String,
	reflect: true
})], TicksElement.prototype, "placement", void 0);
__decorate([state()], TicksElement.prototype, "minmax", void 0);
__decorate([state()], TicksElement.prototype, "ticks", void 0);
TicksElement = _TicksElement = __decorate([customElement("registry-ticks-bar")], TicksElement);

//#endregion
//#region src/controls/group/GroupAnalysisSyncButton.ts
let GroupAnalysisSyncButton = class GroupAnalysisSyncButton extends AbstractGroupConsumer {
	connectedCallback() {
		super.connectedCallback();
		if (this.on) {
			const id = this.UUID + "__initial";
			this.group.files.addListener(id, (value) => {
				if (value.length > 0) {
					this.group.analysisSync.turnOn(value[0]);
					this.group.files.removeListener(id);
				}
			});
		} else this.on = this.group.analysisSync.value;
		this.group.analysisSync.addListener(this.UUID, (value) => {
			this.on = value;
		});
		this.addEventListener("click", () => {
			this.toggle();
		});
	}
	turnOn() {
		if (this.group.files.value.length > 0) this.group.analysisSync.turnOn(this.group.files.value[0]);
	}
	turnOff() {
		this.group.analysisSync.turnOff();
	}
	toggle() {
		this.on ? this.turnOff() : this.turnOn();
	}
	static {
		this.styles = css`
    
        :host {
            font-size: var(--thermal-fs);
            cursor: pointer;
        }

        :host(:hover) {
            span {
                
            }
        }

        :host([on=true]) {
            span i {
                background: var(--thermal-primary);
            }
        }

        :host([on=false]) {
            span i {
                background: var(--thermal-slate);
            }
        }

        span {
            transition: all .3s ease-in-out;
            display: inline-block;
            width: .8em;
            height: .8em;
            border-radius: 50%;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            position: relative;
            overflow: hidden;
        }

        i {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid var(--thermal-background);
            box-sizing: border-box;
        }

        input {
            display: none;
        }

        div {
            font-size: .9em;
            pointer-events: visible;
            display: inline-block;
        }
    
    `;
	}
	render() {
		return html`  
        <span><i></i></span>      
        <div>${t(T.analysissync)}</div>
        `;
	}
};
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
})], GroupAnalysisSyncButton.prototype, "on", void 0);
GroupAnalysisSyncButton = __decorate([customElement("group-analysis-sync-button")], GroupAnalysisSyncButton);

//#endregion
//#region src/controls/group/GroupChart.ts
/**
* @license
* Copyright 2014-2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let GroupChart = class GroupChart extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.instances = [];
		this.on = false;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.group.files.addListener(this.UUID, () => {
			this.group.analysisGraph.turnOn();
		});
		this.group.analysisGraph.addListener(this.UUID, (value) => {
			if (value !== void 0) {
				this.data = value.data;
				this.colors = value.colors;
				this.on = true;
			} else {
				this.data = void 0;
				this.colors = void 0;
				this.on = false;
			}
		});
	}
	static {
		this.styles = css`
    
        .wrapper {
            transition: all 0.3s ease-in-out;
            width: 100%;
            overflow: hidden;
        }

        .on {
            height: 300px;
            border-bottom: 1px solid var( --thermalforeground );
        }

        .off {
            height: 0px;
        }

    `;
	}
	download() {
		const svg = this.shadowRoot?.querySelectorAll("google-chart");
		console.log(svg);
	}
	render() {
		return html`
            <div class="wrapper ${this.on ? "on" : "off"}">

                ${this.on === true ? html`
                    <google-chart 
                        .data=${this.data} 
                        .options=${{
			colors: this.colors,
			legend: { position: "bottom" },
			hAxis: { title: "Time" },
			vAxis: { title: "Temperature °C" },
			chartArea: { width: "90%" }
		}}
                        type="line"
                        width="100%"
                        style="width: 100%;height: 300px"
                    ></google-chart>
                ` : nothing}
                
            </div>
        `;
	}
};
__decorate([state()], GroupChart.prototype, "instances", void 0);
__decorate([state()], GroupChart.prototype, "timeout", void 0);
__decorate([state()], GroupChart.prototype, "data", void 0);
__decorate([state()], GroupChart.prototype, "colors", void 0);
__decorate([state()], GroupChart.prototype, "on", void 0);
GroupChart = __decorate([customElement("group-chart")], GroupChart);

//#endregion
//#region src/controls/group/GroupDownloadButtons.ts
let GroupDownloadDropdown$1 = class GroupDownloadDropdown extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.pngWidth = 1350;
	}
	static {
		this.styles = css`

        :host {
        
            display: flex;
            flex-direction: column;
            gap: 5px;

        }

        button.default {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var(--thermal-foreground);
            border-color: var(--thermal-slate);
            border-style: solid;
            border-width: 1px;
            border-radius: var( --thermal-radius );
            background-color: var(--thermal-slate-light);
            white-space: preserve nowrap;
            &:hover {
                cursor: pointer;
                background: var(--thermal-background);
            }
        }
    
    `;
	}
	render() {
		return html`
        
                <button class="default" @click=${() => this.group.files.downloadAllFiles()}>${t(T.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${() => this.group.forEveryInstance((instance) => instance.export.downloadPng())}>${t(T.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${() => this.group.analysisSync.png.downloadPng({
			columns: this.pngColumns,
			showAnalysis: this.pngAnalyses,
			showFileDate: this.pngFileDate,
			showFileName: this.pngFileName,
			showThermalScale: this.pngExportScale,
			showGroupName: this.pngExportGroupName,
			label: this.label,
			fontSize: this.pngFs
		})}>${t(T.pngofentiregroup)}</button>
            
                <button class="default" @click=${() => {
			this.group.analysisSync.csv.downloadAsCsv();
		}}>${t(T.csvofanalysisdata)}</button>
        
        `;
	}
};
__decorate([property({ type: String })], GroupDownloadDropdown$1.prototype, "label", void 0);
__decorate([consume({
	context: pngExportWidthContext,
	subscribe: true
})], GroupDownloadDropdown$1.prototype, "pngWidth", void 0);
__decorate([consume({
	context: pngExportFsContext,
	subscribe: true
})], GroupDownloadDropdown$1.prototype, "pngFs", void 0);
__decorate([state(), consume({
	context: pngExportAnalysisContext,
	subscribe: true
})], GroupDownloadDropdown$1.prototype, "pngAnalyses", void 0);
__decorate([state(), consume({
	context: pngExportScaleContext,
	subscribe: true
})], GroupDownloadDropdown$1.prototype, "pngExportScale", void 0);
__decorate([state(), consume({
	context: pngExportFileNameContext,
	subscribe: true
})], GroupDownloadDropdown$1.prototype, "pngFileName", void 0);
__decorate([state(), consume({
	context: pngExportFileDateContext,
	subscribe: true
})], GroupDownloadDropdown$1.prototype, "pngFileDate", void 0);
__decorate([state(), consume({
	context: pngExportColumnsContext,
	subscribe: true
})], GroupDownloadDropdown$1.prototype, "pngColumns", void 0);
__decorate([state(), consume({
	context: pngExportGroupNameContext,
	subscribe: true
})], GroupDownloadDropdown$1.prototype, "pngExportGroupName", void 0);
GroupDownloadDropdown$1 = __decorate([customElement("group-download-buttons")], GroupDownloadDropdown$1);

//#endregion
//#region src/controls/group/GroupDownloadDropdown.ts
let GroupDownloadDropdown = class GroupDownloadDropdown extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.pngColumns = 3;
		this.pngGroupName = false;
		this.pngFontSize = 12;
		this.pngShowAnalysis = true;
		this.pngFileDate = true;
		this.pngFileName = false;
		this.pngWidth = 800;
		this.pngShowScale = true;
	}
	static {
		this.styles = css`
        thermal-btn {
            text-align: left;
        }
    `;
	}
	render() {
		return html`
        
            <thermal-dropdown class="download ${this.classList.contains("small") ? "small" : ""}">
            
                <span slot="invoker">${t(T.download)}</span>
            
                <thermal-btn 
                    slot="option" 
                    pre="LRC" 
                    @click=${() => this.group.files.downloadAllFiles()}
                    tooltip=${t(T.downloadoriginalfileshint)}
                    tooltip-placement="right"
                >
                    ${t(T.downloadoriginalfiles)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="PNG" 
                    @click=${() => this.group.forEveryInstance((instance) => instance.export.downloadPng())}
                    tooltip=${t(T.pngofindividualimageshint)}
                    tooltip-placement="right"
                >
                    ${t(T.pngofindividualimages)}
                </thermal-btn>

                <thermal-btn 
                    slot="option"
                    pre="PNG" 
                    @click=${() => this.group.analysisSync.png.downloadPng({
			columns: this.pngColumns,
			showGroupName: this.pngGroupName,
			fontSize: this.pngFontSize,
			showAnalysis: this.pngShowAnalysis,
			showFileDate: this.pngFileDate,
			showFileName: this.pngFileName,
			showThermalScale: this.pngShowScale,
			width: this.pngWidth
		})}
                    tooltip="${t(T.pngofentiregrouphint)}"
                    tooltip-placement="right"
                >
                    ${t(T.pngofentiregroup)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="CSV" 
                    @click=${() => {
			this.group.analysisSync.csv.downloadAsCsv();
		}}
                    tooltip=${t(T.csvofanalysisdatahint)}
                    tooltip-placement="right"
                >
                    ${t(T.csvofanalysisdata)}
                </thermal-btn>
            
            </thermal-dropdown>
        
        `;
	}
};
__decorate([state(), consume({
	context: pngExportColumnsContext,
	subscribe: true
})], GroupDownloadDropdown.prototype, "pngColumns", void 0);
__decorate([state(), consume({
	context: pngExportGroupNameContext,
	subscribe: true
})], GroupDownloadDropdown.prototype, "pngGroupName", void 0);
__decorate([state(), consume({
	context: pngExportFsContext,
	subscribe: true
})], GroupDownloadDropdown.prototype, "pngFontSize", void 0);
__decorate([state(), consume({
	context: pngExportAnalysisContext,
	subscribe: true
})], GroupDownloadDropdown.prototype, "pngShowAnalysis", void 0);
__decorate([state(), consume({
	context: pngExportFileDateContext,
	subscribe: true
})], GroupDownloadDropdown.prototype, "pngFileDate", void 0);
__decorate([state(), consume({
	context: pngExportFileNameContext,
	subscribe: true
})], GroupDownloadDropdown.prototype, "pngFileName", void 0);
__decorate([state(), consume({
	context: pngExportWidthContext,
	subscribe: true
})], GroupDownloadDropdown.prototype, "pngWidth", void 0);
__decorate([state(), consume({
	context: pngExportScaleContext,
	subscribe: true
})], GroupDownloadDropdown.prototype, "pngShowScale", void 0);
GroupDownloadDropdown = __decorate([customElement("group-download-dropdown")], GroupDownloadDropdown);

//#endregion
//#region src/hierarchy/consumers/AbstractFileConsumer.ts
var AbstractFileConsumer = class extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.loading = true;
		this.recording = false;
	}
	getUUID() {
		return `${this.UUID}__internal_callback`;
	}
	get internalCallbackUUID() {
		return `${this.UUID}__internal_callback`;
	}
	connectedCallback() {
		super.connectedCallback();
		this.hookCallbacks();
	}
	hookCallbacks() {
		if (this.parentFileProviderElement) {
			if (this.parentFileProviderElement.file) this.onInstanceCreated(this.parentFileProviderElement.file);
			this.parentFileProviderElement.onSuccess.set(this.getUUID(), () => {
				this.loading = false;
			});
			this.parentFileProviderElement.onFailure.set(this.getUUID(), () => {
				this.loading = false;
			});
			this.parentFileProviderElement.onSuccess.set(this.UUID, this.onInstanceCreated.bind(this));
			this.parentFileProviderElement.onFailure.set(this.UUID, this.onFailure.bind(this));
		} else throw new Error("Tento komponent není v souboru!");
	}
};
__decorate([consume({
	context: fileProviderContext,
	subscribe: true
}), state()], AbstractFileConsumer.prototype, "parentFileProviderElement", void 0);
__decorate([consume({
	context: loadingContext,
	subscribe: true
}), state()], AbstractFileConsumer.prototype, "loading", void 0);
__decorate([consume({
	context: fileContext,
	subscribe: true
}), state()], AbstractFileConsumer.prototype, "file", void 0);
__decorate([consume({
	context: fileFailureContext,
	subscribe: true
}), state()], AbstractFileConsumer.prototype, "failure", void 0);
__decorate([consume({
	context: fileRecordingContext,
	subscribe: true
}), state()], AbstractFileConsumer.prototype, "recording", void 0);

//#endregion
//#region src/controls/file/buttons/AbstractFileButton.ts
var AbstractFileButton = class extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.size = "sm";
		this.ref = createRef();
	}
	onInstanceCreated(file) {}
	onFailure() {}
	static {
		this.styles = css`
slot {
    display: content;
}`;
	}
	render() {
		return html`<slot 
    @click=${this.action} 
    @mouseenter=${this.enter}
    @focus=${this.enter}
    @mouseleave=${this.leave}
    @blur=${this.leave}
    ${ref(this.ref)}
>
    <thermal-btn 
        variant=${this.variant || "default"}
        size=${this.size || "sm"}
        plain="${this.plain || false}"
        class="default"
        tooltip=${this.tooltip}
        icon=${ifDefined(this.icon)}
        iconStyle=${ifDefined(this.iconStyle)}
    >${this.getDefaultLabel()}</thermal-btn>
</slot>`;
	}
};
__decorate([property({
	type: String,
	reflect: false
})], AbstractFileButton.prototype, "variant", void 0);
__decorate([property({
	type: String,
	reflect: true
})], AbstractFileButton.prototype, "size", void 0);
__decorate([property({ type: String })], AbstractFileButton.prototype, "icon", void 0);
__decorate([property({ type: String })], AbstractFileButton.prototype, "iconStyle", void 0);
__decorate([property({ type: Boolean })], AbstractFileButton.prototype, "plain", void 0);

//#endregion
//#region src/controls/group/GroupRangePropagator.ts
let GroupRangePropagator = class GroupRangePropagator extends AbstractGroupConsumer {
	static {
		this.styles = AbstractFileButton.styles;
	}
	connectedCallback() {
		super.connectedCallback();
		this.onmouseenter = () => {
			if (this.group && this.group.minmax.value && this.setter) this.setter({
				from: this.group.minmax.value.min,
				to: this.group.minmax.value.max
			});
		};
		this.onmouseleave = () => {
			if (this.setter) this.setter(void 0);
		};
		this.onclick = () => {
			if (this.group && this.group.minmax.value) this.group.registry.range.imposeRange({
				from: this.group.minmax.value.min,
				to: this.group.minmax.value.max
			});
		};
	}
	render() {
		return html`
            <slot>
                <button class="default">${t(T.range).toLowerCase()}</button>
            </slot>
        `;
	}
};
__decorate([consume({
	context: setRegistryHighlightContext,
	subscribe: true
})], GroupRangePropagator.prototype, "setter", void 0);
GroupRangePropagator = __decorate([customElement("group-range-propagator")], GroupRangePropagator);

//#endregion
//#region src/utils/timelineTicks.ts
var TICK = /* @__PURE__ */ function(TICK) {
	TICK["MINOR"] = "minor";
	TICK["MAJOR"] = "major";
	TICK["BOUND"] = "bound";
	return TICK;
}(TICK || {});
/**
* Format data into a tick value
*/
const tick = (ms, duration, type) => ({
	ms,
	percent: ms / duration * 100,
	type,
	label: format(ms, "m:ss")
});
/**
* Take a minute interval, divide it into a given number of segments and return array of `Tick` objects:
* - any number of TICK.MINOR for seconds
* - one last TICK.MAJOR for minute end
* All ticks are returned only when they are smaller than the overall duration.
*/
const processTickMinute = (from, to, count, duration) => {
	const ticks = [];
	let i = 1;
	const partial = (to - from) / count;
	while (i < count) {
		const value = from + i * partial;
		if (value < duration) ticks.push(tick(value, duration, TICK.MINOR));
		i += 1;
	}
	if (to < duration) ticks.push(tick(to, duration, TICK.MAJOR));
	return ticks;
};
const minute = 60 * 1e3;
const tickWidth = 50;
const tickPointerHeight = 3;
const calculateTicks = (width, duration) => {
	const ticksPerMinuteRaw = Math.floor(width / tickWidth) / Math.floor(duration / (60 * 1e3));
	let ticksPerMinute = 2;
	if (ticksPerMinuteRaw >= 2) ticksPerMinute = 4;
	if (ticksPerMinuteRaw >= 6) ticksPerMinute = 6;
	if (ticksPerMinuteRaw >= 12) ticksPerMinute = 12;
	if (ticksPerMinuteRaw >= 30) ticksPerMinute = 30;
	const ticks = [];
	let from = 0;
	let to = minute;
	while (from < duration) {
		processTickMinute(from, to, ticksPerMinute, duration).forEach((tick) => ticks.push(tick));
		from += minute;
		to += minute;
	}
	ticks.push(tick(0, duration, TICK.BOUND));
	ticks.push(tick(duration, duration, TICK.BOUND));
	return ticks;
};
const renderTick = (tick) => {
	return html`<div
        class="tick tick-${tick.type}"
        style="left: ${tick.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${tick.label}</div>
    </div>`;
};
const renderPointer = (percent, label, type) => {
	return html`<div 
        class="indicator-cursor indicator-cursor__${type}"
        style="left: ${percent}%;"
        data-video-rerender
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${label}</div>
    </div>`;
};
const renderTicks = (duration, ticks, currentMs, pointerMs) => {
	const currentPercent = currentMs / duration * 100;
	const pointerPercent = pointerMs !== void 0 ? pointerMs / duration * 100 : void 0;
	return html`<div class="ticks">
        
        ${ticks.map(renderTick)}

        ${renderPointer(currentPercent, format(currentMs, "m:ss:SSS"), "primary")}

        ${pointerMs !== void 0 && pointerPercent !== void 0 ? renderPointer(pointerPercent, format(pointerMs, "m:ss:SSS"), "pointer") : nothing}

    </div>`;
};
const ticksCss = css`

    :host {

            --tick-color: var( --thermal-slate );
            --tick-opacity: 1;

            --cursor-color: var( --thermal-primary );
            --cursor-bg: var( --thermal-background );

            --fs-sm: calc( var(--thermal-fs) * .7 );

    }

    .indicator-cursor {
        position: absolute;
        width: 0px;
        right: 0;
        font-size: var( --fs-sm );
        z-index: 11;        
    }

        .indicator-cursor__primary {
            --cursor-bg: var( --thermal-primary );
            --cursor-color: white;
        }

        .indicator-cursor__pointer {
            --cursor-bg: var( --thermal-foreground );
            --cursor-color: white;

            .indicator-cursor-arrow {
                position: absolute;
                top: calc( var( --thermal-fs ) * -1 - 6px);
            }

            .indicator-cursor-label {
                position: absolute;
                top: calc( var( --thermal-fs ) * -2 - 3px );
            }
        }

        .indicator-cursor-arrow {
            position: relative;
            width: 6px;
            height: 6px;
            content: "";
            background: var( --cursor-bg );
            left: -4px;
            rotate: 45deg;
        }

        .indicator-cursor-label {
            position: relative;
            top: -3px;
            width: ${tickWidth}px;
            left: -${tickWidth / 2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${tickPointerHeight}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${tickWidth / 2}px;
            padding-right: ${tickWidth / 2}px;
            box-sizing: border-box;
            width: 100%;
        }

        .tick {
            position: absolute;
            width: 0;
            color: var( --tick-color );
            opacity: var( --tick-opacity );
            font-size: var( --fs-sm );
        }

        .tick-bound {

            --tick-color: var( --thermal-foreground );

            .tick-label {
                background: var(--thermal-slate-dark);
                color: var(--thermal-background);
                position: relative;
                top: -${tickPointerHeight}px;
            }

            .tick-pointer {
                width: ${tickPointerHeight * 2}px;
                height: ${tickPointerHeight * 2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${tickPointerHeight}px;
                rotate: 45deg;
            }
            
        }

    .tick-major {
        --tick-color: var( --thermal-slate-dark );
    }

    .tick-minor {
        --tick-color: var( --thermal-slate );
    }


    .tick-pointer {
            height: ${tickPointerHeight}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${tickWidth}px;
            position: relative;
            left: -${tickWidth / 2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;

//#endregion
//#region src/controls/group/GroupTimeline.ts
let GroupTimeline = class GroupTimeline extends AbstractGroupConsumer {
	constructor(..._args) {
		super(..._args);
		this.ms = 0;
		this.playing = false;
		this.instances = [];
		this.has = false;
		this.ticks = [];
		this.timelineRef = createRef();
		this.indicatorRef = createRef();
	}
	static {
		this.TICK_WIDTH = 50;
	}
	static {
		this.TICK_POINTER_HEIGHT = 3;
	}
	connectedCallback() {
		super.connectedCallback();
		this.group.registry.batch.onBatchComplete.set(this.UUID, this.onRegistryBatchEnded.bind(this));
		this.group.files.addListener(this.UUID, (value) => {
			if (this.listener !== void 0) clearTimeout(this.listener);
			this.listener = setTimeout(async () => {
				this.onRegistryBatchEnded(value);
			}, 0);
		});
		this.group.playback.addListener(this.UUID, (value) => this.ms = value);
		this.group.playback.onPlayingStatusChange.set(this.UUID, (value) => this.playing = value);
		this.group.playback.onHasAnyCallback.set(this.UUID, (value) => this.has = value);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("ms")) {
			if (this.ms !== void 0) {
				if (this.ms !== this.group.playback.value) this.group.playback.setValueByRelativeMs(this.ms);
				if (this.indicatorRef.value) this.indicatorRef.value.style.width = this.msToPercent(this.ms) + "%";
			}
		}
	}
	onRegistryBatchEnded(results) {
		let length = 0;
		this.forEveryAffectedInstance((instance) => instance.unmountFromDom());
		this.instances = results.filter((result) => {
			if (result instanceof ThermalFileFailure) return false;
			return result.group.id === this.group.id;
		});
		this.instances.forEach((result) => {
			if (result.timeline.duration > length) length = result.timeline.duration;
		});
		this.longestDurationInMs = length;
		setTimeout(() => {
			const timeline = this.getTimelineElement();
			if (timeline && this.longestDurationInMs !== void 0) {
				this.calculateTicks(timeline.clientWidth, this.longestDurationInMs);
				new ResizeObserver((entries) => {
					const e = entries[0];
					if (this.longestDurationInMs) this.calculateTicks(e.contentRect.width, this.longestDurationInMs);
				}).observe(timeline);
			}
		}, 0);
	}
	calculateTicks(width, duration) {
		this.ticks = calculateTicks(width, duration);
	}
	forEveryAffectedInstance(fn) {
		this.instances.forEach(fn);
	}
	percentToMs(percent) {
		if (this.longestDurationInMs === void 0) return;
		return Math.floor(this.longestDurationInMs * (percent / 100));
	}
	msToPercent(ms) {
		if (this.longestDurationInMs === void 0) return;
		return ms / this.longestDurationInMs * 100;
	}
	getValueFromEvent(event) {
		const percent = event.layerX / event.target.clientWidth * 100;
		return {
			percent,
			ms: this.percentToMs(percent)
		};
	}
	handlePlayButtonClick() {
		this.group.playback.playing ? this.group.playback.stop() : this.group.playback.play();
	}
	handleTimelineClick(event) {
		const percent = event.layerX / event.target.clientWidth * 100;
		const ms = this.percentToMs(percent);
		if (ms) this.ms = ms;
	}
	handleTimelineEnter(event) {
		const { ms } = this.getValueFromEvent(event);
		this.pointerMs = ms;
	}
	handleTimelineMove(event) {
		const { ms } = this.getValueFromEvent(event);
		this.pointerMs = ms;
	}
	handleTimelineLeave() {
		this.pointerMs = void 0;
	}
	static {
		this.styles = css`


        :host {

            --tick-color: var( --thermal-slate );
            --tick-opacity: 1;

            --cursor-color: var( --thermal-primary );
            --cursor-bg: var( --thermal-background );

            --fs-sm: calc( var(--thermal-fs) * .7 );

        }

        .container {

            padding-top: calc( var(--thermal-fs) + 6px);

        }

        .timeline {
            width: 100%;
            height: var( --thermal-fs );
            position: relative;
            cursor: pointer;
            box-sizing: border-box;
        }

        .background {
            width: 100%;
            height: 100%;
            background-color: var( --thermal-slate );
            pointer-events: none;
        }

        .indicator {
            height: 100%;
            position: absolute;
            content:"";
            top: 0;
            left: 0;
            background-color: var( --thermal-primary );
            pointer-events: none;
        }


        ${ticksCss}
    
    `;
	}
	getTimelineElement() {
		return this.renderRoot.querySelector(".timeline");
	}
	render() {
		if (this.has === false) return nothing;
		return html`<div class="container ticks-horizontal-indent">

            <div 
                class="timeline" 
                ${ref(this.timelineRef)}
                @click=${(event) => this.handleTimelineClick(event)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${ref(this.indicatorRef)}></div>
            </div>

            ${this.longestDurationInMs !== void 0 ? renderTicks(this.longestDurationInMs, this.ticks, this.ms, this.pointerMs) : nothing}

        </div>`;
	}
};
__decorate([state()], GroupTimeline.prototype, "longestDurationInMs", void 0);
__decorate([state()], GroupTimeline.prototype, "ms", void 0);
__decorate([state()], GroupTimeline.prototype, "pointerMs", void 0);
__decorate([state()], GroupTimeline.prototype, "playing", void 0);
__decorate([state()], GroupTimeline.prototype, "instances", void 0);
__decorate([state()], GroupTimeline.prototype, "has", void 0);
__decorate([state()], GroupTimeline.prototype, "ticks", void 0);
__decorate([state()], GroupTimeline.prototype, "listener", void 0);
GroupTimeline = __decorate([customElement("group-timeline")], GroupTimeline);

//#endregion
//#region src/controls/file/FileCanvas.ts
let FileCanvas$1 = class FileCanvas extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.container = createRef();
		this.prefersGpu = true;
		this.norender = false;
	}
	onInstanceCreated(instance) {
		this.remountInstance(void 0, instance);
	}
	onFailure() {}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("file")) {
			if (!(_changedProperties.get("file") === void 0 && this.file !== void 0)) {
				const oldFileValue = _changedProperties.get("file");
				this.remountInstance(oldFileValue, this.file);
			}
		}
		if (_changedProperties.has("prefers-gpu")) {
			if (this.file) {
				this.file.setPreferWebGl(this.prefersGpu);
				this.file.draw();
			}
		}
	}
	/** Any mounting or unmounting of instances to the DOM */
	remountInstance(previousInstance, nextInstance) {
		if (previousInstance === nextInstance) return;
		if (previousInstance !== void 0) previousInstance.unmountFromDom();
		if (nextInstance !== void 0 && this.container.value) {
			nextInstance.mountToDom(this.container.value);
			nextInstance.setPreferWebGl(this.prefersGpu);
			nextInstance.draw();
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.file !== void 0) {
			this.file.unmountFromDom();
			this.parentFileProviderElement?.onSuccess.delete(this.UUID);
			this.parentFileProviderElement?.onInstanceCreated.delete(this.UUID);
			this.parentFileProviderElement?.onLoadingStart.delete(this.UUID);
			this.parentFileProviderElement?.onFailure.delete(this.UUID);
		}
	}
	static {
		this.styles = css`

        :host {
            display: block;
            width: 100%;
            font-size: var( --thermal-fs );
        }

        :host,
        .canvas-container {
            box-sizing: border-box;
        }

        .canvas-container {

            width: 100%;

            background-color: var( --thermal-slate );
            color: var( --thermal-background );

            transition: color .3s ease-in-out, background-color .3s ease-in-out;

            &.is-loading {

                aspect-ratio: 4 / 3;
                display: flex;
                align-items: center;
                justify-content: center;

            }

            &.is-loaded {
        
            }

            &.is-success {

            }

            &.is-error {

                display: flex;
                align-items: center;
                justify-content: center;
                padding: var( --thermal-gap );
                box-sizing: border-box;
            }

        }

        

        .error-wrapper {

            display: flex;
            gap: calc( var( --thermal-gap ) * 0.5 );
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            box-sizing: border-box;
            width: 100%;
            height: 100%;

            border: 2px dashed currentcolor;
            border-radius: var( --thermal-radius );

            padding: var( --thermal-gap );

            thermal-icon {
                width: 2em;
                height: 2em;
            }

            .error-message {
                font-size: small;
                opacity: .5;
            }

        }
    `;
	}
	renderPlaceholder() {
		if (this.loading === false) return nothing;
		return html`<div class="file-canvas-loading">
    <thermal-spinner color="var(--thermal-background)"></thermal-spinner>
</div>`;
	}
	renderError() {
		if (this.failure === void 0) return nothing;
		return html`<div class="error-wrapper">
    <thermal-icon 
        icon="warning"
        variant="outline"
    ></thermal-icon>

    <div class="error-title">
        ${t(T.fileloadingerror)}
    </div>
    <div class="error-url">
        ${this.failure?.thermalUrl}
    </div>
    <div class="error-message">
        ${this.failure?.message}
    </div>
</div>`;
	}
	render() {
		const isError = this.loading === false && this.failure !== void 0;
		const isSuccess = this.loading === false && this.file !== void 0;
		const classes = {
			"canvas-container": true,
			"is-loading": this.loading,
			"is-loaded": this.loading === false,
			"is-success": isSuccess,
			"is-error": isError
		};
		return html`<div ${ref(this.container)} class=${classMap(classes)} part="file-canvas-container">
    ${this.renderPlaceholder()}
    ${this.renderError()}
</div>`;
	}
};
__decorate([property({
	type: Boolean,
	attribute: "prefers-gpu"
})], FileCanvas$1.prototype, "prefersGpu", void 0);
__decorate([property({ converter: booleanConverter(false) })], FileCanvas$1.prototype, "norender", void 0);
FileCanvas$1 = __decorate([customElement("file-canvas")], FileCanvas$1);

//#endregion
//#region src/controls/file/FileDownloadDropdown.ts
let FileDownloadButton = class FileDownloadButton extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.pngWidth = 1350;
		this.hasGraphs = false;
		this.recordingGraphRef = createRef();
		this.dropdownRef = createRef();
	}
	onInstanceCreated(instance) {
		instance.analysisData.onGraphsPresence.set(this.UUID, (value) => {
			this.hasGraphs = value;
		});
	}
	onFailure() {}
	render() {
		if (this.file === void 0) return nothing;
		return html`

            <thermal-dropdown ${ref(this.dropdownRef)} class="download">

                <slot name="invoker" slot="invoker">
                    <div class="button">
                        ${this.file ? t(T.download) : "..."}
                    </div>
                </slot>

                <thermal-btn 
                    slot="option"
                    @click="${() => window.open(this.file.thermalUrl)}"
                    pre="LRC"
                    align="left"
                >
                    ${t(T.downloadoriginalfile, { type: this.file.reader.parser.extensions[0].extension.toUpperCase() })}
                </thermal-btn>

                <thermal-btn 
                    slot="option"
                    @click=${() => this.file.export.downloadPng({
			width: this.pngWidth,
			fontSize: this.pngFs,
			showAnalysis: this.pngAnalyses,
			showThermalScale: this.pngExportScale,
			showFileDate: this.pngFileDate,
			showFileName: this.pngFileName
		})}
                    pre="PNG"
                    align="left"
                >
                    ${t(T.exportcurrentframeaspng)}
                </thermal-btn>

                <file-video-export-button 
                    pre="${this.file.timeline.isSequence ? "MP4 / PNG" : "PNG"}" 
                    label="Pokročilý export" 
                    slot="option"
                    style="width: 100%"
                ></file-video-export-button>



                    ${this.hasGraphs === true ? html`<thermal-btn 
                            slot="option"
                            @click=${() => this.file?.analysisData.downloadData()}
                            pre="CSV"
                            align="left"
                    >
                        ${t(T.csvofanalysisdata)}
                    </thermal-btn>` : nothing}
            
            </thermal-dropdown>

            <thermal-dialog 
                ${ref(this.recordingGraphRef)}
                label="Export souboru do videa"
                button="Začít nahrávat"
                .beforeClose=${async () => {
			this.file?.recording.recordEntireFile();
			return true;
		}}
            >

                <div slot="content">

                    <p>Export probíhá tak, že sekvenci ve Vašem prohlížeči přehrajeme a zaznamenáme do video souboru.</p>

                    <p>Součástí exportu <i>nejsou analýzy ani teplotní škála</i>.</p>

                    <p><strong>Při nahrávání bude použito aktuální nastavení:</strong></p>

                    <table>

                        <tr>
                            <td>Barevná paleta</td>
                            <td>
                                <manager-palette-dropdown></manager-palette-dropdown>
                            </td>
                        </tr>

                        <tr>
                            <td>Teplotní rozsah</td>
                            <td>
                                <registry-range-form></registry-range-form>
                            </td>
                        </tr>

                        <tr>
                            <td>Rychlost přehrávání</td>
                            <td>
                                <file-playback-speed-dropdown></file-playback-speed-dropdown>
                            </td>
                        </tr>

                    </table>

                    <p>Chcete zahájit nahrávání?</p>


                </div>

                <thermal-btn slot="button" @click=${() => this.dropdownRef.value?.setClose()}>
                    Zrušit
                </thermal-btn>

            </thermal-dialog>

        
        `;
	}
};
__decorate([consume({
	context: pngExportWidthContext,
	subscribe: true
})], FileDownloadButton.prototype, "pngWidth", void 0);
__decorate([consume({
	context: pngExportFsContext,
	subscribe: true
})], FileDownloadButton.prototype, "pngFs", void 0);
__decorate([state(), consume({
	context: pngExportAnalysisContext,
	subscribe: true
})], FileDownloadButton.prototype, "pngAnalyses", void 0);
__decorate([state(), consume({
	context: pngExportScaleContext,
	subscribe: true
})], FileDownloadButton.prototype, "pngExportScale", void 0);
__decorate([state(), consume({
	context: pngExportFileNameContext,
	subscribe: true
})], FileDownloadButton.prototype, "pngFileName", void 0);
__decorate([state(), consume({
	context: pngExportFileDateContext,
	subscribe: true
})], FileDownloadButton.prototype, "pngFileDate", void 0);
__decorate([state()], FileDownloadButton.prototype, "hasGraphs", void 0);
FileDownloadButton = __decorate([customElement("file-download-dropdown")], FileDownloadButton);

//#endregion
//#region src/controls/file/FileInfoButton.ts
let FileInfoButton = class FileInfoButton extends AbstractFileConsumer {
	onFileLoaded() {}
	onInstanceCreated() {}
	onFailure() {}
	static {
		this.styles = css`

        table {
            width: 100%;
        }

        td {
            padding: calc( var( --thermal-gap ) * .5 ) 0;
        }

        tr:not(:last-child) {
            td {
                border-bottom: var(--thermal-border-width) solid var( --thermal-slate );
            }
        }

        .small,
        small {
            font-size: calc( var( --thermal-fs-sm ) * .8 );
        }

        .opaque {
            opacity: .5;
        }

        h2 {
            font-size: calc( var( --thermal-fs ) * 1.4 );
        }

        h3 {
            font-size: var( --thermal-fs-small );
            margin: .2rem 0 .1rem 0;
            padding: 0;
            font-weight: normal;    
        }

        ul {
            margin: 0;
            padding: 0;
            padding-left: var( --thermal-fs-small );
        }

        a {
            color: var( --thermal-primary );
        }

        .download {
            width: var( --thermal-fs );
            display: inline-block;
            margin-left: var( --thermal-gap );
            transition: color .2s ease-in-out;

            &:hover {
                color: var( --thermal-foreground );
            }
        }
    
    `;
	}
	renderRow(label, value) {
		return `<tr>
            <td style="width: 110px">${label}</td>
            <td>${value}</td>
        </tr>`;
	}
	renderNumericalRow(label, value, fixed = 4, unit) {
		const val = value.toFixed(fixed);
		const output = unit !== void 0 ? val + " " + unit : val;
		return this.renderRow(label, output);
	}
	renderDownloadRow(label, text, href, title) {
		return this.renderRow(label, `<span>${text}</span>
            <a href=${href} target="_blank" title="${title}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`);
	}
	render() {
		if (!this.file) return nothing;
		return html`
            <thermal-dialog label=${t(T.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-btn
                        tooltip=${t(T.fileinfo)}
                        icon="info"
                        iconStyle="mini"
                    >
                    </thermal-btn>
                </slot>
                <div slot="content">

                    <table>

                        ${unsafeHTML(this.renderRow(t(T.thermalfilename), this.file.fileName))}

                        ${unsafeHTML(this.renderDownloadRow(t(T.thermalfileurl), this.file.thermalUrl, this.file.thermalUrl, t(T.thermalfiledownload)))}

                        ${this.file.visibleUrl ? unsafeHTML(this.renderDownloadRow(t(T.visiblefileurl), this.file.visibleUrl, this.file.visibleUrl, t(T.visiblefiledownload))) : nothing}

                        ${unsafeHTML(this.renderRow(t(T.time), TimeFormat.human(this.file.timestamp)))}

                        ${unsafeHTML(this.renderNumericalRow(t(T.duration), this.file.duration, 0, "ms"))}

                        ${unsafeHTML(this.renderRow(t(T.resolution), `${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${unsafeHTML(this.renderNumericalRow(t(T.bytesize), this.file.bytesize, 0))}
                        
                        ${unsafeHTML(this.renderNumericalRow(t(T.minimaltemperature), this.file.min, 10, "°C"))}

                        ${unsafeHTML(this.renderNumericalRow(t(T.maximaltemperature), this.file.max, 10, "°C"))}

                        

                    </table>

                    <h2>${t(T.filetype)}</h2>
                    <table>
                    ${unsafeHTML(this.renderRow(t(T.type), this.file.reader.parser.name))}
                    ${unsafeHTML(this.renderRow(t(T.description), this.file.reader.parser.description))}

                    <tr>
                        <td>${t(T.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map((device) => html`<li>
                            <h3><a href="${device.deviceUrl}" target="_blank">${device.deviceName}</a></h3>
                            <div class="small">${device.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${device.manufacturerUrl}" target="_blank">${device.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `;
	}
};
FileInfoButton = __decorate([customElement("file-info-button")], FileInfoButton);

//#endregion
//#region src/controls/file/fileLabel.ts
let FileCanvas = class FileCanvas extends AbstractFileConsumer {
	onInstanceCreated() {}
	onFailure() {}
	static {
		this.styles = css`
        :host {
            display: contents;
        }
    `;
	}
	render() {
		if (this.file === void 0) return nothing;
		else if (this.label !== void 0) return this.label;
		else if (this.grouping !== void 0) switch (this.grouping) {
			case "hours":
			case "days": return format(this.file.timestamp, "HH:mm");
			case "weeks":
			case "months":
			case "years": return TimeFormat.human(this.file.timestamp);
			default: return TimeFormat.human(this.file.timestamp);
		}
		return this.file.fileName;
	}
};
__decorate([property({ type: String })], FileCanvas.prototype, "grouping", void 0);
__decorate([property({ type: String })], FileCanvas.prototype, "label", void 0);
FileCanvas = __decorate([customElement("file-label")], FileCanvas);

//#endregion
//#region src/controls/file/FilePlaybackSpeedDropdown.ts
let FilePlaybackSpeedDropdown = class FilePlaybackSpeedDropdown extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.enabled = "on";
		this.playbackSpeed = 1;
	}
	onInstanceCreated() {}
	onFailure() {}
	static {
		this.styles = css`

        thermal-btn {
            width: 100%;
        }
    
    `;
	}
	render() {
		if (this.file === void 0) return nothing;
		return html`<thermal-dropdown interactive="${this.enabled}" .tooltip=${t(T.playbackspeed)}>

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                ${Object.entries(playbackSpeed).map(([key]) => {
			return html`<thermal-btn 
                        slot="option" 
                        variant="${this.playbackSpeed.toString() === key ? "background" : "default"}"
                        @click="${(event) => {
				if (this.file) this.file.timeline.playbackSpeed = parseFloat(key);
				const target = event.target;
				if (target) {
					if (target.parentElement instanceof ThermalDropdownElement) target.parentElement.setClose();
				}
			}}"
                    >
                        ${key}x
                    </thermal-btn>`;
		})}
            
            </thermal-dropdown>`;
	}
};
__decorate([property({
	type: String,
	reflect: true
})], FilePlaybackSpeedDropdown.prototype, "enabled", void 0);
__decorate([state(), consume({
	context: filePlaybackSpeedContext,
	subscribe: true
})], FilePlaybackSpeedDropdown.prototype, "playbackSpeed", void 0);
FilePlaybackSpeedDropdown = __decorate([customElement("file-playback-speed-dropdown")], FilePlaybackSpeedDropdown);

//#endregion
//#region src/controls/file/FileShareButton.ts
let FileShareButton = class FileShareButton extends AbstractFileConsumer {
	onInstanceCreated() {}
	onFailure() {}
	static {
		this.styles = css`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;
	}
	render() {
		if (!this.file) return nothing;
		return html`
            <thermal-dialog label="Embed this file">
                <thermal-btn slot="invoker">Embed</thermal-btn>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labirthermal/webcomponents/dist/embed.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${this.file.thermalUrl}&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `;
	}
};
FileShareButton = __decorate([customElement("file-share-button")], FileShareButton);

//#endregion
//#region src/controls/file/FileTimeline.ts
var _TimelineElement;
"chrome" in window;
let TimelineElement = class TimelineElement extends AbstractFileConsumer {
	static {
		_TimelineElement = this;
	}
	constructor(..._args) {
		super(..._args);
		this.playing = false;
		this.mayStop = true;
		this.timelineRef = createRef();
		this.barRef = createRef();
		this.containerRef = createRef();
		this.hasPlayButton = true;
		this.hasInfo = true;
		this.interactive = true;
		this.collapsed = false;
		this.ticks = [];
	}
	static {
		this.collapseWidth = 500;
	}
	onInstanceCreated(instance) {
		if (this.containerRef.value) this.ticks = calculateTicks(this.containerRef.value.clientWidth, instance.duration);
	}
	onFailure() {
		this.file?.timeline.removeListener(this.UUID);
	}
	update(changedProperties) {
		super.update(changedProperties);
		if (this.observer === void 0 && this.containerRef.value instanceof Element) {
			this.observer = new ResizeObserver((entries) => {
				const entry = entries[0];
				if (this.file) this.ticks = calculateTicks(entry.contentRect.width, this.file.duration);
				if (entry.contentRect.width < _TimelineElement.collapseWidth) {
					if (this.collapsed === false) this.collapsed = true;
				} else if (this.collapsed === true) this.collapsed = false;
			});
			this.observer.observe(this.containerRef.value);
		}
	}
	/** Handlers */
	/** Handle playback buttons */
	handlePlayButtonClick() {
		if (this.playing === true && this.mayStop === false) return;
		if (this.playing) this.file?.timeline.stop();
		else this.file?.timeline.play();
	}
	handleBarClick(event) {
		event.preventDefault();
		if (this.mayStop === false) return;
		if (this.timelineRef.value && this.barRef.value && this.file) {
			const percent = (event.clientX - this.timelineRef.value.offsetLeft) / this.timelineRef.value.clientWidth * 100;
			this.file.timeline.setValueByPercent(percent);
		}
	}
	/** Take a MouseEvent on `this.timelineRef` and calculate the percentage out of it. */
	getValueFromEvent(event) {
		if (this.timelineRef.value && this.file) {
			const percent = (event.clientX - this.timelineRef.value.offsetLeft) / this.timelineRef.value.clientWidth * 100;
			return {
				percent,
				ms: this.file.duration * (percent / 100)
			};
		}
	}
	handleBarEnter(event) {
		const eventValues = this.getValueFromEvent(event);
		if (eventValues) this.pointerMs = eventValues.ms;
		if (this.cursorSetter && eventValues) this.cursorSetter(eventValues.percent);
	}
	handleBarHover(event) {
		event.preventDefault();
		const eventValues = this.getValueFromEvent(event);
		if (eventValues) this.pointerMs = eventValues.ms;
		if (this.cursorSetter && eventValues) this.cursorSetter(eventValues.percent);
	}
	handleBarMouseLeave() {
		if (this.cursorSetter) this.cursorSetter(void 0);
		this.pointerMs = void 0;
	}
	static {
		this.styles = css`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

            color: var( --thermal-foreground );

        }

        .cursor {
            width: 70px;
        }

        .duration {
        
        }

        .small {
            font-size: calc( var( --thermal-fs ) * .7 );
            color: var( --thermal-foreground );
        }

        .real {
            display: flex;
            gap: var( --thermal-fs-small );
            align-items: center;
            padding-top: 5px;
            justify-content: space-between;
            width: 100%;

            .label { opacity: .5; }
        }

        .inline {
            white-space: nowrap;
        }

        .timeline {
            flex-grow: 1;
            cursor: pointer;
        }

        .timeline-bar {
            width: 100%;
            height: var( --thermal-fs );
            background: var( --thermal-slate );
            transition: background-color .2s ease-in-out;
            position: relative;
        }

        .timeline-marks {
            width: 100%;
        }

        .mark {
            background: red;
            height: 5px;
            position: relative;
        }

        .bar {
            height: 100%;
            background: var( --thermal-primary-dark );
            content: "";
            border-right: 1px solid var( --thermal-foreground );
            transition: background-color .3s ease-in-out;
            &:hover {
                background: var(--thermal-primary);
            }
        }

        .mayNot {
            opacity: .5;
            cursor: not-allowed;
        }

        .pointer {
            position: absolute;
            width: 1px;
            background: var( --thermal-background );
            height: 100%;
            top: 0;
        }

        ${ticksCss}


        .controls {

            display: flex;
            align-items: stretch;
            justify-content: center;
            gap: 5px;

            padding-top: 5px;

        }

        .chrome {
            width: 1em;
            color: var(--thermal-primary-dark);
            transition: all .3s ease-in-out;
            cursor: pointer;
            &:hover {
                color: var(--thermal-primary);
            }
        }
    
    `;
	}
	renderControls(file, disabled, playButtonClasses) {
		return html`<nav class="controls">

    <thermal-btn 
        disabled="${disabled}"
        @click=${() => {
			file.timeline.prev();
		}}
    >${t(T.prev)}</thermal-btn>


    <thermal-btn 
        class="${classMap(playButtonClasses)}" 
        @click=${this.handlePlayButtonClick.bind(this)}
        icon="${this.playing ? "pause" : "play"}"
        iconStyle="solid"
        disabled="${disabled}"
    ></thermal-btn>

    <thermal-btn 
        @click=${() => file.timeline.next()}
        disabled="${disabled}"
    >${t(T.next)}</thermal-btn>

    <thermal-btn 
        @click=${() => file.timeline.setRelativeTime(0)}
        disabled="${disabled}"
    >${t(T.back)}</thermal-btn>

    <file-playback-speed-dropdown enabled="${this.mayStop ? "on" : "off"}" class="item"></file-playback-speed-dropdown>

</nav>`;
	}
	render() {
		const file = this.file;
		if (file === void 0) return nothing;
		else if (file.duration === 0) return nothing;
		const containerClasses = {
			container: true,
			collapsed: this.collapsed
		};
		const mayClasses = {
			may: this.mayStop === true,
			mayNot: this.mayStop === false
		};
		const playButtonClasses = {
			item: true,
			button: true,
			playback: true,
			...mayClasses
		};
		const barClasses = {
			item: true,
			timeline: true,
			...mayClasses
		};
		const disabled = this.mayStop ? "false" : "true";
		return html`
<section class="${classMap(containerClasses)}" ${ref(this.containerRef)}>

    <aside class="ticks-horizontal-indent">

        <notation-timeline></notation-timeline>

        <div class="${classMap(barClasses)}"  ${ref(this.timelineRef)}>

            <div 
                class="timeline-bar" 
                @click=${this.handleBarClick}
                @mouseenter=${this.handleBarEnter.bind(this)}
                @mousemove=${this.handleBarHover} 
                @mouseleave=${this.handleBarMouseLeave.bind(this)}
            >
                <div class="bar" data-video-rerender style="width: ${this.currentFrame ? this.currentFrame.percentage : 0}%" ${ref(this.barRef)}></div>
                    ${this.cursor ? html`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>` : ""}
                </div>

            </div>


${this.currentFrame ? renderTicks(file.duration, this.ticks, this.currentFrame.ms, this.pointerMs) : nothing}


${this.hasPlayButton === true ? this.renderControls(file, disabled, playButtonClasses) : nothing}

        </div>

    </aside>

</section>



${this.currentFrame !== void 0 && this.hasInfo === true ? html`<div class="small real ${this.collapsed ? "collapsed" : ""}">
        <div>
            <span class="label">${t(T.date)}:</span> 
            <span class="inline" data-video-dynamic>${format(this.currentFrame.absolute, "d. L. y")}</span>
        </div>
        <div>
            <span class="label">${t(T.time)}:</span> 
            <span class="inline" data-video-dynamic>${format(this.currentFrame.absolute, "H'h' mm'm' ss:SSS")}</span>
        </div>
        <div>
            <span class="label">${t(T.frame)}:</span> 
            <span class="inline" data-video-dynamic>${this.currentFrame.index + 1} / ${this.file?.frameCount}</span>
        </div>
    </div>` : nothing}
    `;
	}
};
__decorate([consume({
	context: filePlayingContext,
	subscribe: true
}), state()], TimelineElement.prototype, "playing", void 0);
__decorate([consume({
	context: fileCurrentFrameContext,
	subscribe: true
}), state()], TimelineElement.prototype, "currentFrame", void 0);
__decorate([consume({
	context: durationContext,
	subscribe: true
}), state()], TimelineElement.prototype, "duration", void 0);
__decorate([consume({
	context: filaMayStopContext,
	subscribe: true
}), state()], TimelineElement.prototype, "mayStop", void 0);
__decorate([consume({
	context: fileCursorContext,
	subscribe: true
})], TimelineElement.prototype, "cursor", void 0);
__decorate([consume({
	context: fileCursorSetterContext,
	subscribe: true
})], TimelineElement.prototype, "cursorSetter", void 0);
__decorate([property({
	type: String,
	reflect: true
})], TimelineElement.prototype, "hasPlayButton", void 0);
__decorate([property({
	type: String,
	reflect: true
})], TimelineElement.prototype, "hasInfo", void 0);
__decorate([property({
	type: String,
	reflect: true
})], TimelineElement.prototype, "interactive", void 0);
__decorate([state()], TimelineElement.prototype, "collapsed", void 0);
__decorate([state()], TimelineElement.prototype, "ticks", void 0);
__decorate([state()], TimelineElement.prototype, "pointerMs", void 0);
TimelineElement = _TimelineElement = __decorate([customElement("file-timeline")], TimelineElement);

//#endregion
//#region src/controls/file/FileVideo.ts
let FileVideo = class FileVideo extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.container = createRef();
	}
	onInstanceCreated() {}
	onFailure() {}
	shouldUpdate(_changedProperties) {
		if (this.container.value !== void 0 && this.currentFrame !== void 0) {
			const value = parseFloat((this.currentFrame.ms / 1e3).toFixed(3));
			this.container.value.fastSeek(value);
		}
		return super.shouldUpdate(_changedProperties);
	}
	static {
		this.styles = css`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;
	}
	render() {
		return html`
            <div class="container">
            
                <video ${ref(this.container)} preload="metadata">

                    ${this.url === void 0 ? nothing : html`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `;
	}
};
__decorate([consume({
	context: fileCurrentFrameContext,
	subscribe: true
}), state()], FileVideo.prototype, "currentFrame", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], FileVideo.prototype, "url", void 0);
FileVideo = __decorate([customElement("file-video")], FileVideo);

//#endregion
//#region src/controls/file/analysis/edit/analysisColor.ts
let AnalysisColor$1 = class AnalysisColor extends AbstractThermalElement {
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("analysis")) {
			const oldAnalysis = _changedProperties.get("analysis");
			if (oldAnalysis) oldAnalysis.onSetInitialColor.delete(this.UUID);
			const newAnalysis = this.analysis;
			this.color = newAnalysis.initialColor;
			newAnalysis.onSetInitialColor.set(this.UUID, (value) => {
				this.color = value;
			});
		}
	}
	static {
		this.styles = css`

        thermal-dropdown div {
            display: flex;
            gap: 0.5em;
            border-radius: var( --thermal-radius );
            cursor: pointer;
            align-items: center;
        }

        thermal-dropdown .option {
            margin-bottom: 0px;
            padding: 5px;
        }

        thermal-dropdown div i {
            width: 1em;
            height: 1em;
            border-radius: 50%;
        }

        thermal-dropdown .option:hover {
            background-color: var( --thermal-slate );
        }
    
    `;
	}
	renderColor(value) {
		return html`<i style="background-color: ${value};" aria-hidden></i><span>${value}</span>`;
	}
	render() {
		if (this.color === void 0) return nothing;
		return html`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${map(availableAnalysisColors, (color) => html`
                    <div class="option" slot="option" @click=${() => {
			this.analysis.setInitialColor(color);
		}}>
                        ${this.renderColor(color)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `;
	}
};
__decorate([property()], AnalysisColor$1.prototype, "analysis", void 0);
__decorate([state()], AnalysisColor$1.prototype, "color", void 0);
AnalysisColor$1 = __decorate([customElement("analysis-color")], AnalysisColor$1);

//#endregion
//#region src/controls/file/analysis/edit/analysisName.ts
let AnalysisColor = class AnalysisColor extends AbstractThermalElement {
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("analysis")) {
			const oldAnalysis = _changedProperties.get("analysis");
			if (oldAnalysis) oldAnalysis.onSetName.delete(this.UUID);
			const newAnalysis = this.analysis;
			this.name = newAnalysis.name;
			newAnalysis.onSetName.set(this.UUID, (value) => {
				this.name = value;
			});
		}
	}
	static {
		this.styles = css`

    
    `;
	}
	render() {
		return html`

            <input 
                type="text"
                value="${this.name}" 
                @change=${(event) => {
			const target = event.target;
			const value = target.value !== "" ? target.value : this.analysis.nameInitial;
			this.analysis.setName(value);
		}}
            />

        `;
	}
};
__decorate([property()], AnalysisColor.prototype, "analysis", void 0);
__decorate([state()], AnalysisColor.prototype, "name", void 0);
AnalysisColor = __decorate([customElement("analysis-name")], AnalysisColor);

//#endregion
//#region src/controls/file/analysis/edit/editArea.ts
let AreaEdit = class AreaEdit extends AbstractThermalElement {
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("analysis")) {
			const oldAnalysis = _changedProperties.get("analysis");
			if (oldAnalysis) oldAnalysis.onSerializableChange.delete(this.UUID);
			const newAnalysis = this.analysis;
			this.top = newAnalysis.top;
			this.left = newAnalysis.left;
			this.width = newAnalysis.width;
			this.height = newAnalysis.height;
			this.right = newAnalysis.left + newAnalysis.width;
			this.bottom = newAnalysis.top + newAnalysis.height;
			this.maxX = newAnalysis.file.width;
			this.maxY = newAnalysis.file.height;
			newAnalysis.onSerializableChange.set(this.UUID, (analysis) => {
				this.top = analysis.top;
				this.left = analysis.left;
				this.width = analysis.width;
				this.height = analysis.height;
				this.right = analysis.left + analysis.width;
				this.bottom = analysis.top + analysis.height;
			});
		}
	}
	handleInput(event, callback) {
		const target = event.target;
		const value = parseInt(target.value);
		if (!isNaN(value)) {
			callback(value);
			this.analysis.onMoveOrResize.call(this.analysis);
		}
	}
	static {
		this.styles = css`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;
	}
	render() {
		return html`

            <div class="table">

                <thermal-field label=${t(T.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${t(T.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${t(T.left)}>
                    <input 
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.right !== void 0 ? this.right - 1 : this.maxX}
                        @change=${(event) => this.handleInput(event, (value) => {
			this.analysis.setLeft(value);
		})}
                    />
                </thermal-field>

                <thermal-field label=${t(T.right)}>
                    <input 
                        name="right" 
                        value=${this.right} 
                        type="number" 
                        step="1" 
                        min=${this.left !== void 0 ? this.left + 1 : 0} 
                        max=${this.maxX}
                        @change=${(event) => this.handleInput(event, (value) => {
			this.analysis.setRight(value);
		})}
                    />
                </thermal-field>

                <thermal-field label=${t(T.top)}>
                    <input 
                        name="top" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0"
                        max=${this.bottom !== void 0 ? this.bottom - 1 : this.maxY}
                        @change=${(event) => this.handleInput(event, (value) => {
			this.analysis.setTop(value);
		})}
                    />
                </thermal-field>

                <thermal-field label=${t(T.bottom)}>
                    <input 
                        name="bottom" 
                        value=${this.bottom} 
                        type="number" 
                        step="1" 
                        min=${this.top !== void 0 ? this.top + 1 : 0}
                        max=${this.maxY}
                        @change=${(event) => this.handleInput(event, (value) => {
			this.analysis.setBottom(value);
		})}
                    />
                </thermal-field>
                

            </div>
    
        
        `;
	}
};
__decorate([property()], AreaEdit.prototype, "analysis", void 0);
__decorate([state()], AreaEdit.prototype, "color", void 0);
__decorate([state()], AreaEdit.prototype, "top", void 0);
__decorate([state()], AreaEdit.prototype, "left", void 0);
__decorate([state()], AreaEdit.prototype, "width", void 0);
__decorate([state()], AreaEdit.prototype, "height", void 0);
__decorate([state()], AreaEdit.prototype, "type", void 0);
__decorate([state()], AreaEdit.prototype, "right", void 0);
__decorate([state()], AreaEdit.prototype, "bottom", void 0);
__decorate([state()], AreaEdit.prototype, "maxX", void 0);
__decorate([state()], AreaEdit.prototype, "maxY", void 0);
AreaEdit = __decorate([customElement("edit-area")], AreaEdit);

//#endregion
//#region src/controls/file/analysis/edit/editPoint.ts
let EditPoint = class EditPoint extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.topInputRef = createRef();
		this.leftInputRef = createRef();
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("analysis")) {
			const oldAnalysis = _changedProperties.get("analysis");
			if (oldAnalysis) oldAnalysis.onSerializableChange.delete(this.UUID);
			const newAnalysis = this.analysis;
			this.top = newAnalysis.top;
			this.left = newAnalysis.left;
			this.maxX = newAnalysis.file.width;
			this.maxY = newAnalysis.file.height;
			newAnalysis.onSerializableChange.set(this.UUID, (analysis) => {
				this.top = analysis.top;
				this.left = analysis.left;
			});
		}
	}
	handleInput(event, callback) {
		const target = event.target;
		const value = parseInt(target.value);
		if (!isNaN(value)) {
			callback(value);
			this.analysis.onMoveOrResize.call(this.analysis);
		}
	}
	static {
		this.styles = css`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;
	}
	render() {
		return html`

            <div class="table">

                <thermal-field label=${t(T.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${t(T.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${t(T.top)} hint=${t(T.fromto, {
			from: 0,
			to: this.maxX
		})}>
                    <input 
                        name="top" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxY}
                        @change=${(event) => this.handleInput(event, (value) => {
			this.analysis.setTop(value);
		})}
                    />
                </thermal-field>

                <thermal-field label=${t(T.left)} hint=${t(T.fromto, {
			from: 0,
			to: this.maxX
		})}>
                    <input
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxX}
                        @change=${(event) => this.handleInput(event, (value) => {
			this.analysis.setLeft(value);
		})}
                    />
                </thermal-field>

            </div>
        
        `;
	}
};
__decorate([property()], EditPoint.prototype, "analysis", void 0);
__decorate([state()], EditPoint.prototype, "top", void 0);
__decorate([state()], EditPoint.prototype, "left", void 0);
__decorate([state()], EditPoint.prototype, "maxX", void 0);
__decorate([state()], EditPoint.prototype, "maxY", void 0);
EditPoint = __decorate([customElement("edit-point")], EditPoint);

//#endregion
//#region src/controls/file/analysis/FileAnalysisComplex.ts
let FileAnalysisComplex = class FileAnalysisComplex extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.mayHaveGraph = false;
		this.hasAnalysis = false;
		this.isDrawingAnalysis = false;
		this.hasGraph = false;
		this.graphRef = createRef();
		this.graphWidth = 0;
		this.graphHeight = 0;
		this.hydrated = false;
		this.showhint = true;
	}
	connectedCallback() {
		super.connectedCallback();
		this.hydrate();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.dehydrate();
	}
	onInstanceCreated() {
		this.hydrate();
	}
	onFailure() {}
	hydrate() {
		const instance = this.file;
		if (!instance || this.hydrated) return;
		this.mayHaveGraph = instance.timeline.isSequence;
		if (instance.analysis.value.length > 0) this.hasAnalysis = true;
		instance.analysis.layers.onAdd.set(this.UUID, (analysis) => {
			if (this.hasAnalysis === false) this.hasAnalysis = true;
			const listener = () => {
				this.isDrawingAnalysis = false;
			};
			analysis.file.dom?.listenerLayer?.getLayerRoot().addEventListener("pointerup", listener);
			analysis.graph.onGraphActivation.set(this.UUID, (min, max, avg) => {
				if (min || max || avg) this.hasGraph = true;
				else this.hasGraph = analysis.file.analysis.value.reduce((state, current) => {
					if (state === true) return state;
					return current.graph.state.MIN || current.graph.state.MAX || current.graph.state.AVG;
				}, false);
			});
		});
		instance.analysis.layers.onRemove.set(this.UUID, () => {
			if (this.hasAnalysis === true) {
				if (instance.analysis.layers.size === 0) {
					this.hasAnalysis = false;
					this.isDrawingAnalysis = false;
					this.hasGraph = false;
				}
			}
		});
		this.hydrated = true;
	}
	dehydrate() {
		const instance = this.file;
		if (instance) {
			instance.analysis.layers.onAdd.delete(this.UUID);
			instance.analysis.layers.onRemove.delete(this.UUID);
		}
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("hasGraph")) {
			if (this.observer && this.graphRef.value) {
				this.observer.unobserve(this.graphRef.value);
				delete this.observer;
			}
			if (this.graphRef.value && this.hasGraph === true) {
				this.observer = new ResizeObserver((entries) => {
					const rect = entries[0];
					if (rect !== void 0) {
						this.graphWidth = rect.contentRect.width;
						this.graphHeight = rect.contentRect.height;
					}
				});
				this.observer.observe(this.graphRef.value);
			}
		}
	}
	renderButtons() {
		return html`
            <div class="buttons">
                ${(this.file !== void 0 ? Object.values(this.file.group.tool.tools).filter((tool) => tool instanceof AbstractAddTool) : []).map((tool) => {
			return html`<thermal-btn @click=${() => {
				this.isDrawingAnalysis = true;
				this.file?.group.tool.selectTool(tool);
			}}>
                    <div style="display: flex; align-items: center; gap: 10px">
                        <div style="width: 1.5em; display: inline-block;">
                            ${unsafeHTML(tool.icon)}
                        </div>
                        <div>
                            ${t(T[tool.name])}
                        </div>
                    </div>
                </thermal-btn>`;
		})}
            </div>

            <slot></slot>
        
        `;
	}
	renderCurrentTooltip() {
		return html`${t(T[this.manager.tool.value.description])}`;
	}
	renderAddAnalysis() {
		return html`<div class="addanalysis">

            ${this.showhint ? html`<div>
                    <strong>${t(T.analysis)}</strong>
                </div>

                <div>${t(T.analysishint)}</div>` : nothing}


            ${this.isDrawingAnalysis === true ? this.renderCurrentTooltip() : this.renderButtons()}
        </div>`;
	}
	renderGraph() {
		if (!this.mayHaveGraph) return nothing;
		if (this.hasGraph === true) return html`
            
            <div class="graph" ${ref(this.graphRef)}>
                <file-analysis-graph graphWidth=${this.graphWidth} graphHeight=${this.graphHeight}></file-analysis-graph>
            </div>`;
		else if (this.hasAnalysis === true) return html`<div class="graph graph-prompt">
                    <div>
                        <strong>${t(T.graph)}</strong>
                    </div>
                    <div class="hint">${unsafeHTML(t(T.graphhint2))}</div>
                </div>`;
		else return html`<div class="graph graph-prompt">
                    <div>
                        <strong>${t(T.graph)}</strong>
                    </div>
                    <div class="hint">${t(T.graphhint1)}</div>
                </div>`;
	}
	static {
		this.styles = css`

        .container {
            height: 100%;
            width: 100%;
            color: var(--thermal-foreground);
        }

        .container.may {
            display: flex;
            flex-direction: column;
            gap: var(--thermal-gap);

            > * {
                width: 100%;
            }

            .analysis {
                height: calc( 50% - var(--thermal-gap));
            }

        }

        .container.may-not {
            .analysis {
                height: 100%;
            }
        }

        .analysis {
            min-width: 0;
        }
    
        .addanalysis {
            padding: var(--thermal-gap);
            border: var(--thermal-border-width) dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--thermal-gap);
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            text-align: center;
        }

        .graph {
            height: 50%;
        }

        .graph-prompt {
            padding: var(--thermal-gap);
            border: var(--thermal-border-width) dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--thermal-gap);
        }

        .hint {
            thermal-btn {
                display: inline-block;
                cursor: help;
            }
        }

        .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px;
        }

        file-analysis-table {
        }
    
    `;
	}
	render() {
		return html`
            <div class="container ${this.mayHaveGraph === true ? "may" : "may-not"}">

            <div class="analysis">
                ${this.hasAnalysis === false || this.isDrawingAnalysis === true ? this.renderAddAnalysis() : html`<file-analysis-table></file-analysis-table>`}
            </div>
            ${this.renderGraph()}

            </div>

        `;
	}
};
__decorate([state()], FileAnalysisComplex.prototype, "mayHaveGraph", void 0);
__decorate([state()], FileAnalysisComplex.prototype, "hasAnalysis", void 0);
__decorate([state()], FileAnalysisComplex.prototype, "isDrawingAnalysis", void 0);
__decorate([state()], FileAnalysisComplex.prototype, "hasGraph", void 0);
__decorate([state()], FileAnalysisComplex.prototype, "graphRef", void 0);
__decorate([state()], FileAnalysisComplex.prototype, "graphWidth", void 0);
__decorate([state()], FileAnalysisComplex.prototype, "graphHeight", void 0);
__decorate([state()], FileAnalysisComplex.prototype, "observer", void 0);
__decorate([state()], FileAnalysisComplex.prototype, "hydrated", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(true)
})], FileAnalysisComplex.prototype, "showhint", void 0);
FileAnalysisComplex = __decorate([customElement("file-analysis-complex")], FileAnalysisComplex);

//#endregion
//#region src/controls/file/analysis/FileAnalysisEdit.ts
let FileAnalisisEdit = class FileAnalisisEdit extends AbstractThermalElement {
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("analysis")) {
			const oldAnalysis = _changedProperties.get("analysis");
			if (oldAnalysis) oldAnalysis.onSetName.delete(this.UUID);
			const newAnalysis = this.analysis;
			this.name = newAnalysis.name;
			this.type = newAnalysis.getType();
			newAnalysis.onSetName.set(this.UUID, (value) => {
				this.name = value;
			});
		}
	}
	static {
		this.styles = css`
    
        :host {
        
            display: inline-block;

        }

    `;
	}
	render() {
		return html`

            <thermal-dialog label="${t(T.editsth, { what: t(T[this.type]) })}">
                <slot name="invoker" slot="invoker">
                    <thermal-btn 
                        icon="settings" 
                        iconStyle="solid" 
                        size="md" 
                        tooltip="${t(T.editsth, { what: this.analysis.name })}"
                    >
                    </thermal-btn>
                </slot>

                <div slot="content">
                    ${this.analysis instanceof PointAnalysis ? html`<edit-point .analysis=${this.analysis}></edit-point>` : html`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `;
	}
};
__decorate([property()], FileAnalisisEdit.prototype, "analysis", void 0);
__decorate([state()], FileAnalisisEdit.prototype, "name", void 0);
__decorate([state()], FileAnalisisEdit.prototype, "type", void 0);
FileAnalisisEdit = __decorate([customElement("file-analysis-edit")], FileAnalisisEdit);

//#endregion
//#region src/controls/file/analysis/FileAnalysisGraph.ts
let FileAnalysisGraph = class FileAnalysisGraph extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.hydrated = false;
		this.graphWidth = 0;
		this.graphHeight = 0;
		this.hasDownloads = true;
		this.container = createRef();
		this.graphRef = createRef();
		this.graphs = {
			values: [[]],
			colors: []
		};
		this.shadowLeft = 0;
		this.shadowTop = 0;
		this.shadowWidth = 0;
		this.shadowHeight = 0;
		this.graphSmooth = false;
		this.downloadSVG = (svgEl, fileName) => {
			if (!svgEl.getAttribute("xmlns")) svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
			const svgData = svgEl.outerHTML;
			const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		};
		this.downloadPNG = (svgEl, fileName) => {
			if (!svgEl.getAttribute("xmlns")) svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
			const svgData = svgEl.outerHTML;
			const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
			const url = URL.createObjectURL(blob);
			const img = new Image();
			img.onload = () => {
				const canvas = document.createElement("canvas");
				canvas.width = img.width;
				canvas.height = img.height;
				canvas.getContext("2d")?.drawImage(img, 0, 0);
				const pngUrl = canvas.toDataURL("image/png");
				const a = document.createElement("a");
				a.href = pngUrl;
				a.download = fileName;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
				URL.revokeObjectURL(url);
			};
			img.src = url;
		};
	}
	onInstanceCreated(instance) {
		this.graphs = instance.analysisData.value;
		instance.analysisData.addListener(this.UUID, (value) => {
			this.graphs = value;
		});
		if (this.container.value) {
			this.graphWidth = this.container.value.clientWidth;
			new ResizeObserver((entries) => {
				this.graphWidth = entries[0].contentRect.width;
				this.graphHeight = entries[0].contentRect.height;
				if (this.graphRef.value) {
					this.shadowLeft = this.graphRef.value.left;
					this.shadowTop = this.graphRef.value.top;
					this.shadowWidth = this.graphRef.value.w;
					this.shadowHeight = this.graphRef.value.h;
				}
			}).observe(this.container.value);
		}
		this.hydrated = true;
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.file) {
			this.graphs = this.file.analysisData.value;
			this.file.analysisData.addListener(this.UUID, (value) => {
				this.graphs = value;
			});
			this.hydrated = true;
		}
	}
	onFailure() {}
	update(changedProperties) {
		super.update(changedProperties);
		if (this.graphRef.value) {
			this.shadowLeft = this.graphRef.value.left;
			this.shadowTop = this.graphRef.value.top;
			this.shadowWidth = this.graphRef.value.w;
			this.shadowHeight = this.graphRef.value.h;
		}
	}
	static {
		this.styles = css`

        :host {
            position: relative;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }

        .download {
            position: absolute;
            right: 0;
            top: 0;
            display: flex;
            gap: 0.25em;
        }

        thermal-icon {
            width: .8em;
            height: .8em;
            vertical-align: middle;
            margin-top: 1px;
        }
    `;
	}
	render() {
		if (this.file?.timeline.isSequence === false) return nothing;
		return html`

            <div style="position: relative; background-color: white; border-radius: var(--thermal-radius); height: 100%;">

            

            <div data-video-style style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame && html`
                <div data-video-style style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor && html`
                    <div data-video-style style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${ref(this.container)}">
                ${this.graphs.colors.length > 0 ? html`<thermal-chart 
                        ${ref(this.graphRef)}
                        data-video-svg
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{
			colors: this.graphs.colors,
			curveType: this.graphSmooth ? "function" : "default",
			legend: { position: "bottom" },
			hAxis: {
				title: t(T.time),
				format: `m:ss:SSS`
			},
			vAxis: { title: t(T.temperature) + " °C" },
			width: this.graphWidth,
			height: this.graphHeight,
			chartArea: { width: "80%" },
			backgroundColor: { fill: "transparent" }
		}}
                        ></thermal-chart>` : nothing}
            </div>

            ${this.renderDownloads()}
            

            

            </div>
        
        `;
	}
	renderDownloads() {
		if (!this.hasDownloads) return nothing;
		return html`<div class="download">
                <thermal-icon icon="download" variant="micro"></thermal-icon>
                <thermal-btn
                    size="sm"
                    @click=${() => {
			if (this.graphRef.value) {
				const svgData = this.graphRef.value.getRef()?.querySelector("svg");
				if (svgData) this.downloadSVG(svgData, "graph.svg");
			}
		}}
                    variant="background"
                    plain="true"
                    tooltip="Stáhnout graf jako obrázek SVG"
                >SVG</thermal-btn>
                <thermal-btn
                    size="sm"
                    @click=${() => {
			if (this.graphRef.value) {
				const svgData = this.graphRef.value.getRef()?.querySelector("svg");
				if (svgData) this.downloadPNG(svgData, "graph.png");
			}
		}}
                    variant="background"
                    plain="true"
                    tooltip="Stáhnout graf jako obrázek PNG"
                >PNG</thermal-btn>
                <thermal-btn
                    size="sm"
                    @click=${() => this.file?.analysisData.downloadData()}
                    variant="background"
                    plain="true"
                    tooltip="${t(T.downloadgraphdataascsv)}"
                >CSV</thermal-btn>
            </div>`;
	}
};
__decorate([state()], FileAnalysisGraph.prototype, "hydrated", void 0);
__decorate([property({ reflect: true })], FileAnalysisGraph.prototype, "graphWidth", void 0);
__decorate([property({ reflect: true })], FileAnalysisGraph.prototype, "graphHeight", void 0);
__decorate([property({
	type: Boolean,
	reflect: true
})], FileAnalysisGraph.prototype, "hasDownloads", void 0);
__decorate([state()], FileAnalysisGraph.prototype, "graphs", void 0);
__decorate([consume({
	context: fileCurrentFrameContext,
	subscribe: true
})], FileAnalysisGraph.prototype, "currentFrame", void 0);
__decorate([consume({
	context: fileCursorContext,
	subscribe: true
})], FileAnalysisGraph.prototype, "cursor", void 0);
__decorate([consume({
	context: fileCursorSetterContext,
	subscribe: true
})], FileAnalysisGraph.prototype, "cursorSetter", void 0);
__decorate([state()], FileAnalysisGraph.prototype, "shadowLeft", void 0);
__decorate([state()], FileAnalysisGraph.prototype, "shadowTop", void 0);
__decorate([state()], FileAnalysisGraph.prototype, "shadowWidth", void 0);
__decorate([state()], FileAnalysisGraph.prototype, "shadowHeight", void 0);
__decorate([consume({
	context: managerGraphFunctionContext,
	subscribe: true
})], FileAnalysisGraph.prototype, "graphSmooth", void 0);
FileAnalysisGraph = __decorate([customElement("file-analysis-graph")], FileAnalysisGraph);

//#endregion
//#region src/controls/file/analysis/FileAnalysisOverview.ts
let FileAnalysisTable$1 = class FileAnalysisTable extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.container = createRef();
		this.interactiveanalysis = false;
		this.forceinteractiveanalysis = false;
		this.analysis = [];
		this.allSelected = false;
		this.hasHighlightedData = false;
	}
	onFailure(error) {
		console.log(error);
	}
	onInstanceCreated(instance) {
		this.hydrate(instance);
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.file) this.hydrate(this.file);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("file")) {
			if (this.file) this.hydrate(this.file);
		}
	}
	hydrate(file) {
		file.analysis.addListener(this.UUID, (analysis) => {
			this.analysis = analysis;
		});
		file.analysis.layers.onSelectionChange.add(this.UUID, () => {
			this.allSelected = file.analysis.layers.all.length === file.analysis.layers.selectedOnly.length;
		});
		file.analysisData.onGraphsPresence.set(this.UUID, (value) => {
			this.hasHighlightedData = value;
		});
		this.allSelected = file.analysis.layers.all.length === file.analysis.layers.selectedOnly.length;
		this.analysis = file.analysis.value;
		this.hasHighlightedData = file.analysisData.hasActiveGraphs;
	}
	static {
		this.styles = css`
    
        .overflow {
            overflow-x:auto;
            width: 100%;
        }

        table {
            display: table;
            min-width: 100%;
            border-collapse: collapse;
            color: var( --thermal-foreground );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }
        }

        th {
            text-align: left;
        }

        th, td, button, thermal-btn {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
        }

        caption {
            display: none !important;
        }

        file-analysis-table-row {
            color: var( --thermal-foreground );
            transition: background-color .2s ease-in-out;
        }

        file-analysis-table-row:not(:last-child) {
            border-bottom: var(--thermal-border-width) dotted var( --thermal-foreground );
        }

        file-analysis-table-row[selected] {
            background-color: var( --thermal-background );
        }

        .all {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }

            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }

            &.yes u {
                background-color: var( --thermal-slate-dark );
            }

            button {
                margin: 0;
                padding: 0;
                border: 0;
                background: transparent;
                color: var( --thermal-primary );
                text-transform: lowercase;
                cursor: pointer;

                &:hover,
                &:focus {
                    color: var( --thermal-primary-dark );
                }
            }

        }

        



    `;
	}
	renderHeader() {
		return html`<tr>
            <td>${t(T.analysis)}</td>
            <td>${t(T.min)}</td>
            <td>${t(T.max)}</td>
            <td>${t(T.avg)}</td>
        </tr>`;
	}
	renderRow(analysis) {
		return html`<tr>
            <td>
                ${analysis.name}
                <file-analysis-edit .analysis=${analysis}></file-analysis-edit>
            </td>
            <td>${analysis.min?.toFixed(2)}</td>
            <td>${analysis.max?.toFixed(2)}</td>
            <td>${analysis.avg?.toFixed(2)}</td>
        </tr>`;
	}
	render() {
		if (this.analysis.length === 0 || this.file === void 0) return nothing;
		this.interactiveanalysis === true || this.forceinteractiveanalysis;
		return html`

        <div class="overflow" ${ref(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    ${this.renderHeader()}
                
                </thead>

                <tbody>

                    ${this.analysis.map((analysis) => html`
                    <file-analysis-overview-row
                        .analysis=${analysis}
                    ></file-analysis-overview-row>
                        `)}
                
                </tbody>

                </table>

            </div>
        `;
	}
};
__decorate([consume({
	context: interactiveAnalysisContext,
	subscribe: true
}), property()], FileAnalysisTable$1.prototype, "interactiveanalysis", void 0);
__decorate([property({
	type: Boolean,
	converter: booleanConverter(false)
})], FileAnalysisTable$1.prototype, "forceinteractiveanalysis", void 0);
__decorate([state()], FileAnalysisTable$1.prototype, "analysis", void 0);
__decorate([state()], FileAnalysisTable$1.prototype, "allSelected", void 0);
__decorate([state()], FileAnalysisTable$1.prototype, "hasHighlightedData", void 0);
FileAnalysisTable$1 = __decorate([customElement("file-analysis-overview")], FileAnalysisTable$1);

//#endregion
//#region src/controls/file/analysis/FileAnalysisOverviewRow.ts
let FileAnalysisRow$1 = class FileAnalysisRow extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.interactiveanalysis = false;
		this.value = {
			min: void 0,
			max: void 0,
			avg: void 0
		};
		this.graph = {
			min: false,
			max: false,
			avg: false
		};
		this.may = {
			min: false,
			max: false,
			avg: false
		};
		this.selected = false;
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("analysis")) {
			const oldAnalysis = _changedProperties.get("analysis");
			if (oldAnalysis) {
				oldAnalysis.onDeselected.delete(this.UUID);
				oldAnalysis.onSelected.delete(this.UUID);
				oldAnalysis.onValues.delete(this.UUID);
				oldAnalysis.onMoveOrResize.delete(this.UUID);
				oldAnalysis.graph.onGraphActivation.delete(this.UUID);
				oldAnalysis.onSetInitialColor.delete(this.UUID);
				oldAnalysis.onSetName.delete(this.UUID);
			}
			const newAnalysis = this.analysis;
			this.name = newAnalysis.name;
			this.selected = newAnalysis.selected;
			this.color = newAnalysis.initialColor;
			const formatDimension = (analysis) => {
				if (analysis instanceof AbstractAreaAnalysis) return newAnalysis.width + "x" + newAnalysis.height;
				return "1x1";
			};
			this.dimension = formatDimension(newAnalysis);
			this.value = {
				min: newAnalysis.min,
				max: newAnalysis.max,
				avg: newAnalysis.avg
			};
			if (newAnalysis.file.timeline.isSequence) this.may = newAnalysis instanceof PointAnalysis ? {
				avg: true,
				min: false,
				max: false
			} : {
				avg: true,
				min: true,
				max: true
			};
			else this.may = {
				avg: false,
				min: false,
				max: false
			};
			this.graph = {
				min: newAnalysis.graph.state.MIN,
				max: newAnalysis.graph.state.MAX,
				avg: newAnalysis.graph.state.AVG
			};
			newAnalysis.onSerializableChange.set(this.UUID, (analysis) => {
				this.dimension = formatDimension(analysis);
			});
			newAnalysis.onValues.set(this.UUID, (min, max, avg) => {
				this.value = {
					min,
					max,
					avg
				};
			});
			newAnalysis.graph.onGraphActivation.set(this.UUID, (min, max, avg) => {
				this.graph = {
					min,
					max,
					avg
				};
			});
			newAnalysis.onSelected.set(this.UUID, () => {
				this.selected = true;
			});
			newAnalysis.onDeselected.set(this.UUID, () => {
				this.selected = false;
			});
			newAnalysis.onSetInitialColor.set(this.UUID, (value) => {
				this.color = value;
			});
			newAnalysis.onSetName.set(this.UUID, (value) => {
				this.name = value;
			});
		}
	}
	valueOrNothing(value) {
		return value === void 0 ? "-" : value.toFixed(2) + " °C";
	}
	renderCell(value, may, active, clickFn) {
		return html`
            <td class="${may ? "may" : "mayNot"} ${active ? "active" : "inactive"}">

                ${may ? html`
                        <button
                            @click=${clickFn}
                            style="background-color: ${active ? this.color : "transparent"};"
                            title="${active ? "Hide graph" : "Show graph"}"
                        >
                            ${this.valueOrNothing(value)}
                        </button>
                    ` : this.valueOrNothing(value)}

            </td>
        `;
	}
	static {
		this.styles = css`
    
        :host {
            display: table-row;
            white-space: nowrap;
        }

        button, td {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
            color: var( --thermal-foreground);
            white-space: nowrap;
        }

        .may button {
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            cursor: pointer;

            transition: all .2s ease-in-out;

            &:hover,
            &:focus {
                border-color: var( --thermal-slate-dark );
                color: var( --thermal-foreground );
            }
        }

        td {
            padding: 0.25em 0.5em;
        }

        

        .selected {
        }

        .name {

            &.interactive .name-text {
                cursor: pointer;
            }

            &.interactive:hover .name-text {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }
            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }
            b {
                width: 1em;
                height: 1em;
            }

            &.selected u {
                background-color: var( --thermal-slate-dark );
            }

            &.notSelected span {
                text-decoration: line-through;
            }
        }

        svg {
            width: calc( var(--thermal-gap) * .8 );
            color: var(--thermal-slate);
            transition: color .2s ease-in-out;
            cursor: pointer;

            &:hover {
                color: var( --thermal-foreground );
            }
        }

    `;
	}
	render() {
		return html`
        
        <td 
            class="name ${this.selected ? "selected" : "notSelected"} ${this.interactiveanalysis ? "interactive" : ""}"
        >
            <span
                class="name-text"
                @click=${() => {
			if (this.interactiveanalysis === false) return;
			if (this.selected) this.analysis.setDeselected(true);
			else this.analysis.setSelected(false, true);
		}}
            >

                ${this.interactiveanalysis === true ? html`<u aria-hidden="true"></u>` : nothing}
                <b aria-hidden="true" style="background-color: ${this.color}"></b>

            </span>

            <file-analysis-edit .analysis=${this.analysis}>

                <svg slot="invoker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                </svg>

            </file-analysis-edit>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" @click=${() => {
			this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key);
		}}>
                <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
            </svg>

        </td>
        ${this.renderCell(this.value.min, this.analysis instanceof AbstractAreaAnalysis, this.graph.min, () => {
			this.analysis.graph.setMinActivation(!this.graph.min);
			this.log("Graph analysis min", this.graph.min);
		})}
        ${this.renderCell(this.value.max, this.analysis instanceof AbstractAreaAnalysis, this.graph.max, () => {
			this.analysis.graph.setMaxActivation(!this.graph.max);
		})}

         ${this.renderCell(this.value.avg, true, this.graph.avg, () => {
			this.analysis.graph.setAvgActivation(!this.graph.avg);
		})}

        <!--
        <td>${this.dimension}</td>
        ${this.interactiveanalysis === true ? html`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-btn @click=${() => {
			this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key);
		}}>${t(T.remove)}</thermal-btn>
        </td>` : nothing}

        -->
        
        `;
	}
};
__decorate([property()], FileAnalysisRow$1.prototype, "analysis", void 0);
__decorate([consume({
	context: interactiveAnalysisContext,
	subscribe: true
})], FileAnalysisRow$1.prototype, "interactiveanalysis", void 0);
__decorate([state()], FileAnalysisRow$1.prototype, "value", void 0);
__decorate([state()], FileAnalysisRow$1.prototype, "graph", void 0);
__decorate([state()], FileAnalysisRow$1.prototype, "may", void 0);
__decorate([state()], FileAnalysisRow$1.prototype, "dimension", void 0);
__decorate([state()], FileAnalysisRow$1.prototype, "color", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	attribute: true
})], FileAnalysisRow$1.prototype, "selected", void 0);
__decorate([state()], FileAnalysisRow$1.prototype, "name", void 0);
FileAnalysisRow$1 = __decorate([customElement("file-analysis-overview-row")], FileAnalysisRow$1);

//#endregion
//#region src/controls/file/analysis/FileAnalysisRow.ts
let FileAnalysisRow = class FileAnalysisRow extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.interactiveanalysis = true;
		this.value = {
			min: void 0,
			max: void 0,
			avg: void 0
		};
		this.graph = {
			min: false,
			max: false,
			avg: false
		};
		this.may = {
			min: false,
			max: false,
			avg: false
		};
		this.selected = false;
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("analysis")) {
			const oldAnalysis = _changedProperties.get("analysis");
			if (oldAnalysis) {
				oldAnalysis.onDeselected.delete(this.UUID);
				oldAnalysis.onSelected.delete(this.UUID);
				oldAnalysis.onValues.delete(this.UUID);
				oldAnalysis.onMoveOrResize.delete(this.UUID);
				oldAnalysis.graph.onGraphActivation.delete(this.UUID);
				oldAnalysis.onSetInitialColor.delete(this.UUID);
				oldAnalysis.onSetName.delete(this.UUID);
			}
			const newAnalysis = this.analysis;
			this.name = newAnalysis.name;
			this.selected = newAnalysis.selected;
			this.color = newAnalysis.initialColor;
			const formatDimension = (analysis) => {
				if (analysis instanceof AbstractAreaAnalysis) return newAnalysis.width + "x" + newAnalysis.height;
				return "1x1";
			};
			this.dimension = formatDimension(newAnalysis);
			this.value = {
				min: newAnalysis.min,
				max: newAnalysis.max,
				avg: newAnalysis.avg
			};
			if (newAnalysis.file.timeline.isSequence) this.may = newAnalysis instanceof PointAnalysis ? {
				avg: true,
				min: false,
				max: false
			} : {
				avg: true,
				min: true,
				max: true
			};
			else this.may = {
				avg: false,
				min: false,
				max: false
			};
			this.graph = {
				min: newAnalysis.graph.state.MIN,
				max: newAnalysis.graph.state.MAX,
				avg: newAnalysis.graph.state.AVG
			};
			newAnalysis.onSerializableChange.set(this.UUID, (analysis) => {
				this.dimension = formatDimension(analysis);
			});
			newAnalysis.onValues.set(this.UUID, (min, max, avg) => {
				this.value = {
					min,
					max,
					avg
				};
			});
			newAnalysis.graph.onGraphActivation.set(this.UUID, (min, max, avg) => {
				this.graph = {
					min,
					max,
					avg
				};
			});
			newAnalysis.onSelected.set(this.UUID, () => {
				this.selected = true;
			});
			newAnalysis.onDeselected.set(this.UUID, () => {
				this.selected = false;
			});
			newAnalysis.onSetInitialColor.set(this.UUID, (value) => {
				this.color = value;
			});
			newAnalysis.onSetName.set(this.UUID, (value) => {
				this.name = value;
			});
		}
		if (_changedProperties.has("setRegistryHighlight")) {
			this.addEventListener("mouseover", this.handleMouseOver.bind(this));
			this.addEventListener("focus", this.handleMouseOver.bind(this));
			this.addEventListener("mouseout", this.handleMouseOut.bind(this));
			this.addEventListener("blur", this.handleMouseOut.bind(this));
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener("mouseover", this.handleMouseOver.bind(this));
		this.removeEventListener("focus", this.handleMouseOver.bind(this));
		this.removeEventListener("mouseout", this.handleMouseOut.bind(this));
		this.removeEventListener("blur", this.handleMouseOut.bind(this));
	}
	handleMouseOver() {
		if (this.setRegistryHighlight && this.analysis.min !== void 0 && this.analysis.max !== void 0) this.setRegistryHighlight({
			from: this.analysis.min,
			to: this.analysis.max
		});
	}
	handleMouseOut() {
		if (this.setRegistryHighlight) this.setRegistryHighlight(void 0);
	}
	valueOrNothing(value) {
		return value === void 0 ? "-" : value.toFixed(2) + " °C";
	}
	static {
		this.styles = css`
    
        :host {
            display: table-row;
            white-space: nowrap;
            margin: 0;
            padding: 0;
        }

        button, td {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
            color: var( --thermal-foreground);
            white-space: nowrap;
        }

        .may button {
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            cursor: pointer;

            transition: all .2s ease-in-out;

            &:hover,
            &:focus {
                border-color: var( --thermal-slate-dark );
                color: var( --thermal-foreground );
            }
        }

        td {
            padding: 0.25em 0.5em;
        }

        

        .selected {
        }

        .name {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }
            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }
            b {
                width: 1em;
                height: 1em;
            }

            &.selected u {
                background-color: var( --thermal-slate-dark );
            }

            &.notSelected span {
                text-decoration: line-through;
            }
        }

        .edit-buttons {
            
        }

    `;
	}
	renderFirstCell() {
		const classes = {
			name: true,
			selected: this.selected,
			interactive: this.interactiveanalysis
		};
		const u = this.interactiveanalysis === true ? html`<u aria-hidden="true"></u>` : nothing;
		return html`<td
            class=${classMap(classes)}
            @click=${() => {
			if (!this.interactiveanalysis === false) return;
			if (this.selected) this.analysis.setDeselected(true);
			else this.analysis.setSelected(false, true);
		}}
        >
            ${u}
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>`;
	}
	renderCell(value, may, active, clickFn) {
		const bg = active ? this.color : "white";
		return html`
            <td class="${may ? "may" : "mayNot"} ${active ? "active" : "inactive"}">

                ${may ? html`
                        <thermal-btn
                            size="md"
                            @click=${clickFn}
                            style="background-color: ${bg};"
                            tooltip="${active ? "Skrýt v grafu" : "Zobrazit graf"}"
                        >
                            <span style="">${this.valueOrNothing(value)}</span>
                        </thermal-btn>
                    ` : this.valueOrNothing(value)}

            </td>
        `;
	}
	renderLastCell() {
		if (this.interactiveanalysis === false) return nothing;
		let rangebtn = nothing;
		if (!(this.analysis instanceof PointAnalysis)) rangebtn = html`<thermal-btn
                size="md"
                @click=${() => {
			if (this.analysis.min !== void 0 && this.analysis.max !== void 0) this.analysis.file.group.registry.range.imposeRange({
				from: this.analysis.min,
				to: this.analysis.max
			});
		}}
                icon="range"
                iconStyle="outline"
            ></thermal-btn>`;
		return html`<td>
            <div style="display: flex; gap: .5em;">
                <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
                <thermal-btn
                    icon="trash"
                    iconStyle="micro"
                    tooltip="${t(T.delete)} ${this.analysis.name}"
                    @click=${() => this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}
                ></thermal-btn>
                ${rangebtn}
            </div>
        </td>`;
	}
	render() {
		return [
			this.renderFirstCell(),
			this.renderCell(this.value.avg, this.may.avg, this.graph.avg, () => {
				this.analysis.graph.setAvgActivation(!this.graph.avg);
			}),
			this.renderCell(this.value.min, this.may.min, this.graph.min, () => {
				this.analysis.graph.setMinActivation(!this.graph.min);
			}),
			this.renderCell(this.value.max, this.may.max, this.graph.max, () => {
				this.analysis.graph.setMaxActivation(!this.graph.max);
			}),
			html`<td>${this.dimension}</td>`,
			this.renderLastCell()
		];
	}
};
__decorate([property()], FileAnalysisRow.prototype, "analysis", void 0);
__decorate([property({ type: Boolean })], FileAnalysisRow.prototype, "interactiveanalysis", void 0);
__decorate([state()], FileAnalysisRow.prototype, "value", void 0);
__decorate([state()], FileAnalysisRow.prototype, "graph", void 0);
__decorate([state()], FileAnalysisRow.prototype, "may", void 0);
__decorate([state()], FileAnalysisRow.prototype, "dimension", void 0);
__decorate([state()], FileAnalysisRow.prototype, "color", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	attribute: true
})], FileAnalysisRow.prototype, "selected", void 0);
__decorate([state()], FileAnalysisRow.prototype, "name", void 0);
__decorate([state(), consume({
	context: setRegistryHighlightContext,
	subscribe: true
})], FileAnalysisRow.prototype, "setRegistryHighlight", void 0);
FileAnalysisRow = __decorate([customElement("file-analysis-table-row")], FileAnalysisRow);

//#endregion
//#region src/controls/file/analysis/FileAnalysisTable.ts
let FileAnalysisTable = class FileAnalysisTable extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.interactiveanalysis = false;
		this.forceinteractiveanalysis = false;
		this.analysis = [];
		this.allSelected = false;
		this.hasHighlightedData = false;
	}
	onFailure(error) {
		console.log(error);
	}
	onInstanceCreated(instance) {
		this.hydrate(instance);
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.file) this.hydrate(this.file);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("file")) {
			if (this.file) this.hydrate(this.file);
		}
	}
	hydrate(file) {
		file.analysis.addListener(this.UUID, (analysis) => {
			this.analysis = analysis;
		});
		file.analysis.layers.onSelectionChange.add(this.UUID, () => {
			this.allSelected = file.analysis.layers.all.length === file.analysis.layers.selectedOnly.length;
		});
		file.analysisData.onGraphsPresence.set(this.UUID, (value) => {
			this.hasHighlightedData = value;
		});
		this.allSelected = file.analysis.layers.all.length === file.analysis.layers.selectedOnly.length;
		this.analysis = file.analysis.value;
		this.hasHighlightedData = file.analysisData.hasActiveGraphs;
	}
	static {
		this.styles = css`
    
        :host {

            display: block;
            width: 100%;
            min-width: 0;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;

            margin: 0;
            padding: 0;

            position: relative;

            box-sizing: border-box;
        
        }

        table {

            display: table;

            min-width: 100%;
            
            position: relative;

            table-layout: fixed;

            
            margin: 0;
            padding: 0;
            
            border-collapse: collapse;

            color: var( --thermal-foreground );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            box-sizing: border-box;

            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }
        }

        th {
            text-align: left;
        }

        th, td, button, thermal-btn {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
        }

        caption {
            display: none !important;
        }

        file-analysis-table-row {
            color: var( --thermal-foreground );
            transition: background-color .2s ease-in-out;
        }

        file-analysis-table-row:not(:last-child) {
            border-bottom: var(--thermal-border-width) dotted var( --thermal-foreground );
        }

        file-analysis-table-row[selected] {
            background-color: var( --thermal-background );
        }

        .all {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span, thermal-btn {
                display: inline-block;
            }

            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }

            &.yes u {
                background-color: var( --thermal-slate-dark );
            }

            button {
                margin: 0;
                padding: 0;
                border: 0;
                background: transparent;
                color: var( --thermal-primary );
                text-transform: lowercase;
                cursor: pointer;

                &:hover,
                &:focus {
                    color: var( --thermal-primary-dark );
                }
            }

        }

    `;
	}
	renderTableRows() {
		if (this.analysis.length === 0 || this.file === void 0) return nothing;
		return this.analysis.map((analysis) => html`<file-analysis-table-row
            .analysis=${analysis}
            interactiveanalysis=${this.interactiveanalysis === true || this.forceinteractiveanalysis === true}
        ></file-analysis-table-row>`);
	}
	render() {
		if (this.analysis.length === 0 || this.file === void 0) return nothing;
		const interactiveanalysis = this.interactiveanalysis === true || this.forceinteractiveanalysis === true;
		return html`

            <table>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected ? "yes" : "no"} ${interactiveanalysis ? "interactive" : ""}"
                            @click=${() => {
			if (this.allSelected) this.file?.analysis.layers.deselectAll();
			else this.file?.analysis.layers.selectAll();
		}}
                        >
                            ${interactiveanalysis ? html`<u aria-hidden="true"></u>` : nothing}
                            <thermal-btn variant="text" tooltip="${this.allSelected ? "Deaktivovat všechny" : "Aktivovat všechny"}" tooltip-placement="right">${t(T.analysis)}</thermal-btn>
                        </th>
                        <th>${t(T.avg)}</th>
                        <th>${t(T.min)}</th>
                        <th>${t(T.max)}</th>
                        <th>${t(T.size)}</th>
                        <th></th>
                    </tr>
                
                </thead>

                <tbody>${this.renderTableRows()}</tbody>

            </table>
            
        `;
	}
};
__decorate([consume({
	context: interactiveAnalysisContext,
	subscribe: true
})], FileAnalysisTable.prototype, "interactiveanalysis", void 0);
__decorate([property({
	type: Boolean,
	converter: booleanConverter(false)
})], FileAnalysisTable.prototype, "forceinteractiveanalysis", void 0);
__decorate([state()], FileAnalysisTable.prototype, "analysis", void 0);
__decorate([state()], FileAnalysisTable.prototype, "allSelected", void 0);
__decorate([state()], FileAnalysisTable.prototype, "hasHighlightedData", void 0);
FileAnalysisTable = __decorate([customElement("file-analysis-table")], FileAnalysisTable);

//#endregion
//#region src/controls/file/analysis/FileAnalysisDisplay.ts
let FileAnalysisDisplay = class FileAnalysisDisplay extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.container = createRef();
		this.analysis = [];
	}
	onFailure(error) {}
	onInstanceCreated(instance) {
		this.hydrate(instance);
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.file) this.hydrate(this.file);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("file")) {
			if (this.file) this.hydrate(this.file);
		}
	}
	hydrate(file) {
		file.analysis.addListener(this.UUID, (analysis) => {
			this.analysis = analysis;
		});
		this.analysis = file.analysis.value;
		this.file?.timeline.onFrame.add(this.UUID, () => {
			this.requestUpdate();
		});
		this.file?.analysisData.addListener(this.UUID, () => {});
	}
	static {
		this.styles = css`
    
        .overflow {
            overflow-x:auto;
            width: 100%;
        }

        table {
            display: table;
            min-width: 100%;
            border-collapse: collapse;
            color: var( --thermal-foreground );
            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }

            td {
                border-top: var(--thermal-slate-light ) 1px solid;
            }
        }

        th {
            text-align: left;
        }

        th, td, button, thermal-btn {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
        }

        caption {
            display: none !important;
        }

        file-analysis-table-row {
            color: var( --thermal-foreground );
            transition: background-color .2s ease-in-out;
        }

        file-analysis-table-row:not(:last-child) {
            border-bottom: var(--thermal-border-width) dotted var( --thermal-foreground );
        }

        file-analysis-table-row[selected] {
            background-color: var( --thermal-background );
        }

        .all {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }

            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }

            &.yes u {
                background-color: var( --thermal-slate-dark );
            }

            button {
                margin: 0;
                padding: 0;
                border: 0;
                background: transparent;
                color: var( --thermal-primary );
                text-transform: lowercase;
                cursor: pointer;

                &:hover,
                &:focus {
                    color: var( --thermal-primary-dark );
                }
            }

        }

        .analysis-name {
            display: flex;
            align-items: center;
            gap: .5em;
            strong,
            span {
                display: inline-block;
            }

            strong {
                width: 1.5em;
                height: 2px;
            }
        }



    `;
	}
	render() {
		if (this.analysis.length === 0 || this.file === void 0) return nothing;
		return html`

        <div class="overflow" ${ref(this.container)}>

            <table>

                <caption data-video-ignore>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th></th>
                        <th>${t(T.avg)}</th>
                        <th>${t(T.min)}</th>
                        <th>${t(T.max)}</th>
                        <th>${t(T.size)}</th>
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map((analysis) => this.renderAnalysisRow(analysis))}
                
                </tbody>

                </table>

            </div>
            
        `;
	}
	renderAnalysisRow(analysis) {
		const { MIN, MAX, AVG } = analysis.graph.state;
		return html`<tr>
            <td class="analysis-name">
                <strong style="background: ${analysis.color};"></strong>
                <span>${analysis.name}</span>
            </td>
            ${this.renderAnalysisRowTemperatureCell(analysis.color, AVG, analysis.avg)}
            ${this.renderAnalysisRowTemperatureCell(analysis.color, MIN, analysis.min)}
            ${this.renderAnalysisRowTemperatureCell(analysis.color, MAX, analysis.max)}
            <td>${analysis.width} x ${analysis.height} px</td>
        </tr>`;
	}
	renderAnalysisRowTemperatureCell(color, inGraph, value) {
		const style = { padding: "4px 0px" };
		if (inGraph) {
			style.borderColor = color;
			style.borderStyle = "solid";
			style.borderWidth = "2px";
			style.padding = "2px 6px";
		}
		let valueDisplay = "-";
		if (value !== void 0) valueDisplay = value.toFixed(2) + " °C";
		return html`
            <td>
                <span style=${styleMap(style)} data-video-dynamic>
                    ${valueDisplay}
                </span>
            </td>
        `;
	}
};
__decorate([state()], FileAnalysisDisplay.prototype, "analysis", void 0);
FileAnalysisDisplay = __decorate([customElement("file-analysis-display")], FileAnalysisDisplay);

//#endregion
//#region src/controls/file/buttons/FileButton.ts
let FileButton = class FileButton extends AbstractFileButton {
	constructor(..._args) {
		super(..._args);
		this.tooltip = void 0;
	}
	enter() {
		if (this.onEnter && this.file) this.onEnter(this.file);
	}
	leave() {
		if (this.onLeave && this.file) this.onLeave(this.file);
	}
	action() {
		if (this.onAction && this.file) this.onAction(this.file);
	}
	getDefaultLabel() {
		return this.label;
	}
};
__decorate([property({ type: String })], FileButton.prototype, "label", void 0);
__decorate([property({ type: Object })], FileButton.prototype, "onEnter", void 0);
__decorate([property({ type: Object })], FileButton.prototype, "onLeave", void 0);
__decorate([property({ type: Object })], FileButton.prototype, "onAction", void 0);
FileButton = __decorate([customElement("file-button")], FileButton);

//#endregion
//#region src/controls/file/buttons/FileDropdown.ts
let FileDropdown = class FileDropdown extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.expanded = false;
	}
	toggle() {
		this.expanded = !this.expanded;
	}
	expand() {
		this.expanded = true;
	}
	collapse() {
		this.expanded = false;
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("expanded")) if (this.expanded === true) this.classList.add("expanded");
		else this.classList.remove("expanded");
	}
	static {
		this.styles = css`
        :host {
            
        }

        .container {
            display: block;
            position: relative;
        }

        .dropdown {

            z-index: 999;

            position: absolute;
            right: 0px;
            
            box-sizing: border-box;
            
            overflow: hidden;
            max-height: 0px;

            > div {
                padding: 5px; 
                background-color: var(--thermal-background);
                border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                border-radius: var(--thermal-radius);

                display: flex;
                flex-direction: column;
                gap: 5px;
                align-items: flex-end;
                justify-content: flex-end;

            }

        }

        .backdrop {
            display: none;
            cursor: pointer;
        }


        button.default {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var(--thermal-foreground);
            border-color: var(--thermal-slate);
            border-style: solid;
            border-width: 1px;
            border-radius: var( --thermal-radius );
            background-color: var(--thermal-slate-light);
            &:hover {
                cursor: pointer;
                background: var(--thermal-background);
            }
        }


        :host(.expanded) .dropdown {

            max-height: 500px;

        }

        :host(.expanded) .backdrop {

            display: block;
            position: fixed;
            top: -100vh;
            left: -100vw;
            height: 200vh;
            width: 200vw;
            z-index: 998;

        }



    `;
	}
	render() {
		return html`
            <div class="backdrop" @click=${() => this.collapse()}></div>
            <div class="container">
                <thermal-btn variant="default" size="sm" icon="ellipsis" iconStyle="micro" @click=${() => {
			this.toggle();
		}}>${this.label ?? nothing}</thermal-btn>
                <nav class="dropdown">
                    <div>
                        <slot></slot>
                    </div>
                </nav>
            </div>
        `;
	}
};
__decorate([property({
	type: String,
	reflect: true
})], FileDropdown.prototype, "label", void 0);
__decorate([state()], FileDropdown.prototype, "expanded", void 0);
FileDropdown = __decorate([customElement("file-dropdown")], FileDropdown);

//#endregion
//#region src/controls/file/buttons/FileLrcButton.ts
let FileLrcButton = class FileLrcButton extends AbstractFileButton {
	constructor(..._args) {
		super(..._args);
		this.tooltip = void 0;
	}
	enter() {}
	leave() {}
	action() {
		if (this.file) {
			const link = document.createElement("a");
			link.href = this.file.thermalUrl;
			link.download = this.file.fileName;
			link.click();
		}
	}
	getDefaultLabel() {
		return "lrc";
	}
};
FileLrcButton = __decorate([customElement("file-download-lrc")], FileLrcButton);

//#endregion
//#region src/controls/file/buttons/FilePngButton.ts
let FilePngButton = class FilePngButton extends AbstractFileButton {
	constructor(..._args) {
		super(..._args);
		this.tooltip = void 0;
	}
	enter() {}
	leave() {}
	action() {
		if (this.file) this.file.export.downloadPng({
			width: this.pngWidth,
			fontSize: this.pngFs,
			showAnalysis: this.pngAnalyses,
			showThermalScale: this.pngExportScale,
			showFileName: this.pngFileName,
			showFileDate: this.pngFileDate
		});
	}
	getDefaultLabel() {
		return "png";
	}
};
__decorate([state(), consume({
	context: pngExportWidthContext,
	subscribe: true
})], FilePngButton.prototype, "pngWidth", void 0);
__decorate([state(), consume({
	context: pngExportFsContext,
	subscribe: true
})], FilePngButton.prototype, "pngFs", void 0);
__decorate([state(), consume({
	context: pngExportAnalysisContext,
	subscribe: true
})], FilePngButton.prototype, "pngAnalyses", void 0);
__decorate([state(), consume({
	context: pngExportScaleContext,
	subscribe: true
})], FilePngButton.prototype, "pngExportScale", void 0);
__decorate([state(), consume({
	context: pngExportFileNameContext,
	subscribe: true
})], FilePngButton.prototype, "pngFileName", void 0);
__decorate([state(), consume({
	context: pngExportFileDateContext,
	subscribe: true
})], FilePngButton.prototype, "pngFileDate", void 0);
FilePngButton = __decorate([customElement("file-download-png")], FilePngButton);

//#endregion
//#region src/controls/file/buttons/FileRangePropagator.ts
let FileRangePropagator = class FileRangePropagator extends AbstractFileButton {
	constructor(..._args) {
		super(..._args);
		this.tooltip = t(T.range);
		this.hideLabel = false;
	}
	onInstanceCreated(file) {
		this.tooltip = [
			file.min.toFixed(2),
			"—",
			file.max.toFixed(2),
			"°C"
		].join(" ");
	}
	enter() {
		if (this.setter && this.file) this.setter({
			from: this.file.min,
			to: this.file.max
		});
	}
	leave() {
		if (this.setter) this.setter(void 0);
	}
	action() {
		if (this.file) {
			this.log(this.file.min, this.file.max);
			this.file.group.registry.range.imposeRange({
				from: this.file.min,
				to: this.file.max
			});
		}
	}
	getDefaultLabel() {
		if (this.hideLabel) return "";
		return t(T.range).toLowerCase();
	}
};
__decorate([consume({
	context: setRegistryHighlightContext,
	subscribe: true
})], FileRangePropagator.prototype, "setter", void 0);
__decorate([property({
	type: String,
	converter: booleanConverter(false)
})], FileRangePropagator.prototype, "hideLabel", void 0);
FileRangePropagator = __decorate([customElement("file-range-propagator")], FileRangePropagator);

//#endregion
//#region src/controls/file/icons/AbstractFileIcon.ts
var AbstractFileIcon = class extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.tabIndex = 1;
	}
	onInstanceCreated() {}
	onFailure() {}
	connectedCallback() {
		super.connectedCallback();
		this.addEventListener("pointerdown", this.action.bind(this));
		this.addEventListener("mouseenter", this.enter.bind(this));
		this.addEventListener("mouseleave", this.leave.bind(this));
		this.addEventListener("focus", this.enter.bind(this));
		this.addEventListener("blur", this.leave.bind(this));
	}
	render() {
		return html`<thermal-btn 
    tooltip=${this.getLabel()}
    size="sm"
    plain="true"
    icon=${this.getIcon()} 
    iconStyle="${this.getIconStyle()}"
></thermal-btn>`;
	}
};

//#endregion
//#region src/controls/file/icons/FileDetailIcon.ts
let FileDetailIcon$1 = class FileDetailIcon extends AbstractFileIcon {
	enter() {}
	action() {
		if (this.onaction && this.file) this.onaction(this.file);
	}
	leave() {}
	getLabel() {
		return t(T.detail);
	}
	getIcon() {
		return "zoom";
	}
	getIconStyle() {
		return "micro";
	}
};
__decorate([property({ type: Object })], FileDetailIcon$1.prototype, "onaction", void 0);
FileDetailIcon$1 = __decorate([customElement("file-detail-icon")], FileDetailIcon$1);

//#endregion
//#region src/controls/file/icons/FileOpacityIcon.ts
let FileDetailIcon = class FileDetailIcon extends AbstractFileIcon {
	enter() {}
	action() {
		if (this.file) if (this.file.group.registry.opacity.value === 1) this.file.group.registry.opacity.imposeOpacity(0);
		else this.file.group.registry.opacity.imposeOpacity(1);
	}
	leave() {}
	getLabel() {
		return t(T.togglevisibleimage);
	}
	getIcon() {
		return "eye";
	}
	getIconStyle() {
		return "solid";
	}
	render() {
		if (this.file === void 0 || this.file.visibleUrl === void 0) return nothing;
		return super.render();
	}
};
__decorate([property({ type: Object })], FileDetailIcon.prototype, "onaction", void 0);
FileDetailIcon = __decorate([customElement("file-opacity-icon")], FileDetailIcon);

//#endregion
//#region src/renderers/FileDetail.ts
let FileThumbnail$2 = class FileThumbnail extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.norender = false;
	}
	onInstanceCreated() {}
	onFailure() {}
	static {
		this.styles = css`
    
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        main {
            display: grid;
            gap: var(--thermal-gap);
            grid-template-columns: 1fr;
            @media ( min-width: 900px ) {
                grid-template-columns: 2fr 1fr;
            }
            @media ( min-width: 1300px ) {
                grid-template-columns: 1fr 1fr;
            }
        }

        header {
            width: 100%;
            display: flex;
            gap: 5px;
            margin-bottom: var(--thermal-gap);
            align-items: stretch;
        }
    
    `;
	}
	render() {
		return html`

            <header>
                <thermal-btn 
                    variant="foreground" 
                    @click=${() => {
			if (this.onback) this.onback();
		}}
                    tooltip=${t(T.back)}
                    icon="close"
                    iconStyle="micro"
                ></thermal-btn>

                ${this.label !== void 0 ? html`
                    <thermal-btn variant="background" interactive="false">${this.label}</thermal-btn>
                ` : nothing}

                <thermal-btn variant="background" interactive="false">
                    <file-label></file-label>
                </thermal-btn>

                <file-info-button></file-info-button>
                <file-download-dropdown></file-download-dropdown>
            </header>

            <main>
                <section>
                    <file-canvas norender="${this.norender}"></file-canvas>
                    <file-timeline></file-timeline>
                </section>
                <section>
                    <file-analysis-complex></file-analysis-complex>
                </section>
            </main> 
        
    `;
	}
};
__decorate([property({ type: Object })], FileThumbnail$2.prototype, "onback", void 0);
__decorate([property({ converter: booleanConverter(false) })], FileThumbnail$2.prototype, "norender", void 0);
__decorate([property({ type: String })], FileThumbnail$2.prototype, "label", void 0);
__decorate([property({ type: String })], FileThumbnail$2.prototype, "grouping", void 0);
FileThumbnail$2 = __decorate([customElement("file-detail")], FileThumbnail$2);

//#endregion
//#region src/renderers/FileThumbnail.ts
let FileThumbnail$1 = class FileThumbnail extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.norender = false;
	}
	onInstanceCreated() {}
	onFailure() {}
	static {
		this.styles = css`
    
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        header {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            padding-bottom: 5px;
            color: var(--thermal-foreground);
            
            h2 {
                margin: 0;
                padding: 0;
                flex-grow: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: var( --thermal-fs-sm );

                file-label {
                    white-space: preserve nowrap;
                }

                &:hover {
                    cursor: pointer;
                    color: var( --thermal-primary );
                }
            }

            & > div {
                display: flex;
                flex-wrap: nowrap;
                gap: 5px;
            }

        }

        main {

        }
    
    `;
	}
	render() {
		return html`

            <header>
                <h2
                    @click=${() => this.ondetail?.(this.file)}
                >
                    <file-label label="${ifDefined(this.label)}" grouping="${ifDefined(this.grouping)}"></file-label>
                </h2>
                <div>
                    <file-opacity-icon></file-opacity-icon>
                    <thermal-btn size="sm" variant="background" @click=${() => this.ondetail?.(this.file)}>${t(T.detail).toLocaleLowerCase()}</thermal-btn>
                    <file-range-propagator></file-range-propagator>
                    <file-dropdown>
                        <file-info-button>
                            <file-button slot="invoker" label=${t(T.info).toLowerCase()}></file-button>
                        </file-info-button>
                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                    </file-dropdown>
                </div>
            </header>

            <main>
                <file-canvas norender="${this.norender}"></file-canvas>
                <file-timeline></file-timeline>
                <file-analysis-overview></file-analysis-overview>
            </main>
        
    `;
	}
};
__decorate([property({ type: Object })], FileThumbnail$1.prototype, "ondetail", void 0);
__decorate([property({ converter: booleanConverter(false) })], FileThumbnail$1.prototype, "norender", void 0);
__decorate([property({ type: String })], FileThumbnail$1.prototype, "label", void 0);
__decorate([property({ type: String })], FileThumbnail$1.prototype, "grouping", void 0);
FileThumbnail$1 = __decorate([customElement("file-thumbnail")], FileThumbnail$1);

//#endregion
//#region src/utils/converters/durationConverter.ts
/** Converts a duration property indicated as string to millis and back */
const durationConverter = {
	fromAttribute: (value) => {
		if (value) {
			const parts = value.split(":").map(Number);
			if (parts.some(isNaN)) return void 0;
			if (parts.length === 3) {
				const [minutes, seconds, milliseconds] = parts;
				return minutes * 6e4 + seconds * 1e3 + milliseconds;
			} else if (parts.length === 4) {
				const [hours, minutes, seconds, milliseconds] = parts;
				return hours * 36e5 + minutes * 6e4 + seconds * 1e3 + milliseconds;
			}
		}
	},
	toAttribute: (value) => {
		if (value !== void 0) {
			const hours = Math.floor(value / 36e5);
			const minutes = Math.floor(value % 36e5 / 6e4);
			const seconds = Math.floor(value % 6e4 / 1e3);
			const milliseconds = value % 1e3;
			const formattedSeconds = String(seconds).padStart(2, "0");
			const formattedMilliseconds = String(milliseconds).padStart(3, "0");
			if (hours > 0) return `${hours}:${minutes}:${formattedSeconds}:${formattedMilliseconds}`;
			return `${minutes}:${formattedSeconds}:${formattedMilliseconds}`;
		}
	}
};

//#endregion
//#region src/controls/file/notation/NotationEntry.ts
let NotationEntry = class NotationEntry extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this._active = false;
	}
	get active() {
		return this._active;
	}
	willUpdate(_changedProperties) {
		super.willUpdate(_changedProperties);
		if (_changedProperties.has("duration")) {
			if (this.from !== void 0 && this.duration !== void 0) this.to = this.from + this.duration;
		}
		if (_changedProperties.has("to") && !_changedProperties.has("duration")) {
			if (this.from !== void 0 && this.to !== void 0) this.duration = this.to - this.from;
		}
		if (_changedProperties.has("from") && !_changedProperties.has("to") && !_changedProperties.has("duration")) {
			if (this.from !== void 0 && this.to !== void 0) this.duration = this.to - this.from;
		}
		if (_changedProperties.has("from") || _changedProperties.has("to") || _changedProperties.has("duration")) this.dispatchEvent(new CustomEvent("modified", {
			bubbles: true,
			cancelable: false,
			composed: true
		}));
	}
	activate() {
		if (this._active === false) this._active = true;
	}
	deactivate() {
		if (this._active === true) this._active = false;
	}
	setMs(ms) {
		if (this.from !== void 0 && this.to !== void 0) if (ms >= this.from && ms < this.to) this.activate();
		else this.deactivate();
	}
	getRenderContent() {
		return Array.from(this.slotContent);
	}
	getTTSString() {}
	render() {
		return html`
            <slot style="display: none;"></slot>
        `;
	}
};
__decorate([property({
	type: Number,
	reflect: true,
	converter: durationConverter
})], NotationEntry.prototype, "from", void 0);
__decorate([property({
	type: Number,
	reflect: true,
	converter: durationConverter
})], NotationEntry.prototype, "to", void 0);
__decorate([property({
	type: Number,
	reflect: true,
	converter: durationConverter
})], NotationEntry.prototype, "duration", void 0);
__decorate([property({
	type: String,
	reflect: true
})], NotationEntry.prototype, "label", void 0);
__decorate([property({ type: String })], NotationEntry.prototype, "image", void 0);
__decorate([property({
	type: String,
	reflect: true
})], NotationEntry.prototype, "say", void 0);
__decorate([property({
	type: String,
	reflect: true
})], NotationEntry.prototype, "color", void 0);
__decorate([state()], NotationEntry.prototype, "_active", void 0);
__decorate([queryAssignedElements()], NotationEntry.prototype, "slotContent", void 0);
NotationEntry = __decorate([customElement("notation-entry")], NotationEntry);

//#endregion
//#region src/controls/file/notation/NotationContext.ts
const notationListContext = createContext("NotationListContext");
const notationCurrentContext = createContext("NotationCurrentContext");
const notationDurationContext = createContext("NotationDurationContext");
/** Grab notations from the slots */
const grabNotationsFromSlot = (elements) => {
	return elements.filter((element) => element instanceof NotationEntry);
};
const getCurrentNotationsByMs = (ms, container) => {
	const current = [];
	for (const notation of container.notationList) if (notation.from !== void 0 && notation.to !== void 0) if (notation.from <= ms && notation.to > ms) {
		current.push(notation);
		notation.activate();
	} else notation.deactivate();
	return current;
};

//#endregion
//#region src/controls/file/notation/NotationContent.ts
let NotationContent$1 = class NotationContent extends AbstractThermalElement {
	constructor(..._args) {
		super(..._args);
		this.showlabel = true;
		this.showTime = true;
	}
	renderEntry(entry) {
		const label = this.showlabel === true ? entry.label : nothing;
		const time = this.showTime === true && entry.from !== void 0 && entry.to !== void 0 ? [format(entry.from, "mm:ss.SSS"), format(entry.to, "mm:ss.SSS")].join(" - ") : nothing;
		const content = entry.getRenderContent();
		const img = entry.image !== void 0 ? html`<img src="${entry.image}" class="builtin-image" />` : nothing;
		return html`<article>
            ${time !== nothing ? html`<div class="time">${time}</div>` : nothing}${label !== nothing ? html`<h1 style="${entry.color ? `background-color:${entry.color}` : ""}">${label}</h1>` : nothing}${img}

            ${content.length > 0 ? html`<div class="content">
                    ${content}
                </div>` : nothing}
        </article>`;
	}
	static {
		this.styles = css`
    
        article {
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);
            line-height: 1em;

            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0px;
        }

        h1, .time {
            line-height: 1em;
            margin: 0;
            padding: 7px 10px;
            color: var(--thermal-background);
            display: inline-block;
            border: 0;
            outline: 0;
        }

        .content {
            
        }

        h1 {
            font-weight: bold;
            font-size: var(--thermal-fs);
            background: var(--thermal-primary-dark);
            border-radius: 0px var(--thermal-radius) var(--thermal-radius) 0px;
            border-left: 1px solid var(--thermal-foreground);
        }

        .time {
            font-size: 0.7em;
            background: var(--thermal-foreground);
            border-radius: var(--thermal-radius) var(--thermal-radius) var(--thermal-radius) 0px;
            border-left: 1px solid var(--thermal-foreground);
        }

        img {
            display: block;
            max-width: 100%;
            height: auto;
            border-radius: 0px var(--thermal-radius) var(--thermal-radius) var(--thermal-radius);
        }
    
    `;
	}
	render() {
		return html`${map(this.entries, this.renderEntry.bind(this))}`;
	}
};
__decorate([state(), consume({
	context: notationCurrentContext,
	subscribe: true
})], NotationContent$1.prototype, "entries", void 0);
__decorate([property({ converter: booleanConverter(true) })], NotationContent$1.prototype, "showlabel", void 0);
__decorate([property({ converter: booleanConverter(true) })], NotationContent$1.prototype, "showTime", void 0);
NotationContent$1 = __decorate([customElement("notation-content")], NotationContent$1);

//#endregion
//#region src/controls/file/notation/NotationProvider.ts
let NotationProvider = class NotationProvider extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.ms = 0;
		this.duration = 0;
		this.notationList = [];
		this.observer = null;
	}
	onInstanceCreated(instance) {
		this.duration = instance.timeline.duration;
		setTimeout(() => {
			this.observeSlotChanges();
			this.updateNotationsMs(this.ms);
		}, 0);
		instance.timeline.addListener(this.UUID, (value) => this.ms = value);
		this.shadowRoot?.addEventListener("modified", () => {
			this.notationList = grabNotationsFromSlot(this._notationSlot);
		});
	}
	onFailure() {}
	observeSlotChanges() {
		const slot = this.renderRoot?.querySelector("slot");
		if (!slot) return;
		this.notationList = grabNotationsFromSlot(this._notationSlot);
		this.observer = new MutationObserver(() => {
			this.notationList = grabNotationsFromSlot(this._notationSlot);
		});
		slot.addEventListener("slotchange", () => {
			this.observer?.disconnect();
			this.notationList = grabNotationsFromSlot(this._notationSlot);
		});
	}
	update(changedProperties) {
		super.update(changedProperties);
		if (changedProperties.has("ms") && this.ms) this.updateNotationsMs(this.ms);
	}
	updateNotationsMs(ms) {
		this.notationCurrent = getCurrentNotationsByMs(ms, this);
	}
	render() {
		return html`<slot name="notation"></slot>
        <slot></slot>`;
	}
};
__decorate([state(), queryAssignedElements({
	slot: "notation",
	flatten: true
})], NotationProvider.prototype, "_notationSlot", void 0);
__decorate([state()], NotationProvider.prototype, "ms", void 0);
__decorate([state(), provide({ context: notationDurationContext })], NotationProvider.prototype, "duration", void 0);
__decorate([state(), provide({ context: notationListContext })], NotationProvider.prototype, "notationList", void 0);
__decorate([state(), provide({ context: notationCurrentContext })], NotationProvider.prototype, "notationCurrent", void 0);
NotationProvider = __decorate([customElement("notation-provider")], NotationProvider);

//#endregion
//#region src/controls/file/notation/NotationTimeline.ts
let NotationContent = class NotationContent extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.durationConverter = durationConverter;
	}
	onInstanceCreated() {}
	onFailure() {}
	renderEntry(entry) {
		if (entry.from !== void 0 && entry.to !== void 0) {
			const left = entry.from / this.duration * 100;
			return html`<button class="entry" style="left: ${left}%; width: ${entry.to / this.duration * 100 - left}%; ${entry.color ? `background-color: ${entry.color};` : ""}}" @click=${() => this.file?.timeline.setRelativeTime(entry.from + 1)}>
                ${entry.label !== void 0 ? html`<div class="entry-tooltip">
                    <div class="time">${this.durationConverter.toAttribute(entry.from)} - ${this.durationConverter.toAttribute(entry.to)}</div>
                    <div class="label">${entry.label}</div>
                </div>` : nothing}
            </button>`;
		}
		return nothing;
	}
	static {
		this.styles = css`
    
        ::host {
            width: 100%;
            box-sizing: border-box;
            height: 5px;
            position: relative;
            margin-bottom: 5px;
            margin-top: 3px;
            display: block;
            overflow: hidden;
        }

        .container {
            width: 100%;
            position: relative;
            height: 5px;
            top: 0px;
        }

        .entry {
            height: 7px;
            background: var(--thermal-foreground);
            position: absolute;
            top: -2px;
            cursor: pointer;
            border: 0;
            border-left: 1px solid var(--thermal-foreground);
            box-sizing: border-box;
        }

        .entry:nth-child(2n) {
            background-color: var(--thermal-slate-dark);
        }

        .entry-tooltip {
            display: none;
            z-index: 99999;
        }

        .entry:hover,
        .entry:focus {

            background: var(--thermal-primary);
            box-shadow: var(--thermal-shadow);

            .entry-tooltip {

                display: block;
                position: absolute;
                left: -1px;
                bottom: 7px;
                width: 0px;
                text-align: center;

                > div {

                    display: inline-block;
                    padding: 5px 7px;
                    white-space: preserve nowrap;
                    background: var(--thermal-primary-dark);
                    color: var(--thermal-background);
                    text-align: center;
                    
                    border-left: 1px solid var(--thermal-foreground);

                    &.time {
                        border-radius: var(--thermal-radius) var(--thermal-radius) var(--thermal-radius) 0px;
                        font-size: 0.7em;
                        background: var(--thermal-foreground);
                        color: var(--thermal-background);
                    }
                    &.label {
                        border-radius: 0px var(--thermal-radius) var(--thermal-radius) 0px;
                        border-bottom: 1px solid var(--thermal-foreground);
                    }

                    

                }
            }

        }

    `;
	}
	render() {
		return html`<div class="container">
            ${map(this.entries, this.renderEntry.bind(this))}
        </div>`;
	}
};
__decorate([state(), consume({
	context: notationListContext,
	subscribe: true
})], NotationContent.prototype, "entries", void 0);
__decorate([consume({
	context: notationDurationContext,
	subscribe: true
})], NotationContent.prototype, "duration", void 0);
NotationContent = __decorate([customElement("notation-timeline")], NotationContent);

//#endregion
//#region src/controls/file/FileVideoExport.ts
let FileVideoExport = class FileVideoExport extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.size = "md";
		this.label = "Exportovat video";
		this.dialogRef = createRef();
		this.panelRef = createRef();
		this.slug = this.UUID + "__file-export";
		this.isOpen = false;
	}
	onInstanceCreated(instance) {}
	onFailure(error) {}
	renderDialog() {
		const cnt = when(this.isOpen, () => html`<file-video-export-panel ${ref(this.panelRef)}></file-video-export-panel>`, () => nothing);
		return html`<thermal-dialog
            ${ref(this.dialogRef)}
            label="${this.t("export")}"
            is-fullscreen="true"
            .onCloseEveryTime=${() => {
			this.isOpen = false;
			return true;
		}}
        >

            <div slot="content" style="height: 100%;">
                ${cnt}
            </div>

            ${this.renderCurrentFrameExportButton()}

            ${this.renderVideoExportButton()}
        
        </thermal-dialog>`;
	}
	renderVideoExportButton() {
		if (!this.file || this.file && this.file.timeline.isSequence === false) return nothing;
		return html`<thermal-btn
                variant="primary"
                slot="button"
                icon="download"
                iconStyle="micro"
                @click=${() => {
			if (this.panelRef?.value) (this.panelRef?.value).record();
		}}
            >${this.t(T.exportvideo)} (MP4)</thermal-btn>`;
	}
	renderCurrentFrameExportButton() {
		if (!this.file) return nothing;
		return html`<thermal-btn
                variant="primary"
                slot="button"
                icon="download"
                iconStyle="micro"
                @click=${() => {
			if (this.panelRef?.value) (this.panelRef?.value).currentFrame();
		}}
            >${this.file.timeline.isSequence ? "Současný snímek" : this.t(T.exportpng)} (PNG)</thermal-btn>`;
	}
	renderTriggerButton() {
		return html`<thermal-btn
            @click=${() => {
			this.dialogRef.value?.setOpen();
			this.isOpen = true;
		}}
            variant=${this.variant || "default"}
            size=${this.size || "md"}
            plain="${this.plain || false}"
            icon=${ifDefined(this.icon)}
            iconStyle=${ifDefined(this.iconStyle)}
            tooltip=${ifDefined(this.tooltip)}
            pre=${ifDefined(this.pre)}
            style="width: 100%; justify-content: flex-start;"
        >
            ${this.label}
        </thermal-btn>`;
	}
	render() {
		return html`
            ${this.renderDialog()}
            ${this.renderTriggerButton()}
        `;
	}
};
__decorate([property({
	type: String,
	reflect: true
})], FileVideoExport.prototype, "variant", void 0);
__decorate([property({
	type: String,
	reflect: true
})], FileVideoExport.prototype, "size", void 0);
__decorate([property({ type: String })], FileVideoExport.prototype, "icon", void 0);
__decorate([property({ type: String })], FileVideoExport.prototype, "iconStyle", void 0);
__decorate([property({ type: Boolean })], FileVideoExport.prototype, "plain", void 0);
__decorate([property({
	type: String,
	reflect: true
})], FileVideoExport.prototype, "tooltip", void 0);
__decorate([property({
	type: String,
	reflect: true
})], FileVideoExport.prototype, "label", void 0);
__decorate([property({
	type: String,
	reflect: true
})], FileVideoExport.prototype, "pre", void 0);
__decorate([state()], FileVideoExport.prototype, "isOpen", void 0);
FileVideoExport = __decorate([customElement("file-video-export-button")], FileVideoExport);

//#endregion
//#region src/controls/file/video/ISingleVideoExportElement.ts
let VideoExportSkin = /* @__PURE__ */ function(VideoExportSkin) {
	VideoExportSkin["LIGHT"] = "light";
	VideoExportSkin["DARK"] = "dark";
	VideoExportSkin["SOLARIZED"] = "solarized";
	return VideoExportSkin;
}({});
let RecordingPhase = /* @__PURE__ */ function(RecordingPhase) {
	RecordingPhase[RecordingPhase["IDLE"] = 0] = "IDLE";
	RecordingPhase[RecordingPhase["RECORDING"] = 1] = "RECORDING";
	RecordingPhase[RecordingPhase["ENCODING"] = 2] = "ENCODING";
	RecordingPhase[RecordingPhase["CLEANUP"] = 3] = "CLEANUP";
	return RecordingPhase;
}({});

//#endregion
//#region src/controls/file/video/internals/VideoRecorder.ts
/**
* Atribut pro označení dynamických elementů, které se mění mezi framy.
* Tyto elementy budou mít svůj textContent aktualizován z originálu.
*/
const DYNAMIC_CONTENT_ATTRIBUTE = "data-video-dynamic";
/**
* Atribut pro označení SVG elementů, které se mění mezi framy.
* Celý innerHTML SVG bude aktualizován z originálu.
*/
const DYNAMIC_SVG_ATTRIBUTE = "data-video-svg";
/**
* Atribut pro označení elementů, jejichž styly se mění mezi framy.
* Inline styly budou aktualizovány z originálu.
*/
const DYNAMIC_STYLE_ATTRIBUTE = "data-video-style";
/**
* Atribut pro označení elementů, které se mají kompletně překreslit při každém framu.
* Element včetně jeho stylů a potomků bude znovu naklonován z originálu.
* Použij pro elementy, které jsou vytvářeny asynchronně nebo se dynamicky mění.
*/
const DYNAMIC_RERENDER_ATTRIBUTE = "data-video-rerender";
/**
* Atribut pro označení elementů, které nemají být zahrnuty do exportu.
* Tyto elementy budou odstraněny z klonu před exportem.
*/
const IGNORE_ATTRIBUTE = "data-video-ignore";
var VideoRecorder = class {
	constructor(app) {
		this.app = app;
		this.exportWidth = 0;
		this.exportHeight = 0;
		this.canvasToImageMap = /* @__PURE__ */ new Map();
		this.dynamicElementMap = /* @__PURE__ */ new Map();
		this.dynamicSvgMap = /* @__PURE__ */ new Map();
		this.rerenderMap = /* @__PURE__ */ new Map();
		this.dynamicStyleMap = /* @__PURE__ */ new Map();
		this.file = app.innerFile;
		this.exportedElement = app.exportedElement;
	}
	getMuxingCanvas() {
		if (this.muxingCanvas) return this.muxingCanvas;
		const bounds = this.exportedElement.getBoundingClientRect();
		this.muxingCanvas = new OffscreenCanvas(bounds.width, bounds.height);
		return this.muxingCanvas;
	}
	getMuxingContext() {
		if (this.muxingContext) return this.muxingContext;
		if (this.muxingCanvas === void 0) this.getMuxingCanvas();
		this.muxingContext = this.muxingCanvas.getContext("2d", { alpha: false });
		this.muxingContext.imageSmoothingEnabled = false;
		return this.muxingContext;
	}
	/**
	* Jednorázová příprava exportu:
	* 1. Klonuje DOM (pouze jednou)
	* 2. Inlinuje computed styles do klonu
	* 3. Embeduje obrázky jako data URI
	* 4. Vytváří SVG wrapper s foreignObject
	* 5. Mapuje dynamické elementy a canvasy pro rychlou aktualizaci
	*/
	async prepareExport() {
		const element = this.exportedElement;
		this.exportWidth = element.clientWidth;
		this.exportHeight = element.clientHeight;
		console.log("[VideoRecorder] Preparing export...", this.exportWidth, "x", this.exportHeight);
		const clone = element.cloneNode(true);
		console.log("[VideoRecorder] Inlining styles...");
		this.inlineStylesRecursive(element, clone);
		console.log("[VideoRecorder] Flattening custom elements...");
		this.flattenCustomElements(element, clone);
		console.log("[VideoRecorder] Removing ignored elements...");
		this.removeIgnoredElements(clone);
		console.log("[VideoRecorder] Embedding images...");
		await this.embedImages(clone);
		console.log("[VideoRecorder] Cleaning up clone...");
		this.removeLitComments(clone);
		this.ensureXmlnsAttributes(clone);
		console.log("[VideoRecorder] Mapping canvases...");
		this.createCanvasMap(element, clone);
		console.log("[VideoRecorder] Mapping dynamic elements...");
		this.createDynamicElementMap(element, clone);
		console.log("[VideoRecorder] Mapping dynamic SVGs...");
		this.createDynamicSvgMap(element, clone);
		console.log("[VideoRecorder] Mapping dynamic style elements...");
		this.createDynamicStyleMap(element, clone);
		console.log("[VideoRecorder] Mapping rerender elements...");
		this.createRerenderMap(element, clone);
		console.log("[VideoRecorder] Creating SVG wrapper...");
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttribute("width", String(this.exportWidth));
		svg.setAttribute("height", String(this.exportHeight));
		const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
		foreignObject.setAttribute("width", "100%");
		foreignObject.setAttribute("height", "100%");
		foreignObject.setAttribute("x", "0");
		foreignObject.setAttribute("y", "0");
		clone.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
		foreignObject.appendChild(clone);
		svg.appendChild(foreignObject);
		this.preparedSvgWrapper = svg;
		this.preparedClone = clone;
		console.log("[VideoRecorder] Export prepared. Canvas count:", this.canvasToImageMap.size, "Dynamic elements:", this.dynamicElementMap.size, "Rerender elements:", this.rerenderMap.size);
	}
	/**
	* Odstraní elementy s atributem data-video-ignore z klonu.
	* Tyto elementy nebudou zahrnuty do exportu.
	*/
	removeIgnoredElements(clone) {
		const ignored = clone.querySelectorAll(`[${IGNORE_ATTRIBUTE}]`);
		console.log("[VideoRecorder] Removing ignored elements:", ignored.length);
		for (const el of ignored) el.parentNode?.removeChild(el);
	}
	/**
	* Rekurzivně inlinuje computed styles z originálu do klonu.
	* Kopíruje pouze důležité CSS vlastnosti pro zrychlení.
	*/
	inlineStylesRecursive(original, clone) {
		if (!(original instanceof HTMLElement) || !(clone instanceof HTMLElement)) return;
		const computed = getComputedStyle(original);
		for (const prop of [
			"display",
			"position",
			"top",
			"left",
			"right",
			"bottom",
			"width",
			"height",
			"min-width",
			"min-height",
			"max-width",
			"max-height",
			"margin",
			"margin-top",
			"margin-right",
			"margin-bottom",
			"margin-left",
			"padding",
			"padding-top",
			"padding-right",
			"padding-bottom",
			"padding-left",
			"box-sizing",
			"overflow",
			"overflow-x",
			"overflow-y",
			"flex",
			"flex-direction",
			"flex-wrap",
			"justify-content",
			"align-items",
			"align-content",
			"flex-grow",
			"flex-shrink",
			"flex-basis",
			"order",
			"gap",
			"grid",
			"grid-template-columns",
			"grid-template-rows",
			"grid-gap",
			"grid-column",
			"grid-row",
			"background",
			"background-color",
			"background-image",
			"background-size",
			"background-position",
			"border",
			"border-width",
			"border-style",
			"border-color",
			"border-radius",
			"border-top",
			"border-right",
			"border-bottom",
			"border-left",
			"color",
			"font",
			"font-family",
			"font-size",
			"font-weight",
			"font-style",
			"line-height",
			"text-align",
			"text-decoration",
			"text-transform",
			"white-space",
			"letter-spacing",
			"word-spacing",
			"opacity",
			"visibility",
			"z-index",
			"transform",
			"box-shadow",
			"text-shadow",
			"table-layout",
			"border-collapse",
			"border-spacing"
		]) {
			const value = computed.getPropertyValue(prop);
			if (value && value !== "none" && value !== "normal" && value !== "auto") clone.style.setProperty(prop, value);
		}
		const origChildren = Array.from(original.children);
		const cloneChildren = Array.from(clone.children);
		for (let i = 0; i < origChildren.length && i < cloneChildren.length; i++) this.inlineStylesRecursive(origChildren[i], cloneChildren[i]);
	}
	/**
	* Zploštění custom elementů — nahradí custom elementy za statický HTML.
	* Tím se zabrání spouštění jejich lifecycle (connectedCallback atd.)
	* při vložení klonu do dokumentu.
	* 
	* DŮLEŽITÉ: Canvasy jsou označeny data-canvas-index atributem pro pozdější mapování.
	*/
	flattenCustomElements(original, clone) {
		const originalCanvases = this.querySelectorAllDeep(original, "canvas");
		originalCanvases.forEach((canvas, index) => {
			canvas.setAttribute("data-canvas-index", String(index));
		});
		console.log("[VideoRecorder] Marked canvases with index (including shadow DOM):", originalCanvases.length);
		const originalElements = Array.from(original.querySelectorAll("*"));
		const cloneElements = Array.from(clone.querySelectorAll("*"));
		for (let i = originalElements.length - 1; i >= 0; i--) {
			const origEl = originalElements[i];
			const cloneEl = cloneElements[i];
			if (!cloneEl) continue;
			if (origEl.tagName.includes("-") && origEl instanceof HTMLElement) {
				const replacement = document.createElement("div");
				replacement.setAttribute("data-flattened-from", origEl.tagName.toLowerCase());
				const computed = getComputedStyle(origEl);
				replacement.style.display = computed.display;
				replacement.style.width = computed.width;
				replacement.style.height = computed.height;
				replacement.style.position = computed.position;
				replacement.style.margin = computed.margin;
				replacement.style.padding = computed.padding;
				replacement.style.boxSizing = computed.boxSizing;
				replacement.style.background = computed.background;
				replacement.style.backgroundColor = computed.backgroundColor;
				if (origEl.shadowRoot) {
					for (const child of origEl.shadowRoot.children) if (child.tagName !== "STYLE") {
						const childClone = child.cloneNode(true);
						this.inlineStylesRecursive(child, childClone);
						replacement.appendChild(childClone);
					}
				} else for (const child of origEl.children) {
					const childClone = child.cloneNode(true);
					this.inlineStylesRecursive(child, childClone);
					replacement.appendChild(childClone);
				}
				const nestedCustom = replacement.querySelectorAll("*");
				for (const nested of nestedCustom) if (nested.tagName.includes("-")) {
					const nestedOrig = origEl.shadowRoot?.querySelector(nested.tagName.toLowerCase()) || origEl.querySelector(nested.tagName.toLowerCase());
					if (nestedOrig) this.flattenSingleElement(nestedOrig, nested);
				}
				cloneEl.parentNode?.replaceChild(replacement, cloneEl);
				console.log(`[VideoRecorder] Flattened: <${origEl.tagName.toLowerCase()}>`);
			}
		}
	}
	/**
	* Zploští jeden custom element
	*/
	flattenSingleElement(original, clone) {
		const replacement = document.createElement("div");
		replacement.setAttribute("data-flattened-from", original.tagName.toLowerCase());
		const computed = getComputedStyle(original);
		replacement.style.display = computed.display;
		replacement.style.width = computed.width;
		replacement.style.height = computed.height;
		if (original.shadowRoot) {
			for (const child of original.shadowRoot.children) if (child.tagName !== "STYLE") {
				const childClone = child.cloneNode(true);
				this.inlineStylesRecursive(child, childClone);
				replacement.appendChild(childClone);
			}
		}
		clone.parentNode?.replaceChild(replacement, clone);
	}
	/**
	* Převede všechny <img> a background-image na data URI
	*/
	async embedImages(element) {
		const images = element.querySelectorAll("img");
		const imagePromises = [];
		for (const img of images) if (img.src && !img.src.startsWith("data:")) imagePromises.push(this.fetchAsDataUri(img.src).then((dataUri) => {
			img.src = dataUri;
		}).catch((e) => console.warn("[VideoRecorder] Failed to embed image:", img.src, e)));
		const bgElements = element.querySelectorAll("*");
		for (const el of bgElements) {
			const bg = el.style.background || "";
			const bgImg = el.style.backgroundImage || "";
			const combined = [bg, bgImg].filter(Boolean).join(" ");
			if (!combined.includes("url(")) continue;
			const urls = Array.from(combined.matchAll(/url\((['"]?)(.*?)\1\)/g)).map((m) => m[2]).filter((u) => u && !u.startsWith("data:"));
			if (urls.length === 0) continue;
			imagePromises.push((async () => {
				let newBg = bg;
				let newBgImg = bgImg;
				for (const url of urls) {
					const dataUri = await this.fetchAsDataUri(url);
					newBg = newBg.replaceAll(url, dataUri);
					newBgImg = newBgImg.replaceAll(url, dataUri);
				}
				if (bg) el.style.background = newBg;
				if (bgImg) el.style.backgroundImage = newBgImg;
			})().catch((e) => console.warn("[VideoRecorder] Failed to embed background:", e)));
		}
		await Promise.all(imagePromises);
	}
	/**
	* Načte URL jako data URI
	*/
	async fetchAsDataUri(url) {
		const blob = await (await fetch(url)).blob();
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		});
	}
	/**
	* Vytvoří mapování mezi originálními canvasy a <img> elementy v klonu.
	* Nahrazuje <canvas> elementy za <img> elementy v klonu.
	* Používá data-canvas-index atribut pro správné mapování po zploštění.
	*/
	createCanvasMap(original, clone) {
		this.canvasToImageMap.clear();
		const originalCanvases = this.querySelectorAllDeep(original, "canvas");
		const cloneCanvases = clone.querySelectorAll("canvas");
		console.log("[VideoRecorder] Found canvases in original:", originalCanvases.length);
		console.log("[VideoRecorder] Found canvases in clone:", cloneCanvases.length);
		for (const origCanvas of originalCanvases) {
			const index = origCanvas.getAttribute("data-canvas-index");
			if (index === null) continue;
			const cloneCanvas = clone.querySelector(`canvas[data-canvas-index="${index}"]`);
			if (!cloneCanvas) {
				console.warn(`[VideoRecorder] Canvas with index ${index} not found in clone`);
				continue;
			}
			const origCanvasEl = origCanvas;
			const img = document.createElement("img");
			img.width = origCanvasEl.width;
			img.height = origCanvasEl.height;
			img.style.width = cloneCanvas.style.width || `${origCanvasEl.width}px`;
			img.style.height = cloneCanvas.style.height || `${origCanvasEl.height}px`;
			img.style.display = "block";
			img.style.imageRendering = "pixelated";
			img.setAttribute("data-canvas-index", index);
			try {
				const dataUrl = this.getCanvasDataUrl(origCanvasEl);
				if (dataUrl) {
					img.src = dataUrl;
					console.log(`[VideoRecorder] Canvas ${index} converted to data URL (${dataUrl.length} chars)`);
				} else console.warn(`[VideoRecorder][taint] Canvas ${index} returned null dataURL - possibly tainted!`, origCanvasEl);
			} catch (e) {
				console.warn(`[VideoRecorder][taint] Canvas ${index} TAINTED - cannot get dataURL:`, e, origCanvasEl);
			}
			cloneCanvas.parentNode?.replaceChild(img, cloneCanvas);
			this.canvasToImageMap.set(origCanvasEl, img);
			console.log(`[VideoRecorder] Mapped canvas ${index}: ${origCanvasEl.width}x${origCanvasEl.height}`);
		}
		console.log("[VideoRecorder] Total canvas mappings:", this.canvasToImageMap.size);
	}
	/**
	* Vytvoří mapování mezi originálními a klonovanými dynamickými elementy.
	* Hledá elementy s atributem DYNAMIC_CONTENT_ATTRIBUTE včetně shadow DOM.
	*/
	createDynamicElementMap(original, clone) {
		this.dynamicElementMap.clear();
		const originalDynamic = this.querySelectorAllDeep(original, `[${DYNAMIC_CONTENT_ATTRIBUTE}]`);
		const cloneDynamic = clone.querySelectorAll(`[${DYNAMIC_CONTENT_ATTRIBUTE}]`);
		console.log("[VideoRecorder] Found dynamic elements (including shadow DOM):", originalDynamic.length);
		console.log("[VideoRecorder] Found dynamic elements in clone:", cloneDynamic.length);
		originalDynamic.forEach((origEl, index) => {
			origEl.setAttribute("data-dynamic-index", String(index));
		});
		for (let i = 0; i < originalDynamic.length && i < cloneDynamic.length; i++) this.dynamicElementMap.set(originalDynamic[i], cloneDynamic[i]);
	}
	/**
	* Vytvoří mapování pro dynamické SVG elementy.
	* Hledá SVG s atributem DYNAMIC_SVG_ATTRIBUTE včetně shadow DOM.
	*/
	createDynamicSvgMap(original, clone) {
		this.dynamicSvgMap.clear();
		const originalSvgs = this.querySelectorAllDeep(original, `svg[${DYNAMIC_SVG_ATTRIBUTE}]`);
		const cloneSvgs = clone.querySelectorAll(`svg[${DYNAMIC_SVG_ATTRIBUTE}]`);
		console.log("[VideoRecorder] Found dynamic SVGs (including shadow DOM):", originalSvgs.length);
		for (let i = 0; i < originalSvgs.length && i < cloneSvgs.length; i++) this.dynamicSvgMap.set(originalSvgs[i], cloneSvgs[i]);
	}
	/**
	* Vytvoří mapování pro elementy s dynamickými styly.
	* Hledá elementy s atributem DYNAMIC_STYLE_ATTRIBUTE včetně shadow DOM.
	*/
	createDynamicStyleMap(original, clone) {
		this.dynamicStyleMap.clear();
		const originalStyled = this.querySelectorAllDeep(original, `[${DYNAMIC_STYLE_ATTRIBUTE}]`);
		const cloneStyled = clone.querySelectorAll(`[${DYNAMIC_STYLE_ATTRIBUTE}]`);
		console.log("[VideoRecorder] Found dynamic style elements (including shadow DOM):", originalStyled.length);
		for (let i = 0; i < originalStyled.length && i < cloneStyled.length; i++) this.dynamicStyleMap.set(originalStyled[i], cloneStyled[i]);
	}
	/**
	* Vytvoří mapování pro elementy, které se mají kompletně překreslit při každém framu.
	* Hledá elementy s atributem DYNAMIC_RERENDER_ATTRIBUTE včetně shadow DOM.
	*/
	createRerenderMap(original, clone) {
		this.rerenderMap.clear();
		const originalRerender = this.querySelectorAllDeep(original, `[${DYNAMIC_RERENDER_ATTRIBUTE}]`);
		const cloneRerender = clone.querySelectorAll(`[${DYNAMIC_RERENDER_ATTRIBUTE}]`);
		console.log("[VideoRecorder] Found rerender elements (including shadow DOM):", originalRerender.length);
		for (let i = 0; i < originalRerender.length && i < cloneRerender.length; i++) this.rerenderMap.set(originalRerender[i], cloneRerender[i]);
	}
	/**
	* querySelector pro celý DOM strom včetně shadow DOM
	*/
	querySelectorAllDeep(root, selector) {
		const results = [];
		const matches = root.querySelectorAll(selector);
		results.push(...Array.from(matches));
		const allElements = root.querySelectorAll("*");
		for (const el of allElements) if (el.shadowRoot) {
			const shadowMatches = el.shadowRoot.querySelectorAll(selector);
			results.push(...Array.from(shadowMatches));
			const nestedResults = this.querySelectorAllDeepInShadow(el.shadowRoot, selector);
			results.push(...nestedResults);
		}
		return results;
	}
	/**
	* Rekurzivní helper pro hledání v shadow DOM
	*/
	querySelectorAllDeepInShadow(shadowRoot, selector) {
		const results = [];
		const allElements = shadowRoot.querySelectorAll("*");
		for (const el of allElements) if (el.shadowRoot) {
			const shadowMatches = el.shadowRoot.querySelectorAll(selector);
			results.push(...Array.from(shadowMatches));
			const nestedResults = this.querySelectorAllDeepInShadow(el.shadowRoot, selector);
			results.push(...nestedResults);
		}
		return results;
	}
	/**
	* Aktualizuje pouze dynamický obsah v klonu:
	* 1. Aktualizuje src <img> elementů z originálních canvasů
	* 2. Aktualizuje textContent dynamických elementů
	* 3. Aktualizuje innerHTML dynamických SVG
	* 4. Aktualizuje inline styly dynamických elementů
	* 5. Kompletně překreslí rerender elementy
	* 
	* Toto je MNOHEM rychlejší než klonování celého DOM!
	*/
	updateDynamicContent() {
		for (const [origCanvas, img] of this.canvasToImageMap) try {
			const dataUrl = this.getCanvasDataUrl(origCanvas);
			if (dataUrl) img.src = dataUrl;
		} catch (e) {
			console.warn("[VideoRecorder] Failed to update canvas image:", e);
		}
		for (const [origEl, cloneEl] of this.dynamicElementMap) if (cloneEl.textContent !== origEl.textContent) cloneEl.textContent = origEl.textContent;
		for (const [origSvg, cloneSvg] of this.dynamicSvgMap) if (cloneSvg.innerHTML !== origSvg.innerHTML) cloneSvg.innerHTML = origSvg.innerHTML;
		for (const [origEl, cloneEl] of this.dynamicStyleMap) {
			const origStyle = origEl.getAttribute("style") || "";
			if ((cloneEl.getAttribute("style") || "") !== origStyle) cloneEl.setAttribute("style", origStyle);
		}
		for (const [origEl, cloneEl] of this.rerenderMap) this.rerenderElement(origEl, cloneEl);
	}
	/**
	* Kompletně překreslí element - znovu naklonuje obsah z originálu
	* včetně všech stylů a potomků.
	*/
	rerenderElement(original, clone) {
		if (original instanceof HTMLElement && original.tagName.includes("-")) {
			if (original.shadowRoot) {
				while (clone.firstChild) clone.removeChild(clone.firstChild);
				for (const child of original.shadowRoot.children) if (child.tagName !== "STYLE") {
					const childClone = child.cloneNode(true);
					this.inlineStylesRecursive(child, childClone);
					clone.appendChild(childClone);
				}
			}
		} else {
			if (clone.innerHTML !== original.innerHTML) clone.innerHTML = original.innerHTML;
			if (original instanceof HTMLElement && clone instanceof HTMLElement) {
				const origStyle = original.getAttribute("style") || "";
				clone.setAttribute("style", origStyle);
				this.inlineStylesRecursive(original, clone);
			}
		}
	}
	/**
	* Odstraní Lit framework komentáře z klonu.
	* Tyto komentáře mohou způsobovat problémy v SVG foreignObject.
	*/
	removeLitComments(element) {
		const walker = document.createTreeWalker(element, NodeFilter.SHOW_COMMENT, null);
		const commentsToRemove = [];
		let node;
		while (node = walker.nextNode()) commentsToRemove.push(node);
		for (const comment of commentsToRemove) comment.parentNode?.removeChild(comment);
	}
	/**
	* Zkontroluje a opraví xmlns atributy v klonu pro foreignObject.
	* Všechny HTML elementy musí mít xmlns="http://www.w3.org/1999/xhtml"
	*/
	ensureXmlnsAttributes(element) {
		const XHTML_NS = "http://www.w3.org/1999/xhtml";
		const checkAndFix = (el) => {
			if (el instanceof HTMLElement) {
				const currentXmlns = el.getAttribute("xmlns");
				if (!currentXmlns || currentXmlns !== XHTML_NS) el.setAttribute("xmlns", XHTML_NS);
			}
			for (const child of el.children) checkAndFix(child);
		};
		checkAndFix(element);
	}
	/**
	* Získá data URL z canvasu - podporuje i WebGL kontexty
	*/
	getCanvasDataUrl(canvas) {
		const webgl2 = canvas.getContext("webgl2");
		const webgl = canvas.getContext("webgl");
		const ctx2d = canvas.getContext("2d");
		if (webgl2 || webgl) try {
			return this.webglCanvasToDataUrl(canvas, webgl2 || webgl);
		} catch (e) {
			console.warn("[VideoRecorder] WebGL canvas unreadable:", e);
			return null;
		}
		else if (ctx2d) try {
			return canvas.toDataURL("image/png");
		} catch (e) {
			console.warn("[VideoRecorder] 2D canvas unreadable:", e);
			return null;
		}
		else try {
			return canvas.toDataURL("image/png");
		} catch (e) {
			console.warn("[VideoRecorder] Canvas unreadable:", e);
			return null;
		}
	}
	/**
	* Konvertuje WebGL canvas na data URL pomocí readPixels
	*/
	webglCanvasToDataUrl(canvas, gl) {
		const width = canvas.width;
		const height = canvas.height;
		const pixels = new Uint8Array(width * height * 4);
		gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
		const tempCanvas = document.createElement("canvas");
		tempCanvas.width = width;
		tempCanvas.height = height;
		const tempCtx = tempCanvas.getContext("2d");
		const imageData = tempCtx.createImageData(width, height);
		for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
			const srcIdx = ((height - y - 1) * width + x) * 4;
			const dstIdx = (y * width + x) * 4;
			imageData.data[dstIdx] = pixels[srcIdx];
			imageData.data[dstIdx + 1] = pixels[srcIdx + 1];
			imageData.data[dstIdx + 2] = pixels[srcIdx + 2];
			imageData.data[dstIdx + 3] = pixels[srcIdx + 3];
		}
		tempCtx.putImageData(imageData, 0, 0);
		return tempCanvas.toDataURL("image/png");
	}
	/**
	* Hlavní metoda pro export videa.
	* Kombinuje rasterizaci a enkódování do jednoho průchodu.
	* Framy se posílají přímo do encoderu bez mezitřídy do IndexedDB.
	*/
	async recordAndEncode() {
		this.app.setRecordingPhase(RecordingPhase.RECORDING);
		await this.prepareExport();
		const output = new Output({
			target: new BufferTarget(),
			format: new Mp4OutputFormat()
		});
		console.log("[VideoRecorder] Supported video codecs:", output.format.getSupportedVideoCodecs());
		const source = new VideoSampleSource({
			codec: "vp9",
			bitrate: this.app.renderProps.mp4Quality
		});
		output.addVideoTrack(source);
		output.start();
		const totalFrames = this.file.timeline.frames.length;
		console.log("[VideoRecorder] Starting recording & encoding. Total frames:", totalFrames);
		let frameCount = 0;
		for (const frame of this.file.timeline.frames) {
			await this.file.timeline.setRelativeTime(frame.relative);
			await this.file.draw();
			this.updateDynamicContent();
			if (!await this.rasterizeToCanvas()) {
				console.warn("[VideoRecorder] Failed to rasterize frame:", frame.index);
				continue;
			}
			const videoFrame = new VideoFrame(this.getMuxingCanvas(), { timestamp: frame.relative * 1e3 });
			const sample = new VideoSample(videoFrame);
			await source.add(sample, { keyFrame: frameCount % 30 === 0 });
			videoFrame.close();
			sample.close();
			frameCount++;
			if (frameCount % 10 === 0) console.log(`[VideoRecorder] Progress: ${frameCount}/${totalFrames} frames`);
			const percent = frameCount / totalFrames * 100;
			this.app.setRecordingPhaseProgress(percent);
		}
		this.app.setRecordingPhase(RecordingPhase.ENCODING);
		console.log("[VideoRecorder] Recording & encoding complete.");
		source.close();
		await output.finalize();
		this.app.setRecordingPhase(RecordingPhase.IDLE);
		return new Blob([output.target.buffer], { type: "video/mp4" });
	}
	/**
	* Rasterizuje připravené SVG přímo do muxing canvasu.
	* Vrací true při úspěchu, false při chybě.
	*/
	async rasterizeToCanvas() {
		if (!this.preparedSvgWrapper) {
			console.error("[VideoRecorder] SVG wrapper not prepared!");
			return false;
		}
		const serialized = new XMLSerializer().serializeToString(this.preparedSvgWrapper);
		const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(serialized)}`;
		try {
			let imageToDraw;
			imageToDraw = await new Promise((resolve, reject) => {
				const img = new Image();
				img.width = this.exportWidth;
				img.height = this.exportHeight;
				img.onload = () => resolve(img);
				img.onerror = (e) => {
					console.error("[VideoRecorder] Image load error:", e);
					reject(/* @__PURE__ */ new Error(`Failed to load SVG image`));
				};
				img.src = dataUrl;
			});
			const canvas = this.getMuxingCanvas();
			canvas.width = this.exportWidth;
			canvas.height = this.exportHeight;
			const ctx = this.getMuxingContext();
			ctx.clearRect(0, 0, this.exportWidth, this.exportHeight);
			ctx.drawImage(imageToDraw, 0, 0);
			return true;
		} catch (e) {
			console.error("[VideoRecorder] Rasterization error:", e);
			return false;
		}
	}
	/**
	* Vyčistí připravené struktury po dokončení exportu.
	* Důležité pro uvolnění paměti a možnost opakovaného exportu.
	*/
	cleanup() {
		for (const origCanvas of this.canvasToImageMap.keys()) origCanvas.removeAttribute("data-canvas-index");
		for (const origEl of this.dynamicElementMap.keys()) origEl.removeAttribute("data-dynamic-index");
		this.canvasToImageMap.clear();
		this.dynamicElementMap.clear();
		this.dynamicSvgMap.clear();
		this.dynamicStyleMap.clear();
		this.rerenderMap.clear();
		this.preparedSvgWrapper = void 0;
		this.preparedClone = void 0;
		this.muxingCanvas = void 0;
		this.muxingContext = void 0;
		this.exportWidth = 0;
		this.exportHeight = 0;
		console.log("[VideoRecorder] Cleanup complete.");
	}
	/**
	* Hlavní veřejná metoda pro spuštění exportu videa.
	*/
	async captureVideo() {
		const initialScale = this.app.renderProps.previewScale;
		this.app.setPreviewScale(1);
		await Promise.resolve();
		const start = performance.now();
		try {
			const videoBlob = await this.recordAndEncode();
			const end = performance.now();
			console.log("[VideoRecorder] Total export time:", end - start, "ms");
			const blobUrl = URL.createObjectURL(videoBlob);
			const a = document.createElement("a");
			a.href = blobUrl;
			const baseName = this.app.renderProps.fileName || "exported-video";
			a.download = baseName.endsWith(".mp4") ? baseName : `${baseName}.mp4`;
			a.click();
			a.remove();
			setTimeout(() => {
				URL.revokeObjectURL(blobUrl);
				console.log("[VideoRecorder] Video blob URL revoked.");
			}, 1e3);
		} finally {
			this.cleanup();
			this.app.setPreviewScale(initialScale);
		}
	}
	/**
	* Hlavní metoda pro export současného snímku jako PNG
	*/
	async captureCurrentFrameAsPng() {
		const initialScale = this.app.renderProps.previewScale;
		await Promise.resolve();
		try {
			await this.prepareExport();
			await this.file.draw();
			this.updateDynamicContent();
			await this.rasterizeToCanvas();
			const blob = await this.getMuxingCanvas().convertToBlob({ type: "image/png" });
			if (blob) {
				const blobUrl = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = blobUrl;
				const baseName = this.app.renderProps.fileName || "exported-frame";
				const finalName = [
					baseName,
					"frame",
					this.file.timeline.currentFrameIndex + 1
				].join("_");
				a.download = finalName.endsWith(".png") ? baseName : `${finalName}.png`;
				a.click();
				a.remove();
				setTimeout(() => {
					URL.revokeObjectURL(blobUrl);
					console.log("[VideoRecorder] PNG blob URL revoked.");
				}, 1e3);
			}
		} finally {
			this.cleanup();
			this.app.setPreviewScale(initialScale);
		}
	}
};

//#endregion
//#region src/controls/file/video/AbstractSingleVideoExport.ts
var AbstractSingleVideoExport = class extends AbstractFileConsumer {
	constructor(..._args) {
		super(..._args);
		this.fileCopyElementRef = createRef();
		this.exportedDivRef = createRef();
		this.parentHasAnalyses = false;
		this.recordingPhase = RecordingPhase.IDLE;
		this.recordingPhaseProgress = 0;
		this.renderProps = {
			hasHistogram: true,
			hasThermalScale: true,
			hasAnalysis: false,
			hasTimeline: false,
			isVertical: false,
			exportFrameWidth: 1200,
			exportFramePadding: 15,
			exportFrameGap: 30,
			exportGraphHeight: 300,
			fileName: "exported-video",
			mp4Quality: QUALITY_VERY_HIGH,
			skin: VideoExportSkin.LIGHT,
			previewScale: .45,
			autoScale: true
		};
	}
	get slug() {
		return [
			"single-video-export",
			this.file?.fileName ?? "no-file",
			this.UUID
		].join("__");
	}
	get outerFile() {
		return this.file;
	}
	get innerFile() {
		return this.fileCopyElementRef.value?.file;
	}
	get exportedElement() {
		return this.exportedDivRef.value;
	}
	setRecordingPhase(phase) {
		this.recordingPhase = phase;
	}
	setRecordingPhaseProgress(progress) {
		this.recordingPhaseProgress = progress;
	}
	/** Voláno při změně vlastností ovlivňujících layout exportu.
	*  Lze přepsat v potomcích pro reakci na změny (např. přepočet autoScale).
	*/
	onLayoutAffectingPropertyChanged() {}
	setHasHistogram(value) {
		this.renderProps.hasHistogram = value;
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setHasThermalScale(value) {
		this.renderProps.hasThermalScale = value;
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setPreviewScale(value) {
		this.renderProps.previewScale = value;
		this.requestUpdate();
	}
	setAutoScale(value) {
		this.renderProps.autoScale = value;
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setHasAnalysis(value) {
		this.renderProps.hasAnalysis = value;
		if (value && this.file) {
			this.fileCopyElementRef.value?.copyAnalysesFromParent();
			this.analysis1 = this.file.slots.getSlot(0)?.serialized ?? void 0;
			this.analysis2 = this.file.slots.getSlot(1)?.serialized ?? void 0;
			this.analysis3 = this.file.slots.getSlot(2)?.serialized ?? void 0;
			this.analysis4 = this.file.slots.getSlot(3)?.serialized ?? void 0;
			this.analysis5 = this.file.slots.getSlot(4)?.serialized ?? void 0;
			this.analysis6 = this.file.slots.getSlot(5)?.serialized ?? void 0;
			this.analysis7 = this.file.slots.getSlot(6)?.serialized ?? void 0;
		} else {
			this.fileCopyElementRef.value?.clearAnalyses();
			this.analysis1 = void 0;
			this.analysis2 = void 0;
			this.analysis3 = void 0;
			this.analysis4 = void 0;
			this.analysis5 = void 0;
			this.analysis6 = void 0;
			this.analysis7 = void 0;
		}
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setHasTimeline(value) {
		this.renderProps.hasTimeline = value;
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setIsVertical(value) {
		this.renderProps.isVertical = value;
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setExportFramePadding(value) {
		this.renderProps.exportFramePadding = value;
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setExportFrameGap(value) {
		this.renderProps.exportFrameGap = value;
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setExportFrameWidth(value) {
		this.renderProps.exportFrameWidth = value;
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setExportGraphHeight(value) {
		this.renderProps.exportGraphHeight = value;
		this.requestUpdate();
		this.onLayoutAffectingPropertyChanged();
	}
	setFileName(value) {
		this.renderProps.fileName = value;
		this.requestUpdate();
	}
	setMp4Quality(value) {
		this.renderProps.mp4Quality = value;
		this.requestUpdate();
	}
	setSkin(value) {
		this.renderProps.skin = value;
		this.requestUpdate();
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("file") && this.file) {
			const baseName = this.file.fileName.replace(/\.lrc$/i, "");
			this.renderProps.fileName = baseName;
			this.requestUpdate();
		}
	}
	async record() {
		await new VideoRecorder(this).captureVideo();
	}
	async currentFrame() {
		await new VideoRecorder(this).captureCurrentFrameAsPng();
	}
};
__decorate([property({
	type: Boolean,
	reflect: true
})], AbstractSingleVideoExport.prototype, "parentHasAnalyses", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "analysis1", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "analysis2", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "analysis3", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "analysis4", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "analysis5", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "analysis6", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "analysis7", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "recordingPhase", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "recordingPhaseProgress", void 0);
__decorate([state()], AbstractSingleVideoExport.prototype, "renderProps", void 0);

//#endregion
//#region src/connection/controllers/apps/directives/DirectiveHelpers.ts
/** Utilities for rendering */
var DirectiveHelpers = class {
	static unknownContainsSomething(content) {
		if (content === nothing || content === null || content === void 0) return false;
		if (typeof content === "string" && content.trim().length === 0) return false;
		if (Array.isArray(content)) {
			if (content.length === 0) return false;
			else if (!content.some((item) => this.unknownContainsSomething(item))) return false;
		}
		return true;
	}
	static userMayEditFolder(client, folder) {
		if (client.isRoot) return true;
		return folder.may_manage_folders_in || folder.may_manage_files_in;
	}
	static userMayEditFile(client, folder) {
		if (client.isRoot) return true;
		return folder.may_manage_files_in;
	}
	static userMaySwithFolderContentMode(folder, subfolders) {
		if (!folder.may_manage_files_in || !folder.may_manage_folders_in) return false;
		if (folder.may_have_files) return folder.lrc_count <= 0;
		if (!folder.may_have_files) return Array.isArray(subfolders) && subfolders.length > 0;
		return false;
	}
	static userMayDeleteFolder(client, folder, subfolders, files) {
		if (client.isLoggedIn === false || !folder.may_manage_folders_in && !folder.may_manage_files_in) return false;
		if (!folder.may_have_files) return Array.isArray(subfolders) && subfolders.length === 0;
		else if (folder.may_have_files) return Array.isArray(files) && files.length === 0 && folder.lrc_count === 0;
		return false;
	}
	static folderContainsFiles(folder, files) {
		return Array.isArray(files) && files.length > 0 && folder.lrc_count > 0;
	}
	static userIsRoot(client) {
		return client.isRoot;
	}
	static userIsLoggedIn(client) {
		return client.isLoggedIn;
	}
};

//#endregion
//#region src/connection/controllers/apps/directives/AbstractConnectedDirective.ts
var AbstractConnectedDirective = class extends Directive {
	t(key) {
		return t(T[key]);
	}
	update(_part, props) {
		return this.render(...props);
	}
	unknownContainsSomething(content) {
		return DirectiveHelpers.unknownContainsSomething(content);
	}
	renderThermalScale() {
		return html`<div>
        <registry-histogram expandable="true"></registry-histogram>
        <registry-range-slider></registry-range-slider>
        <registry-ticks-bar></registry-ticks-bar>
    </div>`;
	}
	renderDef(...args) {
		const content = [];
		const first = args.shift();
		if (first) content.push(html`<dt>${first}</dt>`);
		args.forEach((item) => {
			content.push(html`<dd>${item}</dd>`);
		});
		return content;
	}
};

//#endregion
//#region src/connection/controllers/apps/directives/SlotOrNothing.ts
var SlotOrNothing = class extends AbstractConnectedDirective {
	render(label, content) {
		if (!this.unknownContainsSomething(content)) return nothing;
		return html`<thermal-slot
            label=${t(T[label])}
        >${content}</thermal-slot>`;
	}
};
const slotOrNothing = directive(SlotOrNothing);

//#endregion
//#region src/controls/file/video/directives/SingleVideoExportConfigDirective.ts
var SingleVideoExportConfigDirective = class extends Directive {
	renderRadio(label, checked, onChange) {
		return html`<thermal-radio
            .checked=${checked}
            .onChange=${onChange}
        >${label}</thermal-radio>`;
	}
	renderText(label, suffix, value, onChange) {
		return html`<div class="export-config-field export-config-field--text">

            <div class="export-config-field--label">
                <label>${label}</label>
            </div>

            <div class="export-config-field--value">

                <div class="">
                    <input
                        type="text"
                        .value=${value}
                        @input=${(event) => {
			const target = event.target;
			onChange(target.value);
		}}
                    />
                    <span class="unit">${suffix}</span>
                </div>

            </div>

        </div>`;
	}
	renderDropdown(value, options, onChange) {
		return html`<thermal-dropdown>
            <span slot="invoker">${value}</span>
            ${options.map((option) => html`<thermal-btn
            slot="option"
            @click=${() => onChange(option)}
        >${option}</thermal-btn>`)}
        </thermal-dropdown>`;
	}
	renderNumber(label, unit, value, onChange, min, max, step) {
		return html`<div class="export-config-field">

            <div class="export-config-field--label">
                <label>${label}</label>
            </div>

            <div class="export-config-field--value">

                <div class="">
                    <input
                        type="number"
                        .value=${value === void 0 || value === null ? "" : String(value)}
                        min=${ifDefined(min)}
                        max=${ifDefined(max)}
                        step=${ifDefined(step)}
                        @input=${(event) => {
			const raw = event.target.value.trim();
			if (raw === "") {
				onChange(NaN);
				return;
			}
			let num = parseFloat(raw);
			if (min !== void 0 && !isNaN(num) && num < min) num = min;
			if (max !== void 0 && !isNaN(num) && num > max) num = max;
			onChange(num);
		}}
                    />
                    <span class="unit">${unit}</span>
                </div>

            </div>

        </div>`;
	}
	renderConfigHeader(element) {
		const isSequence = element.innerFile?.timeline.isSequence;
		const hasAnalyses = element.parentHasAnalyses;
		const slots = [];
		const thermalScale = [html`<manager-palette-dropdown ></manager-palette-dropdown>`, html`<registry-range-form></registry-range-form>`];
		slots.push(slotOrNothing("thermalscale", thermalScale));
		const components = [this.renderRadio(element.t(T.histogram), element.renderProps.hasHistogram, element.setHasHistogram.bind(element)), this.renderRadio(element.t(T.thermalscale), element.renderProps.hasThermalScale, element.setHasThermalScale.bind(element))];
		if (hasAnalyses) components.push(this.renderRadio(element.t(T.analysis), element.renderProps.hasAnalysis, element.setHasAnalysis.bind(element)));
		if (isSequence) components.push(this.renderRadio(element.t(T.timeline), element.renderProps.hasTimeline, element.setHasTimeline.bind(element)));
		slots.push(slotOrNothing("exportcontent", components));
		const appearance = [];
		if (hasAnalyses && element.renderProps.hasAnalysis) appearance.push(this.renderRadio("Is Vertical", element.renderProps.isVertical, element.setIsVertical.bind(element)));
		appearance.push(this.renderDropdown(element.renderProps.skin, [
			"light",
			"dark",
			"solarized"
		], (value) => element.setSkin(value)));
		slots.push(slotOrNothing("display", appearance));
		slots.push(this.renderNumber(element.t(T.exportwidth), "px", element.renderProps.exportFrameWidth, element.setExportFrameWidth.bind(element), 500, 1920, 10));
		slots.push(this.renderNumber(element.t(T.exportmargin), "px", element.renderProps.exportFramePadding, element.setExportFramePadding.bind(element), 0, 100, 1));
		if (hasAnalyses && element.renderProps.hasAnalysis) {
			slots.push(this.renderNumber(element.t(T.exportgap), "px", element.renderProps.exportFrameGap, element.setExportFrameGap.bind(element), 0, 100, 1));
			slots.push(this.renderNumber(element.t(T.exportgrahpheight), "px", element.renderProps.exportGraphHeight, element.setExportGraphHeight.bind(element), 200, 700, 1));
		}
		const ext = isSequence ? ".mp4 / .png" : ".png";
		slots.push(this.renderText(element.t(T.name), ext, element.renderProps.fileName, element.setFileName.bind(element)));
		if (isSequence) {
			const options = [
				{
					label: "VERY_HIGH",
					value: QUALITY_VERY_HIGH
				},
				{
					label: "HIGH",
					value: QUALITY_HIGH
				},
				{
					label: "MEDIUM",
					value: QUALITY_MEDIUM
				},
				{
					label: "LOW",
					value: QUALITY_LOW
				},
				{
					label: "VERY_LOW",
					value: QUALITY_VERY_LOW
				}
			];
			const choices = options.map((option) => option.label);
			const setter = (label) => {
				const found = options.find((o) => o.label === label);
				if (found) {
					element.setMp4Quality(found.value);
					console.log(found.value);
				}
			};
			const value = options.find((o) => o.value === element.renderProps.mp4Quality)?.label ?? "UNKNOWN";
			const output = [this.renderDropdown(value, choices, setter.bind(this))];
			slots.push(slotOrNothing(T.videoquality, output));
		}
		return slots;
	}
	static {
		this.styles = css`
    
        .export-bar {

            width: 100%;

            .export-bar-part {
            }

            .export-bar-part--config {
                display: flex;
                flex-wrap: wrap;
                gap: 1em 2em;

                background: var( --thermal-background );
                padding: 1em;

                border-radius: var( --thermal-radius );

                thermal-slot {
                    box-sizing: border-box;
                }
            }

            .export-bar-part--actions {
            }
        

            .export-config-field {

                &:hover,
                &:focus-within {
                    .export-config-field--label {
                        color: var( --thermal-foreground );
                        &::after {
                            background: var( --thermal-foreground );
                        }
                    }
                }
                
                .export-config-field--label {

                    margin: 0px 0px 0.5em;
                    padding: 0px;
                    font-weight: normal;
                    font-size: 0.7em;
                    text-transform: uppercase;
                    color: var(--thermal-slate);
                    display: flex;
                    align-items: center;
                    gap: 0.5em;

                    &::after {
                        content: "";
                        flex-grow: 1;
                        height: 1px;
                        background: var( --thermal-slate-light );
                    }

                }

                .export-config-field--value {

                    input {
                        border: var( --thermal-slate-light ) solid 1px;
                        text-align: right;
                        font-family: var( --thermal-ff );
                        padding: .3em .1em .3em .3em;
                        width: 5em;
                        display: inline-block;
                    }

                    .unit {
                        font-size: 0.7em;
                    }

                }

                &.export-config-field--text {
                    .export-config-field--value input {
                        width: 200px;
                        text-align: left;
                    }
                }
            
            }

        
        }
    
    `;
	}
	render(element) {
		return html`<div class="export-bar">

            <div class="export-bar-part export-bar-part--config">
                ${this.renderConfigHeader(element)}
            </div>
        
        </div>`;
	}
};
const exportConfigDirective = directive(SingleVideoExportConfigDirective);

//#endregion
//#region src/controls/file/video/directives/SingleVideoExportLayoutDirective.ts
var SingleVideoExportLayoutDirective = class extends Directive {
	constructor(..._args) {
		super(..._args);
		this.innerHeight = 0;
	}
	renderHistogram(props) {
		return html`<registry-histogram style="display: ${props.hasHistogram ? "block" : "none"};"></registry-histogram>`;
	}
	renderThermalScale(props) {
		return html`<div style="display: ${props.hasThermalScale ? "block" : "none"};">
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
        </div>`;
	}
	renderAnalyses(props) {
		if (!props.hasAnalysis) return nothing;
		const width = props.exportFrameWidth / 2 - props.exportFramePadding * 2 - props.exportFrameGap;
		const height = props.exportGraphHeight;
		return html`<div class="export-element-content--analyses">
            <!-- Analysis content here -->
            <file-analysis-display></file-analysis-display>
            <file-analysis-graph 
                graphWidth=${width} 
                graphHeight=${height}
                .hasDownloads=${false}
                style="height: ${height}px; width: ${width}px; display: block;"
            ></file-analysis-graph>
        </div>`;
	}
	renderMainContent(props) {
		const content = [html`<file-canvas
                .prefers-gpu=${false}
            ></file-canvas>`];
		if (props.hasTimeline) content.push(html`<file-timeline hasplaybutton="false"></file-timeline>`);
		return html`<div>
            ${content}
        </div>`;
	}
	static {
		this.styles = css`
    
        .export-element {

            position: relative;


            --thermal-export-bg: white;
            --thermal-export-fg: black;

            --thermal-crop: 2em;

            padding: var( --thermal-crop );

            box-sizing: border-box;

            .crop {
                position: absolute;
                width: var( --thermal-crop );
                height: var( --thermal-crop );
                box-sizing: border-box;

                &.crop-t {
                    top: 0;
                }

                &.crop-b {
                    bottom: 0;
                }

                &.crop-l {
                    left: 0;
                }

                &.crop-r {
                    right: 0;
                }

                --thermal-export-crop-border-width: 3px;
                --thermal-export-border-color: var( --thermal-background );

                &.crop-t.crop-l {
                    border-bottom: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                    border-right: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                }

                &.crop-t.crop-r {
                    border-bottom: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                    border-left: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                }

                &.crop-b.crop-l {
                    border-top: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                    border-right: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                }

                &.crop-b.crop-r {
                    border-top: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                    border-left: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                }
            }


            .export-overlay {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 99;
                cursor: help;

                box-sizing: border-box;
                padding: var( --thermal-crop );

                transition: all .3s ease;

                display: flex;
                align-items: stretch;
                justify-content: stretch;

                

                span {

                    font-size: 3em;
                    font-weight: normal !important;

                    width: 100%;
                    padding: 1em;
                
                    opacity: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    box-sizing: outline-box;

                    transition: opacity .3s ease;
                    
                    color: var( --thermal-export-bg );
                    
                }

                &:hover {
                    span {
                        background: color-mix(in srgb, var( --thermal-export-fg ) 50%, transparent);
                        opacity: 1;
                    }
                }
            }

            .export-element-content {
                display: grid;
                box-sizing: border-box;
                background-color: var( --thermal-export-bg );

                .export-element-content--analyses {

                    display: grid;
                    gap: 1em;
                    grid-template-columns: 100%;
                    grid-template-rows: 1fr auto;
                
                }

            }



            &.vertical {
                &.hasAnalysis {

                    .export-element-content {
                        grid-template-columns: auto;
                        grid-template-rows: auto auto;
                    }
        
                }
            }

            &.horizontal {
                &.hasAnalysis {

                    .export-element-content {
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: auto;
                    }
                }
            }

            &.hasAnalysis {

            }

            &.hasTimeline {
            
            }

            &.hasHistogram {
            
            }

            &.hasThermalScale {
            
            }

            

            &.skin-light {
                --thermal-export-bg: white;
                --thermal-export-fg: black;
                --thermal-slate: var( --thermal-slate-base );
                --thermal-slate-dark: var( --thermal-slate-base-dark );
                --thermal-slate-light: var( --thermal-slate-base-light );
                --thermal-foreground: black;
                --thermal-background: white;
                --thermal-primary: var( --thermal-primary-base );
            }

            &.skin-dark {
                --thermal-export-bg: black;
                --thermal-export-fg: white;
                --thermal-background: black;
                --thermal-foreground: white;
                --thermal-slate: gray;
                --thermal-slate-dark: darkgray;
                --thermal-slate-light: lightgray;
            }

            &.skin-solarized {
                --thermal-export-bg: #1d5766ff;
                --thermal-export-fg: white;
                --thermal-background: #1d5766ff;
                --thermal-foreground: white;
                --thermal-slate: #27888bff;
                --thermal-slate-dark: #39aaa1ff;
                --thermal-slate-light: #073642;
            }

        
        }
    
    `;
	}
	initObserver(svgElement) {
		if (this.observer) return;
		const contentElement = svgElement?.querySelector(".export-element-content");
		if (!contentElement) return;
		this.observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				this.innerHeight = entry.borderBoxSize[0].blockSize;
				svgElement.setAttribute("height", String(this.innerHeight));
			}
		});
		this.observer.observe(contentElement);
	}
	render(app) {
		const reference = app.exportedDivRef;
		const props = app.renderProps;
		if (reference.value) this.initObserver(reference.value);
		const mainClasses = {
			"export-element": true,
			vertical: props.isVertical,
			horizontal: !props.isVertical,
			hasAnalysis: props.hasAnalysis,
			hasHistogram: props.hasHistogram,
			hasTimeline: props.hasTimeline,
			hasThermalScale: props.hasThermalScale,
			["skin-" + props.skin]: true
		};
		const effectiveScale = app.recordingPhase !== RecordingPhase.IDLE ? 1 : props.previewScale;
		const containerStyle = {
			width: `calc( ${props.exportFrameWidth}px + var( --thermal-crop ) * 2 )`,
			scale: String(effectiveScale)
		};
		const contentStyle = {
			width: props.exportFrameWidth + "px",
			gap: props.exportFrameGap + "px",
			padding: props.exportFramePadding + "px"
		};
		const mainContent = [
			this.renderHistogram(props),
			this.renderThermalScale(props),
			this.renderMainContent(props)
		];
		const analyses = this.renderAnalyses(props);
		return html`<!-- The main content rendered through the SingleVideoExportLayoutDirective -->
        <main
            class=${classMap(mainClasses)}
            style=${styleMap(containerStyle)}
        >
            <b class="crop crop-t crop-l"></b>
            <b class="crop crop-t crop-r"></b>
            <b class="crop crop-b crop-l"></b>
            <b class="crop crop-b crop-r"></b>

            <section 
                ${ref(reference)}
                class="export-element-content" 
                style=${styleMap(contentStyle)}
            >

                <div class="export-element-content--main">
                    ${mainContent}
                </div>

                ${analyses}

            </section>

            <aside class="export-overlay">
                <span>
                    <strong>Náhled</strong>
                </span>
            </aside>

        </main>
        
        `;
	}
};
const exportLayoutDirective = directive(SingleVideoExportLayoutDirective);

//#endregion
//#region src/controls/file/video/directives/SingleVideoExportProvidersDirective.ts
var SingleVideoExportDirective = class extends Directive {
	renderWrappedWithFileProvider(app, content) {
		const file = app.outerFile;
		if (!file) return nothing;
		return html`<file-provider
                ${ref(app.fileCopyElementRef)}
                thermal=${file.thermalUrl}
                autoclear="true"
                analysis1=${ifDefined(app.analysis1)}
                analysis2=${ifDefined(app.analysis2)}
                analysis3=${ifDefined(app.analysis3)}
                analysis4=${ifDefined(app.analysis4)}
                analysis5=${ifDefined(app.analysis5)}
                analysis6=${ifDefined(app.analysis6)}
                analysis7=${ifDefined(app.analysis7)}
                style="display: contents;"
                keepInitialHistogram="true"
            >
                ${content}
            </file-provider>`;
	}
	renderWrappedWithNestedProviders(app, content) {
		const registry = app.registry;
		const group = app.group;
		if (!registry || !group) return nothing;
		return html`<registry-provider 
            slug="${app.slug}"
            style="display: contents;"
        >
            <group-provider 
                slug=${app.slug}
                style="display: contents;"
            >
                <file-copy .originalFile=${app.outerFile} ${ref(app.fileCopyElementRef)}>
                    ${content}
                </file-copy>
            </group-provider>
        </registry-provider>`;
	}
	render(element, content) {
		return this.renderWrappedWithNestedProviders(element, content);
	}
};
const singleVideoProviders = directive(SingleVideoExportDirective);

//#endregion
//#region src/controls/file/video/FileVideoExportPanel.ts
let FileVideoExportPanel = class FileVideoExportPanel extends AbstractSingleVideoExport {
	constructor(..._args) {
		super(..._args);
		this.previewSectionRef = createRef();
		this.exportRealWidth = 0;
		this.exportRealHeight = 0;
	}
	onInstanceCreated(instance) {
		this.parentHasAnalyses = instance.analysis.value.length > 0;
	}
	onFailure(error) {}
	connectedCallback() {
		super.connectedCallback();
		this.setupResizeObserver();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.previewResizeObserver?.disconnect();
		this.exportSizeObserver?.disconnect();
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		this.setupResizeObserver();
		this.setupExportSizeObserver();
	}
	/** Nastaví ResizeObserver pro automatické škálování */
	setupResizeObserver() {
		if (this.previewResizeObserver || !this.previewSectionRef.value) return;
		this.previewResizeObserver = new ResizeObserver((entries) => {
			if (!this.renderProps.autoScale) return;
			for (const entry of entries) this.calculateAutoScale(entry.contentRect.height);
		});
		this.previewResizeObserver.observe(this.previewSectionRef.value);
	}
	/** Nastaví ResizeObserver pro sledování rozměrů exportovaného elementu */
	setupExportSizeObserver() {
		if (this.exportSizeObserver || !this.exportedDivRef.value) return;
		const exportMainElement = this.exportedDivRef.value.parentElement;
		if (!exportMainElement) return;
		this.exportSizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				this.exportRealWidth = Math.round(entry.contentRect.width);
				this.exportRealHeight = Math.round(entry.contentRect.height);
			}
		});
		this.exportSizeObserver.observe(exportMainElement);
	}
	/** Přepsaná metoda z AbstractSingleVideoExport - reaguje na změny layout vlastností */
	onLayoutAffectingPropertyChanged() {
		if (!this.renderProps.autoScale) return;
		this.updateComplete.then(() => {
			requestAnimationFrame(() => {
				this.triggerAutoScaleRecalculation();
			});
		});
	}
	/** Spustí přepočet autoScale na základě aktuální velikosti preview sekce */
	triggerAutoScaleRecalculation() {
		if (!this.previewSectionRef.value) return;
		const availableHeight = this.previewSectionRef.value.clientHeight;
		this.calculateAutoScale(availableHeight);
	}
	/** Vypočítá scale na základě dostupné výšky */
	calculateAutoScale(availableHeight) {
		const exportedElement = this.exportedDivRef.value;
		if (!exportedElement) return;
		const currentScale = this.renderProps.previewScale;
		const realHeight = exportedElement.getBoundingClientRect().height / currentScale;
		if (realHeight <= 0 || availableHeight <= 0) return;
		const newScale = Math.min(1, (availableHeight - 20) / realHeight);
		const clampedScale = Math.max(.1, Math.min(1, newScale));
		if (Math.abs(clampedScale - this.renderProps.previewScale) > .01) {
			this.renderProps.previewScale = clampedScale;
			this.requestUpdate();
		}
	}
	static {
		this.styles = [
			SingleVideoExportLayoutDirective.styles,
			SingleVideoExportConfigDirective.styles,
			css`
            :host {
                font-size: var( --thermal-fs );
                color: var( --thermal-foreground );
                display: grid;
                grid-template-rows: auto 1fr auto;
                gap: 1em;
                height: 100%;
                min-height: 0;
                max-height: 100%;
            }

            .controls {
            }

            .preview {
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 0; /* klíčové - povolí zmenšení pod velikost obsahu */
                position: relative;

                background: var( --thermal-slate );

                border-radius: var( --thermal-radius );

                & > * {
                
                }


                .preview-size {
                
                    position: absolute;
                    bottom: 1em;
                    right: 1em;

                    z-index: 10000;

                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 0.5em;

                    

                    & > * {
                        background: var( --thermal-slate-light );
                        border-radius: var( --thermal-radius );
                        box-sizing: border-box;
                        padding: 0.5em 0.75em;
                        text-align: right;
                        font-size: .8em;

                        .preview-label {
                            text-transform: uppercase;
                            
                            font-weight: normal;
                            margin-bottom: .25em;
                            text-align: right;
                            opacity: .8;
                        }

                        .preview-value {
                            font-weight: bold;
                        }
                    }

                    .preview-size--preview {
                    }

                    .preview-size--export {
                        thermal-radio {
                            display: inline-block;
                        }
                    }
                
                }




            }

            .footer {
            }

            .progress-overlay {
            
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                z-index: 100000;

                display: flex;
                align-items: center;
                justify-content: center;

                text-align: center;

                background: color-mix(in srgb, var( --thermal-slate-light ) 90%, transparent);

                .progress-overlay-content {
                
                    display: flex;
                    flex-direction: column;
                    gap: 1em;

                    div {
                        color: var( --thermal-slate-dark );
                    }
                }
            
            }
        `
		];
	}
	renderHeader() {
		return html`<header class="controls">
            ${exportConfigDirective(this)}
        </header>`;
	}
	renderPreview() {
		const isExporting = this.recordingPhase !== RecordingPhase.IDLE;
		return html`<section class="preview" ${ref(this.previewSectionRef)}>
            ${exportLayoutDirective(this)}

            ${!isExporting ? html`
                <div class="preview-size">
                    <div class="preview-size--export">
                        <div class="preview-label">Export</div>
                        <div class="preview-value">${this.exportRealWidth} × ${this.exportRealHeight} px</div>
                    </div>
                    <div class="preview-size--preview">
                        <div class="preview-label">Náhled</div>

                        <div class="preview-value">Zoom: ${(this.renderProps.previewScale * 100).toFixed(0)}%</div>


                        ${!this.renderProps.autoScale ? html`
                            <input 
                                type="range" 
                                min="0.1" 
                                max="1" 
                                step="0.01" 
                                .value=${String(this.renderProps.previewScale)} 
                                @input=${(e) => {
			const input = e.target;
			const value = parseFloat(input.value);
			this.setPreviewScale(value);
		}}
                            />
                        ` : nothing}

                        <thermal-radio
                            .checked=${this.renderProps.autoScale} 
                            .onChange=${(checked) => {
			this.setAutoScale(checked);
		}}
                        >Automatické přiblížení</thermal-radio>
                        
                        
                        
                        
                    </div>
                </div>
            ` : html``}

        </section>`;
	}
	renderOverview() {
		if (this.recordingPhase === RecordingPhase.IDLE) return nothing;
		let message = this.t(T.exportencodingfile);
		if (this.recordingPhase === RecordingPhase.RECORDING) message = `${this.t(T.exportrecordingframes)} ${this.recordingPhaseProgress.toFixed(2)}%`;
		return html`<div
            class="progress-overlay"
        >

            <div class="progress-overlay-content">

                <thermal-spinner
                    .message=${message}
                ></thermal-spinner>

                <div>${this.t(T.exportdonotclosewindowhint)}</div>

            </div>
            
        </div>`;
	}
	renderFooter() {
		return html`<footer class="footer">
            <file-timeline></file-timeline>
        </footer>`;
	}
	render() {
		return singleVideoProviders(this, [
			this.renderHeader(),
			this.renderPreview(),
			this.renderFooter(),
			this.renderOverview()
		]);
	}
};
__decorate([state()], FileVideoExportPanel.prototype, "exportRealWidth", void 0);
__decorate([state()], FileVideoExportPanel.prototype, "exportRealHeight", void 0);
FileVideoExportPanel = __decorate([customElement("file-video-export-panel")], FileVideoExportPanel);

//#endregion
//#region src/controls/registry/ConfigDialog.ts
let ConfigDialog = class ConfigDialog extends AbstractThermalElement {
	render() {
		return html`<thermal-dialog
            label="Nastavení aplikace"
        >
            <thermal-btn 
                slot="invoker"
                icon="settings"
                iconStyle="solid"
                tooltip=${this.t("config")}
            ></thermal-btn>

            <div slot="content">
                <manager-export-panel></manager-export-panel>
                <registry-display-panel></registry-display-panel>
            </div>
        </thermal-dialog>`;
	}
};
ConfigDialog = __decorate([customElement("config-dialog")], ConfigDialog);

//#endregion
//#region src/apps/ThermalDropinApp.ts
let DropinAppElement = class DropinAppElement extends BaseAppWithPngExportContext {
	constructor(..._args) {
		super(..._args);
		this.dropinRef = createRef();
		this.groupRef = createRef();
		this.loaded = false;
		this.files = [];
		this.pngExportWidth = 1200;
		this.pngExportWidthSetterContext = (value) => {
			this.pngExportWidth = value;
		};
		this.pngExportFs = 20;
		this.pngExportFsSetterContext = (value) => {
			this.pngExportFs = value;
		};
	}
	get manager() {
		throw new Error("Method not implemented.");
	}
	connectedCallback() {
		super.connectedCallback();
		publicIpv4().then((ip) => this.ip = ip);
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		initLocalesInTopLevelElement(this);
		if (this.groupRef.value !== void 0) this.groupRef.value.group.files.addListener(this.UUID, (value) => {
			if (this.groupRef.value !== void 0) {
				this.groupRef.value.group.analysisSync.turnOff();
				if (value.length > 0) this.groupRef.value.group.analysisSync.turnOn(value[0]);
			}
			value.forEach((file) => {
				file.analysis.reset();
				file.analysis.layers.clear();
				const data = {
					ip: this.ip,
					fileName: file.fileName,
					fileSize: file.bytesize,
					fileIsSequence: file.timeline.isSequence,
					fileNumFrames: file.timeline.frameCount,
					fileWidth: file.width,
					fileHeight: file.height,
					fileTimestamp: file.timeline.frames[0].absolute,
					fileDataType: file.fileDataType,
					userAgent: window.navigator.userAgent,
					windowWidth: window.innerWidth,
					windowHeight: window.innerHeight,
					time: (/* @__PURE__ */ new Date()).getTime(),
					url: window.location.href
				};
				this.dispatchEvent(new CustomEvent("uploaded", {
					detail: data,
					bubbles: true,
					composed: true
				}));
			});
			if (this.listener !== void 0) clearTimeout(this.listener);
			if (value.length === 0) this.files = [];
			else this.files = [value[0]];
			this.listener = setTimeout(async () => {
				const registry = this.groupRef.value?.group.registry;
				if (registry !== void 0) {
					await registry.postLoadedProcessing();
					if (registry.minmax.value !== void 0) registry.range.imposeRange({
						from: registry.minmax.value.min,
						to: registry.minmax.value.max
					});
				}
			}, 0);
		});
	}
	handleClear() {
		if (this.groupRef.value !== void 0) this.groupRef.value.group.files.removeAllInstances();
	}
	static {
		this.styles = css`
    
        .browser {
            display: grid;
            grid-template-columns: 2rem 1fr;
            gap: var(--thermal-gap);
            padding-top: var(--thermal-gap);
        }

        .file {
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            background: var(--thermal-background);

            file-analysis-graph {
                height: 300px;
            }

            header {
                display: flex;
                align-items: center;
            }

            .file-label {
                display: flex;
                flex-grow: 1;
                gap: 5px;
                align-items: center;
                padding-bottom: var(--thermal-gap);
                div {
                    opacity: .5;
                }
            }

            h1, h2 {
                margin: 0;
                padding: 0;
                font-size: var(--thermal-fs);
                line-height: 1em;
            }

            .file-expanded {
                display: grid;
                grid-template-columns: 50% calc( 50%  - var(--thermal-gap));
                gap: var(--thermal-gap);
            }

        }

        .files-multiple {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(calc(100% / 4), 1fr));
            gap: var(--thermal-gap);
        }

    `;
	}
	renderIntroScene() {
		return html`
            <group-dropin></group-dropin>
        `;
	}
	renderBrowserScene() {
		return html`
        <div class="browser-bar" slot="pre">
            <registry-histogram expandable="true"></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
            
        </div>

        <div class="browser">
            
            <div class="browser-tools">
                <manager-tool-bar></manager-tool-bar>
            </div>
            <div class="browser-content">
                ${this.files.length === 1 ? this.renderOneFile() : this.renderMultipleFiles()}
            </div>
        </div>
        `;
	}
	renderOneFile() {
		return html`
        ${this.files.map((file) => this.renderDetail(file))}
        `;
	}
	renderDetail(file) {
		return html`
            <article class="file">
                <file-mirror .file="${file}" autoclear="true">

                    <file-detail .onback=${() => file.group.files.removeFile(file)}></file-detail>
                
                </file-mirror>
            </article>
        `;
	}
	renderMultipleFiles() {
		return html`
        <div class="files-multiple">
        ${this.files.map((file) => this.renderDetail(file))}
        </div>
        `;
	}
	render() {
		try {
			return html`

            <manager-provider slug="${this.UUID}" palette="iron">

                <registry-provider slug="${this.UUID}" palette="iron">

                    <group-provider ${ref(this.groupRef)} slug="${this.UUID}">

                        <thermal-app 
                            label="LabIR Edu Analyser"
                            showfullscreen="true"
                        >

                            <group-dropin-input slot="bar-pre"></group-dropin-input>

                            ${this.files.length > 0 ? html`
                                <thermal-btn slot="bar-pre" @click="${() => this.handleClear()}" tooltip="Odstranit tento soubor a nahrát nový">${t(T.clear)}</thermal-btn>

                                <manager-palette-dropdown slot="bar-pre"></manager-palette-dropdown>

                                <registry-range-form stacked="false" slot="bar-pre"></registry-range-form>

                                        
                                ` : nothing}

                            ${this.files.length > 1 ? html`
                                    <group-download-dropdown slot="bar-pre"></group-download-dropdown><registry-range-full-button slot="bar-pre"></registry-range-full-button>` : nothing}

                                    <slot name="header"></slot>
                                </thermal-bar>
                            </div>

                            <thermal-dialog label="${t(T.config)}" slot="bar-pre">
                                <thermal-btn slot="invoker" tooltip="${t(T.config)}" icon="settings" iconStyle="solid">
                                </thermal-btn>
                                <div slot="content">
                                    <table>
                                        <manager-export-panel></manager-export-panel>
                                        <registry-display-panel></registry-display-panel>
                                    </table>
                                </div>
                            </thermal-dialog>

                            <slot name="bar-pre" slot="bar-pre"></slot>

                            ${this.files.length === 0 ? this.renderIntroScene() : this.renderBrowserScene()}
                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `;
		} catch (err) {
			return html`Stala se chyba`;
		}
	}
};
__decorate([state()], DropinAppElement.prototype, "dropinRef", void 0);
__decorate([state()], DropinAppElement.prototype, "groupRef", void 0);
__decorate([state()], DropinAppElement.prototype, "loaded", void 0);
__decorate([state()], DropinAppElement.prototype, "listener", void 0);
__decorate([state()], DropinAppElement.prototype, "files", void 0);
__decorate([state()], DropinAppElement.prototype, "ip", void 0);
__decorate([provide({ context: pngExportWidthContext })], DropinAppElement.prototype, "pngExportWidth", void 0);
__decorate([provide({ context: pngExportWidthSetterContext })], DropinAppElement.prototype, "pngExportWidthSetterContext", void 0);
__decorate([provide({ context: pngExportFsContext })], DropinAppElement.prototype, "pngExportFs", void 0);
__decorate([provide({ context: pngExportFsSetterContext })], DropinAppElement.prototype, "pngExportFsSetterContext", void 0);
__decorate([provide({ context: localeContext }), property({
	reflect: true,
	converter: localeConverter
})], DropinAppElement.prototype, "locale", void 0);
DropinAppElement = __decorate([customElement("thermal-dropin-app")], DropinAppElement);

//#endregion
//#region src/apps/ThermalFileApp.ts
var Layout = /* @__PURE__ */ function(Layout) {
	Layout["NOGUI"] = "nogui";
	Layout["SIMPLE"] = "simple";
	Layout["ADVANCED"] = "advanced";
	Layout["LESSON"] = "lesson";
	return Layout;
}(Layout || {});
const layouts = [
	{
		key: Layout.SIMPLE,
		icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15H21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
	},
	{
		key: Layout.ADVANCED,
		icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12L21 12M12 3L12 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
	},
	{
		key: Layout.LESSON,
		icon: "<svg viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"currentcolor\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <title>layout_11_line</title> <g id=\"页面-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <g id=\"Design\" transform=\"translate(-48.000000, -288.000000)\"> <g id=\"layout_11_line\" transform=\"translate(48.000000, 288.000000)\"> <path d=\"M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z\" id=\"MingCute\" fill-rule=\"nonzero\"> </path> <path d=\"M3,5 C3,3.89543 3.89543,3 5,3 L19,3 C20.1046,3 21,3.89543 21,5 L21,19 C21,20.1046 20.1046,21 19,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,5 Z M8,5 L5,5 L5,19 L8,19 L8,5 Z M10,5 L10,8 L19,8 L19,5 L10,5 Z M10,10 L10,19 L19,19 L19,10 L10,10 Z\" id=\"形状\" fill=\"currentcolor\"> </path> </g> </g> </g> </g></svg>"
	}
];
const analysisSlotProperty = [
	"analysis1",
	"analysis2",
	"analysis3",
	"analysis4",
	"analysis5",
	"analysis6",
	"analysis7"
];
let ThermalFileAppElement = class ThermalFileAppElement extends BaseAppWithPngExportContext {
	constructor(..._args) {
		super(..._args);
		this.fileProviderRef = createRef();
		this.layout = Layout.SIMPLE;
		this.palette = "jet";
		this.opacity = 1;
		this.showfullscreen = true;
		this.showscale = true;
		this.showhistogram = true;
		this.showlayout = false;
		this.showshare = false;
		this.loading = true;
		this.hasVisible = false;
		this.ms = 0;
		this.pngExportWidth = 1200;
		this.pngExportWidthSetterContext = (value) => {
			this.pngExportWidth = value;
		};
		this.pngExportFs = 20;
		this.pngExportFsSetterContext = (value) => {
			this.pngExportFs = value;
		};
	}
	get manager() {
		if (!this.fileProviderRef.value) throw new Error("Not yet loaded");
		return this.fileProviderRef.value.manager;
	}
	get file() {
		if (this.fileProviderRef.value === void 0) return void 0;
		else return this.fileProviderRef.value.file;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		initLocalesInTopLevelElement(this);
		this.hydrateInternalListeners();
	}
	/** Listen to changes in @labirthermal/core and reflect them to the webcomponent state */
	hydrateInternalListeners() {
		if (this.fileProviderRef.value) this.fileProviderRef.value.onSuccess.set(this.UUID, (instance) => {
			this.loading = false;
			this.recorded = TimeFormat.human(instance.timestamp);
			this.hasVisible = instance.visibleUrl !== void 0;
			/** Range changes */
			instance.group.registry.range.addListener(this.UUID + "mirror_changes", (value) => {
				if (value === void 0) {
					this.from = void 0;
					this.to = void 0;
				} else {
					if (this.from !== value.from) this.from = value.from;
					if (this.to !== value.to) this.to = value.to;
				}
			});
			/** Opacity changes */
			instance.group.registry.opacity.addListener(this.UUID + "mirror_changes", (value) => {
				if (value !== this.opacity) this.opacity = value;
			});
			/** Palette changes */
			instance.group.registry.manager.palette.addListener(this.UUID + "mirror_changes", (value) => {
				if (this.palette !== value) this.palette = value;
			});
			/** Analysis 1 changes */
			instance.slots.onSlot1Serialize.set(this.UUID, (value) => {
				if (this.analysis1 !== value) this.analysis1 = value;
			});
			/** Analysis 2 changes */
			instance.slots.onSlot2Serialize.set(this.UUID, (value) => {
				if (this.analysis2 !== value) this.analysis2 = value;
			});
			/** Analysis 3 changes */
			instance.slots.onSlot3Serialize.set(this.UUID, (value) => {
				if (this.analysis3 !== value) this.analysis3 = value;
			});
			/** Analysis 4 changes */
			instance.slots.onSlot4Serialize.set(this.UUID, (value) => {
				if (this.analysis4 !== value) this.analysis4 = value;
			});
			/** Analysis 5 changes */
			instance.slots.onSlot5Serialize.set(this.UUID, (value) => {
				if (this.analysis5 !== value) this.analysis5 = value;
			});
			/** Analysis 6 changes */
			instance.slots.onSlot6Serialize.set(this.UUID, (value) => {
				if (this.analysis6 !== value) this.analysis6 = value;
			});
			/** Analysis 7 changes */
			instance.slots.onSlot7Serialize.set(this.UUID, (value) => {
				if (this.analysis7 !== value) this.analysis7 = value;
			});
		});
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (this.file !== void 0) {
			const registry = this.file.group.registry;
			const manager = registry.manager;
			/** Propagate the range if necessary */
			if (_changedProperties.has("from") && _changedProperties.has("to")) if (this.from !== void 0 && this.to !== void 0) this.file.group.registry.range.imposeRange({
				from: this.from,
				to: this.to
			});
			else this.file.group.registry.range.imposeRange(void 0);
			/** Propagate the opacity if necessary */
			if (_changedProperties.has("opacity")) {
				if (this.opacity !== void 0 && this.opacity !== registry.opacity.value) this.file.group.registry.opacity.imposeOpacity(this.opacity);
			}
			/** Propagate the palette if necessary */
			if (_changedProperties.has("palette")) {
				if (this.palette !== manager.palette.value) manager.palette.setPalette(this.palette);
			}
			/** Propagate the analyses if necessary */
			analysisSlotProperty.forEach((slotParameterName, index) => {
				if (this.file === void 0) return;
				if (_changedProperties.has(slotParameterName)) {
					const slotNum = index + 1;
					const localSlotValue = this[slotParameterName];
					if (localSlotValue !== this.file.slots.getSlot(slotNum)?.serialized) {
						const slotObject = this.file.slots.getSlot(slotNum);
						if (localSlotValue !== void 0) if (slotObject !== void 0) slotObject.recieveSerialized(localSlotValue);
						else this.file.slots.createAnalysisFromSerialized(localSlotValue, slotNum);
						else if (this.file.slots.hasSlot(slotNum)) this.file.slots.removeSlotAndAnalysis(slotNum);
					}
				}
			});
		}
		this.outerHTMLSnapshot = this.outerHTML;
	}
	getLabel() {
		if (this.loading === true) return t(T.loading);
		else if (this.label !== void 0) return this.label;
		else if (this.label === void 0 && this.file !== void 0) return this.file.fileName;
		else return t(T.file);
	}
	setLayout(value) {
		this.layout = value;
		setTimeout(() => {
			if (this.fileProviderRef.value && this.file) this.fileProviderRef.value.redraw();
		}, 0);
	}
	renderNogui() {
		return html`
            ${this.renderScale()}
            <file-canvas></file-canvas>
            <file-timeline></file-timeline>
            <file-analysis-table ></file-analysis-table>
            <file-analysis-graph></file-analysis-graph>
    `;
	}
	/** Render the */
	renderApp() {
		return html`
        
            <thermal-app
                label="${this.getLabel()}"
                author="${ifDefined(this.author)}"
                license="${ifDefined(this.license)}"
                showfullscreen="${this.showfullscreen}"
                recorded="${ifDefined(this.recorded)}"
            >

                ${this.showlayout ? this.renderLayoutSwitch() : nothing}

                <file-info-button slot="bar-pre"></file-info-button>

                ${cache(html`<manager-palette-dropdown slot="bar-persistent"></manager-palette-dropdown>

                

                ${this.hasVisible ? html`<registry-opacity-slider  slot="bar-pre"></registry-opacity-slider>` : nothing}
                `)}

                <registry-range-form slot="bar-persistent"></registry-range-form>
                


                

                ${cache(html`<thermal-dialog label="${t(T.config)}" slot="bar-pre">
                    <thermal-btn slot="invoker" tooltip="Nastavení exportu a zobrazení" style="width: var(--thermal-collapsible-width, auto);display: flex; align-items: center;box-sizing: border-box;">

                        <thermal-icon icon="settings" variant="outline" class="button-fix"></thermal-icon>

                        <span style="display: var(--thermal-collapsible-display, none);align-self: center;">${t(T.config)}</span>

                    </thermal-btn>

                    <div slot="content">

                        <table>
                            <manager-export-panel></manager-export-panel>
                            <registry-display-panel></registry-display-panel>
                        </table>
                    </div>
                </thermal-dialog> `)}

                <file-download-dropdown slot="bar-pre"></file-download-dropdown>
                
    
                <div class="layout layout__${this.layout}">
                    <aside class="toolbar">
                        <manager-tool-bar></manager-tool-bar>
                    </aside>
                    <main class="thermogram">
                        ${this.layout === Layout.ADVANCED || this.layout === Layout.LESSON ? this.renderScale() : nothing}
                        ${cache(html`<file-canvas></file-canvas>`)}
                        <file-timeline></file-timeline>
                    </main>
                    <notation-content class="notations"></notation-content>

                    ${this.layout === Layout.ADVANCED ? html`<file-analysis-complex class="complex"></file-abnalysis-complex>` : html`<file-analysis-table class="analysis"></file-analysis-table>
                        <file-analysis-graph class="graph"></file-analysis-graph>`}
                </div>


                ${this.layout === Layout.SIMPLE ? html`<aside slot="pre">${this.renderScale()}</aside>` : nothing}


                ${this.showshare ? html`<thermal-dialog label="${t(T.share)}" slot="bar-pre" class="share">
                    <thermal-btn slot="invoker" icon="share" iconStyle="outline" tooltip="${t(T.share)}" style="align-self:stretch;"></thermal-btn>
                    <div slot="content">
                        <p>${t(T.embedhint)}</p>
                        <h2>1. ${t(T.embedlibrary)} <thermal-btn @click="${() => navigator.clipboard.writeText(`<script src="https://cdn.jsdelivr.net/npm/@labirthermal/webcomponents@${version$1}/dist/embed.min.js"><\/script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@labirthermal/webcomponents@${version$1}/dist/embed.min.css">`)}">${t(T.copy)}</thermal-btn></h2>
                        <pre>&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labirthermal/webcomponents@${version$1}/dist/embed.min.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@labirthermal/webcomponents@${version$1}/dist/embed.min.css&quot;&gt;</pre>
                        <h2>2. ${t(T.embedcomponent)} <thermal-btn @click="${() => navigator.clipboard.writeText(this.outerHTMLSnapshot)}">${t(T.copy)}</thermal-btn></h2>
                        <pre>${this.outerHTMLSnapshot}</pre>
                    </div>
                </thermal-dialog>` : nothing}


            </thermal-app>`;
	}
	renderScale() {
		return html`${this.showhistogram ? cache(html`<registry-histogram expandable="true"></registry-histogram>`) : nothing}
    ${this.showscale ? html`<registry-range-slider></registry-range-slider>` : nothing}
    ${this.showhistogram || this.showscale ? html`<registry-ticks-bar placement="top"></registry-ticks-bar>` : nothing}`;
	}
	renderOneLayoutItem(icon, key, hasLabel = false) {
		return html`<div class="layout-item">
        ${unsafeSVG(icon)}
        ${hasLabel ? html`<span>${t(T[`layout_${key}`])}</span>` : nothing}
    </div>`;
	}
	renderLayoutSwitch() {
		const currentLayout = layouts.find((layout) => layout.key === this.layout);
		if (!currentLayout) return nothing;
		const otherLayouts = layouts.map((layout) => {
			return {
				...layout,
				action: layout.key !== this.layout ? () => this.setLayout(layout.key) : void 0
			};
		});
		return html`<thermal-dropdown slot="bar-post">
        <div slot="invoker">
            ${this.renderOneLayoutItem(currentLayout.icon, currentLayout.key, false)}
        </div>
        
        ${otherLayouts.map((l) => html`<div 
            slot="option" 
            class="layout-option ${l.action ? "current" : "available"}"
            @click=${l.action}
        >${this.renderOneLayoutItem(l.icon, l.key, true)}</div>`)}

    </thermal-dropdown>`;
	}
	static {
		this.styles = css`

    .layout-option {

        &.current {

            .layout-item {
                cursor: pointer;
                color: var(--thermal-foreground);
                &:hover {
                    color: var(--thermal-primary);
                }
            }
        
        }
        &.available {
            .layout-item {
                opacity: .5;
            }
        }
    }

    .layout-item {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 5px;
        
        svg {
            width: 1em;
        }
        span {
            font-size: 12px;
        }

        
    }

    .layout {

        display: grid;
        gap: var(--thermal-gap);

        .toolbar { grid-area: toolbar; }
        .thermogram { grid-area: thermogram; }
        .complex { grid-area: complex; }
        .notations { grid-area: notations; }
        .graph { grid-area: graph; }
        .analysis { grid-area: analysis; }
    
        &.layout__advanced {

            grid-template-columns: 2em 1fr calc(50% - var(--thermal-gap) );

            grid-template-areas:
                "toolbar thermogram complex"
                "toolbar thermogram complex"
                "notations notations notations";

                @media(max-width: 800px) {
                grid-template-columns: 2em calc(100% - 3em);
                grid-template-areas: 
                    "toolbar thermogram"
                    "toolbar notations"
                    "toolbar complex";
            }

        }

        &.layout__simple {

            gap: 0px;
            grid-template-columns: 2.5em 1fr;
            grid-template-rows: auto;

            grid-template-areas: 
                "toolbar thermogram" 
                "toolbar analysis" 
                "toolbar graph" 
                "toolbar notations" 
                "toolbar complex";

            .analysis,
            .graph,
            .complex,
            .notations {
                // border: 10px solid red;
            }
        }


        &.layout__lesson {
            grid-template-columns: 2em 1fr calc(40% - var(--thermal-gap) );

            grid-template-areas: 
                "toolbar thermogram notations" 
                "toolbar analysis graph";

            @media(max-width: 800px) {
                grid-template-columns: 2em calc(100% - 3em);
                grid-template-areas: 
                    "toolbar thermogram"
                    "toolbar notations"
                    "toolbar analysis"
                    "toolbar graph";
            }

            .thermogram {
                padding: var(--thermal-gap);
                border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                border-radius: var(--thermal-radius);
                background: var(--thermal-background);
            }
        }

    }

    .share {
        svg {
            width: 1em;
            translateY: 3px;
        }

        pre {
            padding: var(--thermal-gap);
            border-radius: var(--thermal-radius);
            background: var(--thermal-background);
            color: var(--thermal-foreground);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            white-space: pre-wrap;
        }
    }


    .button-fix {
        width: calc(var(--thermal-fs) * 1.2);
        height: calc(var(--thermal-fs) * 1.2);
    }

`;
	}
	render() {
		return html`

    <manager-provider 
        slug="${this.UUID}"
        palette="${this.palette}"
    >
        <registry-provider 
            slug="${this.UUID}"
            from="${ifDefined(this.from)}"
            to="${ifDefined(this.to)}"
            opacity="${this.opacity}"
        >
            <group-provider slug="${this.UUID}">

                <file-provider 
                    ${ref(this.fileProviderRef)} 
                    thermal="${this.url}"
                    visible="${ifDefined(this.visible)}"
                    batch="true"
                    analysis1="${ifDefined(this.analysis1)}"
                    analysis2="${ifDefined(this.analysis2)}"
                    analysis3="${ifDefined(this.analysis3)}"
                    analysis4="${ifDefined(this.analysis4)}"
                    analysis5="${ifDefined(this.analysis5)}"
                    analysis6="${ifDefined(this.analysis6)}"
                    analysis7="${ifDefined(this.analysis7)}"
                    autoclear="true"
                >
                    <notation-provider>

                        <slot name="notation" slot="notation"></slot>

                        ${this.layout === Layout.NOGUI ? this.renderNogui() : this.renderApp()}

                    </notation-provider>

                </file-provider>

            </group-provider>
        </registry-provider>
    </manager-provider>`;
	}
};
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "layout", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "url", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "visible", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], ThermalFileAppElement.prototype, "palette", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalFileAppElement.prototype, "from", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalFileAppElement.prototype, "to", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalFileAppElement.prototype, "opacity", void 0);
__decorate([property()], ThermalFileAppElement.prototype, "author", void 0);
__decorate([state()], ThermalFileAppElement.prototype, "recorded", void 0);
__decorate([property()], ThermalFileAppElement.prototype, "license", void 0);
__decorate([property()], ThermalFileAppElement.prototype, "label", void 0);
__decorate([property({
	type: String,
	reflect: false,
	converter: booleanConverter(true)
})], ThermalFileAppElement.prototype, "showfullscreen", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(true)
})], ThermalFileAppElement.prototype, "showscale", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(true)
})], ThermalFileAppElement.prototype, "showhistogram", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
})], ThermalFileAppElement.prototype, "showlayout", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
})], ThermalFileAppElement.prototype, "showshare", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "analysis1", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "analysis2", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "analysis3", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "analysis4", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "analysis5", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "analysis6", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalFileAppElement.prototype, "analysis7", void 0);
__decorate([provide({ context: localeContext }), property({
	reflect: true,
	converter: localeConverter
})], ThermalFileAppElement.prototype, "locale", void 0);
__decorate([state()], ThermalFileAppElement.prototype, "loading", void 0);
__decorate([state()], ThermalFileAppElement.prototype, "hasVisible", void 0);
__decorate([state()], ThermalFileAppElement.prototype, "ms", void 0);
__decorate([provide({ context: pngExportWidthContext })], ThermalFileAppElement.prototype, "pngExportWidth", void 0);
__decorate([provide({ context: pngExportWidthSetterContext })], ThermalFileAppElement.prototype, "pngExportWidthSetterContext", void 0);
__decorate([provide({ context: pngExportFsContext })], ThermalFileAppElement.prototype, "pngExportFs", void 0);
__decorate([provide({ context: pngExportFsSetterContext })], ThermalFileAppElement.prototype, "pngExportFsSetterContext", void 0);
__decorate([state()], ThermalFileAppElement.prototype, "outerHTMLSnapshot", void 0);
ThermalFileAppElement = __decorate([customElement("thermal-file-app")], ThermalFileAppElement);

//#endregion
//#region src/utils/multipleFiles/TimeGrouping.ts
var TimeGrouping = class {
	get numFiles() {
		return this.records.length;
	}
	forEveryInstance(fn) {
		this.records.forEach((record) => {
			fn(record.instance);
		});
	}
	constructor(element, group) {
		this.element = element;
		this.group = group;
		this.records = [];
		this.groups = /* @__PURE__ */ new Map();
		this.grouping = "none";
	}
	flush() {
		this.records.forEach((record) => {
			record.instance.unmountFromDom();
		});
		this.group.removeAllChildren();
		this.records = [];
		this.groups.clear();
		this.element.groups = [];
	}
	processEntries(entries) {
		this.flush();
		let batch;
		entries.forEach((entry) => {
			const callback = async (result) => {
				if (result instanceof ThermalFileFailure) return;
				const innerHtml = entry.innerHTML.trim();
				const storedContent = innerHtml.length > 0 ? innerHtml : void 0;
				this.records.push({
					instance: result,
					innerHtml: storedContent,
					label: entry.label
				});
			};
			if (entry.lrc === void 0) return;
			if (batch === void 0) {
				batch = this.group.registry.batch.request(entry.lrc, entry.png, this.group, callback, this.element.UUID);
				batch.onResolve.set(this.element.UUID + "___something", () => {
					this.processGroups();
				});
			} else batch.request(entry.lrc, entry.png, this.group, callback);
		});
	}
	processParsedFiles(files) {
		this.flush();
		let batch;
		files.forEach((file) => {
			const callback = async (result) => {
				if (result instanceof ThermalFileFailure) return;
				const innerHtml = file.note ?? "";
				const storedContent = innerHtml.length > 0 ? innerHtml : void 0;
				this.records.push({
					instance: result,
					innerHtml: storedContent,
					label: file.label
				});
			};
			if (batch === void 0) {
				batch = this.group.registry.batch.request(file.thermal, file.visible, this.group, callback, this.element.UUID);
				batch.onResolve.set(this.element.UUID + "___something", () => {
					this.processGroups();
					this.group.analysisSync.recieveSlotSerialized(this.element.analysis1, 1);
					this.group.analysisSync.recieveSlotSerialized(this.element.analysis2, 2);
					this.group.analysisSync.recieveSlotSerialized(this.element.analysis3, 3);
					this.group.analysisSync.recieveSlotSerialized(this.element.analysis4, 4);
					this.group.analysisSync.recieveSlotSerialized(this.element.analysis5, 5);
					this.group.analysisSync.recieveSlotSerialized(this.element.analysis6, 6);
					this.group.analysisSync.recieveSlotSerialized(this.element.analysis7, 7);
				});
			} else batch.request(file.thermal, file.visible, this.group, callback);
		});
	}
	processGroups() {
		this.element.groups = [];
		this.groups.clear();
		this.group.registry.palette.setPalette(this.element.palette);
		this.records.sort((a, b) => {
			return a.instance.timestamp - b.instance.timestamp;
		}).forEach((record) => {
			const fileTimestamp = record.instance.timestamp;
			const groupStart = this.getGroupFromTimestamp(fileTimestamp);
			let existingGroup = this.groups.get(groupStart);
			if (!existingGroup) {
				const groupEnd = this.getGroupToTimestamp(fileTimestamp);
				const { label, info } = this.getGroupLabels(fileTimestamp);
				const group = {
					label: label ?? "",
					info,
					from: groupStart,
					to: groupEnd,
					files: []
				};
				existingGroup = group;
				this.groups.set(groupStart, group);
			}
			record.time = this.getItemLabel(record.instance.timestamp);
			existingGroup.files.push(record);
		});
		this.groups.forEach((group) => {
			group.files = group.files.sort((a, b) => {
				return a.instance.timestamp - b.instance.timestamp;
			});
		});
		this.element.groups = Array.from(this.groups.values());
	}
	getGroupFromTimestamp(frameTimestamp) {
		if (this.grouping === "none") return -Infinity;
		else if (this.grouping === "hour") return startOfHour(frameTimestamp).getTime();
		else if (this.grouping === "day") return startOfDay(frameTimestamp).getTime();
		else if (this.grouping === "week") return startOfWeek(frameTimestamp).getTime();
		else if (this.grouping === "month") return startOfMonth(frameTimestamp).getTime();
		else if (this.grouping === "year") return startOfYear(frameTimestamp).getTime();
		return NaN;
	}
	getGroupToTimestamp(frameTimestamp) {
		if (this.grouping === "none") return Infinity;
		else if (this.grouping === "hour") return endOfHour(frameTimestamp).getTime();
		else if (this.grouping === "day") return endOfDay(frameTimestamp).getTime();
		else if (this.grouping === "week") return endOfWeek(frameTimestamp).getTime();
		else if (this.grouping === "month") return endOfMonth(frameTimestamp).getTime();
		else if (this.grouping === "year") return endOfYear(frameTimestamp).getTime();
		return NaN;
	}
	getGroupLabels(frameTimestamp) {
		if (this.grouping === "none") return {};
		else if (this.grouping === "hour") return { label: format(frameTimestamp, "H:00 d. M. yyyy") };
		else if (this.grouping === "day") return { label: format(frameTimestamp, "d.M.yyyy") };
		else if (this.grouping === "week") return {
			label: "Week " + format(frameTimestamp, "w") + " of " + format(frameTimestamp, "yyyy"),
			info: [TimeFormat.humanDate(startOfWeek(frameTimestamp).getTime()), TimeFormat.humanDate(endOfWeek(frameTimestamp).getTime())].join(" - ")
		};
		else if (this.grouping === "month") return {
			label: format(frameTimestamp, "MMMM yyyy"),
			info: [TimeFormat.humanDate(startOfMonth(frameTimestamp).getTime()), TimeFormat.humanDate(endOfMonth(frameTimestamp).getTime())].join(" - ")
		};
		else if (this.grouping === "year") return { label: format(frameTimestamp, "yyyy") };
		return {};
	}
	getItemLabel(frameTimestamp) {
		if (this.grouping === "none") return TimeFormat.human(frameTimestamp);
		else if (this.grouping === "hour") return format(frameTimestamp, "H:mm:ss");
		else if (this.grouping === "day") return format(frameTimestamp, "H:mm:ss");
		else if (this.grouping === "week") return TimeFormat.human(frameTimestamp);
		else if (this.grouping === "month") return TimeFormat.human(frameTimestamp);
		else if (this.grouping === "year") return TimeFormat.human(frameTimestamp);
		return TimeFormat.human(frameTimestamp);
	}
	setGrouping(grouping) {
		this.grouping = grouping;
		this.processGroups();
	}
};

//#endregion
//#region src/apps/multiple/AbstractMultipleApp.ts
/** @deprecated */
var AbstractMultipleApp = class AbstractMultipleApp extends BaseAppWithPngExportContext {
	constructor(..._args) {
		super(..._args);
		this.showembed = false;
		this.showabout = false;
		this.showtutorial = false;
		this.showfullscreen = false;
		this.showhistogram = true;
		this.interactiveanalysis = true;
		this.pngExportWidth = 1200;
		this.pngExportWidthSetterContext = (value) => {
			this.pngExportWidth = value;
		};
		this.pngExportFs = 20;
		this.pngExportFsSetterContext = (value) => {
			this.pngExportFs = value;
		};
	}
	static {
		this.FILE_RECORD_SEPARATOR = ";";
	}
	static {
		this.FILE_SEGMENT_SEPAROATOR = "|";
	}
	static {
		this.FILE_COMPONENT_SEPAROATOR = "~";
	}
	static {
		this.FILE_THERMAL_KEY = "thermal";
	}
	static {
		this.FILE_VISIBLE_KEY = "visible";
	}
	static {
		this.FILE_LABEL_KEY = "label";
	}
	static {
		this.FILE_NOTE_KEY = "note";
	}
	parseFilesProperty(property) {
		return property.split(AbstractMultipleApp.FILE_RECORD_SEPARATOR).map((record) => {
			let thermal = void 0;
			let visible = void 0;
			let label = void 0;
			let note = void 0;
			record.trim().split(AbstractMultipleApp.FILE_SEGMENT_SEPAROATOR).forEach((segment) => {
				const components = segment.trim().split(AbstractMultipleApp.FILE_COMPONENT_SEPAROATOR);
				if (components.length > 2) return;
				const [key, value] = components;
				const sanitizedKey = key.trim();
				const sanitizedValue = value.trim();
				switch (sanitizedKey) {
					case AbstractMultipleApp.FILE_THERMAL_KEY:
						thermal = sanitizedValue;
						break;
					case AbstractMultipleApp.FILE_VISIBLE_KEY:
						visible = sanitizedValue;
						break;
					case AbstractMultipleApp.FILE_LABEL_KEY:
						label = sanitizedValue;
						break;
					case AbstractMultipleApp.FILE_NOTE_KEY:
						note = sanitizedValue;
						break;
				}
			});
			if (thermal === void 0) return;
			else return {
				thermal,
				visible,
				note,
				label
			};
		}).filter((record) => record !== void 0);
	}
};
__decorate([property({
	type: String,
	reflect: false,
	attribute: true,
	converter: booleanConverter(false)
})], AbstractMultipleApp.prototype, "showembed", void 0);
__decorate([property({
	type: String,
	reflect: false,
	attribute: true,
	converter: booleanConverter(false)
})], AbstractMultipleApp.prototype, "showabout", void 0);
__decorate([property({
	type: String,
	reflect: false,
	attribute: true,
	converter: booleanConverter(false)
})], AbstractMultipleApp.prototype, "showtutorial", void 0);
__decorate([property({
	type: String,
	reflect: false,
	converter: booleanConverter(true)
})], AbstractMultipleApp.prototype, "showfullscreen", void 0);
__decorate([property({
	type: String,
	reflect: true,
	converter: booleanConverter(true)
})], AbstractMultipleApp.prototype, "showhistogram", void 0);
__decorate([provide({ context: interactiveAnalysisContext }), property({
	type: String,
	reflect: true,
	converter: booleanConverter(true)
})], AbstractMultipleApp.prototype, "interactiveanalysis", void 0);
__decorate([provide({ context: pngExportWidthContext })], AbstractMultipleApp.prototype, "pngExportWidth", void 0);
__decorate([provide({ context: pngExportWidthSetterContext })], AbstractMultipleApp.prototype, "pngExportWidthSetterContext", void 0);
__decorate([provide({ context: pngExportFsContext })], AbstractMultipleApp.prototype, "pngExportFs", void 0);
__decorate([provide({ context: pngExportFsSetterContext })], AbstractMultipleApp.prototype, "pngExportFsSetterContext", void 0);
__decorate([provide({ context: localeContext }), property({
	reflect: true,
	converter: localeConverter
})], AbstractMultipleApp.prototype, "locale", void 0);

//#endregion
//#region src/apps/ThermalGroupApp.ts
var STATE = /* @__PURE__ */ function(STATE) {
	STATE[STATE["GROUP"] = 0] = "GROUP";
	STATE[STATE["DETAIL"] = 1] = "DETAIL";
	return STATE;
}(STATE || {});
let ThermalGroupAppElement = class ThermalGroupAppElement extends AbstractMultipleApp {
	constructor(..._args) {
		super(..._args);
		this.groupRef = createRef();
		this.palette = "jet";
		this.label = "Group of IR images";
		this.slug = Math.random().toFixed(5);
		this.columns = 3;
		this.breakpoint = 700;
		this.grouping = "none";
		this.groups = [];
		this.onGroupInit = new CallbacksManager();
		this.onColumns = new CallbacksManager();
		this.preservetime = true;
		this.state = STATE.GROUP;
		this.detail = void 0;
		this.loading = false;
	}
	get manager() {
		return this.groupRef.value.group.registry.manager;
	}
	connectedCallback() {
		super.connectedCallback();
		const group = createOrGetManager(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug, this.label, this.description);
		group.files.addListener(this.UUID, (instances) => {
			if (group.analysisSync.value === false) {
				const instance = instances[0];
				if (instance) group.analysisSync.turnOn(instance);
			}
		});
		this.group = group;
		this.grouper = new TimeGrouping(this, group);
		this.onGroupInit.call(this.group);
	}
	async load() {
		this.loading = true;
		const files = this.files ? this.parseFilesProperty(this.files) : [];
		if (files.length > 0) this.grouper.processParsedFiles(files);
		else this.grouper.processEntries(this.entries.filter((el) => el instanceof ThermalFileElement));
		this.group.files.addListener(this.UUID, (value) => {
			this.loading = false;
			if (value.length < 4) this.columns = value.length;
			else this.columns = 4;
		});
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		initLocalesInTopLevelElement(this);
		this.group.registry.manager.palette.setPalette(this.palette);
		if (this.from !== void 0 && this.to !== void 0) this.group.registry.range.imposeRange({
			from: this.from,
			to: this.to
		});
		setTimeout(() => this.load(), 0);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("grouping")) {
			if (this.grouper) this.grouper.setGrouping(this.grouping);
		}
		if (_changedProperties.has("palette") && this.palette) {
			if (this.grouper) this.grouper.group.registry.palette.setPalette(this.palette);
		}
		if (_changedProperties.has("columns")) this.onColumns.call(this.columns);
		if (_changedProperties.has("files")) {
			if (this.files && _changedProperties.get("files") !== void 0) {
				const parsedFiles = this.parseFilesProperty(this.files);
				if (parsedFiles.length > 0) this.grouper.processParsedFiles(parsedFiles);
			}
		}
		if (_changedProperties.has("analysis1")) this.group.analysisSync.recieveSlotSerialized(this.analysis1, 1);
		if (_changedProperties.has("analysis2")) this.group.analysisSync.recieveSlotSerialized(this.analysis2, 2);
		if (_changedProperties.has("analysis3")) this.group.analysisSync.recieveSlotSerialized(this.analysis3, 3);
		if (_changedProperties.has("analysis4")) this.group.analysisSync.recieveSlotSerialized(this.analysis4, 4);
		if (_changedProperties.has("analysis5")) this.group.analysisSync.recieveSlotSerialized(this.analysis5, 5);
		if (_changedProperties.has("analysis6")) this.group.analysisSync.recieveSlotSerialized(this.analysis6, 6);
		if (_changedProperties.has("analysis7")) this.group.analysisSync.recieveSlotSerialized(this.analysis7, 7);
	}
	scrollToComponent() {
		this.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	async showDetail(lrc, png) {
		this.detail = {
			lrc,
			png
		};
		this.group.files.removeAllInstances();
		this.group.registry.range.reset();
		this.group.analysisSync.reset();
		this.group.analysisGraph.reset();
		this.state = STATE.DETAIL;
		this.scrollToComponent();
	}
	async closeDetail() {
		delete this.detail;
		this.detail = void 0;
		this.group.analysisSync.reset();
		this.group.analysisGraph.reset();
		this.group.registry.range.reset();
		this.load();
		this.state = STATE.GROUP;
		this.scrollToComponent();
	}
	static {
		this.styles = css`


        :host {
            --gap: calc(var(--thermal-gap) * .5);
        }

        .app-content {
            box-sizing: border-box;
            display: grid;
            width: 100%;
            gap: var(--thermal-gap);
            grid-template-columns: 30px 1fr;
        }


        .group {

            
        
        }

        .group:not(.group__bordered) {
            margin-top: calc( var( --thermal-gap ) * .5 );
        }

        .group__bordered {
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            margin-top: calc( var( --thermal-gap ) * .5 );
            background-color: color-mix(in srgb, var( --thermal-slate-light ), #fff);
        }

        .group__bordered .group-files {
            padding: calc( var( --thermal-gap ) * .5 );
        }

        

        .group-files {
            display: flex;
            flex-wrap: wrap;

            div file-mirror {
                padding: calc( var(--gap) * .5);
                display: block;
            }
        }

        .group-files-1 div { width: 100%; }
        .group-files-2 div { width: 50%; }
        .group-files-3 div { width: calc(100% / 3); }
        .group-files-4 div { width: calc(100% / 4); }
        .group-files-5 div { width: calc(100% / 5); }
        .group-files-6 div { width: calc(100% / 6); }
        .group-files-7 div { width: calc(100% / 7); }
        .group-files-8 div { width: calc(100% / 8); }
        .group-files-9 div { width: calc(100% / 9); }
        .group-files-10 div { width: calc(100% / 10); }

        .group-header {

            display: flex;
            gap: var(--thermal-gap);
            align-items: center;
            padding: calc( var( --thermal-gap ) * .5 );
            border-bottom: 1px solid var( --thermal-slate-light );
        }

        .group-title {
            margin: 0;
            padding: 0;
            font-size: calc( var(--thermal-fs) * 1.2 );
            color: var( --thermal-foreground );
        }

        .group-info {
            color: var( --thermal-slate );
            font-size: calc( var(--thermal-fs) * .8 );
            margin: 0;
            padding: 0;
        }

        .detail {
            padding: var(--thermal-gap);
            background: var(--thermal-background);
            box-sizing: border-box;
            border-radius: var(--thermal-radius);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            width: 100%;
        }

        manager-tool-bar {
            position: sticky;
            top: 0px;
            z-index: 999;
        }


    
    `;
	}
	renderGroup() {
		return html`${this.groups.map((group) => html`<section class="group">
                                        
            <div class="group-files group-files-${this.columns}">
                ${group.files.map((file) => html`<div class="file">
                    <file-mirror .file=${file.instance} autoclear="true">
                        <file-thumbnail
                            .ondetail=${() => {
			this.showDetail(file.instance.thermalUrl, file.instance.visibleUrl);
		}}
                            label=${ifDefined(file.label)}
                        ></file-thumbnail>
                    </file-mirror>
                </div>`)}
            </div>
        </section>`)} `;
	}
	renderDetail() {
		if (this.detail === void 0) return nothing;
		return html`<div class="detail">
            <file-provider thermal="${this.detail.lrc}" visible="${this.detail.png}">
                <file-detail label="${this.label}" .onback=${() => this.closeDetail()}></file-detail>
            </file-provider>
        </div>`;
	}
	render() {
		return html`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}" from="${ifDefined(this.from)}" to="${ifDefined(this.to)}">

                    <group-provider slug="${this.slug}" autoclear="true" ${ref(this.groupRef)}>

                        <thermal-app
                            author=${ifDefined(this.author)}
                            license=${ifDefined(this.license)}
                            showfullscreen="true"
                            label=${ifDefined(this.label)}
                        >

                            ${this.loading === false ? html`                                

                                <manager-palette-dropdown slot="bar-persistent"></manager-palette-dropdown>
                                
                                <registry-range-form slot="bar-pre"></registry-range-form>
                                        

                                ${this.state === STATE.GROUP ? html`
                                        ${this.grouper.numFiles > 0 ? html`<group-download-dropdown slot="bar-pre"></group-download-dropdown>` : nothing}
                                        <div slot="bar-pre">
                                            <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${(event) => {
			const value = event.target?.value;
			if (value !== void 0) this.columns = parseInt(value);
		}}
                                            ></input>
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${t(T.columns, { num: this.columns })}</div>
                                    </div>

                            <group-analysis-sync-button slot="bar-pre"></group-analysis-sync-button>
                                        ` : nothing}
                                    

                            ${this.showabout === true ? html`<app-info-button slot="bar-pre"></app-info-button>` : nothing}

                                        ` : nothing}

                            <thermal-dialog label="${t(T.config)}" slot="close">
                                
                                <thermal-btn slot="invoker" icon="settings" iconStyle="solid" tooltip="${t(T.config)}"></thermal-btn>

                                <div slot="content">
                                    <table>
                                        <manager-export-panel></manager-export-panel>
                                        <registry-display-panel></registry-display-panel>
                                    </table>
                                </div>
                            </thermal-dialog>

                            ${this.loading === false ? html`
                                    ${this.showhistogram === true ? html`<registry-histogram expandable="true" slot="pre"></registry-histogram>` : nothing}

                                    <registry-range-slider slot="pre"></registry-range-slider>
                                    <registry-ticks-bar slot="pre"></registry-ticks-bar>
                                ` : nothing}
                            

                            ${this.state === STATE.GROUP ? html`
                                <group-chart slot="pre"></group-chart>
                            ` : nothing}

                            ${this.loading === true ? html`<thermal-poster message="${t(T.loading)}"></thermal-poster>` : html`<div class="app-content">

                                    <slot></slot>

                                    <manager-tool-bar></manager-tool-bar>

                                    <div class="app-content-main">
                                    ${this.state === STATE.GROUP ? this.renderGroup() : this.renderDetail()}
                                    </div>
                            
                            </div>

                            ${this.state === STATE.GROUP ? html`
                                <group-timeline></group-timeline>
                            ` : nothing}
                            `}
                            

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `;
	}
};
__decorate([property({
	type: String,
	reflect: true,
	attribute: true
})], ThermalGroupAppElement.prototype, "palette", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalGroupAppElement.prototype, "from", void 0);
__decorate([property({
	type: Number,
	reflect: true
})], ThermalGroupAppElement.prototype, "to", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "author", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "label", void 0);
__decorate([property({
	type: String,
	reflect: false
})], ThermalGroupAppElement.prototype, "description", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "license", void 0);
__decorate([state(), queryAssignedElements({ flatten: true })], ThermalGroupAppElement.prototype, "entries", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "slug", void 0);
__decorate([property()], ThermalGroupAppElement.prototype, "columns", void 0);
__decorate([property()], ThermalGroupAppElement.prototype, "breakpoint", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "grouping", void 0);
__decorate([state()], ThermalGroupAppElement.prototype, "groups", void 0);
__decorate([property({ type: String })], ThermalGroupAppElement.prototype, "files", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "analysis1", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "analysis2", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "analysis3", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "analysis4", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "analysis5", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "analysis6", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ThermalGroupAppElement.prototype, "analysis7", void 0);
__decorate([property({
	type: String,
	reflect: true,
	converter: booleanConverter(false)
})], ThermalGroupAppElement.prototype, "preservetime", void 0);
__decorate([state()], ThermalGroupAppElement.prototype, "state", void 0);
__decorate([state()], ThermalGroupAppElement.prototype, "detail", void 0);
__decorate([state()], ThermalGroupAppElement.prototype, "loading", void 0);
ThermalGroupAppElement = __decorate([customElement("thermal-group-app")], ThermalGroupAppElement);

//#endregion
//#region src/connection/controllers/controllerContexts.ts
const ControlledClientContext = createContext("controlled-client-controller");
const ControlledContentContext = createContext("controlled-content-controller");
const DisplayControllerContext = createContext("connected-display-controller");
const FileSelectionControllerContext = createContext("connected-file-selection-controller");
const FolderSelectionControllerContext = createContext("connected-folder-selection-controller");

//#endregion
//#region src/connection/controllers/abstraction/ControlledConsumer.ts
var ControlledConsumer = class extends AbstractThermalElement {
	disconnectedCallback() {
		super.disconnectedCallback();
		this.content.unsubscribeFromAll(this);
		this.display.unsubscribeFromAll(this);
	}
};
__decorate([consume({
	context: ControlledClientContext,
	subscribe: true
})], ControlledConsumer.prototype, "client", void 0);
__decorate([consume({
	context: ControlledContentContext,
	subscribe: true
})], ControlledConsumer.prototype, "content", void 0);
__decorate([consume({
	context: DisplayControllerContext,
	subscribe: true
})], ControlledConsumer.prototype, "display", void 0);
__decorate([consume({
	context: FileSelectionControllerContext,
	subscribe: true
})], ControlledConsumer.prototype, "selectionFile", void 0);
__decorate([consume({
	context: FolderSelectionControllerContext,
	subscribe: true
})], ControlledConsumer.prototype, "selectionFolder", void 0);

//#endregion
//#region src/connection/controllers/abstraction/ConnectedProvider.ts
let ConnectedProvider = class ConnectedProvider extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.counter = 0;
	}
	connectedCallback() {
		super.connectedCallback();
		this.display.subscribeOnRecrteateContext(this, () => {
			this.counter++;
		});
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
	}
	render() {
		return html`<div>
            <p>Connected Provider</p>
            <p>Navigate count: ${this.counter}</p>
        </div>`;
	}
};
__decorate([state()], ConnectedProvider.prototype, "counter", void 0);
ConnectedProvider = __decorate([customElement("connected-provider")], ConnectedProvider);

//#endregion
//#region src/connection/controllers/AbstractConnectedController.ts
var AbstractConnectedController = class {
	log(...args) {
		this.host.log(this.constructor.name, ...args);
	}
};

//#endregion
//#region src/connection/controllers/ClientController.ts
/** 
* Basic reactive controller for applications connected to the API 
*/
var ClientController = class extends AbstractConnectedController {
	get isLoading() {
		return this._isLoading;
	}
	get whatIsLoading() {
		return this._whatIsLoading;
	}
	get loadingError() {
		return this._loadingError;
	}
	get isClientConnected() {
		return this._isClientConnected;
	}
	get isLoggedIn() {
		return this._isLoggedIn;
	}
	get isRoot() {
		return this._isRoot;
	}
	get identity() {
		return this._identity;
	}
	get serverInfo() {
		return this._serverInfo;
	}
	get api() {
		return this.host.apiClient;
	}
	constructor(host) {
		super();
		this._isLoading = false;
		this._isClientConnected = false;
		this._isLoggedIn = false;
		this._isRoot = false;
		this.onLoadingChange = new CallbacksManager();
		this.onIdentity = new CallbacksManager();
		this._hasCalledReadyForContentRequests = false;
		this.onReadyForContentRequests = new CallbacksManager();
		this.onServerInfoUpdate = new CallbacksManager();
		this.host = host;
		this.UUID = this.host.UUID + "__client_controller";
		host.addController(this);
	}
	async hostConnected() {
		const shouldLogin = this.host.authUrl && this.host.authToken;
		/** After the server responds and is connected */
		this.host.apiClient.onConnection.set(this.UUID, async (status) => {
			this.setIsClientConnected(status !== false);
			this.setServerInfo(status || void 0);
			/** @todo Zde by mělo být přihlašování postaru, ale uděláme to pak přes cookie... */
			await this.initialLogin();
			if (!shouldLogin) {
				this.onIdentity.call(this.identity, this.isRoot);
				this.callReadyForContentRequestsIfNotAllready();
			}
			this.host.log("Client connection status changed:", status);
		});
		this.host.apiClient.auth.onIdentity.set(this.UUID, (identity) => {
			if (identity) {
				this.setIdentity(identity);
				this.setIsLoggedIn(true);
				this.setIsRoot(identity.meta.is_root);
			} else {
				this.setIdentity(void 0);
				this.setIsLoggedIn(false);
				this.setIsRoot(false);
			}
			if (shouldLogin) this.callReadyForContentRequestsIfNotAllready();
			this.onIdentity.call(this.identity, this.isRoot);
		});
		this.loadingStart();
		await this.host.apiClient.connect();
		this.loadingSuccessfull();
	}
	hostDisconnected() {}
	hostUpdate() {}
	hostUpdated() {}
	async initialLogin() {
		if (this.isClientConnected) {
			if (this.host.authUrl && this.host.authToken) {
				this.loadingStart("Přihlašuji se k serveru...");
				if (this.host.apiClient.auth.isLoggedIn()) await this.host.apiClient.routes.post.logout().execute();
				const request = new Request(this.host.authUrl, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Accept": "application/json"
					},
					body: JSON.stringify({ token: this.host.authToken })
				});
				const body = await (await fetch(request)).json();
				if (!body.success) {
					this.loadingFailed("Nepodařilo se ověřit uživatele.");
					return;
				}
				const user = body.data.user;
				const pass = body.data.pass;
				await this.host.apiClient.routes.post.login(user, pass).execute();
			}
		}
	}
	loadingStart(what) {
		this._whatIsLoading = what;
		this._loadingError = void 0;
		if (this._isLoading) return;
		this._isLoading = true;
		this.onLoadingChange.call(true);
		this.host.requestUpdate();
	}
	loadingSuccessfull() {
		if (!this._isLoading) return;
		this._isLoading = false;
		this._whatIsLoading = void 0;
		this._loadingError = void 0;
		this.onLoadingChange.call(false);
		this.host.requestUpdate();
	}
	loadingFailed(error) {
		if (!this._isLoading) return;
		this._isLoading = false;
		this._whatIsLoading = void 0;
		this._loadingError = error;
		this.onLoadingChange.call(false);
		this.host.requestUpdate();
	}
	setIsClientConnected(value) {
		if (this._isClientConnected === value) return;
		this._isClientConnected = value;
		this.host.requestUpdate();
	}
	setIsLoggedIn(value) {
		if (this._isLoggedIn === value) return;
		this._isLoggedIn = value;
		this.host.requestUpdate();
	}
	setIsRoot(value) {
		if (this._isRoot === value) return;
		this._isRoot = value;
		this.host.requestUpdate();
	}
	setIdentity(value) {
		if (this._identity === value) return;
		this._identity = value;
		this.host.requestUpdate();
	}
	setServerInfo(value) {
		if (this._serverInfo === value) return;
		this._serverInfo = value;
		this.host.requestUpdate();
	}
	/**
	* This event will be called once, when the client is connected and logged in eventually.
	* It is used by other controllers who will then fire their content requests.
	*/
	callReadyForContentRequestsIfNotAllready() {
		if (this._hasCalledReadyForContentRequests) return;
		this._hasCalledReadyForContentRequests = true;
		this.onReadyForContentRequests.call();
	}
	subscribeToIdentityChanges(element) {
		this.onIdentity.set(element.UUID, () => {
			element.requestUpdate();
		});
	}
	subscribeToLoadingChanges(element) {
		this.onLoadingChange.set(element.UUID, () => {
			element.requestUpdate();
		});
	}
	subscribeToServerInfoUpdates(element) {
		this.onServerInfoUpdate.set(element.UUID, () => {
			element.requestUpdate();
		});
	}
};

//#endregion
//#region src/connection/controllers/ContentController.ts
/**
* This controller takes care of the entire content state management:
* - fetching data from the server
* - updates everywhere
* - loading state (separate from the client controller who has a loading state of its own)
*/
var ContentController = class extends AbstractConnectedController {
	get folder() {
		return this._folder;
	}
	get subfolders() {
		return this._subfolders;
	}
	get files() {
		return this._files;
	}
	get file() {
		return this._file;
	}
	get grid() {
		return this._grid;
	}
	get breadcrumb() {
		return this._breadcrumb;
	}
	get tree() {
		return this._tree;
	}
	get userFolders() {
		return this._userFolders;
	}
	get gridFolders() {
		return this._gridFolders;
	}
	get isLoading() {
		return this._isLoading;
	}
	get whatIsLoading() {
		return this._whatIsLoading;
	}
	constructor(host) {
		super();
		this._subfolders = [];
		this._tree = [];
		this._userFolders = [];
		this._gridFolders = [];
		this.onFolderUpdate = new CallbacksManager();
		this.onSubfoldersUpdate = new CallbacksManager();
		this.onFilesUpdate = new CallbacksManager();
		this.onFileUpdate = new CallbacksManager();
		this.onGridUpdate = new CallbacksManager();
		this.onBreadcrumbUpdate = new CallbacksManager();
		this.onTree = new CallbacksManager();
		this.onUserFoldersUpdate = new CallbacksManager();
		this.onError = new CallbacksManager();
		this._isLoading = false;
		this.onLoadingChange = new CallbacksManager();
		this.host = host;
		host.addController(this);
	}
	hostConnected() {
		this.host.client.api.auth.onIdentity.set(this.host.UUID + "___USER_FOLDERS", (identity, userFolders) => {
			this._userFolders = userFolders || [];
			this.onUserFoldersUpdate.call(this._userFolders);
			this.host.requestUpdate();
		});
	}
	hostDisconnected() {}
	hostUpdate() {}
	hostUpdated() {}
	loadingStart(what) {
		if (what) {
			this._whatIsLoading = what;
			this.host.requestUpdate();
		}
		if (!this._isLoading) {
			this._isLoading = true;
			this.onLoadingChange.call(true, what);
			this.host.requestUpdate();
		}
	}
	loadingEnded() {
		if (this._isLoading) {
			this._isLoading = false;
			this._whatIsLoading = void 0;
			this.onLoadingChange.call(false);
			this.host.requestUpdate();
		}
	}
	/** Set the current folder state. Intended for API calls, but can be used by routers & buttons as well. This method tries to modify the current folder path property */
	dangerouslySetFolder(folder) {
		if (this._folder === folder) return;
		if (this.folder && folder) Object.assign(this.folder, folder);
		else this._folder = folder;
		if (this.host.folderPath !== folder?.path) this.host.folderPath = folder?.path;
		this.onFolderUpdate.call(this._folder);
		this.host.requestUpdate();
	}
	/** Set the current subfolders state. Intended for API calls */
	dangerouslySetSubfolders(subfolders) {
		if (this._subfolders === subfolders) return;
		this._subfolders = subfolders ? subfolders.sort((a, b) => a.name.localeCompare(b.name)) : [];
		this.onSubfoldersUpdate.call(this._subfolders);
		this.host.requestUpdate();
	}
	/** Update the current state of the file. Intended for API calls. */
	dangerouslySetFiles(files) {
		if (this._files === files) return;
		this._files = files;
		this.onFilesUpdate.call(this._files);
		this.host.requestUpdate();
	}
	/** Update the inner state of of the current file. Intended for API calls but can be used by routers or the UI as well. */
	dangerouslySetFileState(file) {
		if (this.file && file) Object.assign(this.file, file);
		else this._file = file;
		if (this.file) this.host.fileName = this.file.fileName;
		else this.host.fileName = void 0;
		if (this.files && this.files.length > 0) {
			let hasChanged = false;
			this.files.forEach((currentFile) => {
				if (currentFile.url === file?.url) {
					Object.assign(currentFile, file);
					hasChanged = true;
				}
			});
			if (hasChanged) this.onFilesUpdate.call(this._files);
		}
		this.onFileUpdate.call(this._file);
		this.host.requestUpdate();
	}
	/** Update the current grid state. Intended for API calls only. */
	dangerouslySetGridState(grid) {
		if (this._grid === grid) return;
		this._grid = grid;
		this.onGridUpdate.call(this._grid);
		this.host.requestUpdate();
	}
	dangerouslySetTree(tree) {
		if (this._tree === tree) return;
		this._tree = tree;
		this.onTree.call(this._tree);
		this.host.requestUpdate();
	}
	dangerouslySetBreadcrumb(breadcrumb) {
		this._breadcrumb = breadcrumb;
		this.onBreadcrumbUpdate.call(this._breadcrumb);
		this.host.requestUpdate();
	}
	/** 
	* Update the information about the folder wherever it is:
	* - in the main folder state if the path matches
	* - in the subfolders list if the path matches
	* - in the grid groups if the path matches
	* - in the grid header if the slug matches
	* - in the grid all_subdirectories if the slug matches
	*/
	updateFolderState(folder) {
		if (this.folder && this.folder.path === folder.path) {
			Object.assign(this.folder, folder);
			this.onFolderUpdate.call(this._folder);
		}
		if (this.subfolders) {
			let hasChanged = false;
			this.subfolders.forEach((subfolder) => {
				if (subfolder.path === folder.path) {
					Object.assign(subfolder, folder);
					hasChanged = true;
				}
			});
			if (hasChanged) this.onSubfoldersUpdate.call(this._subfolders);
		}
		if (this.grid && this.grid.folder && this.grid.folder.path !== folder.path) {
			Object.assign(this.grid.folder, folder);
			this.onGridUpdate.call(this._grid);
		}
		if (this.grid && this.grid.header && this.grid.header[folder.slug] !== void 0) {
			Object.assign(this.grid.header[folder.slug], folder);
			this.onGridUpdate.call(this._grid);
		}
		if (this.grid && this.grid.all_subdirectories && this.grid.all_subdirectories[folder.slug] !== void 0) Object.assign(this.grid.all_subdirectories[folder.slug], folder);
		if (this._breadcrumb) this._breadcrumb.forEach((item) => {
			if (item.path === folder.path) item.name = folder.name;
		});
		this.host.requestUpdate();
	}
	/** 
	* Update the information about a file wherever it is:
	* - in the main file state if the URL matches
	* - in the files list if the URL matches
	* - in the grid groups if the URL matches
	* - in the grid tags if the URL matches
	*/
	updateFileState(file) {
		if (this.file) Object.assign(this.file, file);
		if (this.files) this.files.forEach((currentFile) => {
			if (currentFile.url === file.url) {
				Object.assign(currentFile, file);
				this.onFilesUpdate.call();
			}
		});
		if (this.grid) {
			for (const group of Object.values(this.grid.groups)) Object.values(group.folders).forEach((folder) => {
				folder.forEach((fileInFolder) => {
					if (fileInFolder.url === file.url) Object.assign(fileInFolder, file);
				});
			});
			for (const tag of Object.values(this.grid.tags)) for (const folder of Object.values(tag.folders)) folder.forEach((fileInFolder) => {
				if (fileInFolder.url === file.url) Object.assign(fileInFolder, file);
			});
		}
		this.onFileUpdate.call(this._file);
		this.host.requestUpdate();
	}
	/** Clear the entire content in this controller */
	purgeContentState() {
		this._folder = void 0;
		this._subfolders = [];
		this._files = void 0;
		this._file = void 0;
		this._grid = void 0;
	}
	throwIfNot200(response) {
		if (response.success === false || response.code !== 200) {
			this.onError.call(response.message || "Neznámá chyba při komunikaci se serverem");
			throw new Error(response.message, { cause: { code: response.code } });
		}
	}
	/** Request and update a folder information, storing also all subfolders */
	async fetchFolder(folderPath) {
		const result = await this.host.apiClient.routes.get.info(folderPath).execute();
		this.throwIfNot200(result);
		if (result.success) {
			this.dangerouslySetFolder(result.data.folder);
			this.dangerouslySetSubfolders(Object.values(result.data.subfolders));
			this.dangerouslySetBreadcrumb(result.data.breadcrumb);
		}
	}
	/** Request all files in a folder */
	async fetchFiles(folderPath) {
		const result = await this.host.apiClient.routes.get.files(folderPath).execute();
		this.throwIfNot200(result);
		if (result.success) this.dangerouslySetFiles(Object.values(result.data.files));
	}
	/** Request the grid data for a folder */
	async fetchGridData(folderPath, inclidedSubfolderPaths) {
		const request = this.host.apiClient.routes.get.grid(folderPath);
		if (inclidedSubfolderPaths && inclidedSubfolderPaths.length > 0) for (const folder of inclidedSubfolderPaths) request.addFolder(folder);
		const result = await request.execute();
		this.host.requestUpdate();
		this.throwIfNot200(result);
		if (result.success) {
			this.dangerouslySetFolder(result.data.folder);
			this.dangerouslySetGridState(result.data);
		} else this.dangerouslySetGridState(void 0);
	}
	/** Fetch information about a file */
	async fetchFile(folderPath, fileName) {
		const result = await this.host.apiClient.routes.get.file(folderPath, fileName).execute();
		this.throwIfNot200(result);
		if (result.success) this.dangerouslySetFileState(result.data.file);
	}
	/** Fetch the complete tree for the given user */
	async fetchUserTree() {
		const response = await this.host.apiClient.routes.get.currentUserTree().execute();
		this.throwIfNot200(response);
		const tree = response.data?.tree || [];
		this.dangerouslySetTree(tree);
	}
	async fetchDeleteFile(folderPath, fileName) {
		const result = await this.host.apiClient.routes.post.deleteFile(folderPath, fileName).execute();
		this.throwIfNot200(result);
		if (this.file && this.file.path === folderPath && this.file.fileName === fileName) this.dangerouslySetFileState(void 0);
		if (this.files && this.files.length > 0) {
			const newFiles = this.files.filter((f) => {
				if (f.path.includes(folderPath) || folderPath.includes(f.path)) return f.fileName !== fileName;
				return true;
			});
			this.dangerouslySetFiles(newFiles);
		}
		if (this.grid) {
			let hasChanged = false;
			Object.entries(this.grid.groups).forEach(([groupKey, group]) => {
				Object.entries(group.folders).forEach(([folderKey, folder]) => {
					const newFiles = folder.filter((f) => {
						if (f.path === folderPath) return f.fileName !== fileName;
						return true;
					});
					if (newFiles.length !== folder.length) {
						hasChanged = true;
						this.grid.groups[groupKey].folders[folderKey] = newFiles;
					}
				});
			});
			if (hasChanged) this.host.requestUpdate();
		}
	}
	subscribeToFolderUpdates(element) {
		this.onFolderUpdate.set(element.UUID, () => {
			element.requestUpdate();
		});
	}
	subscribeToFileUpdates(element) {
		this.onFileUpdate.set(element.UUID, () => {
			element.requestUpdate();
		});
	}
	subscribeToFilesUpdates(element) {
		this.onFilesUpdate.set(element.UUID, (files) => {
			element.requestUpdate();
		});
	}
	subscribeToSubfoldersUpdates(element) {
		this.onSubfoldersUpdate.set(element.UUID, () => {
			element.requestUpdate();
		});
	}
	subscribeToBreadcrumbUpdates(element) {
		this.onBreadcrumbUpdate.set(element.UUID, () => {
			element.requestUpdate();
		});
	}
	subscribeToGridUpdates(element) {
		this.onGridUpdate.set(element.UUID, (grid) => {
			element.requestUpdate();
		});
	}
	subscribeToTreeUpdates(element) {
		this.onTree.set(element.UUID, (tree) => {
			element.requestUpdate();
		});
	}
	subscribeToContentLoading() {
		this.onLoadingChange.set(this.host.UUID, () => {
			this.host.requestUpdate();
		});
	}
	unsubscribeFromAll(element) {
		this.onFolderUpdate.delete(element.UUID);
		this.onSubfoldersUpdate.delete(element.UUID);
		this.onFilesUpdate.delete(element.UUID);
		this.onFileUpdate.delete(element.UUID);
		this.onGridUpdate.delete(element.UUID);
		this.onBreadcrumbUpdate.delete(element.UUID);
		this.onTree.delete(element.UUID);
		this.onUserFoldersUpdate.delete(element.UUID);
	}
	getRegistrySlug() {
		const items = [this.host.UUID];
		if (this.folder !== void 0) items.push(this.folder.path);
		if (this.file !== void 0) items.push(this.file.fileName);
		if (this.grid !== void 0) items.push("grid");
		return items.join("__");
	}
};

//#endregion
//#region src/connection/controllers/DisplayController.ts
let DisplayState = /* @__PURE__ */ function(DisplayState) {
	DisplayState[DisplayState["LOADING"] = 0] = "LOADING";
	DisplayState[DisplayState["ARBITRARY"] = 1] = "ARBITRARY";
	DisplayState[DisplayState["USER"] = 2] = "USER";
	DisplayState[DisplayState["FOLDER"] = 3] = "FOLDER";
	DisplayState[DisplayState["FILE"] = 4] = "FILE";
	DisplayState[DisplayState["LOGIN"] = 5] = "LOGIN";
	DisplayState[DisplayState["ERROR"] = 6] = "ERROR";
	return DisplayState;
}({});
/** Which way should we display list of folders? */
let FolderListDisplayMode = /* @__PURE__ */ function(FolderListDisplayMode) {
	/** Folders shall be displayed as table, one under another */
	FolderListDisplayMode["TABLE"] = "asTable";
	/** Folders shall be displayed as list of folders */
	FolderListDisplayMode["LIST"] = "asList";
	/** The files within subfolders shall be displayed in a grid */
	FolderListDisplayMode["GRID"] = "asGrid";
	return FolderListDisplayMode;
}({});
/** Which way should we display lists of files? */
let FileListDisplayMode = /* @__PURE__ */ function(FileListDisplayMode) {
	/** Files shall be displayed in a responsive grid, taking in consideration a predefined columns mode & compact mode */
	FileListDisplayMode["GRID"] = "asGrid";
	/** Files shall be displayed in a table, one under another */
	FileListDisplayMode["TABLE"] = "asTable";
	return FileListDisplayMode;
}({});
var DisplayController = class DisplayController extends AbstractConnectedController {
	static {
		this.LISTENER_ID = "DisplayController";
	}
	/** Identificator for current internals based on the current state 
	* - us updated upon navigation which might be change of the state or enforcing to load a specific folder / file / grid
	*/
	get slug() {
		return this._slug;
	}
	/** The content that is being used for various messages & stuff */
	get arbitraryContent() {
		return this._arbitraryContent;
	}
	/** The current state of the application - its main router */
	get appState() {
		return this.host.appState;
	}
	/** Which way should we display list of folders? The setting is in the host element */
	get folderListDisplayMode() {
		return this.host.folderListDisplayMode;
	}
	/** Which way should we display lists of files? The setting is in the host element */
	get fileDisplayMode() {
		return this.host.fileDisplayMode;
	}
	/** Are the displayed files in the list compact or not? */
	get fileDisplayCompact() {
		return this.host.fileDisplayCompact;
	}
	/** Whether tags are editable. The setting is in the host element. */
	get editTags() {
		return this.host.editTags;
	}
	/** Whether comments are displayed. The setting is in the host element. */
	get displayComments() {
		return this.host.displayComments;
	}
	constructor(host) {
		super();
		this._slug = "";
		this.onAppModeUpdate = new CallbacksManager();
		this.onFolderDisplayModeUpdate = new CallbacksManager();
		this.onFileDisplayModeUpdate = new CallbacksManager();
		this.onFileDisplayCompactUpdate = new CallbacksManager();
		this.onEditTagsUpdate = new CallbacksManager();
		this.onDisplayCommentsUpdate = new CallbacksManager();
		this.onNavigate = new CallbacksManager();
		this.onArbitraryContentUpdate = new CallbacksManager();
		this.onRecreateContext = new CallbacksManager();
		this.host = host;
		host.addController(this);
	}
	hostConnected() {
		this.host.client.onIdentity.set(DisplayController.LISTENER_ID, () => {
			this.reloadCurrentState().catch((error) => {
				this.log("Chyba při načítání po změně identity uživatele:", error);
			});
		});
		this.host.content.onError.set(DisplayController.LISTENER_ID, (error) => {
			console.log("Chyba při načítání obsahu:", error);
			this.navigateToErrorState(error);
		});
	}
	hostDisconnected() {}
	hostUpdate() {}
	hostUpdated() {}
	/** A callback that is necessary for any navigation calls. */
	refreshSlugOnNavigate() {
		this._slug = this.host.content.getRegistrySlug();
		this.onNavigate.call();
		this.onRecreateContext.call();
		this.host.requestUpdate();
	}
	navigateToLoadingState(whatIsLoading) {
		this.setArbitraryContent(whatIsLoading);
		this.setAppMode(DisplayState.LOADING);
	}
	async navigateToFolderAndLoad(targetFolderPath) {
		this.navigateToLoadingState("Načítám složku");
		try {
			this.host.content.dangerouslySetFileState(void 0);
			await this.host.content.fetchFolder(targetFolderPath);
			if (this.folderListDisplayMode === FolderListDisplayMode.GRID) if (this.canHaveGrid(this.host.content.subfolders)) {
				await this.host.content.fetchGridData(targetFolderPath);
				this.setAppMode(DisplayState.FOLDER);
				this.refreshSlugOnNavigate();
				return;
			} else this.setFolderListDisplayMode(FolderListDisplayMode.LIST);
			await this.host.content.fetchFiles(targetFolderPath);
			this.setAppMode(DisplayState.FOLDER);
		} catch (error) {
			this.navigateToErrorState(error.message);
		} finally {
			this.refreshSlugOnNavigate();
		}
	}
	async navigateToPreloadedFile(parentFolder, file) {
		this.log("Nastavuji se na soubor:", file);
		this.host.content.dangerouslySetFolder(parentFolder);
		this.host.content.dangerouslySetFileState(file);
		this.setAppMode(DisplayState.FILE);
		this.refreshSlugOnNavigate();
	}
	async navigateToFileAndLoad(targetFolderPath, targetFileName) {
		this.navigateToLoadingState("Načítám soubor");
		try {
			if (targetFolderPath !== this.host.content.folder?.path) await this.host.content.fetchFolder(targetFolderPath);
			await this.host.content.fetchFile(targetFolderPath, targetFileName);
			this.setAppMode(DisplayState.FILE);
		} catch (error) {
			this.navigateToErrorState(error.message);
		} finally {
			this.refreshSlugOnNavigate();
		}
	}
	async navigateToUserFoldersAndLoad() {
		this.setAppMode(DisplayState.USER);
		this.host.folderPath = void 0;
		this.host.fileName = void 0;
		this.refreshSlugOnNavigate();
	}
	async navigateToErrorState(errorContent) {
		this.setArbitraryContent(errorContent);
		this.setAppMode(DisplayState.ERROR);
	}
	navigateToLoginState() {
		this.setAppMode(DisplayState.LOGIN);
	}
	async navigateToFolderParentAndLoad(originalFolderPath) {
		/** @todo */
		const segments = originalFolderPath.split("/").filter((segment) => segment.length > 0);
		if (segments.length === 0) {
			await this.navigateToUserFoldersAndLoad();
			return;
		}
		segments.pop();
		const parentPath = "/" + segments.join("/");
		await this.navigateToFolderAndLoad(parentPath);
	}
	/** Will take the current parameters of the application, load it and set the required app state */
	async reloadCurrentState() {
		if (this.host.folderPath !== void 0 && this.host.fileName !== void 0) {
			/** Načítám složku i soubor */
			this.log("Načítám soubor a složku");
			await this.navigateToFileAndLoad(this.host.folderPath, this.host.fileName);
			return;
		} else if (this.host.folderPath !== void 0) {
			this.log("Načítám pouze složku");
			await this.navigateToFolderAndLoad(this.host.folderPath);
			return;
		}
		if (this.host.client.isLoggedIn) {
			this.log("Načítám uživatelovu složku");
			await this.navigateToUserFoldersAndLoad();
			return;
		}
		this.log("Mám tady toto");
		this.navigateToLoginState();
	}
	/** Setup initial values, trying to avoid any rerenders */
	initialiseWithoutUpdate(state, arbitraryContent) {
		if (state === this.host.appState) this.host.appState = state;
		this._arbitraryContent = arbitraryContent;
	}
	/** 
	* Setup the internal display mode state and triger all events
	*/
	setAppMode(mode) {
		if (mode !== this.host.appState) {
			this.host.appState = mode;
			this.onAppModeUpdate.call();
			this.host.requestUpdate();
		}
	}
	/** Setup the internal file display mode state */
	setFileListDisplayMode(mode) {
		if (mode !== this.host.fileDisplayMode) {
			this.host.fileDisplayMode = mode;
			this.onFileDisplayModeUpdate.call();
			this.host.requestUpdate();
		}
	}
	setFilesCompact(value) {
		this.log("Nastavuji compact na", value, "z", this.host.fileDisplayCompact);
		if (value !== this.host.fileDisplayCompact) {
			this.host.fileDisplayCompact = value;
			this.onFileDisplayCompactUpdate.call();
			this.host.requestUpdate();
		}
	}
	setEditTags(value) {
		if (this.host.editTags !== value) {
			this.host.editTags = value;
			this.onEditTagsUpdate.call();
			this.host.requestUpdate();
		}
	}
	setDisplayComments(value) {
		if (this.host.displayComments !== value) {
			this.host.displayComments = value;
			this.onDisplayCommentsUpdate.call();
			this.host.requestUpdate();
		}
	}
	/** Public display internal  folder display setter */
	setFolderListDisplayMode(mode) {
		if (mode !== this.host.folderListDisplayMode) {
			this.host.folderListDisplayMode = mode;
			this.onFolderDisplayModeUpdate.call();
			if (mode === FolderListDisplayMode.GRID && this.host.folderPath) {
				this.host.content.fetchGridData(this.host.folderPath);
				this.onRecreateContext.call();
			} else this.host.content.dangerouslySetGridState(void 0);
			this.host.requestUpdate();
		}
	}
	setArbitraryContent(content) {
		this._arbitraryContent = content;
		this.onArbitraryContentUpdate.call();
		this.host.requestUpdate();
	}
	/** The given element will request update whenever the app mode changes */
	subscribeToAppMode(element) {
		this.onAppModeUpdate.set(element.getUUID(DisplayController.LISTENER_ID), () => {
			element.requestUpdate();
		});
	}
	/** The given element will request update whenever the folder display mode changes */
	subscribeToFolderDisplayMode(element) {
		this.onFolderDisplayModeUpdate.set(element.getUUID(DisplayController.LISTENER_ID), () => {
			element.requestUpdate();
		});
	}
	/** The given element will request update whenever the file display mode changes */
	subscribeToFileDisplayMode(element) {
		this.onFileDisplayModeUpdate.set(element.getUUID(DisplayController.LISTENER_ID), () => {
			element.requestUpdate();
		});
	}
	subscribeToEditTags(element) {
		this.onEditTagsUpdate.set(element.getUUID(DisplayController.LISTENER_ID), () => {
			element.requestUpdate();
		});
	}
	subscribeToDisplayComments(element) {
		this.onDisplayCommentsUpdate.set(element.getUUID(DisplayController.LISTENER_ID), () => {
			element.requestUpdate();
		});
	}
	subscribeToDisplayCompact(element) {
		this.onFileDisplayCompactUpdate.set(element.getUUID(DisplayController.LISTENER_ID), () => {
			element.requestUpdate();
		});
	}
	subscribeToNavigate(element, callback) {
		this.onNavigate.set(element.getUUID(DisplayController.LISTENER_ID), () => {
			callback?.();
		});
	}
	subscribeOnRecrteateContext(element, callback) {
		this.onRecreateContext.set(element.getUUID(DisplayController.LISTENER_ID), () => {
			callback();
		});
	}
	/** Unsubscribe the element from all display mode changes */
	unsubscribeFromAll(element) {
		const UUID = element.getUUID(DisplayController.LISTENER_ID);
		this.onAppModeUpdate.delete(UUID);
		this.onFolderDisplayModeUpdate.delete(UUID);
		this.onFileDisplayModeUpdate.delete(UUID);
		this.onFileDisplayCompactUpdate.delete(UUID);
		this.onEditTagsUpdate.delete(UUID);
		this.onDisplayCommentsUpdate.delete(UUID);
		this.onNavigate.delete(UUID);
		this.onRecreateContext.delete(UUID);
	}
	/** 
	* Can the current folder have a grid display?
	* - only if the subfolders have sime lrc files
	*/
	canHaveGrid(subfolders) {
		return subfolders.filter((f) => f.lrc_count > 0).length > 1;
	}
	/** 
	* Is the current user allowed to edit the given folder?
	* - only when they may manage folders or files in it
	*/
	canEditFolder(folder) {
		return folder.may_manage_folders_in || folder.may_manage_files_in;
	}
	/** Is the user allowed to delete the folder?
	* - roots can delete everything
	* - other users can delete the folder only if they may manage folders in it AND the folder can contain files
	*/
	canDeleteFolder(folder) {
		if (this.host.client.isRoot) return true;
		return folder.may_manage_files_in;
	}
	/** Is the user allowed to edit or upload files in the given folder? */
	canEditOrUploadFiles(folder) {
		return folder.may_manage_files_in;
	}
	/** 
	* Is the user allowed to display comments at all?
	* - roots can allways
	* - logged in users can allways
	*/
	canTurnOnComments() {
		if (this.host.client.isRoot) return true;
		return this.host.client.isLoggedIn;
	}
	/** Is the user allowed to turn on the tags editing? 
	* - anonymous can not
	* - root can edit everything
	* - logged in users can edit only if they may manage files in the folder
	*/
	canTurnOnTagsEditing(folder) {
		if (this.host.client.isLoggedIn === false) return false;
		if (this.host.client.isRoot) return true;
		return folder.may_manage_files_in;
	}
};

//#endregion
//#region src/connection/controllers/apps/directives/layout/AbstractLayoutDirective.ts
var AbstractLayoutDirective = class extends AbstractConnectedDirective {
	static {
		this.styles = css`

        .cLayout__header {
            display: flex;
            flex-direction: column;
            gap: .5em;
        }

        .cLayout__content {
            
            width: 100%;
            position: relative;
            padding-top: .5em;

            &.cLayout__content--with-toolbar {
                display: grid;
                grid-template-columns: 2em 1fr;
                gap: 1em;
            }

        }

        .clayout__content__toolbar {
            position: relative;
            & > * {
                position: sticky;
                top: 0px;
            }
        }

        .clayout__content__inner {
            width: 100%;
            display: grid;
            gap: 1em;
            position: relative;
        }

        .cLayout__user_folders_list {
            display: flex;
            flex-direction: column;
            gap: .5em;
        }

        .cLayout--user_folders {

            margin-top: 1em;
        
            display: grid;
            gap: 1em;

            grid-template-columns: 1fr 200px;
            grid-template-rows: auto;

            dl {
                dt {
                    
                }
                dd {
                    margin-left: 0;
                    font-weight: bold;
                    margin-bottom: 1em;
                }
            }

            h2,
            dt {
                margin-bottom: .25em;
                font-size: .8em;
                color: var(--thermal-slate-dark);
                text-transform: uppercase;
                font-weight: normal;
            }
        
        }
    
    `;
	}
	renderBreadcrumb(app) {
		return html`<connected-breadcrumb 
            slot="pre"
            .onFolderClick=${(folder) => app.display.navigateToFolderAndLoad(folder.path)}
            .onUserClick=${() => app.display.navigateToUserFoldersAndLoad()}
        ></connected-breadcrumb>`;
	}
	renderHeader(content) {
		return html`<header class="cLayout__header" slot="pre">${content}</header>`;
	}
	renderContent(hasToolbar = false, gridTemplateColumns, classes, content) {
		return html`<div class="cLayout__content ${hasToolbar ? "cLayout__content--with-toolbar" : ""}">
            ${hasToolbar ? html`<div class="clayout__content__toolbar" >
                    <manager-tool-bar></manager-tool-bar>
                </div>` : nothing}
            <div class="clayout__content__inner ${classes}" style="grid-template-columns: ${gridTemplateColumns}">
                ${content}
            </div>
        </div>`;
	}
	renderThermalScaleSlot() {
		return html`<thermal-slot
            label=${this.t("thermalscale")}
        >
            <manager-palette-dropdown></manager-palette-dropdown>
            <registry-range-form></registry-range-form>
        </thermal-slot>`;
	}
	renderLoading(message) {
		return html`<thermal-poster
            .message=${message}
        ></thermal-poster>`;
	}
	renderError(message) {
		return html`<thermal-poster
            .message=${message}
            icon="warning"
            iconStyle="outline"
            .loading=${false}
        ></thermal-poster>`;
	}
};

//#endregion
//#region src/connection/controllers/FileSelectionController.ts
/** Controls the selection inside the current app*/
var FileSelectionController = class {
	/** Dynamically converted upon every call - created from the _selectedFiles Set */
	get array() {
		return Array.from(this._selectedFiles);
	}
	constructor(host) {
		this._selectedFiles = [];
		this._onSelectionChange = new CallbacksManager();
		this.host = host;
		this.UUID = host.UUID + "__file_selection_controller";
		this.host.addController(this);
	}
	hostConnected() {
		this.host.display.onNavigate.add(this.UUID, () => {
			this.clearSelection();
		});
	}
	hostDisconnected() {}
	hostUpdate() {}
	hostUpdated() {}
	/**
	* Iterate over every selected file synchronously
	*/
	forEverySelectedSync(callback) {
		this._selectedFiles.forEach((file) => {
			callback(file);
		});
	}
	/**
	* Iterate over every selected file asynchronously using `Promise.all()s`
	*/
	async forEverySelectedAsync(callback) {
		const promises = this._selectedFiles.map((file) => {
			return callback(file);
		});
		await Promise.all(promises);
	}
	/**
	* Clear the current selection
	*/
	clearSelection() {
		if (this._selectedFiles.length === 0) return;
		this._selectedFiles = [];
		this._onSelectionChange.call(this._selectedFiles);
		this.host.requestUpdate();
	}
	/** 
	* Add a file to the current selection 
	* @return boolean Whether the file was added
	*/
	addToSelection(file) {
		if (!this._selectedFiles.includes(file)) {
			this._selectedFiles.push(file);
			this._onSelectionChange.call(this._selectedFiles);
			this.host.requestUpdate();
			return true;
		}
		return false;
	}
	addMultipleToSelection(files) {
		let hasChanged = false;
		files.forEach((file) => {
			if (!this._selectedFiles.includes(file)) {
				this._selectedFiles.push(file);
				hasChanged = true;
			}
		});
		if (hasChanged) {
			this._onSelectionChange.call(this._selectedFiles);
			this.host.requestUpdate();
		}
	}
	/**
	* Remove the file from the current selection
	* @return boolean Whether the file was removed
	*/
	removeFromSelection(file) {
		if (this._selectedFiles.includes(file)) {
			this._selectedFiles = this._selectedFiles.filter((f) => f !== file);
			this._onSelectionChange.call(this._selectedFiles);
			this.host.requestUpdate();
			return true;
		}
		return false;
	}
	/** 
	* Rerender the provided element whenever the selection changes 
	*/
	subscribeToSelectionChange(element) {
		console.log(element);
		this._onSelectionChange.add(element.UUID, () => {
			element.requestUpdate();
		});
	}
	fileIsSelected(file) {
		return this._selectedFiles.includes(file);
	}
	getSelectedFiles() {
		return this._selectedFiles;
	}
};

//#endregion
//#region src/connection/controllers/FolderSelectionController.ts
/** Controls the selection inside the current app*/
var FolderSelectionController = class {
	/** Dynamically converted upon every call - created from the _selectedFiles Set */
	get array() {
		return Array.from(this._selectedFolders);
	}
	constructor(host) {
		this._selectedFolders = [];
		this._onSelectionChange = new CallbacksManager();
		this.host = host;
		this.UUID = host.UUID + "__folder_selection_controller";
		this.host.addController(this);
	}
	hostConnected() {
		this.host.display.onNavigate.add(this.UUID, () => {
			this.clearSelection();
		});
	}
	hostDisconnected() {}
	hostUpdate() {}
	hostUpdated() {}
	/**
	* Iterate over every selected file synchronously
	*/
	forEverySelectedSync(callback) {
		this._selectedFolders.forEach((folder) => {
			callback(folder);
		});
	}
	/**
	* Iterate over every selected file asynchronously using `Promise.all()s`
	*/
	async forEverySelectedAsync(callback) {
		const promises = this._selectedFolders.map((folder) => {
			return callback(folder);
		});
		await Promise.all(promises);
	}
	/**
	* Clear the current selection
	*/
	clearSelection() {
		if (this._selectedFolders.length === 0) return;
		this._selectedFolders = [];
		this._onSelectionChange.call(this._selectedFolders);
		this.host.requestUpdate();
	}
	/** 
	* Add a file to the current selection 
	* @return boolean Whether the file was added
	*/
	addToSelection(folder) {
		if (!this._selectedFolders.includes(folder)) {
			this._selectedFolders.push(folder);
			this._onSelectionChange.call(this._selectedFolders);
			this.host.requestUpdate();
			return true;
		}
		return false;
	}
	addMultipleToSelection(folders) {
		let hasChanged = false;
		folders.forEach((folder) => {
			if (!this._selectedFolders.includes(folder)) {
				this._selectedFolders.push(folder);
				hasChanged = true;
			}
		});
		if (hasChanged) {
			this._onSelectionChange.call(this._selectedFolders);
			this.host.requestUpdate();
		}
	}
	/**
	* Remove the folder from the current selection
	* @return boolean Whether the folder was removed
	*/
	removeFromSelection(folder) {
		if (this._selectedFolders.includes(folder)) {
			this._selectedFolders = this._selectedFolders.filter((f) => f !== folder);
			this._onSelectionChange.call(this._selectedFolders);
			this.host.requestUpdate();
			return true;
		}
		return false;
	}
	/** 
	* Rerender the provided element whenever the selection changes 
	*/
	subscribeToSelectionChange(element) {
		this._onSelectionChange.add(element.UUID, () => {
			element.requestUpdate();
		});
	}
	folderIsSelected(folder) {
		return this._selectedFolders.includes(folder);
	}
	getSelectedFiles() {
		return this._selectedFolders;
	}
};

//#endregion
//#region src/connection/controllers/abstraction/ConnectedAppBase.ts
var AbstractConnectedApp = class AbstractConnectedApp extends BaseAppWithPngExportContext {
	constructor(..._args) {
		super(..._args);
		this.client = new ClientController(this);
		this.content = new ContentController(this);
		this.display = new DisplayController(this);
		this.fileSelection = new FileSelectionController(this);
		this.folderSelection = new FolderSelectionController(this);
		this.folderListDisplayMode = FolderListDisplayMode.LIST;
		this.fileDisplayMode = FileListDisplayMode.GRID;
		this.fileDisplayCompact = false;
		this.editTags = false;
		this.displayComments = false;
		this.appState = DisplayState.LOADING;
		this._handleFullscreenChange = () => {
			if (!document.fullscreenElement && this.classList.contains("fullscreen")) this.classList.remove("fullscreen");
		};
	}
	static {
		this.INITIALISATION_LISTENER = "connected-app-initialisation";
	}
	static {
		this.STATES_WITH_REGISTRY = [DisplayState.FOLDER, DisplayState.FILE];
	}
	/**
	* Should we render the Registry provider around the content?
	*/
	get hasRegistryProvider() {
		return AbstractConnectedApp.STATES_WITH_REGISTRY.includes(this.appState);
	}
	/**
	* Should we render the Group provider around the content?
	*/
	get hasGroupProvider() {
		if (this.appState === DisplayState.FILE || this.appState === DisplayState.FOLDER && this.folderListDisplayMode !== FolderListDisplayMode.GRID) return true;
		return false;
	}
	static {
		this.styles = css`
    
        :host {
            display: block;
            width: 100%;
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);
        }

        ${AbstractLayoutDirective.styles}

        .inspector {
            display: grid;
            grid-template-columns: 2em 1fr;
            grid-template-rows: auto;
            gap: var(--thermal-gap);
            width: 100%;
        }

        .inspector__tools {

            manager-tool-bar {
                position: sticky;
                top: 0px;
                z-index: 99;
            }

        }

        :host(.fullscreen) {
        
            thermal-app {
                display: block;
                height: 100vh;
                overflow: auto;
                
            
            }

        }
    
    `;
	}
	connectedCallback() {
		if (this.serverUrl === void 0 || this.serverUrl.length === 0) throw new Error("The 'server-url' attribute is required but was not provided.");
		this.apiClient = new Client(this.serverUrl, this.serverApiRoot);
		super.connectedCallback();
		document.addEventListener("fullscreenchange", this._handleFullscreenChange);
		/** This is very important - call this before the client is ready */
		this.setupInitialStateBeforeClientIsRead();
		this.client.onReadyForContentRequests.add(AbstractConnectedApp.INITIALISATION_LISTENER, async () => {
			this.log("Client is ready for content requests, now initialise the app content");
			await this.initialiseContentAfterClientReady();
			this.log("The content is now ready");
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		document.removeEventListener("fullscreenchange", this._handleFullscreenChange);
	}
	toggleFullscreen() {
		if (this.classList.contains("fullscreen")) {
			this.classList.remove("fullscreen");
			document.exitFullscreen();
		} else {
			this.requestFullscreen();
			this.classList.add("fullscreen");
		}
	}
	/**
	* Renders the app wrapped in all necessary providers of internal context
	*/
	renderAppWithInternals(innerContent) {
		const shareDialog = html`<connected-share-dialog slot="close"></connected-share-dialog>`;
		const userLoginButton = this.display.appState !== DisplayState.LOGIN ? html`<connected-user-button slot="close"></connected-user-button>` : nothing;
		const settingsButton = [DisplayState.FOLDER, DisplayState.FILE].includes(this.display.appState) ? html`<thermal-dialog
                label="Nastavení aplikace"
                slot="close"
            >
                <thermal-btn 
                    slot="invoker"
                    icon="settings"
                    iconStyle="solid"
                    tooltip=${this.t("config")}
                ></thermal-btn>

                <div slot="content">
                    <manager-export-panel></manager-export-panel>
                    <registry-display-panel></registry-display-panel>
                </div>
            </thermal-dialog>` : nothing;
		const thermalApp = html`<thermal-app
            label=${ifDefined(this.label)}
            labelTooltip=${ifDefined(this.labelTooltip)}
            labelIcon=${ifDefined(this.labelIcon)}
            labelIconStyle=${ifDefined(this.labelIconStyle)}
            labelVariant=${ifDefined(this.labelVariant)}
        >

            ${shareDialog}

            <thermal-btn 
                slot="close" 
                icon="reload"
                iconStyle="micro"
                tooltip="Reload the current view"
                @click=${() => {
			this.display.reloadCurrentState();
		}}
            ></thermal-btn>

            ${userLoginButton}

            ${settingsButton}

            ${cache(html`<thermal-btn
                slot="close"
                icon="bigger"
                iconStyle="mini"
                @click=${() => {
			this.toggleFullscreen();
		}}
            ></thermal-btn>`)}

            <slot name="pre" slot="pre"></slot>

            <slot name="before-content"></slot>

            ${innerContent}
            
            <slot name="after-content"></slot>

        </thermal-app>`;
		const fileBlock = this.content.file !== void 0 && this.content.file.url !== void 0 ? html`
                <file-provider
                    thermal=${this.content.file.url}
                    visual=${ifDefined(this.content.file.visual)}
                    batch="true"
                    autoclear="true"
                    analysis1=${ifDefined(this.content.file.analyses[0])}
                    analysis2=${ifDefined(this.content.file.analyses[1])}
                    analysis3=${ifDefined(this.content.file.analyses[2])}
                    analysis4=${ifDefined(this.content.file.analyses[3])}
                    analysis5=${ifDefined(this.content.file.analyses[4])}
                    analysis6=${ifDefined(this.content.file.analyses[5])}
                    analysis7=${ifDefined(this.content.file.analyses[6])}
                    style="display: contents;"
                >
                    ${thermalApp}
                </file-provider>
            ` : thermalApp;
		const groupBlock = this.hasGroupProvider ? html`
                <group-provider
                    slug=${this.display.slug}
                    batch="true"
                    autoclear="true"
                    style="display: contents;"
                >
                    ${fileBlock}
                </group-provider>
            ` : fileBlock;
		const registryBlock = this.hasRegistryProvider ? html`
                <registry-provider
                    slug=${this.display.slug}
                    autoclear="true"
                    from=${ifDefined(this.from)}
                    to=${ifDefined(this.to)}
                    style="display: contents;"
                >
                    ${groupBlock}
                </registry-provider>
            ` : groupBlock;
		return html`
        <manager-provider
            slug=${this.UUID}
            palette=${ifDefined(this.palette)}
            style="display: contents;"
        >
            ${registryBlock}
        </manager-provider>`;
	}
	/**
	* Renders the inspector layout with header, content and tools 
	* @returns 
	*/
	renderBrowserLayout(header, content) {
		return html`

        <!-- Draw the header content into the various slots -->
        ${header}

        <div slot="pre">
            <registry-histogram expandable="true"></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
        </div>
        
        <!-- The inspector goes to the content slot of the thermal-app -->
        <main class="inspector">

            <section class="inspector__tools">
                <manager-tool-bar></manager-tool-bar>
            </section>
            
            <section class="inspector__content">
                ${content}
            </section>
        </main>`;
	}
	/** Checks whether a given template output is not empty */
	unknownIsNotEmpty(value) {
		if (value === nothing || value === void 0 || value === null) return false;
		if (typeof value === "string" && value.trim().length === 0) return false;
		if (Array.isArray(value) && value.length > 0) return !value.some((item) => this.unknownIsNotEmpty(item));
		return true;
	}
	wrapContentIfNotEmpty(content, classes) {
		if (!this.unknownIsNotEmpty(content)) return nothing;
		return html`<div class=${classes}>
            ${content}
        </div>`;
	}
};
__decorate([state()], AbstractConnectedApp.prototype, "apiClient", void 0);
__decorate([provide({ context: ControlledClientContext })], AbstractConnectedApp.prototype, "client", void 0);
__decorate([provide({ context: ControlledContentContext })], AbstractConnectedApp.prototype, "content", void 0);
__decorate([provide({ context: DisplayControllerContext })], AbstractConnectedApp.prototype, "display", void 0);
__decorate([provide({ context: FileSelectionControllerContext })], AbstractConnectedApp.prototype, "fileSelection", void 0);
__decorate([provide({ context: FolderSelectionControllerContext })], AbstractConnectedApp.prototype, "folderSelection", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: "selected-files"
})], AbstractConnectedApp.prototype, "selectedFiles", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: "server-url"
})], AbstractConnectedApp.prototype, "serverUrl", void 0);
__decorate([property({
	type: String,
	attribute: "server-api-root"
})], AbstractConnectedApp.prototype, "serverApiRoot", void 0);
__decorate([property({
	type: String,
	attribute: "auth-url"
})], AbstractConnectedApp.prototype, "authUrl", void 0);
__decorate([property({
	type: String,
	attribute: "auth-token"
})], AbstractConnectedApp.prototype, "authToken", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: "folder-path"
})], AbstractConnectedApp.prototype, "folderPath", void 0);
__decorate([property({
	type: String,
	attribute: "file-name",
	reflect: true
})], AbstractConnectedApp.prototype, "fileName", void 0);
__decorate([property({
	type: String,
	attribute: "palette",
	reflect: true
})], AbstractConnectedApp.prototype, "palette", void 0);
__decorate([property({
	type: Number,
	attribute: "from",
	reflect: true
})], AbstractConnectedApp.prototype, "from", void 0);
__decorate([property({
	type: Number,
	attribute: "to",
	reflect: true
})], AbstractConnectedApp.prototype, "to", void 0);
__decorate([property({
	type: String,
	attribute: "folder-display",
	reflect: true
})], AbstractConnectedApp.prototype, "folderListDisplayMode", void 0);
__decorate([property({
	type: String,
	attribute: "files-display",
	reflect: true
})], AbstractConnectedApp.prototype, "fileDisplayMode", void 0);
__decorate([property({
	type: Boolean,
	attribute: "files-compact",
	reflect: true,
	converter: booleanConverter(false)
})], AbstractConnectedApp.prototype, "fileDisplayCompact", void 0);
__decorate([property({
	type: Boolean,
	attribute: "edit-tags",
	converter: booleanConverter(false),
	reflect: true
})], AbstractConnectedApp.prototype, "editTags", void 0);
__decorate([property({
	type: Boolean,
	attribute: "display-comments",
	converter: booleanConverter(true),
	reflect: true
})], AbstractConnectedApp.prototype, "displayComments", void 0);
__decorate([state()], AbstractConnectedApp.prototype, "appState", void 0);
__decorate([property({
	type: String,
	attribute: "label",
	reflect: true
})], AbstractConnectedApp.prototype, "label", void 0);
__decorate([property({
	type: String,
	attribute: "label-tooltip",
	reflect: true
})], AbstractConnectedApp.prototype, "labelTooltip", void 0);
__decorate([property({
	type: String,
	attribute: "label-icon",
	reflect: true
})], AbstractConnectedApp.prototype, "labelIcon", void 0);
__decorate([property({
	type: String,
	attribute: "label-icon-style",
	reflect: true
})], AbstractConnectedApp.prototype, "labelIconStyle", void 0);
__decorate([property({
	type: String,
	attribute: "label-variant",
	reflect: true
})], AbstractConnectedApp.prototype, "labelVariant", void 0);

//#endregion
//#region src/connection/controllers/apps/directives/layout/ConnectedFileDetailDirective.ts
var ConnectedFileDetail = class extends AbstractLayoutDirective {
	renderFileHeaderFileSlot(app) {
		if (app.content.folder === void 0) return nothing;
		const fileOperations = [];
		if (app.content.folder.may_manage_files_in) {
			fileOperations.push(html`<connected-file-edit-dialog
                .file=${app.content.file}
                variant="primary"
                size="md"
                .label=${void 0}
            ></connected-file-edit-dialog>`);
			fileOperations.push(html`<connected-file-move-dialog .file=${app.content.file}></connected-file-move-dialog>`);
			fileOperations.push(html`<connected-file-delete-dialog
                .file=${app.content.file}
                .folder=${app.content.folder}
                size="md"
                .label=${void 0}
                ></connected-file-delete-dialog>`);
		}
		fileOperations.push(html`<file-info-button></file-info-button>`);
		fileOperations.push(html`<file-download-dropdown></file-download-dropdown>`);
		return slotOrNothing("file", fileOperations);
	}
	renderFileHeader(app) {
		const slots = [this.renderFileHeaderFileSlot(app), slotOrNothing("thermalscale", html`<manager-palette-dropdown></manager-palette-dropdown>
                <registry-range-form></registry-range-form>`)];
		const display = [];
		if (app.content.folder && DirectiveHelpers.userMayEditFile(app.client, app.content.folder)) display.push(html`<connected-config-file-content-mode></connected-config-file-content-mode>`);
		display.push(html`<registry-opacity-slider></registry-opacity-slider>`);
		slots.push(slotOrNothing("display", display));
		slots.push(html`<connected-file-analysis-buttons .info=${app.content.file}></connected-file-analysis-buttons>`);
		{
			const tags = slotOrNothing("edit", html`<connected-file-tags
                .file=${app.content.file}
                .folder=${app.content.folder}
                editable=${app.display.editTags ? "true" : "false"}
                inline=${true}
                size="sm"
            ></connected-file-tags>`);
			slots.push(tags);
		}
		return this.renderHeader([
			this.renderBreadcrumb(app),
			html`<connected-folder-header
                .onParentClick=${(folder) => app.display.navigateToFolderAndLoad(folder.path)}
            ></connected-folder-header>`,
			html`<connected-file-header>
                ${slots}
            </connected-file-header>`
		]);
	}
	renderFileDetailContent(app) {
		const content = [html`<div>
                <registry-histogram expandable="true"></registry-histogram>
                <registry-range-slider></registry-range-slider>
                <registry-ticks-bar></registry-ticks-bar>
                <file-canvas></file-canvas>
                <file-timeline></file-timeline>
            </div>`, html`<div>
                <file-analysis-complex></file-analysis-complex>
            </div>`];
		let gridTemplateColumns = "1fr 1fr";
		if (app.display.displayComments) {
			gridTemplateColumns = "1fr 1fr 200px";
			content.push(html`<div>
                <connected-file-comments
                    .file=${app.content.file}
                    .folder=${app.content.folder}
                ></connected-file-comments>
            </div>`);
		}
		return this.renderContent(true, gridTemplateColumns, void 0, content);
	}
	render(app) {
		if (app.content.folder === void 0 || app.content.file === void 0) return this.renderLoading("Loading file details...");
		return [this.renderFileHeader(app), this.renderFileDetailContent(app)];
	}
};
const connectedFileDetail = directive(ConnectedFileDetail);

//#endregion
//#region src/connection/controllers/apps/directives/layout/AbstractFolderLayoutDirective.ts
var AbstractFolderLayoutDirective = class extends AbstractLayoutDirective {
	renderFolderContentStatsSlot(app) {
		return slotOrNothing("content", html`<connected-folder-content-mode-switch></connected-folder-content-mode-switch>`);
	}
	renderDisplaySlot(app) {
		return slotOrNothing("display", html`<connected-config-subfolder-mode></connected-config-subfolder-mode>`);
	}
	renderHeaderFolderSlot(app) {
		if (!app.content.folder) return nothing;
		const actions = [];
		const mayEdit = DirectiveHelpers.userMayEditFolder(app.client, app.content.folder);
		const mayDelete = DirectiveHelpers.userMayDeleteFolder(app.client, app.content.folder, app.content.subfolders, app.content.files);
		const deleteLabel = mayDelete ? this.t("deletefolder") : "Složku je možno smazat jen, když je prázdná";
		if (mayEdit) {
			if (!app.content.folder.may_have_files) actions.push(html`<connected-folder-create-dialog
                    .folder=${app.content.folder}
                    icon="addfolder"
                    iconStyle="micro"
                    variant="primary"
                    tooltip="Vytvořit podsložku"
                    label="Vytvořit podsložku"
                    .onSuccess=${() => app.display.reloadCurrentState()}
                ></connected-folder-create-dialog>`);
			else actions.push(html`<thermal-btn
                    variant="primary"
                    icon="upload"
                    iconStyle="micro"
                    @click=${() => this.scrollToUploadForm(app)}
                >Nahrát soubor</thermal-btn>`);
			actions.push(html`<connected-folder-edit-dialog
                .folder=${app.content.folder}
                icon="edit"
                iconStyle="micro"
                .onSuccess=${(folder) => app.content.updateFolderState(folder)}
                .tooltip=${this.t("editfolder")}
            ></connected-folder-edit-dialog>`);
			actions.push(html`<connected-folder-move-dialog
                .folder=${app.content.folder}
            ></connected-folder-move-dialog>`);
			actions.push(html`<connected-folder-delete-dialog
                .folder=${app.content.folder}
                icon="trash"
                iconStyle="micro"
                .onSuccess=${() => app.display.navigateToFolderParentAndLoad(app.content.folder.path)}
                .disabled=${!mayDelete}
                .tooltip=${deleteLabel}
            ></connected-folder-delete-dialog>`);
		}
		if (app.content.files && app.content.files.length > 0) actions.push(html`<group-download-dropdown></group-download-dropdown>`);
		return slotOrNothing("folder", actions);
	}
	/**
	* Scrolls the first upload form into view using a smooth animation.
	* The form is positioned in the middle of the viewport so that a
	* sticky header doesn't cover it.
	*/
	scrollToUploadForm(app) {
		let form = app.renderRoot?.querySelector("connected-upload-form");
		if (!form) form = document.querySelector("connected-upload-form");
		if (form) {
			form.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
			form.highlight(3e3);
		} else console.warn("scrollToUploadForm: no upload form found");
	}
};

//#endregion
//#region src/connection/controllers/apps/directives/layout/ConnectedFolderFilesDirective.ts
var ConnectedFolderFilesDirective = class extends AbstractFolderLayoutDirective {
	renderDisplaySlot(app) {
		if (!DirectiveHelpers.folderContainsFiles(app.content.folder, app.content.files || [])) return nothing;
		const content = [html`<connected-config-file-display-mode></connected-config-file-display-mode>`, html`<connected-config-file-content-mode></connected-config-file-content-mode>`];
		content.push(html`<registry-opacity-slider></registry-opacity-slider>`);
		return slotOrNothing("display", content);
	}
	renderFolderHeader(app) {
		if (!app.content.folder) return nothing;
		const hasFiles = DirectiveHelpers.folderContainsFiles(app.content.folder, app.content.files || []);
		const slots = [this.renderFolderContentStatsSlot(app), this.renderHeaderFolderSlot(app)];
		if (hasFiles) slots.push(this.renderThermalScaleSlot());
		slots.push(this.renderDisplaySlot(app));
		if (app.fileSelection.array.length > 0) slots.push(slotOrNothing("file", html`<connected-file-selection-actions></connected-file-selection-actions>`));
		const content = [this.renderBreadcrumb(app), html`<connected-folder-header
                .onParentClick=${(folder) => {
			app.display.navigateToFolderAndLoad(folder.path);
		}}
            >
                ${slots}
            </connected-folder-header>`];
		if (hasFiles) content.push(this.renderThermalScale());
		return this.renderHeader(content);
	}
	renderFileList(app) {
		const hasFiles = DirectiveHelpers.folderContainsFiles(app.content.folder, app.content.files || []);
		if (!hasFiles) {}
		const mayUpload = DirectiveHelpers.userMayEditFile(app.client, app.content.folder);
		const content = [];
		if (hasFiles) content.push(html`<connected-file-list
                compact=${app.display.fileDisplayCompact}
                display-mode=${app.display.fileDisplayMode}
                editable-tags=${app.display.editTags}
                show-discussion=${app.display.displayComments}
                
                .onFileClick=${(file) => app.display.navigateToFileAndLoad(file.path, file.fileName)}
            ></connected-file-list>`);
		if (mayUpload) content.push(html`<connected-upload-form
                .folder=${app.content.folder}
                .onSuccess=${() => app.display.reloadCurrentState()}
            ></connected-upload-form>`);
		return this.renderContent(hasFiles, "100%", void 0, html`<div style="width: 100%; display: flex; flex-direction: column; gap: 1em;">${content}</div>`);
	}
	render(app) {
		if (app.client.isLoading) return nothing;
		return [this.renderFolderHeader(app), this.renderFileList(app)];
	}
};
const connectedFolderFiles = directive(ConnectedFolderFilesDirective);

//#endregion
//#region src/connection/controllers/apps/directives/layout/ConnectedFolderGridDirective.ts
var ConnectedFolderGridDirective = class extends AbstractFolderLayoutDirective {
	renderDisplaySlot(app) {
		if (!DirectiveHelpers.folderContainsFiles(app.content.folder, app.content.files || [])) {}
		const content = [html`<connected-config-file-display-mode></connected-config-file-display-mode>`];
		content.push(html`<registry-opacity-slider></registry-opacity-slider>`);
		return slotOrNothing("display", content);
	}
	renderFolderHeader(app) {
		if (!app.content.folder) return nothing;
		const content = [html`<connected-folder-header
                .onParentClick=${(folder) => {
			app.display.navigateToFolderAndLoad(folder.path);
		}}
            >
            ${[
			this.renderHeaderFolderSlot(app),
			slotOrNothing("display", html`<connected-config-subfolder-mode></connected-config-subfolder-mode>
                <registry-opacity-slider></registry-opacity-slider>`),
			this.renderThermalScaleSlot()
		]}
        </connected-folder-header>`, this.renderThermalScale()];
		return this.renderHeader(content);
	}
	renderGrid(app) {
		const content = [html`<connected-subfolders-grid
            .onFolderClick=${(folder) => {
			app.display.navigateToFolderAndLoad(folder.path);
		}}
            .onFileClick=${(folder, file) => {
			app.display.navigateToFileAndLoad(folder.path, file.fileName);
		}}
            .onChange=${() => {
			app.display.reloadCurrentState();
		}}
            .folders=${app.content.grid || []}
        ></connected-subfolders-grid>`];
		return this.renderContent(true, "100%", void 0, content);
	}
	render(app) {
		const content = [];
		if (app.content.grid === void 0) {
			content.push(this.renderLoading("Načítám mřížku..."));
			return content;
		}
		content.push(this.renderBreadcrumb(app), this.renderFolderHeader(app), this.renderGrid(app));
		return content;
	}
};
const connectedFolderGrid = directive(ConnectedFolderGridDirective);

//#endregion
//#region src/connection/controllers/apps/directives/layout/ConnectedFolderSubfoldersDirective.ts
var ConnectedFolderSubfoldersDirective = class extends AbstractFolderLayoutDirective {
	renderSelectionSlot(app) {
		if (app.folderSelection.array.length === 0) return nothing;
		return slotOrNothing("edit", html`<connected-folder-selection-actions></connected-folder-selection-actions>`);
	}
	renderFolderHeader(app) {
		if (!app.content.folder) return nothing;
		const slots = [
			this.renderFolderContentStatsSlot(app),
			this.renderHeaderFolderSlot(app),
			this.renderDisplaySlot(app),
			this.renderSelectionSlot(app)
		];
		const content = [this.renderBreadcrumb(app), html`<connected-folder-header
                .onParentClick=${(folder) => {
			app.display.navigateToFolderAndLoad(folder.path);
		}}
            >
                ${slots}
            </connected-folder-header>`];
		return this.renderHeader(content);
	}
	renderSubfolders(app) {
		if (app.content.folder === void 0) return nothing;
		const cont = [];
		if (app.content.subfolders && app.content.subfolders.length > 0) cont.push(html`<connected-subfolder-list
                .onFolderClick=${(folder) => app.display.navigateToFolderAndLoad(folder.path)}
                folder-mode=${app.display.folderListDisplayMode}
            ></connected-subfolder-list>`);
		return this.renderContent(false, "100%", void 0, cont);
	}
	render(app) {
		if (app.client.isLoading) return nothing;
		return [this.renderFolderHeader(app), this.renderSubfolders(app)];
	}
};
const connectedFolderSubfolders = directive(ConnectedFolderSubfoldersDirective);

//#endregion
//#region src/connection/controllers/apps/directives/layout/UserFoldersDirective.ts
var UserFoldersDirective = class extends AbstractLayoutDirective {
	renderUserDetail(identity) {
		return html`<div>
            <dl>
                ${[
			["Login", identity.meta.login],
			[this.t("user"), identity.meta.name || "-"],
			["Email", identity.meta.email || "-"],
			["Instituce", identity.meta.institution || "-"]
		].map((row) => this.renderDef(...row))}
            </dl>
        
            <p>Pro změnu hesla kontaktujte administrátora serveru.</p>
        </div>`;
	}
	render(app) {
		const inner = [];
		const list = [];
		app.content.userFolders.sort((a, b) => a.name.localeCompare(b.name)).forEach((folder) => {
			list.push(html`<server-folder-thumbnail
                .folder=${folder}
                @click=${() => app.display.navigateToFolderAndLoad(folder.path)}
            ></server-folder-thumbnail>`);
		});
		console.log(list);
		inner.push(html`<div class="cLayout__user_folders_list">
            <h2>Máte přístup ke ${app.content.userFolders.length} složkám:</h2>
            ${list}
        </div>`);
		if (app.client.identity) inner.push(this.renderUserDetail(app.client.identity));
		return html`${this.renderBreadcrumb(app)}
        <div class="cLayout cLayout--user_folders">
            ${inner}
        </div>`;
	}
};
const userFolders = directive(UserFoldersDirective);

//#endregion
//#region src/connection/controllers/apps/ConnectedBrowserApp.ts
let ControllerApp = class ControllerApp extends AbstractConnectedApp {
	constructor() {
		super();
		this.managerProviderRef = createRef();
	}
	get manager() {
		if (!this.managerProviderRef.value) throw new Error("Method not implemented.");
		return this.managerProviderRef.value.manager;
	}
	renderStateLogin() {
		return this.renderAppWithInternals(html`<connected-login-form
            style="max-width: 400px; margin: 2em auto; display: block;"
            .onLoginSuccess=${(identity) => {
			this.log("Tohle je login", identity);
			this.display.reloadCurrentState();
		}}
        ></connected-login-form>`);
	}
	renderStateLoading() {
		return this.renderAppWithInternals(html`<thermal-poster
                .message=${this.display.arbitraryContent}
            ></thermal-poster>`);
	}
	/** Main router for the folder state display. Particular content depends on existence of files, subfolders and display mode setting. */
	renderStateFolder() {
		let content = nothing;
		if (this.content.folder === void 0) content = html`<p>Folder not found</p>`;
		else if (this.content.folder.may_have_files) content = this.renderStateFolderFiles();
		else if (this.display.folderListDisplayMode === FolderListDisplayMode.GRID) content = this.renderStateFolderGrid();
		else content = this.renderStateFolderSubfolders();
		return this.renderAppWithInternals(content);
	}
	/** Render a folder's files */
	renderStateFolderFiles() {
		return connectedFolderFiles(this);
	}
	/** Render a folder's subfolders */
	renderStateFolderSubfolders() {
		return connectedFolderSubfolders(this);
	}
	/** Render a folder's grid of files */
	renderStateFolderGrid() {
		return connectedFolderGrid(this);
	}
	renderStateFile() {
		const dir = connectedFileDetail(this);
		return this.renderAppWithInternals(dir);
	}
	renderStateUser() {
		return this.renderAppWithInternals(userFolders(this));
	}
	setupInitialStateBeforeClientIsRead() {
		this.display.setArbitraryContent("Připojuju se k arbitrárnímu stavu");
	}
	async initialiseContentAfterClientReady() {
		this.display.navigateToLoadingState("Načítám obsah");
		await this.display.reloadCurrentState();
	}
	renderErrorState() {
		let content = nothing;
		if (this.client.isLoggedIn) content = html`<thermal-btn
                @click=${() => this.display.navigateToUserFoldersAndLoad()}
                icon="right"
                iconStyle="outline"
                variant="primary"
            >Složky uživatele '${this.client.identity?.meta.name}'</thermal-btn>`;
		return this.renderAppWithInternals(html`<thermal-poster
            .message=${this.display.arbitraryContent}
            .loading=${false}
            icon="warning"
            iconStyle="outline"
        >
            ${content}
        </thermal-poster>`);
	}
	render() {
		return (() => {
			switch (this.display.appState) {
				case DisplayState.LOADING: return this.renderStateLoading();
				case DisplayState.LOGIN: return this.renderStateLogin();
				case DisplayState.FOLDER: return this.renderStateFolder();
				case DisplayState.FILE: return this.renderStateFile();
				case DisplayState.USER: return this.renderStateUser();
				case DisplayState.ARBITRARY: return this.renderAppWithInternals(html`<thermal-poster
                    .message=${this.display.arbitraryContent}
                ></thermal-poster>`);
				case DisplayState.ERROR: return this.renderErrorState();
				default: return this.renderAppWithInternals(html`<thermal-poster
                    .message=${this.display.arbitraryContent}
                ></thermal-poster>`);
			}
		})();
	}
};
ControllerApp = __decorate([customElement("connected-browser-app")], ControllerApp);

//#endregion
//#region src/connection/controllers/apps/Consumer.ts
let Consumer = class Consumer extends ControlledConsumer {
	connectedCallback() {
		super.connectedCallback();
		this.content.subscribeToFileUpdates(this);
		this.content.subscribeToFolderUpdates(this);
		this.content.subscribeToSubfoldersUpdates(this);
		this.content.subscribeToGridUpdates(this);
		this.client.subscribeToIdentityChanges(this);
	}
	renderGridHeader() {
		if (this.content.grid === void 0) return nothing;
		return Object.values(this.content.grid.header).map((header) => html`<span style="margin-right: 10px; font-weight: bold;">${header.name}</span>`);
	}
	renderGridGroups() {
		if (this.content.grid === void 0) return nothing;
		return Object.values(this.content.grid.groups).map((group) => html`<div>
            <h4>${group.label}</h4>
            </div>
            `);
	}
	render() {
		this.log(this.content.file);
		return html`<div>

            ${this.content.file !== void 0 ? html`<file-canvas></file-canvas>` : nothing}

            ${this.content.file !== void 0 ? html`<p>Current File: ${this.content.file.fileName}</p>` : nothing}

            <folder-files-new
                .onFileClick=${(file) => {
			this.display.navigateToPreloadedFile(this.content.folder, file);
		}}
            ></folder-files-new>


            <connected-subfolder-list
                .onFolderClick=${(folder) => {
			this.display.navigateToFolderAndLoad(folder.path);
		}}
            ></connected-subfolder-list>
            ${this.content.folder ? html`<folder-edit-dialog-new 
                    .folder=${this.content.folder}
                    label="editovat složku"
                ></folder-edit-dialog-new>` : nothing}

            <p>Consumer Component</p>
            <p>Content Folder Name: ${this.content.folder?.name}</p>
            <button @click=${async () => {
			await this.display.navigateToFolderAndLoad("/mikroklima/root");
			this.log(this.content.folder);
		}}>Load /mikroklima/root Folder</button>
            <button @click=${async () => {
			this.log(this.client.identity);
		}}>Log Identity</button>
            <button @click=${async () => {
			if (this.content.folder?.path) this.display.navigateToFolderAndLoad(this.content.folder.path);
		}}>Grid</button>
            <button @click=${async () => {
			if (this.content.folder?.path) {}
		}}>list</button>
            <div>
            ${this.content.subfolders.map((subfolder) => {
			return html`<server-folder-thumbnail 
                    .folder=${subfolder}
                    @click=${() => {
				this.display.navigateToFolderAndLoad(subfolder.path);
			}}
                ></server-folder-thumbnail>`;
		})}
            </div>

            <i>${this.client.identity?.user}</i>

            <div>

            <h2>Grid Content</h2>

                ${this.renderGridHeader()}
                ${this.renderGridGroups()}

            </div>
        </div>`;
	}
};
Consumer = __decorate([customElement("test-consumer")], Consumer);

//#endregion
//#region src/connection/controllers/components/folder/crud/AbstractFolderDialog.ts
/** A base class for all dialogs related to folder CRUD operations. */
var AbstractFolderDialog = class extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.closeLabel = T.close;
		this.dialogLabel = T.folder;
		this.dialogRef = createRef();
	}
	close() {
		this.dialogRef.value?.setClose();
	}
	static {
		this.styles = css`
    
        :host {
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }
    
    `;
	}
	render() {
		if (!this.shouldRenderDialog()) return nothing;
		return html`<thermal-dialog
    label=${t(this.dialogLabel)}
    button=${t(this.closeLabel)}
    .beforeClose=${() => this.beforeClose()}
    ${ref(this.dialogRef)}
>
    <thermal-btn
        slot="invoker"
        .icon=${ifDefined(this.icon)}
        .iconStyle=${ifDefined(this.iconStyle)}
        .variant=${ifDefined(this.variant)}
        .size=${ifDefined(this.size)}
        .plain=${ifDefined(this.plain)}
        disabled=${this.disabled ? "true" : "false"}
        .interactive=${ifDefined(this.interactive)}
        .tooltip=${ifDefined(this.tooltip)}
    >
        ${this.label}
    </thermal-btn>
    <div class="content" slot="content">
        ${this.renderContent()}
    </div>
    ${this.renderButtons()}
</thermal-dialog>`;
	}
};
__decorate([property({ type: Object })], AbstractFolderDialog.prototype, "folder", void 0);
__decorate([property({
	type: String,
	reflect: true
})], AbstractFolderDialog.prototype, "icon", void 0);
__decorate([property({
	type: String,
	reflect: true
})], AbstractFolderDialog.prototype, "iconStyle", void 0);
__decorate([property({
	type: String,
	reflect: true
})], AbstractFolderDialog.prototype, "variant", void 0);
__decorate([property({
	type: String,
	reflect: true
})], AbstractFolderDialog.prototype, "size", void 0);
__decorate([property({
	type: Boolean,
	reflect: true
})], AbstractFolderDialog.prototype, "plain", void 0);
__decorate([property({
	type: Boolean,
	reflect: true
})], AbstractFolderDialog.prototype, "disabled", void 0);
__decorate([property({
	type: Boolean,
	reflect: true
})], AbstractFolderDialog.prototype, "interactive", void 0);
__decorate([property({ type: String })], AbstractFolderDialog.prototype, "tooltip", void 0);
__decorate([property({
	type: String,
	reflect: true
})], AbstractFolderDialog.prototype, "label", void 0);
__decorate([state()], AbstractFolderDialog.prototype, "closeLabel", void 0);
__decorate([state()], AbstractFolderDialog.prototype, "dialogLabel", void 0);

//#endregion
//#region src/connection/controllers/components/FolderEditDialogNew.ts
let FolderEditDialog$1 = class FolderEditDialog extends AbstractFolderDialog {
	constructor(..._args) {
		super(..._args);
		this.closeLabel = T.savechanges;
		this.dialogLabel = T.editfolder;
		this.folderName = "";
		this.folderDescription = "";
		this.errorMessage = "";
	}
	static {
		this.styles = css`

        :host {
            align-self: stretch;
        }

        input,
        label,
        textarea,
        .form-group,
        .content,        
        .error {
            box-sizing: border-box;
        }

        .form-group {
            margin-bottom: var(--thermal-gap);
        }

        label {
            display: block;
            margin-bottom: calc(var(--thermal-gap) * 0.5);
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: calc(var(--thermal-gap) * 0.5);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
        }

        textarea {
            width: 100%;
            padding: calc(var(--thermal-gap) * 0.5);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
            font-family: inherit;
            resize: vertical;
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }
    `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.client.subscribeToIdentityChanges(this);
		this.content.subscribeToFolderUpdates(this);
	}
	firstUpdated() {
		this.folderName = this.folder.name || this.folder.slug;
		this.folderDescription = this.folder.description || "";
	}
	async beforeClose() {
		if (!this.folderName.trim()) {
			this.errorMessage = "Název složky je povinný";
			return false;
		}
		if (!this.client) {
			this.errorMessage = "Klient není dostupný";
			return false;
		}
		this.errorMessage = "";
		const result = await this.client.api.routes.post.updateFolder(this.folder.path).setName(this.folderName.trim()).setDescription(this.folderDescription.trim()).execute();
		if (result.success) {
			if (result.data.result.info) this.content.updateFolderState(result.data.result.info);
			if (this.onSuccess) this.onSuccess(result.data.result.info);
		} else this.errorMessage = result.message || "Nepodařilo se upravit složku";
		return result?.success;
	}
	handleInputChange(event) {
		this.folderName = event.target.value;
	}
	handleDescriptionChange(event) {
		this.folderDescription = event.target.value;
	}
	renderContent() {
		return html`<div class="form-group">
    <label for="folder-name">${t(T.name)}:</label>
    <input 
        type="text" 
        id="folder-name"
        .value=${this.folderName}
        @input=${this.handleInputChange}
        placeholder="Zadejte název složky"
        required
    />
</div>
<div class="form-group">
    <label for="folder-description">${t(T.description)}:</label>
    <textarea 
        id="folder-description"
        .value=${this.folderDescription}
        @input=${this.handleDescriptionChange}
        placeholder="Zadejte popis složky (volitelné)"
        rows="3"
    ></textarea>
</div>
${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ""}`;
	}
	renderButtons() {
		return html`<thermal-btn
    @click=${() => this.close()}
    slot="button"    
>${t(T.back)}</thermal-btn>`;
	}
	shouldRenderDialog() {
		if (!this.client.identity || !this.client.isLoggedIn || !this.folder) return false;
		if (this.client.isRoot) return true;
		return this.folder.may_manage_folders_in || this.folder.may_manage_files_in;
	}
};
__decorate([state()], FolderEditDialog$1.prototype, "folderName", void 0);
__decorate([state()], FolderEditDialog$1.prototype, "folderDescription", void 0);
__decorate([state()], FolderEditDialog$1.prototype, "errorMessage", void 0);
__decorate([property({ type: Function })], FolderEditDialog$1.prototype, "onSuccess", void 0);
FolderEditDialog$1 = __decorate([customElement("folder-edit-dialog-new")], FolderEditDialog$1);

//#endregion
//#region src/connection/controllers/components/user/LoginFormNew.ts
let ConnectedLoginForm = class ConnectedLoginForm extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.isLoggingIn = false;
	}
	get mayLogIn() {
		return this.client.isClientConnected && this.valueIsNotEmpty(this.login) && this.valueIsNotEmpty(this.password) && this.login.length > 3 && this.password.length > 3;
	}
	connectedCallback() {
		super.connectedCallback();
		this.client.subscribeToLoadingChanges(this);
		this.client.subscribeToIdentityChanges(this);
	}
	valueIsNotEmpty(value) {
		return value !== void 0 && value.trim() !== "";
	}
	validateFieldInput(event, field) {
		this[field] = event.target.value;
		this.requestUpdate();
	}
	handleKeyDown(event) {
		if (event.key === "Enter" && this.mayLogIn) {
			event.preventDefault();
			this.doLoginInternal();
		}
	}
	/** 
	* The main operation that performs the request. 
	* Shall never be triggered externally. 
	*/
	async doLoginInternal() {
		if (this.isLoggingIn) return;
		this.error = void 0;
		if (this.valueIsNotEmpty(this.login) === false || this.valueIsNotEmpty(this.password) === false) {
			this.error = "Login and password are required.";
			this.requestUpdate();
			return;
		}
		if (this.client === void 0) this.error = "Client is undefined.";
		this.isLoggingIn = true;
		const result = await this.client.api.routes.post.login(this.login ?? "", this.password ?? "")?.execute();
		this.isLoggingIn = false;
		if (result?.success === false) {
			this.error = result.message;
			this.requestUpdate();
			return;
		}
		this.onLoginSuccess?.(this.client.identity);
	}
	static {
		this.styles = css`
    
        .login-form {
            
            display: flex;
            flex-direction: column;
            gap: calc( var( --thermal-gap ) * .5 );
            width: 100%;

            input {
            
                background: var( --thermal-background );
                color: var( --thermal-foreground );

                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
                border-radius: var( --thermal-radius );

                box-sizing: border-box;
                padding: .5em;

                text-align: center;

            
            }

        }

        .login-error {
            color: red;
            text-align: center;
            font-size: calc( var( --thermal-fs ) * .8 );
        }

        thermal-btn {
            width: 100%;
        }

    `;
	}
	render() {
		return html`
            <div class="login-form">

                ${this.prompt ? html`<div class="login-prompt">${this.prompt}</div>` : nothing}

                <input 
                    type="text" 
                    name="login" 
                    placeholder="Login" 
                    required 
                    @input=${(event) => this.validateFieldInput(event, "login")}
                    @keydown=${this.handleKeyDown}
                ></input>

                <input 
                    type="password" 
                    name="password" 
                    placeholder="${t(T.password)}" 
                    required 
                    @input=${(event) => this.validateFieldInput(event, "password")}
                    @keydown=${this.handleKeyDown}
                ></input>

                ${this.error ? html`<div class="login-error">${this.error}</div>` : nothing}

                <thermal-btn
                    @click=${() => this.doLoginInternal()}
                    disabled=${!this.mayLogIn}
                    variant=${this.mayLogIn ? "primary" : "black"}
                    tooltip=${!this.mayLogIn ? "Vyplňte přihlašovací údaje" : void 0}
                >
                    ${this.isLoggingIn ? t(T.login) + "..." : t(T.login)}
                </thermal-btn>
    
            </div>

            
        `;
	}
};
__decorate([property({
	type: String,
	reflect: true
})], ConnectedLoginForm.prototype, "prompt", void 0);
__decorate([state()], ConnectedLoginForm.prototype, "error", void 0);
__decorate([state()], ConnectedLoginForm.prototype, "message", void 0);
__decorate([state()], ConnectedLoginForm.prototype, "isLoggingIn", void 0);
__decorate([property({ type: Function })], ConnectedLoginForm.prototype, "onLoginSuccess", void 0);
__decorate([state()], ConnectedLoginForm.prototype, "login", void 0);
__decorate([state()], ConnectedLoginForm.prototype, "password", void 0);
ConnectedLoginForm = __decorate([customElement("connected-login-form")], ConnectedLoginForm);

//#endregion
//#region src/connection/ClientContext.ts
const clientContext = createContext("client-context");
const currentUserTreeContext = createContext("current-user-tree-context");
const currentUserTreeSetterContext = createContext("current-user-tree-setter-context");
const compactContext = createContext("compact-context");
const compactContextSetter = createContext("compact-context-setter");
const displayModeContext = createContext("display-mode-context");
const displayModeSetterContext = createContext("display-mode-setter-context");
const showDiscussionContext = createContext("display-discussion-context");
const showDiscussionSetterContext = createContext("display-discussion-setter-context");
const editTagsContext = createContext("edit-tags-context");
const editTagsSetterContext = createContext("edit-tags-setter-context");
const syncAnalysisContext = createContext("sync-analysis-context-connected");
const syncAnalysisSetterContext = createContext("sync-analysis-setter-context-connected");
const tagsFilterContext = createContext("tags-filter-context");
const tagsFilterSetterContext = createContext("tags-filter-setter-context");
const subfoldersModeContext = createContext("subfolders-mode-context");
const subfoldersModeSetterContext = createContext("subfolders-mode-setter-context");
const subgildersGridByMode = createContext("subfolders-grid-by-mode");
const subgildersGridByModeSetter = createContext("subfolders-grid-by-mode-setter");
const lockedBrowsingTo = createContext("locked-location-context");
const lockedBrowsingToSetter = createContext("locked-location-setter-context");

//#endregion
//#region src/connection/controllers/components/folder/ConnectedFolderHeader.ts
let FolderBaseInfo = class FolderBaseInfo extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.icon = icons.folder.outline("icon");
	}
	static {
		this.styles = css`
        :host {
            display: flex;
            flex-wrap: no-wrap;
            font-size: var(--thermal-fs);
            gap: .5em;
        }


        .part {

            display: block;
            background: var(--thermal-background);
            color: var(--thermal-foreground);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            box-sizing: border-box;
        
        }


        section {
            display: grid !important;
            grid-template-columns: 2em 1fr;
            grid-template-rows: auto auto;
            gap: 0 var(--thermal-gap);
            flex-grow: 1;
        }

        .icon {
            grid-row: 1;
            grid-column: 1;
            width: 2em;
            display: block;
            color: var(--thermal-slate);
        }

        .content {
            grid-row: 1;
            grid-column: 2;
        }

        h1 {
            font-size: var(--thermal-fs);
            margin: 0;
            padding: 0;
        }

        .description {
            font-size: .8em;
            color: var(--thermal-slate);
        }

        .actions {
            grid-row: 2;
            grid-column: 1 / -1;
            display: flex;
            flex-wrap: wrap;
            gap: 0 2em;
            align-items: center;

            slot::slotted(*) {
                padding-top: 1em;
            }
        }

        .actions:not(:has(*)) {
            display: none;
        }

        /* Fallback for browsers without :has() support */
        .actions:empty {
            display: none;
        }
    `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.client.subscribeToIdentityChanges(this);
		this.content.subscribeToFolderUpdates(this);
		this.content.subscribeToBreadcrumbUpdates(this);
	}
	renderUpButton() {
		if (!this.content.breadcrumb || this.content.breadcrumb.length === 0) return nothing;
		const folders = this.content.breadcrumb.filter((item) => item.type === "folder");
		if (folders.length <= 1) return nothing;
		const parent = folders[folders.length - 2];
		if (this.lockedBrowsingTo && !parent.path.includes(this.lockedBrowsingTo)) return nothing;
		const callback = this.onParentClick || (() => {});
		return html`
            <thermal-btn 
                variant="background" 
                @click=${() => callback(parent)} 
                icon="upwards" 
                iconStyle="outline" 
                size="xl"
                tooltip="Jít o úroveň výš do složky '${parent.name}'."
            >
            </thermal-btn>
        `;
	}
	render() {
		return html`

        ${this.renderUpButton()}
        
        <section class="part">

            ${this.i(this.icon)}

            <div class="content">

                <h1>
                    ${this.content.folder?.name}
                </h1>

                ${this.content.folder?.description ? html`<div class="description">${this.content.folder?.description}</div>` : nothing}
            </div>
            
            <div class="actions">
                <slot></slot>
            </div>
        </section>
        `;
	}
};
__decorate([property({ type: Function })], FolderBaseInfo.prototype, "onParentClick", void 0);
__decorate([state(), consume({
	context: lockedBrowsingTo,
	subscribe: true
})], FolderBaseInfo.prototype, "lockedBrowsingTo", void 0);
FolderBaseInfo = __decorate([customElement("connected-folder-header")], FolderBaseInfo);

//#endregion
//#region src/connection/controllers/components/folder/listing/ConnectedSubfolderList.ts
let ConnectedFolderFileList$1 = class ConnectedFolderFileList extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.folderMode = FolderListDisplayMode.GRID;
	}
	static {
		this.styles = css`
        :host {
            color: var(--thermal-foreground);
            display: block;
            width: 100%;
        }

        :host( [folder-mode="asList"] ) {
            section {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1em;
                justify-content: start;
            }
        }

        :host( [folder-mode="asTable"] ) {
            section {
                display: table;
                width: 100%;
                border-collapse: collapse;
                height: 1px;
                border: 0;
            }
        }

        

        .list-label {

            font-size: calc( var(--thermal-fs) * .8);
            color: var(--thermal-slate);
            line-height: 1;
            margin: 0;
            padding: 0;
            font-weight: normal;
            padding-bottom: calc(var(--thermal-gap) * 0.5);
        
        }
    `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.content.subscribeToFolderUpdates(this);
		this.content.subscribeToSubfoldersUpdates(this);
	}
	renderSubfolder(info) {
		if (this.folderMode === FolderListDisplayMode.TABLE) return html`<server-folder-row
                .folder=${info}
                @click=${() => this.onFolderClick && this.onFolderClick(info)}
            ></server-folder-row>`;
		return html`<server-folder-thumbnail
            .folder=${info}
            .onClick=${() => this.onFolderClick && this.onFolderClick(info)}
        >
        </server-folder-thumbnail>`;
	}
	render() {
		return html`

        <h2 class="list-label">
            <span><strong>${this.content.subfolders?.length} složky</strong> ve složce <i>${this.content.folder?.name}</i>:</span>
        </h2>


        <section>
            ${this.content.subfolders?.map((subfolder) => this.renderSubfolder(subfolder))}
        </section>`;
	}
};
__decorate([property({ type: Function })], ConnectedFolderFileList$1.prototype, "onFolderClick", void 0);
__decorate([property({
	type: String,
	attribute: "folder-mode"
})], ConnectedFolderFileList$1.prototype, "folderMode", void 0);
ConnectedFolderFileList$1 = __decorate([customElement("connected-subfolder-list")], ConnectedFolderFileList$1);

//#endregion
//#region src/connection/controllers/components/folder/listing/ConnetcedFileList.ts
let ConnectedFolderFileList = class ConnectedFolderFileList extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.onFileClick = () => {};
		this.onChange = () => {};
		this.onFileDelete = () => {};
		this.icon = icons.image.outline("icon");
		this.compact = false;
		this.showDiscussion = false;
		this.editableTags = false;
	}
	static {
		this.styles = css`

        :host {
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);
            gap: 2em;
            position: relative;
            width: 100%;
        }

        :host([display-mode="asGrid"]) {
            grid-column: 2;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1em;
        
        }

        :host([display-mode="asTable"]) {
            grid-column: 2;
            display: table;
            border-spacing: 1em;
            margin: -1em;
        }

        `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.content.subscribeToFolderUpdates(this);
		this.content.subscribeToFilesUpdates(this);
		this.display.subscribeToDisplayCompact(this);
		this.display.subscribeToEditTags(this);
		this.display.subscribeToDisplayComments(this);
	}
	renderFile(file) {
		const callback = this.onFileClick !== void 0 ? () => this.onFileClick(file) : void 0;
		return html`<connected-file-thumbnail
    .file=${file}
    .folder=${this.content.folder}
    .onFileDelete=${this.onFileDelete}
    .onFileClick=${callback}
    display-mode=${this.displayMode}
    compact=${this.compact ? "true" : "false"}
    show-discussion=${this.showDiscussion ? "true" : "false"}
    editable-tags=${this.editableTags ? "true" : "false"}
></connected-file-thumbnail>`;
	}
	render() {
		if (this.content.files === void 0 || this.content.files.length === 0) return nothing;
		return html`${this.content.files?.map((subfolder) => this.renderFile(subfolder))}`;
	}
};
__decorate([property({ type: Function })], ConnectedFolderFileList.prototype, "onFileClick", void 0);
__decorate([property({ type: Function })], ConnectedFolderFileList.prototype, "onChange", void 0);
__decorate([property({ type: Function })], ConnectedFolderFileList.prototype, "onFileDelete", void 0);
__decorate([property({
	type: String,
	reflect: true,
	converter: booleanConverter(false)
})], ConnectedFolderFileList.prototype, "compact", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: "display-mode"
})], ConnectedFolderFileList.prototype, "displayMode", void 0);
__decorate([property({
	type: String,
	reflect: true,
	converter: booleanConverter(false),
	attribute: "show-discussion"
})], ConnectedFolderFileList.prototype, "showDiscussion", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false),
	attribute: "editable-tags"
})], ConnectedFolderFileList.prototype, "editableTags", void 0);
ConnectedFolderFileList = __decorate([customElement("connected-file-list")], ConnectedFolderFileList);

//#endregion
//#region src/connection/controllers/components/folder/upload/ConnectedUploadForm.ts
let ConnectedUploadForm = class ConnectedUploadForm extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.label = t(T.upload);
		this.variant = "primary";
		this.errorMessage = "";
		this.plain = false;
		this.allFiles = [];
		this.pairedFiles = [];
		this.unmatchedPngs = [];
		this.isDragging = false;
		this.infoMessage = "";
	}
	static {
		this.styles = css`

        :host {
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }

        .stage {

            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            box-sizing: border-box;
            position: relative;
        
        }

        .drop-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 100, 255, 0.1);
            border: 2px dashed var(--thermal-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            font-size: var(--thermal-fs-lg);
            color: var(--thermal-primary);
            z-index: 10;
        }

        .stage-label {
            font-weight: bold;
            margin: 0;
            padding: 0;
            padding-bottom: .5em;
            font-size: 1.3em;
            line-height: 1.2em;

            small {
                font-size: 1em;
                display: inline-block;
                opacity: .5;
                font-weight: normal;
            }
        }

        .stage-close {
            float: right;
        }

        .stage-preview {

            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 3em;
        
        }

        .stage-preview__actions {

            display: flex;
            flex-direction: column;
            gap: 1em;
            align-items: stretch;
            justify-content: stretch;
        
        }

        .stage-upload {
        
            min-height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            text-align: center;
            border: 2px dotted var(--thermal-slate);
            border-radius: var( --thermal-radius );
            
            cursor: pointer;

            transition: all .2s;

            label {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1em;
            }

            thermal-button {
                pointer-events: none;
            }
        
        }
        .stage-upload:hover {
            border-color: var(--thermal-primary);
            background: var(--thermal-background);
        }

        .stage-upload--inline {
            margin-top: var(--thermal-gap);
            min-height: 120px;
        }

        /* Highlight only the specific dropzone under drag */
        .stage-upload.drag-over,
        .missing-file-dropzone.drag-over {
            border-color: var(--thermal-primary);
            background: rgba(0, 100, 255, 0.1);
        }

        label {
            display: block;
            width: 100%;
            cursor: pointer;
        }

        input[type="file"] {
            display: none;
        }

        .file-item {
            font-size: calc(var(--thermal-fs) * 0.9);
            margin-bottom: calc(var(--thermal-gap) * 0.25);
            display: flex;
            align-items: center;
            gap: 1em;
        }

        .file-item img {
            max-width: 60px;
            max-height: 60px;
            border-radius: var(--thermal-radius);
            object-fit: cover;
        }

        .paired-file-group {
            background: var(--thermal-slate-light);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap-half);
            margin-top: var(--thermal-gap-half);
        }

        .paired-file-group strong {
            display: block;
            margin-bottom: var(--thermal-gap-quarter);
        }

        .group-remove-btn {

            user-select: none;
        }
        .group-remove-btn:hover { background: var(--thermal-danger); }

        .unmatched-files {

            margin-top: var(--thermal-gap);

            thermal-expandable {
                --font-size: .9em;
            }

            h2 {
                margin: 0;
                font-size: 1em;
            }

            p:last-child,
            li::last-child {
                margin-bottom: 0;
            }

        }

        .info {
            background: var(--thermal-primary-light, #eef);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-primary, #00f);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-primary-dark, #008);
            font-size: calc(var(--thermal-fs) * 0.9);
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }

        .paired-files-table {

            width: 100%;
            border-collapse: collapse;

            td:not(:first-child), 
            th:not(:first-child) {
                width: calc(100% / 3);
            }

            img, file-canvas {
                display: block;
                max-width: 100%;
                height: auto;
            }

            .paired-file-group {
            
                td {
                    padding: .5em;
                    vertical-align: top;
                }

                .centered {
                    display: flex;
                    align-items: center;
                    gap: 1em;
                }


                &.paired-file-group__header {

                    td {
                        vertical-align: middle;
                        border-radius: var(--thermal-radius);
                        background: var( --thermal-background );
                    }

                    thermal-icon {
                        display: inline-block;
                        width: 1.5em;
                        height: 1.5em;
                    }

                    .file-name {
                        font-weight: bold;
                        margin-left: var( --thermal-gap-half );
                    }

                }
            
            }

            .spacer-row {
                td {
                    height: 1em;
                }
            }

        }


.file-preview {

    display: grid;
    grid-template-columns: 5em 1fr;
    gap: .5em;
    position: relative;

    .missing-file-dropzone,
    .file-preview__icon,
    img {
        
        max-width: 5em;
        height: auto;
    }

    .missing-file-dropzone {
        aspect-ratio: 160 / 120;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        display: block;
    }

}

.file-preview__icon {

    color: var( --thermal-background );
    background: var( --thermal-slate-dark );
    border-radius: var( --thermal-radius );

    box-sizing: border-box;

    aspect-ratio: 160 / 120;

    display: flex;
    align-items: center;
    justify-content: center;

    thermal-icon {
        width: 1.5em;
        height: 1.5em;
        display: block;
    }
    
}

.file-preview__empty {
    .file-preview__icon {
        background: transparent;
        color: var( --thermal-slate );
        border: var(--thermal-border-width) dashed var( --thermal-slate );
    }
}


.file-preview__info {
    display: flex;
    flex-direction: column;
    gap: .2em;
}

.file-preview__info > div {
    font-size: .7em;
    color: var( --thermal-slate-dark );
}

.file-preview__label {
    font-size: var( --thermal-fs ) !important;
    color: var( --thermal-foreground );
}

.missing-file-dropzone {
    font-size: var(--thermal-fs-sm);
    color: var(--thermal-slate-dark);
    text-align: center;

    border-radius: var(--thermal-radius);
    border: 2px dotted var(--thermal-slate);

    cursor: pointer;
    
    transition: all .2s;

    thermal-icon {
        display: block;
        width: 1.5em;
        height: 1.5em;
        user-select: none;
        pointer-events: none;
    }
}
.missing-file-dropzone:hover {
    border-color: var(--thermal-primary);
    background: #fff;
}

.remove-btn {
    margin-left: auto;
    cursor: pointer;
}

.file-remove-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    user-select: none;
    transition: background .15s ease;
}


    `;
	}
	highlight(timeinms) {
		const element = this.renderRoot.querySelector(".stage-upload thermal-btn");
		console.info("Highlighting upload form button", {
			element,
			timeinms
		});
		if (element) element.highlight(timeinms);
	}
	async handleSubmit() {
		if (this.pairedFiles.length === 0) {
			this.errorMessage = "Vyberte alespoň jeden .lrc soubor";
			return false;
		}
		this.errorMessage = "";
		try {
			const uploadPromises = this.pairedFiles.map(async (pair) => {
				const upload = this.client.api.routes.post.uploadFile(this.folder.path, pair.lrc);
				if (pair.visual) upload.setVisual(pair.visual);
				if (pair.preview) upload.setPreview(pair.preview);
				const result = await upload.execute();
				if (!result?.success) throw new Error(`Nepodařilo se nahrát soubor ${pair.lrc.name}: ${result?.message}`);
				return pair.lrc;
			});
			const uploadedFiles = await Promise.all(uploadPromises);
			if (this.onSuccess) this.onSuccess(uploadedFiles);
			this.clearAllFiles();
			return true;
		} catch (error) {
			this.errorMessage = error instanceof Error ? error.message : "Nepodařilo se nahrát soubory";
			return false;
		}
	}
	addFiles(newFiles) {
		if (!newFiles || newFiles.length === 0) return;
		const newFilesArray = Array.from(newFiles);
		const hasNewLrc = newFilesArray.some((file) => file.name.toLowerCase().endsWith(".lrc"));
		if (!this.allFiles.some((file) => file.name.toLowerCase().endsWith(".lrc")) && !hasNewLrc) {
			this.infoMessage = "Je třeba nahrávat primárně LRC soubory! PNG obrázky jsou jejich volitelný doplněk.";
			setTimeout(() => {
				this.infoMessage = "";
			}, 5e3);
			return;
		}
		this.infoMessage = "";
		const uniqueNewFiles = newFilesArray.filter((newFile) => !this.allFiles.some((existingFile) => existingFile.name === newFile.name && existingFile.size === newFile.size));
		this.allFiles = [...this.allFiles, ...uniqueNewFiles];
		this.pairFiles();
	}
	handleMainFileChange(event) {
		const target = event.target;
		this.addFiles(target.files);
		target.value = "";
	}
	handleInlineFileChange(event, lrcFile, type) {
		const target = event.target;
		if (target.files && target.files.length > 0) {
			const originalFile = target.files[0];
			const lrcBaseName = lrcFile.name.replace(/\.lrc$/i, "");
			const key = lrcBaseName.includes("_thermal") ? lrcBaseName.substring(0, lrcBaseName.lastIndexOf("_thermal")) : lrcBaseName;
			const newFileName = type === "visual" ? `${key}_visual.png` : `${key}_image_thermal.png`;
			const renamedFile = new File([originalFile], newFileName, { type: originalFile.type });
			this.addFiles([renamedFile]);
		}
		target.value = "";
	}
	clearAllFiles() {
		this.pairedFiles.forEach((pair) => {
			if (pair.lrcUrl) URL.revokeObjectURL(pair.lrcUrl);
			if (pair.visualUrl) URL.revokeObjectURL(pair.visualUrl);
			if (pair.previewUrl) URL.revokeObjectURL(pair.previewUrl);
		});
		this.unmatchedPngs.forEach((unmatched) => URL.revokeObjectURL(unmatched.url));
		this.allFiles = [];
		this.pairedFiles = [];
		this.unmatchedPngs = [];
	}
	removePairedGroup(lrcFileToRemove) {
		const groupToRemove = this.pairedFiles.find((p) => p.lrc === lrcFileToRemove);
		if (!groupToRemove) return;
		const filesToRemove = [
			groupToRemove.lrc,
			groupToRemove.visual,
			groupToRemove.preview
		].filter(Boolean);
		this.allFiles = this.allFiles.filter((f) => !filesToRemove.includes(f));
		this.pairFiles();
	}
	removePairedFile(fileToRemove) {
		this.allFiles = this.allFiles.filter((f) => f !== fileToRemove);
		this.pairFiles();
	}
	removeUnmatchedPng(pngFileToRemove) {
		this.allFiles = this.allFiles.filter((f) => f !== pngFileToRemove);
		this.pairFiles();
	}
	pairFiles() {
		this.pairedFiles.forEach((pair) => {
			if (pair.lrcUrl) URL.revokeObjectURL(pair.lrcUrl);
			if (pair.visualUrl) URL.revokeObjectURL(pair.visualUrl);
			if (pair.previewUrl) URL.revokeObjectURL(pair.previewUrl);
		});
		this.unmatchedPngs.forEach((unmatched) => URL.revokeObjectURL(unmatched.url));
		const lrcFiles = this.allFiles.filter((file) => file.name.toLowerCase().endsWith(".lrc"));
		const pngFiles = this.allFiles.filter((file) => file.name.toLowerCase().endsWith(".png"));
		const paired = [];
		const usedPngs = /* @__PURE__ */ new Set();
		lrcFiles.forEach((lrcFile) => {
			const lrcBaseName = lrcFile.name.replace(/\.lrc$/i, "");
			const key = lrcBaseName.includes("_thermal") ? lrcBaseName.substring(0, lrcBaseName.lastIndexOf("_thermal")) : lrcBaseName;
			const visualKey = `${key}_visual`;
			const previewKey = `${key}_image_thermal`;
			const visualFile = pngFiles.find((png) => !usedPngs.has(png) && png.name.replace(/\.png$/i, "").startsWith(visualKey));
			const previewFile = pngFiles.find((png) => !usedPngs.has(png) && png.name.replace(/\.png$/i, "").startsWith(previewKey));
			const pair = {
				lrc: lrcFile,
				lrcUrl: URL.createObjectURL(lrcFile)
			};
			if (visualFile) {
				pair.visual = visualFile;
				pair.visualUrl = URL.createObjectURL(visualFile);
				usedPngs.add(visualFile);
			}
			if (previewFile) {
				pair.preview = previewFile;
				pair.previewUrl = URL.createObjectURL(previewFile);
				usedPngs.add(previewFile);
			}
			paired.push(pair);
		});
		this.pairedFiles = paired;
		this.unmatchedPngs = pngFiles.filter((png) => !usedPngs.has(png)).map((file) => ({
			file,
			url: URL.createObjectURL(file)
		}));
	}
	handleDragOver(e) {
		e.preventDefault();
		this.isDragging = true;
	}
	handleDragLeave(e) {
		e.preventDefault();
		this.isDragging = false;
	}
	handleDrop(e) {
		e.preventDefault();
		this.isDragging = false;
		this.addFiles(e.dataTransfer?.files ?? null);
	}
	handleZoneDragOver(e) {
		e.preventDefault();
		e.currentTarget.classList.add("drag-over");
	}
	handleZoneDragLeave(e) {
		e.preventDefault();
		e.currentTarget.classList.remove("drag-over");
	}
	handleMainDrop(e) {
		e.preventDefault();
		e.currentTarget.classList.remove("drag-over");
		this.addFiles(e.dataTransfer?.files ?? null);
	}
	handleInlineDrop(e, lrcFile, type) {
		e.preventDefault();
		e.stopPropagation();
		e.currentTarget.classList.remove("drag-over");
		const files = e.dataTransfer?.files;
		if (files && files.length > 0) {
			const originalFile = files[0];
			const lrcBaseName = lrcFile.name.replace(/\.lrc$/i, "");
			const key = lrcBaseName.includes("_thermal") ? lrcBaseName.substring(0, lrcBaseName.lastIndexOf("_thermal")) : lrcBaseName;
			const newFileName = type === "visual" ? `${key}_visual.png` : `${key}_image_thermal.png`;
			const renamedFile = new File([originalFile], newFileName, { type: originalFile.type });
			this.addFiles([renamedFile]);
		}
	}
	openFileSelector(id) {
		this.shadowRoot?.getElementById(id)?.click();
	}
	connectedCallback() {
		super.connectedCallback();
		this.client.subscribeToIdentityChanges(this);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.clearAllFiles();
	}
	get hasFiles() {
		return this.allFiles.length > 0;
	}
	get maySubmit() {
		return this.pairedFiles.length > 0;
	}
	renderDropinArea() {
		if (this.hasFiles) return nothing;
		return html`<div 
            class="stage-upload"
            @click=${() => this.openFileSelector("main-file-input")}
            @dragover=${(e) => this.handleZoneDragOver(e)}
            @dragleave=${(e) => this.handleZoneDragLeave(e)}
            @drop=${(e) => this.handleMainDrop(e)}
        >
            <label for="main-file-input">
                <div>Vyberte či přetáhněte sem LRC soubory a případně odpovídající PNG obrázky.</div>
                <thermal-btn
                    variant="primary"
                    icon="upload"
                    iconStyle="micro"
                >
                    Vybrat soubory
                </thermal-btn>
            </label>
            <input 
                type="file" 
                id="main-file-input"
                @change=${this.handleMainFileChange}
                multiple
                accept=".lrc,.png"
            />
        </div>`;
	}
	renderFilePreview(label, file, lrcFileForContext, type) {
		if (!file) {
			const inputId = `inline-input-${lrcFileForContext.name}-${type}`;
			return html`
            <div class="file-preview file-preview__has-file">
                <div class="file-preview__preview">
                    <div 
                        class="missing-file-dropzone"
                        @click=${() => this.openFileSelector(inputId)}
                        @dragenter=${(e) => this.handleZoneDragOver(e)}
                        @dragover=${(e) => e.preventDefault()}
                        @dragleave=${(e) => this.handleZoneDragLeave(e)}
                        @drop=${(e) => this.handleInlineDrop(e, lrcFileForContext, type)}
                    >

                        <thermal-icon icon="upload" variant="micro"></thermal-icon>

                        <input 
                            type="file" 
                            id=${inputId}
                            @change=${(e) => this.handleInlineFileChange(e, lrcFileForContext, type)}
                            accept=".png"
                        />
                    </div>
                </div>
                <div class="file-preview__info">
                    <div class="file-preview__label">${label}</div>
                    <div class="file-preview__name">Můžete nahrát ${type} obrázek.</div>
                </div>
            </div>
            `;
		}
		const kbsize = (file.size / 1024).toFixed(3);
		const preview = file.name.toLowerCase().endsWith(".png") ? html`<img src=${URL.createObjectURL(file)} alt="File preview" />` : html`<div class="file-preview__icon"><thermal-icon icon="document" variant="outline"></thermal-icon></div>`;
		return html`<div class="file-preview file-preview__has-file">
    ${type === "visual" || type === "preview" || label.toLowerCase().includes("lrc") ? html`<thermal-btn 
                class="file-remove-btn" 
                tooltip="Odstranit" 
                icon="close"
                iconStyle="micro"
                plain="true"
                .variant="breadcrumb"
                @click=${() => this.removePairedFile(file)}></thermal-btn>` : nothing}
    <div class="file-preview__preview">${preview}</div>
    <div class="file-preview__info">
        <div class="file-preview__label">${label}</div>
        <div class="file-preview__name">${file.name}</div>
        <div class="file-preview__size">${kbsize} kB</div>
    </div>
</div>`;
	}
	renderPairedFileRow(pair, index) {
		return html`
<tr class="paired-file-group paired-file-group__header">
    <td colspan="4">
        <div style="display:flex;align-items:center;gap:1em;">
            <span>${index + 1}. snímek</span>
            <thermal-btn 
            class="group-remove-btn" 
            tooltip="Odstranit celou skupinu" 
            icon="close"
            iconStyle="micro"
            plain="true"
            @click=${() => this.removePairedGroup(pair.lrc)}></thermal-btn>
        </div>
    </td>
</tr>
<tr class="paired-file-group">
    <td></td>
    <td>${this.renderFilePreview("LRC termogram", pair.lrc)}</td>
    <td>${this.renderFilePreview("Snímek ve viditelném spektru", pair.visual, pair.lrc, "visual")}</td>
    <td>${this.renderFilePreview("Printscreen displeje termokamery", pair.preview, pair.lrc, "preview")}</td>
</tr>`;
	}
	renderPairedFiles() {
		if (this.pairedFiles.length === 0) return nothing;
		const lrcCount = this.pairedFiles.length;
		const pngCount = this.pairedFiles.reduce((state, current) => {
			return state + (current.visual ? 1 : 0) + (current.preview ? 1 : 0);
		}, 0);
		let titleSuffix = `${lrcCount}x LRC`;
		if (pngCount > 0) titleSuffix += ` + ${pngCount}x PNG`;
		return html`
<div class="paired-files">

<h3 class="stage-label">Soubory k uploadu <small>${titleSuffix}</h3>

<table class="paired-files-table">
<tbody>
${this.pairedFiles.map((pair, index) => this.renderPairedFileRow(pair, index))}
</tbody>
</table>

</div>`;
	}
	renderUnmatchedFiles() {
		if (this.unmatchedPngs.length === 0) return nothing;
		return html`<div class="unmatched-files">

    <thermal-expandable
        label="${`${this.pairedFiles.length === 0 ? "Nespárované obrázky" : "Další nespárované obrázky"} (${this.unmatchedPngs.length}) nebudou nahrány`}"
        icon="info"
        iconStyle="outline"
        variantExpanded="foreground"
        closeIcon="true"
    >

        <div class="unmatched-files__list">

            <table>
                <tbody>
                ${this.unmatchedPngs.map((item) => html`
            <tr class="file-item">
                <td>
                    <thermal-btn tooltip="${t(T.remove)}" plain="true" variant="background" icon="close" iconStyle="micro" @click=${() => this.removeUnmatchedPng(item.file)}></thermal-btn>
                </td>
                <td style="position:relative;">
                    <img src=${item.url} alt="Unmatched file preview" />
                </td>
                <td>${item.file.name}</td>
            </tr>`)}
                </tbody>
            </table>

            <thermal-tip
                variant="info"
                style="--font-size: 1em; margin-top: 1em;"
            >
                <h2>Jak párujeme soubory</h2>
                <p>Termokamery TIMI Edu od roku 2024 ukládají soubory v tomto formátu:</p>
                <ul>
                    <li><strong>[datum]_thermal.lrc</strong> - klíčový termogram, který potřebujeme</li>
                    <li><strong>[datum]_visual.png</strong> - snímek ve viditelném spektru (volitelný)</li>
                    <li><strong>[datum]_image_thermal.png</strong> - printscreen displeje termokamery (volitelný, v online aplikaci nemá žádné užití)</li>
                </ul>
                <p>Co jsme schopni spárovat:</p>
                <ul>
                    <li><strong>[datum]</strong>_cokolivdalsiho<strong>_thermal</strong>_neco<strong>.lrc</strong></li>
                    <li><strong>[datum]</strong>_neco_jineho<strong>_visible.png</strong></li>
                    <li><strong>[datum]</strong>_zase_neco_jineho_<strong>_image_thermal</strong> (1)<strong>.png</strong></li>
                </ul>
                <p>Pokud jsou Vaše soubory pojmenovány jinak, můžete k LRC snímkům přiřadit PNG soubory ručně v tabulce výše.</p>
            </thermal-tip>

        </div>
    </thermal-expandable>

</div>`;
	}
	renderErrorMessage() {
		if (!this.errorMessage) return nothing;
		return html`<div class="error">${this.errorMessage}</div>`;
	}
	renderSubmitButton() {
		if (!this.hasFiles) return nothing;
		return html`
            <div style="display:flex;flex-direction:column;gap:1em;">
                <thermal-btn
                    @click=${() => this.handleSubmit()}
                    disabled=${this.maySubmit ? "false" : "true"}
                    .variant=${this.maySubmit ? "primary" : "foreground"}
                    icon="upload"
                    iconStyle="micro"
                    size="lg"
                >${this.label}</thermal-btn>
                <thermal-btn
                    @click=${() => {
			this.clearAllFiles();
		}}
                    .variant="foreground"
                    icon="close"
                    iconStyle="micro"
                    size="lg"
                >Vybrat jiné soubory</thermal-btn>
            </div>
        `;
	}
	renderPreviewAndSubmit() {
		if (!this.hasFiles) return nothing;
		return html`<div class="stage stage-preview">
    <div class="stage-preview__files">
        ${this.renderPairedFiles()}
        ${this.renderUnmatchedFiles()}
    </div>
    <div class="stage-preview__actions">
        ${this.renderErrorMessage()}
        ${this.renderSubmitButton()}
    </div>
</div>`;
	}
	renderBottomDropzone() {
		return html`
            <div 
                class="stage-upload stage-upload--bottom"
                style="margin-top:2em;"
                @click=${() => this.openFileSelector("bottom-file-input")}
                @dragenter=${(e) => this.handleZoneDragOver(e)}
                @dragover=${(e) => this.handleZoneDragOver(e)}
                @dragleave=${(e) => this.handleZoneDragLeave(e)}
                @drop=${(e) => this.handleMainDrop(e)}
            >
                <label for="bottom-file-input">
                    <div>Přidat další soubory LRC či PNG</div>
                    <thermal-btn
                        variant="primary"
                        icon="upload"
                        iconStyle="micro"
                    >Vybrat soubory</thermal-btn>
                </label>
                <input 
                    type="file" 
                    id="bottom-file-input"
                    @change=${this.handleMainFileChange}
                    multiple
                    accept=".lrc,.png"
                />
            </div>
        `;
	}
	render() {
		this.label !== void 0 ? this.label : t(T.uploadafile);
		if (!this.client.isLoggedIn || !this.folder.may_manage_files_in) return nothing;
		return html`
            <div>
                ${this.renderDropinArea()}

                ${this.infoMessage ? html`<div class="info">${this.infoMessage}</div>` : ""}

                ${this.renderPreviewAndSubmit()}
                ${this.hasFiles ? this.renderBottomDropzone() : nothing}
            </div>
        `;
	}
};
__decorate([property({ type: Object })], ConnectedUploadForm.prototype, "folder", void 0);
__decorate([property({ type: String })], ConnectedUploadForm.prototype, "label", void 0);
__decorate([property({ type: String })], ConnectedUploadForm.prototype, "prompt", void 0);
__decorate([property({ type: String })], ConnectedUploadForm.prototype, "variant", void 0);
__decorate([state()], ConnectedUploadForm.prototype, "errorMessage", void 0);
__decorate([property({
	type: String,
	converter: booleanConverter(false)
})], ConnectedUploadForm.prototype, "plain", void 0);
__decorate([property({ type: String })], ConnectedUploadForm.prototype, "tooltip", void 0);
__decorate([state()], ConnectedUploadForm.prototype, "allFiles", void 0);
__decorate([state()], ConnectedUploadForm.prototype, "pairedFiles", void 0);
__decorate([state()], ConnectedUploadForm.prototype, "unmatchedPngs", void 0);
__decorate([state()], ConnectedUploadForm.prototype, "isDragging", void 0);
__decorate([state()], ConnectedUploadForm.prototype, "infoMessage", void 0);
__decorate([property({ type: Function })], ConnectedUploadForm.prototype, "onSuccess", void 0);
ConnectedUploadForm = __decorate([customElement("connected-upload-form")], ConnectedUploadForm);

//#endregion
//#region src/connection/controllers/components/user/ConnectedUserButton.ts
let UserButton = class UserButton extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.disableLogging = false;
	}
	connectedCallback() {
		super.connectedCallback();
		this.client.subscribeToIdentityChanges(this);
		this.client.subscribeToLoadingChanges(this);
		this.client.api.auth.onIdentity.set(this.UUID, (identity) => {
			this.message = void 0;
		});
	}
	static {
		this.styles = css`

        :host {
            font-size: var( --thermal-fs );
            color: var( --thermal-foreground );
        }

        .login-form {
            display: flex;
            gap: 1em;
            flex-wrap: wrap;
            width: 100%;
            box-sizing: border-box;
            justify-content: stretch;
        }

        input[type="text"],
        input[type="password"] {
            padding: 0.5em;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            box-sizing: border-box;
            flex: 1;
            min-width: 0;
        }

        .login-error {
            color: red;
            padding-top: .5em;
            font-size: .8em;
        }
    `;
	}
	async doLogout() {
		const result = await this.client?.api.routes.post.logout().execute();
		this.client?.api.auth.logout();
		return result && result.success;
	}
	async doLogin() {
		this.message = void 0;
		const contentSlot = ((this.shadowRoot?.querySelector("thermal-dialog"))?.shadowRoot)?.querySelector("slot[name=\"content\"]");
		if (contentSlot) {
			const contentDiv = contentSlot.assignedElements({ flatten: true }).find((el) => el.tagName === "DIV");
			if (contentDiv) {
				const loginInput = contentDiv.querySelector("input[name=\"login\"]");
				const passwordInput = contentDiv.querySelector("input[name=\"password\"]");
				if (loginInput && passwordInput) {
					const login = loginInput.value;
					const password = passwordInput.value;
					if (login && password) {
						const result = await this.client?.api.routes.post.login(login, password).execute();
						if (result && result.success) this.message = "Přihlášení proběhlo úspěšně";
						else this.message = "Přihlášení se nezdařilo";
						return result && result.success;
					}
				}
			}
		}
		return false;
	}
	async handleBeforeClose() {
		if (this.client.isLoggedIn) return await this.doLogout();
		return await this.doLogin();
	}
	handleKeyDown(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			const dialog = this.shadowRoot?.querySelector("thermal-dialog");
			if (dialog) dialog.closeFromTheOutside();
		}
	}
	renderLoginForm() {
		return html`
        <div class="login-form">
            <input 
                type="text" 
                name="login" 
                placeholder="Login" 
                required
                @keydown=${this.handleKeyDown}
            ></input>
            <input 
                type="password" 
                name="password" 
                placeholder="${t(T.password)}" 
                required
                @keydown=${this.handleKeyDown}
            ></input>
        </div>
        ${this.message ? html`<div class="login-error">${this.message}</div>` : nothing}
        `;
	}
	renderUserLogoutNotice() {
		return html`
            Opravdu se chcete odhlásit?
        `;
	}
	renderTriggerButton() {
		const buttonLabel = this.client.identity?.meta.name ?? this.client.identity?.meta.login ?? t(T.login);
		return html`<thermal-btn 
            slot="invoker" 
            variant=${this.client.isLoggedIn ? "primary" : "default"} 
            icon="user" 
            iconStyle="micro"
        >
            ${buttonLabel}
        </thermal-btn>`;
	}
	renderFallbackButton() {
		if (this.client.isLoggedIn === false) return nothing;
		return html`<thermal-btn 
        slot="invoker" 
        variant="background" 
        disabled="true" 
        tooltip="Aktuálně přihlášený uživatel" 
        icon="user" 
        iconStyle="micro"
    >
        ${this.client.identity?.meta.name ?? this.client.identity?.meta.login}
    </thermal-btn>`;
	}
	renderDialog() {
		const label = this.client.isLoggedIn ? t(T.logout) : t(T.login);
		const submitLabel = this.client.isLoggedIn ? t(T.logout) : t(T.login);
		const content = this.client.isLoggedIn === true ? this.renderUserLogoutNotice() : this.renderLoginForm();
		return html`
            <thermal-dialog 
                label="${label}" 
                button="${submitLabel}" 
                .beforeClose=${this.handleBeforeClose.bind(this)}
            >

                ${this.renderTriggerButton()}

                <div slot="content">
                    ${content}
                </div>

            </thermal-dialog>
        `;
	}
	render() {
		if (this.disableLogging === true && this.client.isLoggedIn === false) return nothing;
		else if (this.disableLogging === true && this.client.isLoggedIn === true) return this.renderFallbackButton();
		return this.renderDialog();
	}
};
__decorate([state()], UserButton.prototype, "message", void 0);
__decorate([property({
	reflect: true,
	attribute: "disable-logging",
	converter: booleanConverter(false)
})], UserButton.prototype, "disableLogging", void 0);
UserButton = __decorate([customElement("connected-user-button")], UserButton);

//#endregion
//#region src/connection/controllers/components/ConnectedBreadcrumb.ts
let ConnectedBreadcrumb = class ConnectedBreadcrumb extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.items = [];
	}
	static {
		this.styles = css`
    
        :host {
            display: flex;
            align-items: center;
            gap: 0.5em;

            color: var(--thermal-slate);
            font-size: calc( var(--thermal-fs) * 0.8 );
        }

        .item {
            --color: var( --thermal-slate );
            --color-hover: var( --thermal-foreground );
        }

        .interactive {
            --color: var( --thermal-slate-dark );
            --color-hover: var( --thermal-primary );
        }

        .current {
            --color: var( --thermal-slate-dark );
            --cursor: help;
            text-decoration: underline;
        }
    
    `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.refreshItems();
		this.display.onAppModeUpdate.set(this.UUID, () => {
			this.refreshItems();
		});
		this.content.onBreadcrumbUpdate.set(this.UUID, () => {
			this.refreshItems();
		});
		this.client.onIdentity.set(this.UUID, () => {
			this.refreshItems();
		});
	}
	update(changedProperties) {
		super.update(changedProperties);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.content.onBreadcrumbUpdate.delete(this.UUID);
		this.client.onIdentity.delete(this.UUID);
	}
	refreshItems() {
		this.items = this.calculateItems(this.content.breadcrumb || []);
	}
	calculateItems(breadcrumb, lockedLocation) {
		const items = [];
		items.push({
			icon: "wifi",
			iconStyle: "micro",
			label: this.client.serverInfo?.name || "Server"
		});
		if (this.client.identity) {
			const userItem = {
				icon: "user",
				iconStyle: "micro",
				label: this.client.identity.meta.name || this.client.identity.user || "User"
			};
			if (!lockedLocation) {
				userItem.tooltip = t(T.overviewofyourfolders);
				userItem.onClick = () => {
					this.onUserClick?.();
				};
			}
			items.push(userItem);
		}
		if (lockedLocation) {
			const lockedLabel = breadcrumb.find((item) => item.path === lockedLocation)?.name || lockedLocation;
			items.push({
				icon: "lock",
				iconStyle: "micro",
				label: "",
				tooltip: `V tomto zobrazení procházíte pouze složku "${lockedLabel}".`
			});
		}
		if (this.display.appState !== DisplayState.USER) for (const item of breadcrumb) {
			if (item.type !== "folder") continue;
			if (lockedLocation !== void 0 && !item.path.includes(lockedLocation)) continue;
			const folderItem = {
				icon: "folder",
				iconStyle: "micro",
				label: item.name || "Folder",
				tooltip: item.path || "Folder",
				onClick: () => this.onFolderClick?.(item)
			};
			items.push(folderItem);
		}
		return items;
	}
	renderItem(item, index) {
		const isInteractive = item.onClick !== void 0 && index < this.items.length - 1;
		const classNames = {
			item: true,
			[item.icon]: true,
			current: index === this.items.length - 1,
			interactive: isInteractive
		};
		return html`
        ${index > 0 ? html`<span>/</span>` : nothing}
        <thermal-btn 
            class="${classMap(classNames)}"
            @contextmenu=${(e) => {
			if (item.tooltip) {
				e.preventDefault();
				navigator.clipboard.writeText(item.tooltip);
			}
		}}
            @click=${() => {
			if (item.onClick) item.onClick();
		}}
            variant="text"
            icon="${item.icon}"
            iconStyle="${item.iconStyle}"
            interactive=${isInteractive ? "true" : "false"}
            tooltip=${item.tooltip ? item.tooltip : void 0}
        >
            ${item.label}
        </thermal-btn>`;
	}
	render() {
		return html`${this.items.map(this.renderItem.bind(this))}`;
	}
};
__decorate([property({ type: Function })], ConnectedBreadcrumb.prototype, "onFolderClick", void 0);
__decorate([property({ type: Function })], ConnectedBreadcrumb.prototype, "onUserClick", void 0);
__decorate([state()], ConnectedBreadcrumb.prototype, "items", void 0);
ConnectedBreadcrumb = __decorate([customElement("connected-breadcrumb")], ConnectedBreadcrumb);

//#endregion
//#region src/connection/controllers/components/configuration/AbstractConfigElement.ts
var AbstractConfigElement = class extends ControlledConsumer {
	static {
		this.styles = css`
    
        :host {
        
            display: flex;
            color: var(--thermal-foreground);
            cursor: pointer;
            align-items: center;
            gap: .25em;
            font-size: var(--thermal-fs);
        
        }

        thermal-dropdown thermal-btn {
            display: block;
        }

        .radio {

            display: flex;
            align-items: center;
            gap: .25em;

            cursor: pointer;

            input,
            span {
                display: block;
            }

            span {
                font-size: .8em;
            }
        }
    
    `;
	}
	renderToggle(label, checked, onChange) {
		return html`<thermal-radio
            type="checkbox"
            .checked=${checked}
            .onChange=${(value) => {
			onChange(value);
		}}
        >${label}</thermal-radio>`;
	}
	renderToggleButton(active, onClick, icon, label, tooltip) {
		return html`
            <thermal-btn
                variant="${active ? "foreground" : "default"}"
                @click=${() => onClick()}
                icon=${ifDefined(icon)}
                iconStyle="micro"
                tooltip=${ifDefined(tooltip)}
                size="md"
            ></thermal-btn>
        `;
	}
};

//#endregion
//#region src/connection/controllers/components/configuration/ConnectedConfigSubfolderMode.ts
let ConnectedConfigSubfolderMode = class ConnectedConfigSubfolderMode extends AbstractConfigElement {
	connectedCallback() {
		super.connectedCallback();
		this.content.subscribeToSubfoldersUpdates(this);
		this.display.subscribeToFolderDisplayMode(this);
	}
	render() {
		const items = [this.renderToggleButton(this.display.folderListDisplayMode === FolderListDisplayMode.LIST, () => this.display.setFolderListDisplayMode(FolderListDisplayMode.LIST), "folder", "micro", "Seznam složek"), this.renderToggleButton(this.display.folderListDisplayMode === FolderListDisplayMode.TABLE, () => this.display.setFolderListDisplayMode(FolderListDisplayMode.TABLE), "list", "solid", "Tabulka složek")];
		if (this.display.canHaveGrid(this.content.subfolders)) items.push(this.renderToggleButton(this.display.folderListDisplayMode === FolderListDisplayMode.GRID, () => this.display.setFolderListDisplayMode(FolderListDisplayMode.GRID), "grid", "solid", "Mřížka složek"));
		return items;
	}
};
ConnectedConfigSubfolderMode = __decorate([customElement("connected-config-subfolder-mode")], ConnectedConfigSubfolderMode);

//#endregion
//#region src/connection/controllers/components/configuration/ConnectedConfigFileDisplayMode.ts
let ConnectedConfigFileMode$1 = class ConnectedConfigFileMode extends AbstractConfigElement {
	connectedCallback() {
		super.connectedCallback();
		this.content.subscribeToFilesUpdates(this);
		this.display.subscribeToFileDisplayMode(this);
	}
	render() {
		const items = [this.renderToggleButton(this.display.fileDisplayMode === FileListDisplayMode.TABLE, () => this.display.setFileListDisplayMode(FileListDisplayMode.TABLE), "list", "solid", "Tabulka souborů"), this.renderToggleButton(this.display.fileDisplayMode === FileListDisplayMode.GRID, () => this.display.setFileListDisplayMode(FileListDisplayMode.GRID), "grid", "solid", "Mřížka souborů")];
		if (this.display.fileDisplayMode === FileListDisplayMode.GRID) {
			const compact = this.renderToggle("Kompaktní zobrazení", this.display.fileDisplayCompact, (value) => this.display.setFilesCompact(value));
			items.push(compact);
		}
		return items;
	}
};
ConnectedConfigFileMode$1 = __decorate([customElement("connected-config-file-display-mode")], ConnectedConfigFileMode$1);

//#endregion
//#region src/connection/controllers/components/file/ConnectedFileThumbnail.ts
let FileThumbnail = class FileThumbnail extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.instanceRef = createRef();
		this.onFileClick = () => {};
		this.onFileDelete = () => {};
		this.compact = false;
		this.displayMode = FileListDisplayMode.GRID;
		this.showDiscussion = false;
		this.editableTags = false;
		this.syncAnalyses = false;
		this.hasDisplayedAnalysis = false;
		this.icon = icons.image.outline("icon");
	}
	get fileObject() {
		return this.instanceRef.value?.file;
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.content.subscribeToFilesUpdates(this);
		this.client.subscribeToIdentityChanges(this);
		this.content.subscribeToFilesUpdates(this);
		this.hydrate();
		if (this.instanceRef.value) this.instanceRef.value.onSuccess.set(this.UUID, () => {
			this.hydrate();
		});
	}
	hydrate() {
		if (this.fileObject) {
			this.hasDisplayedAnalysis = this.fileObject.analysis.value.length > 0;
			this.fileObject.analysis.addListener(this.UUID, (analyses) => {
				this.hasDisplayedAnalysis = analyses.length > 0;
			});
		}
	}
	dehydrate() {
		this.fileObject?.analysis.removeListener(this.UUID);
	}
	updated(changedProperties) {
		if (changedProperties.has("compact")) if (this.compact) {
			this.classList.add("compact");
			this.classList.remove("detailed");
		} else {
			this.classList.remove("compact");
			this.classList.add("detailed");
		}
	}
	connectedCallback() {
		super.connectedCallback();
		this.hydrate();
		this.display.subscribeToDisplayComments(this);
		this.display.subscribeToEditTags(this);
		this.content.subscribeToFileUpdates(this);
		this.content.subscribeToFilesUpdates(this);
		this.content.subscribeToFolderUpdates(this);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.dehydrate();
	}
	renderTime() {
		const time = this.file.timestamp ? TimeFormat.human(this.file.timestamp) : void 0;
		if (!time) return nothing;
		return html`
            <div class="header_text_time" @click=${() => this.onFileClick(this.file)}>
                ${time}
            </div>`;
	}
	renderLabel() {
		if (!this.file.label) return nothing;
		return html`
            <h2><span>${this.file.label}</span></h2>
        `;
	}
	renderDescription() {
		if (!this.file.description) return nothing;
		return html`
            <p class="description">${this.file.description}</p>
        `;
	}
	renderSelectBox() {
		if (this.client.isLoggedIn === false || !this.content.folder?.may_manage_files_in || this.content.files && this.content.files.length <= 1) return nothing;
		return html`<connected-file-selection-checkbox 
            .file=${this.file}
        ></connected-file-selection-checkbox>`;
	}
	renderActionDetail() {
		return html`<thermal-btn 
            variant=${this.compact ? "default" : "primary"}
            size="${this.displayMode === FileListDisplayMode.TABLE ? "md" : "sm"}"
            @click=${() => this.onFileClick(this.file)}
        >${t(T.detail).toLowerCase()}</thermal-btn>`;
	}
	renderActionEdit() {
		if (!this.folder.may_manage_files_in) return nothing;
		const variant = this.compact && this.displayMode === FileListDisplayMode.GRID ? "default" : "background";
		return html`<connected-file-edit-dialog
            .file=${this.file}
            .folder=${this.folder}
            label=""
            plain="true"
            variant=${variant}
            size="sm"
        ></connected-file-edit-dialog>`;
	}
	renderActionComments() {
		if (this.file.comments.length > 0 || this.client.isLoggedIn && this.folder.may_manage_files_in) {
			const variant = this.compact && this.displayMode === FileListDisplayMode.GRID ? "default" : "background";
			return html`
            <thermal-dialog
                label="${t(T.comments)}"
                
            >
                <thermal-btn 
                    slot="invoker"
                    size="sm"
                    variant=${variant}
                    icon="comment"
                    iconStyle="micro"
                    plain="true"
                    badge=${ifDefined(this.file.comments.length > 0 ? "red" : void 0)}
                ></thermal-btn>
                <div slot="content">
                    <connected-file-comments
                        .file=${this.file}
                        .folder=${this.folder}
                        style="height: 400px; width: 400px;"
                    ></connected-file-comments>
                </div>
            </thermal-dialog>`;
		}
		return nothing;
	}
	renderActionDelete() {
		if (!this.folder.may_manage_files_in) return nothing;
		const variant = this.compact && this.displayMode === FileListDisplayMode.GRID ? "default" : "background";
		return html`<connected-file-delete-dialog 
            .file=${this.file}
            .folder=${this.folder}
            .onDelete=${this.onFileDelete}
            label=""
            plain="true"
            variant=${variant}
            size="sm"
        ></connected-file-delete-dialog>`;
	}
	renderNumAnalyses() {
		if (!this.file.analyses || this.file.analyses.length === 0) return nothing;
		return html`
            <span class="header_actions_num-analyses">
                ${this.file.analyses.length} analýzy
            </span>
        `;
	}
	restoreAnalyses() {
		const instance = this.instanceRef.value?.file;
		if (!instance) return;
		this.file.analyses.forEach((analysis) => {
			instance.slots.createAnalysisFromSerialized(analysis)?.setSelected();
		});
	}
	renderAnalyses() {
		let content = nothing;
		if (this.displayMode === FileListDisplayMode.GRID) content = html`<file-analysis-table></file-analysis-table>`;
		else if (this.displayMode === FileListDisplayMode.TABLE) {
			const hasStoredAnalyses = this.file.analyses.length > 0;
			let restoreLabel = void 0;
			if (hasStoredAnalyses) restoreLabel = `Načíst uložené analýzy (${this.file.analyses.length})`;
			content = html`

            <div class="analyses-inner">
                
                <file-analysis-complex showhint="false">
                    ${hasStoredAnalyses && !this.syncAnalyses ? html`<thermal-btn 
                        @click=${this.restoreAnalyses.bind(this)}
                        size="md"
                        variant="primary"
                        icon="restore"
                        iconStyle="micro"
                    >
                        ${restoreLabel}
                    </thermal-btn>` : nothing}
                </file-analysis-complex>

                ${this.hasDisplayedAnalysis ? html`<aside>

                        <connected-file-analysis-buttons .info=${this.file} .enableCopyToAll=${this.content.files && this.content.files.length > 0}></connected-file-analysis-buttons>

                </aside>` : nothing}

            </div>
            `;
		}
		return html`<div class="analyses">
            ${content}
        </div>`;
	}
	static {
		this.styles = css`
        :host {
            display: block;
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
            height: 100%; /* Přidáno pro výšku */
        }

        file-provider {
            display: contents;
        }

        p.description {
            margin: 0; padding: 0;
        }

        file-canvas {
            display: block;
            flex-grow: 1; /* Přidáno pro vyplnění výšky */
            min-height: 0; /* Důležité pro správné zkracování */
        }

        .header_actions_num-analyses {
            font-size: .6em;
            color: var(--thermal-slate);
        }

        h2 {
            margin: 0;
            padding: 0;
            font-size: 1em;
            line-height: 1.2;
        }

        .header_text {

            h2,
            .header_text_time {
                transition: color 0.2s ease-in-out;
                cursor: pointer;
            }
        }

        :host([display-mode="asGrid"][compact="true"]) {

            file-edit-dialog,
            file-comments-dialog,
            file-delete-dialog,
            .header_icon,
            .header_actions_num-analyses,
            p.description {
                display: none;
            }

            header {
                display: flex;
                box-sizing: border-box;
                width: 100%;
                align-items: center;
                flex-wrap: nowrap;
                margin-top: .5em;
            }

            .header_text {
                flex-grow: 1;
                display: flex;
                align-items: center;
                gap: .5em;
                min-width: 0;

            }

            .header_actions {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: .25em;
                margin-left: auto; /* Zarovnání doprava */
            }

            .header_text_time {
                white-space: nowrap;
                flex-shrink: 0;
            }

            h2 {
                min-width: 0;
                flex-shrink: 1;
                overflow: hidden;
                font-weight: normal;
                color: var(--thermal-slate);
            }

            h2 span {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            file-tags {
                margin-left: auto; /* Tagy vždy doprava */
            }
        }

        :host([display-mode="asGrid"][compact="false"]) {

            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: 0 0 var(--thermal-radius) var(--thermal-radius);
            overflow: hidden;

            display: flex;
            flex-direction: column;

            position: relative;

            p.description {
                display: none;
                margin: 0; padding: 0;
            }

            file-canvas {
                min-height: 0;
                display: block;
            }

            header {
                width: 100%;
                box-sizing: border-box;
                min-height: 60px;
                height: auto;
                background: var(--thermal-background);
                padding: .5em;
                display: grid;
                grid-template-columns: 1fr 1.2em;
                grid-template-rows: 1fr 1em;
                gap: calc(var(--thermal-gap) * 0.5);
                align-self: stretch;
                flex-grow: 1;
            }

            .header_text {
                grid-column: 1;
                grid-row: 1;
                display: flex;
                flex-direction: column;
                gap: .25em;
                align-self: stretch;
                justify-self: stretch;

            }

            .header_icon {
                grid-column: 2;
                grid-row: 1;
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;
                color: var(--thermal-slate);
            }

            .header_actions {
                grid-column: 1 / -1;
                grid-row: 2;
                display: flex;
                gap: .25em;
                align-items: center;
                height: 1em;
                justify-content: flex-end; /* Zarovnání doprava */
            }

            .header_text_time {
                font-size: .8em;
                color: var(--thermal-slate-dark);
            }

            .file-comments {
                background: var(--thermal-background);
                padding: .5em;
                width: 100%;
                box-sizing: border-box;
                file-comments {
                    border-radius: var(--thermal-radius);
                    border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                    background: var(--thermal-slate-light);
                    padding: .5em;
                }
            }

            file-tags {
                margin-left: auto; /* Tagy vždy doprava */
            }

            connected-file-selection-checkbox {
                position: absolute;
                bottom: .25em;
                left: .25em;
            }

        }

        :host([display-mode="asTable"]) {
            display: table-row;
            vertical-align: top;
            border-bottom: .5em var(--thermal-border-style)transparent;

            file-provider {
                display: contents;
            }

            main {
                width: 500px;
            }

            main,
            header,
            .analyses,
            .file-comments {
                display: table-cell;
                vertical-align: top;
            }

            header {
                background: var(--thermal-background);
                border-radius: var(--thermal-radius);
                box-sizing: border-box;
                padding: 1em;
                height: 100%;
                position: relative;
                padding-bottom: 2em;

                min-width: 220px;
            }

            file-canvas {
                min-width: 300px;
            }

            .header_text {
                display: flex;
                flex-direction: column;
                gap: 1em;
                min-height: fit-content;
            }

            .header_icon {
                display: none;
            }

            .header_actions {
                display: flex;
                gap: .25em;
                align-items: center;
                vertical-align: bottom;
                position: absolute;
                bottom: 1em;
                left: 1em;
                right: 1em;
                flex-wrap: wrap;
            }

            p.description {
                font-size: .8em;
                color: var(--thermal-slate);
            }

            .file-comments {
                display: block;
                height: 100%;
                width: 300px;
            }

            file-tags {
                margin-left: auto; /* Tagy vždy doprava */
            }

            .analyses {

                padding: .5em;
                border-radius: var(--thermal-radius);
                background: var( --thermal-background );

                .analyses-inner {
                    height: 100%;
                    width: 100%;
                    

                    file-analysis-complex {
                        flex-grow: 1;
                        align-self: stretch;
                        display: block;
                    }

                    aside {
                        display: flex;
                        gap: .5em;
                        width: 100%;
                    }
                }

                file-analysis-complex {
                    background: var(--thermal-background);
                }

            }


        }
    `;
	}
	render() {
		const visibleUrl = this.file.visual ? this.file.visual : void 0;
		return html`
            <file-provider
                thermal=${this.file.url}
                visible=${ifDefined(visibleUrl)}
                batch="true"
                autoclear="true"
                role="article"
                autoHighlight="true"
                ${ref(this.instanceRef)}
            >

                <main>
                    <file-canvas></file-canvas>
                    <file-timeline hasplaybutton="false"></file-timeline>
                </main>

                <header>

                    <div class="header_text">

                        ${this.renderSelectBox()}

                        ${this.renderTime()}

                        ${this.renderLabel()}

                        ${this.renderDescription()}

                    </div>

                    <div class="header_icon">
                        ${this.i(this.icon)}
                    </div>

                    <div class="header_actions">

                        ${this.renderActionDetail()}

                        <file-range-propagator 
                            variant="${this.compact ? "default" : "background"}"
                            .plain="true"
                            size="${this.displayMode === FileListDisplayMode.TABLE ? "md" : "sm"}"
                        ></file-range-propagator>

                        ${this.renderActionEdit()}

                        ${!this.showDiscussion ? this.renderActionComments() : nothing}

                        ${this.renderActionDelete()}

                        ${this.renderNumAnalyses()}

                        <connected-file-tags
                            .file=${this.file}
                            .folder=${this.folder}
                            inline="true"
                            .editable="${this.editableTags}"
                            size="sm"
                        ></connected-file-tags>
                    </div>

                </header>

                ${this.renderAnalyses()}

                
                ${this.showDiscussion === true ? html`
                    <div class="file-comments">
                        <connected-file-comments
                            .file=${this.file}
                            .folder=${this.folder}
                            style="height: 300px;"
                        ></connected-file-comments>
                    </div>` : nothing}


            </file-provider>
        `;
	}
};
__decorate([consume({
	context: groupContext,
	subscribe: true
}), state()], FileThumbnail.prototype, "group", void 0);
__decorate([property({ type: Object })], FileThumbnail.prototype, "file", void 0);
__decorate([property({ type: Object })], FileThumbnail.prototype, "folder", void 0);
__decorate([property({ type: Function })], FileThumbnail.prototype, "onFileClick", void 0);
__decorate([property({ type: Function })], FileThumbnail.prototype, "onFileDelete", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false)
})], FileThumbnail.prototype, "compact", void 0);
__decorate([property({
	type: String,
	reflect: true,
	attribute: "display-mode"
})], FileThumbnail.prototype, "displayMode", void 0);
__decorate([property({
	type: String,
	reflect: true,
	converter: booleanConverter(false),
	attribute: "show-discussion"
})], FileThumbnail.prototype, "showDiscussion", void 0);
__decorate([property({
	type: Boolean,
	reflect: true,
	converter: booleanConverter(false),
	attribute: "editable-tags"
})], FileThumbnail.prototype, "editableTags", void 0);
__decorate([consume({
	context: syncAnalysisContext,
	subscribe: true
})], FileThumbnail.prototype, "syncAnalyses", void 0);
__decorate([state()], FileThumbnail.prototype, "hasDisplayedAnalysis", void 0);
FileThumbnail = __decorate([customElement("connected-file-thumbnail")], FileThumbnail);

//#endregion
//#region src/connection/controllers/components/configuration/ConnectedConfigFileContentMode.ts
let ConnectedConfigFileMode = class ConnectedConfigFileMode extends AbstractConfigElement {
	connectedCallback() {
		super.connectedCallback();
		this.display.subscribeToEditTags(this);
		this.display.subscribeToDisplayComments(this);
	}
	render() {
		return [this.renderToggle("Edit tags", this.display.editTags, (value) => this.display.setEditTags(value)), this.renderToggle("Display Comments", this.display.displayComments, (value) => this.display.setDisplayComments(value))];
	}
};
ConnectedConfigFileMode = __decorate([customElement("connected-config-file-content-mode")], ConnectedConfigFileMode);

//#endregion
//#region src/connection/controllers/components/file/ConnectedFileEditDialog.ts
let FileEditDialog = class FileEditDialog extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.label = "Upravit soubor";
		this.size = "sm";
		this.fileLabel = "";
		this.fileDescription = "";
		this.errorMessage = "";
	}
	static {
		this.styles = css`
        .content {
        }

        .form-group {
            margin-bottom: var(--thermal-gap);
        }

        label {
            display: block;
            margin-bottom: calc(var(--thermal-gap) * 0.5);
            font-weight: bold;
        }

        input {
            width: 100%;
            box-sizing: border-box;
            padding: calc(var(--thermal-gap) * 0.5);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
        }

        textarea {
            width: 100%;
            box-sizing: border-box;
            padding: calc(var(--thermal-gap) * 0.5);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
            font-family: inherit;
            resize: vertical;
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }
    `;
	}
	firstUpdated() {
		this.fileLabel = this.file.label || "";
		this.fileDescription = this.file.description || "";
	}
	async handleSubmit() {
		this.errorMessage = "";
		const result = await this.client.api.routes.post.updateFile(this.file.path, this.file.fileName.trim()).setLabel(this.fileLabel.trim()).setDescription(this.fileDescription.trim()).execute();
		if (result.success) this.content.updateFileState(result.data.file);
		else this.errorMessage = result.message || "Nepodařilo se upravit soubor";
		return result.success;
	}
	handleLabelChange(event) {
		this.fileLabel = event.target.value;
	}
	handleDescriptionChange(event) {
		this.fileDescription = event.target.value;
	}
	render() {
		const label = t(T.editfile);
		return html`
            <thermal-dialog
                label=${label}
                .beforeClose=${() => this.handleSubmit()}
                button="Uložit změny"
            >
                <slot name="invoker" slot="invoker">
                    <thermal-btn 
                        variant=${ifDefined(this.variant)}
                        size=${ifDefined(this.size)}
                        plain=${ifDefined(this.plain)}
                        icon="edit" iconStyle="micro"
                        tooltip=${label}
                    >${this.label}</thermal-btn>
                </slot>

                <div class="content" slot="content">
                    <div class="form-group">
                        <label for="file-label">Label:</label>
                        <input 
                            type="text" 
                            id="file-label"
                            .value=${this.fileLabel}
                            @input=${this.handleLabelChange}
                            placeholder="Zadejte label souboru (volitelné)"
                        />
                    </div>
                    <div class="form-group">
                        <label for="file-description">Popis:</label>
                        <textarea 
                            id="file-description"
                            .value=${this.fileDescription}
                            @input=${this.handleDescriptionChange}
                            placeholder="Zadejte popis souboru (volitelné)"
                            rows="3"
                        ></textarea>
                    </div>
                    ${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ""}
                </div>

            </thermal-dialog>
        `;
	}
};
__decorate([property({ type: String })], FileEditDialog.prototype, "label", void 0);
__decorate([property({
	type: String,
	reflect: false
})], FileEditDialog.prototype, "variant", void 0);
__decorate([property({
	type: String,
	reflect: true
})], FileEditDialog.prototype, "size", void 0);
__decorate([property({ type: String })], FileEditDialog.prototype, "plain", void 0);
__decorate([property({ type: Object })], FileEditDialog.prototype, "file", void 0);
__decorate([state()], FileEditDialog.prototype, "fileLabel", void 0);
__decorate([state()], FileEditDialog.prototype, "fileDescription", void 0);
__decorate([state()], FileEditDialog.prototype, "errorMessage", void 0);
FileEditDialog = __decorate([customElement("connected-file-edit-dialog")], FileEditDialog);

//#endregion
//#region src/connection/controllers/components/file/ConnectedFileDeleteDialog.ts
let FileDeleteDialog = class FileDeleteDialog extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.showLabel = false;
		this.label = t(T.deletefile);
		this.size = "sm";
		this.plain = false;
		this.onDelete = () => {};
		this.isOpen = false;
		this.isDeleting = false;
	}
	static {
		this.styles = css`
        .content {
            padding: var(--thermal-gap);
        }

        .warning {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            margin-bottom: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
        }

        .file-info {
            background: var(--thermal-background);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin: calc(var(--thermal-gap) * 0.5) 0;
        }

        .file-name {
            font-weight: bold;
            font-size: calc(var(--thermal-fs) * 1.1);
        }

        .file-description {
            color: var(--thermal-slate);
            font-size: calc(var(--thermal-fs) * 0.9);
            margin-top: calc(var(--thermal-gap) * 0.25);
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }
    `;
	}
	async handleDelete() {
		if (!this.client || this.isDeleting) return false;
		this.error = void 0;
		try {
			await this.content.fetchDeleteFile(this.folder.path, this.file.fileName);
			await this.display.reloadCurrentState();
			return true;
		} catch (error) {
			this.error = "Došlo k neočekávané chybě při mazání souboru.";
		}
		return false;
	}
	mayDelete() {
		return !!(this.folder && (this.folder.may_manage_files_in || this.folder.may_manage_folders_in));
	}
	render() {
		if (!this.mayDelete()) return nothing;
		const label = t(T.deletefile);
		return html`

            <thermal-dialog
                label=${label}
                button=${label}
                .beforeClose=${async () => {
			this.error = void 0;
			return await this.handleDelete();
		}}
            >

                <thermal-btn
                    slot="invoker"
                    variant=${ifDefined(this.variant)}
                    size=${ifDefined(this.size)}
                    plain=${ifDefined(this.plain)}
                    icon="trash"
                    iconStyle="micro"
                    tooltip=${label}
                >
                    ${this.showLabel ? label : nothing}
                </thermal-btn>

                <div slot="content" class="dialog-content">
                    
                    <div class="warning">
                        <strong>Pozor!</strong> Tato akce je nevratná.
                    </div>
                    
                    <p>
                        Opravdu chcete smazat soubor <strong>${this.file.fileName}</strong>?
                        ${this.file.label ? html`<br>(<em>${this.file.label}</em>)` : nothing}
                    </p>

                    ${this.error ? html`<div class="error">${this.error}</div>` : nothing}

                </div>
            </thermal-dialog>
        `;
	}
};
__decorate([property({
	type: String,
	converter: booleanConverter(false)
})], FileDeleteDialog.prototype, "showLabel", void 0);
__decorate([property({ type: String })], FileDeleteDialog.prototype, "label", void 0);
__decorate([property({
	type: String,
	reflect: false
})], FileDeleteDialog.prototype, "variant", void 0);
__decorate([property({
	type: String,
	reflect: true
})], FileDeleteDialog.prototype, "size", void 0);
__decorate([property({ type: String })], FileDeleteDialog.prototype, "plain", void 0);
__decorate([property({ type: Object })], FileDeleteDialog.prototype, "file", void 0);
__decorate([property({ type: Object })], FileDeleteDialog.prototype, "folder", void 0);
__decorate([property({ type: Function })], FileDeleteDialog.prototype, "onDelete", void 0);
__decorate([state()], FileDeleteDialog.prototype, "isOpen", void 0);
__decorate([state()], FileDeleteDialog.prototype, "isDeleting", void 0);
__decorate([state()], FileDeleteDialog.prototype, "error", void 0);
FileDeleteDialog = __decorate([customElement("connected-file-delete-dialog")], FileDeleteDialog);

//#endregion
//#region src/connection/controllers/components/file/ConnectedFileTags.ts
let ControlledFileTags = class ControlledFileTags extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.editable = false;
		this.onChange = () => {};
		this.check = icons.check.micro("icon");
	}
	connectedCallback() {
		super.connectedCallback();
		this.content.subscribeToFilesUpdates(this);
	}
	async handleTagClick(slug, tag) {
		if (!this.editable) return;
		if (this.client) {
			const request = this.client.api.routes.post.updateFile(this.folder.path, this.file.fileName);
			if (this.hasTag(slug)) request?.removeTag(slug);
			else request?.addTag(slug);
			const result = await request.execute();
			if (result.success) this.content.updateFileState(result.data.file);
		}
	}
	hasTag(slug) {
		return this.file.tags.includes(slug);
	}
	getContrastColor(backgroundColor) {
		let hex = backgroundColor.replace("#", "");
		if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
		const r = parseInt(hex.substr(0, 2), 16);
		const g = parseInt(hex.substr(2, 2), 16);
		const b = parseInt(hex.substr(4, 2), 16);
		return (r * 299 + g * 587 + b * 114) / 1e3 > 128 ? "#000000" : "#FFFFFF";
	}
	renderTagButton(slug, tag) {
		const has = this.hasTag(slug);
		const backgroundColor = has ? tag.color || "var(--thermal-slate-light)" : this.inline ? "var(--thermal-slate-light)" : "var(--thermal-background)";
		const textColor = has ? tag.color ? this.getContrastColor(tag.color) : "inherit" : "var(--thermal-slate)";
		const iconInvert = has && tag.color && this.getContrastColor(tag.color) === "#FFFFFF" ? 1 : 0;
		const handleKeydown = (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				this.handleTagClick(slug, tag);
			}
		};
		return html`<button
            class="tag-button ${has ? "has" : ""}"
            tabindex="${this.editable ? "0" : "-1"}"
            @click=${() => this.handleTagClick(slug, tag)}
            @keydown=${handleKeydown}
        >
            <div class="tag-button-content" style="background-color: ${backgroundColor}; color: ${textColor}; --icon-invert: ${iconInvert};">
                ${has ? this.i(this.check) : nothing}
                <span>${tag.name}</span>
            </div>
        </button>`;
	}
	static {
		this.styles = css`

        :host {
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);

            display: flex;
            flex-wrap: wrap;
            gap: 1em;
            flex-direction: column;
            align-items: flex-start;
        }

        /* Inline layout - tags side by side */
        :host([inline]) {
            flex-direction: row;
            gap: .5em;
        }

        :host([inline]) .tag-group {
            flex-direction: row;
            gap: .5em;
        }

        :host([inline]) .tag-list {
            flex-direction: row;
            gap: .5em;
        }

        .tag-group {
            display: flex;
            flex-direction: column;
            gap: .5em;
            align-items: flex-start;
        }

        .tag-group-label {
            font-size: .8em;
            color: var(--thermal-slate-dark);
            margin-bottom: .25em;
        }

        /* Hide labels in inline mode */
        :host([inline]) .tag-group-label {
            display: none;
        }

        .tag-list {
            display: flex;
            flex-wrap: wrap;
            gap: .5em;
            flex-direction: column;
            align-items: flex-start;
        }
    
        .tag-button {
            border: 0;
            cursor: default;
            background: transparent;
            padding: 0;
            transition: all .2s ease-in-out;
            outline: none;
        }

        .tag-button:focus,
        .tag-button:focus-visible {
            outline: 2px var(--thermal-border-style)var(--thermal-primary, #007bff);
            outline-offset: 2px;
        }

        .tag-button-content {
            border-radius: 0 var(--thermal-radius) var(--thermal-radius) 0;
            padding: .5em 1em .5em 2em;
            display: flex;
            align-items: center;
            gap: .5em;
            position: relative;

            /* Simulace trojúhelníka s hladce zakulaceným hrotem */
            clip-path: polygon(1.5em 0%, 100% 0%, 100% 100%, 1.5em 100%, 0.4em 65%, 0.3em 55%, 0.3em 45%, 0.4em 35%);

            transition: all .2s ease-in-out;
        }

        /* Editable styling */
        :host([editable="true"]) .tag-button {
            cursor: pointer;
        }

        :host([editable="true"]) .tag-button:hover  {
            filter: drop-shadow(0 0 3px var(--thermal-slate));
        }

        .tag-button-content::before {
            content: '';
            position: absolute;
            left: 1em;
            top: 50%;
            transform: translateY(-50%);
            width: .5em;
            height: .5em;
            background: var(--thermal-slate-light);
            border-radius: 50%;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
        }

        /* Small size styling */
        :host([size="sm"]) .tag-button-content {
            padding: .25em .5em .25em 1em;
            font-size: .7em;
            clip-path: polygon(1em 0%, 100% 0%, 100% 100%, 1em 100%, 0.2em 65%, 0.15em 55%, 0.15em 45%, 0.2em 35%);
        }

        /* Hide dot and checkbox in small size */
        :host([size="sm"]) .tag-button-content::before {
            display: none;
        }

        :host([size="sm"]) .tag-button-content .icon {
            display: none;
        }

        .tag-button:not(.has):hover .tag-button-content {
            color: var(--thermal-foreground) !important;
        }

        .tag-button-content .icon {
            width: 1em;
            height: 1em;
            filter: brightness(0) invert(var(--icon-invert, 0));
        }
    
    `;
	}
	render() {
		const allTags = {
			...this.folder.parent_tags,
			...this.folder.own_tags
		};
		const assignedTags = Object.entries(allTags).filter(([slug]) => this.hasTag(slug));
		const unassignedTags = Object.entries(allTags).filter(([slug]) => !this.hasTag(slug));
		return html`

            ${assignedTags.length > 0 ? html`
                <div class="tag-group">
                    <div class="tag-group-label">${t(T.assignedtags)}</div>
                    <div class="tag-list">
                        ${assignedTags.map(([slug, info]) => this.renderTagButton(slug, info))}
                    </div>
                </div>
            ` : ""}

            ${unassignedTags.length > 0 && this.editable ? html`
                <div class="tag-group">
                    <div class="tag-group-label">${t(T.availabletags)}</div>
                    <div class="tag-list">
                        ${unassignedTags.map(([slug, info]) => this.renderTagButton(slug, info))}
                    </div>
                </div>
            ` : ""}
        `;
	}
};
__decorate([property({
	type: String,
	reflect: true
})], ControlledFileTags.prototype, "editable", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ControlledFileTags.prototype, "inline", void 0);
__decorate([property({
	type: String,
	reflect: true
})], ControlledFileTags.prototype, "size", void 0);
__decorate([property({ type: Object })], ControlledFileTags.prototype, "file", void 0);
__decorate([property({ type: Object })], ControlledFileTags.prototype, "folder", void 0);
__decorate([property({ type: Function })], ControlledFileTags.prototype, "onChange", void 0);
ControlledFileTags = __decorate([customElement("connected-file-tags")], ControlledFileTags);

//#endregion
//#region src/connection/controllers/components/file/comments/ConnectedFileComment.ts
let FileComment = class FileComment extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.onChange = () => {};
		this.isEditing = false;
	}
	static {
		this.styles = css`
    
        :host {

            padding: .5em;
            display: block;

            font-size: var( --thermal-fs );

            background: var(--thermal-background);

            opacity: 0.7;

            border-radius: var(--thermal-radius);
            width: calc( 100% - 1em );
            max-width: calc( 100% - 1em );
            align-self: flex-end;

            box-sizing: border-box;
        }

        :host(.my-comment) {
            opacity: 1;
            align-self: flex-start;
        }

        header {
            display: flex;
            gap: calc(var(--thermal-gap) * 0.5);
            justify-content: space-between;


            margin-bottom: .3em;
            width: 100%;
            
            font-size: calc(var(--thermal-fs) * 0.7);
            color: var( --thermal-slate );
            

            > div {
                flex-grow: 1;

                span {
                    display: block;
                }

                div {

                }

            }


            aside {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                gap: .2em;
            }

        }

        main {

            font-size: calc(var(--thermal-fs) * 0.8);
        
            p {
                margin: 0;
                padding: 0;
            }
        
        }
    
    `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.client.subscribeToIdentityChanges(this);
		this.content.subscribeToFileUpdates(this);
		this.content.subscribeToFilesUpdates(this);
		this.content.subscribeToFolderUpdates(this);
	}
	async handleDelete() {
		if (this.client) {
			const result = await this.client.api.routes.post.fileDeleteComment(this.folder.path, this.file.fileName, this.comment.timestamp).execute();
			if (result.success) this.content.updateFileState(result.data.file);
			else this.error = result.message;
		}
	}
	mayManage() {
		if (this.folder && (this.folder.may_manage_files_in || this.folder.may_manage_folders_in) && this.comment && this.client && this.client.api.auth.getIdentity()?.meta.login === this.comment.by.login) return true;
		return false;
	}
	render() {
		if (!this.file || !this.comment || !this.folder) return nothing;
		const time = TimeFormat.human(this.comment.timestamp);
		if (this.client?.identity?.meta.login === this.comment.by.login) this.classList.add("my-comment");
		else this.classList.remove("my-comment");
		return html`
            <header>

                <div>
                    <span>${time}</span>
                    <div>${this.comment.by.name}</div>
                </div>

            ${this.mayManage() ? html`
                
                <aside>
                    <thermal-btn 
                        @click=${() => {
			this.isEditing = !this.isEditing;
			this.requestUpdate();
		}}
                        size="sm"
                        variant="${this.isEditing ? "foreground" : "default"}"
                        icon="${this.isEditing ? "close" : "edit"}"
                        iconStyle="micro"
                        plain="true"
                    ></thermal-btn>

                    <thermal-btn 
                        @click=${() => this.handleDelete()} 
                        icon="trash" iconStyle="micro"
                        size="sm"
                        variant="default"
                        plain="true"
                    ></thermal-btn>

                </aside>
            ` : nothing}
            </header>

            <main>
            ${this.isEditing ? html`
                <file-comment-form
                    .comment=${this.comment}
                    .file=${this.file}
                    .folder=${this.folder}
                    .onChange=${(file) => {
			this.isEditing = false;
			this.onChange?.(file);
		}}
                ></file-comment-form>
                ` : html`<p>${this.comment.message}</p>`}
            </main>
        `;
	}
};
__decorate([property({ type: Object })], FileComment.prototype, "comment", void 0);
__decorate([property({ type: Object })], FileComment.prototype, "file", void 0);
__decorate([property({ type: Object })], FileComment.prototype, "folder", void 0);
__decorate([property({ type: Function })], FileComment.prototype, "onChange", void 0);
__decorate([state()], FileComment.prototype, "error", void 0);
__decorate([state()], FileComment.prototype, "isEditing", void 0);
FileComment = __decorate([customElement("connected-file-comment")], FileComment);

//#endregion
//#region src/connection/controllers/components/file/comments/ConnectedFileComments.ts
let FileComments = class FileComments extends ControlledConsumer {
	static {
		this.styles = css`
    
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            font-size: var(--thermal-fs);
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: .25em;
            flex: 1;
            min-height: 100px;
            overflow-y: auto;
            padding: .25em 0;
        }

        .form-container {
            flex-shrink: 0;
            margin-top: .25em;
        }

        .placeholder {

            height: 100%;
            padding: .5em;

            display: flex;
            justify-content: center;
            align-items: center;

            border: var(--thermal-border-width) dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);

            font-size: .8em;
            color: var(--thermal-slate);

            &.tiny {
            
                height: 40px;
                text-align: center;

            
            }


        }
    
    `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.client.subscribeToIdentityChanges(this);
		this.content.subscribeToFileUpdates(this);
		this.content.subscribeToFilesUpdates(this);
	}
	firstUpdated() {
		setTimeout(() => this.scrollToBottom(), 0);
	}
	updated() {
		this.scrollToBottom();
	}
	scrollToBottom() {
		const listElement = this.shadowRoot?.querySelector(".list");
		if (listElement) listElement.scrollTo({
			top: listElement.scrollHeight,
			behavior: "smooth"
		});
	}
	render() {
		return html`

            <div class="list">
                ${this.file.comments && this.file.comments.length > 0 ? this.file.comments.map((comment) => html`
                        <file-comment
                            .comment=${comment}
                            .file=${this.file}
                            .folder=${this.folder}
                        ></file-comment>
                    `) : html`<div class="placeholder">
                    <span>${t(T.nocomments)}</span>
                </div>`}
            </div>
            
            ${this.folder && this.folder.may_manage_files_in ? html`
                    <div class="form-container">
                        <controlled-file-comment-form 
                            .file=${this.file} 
                            .folder=${this.folder} 
                            .onChange=${() => {
			this.requestUpdate();
			setTimeout(() => this.scrollToBottom(), 0);
		}}>
                        </controlled-file-comment-form>
                    </div>
                    ` : nothing}

            ${this.folder && !this.folder.may_manage_files_in ? html`<div class="placeholder  tiny"><span>Nemáte oprávnění komentovat tento soubor</span></div>` : nothing}
        `;
	}
};
__decorate([property({ type: Object })], FileComments.prototype, "file", void 0);
__decorate([property({ type: Object })], FileComments.prototype, "folder", void 0);
FileComments = __decorate([customElement("connected-file-comments")], FileComments);

//#endregion
//#region src/connection/controllers/components/file/comments/ControlledFileCommentForm.ts
let FileCommentForm = class FileCommentForm extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.onChange = () => {};
		this.message = "";
	}
	connectedCallback() {
		super.connectedCallback();
		this.client.subscribeToIdentityChanges(this);
		this.content.subscribeToFileUpdates(this);
		this.content.subscribeToFilesUpdates(this);
	}
	updated(changedProperties) {
		if (changedProperties.has("comment") && this.comment && !this.message) this.message = this.comment.message;
	}
	static {
		this.styles = css`
    
        :host {
            font-size: var( --thermal-fs );
        }


        main {
            display: flex;
            flex-direction: column;
            gap: .25em;
        }

        textarea {
            min-height: 40px;
            padding: .5em;
            resize: vertical;

            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);

            font-family: inherit;
            font-size: calc(var(--thermal-fs) * 0.8);

            color: var(--thermal-foreground);
            background: var(--thermal-background);
            
        }

        .form-actions {
            display: flex;
            justify-content: flex-end;
        }

        .small {
            font-size: calc(var(--thermal-fs) * 0.8);
        }

        .slate {
            color: var(--thermal-slate);
        }
    
    `;
	}
	async handleSubmit(event) {
		event.preventDefault();
		if (this.client && this.message.trim().length >= 3) if (!this.comment) {
			const result = await this.client.api.routes.post.fileAddComment(this.folder.path, this.file.fileName, this.message.trim()).execute();
			if (result.success) {
				this.message = "";
				this.error = void 0;
				this.onChange?.(result.data.file);
				this.content.updateFileState(result.data.file);
			} else this.error = result.message;
		} else {
			const result = await this.client.api.routes.post.fileUpdateComment(this.folder.path, this.file.fileName, this.comment.timestamp, this.message.trim()).execute();
			if (result.success) {
				this.message = "";
				this.error = void 0;
				this.content.updateFileState(result.data.file);
				this.onChange?.(result.data.file);
			} else this.error = result.message;
		}
	}
	handleMessageChange(event) {
		this.message = event.target.value;
	}
	handleKeyDown(event) {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			if (this.message.trim().length >= 3) this.handleSubmit(event);
		}
	}
	mayManage() {
		if (this.folder && (this.folder.may_manage_files_in || this.folder.may_manage_folders_in)) return true;
		return false;
	}
	render() {
		if (!this.client || !this.file || !this.folder) return nothing;
		const canSubmit = this.message.trim().length >= 3;
		const label = !!this.comment ? t(T.editcomment) : t(T.addcomment);
		return html`
            <form >
                <main>
                    <textarea 
                        placeholder=${label}
                        .value=${this.message}
                        @input=${this.handleMessageChange}
                        @keydown=${this.handleKeyDown}
                        required
                    ></textarea>
                    
                    ${this.error ? html`<div class="error">${this.error}</div>` : nothing}
                    
                    <div class="form-actions">
                        <thermal-btn 
                            variant="primary" 
                            size="sm"
                            type="submit"
                            ?disabled=${!canSubmit}
                            @click=${this.handleSubmit}
                        >
                            ${label}
                        </thermal-btn>

                    </div>
                </main>
            </form>
        `;
	}
};
__decorate([property({ type: Object })], FileCommentForm.prototype, "comment", void 0);
__decorate([property({ type: Object })], FileCommentForm.prototype, "file", void 0);
__decorate([property({ type: Object })], FileCommentForm.prototype, "folder", void 0);
__decorate([property({ type: Function })], FileCommentForm.prototype, "onChange", void 0);
__decorate([state()], FileCommentForm.prototype, "error", void 0);
__decorate([state()], FileCommentForm.prototype, "message", void 0);
FileCommentForm = __decorate([customElement("controlled-file-comment-form")], FileCommentForm);

//#endregion
//#region src/connection/controllers/components/folder/crud/ConnectedFolderEditDialog.ts
let FolderEditDialog = class FolderEditDialog extends AbstractFolderDialog {
	constructor(..._args) {
		super(..._args);
		this.closeLabel = "savechanges";
		this.dialogLabel = "editfolder";
		this.folderName = "";
		this.folderDescription = "";
		this.errorMessage = "";
	}
	static {
		this.styles = css`

        :host {
            align-self: stretch;
        }

        input,
        label,
        textarea,
        .form-group,
        .content,        
        .error {
            box-sizing: border-box;
        }

        .form-group {
            margin-bottom: var(--thermal-gap);
        }

        label {
            display: block;
            margin-bottom: calc(var(--thermal-gap) * 0.5);
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: calc(var(--thermal-gap) * 0.5);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
        }

        textarea {
            width: 100%;
            padding: calc(var(--thermal-gap) * 0.5);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
            font-family: inherit;
            resize: vertical;
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }
    `;
	}
	firstUpdated() {
		this.folderName = this.folder.name || this.folder.slug;
		this.folderDescription = this.folder.description || "";
	}
	async beforeClose() {
		if (!this.folderName.trim()) {
			this.errorMessage = "Název složky je povinný";
			return false;
		}
		if (!this.client) {
			this.errorMessage = "Klient není dostupný";
			return false;
		}
		this.errorMessage = "";
		const result = await this.client.api.routes.post.updateFolder(this.folder.path).setName(this.folderName.trim()).setDescription(this.folderDescription.trim()).execute();
		if (result.success) {
			if (this.onSuccess) this.onSuccess(result.data.result.info);
		} else this.errorMessage = result.message || "Nepodařilo se upravit složku";
		return result?.success;
	}
	handleTitleChange(event) {
		this.folderName = event.target.value;
	}
	handleDescriptionChange(event) {
		this.folderDescription = event.target.value;
	}
	renderContent() {
		return html`<div class="form-group">
    <label for="folder-name">${this.t("name")}:</label>
    <input 
        type="text" 
        id="folder-name"
        .value=${this.folderName}
        @input=${this.handleTitleChange}
        placeholder="Zadejte název složky"
        required
    />
</div>
<div class="form-group">
    <label for="folder-description">${this.t("description")}:</label>
    <textarea 
        id="folder-description"
        .value=${this.folderDescription}
        @input=${this.handleDescriptionChange}
        placeholder="Zadejte popis složky (volitelné)"
        rows="3"
    ></textarea>
</div>
${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ""}`;
	}
	renderButtons() {
		return html`<thermal-btn
    @click=${() => this.close()}
    slot="button"    
>${this.t("back")}</thermal-btn>`;
	}
	shouldRenderDialog() {
		if (!this.client.isClientConnected || !this.client.identity || !this.client.isLoggedIn || !this.folder) return false;
		if (this.client.identity.meta.is_root) return true;
		return this.folder.may_manage_folders_in || this.folder.may_manage_files_in;
	}
};
__decorate([state()], FolderEditDialog.prototype, "folderName", void 0);
__decorate([state()], FolderEditDialog.prototype, "folderDescription", void 0);
__decorate([state()], FolderEditDialog.prototype, "errorMessage", void 0);
__decorate([property({ type: Function })], FolderEditDialog.prototype, "onSuccess", void 0);
FolderEditDialog = __decorate([customElement("connected-folder-edit-dialog")], FolderEditDialog);

//#endregion
//#region src/connection/controllers/components/folder/crud/ConnectedFolderDeleteDialog.ts
let FolderDeleteDialog = class FolderDeleteDialog extends AbstractFolderDialog {
	constructor(..._args) {
		super(..._args);
		this.closeLabel = "deletefolder";
		this.dialogLabel = "deletefolder";
		this.errorMessage = "";
	}
	static {
		this.styles = css`

        .warning {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            margin-bottom: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
        }

        .folder-info {
            background: var(--thermal-background);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin: calc(var(--thermal-gap) * 0.5) 0;
        }

        .folder-name {
            font-weight: bold;
            font-size: calc(var(--thermal-fs) * 1.1);
        }

        .folder-description {
            color: var(--thermal-slate);
            font-size: calc(var(--thermal-fs) * 0.9);
            margin-top: calc(var(--thermal-gap) * 0.25);
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }
    `;
	}
	async beforeClose() {
		this.errorMessage = "";
		const result = await this.client.api.routes.post.deleteFolder(this.folder.path).execute();
		if (result?.success) {
			if (this.onSuccess) this.onSuccess(this.folder);
		} else this.errorMessage = result?.message || "Nepodařilo se smazat složku";
		return result?.success;
	}
	shouldRenderDialog() {
		return true;
	}
	renderContent() {
		return html`<div class="warning">
    <strong>Upozornění:</strong> Tato akce je nevratná. Složka a veškerý její obsah bude trvale smazán.
</div>
<p>Opravdu chcete smazat následující složku?</p>
<div class="folder-info">
<div class="folder-name">${this.folder.name || this.folder.slug}</div>
${this.folder.description ? html`<div class="folder-description">${this.folder.description}</div>` : ""}
${this.folder.lrc_count > 0 ? html`<div class="folder-description">Obsahuje ${this.folder.lrc_count} souborů</div>` : ""}
</div>
${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ""}
</div>`;
	}
	renderButtons() {
		return html`<thermal-btn
    @click=${() => this.close()}
    slot="button"    
>${this.t("back")}</thermal-btn>`;
	}
};
__decorate([property({ type: Function })], FolderDeleteDialog.prototype, "onSuccess", void 0);
__decorate([property({ type: String })], FolderDeleteDialog.prototype, "errorMessage", void 0);
FolderDeleteDialog = __decorate([customElement("connected-folder-delete-dialog")], FolderDeleteDialog);

//#endregion
//#region src/connection/controllers/components/folder/crud/ConnectedFolderCreateDialog.ts
let FolderAddDialog = class FolderAddDialog extends AbstractFolderDialog {
	constructor(..._args) {
		super(..._args);
		this.closeLabel = "create";
		this.dialogLabel = "createfolder";
		this.folderName = "";
		this.folderDescription = "";
		this.errorMessage = "";
		this.mayHaveFiles = true;
	}
	static {
		this.styles = css`

        .form-group {
            margin-bottom: var(--thermal-gap);
        }

        label {
            display: block;
            margin-bottom: calc(var(--thermal-gap) * 0.5);
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: calc(var(--thermal-gap) * 0.5);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
        }

        textarea {
            width: 100%;
            padding: calc(var(--thermal-gap) * 0.5);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
            font-family: inherit;
            resize: vertical;
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }
    `;
	}
	async beforeClose() {
		if (!this.folderName.trim()) {
			this.errorMessage = "Název složky je povinný";
			return false;
		}
		this.errorMessage = "";
		const path = this.folder.path;
		const result = await this.client.api.routes.post.createFolder(path, this.folderName.trim()).setDescription(this.folderDescription.trim()).setMayHaveFiles(this.mayHaveFiles).execute();
		if (result?.success) {
			this.folderName = "";
			this.folderDescription = "";
			if (this.onSuccess) this.onSuccess(result.data.result.info);
		} else this.errorMessage = result?.message || "Nepodařilo se vytvořit složku";
		return result?.success;
	}
	handleInputChange(event) {
		this.folderName = event.target.value;
	}
	handleDescriptionChange(event) {
		this.folderDescription = event.target.value;
	}
	renderToggleButton(value, onClick, label, tooltip, icon, iconStyle) {
		return html`<thermal-btn
    .tooltip=${tooltip}
    icon=${icon}
    iconStyle=${iconStyle}
    variant=${value ? "foreground" : "default"}
    @click=${onClick}
>${label}</thermal-btn>`;
	}
	renderContentMode() {
		if (this.client.isLoggedIn === false || this.content.folder?.may_manage_folders_in === false) return nothing;
		return html`<div class="form-group">
    <label for="folder-may-have-files">Určeno pro:</label>
    <div>
        ${this.renderToggleButton(!this.mayHaveFiles, () => this.mayHaveFiles = false, "Podsložky", "Tato složka bude moci obsahovat další podsložky", "folder", "micro")}
        ${this.renderToggleButton(this.mayHaveFiles, () => this.mayHaveFiles = true, "Soubory", "Tato složka bude moci obsahovat soubory", "image", "micro")}
    </div>
<div>`;
	}
	renderContent() {
		return html`<div class="form-group">
    <label for="folder-name">Název složky:</label>
    <input 
        type="text" 
        id="folder-name"
        .value=${this.folderName}
        @input=${this.handleInputChange}
        placeholder="Zadejte název nové složky"
        required
    />
</div>
<div class="form-group">
    <label for="folder-description">Popis:</label>
    <textarea 
        id="folder-description"
        .value=${this.folderDescription}
        @input=${this.handleDescriptionChange}
        placeholder="Zadejte popis složky (volitelné)"
        rows="3"
    ></textarea>
</div>
${this.renderContentMode()}
${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ""}`;
	}
	renderButtons() {
		return html`<thermal-btn
        @click=${() => this.close()}
        slot="button"    
    >${this.t("back")}</thermal-btn>`;
	}
	shouldRenderDialog() {
		if (!this.client.isClientConnected || !this.client.identity || !this.client.isLoggedIn || !this.folder) return false;
		if (this.client.identity.meta.is_root && !this.folder.may_have_files === false) return true;
		return this.folder.may_manage_folders_in;
	}
};
__decorate([property({ type: String })], FolderAddDialog.prototype, "folderName", void 0);
__decorate([property({ type: String })], FolderAddDialog.prototype, "folderDescription", void 0);
__decorate([property({ type: String })], FolderAddDialog.prototype, "errorMessage", void 0);
__decorate([property({ type: Function })], FolderAddDialog.prototype, "onSuccess", void 0);
__decorate([state()], FolderAddDialog.prototype, "mayHaveFiles", void 0);
FolderAddDialog = __decorate([customElement("connected-folder-create-dialog")], FolderAddDialog);

//#endregion
//#region src/connection/controllers/components/file/ConnectedFileHeader.ts
let ConnectedFileHeader = class ConnectedFileHeader extends ControlledConsumer {
	connectedCallback() {
		super.connectedCallback();
		this.content.subscribeToFileUpdates(this);
		this.content.subscribeToFolderUpdates(this);
		this.client.subscribeToIdentityChanges(this);
	}
	static {
		this.styles = css`
:host {
    display: flex;
    flex-wrap: no-wrap;
    gap: .5em;

    color: var(--thermal-foreground);
    font-size: var(--thermal-fs);
}

.part {

    display: block;
    background: var(--thermal-background);
    color: var(--thermal-foreground);
    border-radius: var(--thermal-radius);
    padding: var(--thermal-gap);
    box-sizing: border-box;
}

h1 {
    font-size: 1em;
    margin: 0;
    padding: 0;
    margin-bottom: .5em;
}


section {
    display: grid !important;
    grid-template-columns: 2em 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: var(--thermal-gap);
    flex-grow: 1;
}

thermal-icon {
    grid-row: 1;
    grid-column: 1;
    width: 2em;
    display: block;
    color: var(--thermal-slate);
}

.time-info {
    grid-row: 1;
    grid-column: 2;
}

.label-info {
    grid-row: 1;
    grid-column: 3;
}

.colophon {
    grid-row: 1;
    grid-column: 4;
    text-align: right;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    gap: .3em;

    thermal-btn {
        opacity: .5;
        transition: opacity .3s ease-in-out;
        cursor: help !important;

        &:hover,
        &:focus {
            opacity: 1;
        }
    }

}

.actions {
    grid-row: 2;
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
}

.actions:not(:has(*)) {
    display: none;
}

/* Fallback for browsers without :has() support */
.actions:empty {
    display: none;
}

.small {
    font-size: calc(var(--thermal-fs) * 0.8);
}

.slate {
    color: var(--thermal-slate);
}

.slate-dark {
    color: var(--thermal-slate-dark);
}

.slate-light {
    color: var(--thermal-slate-light);
}

`;
	}
	renderColophon() {
		if (this.content.file === void 0) return nothing;
		return html`<div class="colophon small slate">
    <thermal-btn 
        variant="text"
        tooltip="Čas nahrání souboru"
        icon="upload"
        iconStyle="micro"
        interactive="false"
    >${TimeFormat.human(this.content.file.uploaded)}</thermal-btn>

    ${this.content.file.uploadedby ? html`<thermal-btn 
                variant="text"
                tooltip="Nahráno uživatelem"
                icon="user"
                iconStyle="micro"
                interactive="false"
            >${this.content.file.uploadedby.name}</thermal-btn>` : nothing}
</div>`;
	}
	renderUpButton() {
		if (!this.content.folder) return nothing;
		return html`<thermal-btn 
    variant="background" 
    @click=${() => {
			if (this.content.folder !== void 0) this.display.navigateToFolderAndLoad(this.content.folder.path);
		}} 
    icon="close" 
    iconStyle="outline" 
    size="xl"
    tooltip="Zpět do složky '${this.content.folder.name}'."
></thermal-btn>`;
	}
	render() {
		if (this.content.file === void 0) return nothing;
		const time = TimeFormat.human(this.content.file.timestamp);
		return html`

${this.renderUpButton()}

<section class="part">

    <thermal-icon icon="image" variant="outline"></thermal-icon>

    <div class="time-info">
        <h1>${time}</h1>
        <div class="small slate">${this.content.file.fileName}</div>
    </div>

    <div class="label-info">
        ${this.content.file.label ? html`<h1>${this.content.file.label}</h1>` : nothing}
        ${this.content.file.description ? html`<div class="small slate">${this.content.file.description}</div>` : nothing}
    </div>

    ${this.renderColophon()}
                
    <div class="actions">
        <slot></slot>
    </div>
</section>`;
	}
};
ConnectedFileHeader = __decorate([customElement("connected-file-header")], ConnectedFileHeader);

//#endregion
//#region src/connection/controllers/components/folder/listing/ConnectedSubfoldersGrid.ts
let SubfoldersGrid = class SubfoldersGrid extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.slug = "default_group";
		this.showDiscussion = false;
		this.editableTags = false;
		this.columnCount = 0;
		this.selectedFolders = [];
		this.onSelectionChange = () => {};
	}
	firstUpdated(_changedProperties) {
		super.firstUpdated(_changedProperties);
		this.columnCount = Object.keys(this.content.grid?.header ?? {}).length;
		this.registry.minmax.addListener(this.UUID, (value) => {
			this.log(value);
		});
		this.registry.onProcessingEnd.set(this.UUID, () => {
			this.log("Processing ended", this.registry.minmax.value, this.registry.range.value);
			this.requestUpdate();
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.registry.onProcessingEnd.delete(this.UUID);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		this.columnCount = Object.keys(this.content.grid?.header ?? {}).length;
	}
	renderHeader(header) {
		const items = Object.values(header);
		if (items.length === 0) return nothing;
		return html`<thead>
            ${items.map(this.renderHeaderCell.bind(this))}
        </thead>`;
	}
	renderHeaderCell(folder) {
		return html`<th class="folder-header cell cell_header">
            <div
                class="cell-inner"
            >

                <thermal-icon icon="folder" variant="outline"></thermal-icon>

                <div>

                    <h2>${folder.name}</h2>
                    
                    ${folder.description ? html`<p class="description small">${folder.description}</p>` : nothing}

                </div>

                <div class="folder-header-buttons">

                    <connected-upload-dialog
                        .folder=${folder}
                        label=""
                        variant="default"
                        plain="true"
                        tooltip="Nahrát do složky '${folder.name}'"
                        .onSuccess=${() => {
			this.display.reloadCurrentState();
		}}
                    ></connected-upload-dialog>

                    <thermal-btn
                        tooltip="Zobrazit všech ${folder.lrc_count} souborů ve složce '${folder.name}'."
                        @click=${() => this.onFolderClick?.(folder)}
                        plain="true"
                        icon="zoom"
                        iconStyle="micro"
                    ></thermal-btn>

                </div>
            </div>
        </th>`;
	}
	renderBody(body) {
		const items = Object.values(body);
		if (items.length === 0) return nothing;
		return html`<tbody>
            ${items.map(this.renderBodyRow.bind(this))}
        </tbody>`;
	}
	renderBodyRow(item) {
		const folders = Object.values(item.folders);
		return html`

        <group-provider
            slug="${this.slug + item.label}"
            batch="true"
            autoclear="true"
            style="display: contents;"
        >

            ${this.renderBodyRowCellHeader(item.label)}

            <tr class="group-row__body">
                ${folders.map((folder) => this.renderBodyRowCellBody(folder))}
            </tr>

        </group-provider>
        `;
	}
	renderBodyRowCellHeader(label) {
		const groupSlug = this.slug + label;
		const minmax = this.registry.groups.value.find((g) => g.id === groupSlug)?.minmax.value;
		const tooltip = minmax ? [minmax.min.toFixed(2), minmax.max.toFixed(2)].join(" - ") + "  °C" : ";";
		const click = () => {
			if (minmax) this.registry.range.imposeRange({
				from: minmax.min,
				to: minmax.max
			});
		};
		const mouseenter = () => {
			if (this.setHighlight && minmax) this.setHighlight({
				from: minmax.min,
				to: minmax.max
			});
		};
		const mouseleave = () => {
			if (this.setHighlight) this.setHighlight(void 0);
		};
		return html`<tr class="group-row__header">
    <td class="group-header cell" colspan="${this.columnCount}">
        <div class="group-separator"></div>
        <div class="cell-inner">

            <thermal-btn
                class="cell-button"
                tooltip=${tooltip}
                @click=${click.bind(this)}
                @mouseleave=${mouseleave.bind(this)}
                @mouseenter=${mouseenter.bind(this)}
            >${label}</thermal-btn>

            <div style="display: inline-block; text-align: left;">
                <group-download-dropdown></group-download-dropdown>
            </div>

        </div>
    </td>
</tr>`;
	}
	renderBodyRowCellBody(files) {
		if (!this.content.grid || files.length === 0) return html`<td></td>`;
		const folder = this.content.grid.header[files[0].folder];
		return html`<td class="folder-content cell">
    <div class="cell-inner">
        ${files.map((file) => this.renderBodyRowCellBodyFile(folder, file))}
    </div>
</td>`;
	}
	renderBodyRowCellBodyFile(folder, file) {
		return html`
            <file-provider
                batch="true"
                autoclear="true"
                thermal="${file.url}"
                class="file-entry"
            >

                <header>

                    <div class="file-entry-info">
                        <h4>${TimeFormat.human(file.timestamp)}</h4>
                        <p class="small">${file.label}</p>
                    </div>

                    <div class="file-entry-buttons">

                        <file-tags
                            .inline=${true}
                            .file=${file}
                            .folder=${folder}
                            .editable=${this.editableTags}
                            .onChange=${(file) => {
			this.log("tags changed");
			this.onFileEdit?.(file);
		}}
                            size="sm"
                        ></file-tags>

                        <file-range-propagator
                            plain="true"
                            icon="range"
                            iconStyle="outline"
                            size="md"
                            hideLabel="true"
                        ></file-range-propagator>

                        <connected-file-delete-dialog
                            .file=${file}
                            .folder=${folder}
                            size="md"
                            plain="true"
                            .onDelete=${() => {
			this.display.reloadCurrentState();
		}}
                        ></connected-file-delete-dialog>
                        
                        <thermal-btn
                            plain="true"
                            icon="zoom"
                            iconStyle="micro"
                            tooltip="Zobrazit detail tohoto souboru."
                            @click=${() => {
			this.onFileClick?.(folder, file);
		}}
                        >
    
                        </thermal-btn>

                    </div>
                </header>
                
                <file-canvas style="display: block;"></file-canvas>

                ${this.showDiscussion ? html`<div class="comments">
                    <file-comments
                    .file=${file}
                    .folder=${folder}
                    .onChange=${(file) => {
			this.log("comments changed");
			this.onFileEdit?.(file);
		}}
                    ></file-comments>
                </div>` : nothing}


            </file-provider>
        
        `;
	}
	static {
		this.styles = css`

        :root {
            --cell-indent: .5em;
        }
    
        :host {

            --cell-indent: .5em;

            width: 100%;

            position: relative;

            font-size: var( --thermal-fs );
            color: var(--thermal-foreground);

            box-sizing: border-box;

            display: table;
            table-layout: fixed;

            

            & > thermal-poster {
                display: table-row;
                width: 100%;
            }

        }

        group-provider {
            display: contents;
        }

        tr, td, th {
            margin: 0;
            padding: 0;
            border: none;
            border-collapse: collapse;
            text-align: left;
            width: auto;
            box-sizing: border-box;
        }

        thead {
            position: sticky;
            top: 0px;
            z-index: 100;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        th,
        p {
            font-family: var(--thermal-font-family, sans-serif);
            font-size: var(--thermal-fs);    
            font-weight: normal;
            line-height: 1em;
            margin: 0;
            padding: 0;
            border: 0;
            text-align: left;
            box-sizing: border-box;
        }

        .cell-button {
        }

        .small {
            font-size: 0.8em;
            opacity: .5;
        }

        .cell,
        .cell-inner {
            box-sizing: border-box;
        }

        .cell {
        
        }

        .cell-inner {
            height: 100%;
        }

        
        .cell-indent {
            padding: var(--cell-indent);
        }

        .folder-header {
            padding: 0 var(--cell-indent);
        }

        .cell_header {

            > .cell-inner {
                display: grid;
                gap: .5em;
                grid-template-columns: 1.5em 1fr auto;
                grid-template-rows: auto;
                position: relative;
                padding: 1em;
                background: var(--thermal-background);
                border-radius: var(--thermal-radius);

                thermal-icon {
                    opacity: .5;
                }

                h2 {
                    font-weight: bold;
                }

                .description {
                    margin-top: .25em;
                }

                &::after {
                    content: "";
                    position: absolute;
                    width: 1em;
                    height: 1em;
                    background: var(--thermal-background);
                    bottom: -.5em;
                    transform: rotate(45deg);
                    left: 1.15em;
                }
            }

        }

        .group-header {

            text-align: center;
            position: relative;

            padding-top: 1em;
            padding-bottom: .5em;

            .cell-inner {

                position: relative;
                
                thermal-btn {
                    display: inline-block;
                }
                
            }

            

            .group-separator {
                position: absolute;
                height: 1.5em;
                width: 100%;
                left: 0px;
                bottom: 0px;

                border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;

                border-top: var(--thermal-border-width) var(--thermal-border-style)var(--thermal-slate);
                
                z-index: 0;
                
            }
        }

        .folder-header-buttons {
            display: flex;
            align-items: flex-start;
            gap: .25em;
        }

        .folder-content {

            .cell-inner {
                padding: 0 .5em;
            }
            
        }

        .file-entry {

            padding-bottom: 1em;
            display: block;

            &:last-child {
                padding-bottom: 0;
            }
        
            & > header {

                padding: .5em;
                box-sizing: border-box;

                width: 100%;

                border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
                background: var(--thermal-background);

                display: grid;
                grid-template-columns: 1fr auto;


                .file-entry-info {
                    display: flex;
                    gap: .5em;
                    align-items: center;
                    & > * {
                        display: inline-flex;
                    }
                }

                .file-entry-buttons {
                    display: flex;
                    align-items: center;
                    gap: .23em;
                }

            }

            .comments {
                background: var(--thermal-background);
                padding: .5em;
                box-sizing: border-box;
                border-radius: 0 0 var(--thermal-radius) var(--thermal-radius);
            }

            file-comments {
                background: var(--thermal-slate-light);

                padding: 1em;
                box-sizing: border-box;

                border-radius: var(--thermal-radius);

                height: 300px;
                
            }
        
        }
    
    `;
	}
	render() {
		if (this.content.grid === void 0) return html`<thermal-poster message="Načítám mřížku"></thermal-poster>`;
		return [this.renderHeader(this.content.grid?.header ?? {}), this.renderBody(this.content.grid?.groups ?? [])];
	}
};
__decorate([property({ type: String })], SubfoldersGrid.prototype, "slug", void 0);
__decorate([property({ type: Function })], SubfoldersGrid.prototype, "onFolderClick", void 0);
__decorate([property({ type: Function })], SubfoldersGrid.prototype, "onFileClick", void 0);
__decorate([property({ type: Function })], SubfoldersGrid.prototype, "onFileEdit", void 0);
__decorate([consume({
	context: setRegistryHighlightContext,
	subscribe: true
})], SubfoldersGrid.prototype, "setHighlight", void 0);
__decorate([property({
	type: String,
	reflect: true
}), consume({
	context: showDiscussionContext,
	subscribe: true
})], SubfoldersGrid.prototype, "showDiscussion", void 0);
__decorate([property({
	type: Boolean,
	reflect: true
}), consume({
	context: editTagsContext,
	subscribe: true
})], SubfoldersGrid.prototype, "editableTags", void 0);
__decorate([state()], SubfoldersGrid.prototype, "columnCount", void 0);
__decorate([property({ type: Object })], SubfoldersGrid.prototype, "selectedFolders", void 0);
__decorate([property({ type: Function })], SubfoldersGrid.prototype, "onSelectionChange", void 0);
__decorate([state(), consume({
	context: registryContext,
	subscribe: true
})], SubfoldersGrid.prototype, "registry", void 0);
SubfoldersGrid = __decorate([customElement("connected-subfolders-grid")], SubfoldersGrid);

//#endregion
//#region src/connection/controllers/components/folder/upload/ConnectedUploadDialog.ts
let ConnectedUploadDialog = class ConnectedUploadDialog extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.label = t(T.uploadafile);
		this.variant = "primary";
		this.errorMessage = "";
		this.plain = false;
		this.allFiles = [];
		this.pairedFiles = [];
		this.unmatchedPngs = [];
		this.isDragging = false;
		this.infoMessage = "";
	}
	static {
		this.styles = css`

        :host {
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }

        .content {
            position: relative;
            box-sizing: border-box;
        }

        .stage-label {

            small {
                font-size: 1em;
                font-weight: normal;
                display: inline-block;
                opacity: .5;
            }
        
        }

        .stage-upload {
            min-height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            border: 2px dotted var(--thermal-slate);
            border-radius: var(--thermal-radius);
            cursor: pointer;
            transition: all .2s;
            padding: var(--thermal-gap);
            label {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1em;
                cursor: pointer;
            }
        }
        .stage-upload:hover,
        .stage-upload.drag-over { 
            border-color: var(--thermal-primary); 
            background: var(--thermal-background); 
        }

        input[type="file"] { 
            display: none; 
        }

        .paired-files-table { 
            width: 100%; 
            max-width: 100%;
            overflow-x: auto;
            border-collapse: collapse; 
        }
        .paired-files-table td { 
            padding: .5em; 
            vertical-align: top; 
        }
        .paired-files-table td:not(:first-child) { 
            width: calc(100% / 3); 
        }

        .paired-file-group {
        }

        .paired-file-group__header td { 
            background: var(--thermal-background); 
            border-radius: var(--thermal-radius); 
        }

        .file-preview { 
            display: grid; 
            grid-template-columns: 5em 1fr; 
            gap: .5em; 
            position: relative; 
        }

        .file-preview img, 
        .file-preview .file-preview__icon { 
            max-width: 5em; 
            height: auto; 
            display: block; 
        }
        .file-preview__icon { 
            background: var(--thermal-slate-dark); 
            color: var(--thermal-background); 
            border-radius: var(--thermal-radius); 
            aspect-ratio: 160 / 120; 

            display: flex !important; 
            align-items: center; 
            justify-content: center; 

            thermal-icon {
                display: block;
                width: 2em;
                height: 2em;
            }
        }

        .file-preview__preview {
            position: relative;
        }
    
        .file-preview__info { 
            display: flex; 
            flex-direction: column; 
            gap: .2em; 
            font-size: .8em;

            & > *:not(.file-preview__label) {
                opacity: .5;
            }
        }
        .file-preview__label { 
            font-size: 1.2em; 
            font-weight: 500; 
        }
        .file-preview__name {
            max-width: 10em; /* nebo jiná vhodná šířka */
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
        }
        .file-remove-btn { 
            position: absolute; 
            top: -4px; 
            left: -4px; 
            cursor: pointer;
            --padding: .3em;
        }

        .missing-file-dropzone { 
            aspect-ratio: 160 / 120; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            border: 2px dotted var(--thermal-slate); 
            border-radius: var(--thermal-radius); 
            cursor: pointer; 
            transition: all .2s; 
            font-size: var(--thermal-fs-sm); 
            color: var(--thermal-slate-dark); 
            text-align: center; 

            thermal-icon {
                display: block;
                width: 1em;
                height: 1em;
            }
        }
        .missing-file-dropzone.drag-over, 
        .missing-file-dropzone:hover { 
            border-color: var(--thermal-primary); 
            background: #fff; 
        }

        .file-remove-btn thermal-btn, 
        .group-remove-btn thermal-btn { 
            pointer-events: auto; 
        }

        .group-header { 
            display: flex; 
            align-items: center; 
            gap: 1em; 
        }

        .unmatched-files { 
            margin-top: var(--thermal-gap);

            thermal-expandable {
                --font-size: .9em;
            }

            h2 {
                margin: 0;
                font-size: 1em;
            }

            p:last-child,
            li::last-child {
                margin-bottom: 0;
            }

            table {
                img {
                    width: 5em;
                    height: auto;
                }
                td {
                    padding-right: .5em;
                }
            }

        }

        .bottom-dropzone-wrapper { 
            margin-top: 2em; 
        }

        .info, .error { 
            border-radius: var(--thermal-radius); 
            padding: calc(var(--thermal-gap) * .5); 
            margin-top: var(--thermal-gap); 
            font-size: calc(var(--thermal-fs) * .9); 
        }
        .info { 
            background: var(--thermal-primary-light,#eef); 
            border:1px var(--thermal-border-style)var(--thermal-primary,#00f); 
            color: var(--thermal-primary-dark,#008); 
        }
        .error { 
            background: var(--thermal-danger-light,#fee); 
            border:1px var(--thermal-border-style)var(--thermal-danger,#f00); 
            color: var(--thermal-danger-dark,#800); 
        }
    `;
	}
	async handleSubmit() {
		if (this.pairedFiles.length === 0) {
			this.errorMessage = "Vyberte alespoň jeden .lrc soubor";
			return false;
		}
		this.errorMessage = "";
		try {
			const uploadPromises = this.pairedFiles.map(async (pair) => {
				const upload = this.client.api.routes.post.uploadFile(this.folder.path, pair.lrc);
				if (pair.visual) upload.setVisual(pair.visual);
				if (pair.preview) upload.setPreview(pair.preview);
				const result = await upload.execute();
				if (!result?.success) throw new Error(`Nepodařilo se nahrát soubor ${pair.lrc.name}: ${result?.message}`);
				return pair.lrc;
			});
			const uploadedFiles = await Promise.all(uploadPromises);
			if (this.onSuccess) this.onSuccess(uploadedFiles);
			this.clearAllFiles();
			return true;
		} catch (error) {
			this.errorMessage = error instanceof Error ? error.message : "Nepodařilo se nahrát soubory";
			return false;
		}
	}
	addFiles(newFiles) {
		if (!newFiles || newFiles.length === 0) return;
		const newArray = Array.from(newFiles);
		const hasNewLrc = newArray.some((f) => f.name.toLowerCase().endsWith(".lrc"));
		if (!this.allFiles.some((f) => f.name.toLowerCase().endsWith(".lrc")) && !hasNewLrc) {
			this.infoMessage = "Je třeba nahrávat primárně LRC soubory! PNG obrázky jsou jejich volitelný doplněk.";
			setTimeout(() => {
				this.infoMessage = "";
			}, 4500);
			return;
		}
		this.infoMessage = "";
		const unique = newArray.filter((nf) => !this.allFiles.some((ef) => ef.name === nf.name && ef.size === nf.size));
		this.allFiles = [...this.allFiles, ...unique];
		this.pairFiles();
	}
	handleMainFileChange(e) {
		const input = e.target;
		this.addFiles(input.files);
		input.value = "";
	}
	handleInlineFileChange(e, lrcFile, type) {
		const input = e.target;
		if (input.files && input.files.length > 0) {
			const original = input.files[0];
			const base = lrcFile.name.replace(/\.lrc$/i, "");
			const key = base.includes("_thermal") ? base.substring(0, base.lastIndexOf("_thermal")) : base;
			const fileName = type === "visual" ? `${key}_visual.png` : `${key}_image_thermal.png`;
			const renamed = new File([original], fileName, { type: original.type });
			this.addFiles({
				0: renamed,
				length: 1,
				item: (i) => i === 0 ? renamed : null
			});
		}
		input.value = "";
	}
	clearAllFiles() {
		this.pairedFiles.forEach((pair) => {
			if (pair.lrcUrl) URL.revokeObjectURL(pair.lrcUrl);
			if (pair.visualUrl) URL.revokeObjectURL(pair.visualUrl);
			if (pair.previewUrl) URL.revokeObjectURL(pair.previewUrl);
		});
		this.unmatchedPngs.forEach((unmatched) => URL.revokeObjectURL(unmatched.url));
		this.allFiles = [];
		this.pairedFiles = [];
		this.unmatchedPngs = [];
	}
	removePairedGroup(lrcFileToRemove) {
		const group = this.pairedFiles.find((p) => p.lrc === lrcFileToRemove);
		if (!group) return;
		const toRemove = new Set([group.lrc]);
		if (group.visual) toRemove.add(group.visual);
		if (group.preview) toRemove.add(group.preview);
		this.allFiles = this.allFiles.filter((f) => !toRemove.has(f));
		this.pairFiles();
	}
	removePairedFile(file) {
		this.allFiles = this.allFiles.filter((f) => f !== file);
		this.pairFiles();
	}
	removeUnmatchedPng(pngFileToRemove) {
		this.allFiles = this.allFiles.filter((f) => f !== pngFileToRemove);
		this.pairFiles();
	}
	pairFiles() {
		this.pairedFiles.forEach((pair) => {
			if (pair.lrcUrl) URL.revokeObjectURL(pair.lrcUrl);
			if (pair.visualUrl) URL.revokeObjectURL(pair.visualUrl);
			if (pair.previewUrl) URL.revokeObjectURL(pair.previewUrl);
		});
		this.unmatchedPngs.forEach((unmatched) => URL.revokeObjectURL(unmatched.url));
		const lrcFiles = this.allFiles.filter((file) => file.name.toLowerCase().endsWith(".lrc"));
		const pngFiles = this.allFiles.filter((file) => file.name.toLowerCase().endsWith(".png"));
		const paired = [];
		const usedPngs = /* @__PURE__ */ new Set();
		lrcFiles.forEach((lrcFile) => {
			const lrcBaseName = lrcFile.name.replace(/\.lrc$/i, "");
			const key = lrcBaseName.includes("_thermal") ? lrcBaseName.substring(0, lrcBaseName.lastIndexOf("_thermal")) : lrcBaseName;
			const visualKey = `${key}_visual`;
			const previewKey = `${key}_image_thermal`;
			const visualFile = pngFiles.find((png) => !usedPngs.has(png) && png.name.replace(/\.png$/i, "").startsWith(visualKey));
			const previewFile = pngFiles.find((png) => !usedPngs.has(png) && png.name.replace(/\.png$/i, "").startsWith(previewKey));
			const pair = {
				lrc: lrcFile,
				lrcUrl: URL.createObjectURL(lrcFile)
			};
			if (visualFile) {
				pair.visual = visualFile;
				pair.visualUrl = URL.createObjectURL(visualFile);
				usedPngs.add(visualFile);
			}
			if (previewFile) {
				pair.preview = previewFile;
				pair.previewUrl = URL.createObjectURL(previewFile);
				usedPngs.add(previewFile);
			}
			paired.push(pair);
		});
		this.pairedFiles = paired;
		this.unmatchedPngs = pngFiles.filter((png) => !usedPngs.has(png)).map((file) => ({
			file,
			url: URL.createObjectURL(file)
		}));
	}
	handleZoneDragOver(e) {
		e.preventDefault();
		e.currentTarget.classList.add("drag-over");
	}
	handleZoneDragLeave(e) {
		e.preventDefault();
		e.currentTarget.classList.remove("drag-over");
	}
	handleMainDrop(e) {
		e.preventDefault();
		e.currentTarget.classList.remove("drag-over");
		this.addFiles(e.dataTransfer?.files ?? null);
	}
	handleInlineDrop(e, lrcFile, type) {
		e.preventDefault();
		e.stopPropagation();
		e.currentTarget.classList.remove("drag-over");
		const files = e.dataTransfer?.files;
		if (files && files.length > 0) {
			const original = files[0];
			const base = lrcFile.name.replace(/\.lrc$/i, "");
			const key = base.includes("_thermal") ? base.substring(0, base.lastIndexOf("_thermal")) : base;
			const fileName = type === "visual" ? `${key}_visual.png` : `${key}_image_thermal.png`;
			const renamed = new File([original], fileName, { type: original.type });
			this.addFiles({
				0: renamed,
				length: 1,
				item: (i) => i === 0 ? renamed : null
			});
		}
	}
	openFileSelector(id) {
		this.shadowRoot?.getElementById(id)?.click();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.clearAllFiles();
	}
	render() {
		const label = this.label ?? t(T.uploadafile);
		if (!this.client.isLoggedIn || !this.folder.may_manage_files_in) return nothing;
		return html`<thermal-dialog
            .label="${this.tooltip ? this.tooltip : this.label}"
            .beforeClose=${() => this.handleSubmit()}
            button=${t(T.upload)}
        >
            <slot name="invoker" slot="invoker">
                <thermal-btn 
                    size="md" 
                    .variant=${this.variant}
                    plain=${this.plain ? true : false}
                    icon="upload" 
                    iconStyle="micro"
                    .tooltip=${this.tooltip ?? ""}
                >${label}</thermal-btn>
            </slot>
            <div class="content" slot="content">
                ${this.renderInitialDropzone()}
                ${this.infoMessage ? html`<div class="info">${this.infoMessage}</div>` : nothing}
                ${this.renderPreview()}
                ${this.pairedFiles.length + this.unmatchedPngs.length > 0 ? this.renderBottomDropzone() : nothing}
                ${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : nothing}
            </div>
            ${this.pairedFiles.length > 0 ? html`<thermal-btn
                    slot="button"
                    @click=${() => this.clearAllFiles()}
                >Zrušit výběr</thermal-btn>` : nothing}
        </thermal-dialog>`;
	}
	renderInitialDropzone() {
		if (this.allFiles.length > 0) return nothing;
		return html`<div 
            class="stage-upload"
            @click=${() => this.openFileSelector("dialog-main-input")}
            @dragenter=${(e) => this.handleZoneDragOver(e)}
            @dragover=${(e) => this.handleZoneDragOver(e)}
            @dragleave=${(e) => this.handleZoneDragLeave(e)}
            @drop=${(e) => this.handleMainDrop(e)}
        >
            <label for="dialog-main-input">
                <div>Vyberte či přetáhněte sem LRC soubory a odpovídající PNG obrázky.</div>
                <thermal-btn variant="primary" icon="upload" iconStyle="micro">Vybrat soubory</thermal-btn>
            </label>
            <input id="dialog-main-input" type="file" multiple accept=".lrc,.png" @change=${this.handleMainFileChange} />
        </div>`;
	}
	renderPreview() {
		if (this.pairedFiles.length === 0 && this.unmatchedPngs.length === 0) return nothing;
		const lrcCount = this.pairedFiles.length;
		const pngCount = this.pairedFiles.reduce((state, current) => {
			return state + (current.visual ? 1 : 0) + (current.preview ? 1 : 0);
		}, 0);
		let titleSuffix = `${lrcCount}x LRC`;
		if (pngCount > 0) titleSuffix += ` + ${pngCount}x PNG`;
		return html`<div class="paired-files">
            <h3 class="stage-label">Soubory k uploadu <small>${titleSuffix}</small></h3>
            ${this.renderPairedTable()}
            ${this.renderUnmatchedFiles()}
        </div>`;
	}
	renderPairedTable() {
		if (this.pairedFiles.length === 0) return nothing;
		return html`<table class="paired-files-table"><tbody>
            ${this.pairedFiles.map((p, i) => this.renderPairedRow(p, i))}
        </tbody></table>`;
	}
	renderPairedRow(pair, index) {
		return html`<tr class="paired-file-group paired-file-group__header">
            <td colspan="4">
                <div class="group-header">
                    <span>${index + 1}. snímek</span>
                    <thermal-btn variant="default" plain="true" icon="close" iconStyle="micro" tooltip="Odstranit celou skupinu" @click=${() => this.removePairedGroup(pair.lrc)}></thermal-btn>
                </div>
            </td>
        </tr>
        <tr class="paired-file-group">
            <td></td>
            <td>${this.renderFilePreview("LRC termogram", pair.lrc)}</td>
            <td>${this.renderFilePreview("Snímek ve viditelném spektru", pair.visual, pair.lrc, "visual", pair.visualUrl)}</td>
            <td>${this.renderFilePreview("Printscreen displeje termokamery", pair.preview, pair.lrc, "preview", pair.previewUrl)}</td>
        </tr>`;
	}
	renderFilePreview(label, file, lrcContext, type, url) {
		if (!file) {
			const inputId = `dialog-inline-${lrcContext.name}-${type}`;
			return html`<div class="file-preview file-preview__has-file">
                <div class="file-preview__preview">
                    <div class="missing-file-dropzone"
                        @click=${() => this.openFileSelector(inputId)}
                        @dragenter=${(e) => this.handleZoneDragOver(e)}
                        @dragover=${(e) => e.preventDefault()}
                        @dragleave=${(e) => this.handleZoneDragLeave(e)}
                        @drop=${(e) => this.handleInlineDrop(e, lrcContext, type)}>
                        <thermal-icon icon="upload" variant="micro"></thermal-icon>
                        <input id=${inputId} type="file" accept=".png" @change=${(e) => this.handleInlineFileChange(e, lrcContext, type)} />
                    </div>
                </div>
                <div class="file-preview__info">
                    <div class="file-preview__label">${label}</div>
                    <div class="file-preview__name">Volitelně nahrajte ${type} obrázek.</div>
                </div>
            </div>`;
		}
		const kb = (file.size / 1024).toFixed(2);
		const isImg = file.name.toLowerCase().endsWith(".png");
		return html`<div class="file-preview file-preview__has-file">
            <div class="file-preview__preview">${isImg && url ? html`<img src=${url} alt="File preview" />` : isImg ? html`<div class="file-preview__icon"><thermal-icon icon="image" variant="outline"></thermal-icon></div>` : html`<div class="file-preview__icon"><thermal-icon icon="document" variant="outline"></thermal-icon></div>`}${type === "visual" || type === "preview" || label.toLowerCase().includes("lrc") ? html`<thermal-btn class="file-remove-btn" variant="primary" plain="true" size="sm" icon="close" iconStyle="micro" tooltip="${t(T.remove)}" @click=${() => this.removePairedFile(file)}></thermal-btn>` : nothing}</div>
            <div class="file-preview__info">
                <div class="file-preview__label">${label}</div>
                <div class="file-preview__name">${file.name}</div>
                <div class="file-preview__size">${kb} kB</div>
            </div>
        </div>`;
	}
	renderUnmatchedFiles() {
		if (this.unmatchedPngs.length === 0) return nothing;
		return html`<div class="unmatched-files">

            <thermal-expandable
                label="${`${this.pairedFiles.length === 0 ? "Nerozpoznané obrázky" : "Další nespárované obrázky"} (${this.unmatchedPngs.length}) nebudou nahrány`}"
                variantExpanded="foreground"
                closeIcon="true"
                icon="info"
                iconStyle="outline"
                tooltip="Obrázky PNG, které se nám dle jejich jména nepodařilo spárovat s žádným LRC souborem"
            >

                <table><tbody>
                    ${this.unmatchedPngs.map((u) => html`<tr class="file-item">
                        <td>
                            <thermal-btn 
                                variant="background"
                                plain="true" 
                                icon="close" 
                                iconStyle="micro" 
                                tooltip="${t(T.remove)}" 
                                @click=${() => this.removeUnmatchedPng(u.file)}></thermal-btn>
                        </td>
                        <td>
                            <img src=${u.url} alt="Unmatched file preview" />
                        </td>
                        <td>${u.file.name}</td>
                    </tr>`)}
                </tbody></table>

                <thermal-tip
                    variant="info"
                    style="--font-size: 1em; margin-top: 1em;"
                >
                    <h2>Jak párujeme soubory</h2>
                    <p>Termokamery TIMI Edu od roku 2024 ukládají soubory v tomto formátu:</p>
                    <ul>
                        <li><strong>[datum]_thermal.lrc</strong> - klíčový termogram, který potřebujeme</li>
                        <li><strong>[datum]_visual.png</strong> - snímek ve viditelném spektru (volitelný)</li>
                        <li><strong>[datum]_image_thermal.png</strong> - printscreen displeje termokamery (volitelný, v online aplikaci nemá žádné užití)</li>
                    </ul>
                    <p>Co jsme schopni spárovat:</p>
                    <ul>
                        <li><strong>[datum]</strong>_cokolivdalsiho<strong>_thermal</strong>_neco<strong>.lrc</strong></li>
                        <li><strong>[datum]</strong>_neco_jineho<strong>_visible.png</strong></li>
                        <li><strong>[datum]</strong>_zase_neco_jineho_<strong>_image_thermal</strong> (1)<strong>.png</strong></li>
                    </ul>
                    <p>Pokud jsou Vaše soubory pojmenovány jinak, můžete k LRC snímkům přiřadit PNG soubory ručně v tabulce výše.</p>
                </thermal-tip>
            
            </thermal-expandable>

            
        </div>`;
	}
	renderBottomDropzone() {
		return html`<div class="bottom-dropzone-wrapper">
            <div class="stage-upload"
                @click=${() => this.openFileSelector("dialog-bottom-input")}
                @dragenter=${(e) => this.handleZoneDragOver(e)}
                @dragover=${(e) => this.handleZoneDragOver(e)}
                @dragleave=${(e) => this.handleZoneDragLeave(e)}
                @drop=${(e) => this.handleMainDrop(e)}
            >
                <label for="dialog-bottom-input">
                    <div>Přidat další soubory LRC či PNG</div>
                    <thermal-btn variant="primary" icon="upload" iconStyle="micro">Vybrat soubory</thermal-btn>
                </label>
                <input id="dialog-bottom-input" type="file" multiple accept=".lrc,.png" @change=${this.handleMainFileChange} />
            </div>
        </div>`;
	}
	shouldRenderDialog() {
		if (!this.client.isLoggedIn || !this.client.identity || !this.folder || !this.folder.may_manage_files_in) return false;
		return true;
	}
};
__decorate([property({ type: Object })], ConnectedUploadDialog.prototype, "folder", void 0);
__decorate([property({ type: String })], ConnectedUploadDialog.prototype, "label", void 0);
__decorate([property({ type: String })], ConnectedUploadDialog.prototype, "variant", void 0);
__decorate([state()], ConnectedUploadDialog.prototype, "errorMessage", void 0);
__decorate([property({
	type: String,
	converter: booleanConverter(false)
})], ConnectedUploadDialog.prototype, "plain", void 0);
__decorate([property({ type: String })], ConnectedUploadDialog.prototype, "tooltip", void 0);
__decorate([state()], ConnectedUploadDialog.prototype, "allFiles", void 0);
__decorate([state()], ConnectedUploadDialog.prototype, "pairedFiles", void 0);
__decorate([state()], ConnectedUploadDialog.prototype, "unmatchedPngs", void 0);
__decorate([state()], ConnectedUploadDialog.prototype, "isDragging", void 0);
__decorate([state()], ConnectedUploadDialog.prototype, "infoMessage", void 0);
__decorate([property({ type: Function })], ConnectedUploadDialog.prototype, "onSuccess", void 0);
ConnectedUploadDialog = __decorate([customElement("connected-upload-dialog")], ConnectedUploadDialog);

//#endregion
//#region src/connection/controllers/components/folder/crud/ConnectedFolderContentModeSwitch.ts
let ConnectedFolderContentModeSwitch = class ConnectedFolderContentModeSwitch extends ControlledConsumer {
	connectedCallback() {
		super.connectedCallback();
		this.content.subscribeToFolderUpdates(this);
		this.content.subscribeToSubfoldersUpdates(this);
	}
	userMayEdit() {
		if (!this.content.folder) return false;
		return DirectiveHelpers.userMayEditFolder(this.client, this.content.folder);
	}
	folderIsEditable() {
		if (!this.content.folder) return false;
		return this.getFilesCount() === 0 && this.getSubfoldersCount() === 0;
	}
	renderCounts() {
		this.log("rendering counts", this.content.folder);
		if (!this.content.folder) return nothing;
		return html`Files: ${this.content.folder.lrc_count} Subfolders: ${this.content.subfolders.length}`;
	}
	getFilesCount() {
		if (!this.content.folder) return 0;
		return this.content.folder.lrc_count;
	}
	getSubfoldersCount() {
		if (!this.content.subfolders) return 0;
		return this.content.subfolders.length;
	}
	renderSlot(label, count, icon, iconStyle, variant, onClick) {
		return html`<thermal-btn
            .icon=${icon}
            .iconStyle=${iconStyle}
            .tooltip=${this.t(label)}
            @click=${onClick}
            variant=${variant}
            plain="true"
        >${count}x</thermal-btn>`;
	}
	async updateFolderMayHaveFiles(value) {
		this.log("updating", this.content.folder);
		if (!this.content.folder) return;
		const info = (await this.client.api.routes.post.updateFolder(this.content.folder.path).setMayHaveFiles(value).execute()).data?.result.info;
		if (info) {
			this.log("updated", info);
			this.content.updateFolderState(info);
			this.display.reloadCurrentState();
		}
	}
	renderFiles(interactive, active) {
		let callback = void 0;
		if (interactive && !active && this.userMayEdit()) callback = async () => {
			await this.updateFolderMayHaveFiles(true);
		};
		const variant = active ? "default" : "background";
		return this.renderSlot("foldermayhavefiles", this.getFilesCount(), "image", "micro", variant, callback);
	}
	renderSubfolders(interactive, active) {
		let callback = void 0;
		if (interactive && !active && this.userMayEdit()) callback = async () => {
			await this.updateFolderMayHaveFiles(false);
		};
		const variant = active ? "default" : "background";
		return this.renderSlot("foldermayhavesubfolders", this.getSubfoldersCount(), "folder", "micro", variant, callback);
	}
	renderSwitch() {
		if (!this.content.folder) return nothing;
		const result = [];
		if (this.folderIsEditable() && this.userMayEdit()) {
			const mayHaveFiles = this.content.folder.may_have_files ?? false;
			result.push(this.renderSubfolders(true, !mayHaveFiles));
			result.push(this.renderFiles(true, mayHaveFiles));
		} else if (this.getFilesCount() > 0) return this.renderFiles(false, true);
		else return this.renderSubfolders(false, true);
		return result;
	}
	static {
		this.styles = css`
    
    :host {
    
        display: flex;
        background: var(--thermal-background);

        border: 1px solid var( --thermal-slate );
        border-radius: var( --thermal-radius );

        gap: .5em;
    
    }
    
    `;
	}
	render() {
		return this.renderSwitch();
	}
};
ConnectedFolderContentModeSwitch = __decorate([customElement("connected-folder-content-mode-switch")], ConnectedFolderContentModeSwitch);

//#endregion
//#region src/connection/controllers/components/file/analysis/ConnectedFileAnalysisButtons.ts
let ConnectedFileAnalysisButtons = class ConnectedFileAnalysisButtons extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.label = "";
		this.tooltip = "Uložit analýzy na server.";
		this.icon = "save";
		this.iconStyle = "micro";
		this.enableCopyToAll = false;
		this.analyses = [];
		this.hasChanged = false;
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.file) this.onInstanceCreated(this.file);
	}
	updated(_changedProperties) {
		super.updated(_changedProperties);
		if (_changedProperties.has("file") && this.file) this.onInstanceCreated(this.file);
	}
	onInstanceCreated(instance) {
		if (instance) {
			if (instance.analysis) {
				this.getCurrentAnalysisState(instance);
				const listener = () => {
					this.hasChanged = true;
					this.getCurrentAnalysisState(instance);
				};
				instance.analysis.layers.onAnySerializableChange.set(this.UUID, listener.bind(this));
				instance.analysis.layers.onAdd.set(this.UUID, listener.bind(this));
				instance.analysis.layers.onRemove.set(this.UUID, listener.bind(this));
				instance.slots.onAnySlotChanged.set(this.UUID, listener.bind(this));
			}
		} else this.log("Soubor neexistuje!");
	}
	getCurrentAnalysisState(instance) {
		const analyses = [];
		instance.analysis.value.forEach((analysis) => {
			analyses.push(analysis.toSerialized());
		});
		this.analyses = analyses;
		this.requestUpdate();
		return analyses;
	}
	renderCopyToAllButton() {
		if (!this.file || this.content.files && this.content.files.length <= 1) return nothing;
		return html`<thermal-btn
            tooltip="Zkopírovat analýzy do všech souborů ve složce"
            @click=${() => {
			if (!this.file) return;
			this.file.group.analysisSync.copyAllSlotsToAllInstances(this.file);
		}}
            icon="link"
            iconStyle="micro"
        ></thermal-btn>`;
	}
	renderDeleteButton() {
		return html`<thermal-btn
            tooltip="Odstranit všechny analýzy ze všech souborů ve složce"
            disabled=${this.analyses.length === 0 ? "true" : "false"}
            @click=${() => {
			if (!this.file) return;
			this.file.analysis.layers.removeAllAnalyses();
		}}
            icon="trash"
            iconStyle="micro"
        ></thermal-btn>`;
	}
	renderServerSaveButton() {
		let callback = void 0;
		let disabled = "true";
		if (this.hasChanged) {
			disabled = "false";
			callback = async () => {
				const request = this.client.api.routes.post.updateFile(this.info.path, this.info.fileName);
				request.clearAnalyses();
				for (const analysis of this.analyses) request.addAnalysis(analysis);
				const result = await request.execute();
				if (result.success && result.data) {
					this.content.updateFileState(result.data.file);
					this.analyses = this.getCurrentAnalysisState(this.file);
					this.hasChanged = false;
				}
			};
		}
		return html`<thermal-btn
            tooltip="Uložit současný stav analýz na server"
            disabled=${disabled}
            @click=${callback}
            icon="save"
            iconStyle="micro"
        ></thermal-btn>`;
	}
	renderServerRestoreButton() {
		let callback = void 0;
		let disabled = "true";
		if (this.hasChanged && this.info.analyses.length > 0) {
			disabled = "false";
			callback = async () => {
				this.file?.analysis.layers.removeAllAnalyses();
				for (const analysis of this.info.analyses) {
					this.log(analysis);
					(this.file?.slots.createAnalysisFromSerialized(analysis))?.setSelected(false, true);
					this.analyses = this.getCurrentAnalysisState(this.file);
					this.hasChanged = false;
				}
			};
		}
		return html`<thermal-btn
            tooltip="Obnovit analýzy ze serveru"
            disabled=${disabled}
            @click=${callback}
            icon="restore"
            iconStyle="micro"
        ></thermal-btn>`;
	}
	renderServerDeleteButton() {
		let callback = void 0;
		let disabled = "true";
		if (this.analyses.length > 0 && this.info.analyses.length > 0) {
			disabled = "false";
			callback = async () => {
				const request = this.client.api.routes.post.updateFile(this.info.path, this.info.fileName);
				request.clearAnalyses();
				const result = await request.execute();
				if (result.success && result.data) {
					this.content.updateFileState(result.data.file);
					this.analyses = this.getCurrentAnalysisState(this.file);
					this.hasChanged = true;
				}
			};
		}
		return html`<thermal-btn
            tooltip="Smazat všechny analýzy uložené na serveru"
            disabled=${disabled}
            @click=${callback}
            icon="trash"
            iconStyle="micro"
        ></thermal-btn>`;
	}
	renderDisplaySlot() {
		const items = [];
		if (this.enableCopyToAll) items.push(this.renderCopyToAllButton());
		items.push(this.renderDeleteButton());
		return slotOrNothing("display", items);
	}
	renderServerSlot() {
		return slotOrNothing("server", [
			this.renderServerSaveButton(),
			this.renderServerRestoreButton(),
			this.renderServerDeleteButton()
		]);
	}
	static {
		this.styles = css`
    
        :host {
            display: flex;
            gap: 1em;
        }

    `;
	}
	render() {
		return [this.renderDisplaySlot(), this.renderServerSlot()];
	}
};
__decorate([property({ type: Object })], ConnectedFileAnalysisButtons.prototype, "info", void 0);
__decorate([property({ type: Boolean })], ConnectedFileAnalysisButtons.prototype, "enableCopyToAll", void 0);
__decorate([state()], ConnectedFileAnalysisButtons.prototype, "analyses", void 0);
__decorate([state()], ConnectedFileAnalysisButtons.prototype, "hasChanged", void 0);
__decorate([state(), consume({
	context: fileContext,
	subscribe: true
})], ConnectedFileAnalysisButtons.prototype, "file", void 0);
ConnectedFileAnalysisButtons = __decorate([customElement("connected-file-analysis-buttons")], ConnectedFileAnalysisButtons);

//#endregion
//#region src/connection/controllers/components/selection/ConnectedFileSelectionCheckbox.ts
let ConnectedFileSelectionCheckbox = class ConnectedFileSelectionCheckbox extends ControlledConsumer {
	connectedCallback() {
		super.connectedCallback();
		this.selectionFile.subscribeToSelectionChange(this);
	}
	renderCheckbox(isSelected) {
		return html`<input 
            type="checkbox" 
            .checked=${isSelected} 
            @change=${(e) => {
			if (e.target.checked) this.selectionFile.addToSelection(this.file);
			else this.selectionFile.removeFromSelection(this.file);
		}}
        />`;
	}
	renderButton(isSelected) {
		return html`<thermal-btn @click=${(isSelected ? () => this.selectionFile.removeFromSelection(this.file) : () => this.selectionFile.addToSelection(this.file)).bind(this)}>${isSelected ? "Odstranit" : "Přidat"}</thermal-btn>`;
	}
	static {
		this.styles = css`
    
        :host {

            &:hover {
                cursor: pointer;
            }
        
        }

        input {
        
            accent-color: var( --thermal-primary );
            background-color: var( --thermal-slate-light );
            cursor: pointer;
        
        }
    
    `;
	}
	render() {
		const isSelected = this.selectionFile.fileIsSelected(this.file);
		return this.renderCheckbox(isSelected);
	}
};
__decorate([property({ type: Object })], ConnectedFileSelectionCheckbox.prototype, "file", void 0);
ConnectedFileSelectionCheckbox = __decorate([customElement("connected-file-selection-checkbox")], ConnectedFileSelectionCheckbox);

//#endregion
//#region src/connection/controllers/components/selection/ConnectedFileSelectionActions.ts
let ConnectedFileSelectionActions = class ConnectedFileSelectionActions extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.progress = 0;
		this.total = 0;
		this.dialogDeleteRef = createRef();
		this.dialogSaveAnalysesRef = createRef();
		this.dialogClearAnalysesRef = createRef();
		this.dialogMoveRef = createRef();
	}
	connectedCallback() {
		super.connectedCallback();
		this.selectionFile.subscribeToSelectionChange(this);
		this.content.subscribeToFilesUpdates(this);
	}
	getCount() {
		return this.selectionFile.array.length;
	}
	renderTrigger() {
		return html`<span slot="invoker">${this.getCount()} vybraných</span>`;
	}
	renderOptionClear() {
		return html`<thermal-btn 
            @click=${() => {
			this.selectionFile.clearSelection();
		}}
            slot="option"
            icon="close"
            iconStyle="micro"
            align="left"
        >Zrušit výběr</thermal-btn>`;
	}
	renderOptionAll() {
		const allSelected = this.selectionFile.array.length === this.content.files?.length;
		return html`<thermal-btn
            @click=${allSelected ? void 0 : () => {
			if (this.content.files) this.selectionFile.addMultipleToSelection(this.content.files);
		}}
            slot="option"
            disabled=${allSelected ? "true" : "false"}
            icon="bigger"
            iconStyle="mini"
            align="left"
        >Vybrat všechny</thermal-btn>`;
	}
	renderOptionDelete() {
		return html`<thermal-btn
            slot="option"
            @click=${() => {
			this.dialogDeleteRef.value?.setOpen();
		}}
            icon="trash"
            iconStyle="micro"
            align="left"
        >Trvale smazat ze serveru</thermal-btn>`;
	}
	renderDialogDelete() {
		const callback = async () => {
			this.progress = 0;
			this.total = this.selectionFile.array.length;
			await this.selectionFile.forEverySelectedAsync(async (file) => {
				await this.client.api.routes.post.deleteFile(file.path, file.fileName).execute();
				this.progress++;
			});
			this.progress = 0;
			this.total = 0;
			this.dialogDeleteRef.value?.setClose();
			this.selectionFile.clearSelection();
			this.display.reloadCurrentState();
			return true;
		};
		let progress = nothing;
		if (this.progress > 0) progress = html`<div>
                <div slot="option">Mažu ${this.progress} z ${this.total} souborů...</div>
                <div class="progress">
                    <div class="progress-bar" style="width: ${this.progress / this.total * 100}%"></div>
                </div>
            </div>`;
		return html`<thermal-dialog
            label="Smazat vybrané soubory"
            ${ref(this.dialogDeleteRef)}
        >
            

            <div slot="content">
            
                <p>Opravdu chcete trvale smazat ${this.selectionFile.array.length} souborů?</p>

                <ul>
                    ${this.selectionFile.array.map((file) => html`<li>${file.fileName}</li>`)}
                </ul>

                ${progress}
            
            </div>

            <thermal-btn @click=${callback} slot="button" variant="primary">Proveď</thermal-btn>

        </thermal-dialog>`;
	}
	renderOptionClearAnalyses() {
		return html`<thermal-btn
            slot="option"
            @click=${() => {
			this.dialogClearAnalysesRef.value?.setOpen();
		}}
            icon="trash"
            iconStyle="micro"
            align="left"
        >Odstranit analýzy uložené na serveru</thermal-btn>`;
	}
	renderDialogClearAnalyses() {
		const callback = async () => {
			this.progress = 0;
			this.total = this.selectionFile.array.length;
			await this.selectionFile.forEverySelectedAsync(async (file) => {
				await this.client.api.routes.post.updateFile(file.path, file.fileName).clearAnalyses().execute();
				this.progress++;
			});
			this.progress = 0;
			this.total = 0;
			this.dialogClearAnalysesRef.value?.setClose();
			this.selectionFile.clearSelection();
			this.display.reloadCurrentState();
			return true;
		};
		let progress = nothing;
		if (this.progress > 0) progress = html`<div>
                <div slot="option">Mažu analýzy ${this.progress}. z ${this.total} souborů...</div>
                <div class="progress">
                    <div class="progress-bar" style="width: ${this.progress / this.total * 100}%"></div>
                </div>
            </div>`;
		return html`<thermal-dialog
            label="Smazat analýzy u vybraných souborů"
            ${ref(this.dialogClearAnalysesRef)}
        >

            <div slot="content">
            
                <p>Opravdu chcete trvale smazat analýzy u ${this.selectionFile.array.length} souborů?</p>

                <ul>
                    ${this.selectionFile.array.map((file) => html`<li>${file.fileName}</li>`)}
                </ul>

                ${progress}
            
            </div>

            <thermal-btn @click=${callback} slot="button" variant="primary">Proveď</thermal-btn>

        </thermal-dialog>`;
	}
	renderOptionMove() {
		return html`<thermal-btn
            slot="option"
            @click=${() => {
			this.log(this.dialogMoveRef.value);
			this.dialogMoveRef.value?.openDialogue();
		}}
            icon="move"
            iconStyle="mini"
            align="left"
        >Přesunout</thermal-btn>`;
	}
	renderDialogMove() {
		return html`<connected-location-selector
            .asDialogue=${true}
            ${ref(this.dialogMoveRef)}
            mode="file"
            dialogTitle="Přesunout vybrané soubory"
            operationLabel="Přesunout do"
            .onSelect=${async (path) => {
			await this.selectionFile.forEverySelectedAsync(async (file) => {
				const result = await this.client.api.routes.post.moveFile(file.path, file.fileName, path).execute();
				this.log(result);
				this.log(`Přesouvám ${file.fileName} z ${file.path} do ${path}. Výsledek: ${result.success}`);
			});
			this.dialogMoveRef.value?.closeDialogue();
			this.display.navigateToFolderAndLoad(path);
		}}
        >
        </connected-location-selector>`;
	}
	renderOptionDownload() {
		const handler = async () => {
			const instances = this.group?.getInstances();
			if (instances) {
				const files = [];
				this.selectionFile.forEverySelectedSync((info) => {
					const instance = instances.find((i) => i.thermalUrl === info.url);
					if (instance) {
						const blob = new Blob([instance.reader.buffer], { type: "application/octet-stream" });
						const file = new File([blob], info.fileName, { type: "application/octet-stream" });
						files.push(file);
					}
				});
				const archive = await zip.zip(files, true);
				const fileName = `${this.content.folder?.name || "files"}_${[
					"selected",
					this.selectionFile.array.length,
					"files"
				].join("-")}.zip`;
				const link = document.createElement("a");
				link.href = URL.createObjectURL(archive);
				link.download = fileName;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				link.remove();
			} else this.log("No files were found!");
		};
		return html`<thermal-btn
            slot="option"
            @click=${handler.bind(this)}
            icon="download"
            iconStyle="micro"
            align="left"
        >Stáhnout jako ZIP</thermal-btn>`;
	}
	static {
		this.styles = css`
    
        :host {
            display: flex;
            align-items: center;
            gap: .5em;
        }

        thermal-icon {
            width: 1em;
        }

        .progress {
            position: relative;
            width: 100%;
            height: 1em;
            background-color: var( --thermal-slate-dark );
            border-radius: var( --thermal-radius );
            overflow: hidden;
            border: 1px solid var( --thermal-slate-dark );
        }

        .progress-bar {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background-color: var( --thermal-primary );
        }
    
    `;
	}
	renderDropdownSelection() {
		return html`<thermal-dropdown
            variant="primary"
        >
            ${this.renderTrigger()}
            ${this.renderOptionClear()}
            ${this.renderOptionAll()}
        </thermal-dropdown>`;
	}
	renderArrow() {
		return html`<thermal-icon icon="right" variant="micro"></thermal-icon>`;
	}
	renderDropdownActions() {
		return html`<thermal-dropdown
            variant="foreground"
        >
            <span slot="invoker">Zvolte akci</span>
            ${this.renderOptionDownload()}
            ${this.renderOptionMove()}
            ${this.renderOptionDelete()}
            ${this.renderOptionClearAnalyses()}
        </thermal-dropdown>`;
	}
	renderDalogs() {
		return [
			this.renderDialogDelete(),
			this.renderDialogClearAnalyses(),
			this.renderDialogMove()
		];
	}
	render() {
		if (this.selectionFile.getSelectedFiles().length === 0) return nothing;
		return [
			this.renderDropdownSelection(),
			this.renderArrow(),
			this.renderDropdownActions(),
			this.renderDalogs()
		];
	}
};
__decorate([state()], ConnectedFileSelectionActions.prototype, "progress", void 0);
__decorate([state()], ConnectedFileSelectionActions.prototype, "total", void 0);
__decorate([consume({
	context: groupContext,
	subscribe: true
})], ConnectedFileSelectionActions.prototype, "group", void 0);
ConnectedFileSelectionActions = __decorate([customElement("connected-file-selection-actions")], ConnectedFileSelectionActions);

//#endregion
//#region src/connection/controllers/components/selection/move/ConnectedLocationSelector.ts
let LocationSelectorMode = /* @__PURE__ */ function(LocationSelectorMode) {
	LocationSelectorMode["FOLDER"] = "folder";
	LocationSelectorMode["FILE"] = "file";
	return LocationSelectorMode;
}({});
let ConnectedLocationSelector = class ConnectedLocationSelector extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.dialogRef = createRef();
		this.asDialogue = false;
		this.operationLabel = "Vybrat";
		this._loading = false;
	}
	get selectedFolderName() {
		return this._currentFolderInfo?.name;
	}
	get selectedFolderPath() {
		return this._currentFolderInfo?.path;
	}
	openDialogue() {
		if (this.asDialogue && this.dialogRef.value) this.dialogRef.value.setOpen();
	}
	closeDialogue() {
		if (this.asDialogue && this.dialogRef.value) this.dialogRef.value.setClose();
	}
	connectedCallback() {
		super.connectedCallback();
		this.client.subscribeToIdentityChanges(this);
		if (this.client.isLoggedIn) this._currentSubfolders = [...this.content.userFolders];
		this.content.onUserFoldersUpdate.add(this.UUID, (userFolders) => {
			this._userFolders = [...userFolders ?? []];
		});
	}
	async _onPathChange(newPath) {
		this._loading = true;
		const info = await this.client.api.routes.get.info(newPath).execute();
		if (info.data) {
			this._currentFolderInfo = info.data.folder;
			this._currentSubfolders = Object.values(info.data.subfolders);
			this._breadcrumb = info.data.breadcrumb;
		}
		this._loading = false;
	}
	static {
		this.styles = css`
    
        :host {
            font-size: var( --thermal-fs );
            display: block;
        }

        .list {
        
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        
        }

        .list-item {
        
            display: flex;
            align-items: center;
            gap: 0.5em;
            box-sizing: border-box;
            background: var( --thermal-background );
            border-radius: var( --thermal-radius );

            .folder-name {
                flex-grow: 1;
                cursor: pointer;
                padding: .25em .5em;
            }

            thermal-btn {
                opacity: 0;
                transition: opacity .3s ease-in-out;
            }

            thermal-icon {
                width: 1em;
                height: 1em;
                display: inline-block;
            }

            &.selectable {
                .folder-name {
                    cursor: pointer;
                }
            }

            &.disabled {
                text-decoration: strikethrough;
                color: var( --thermal-slate );
            }

            &:hover,
            &:focus {
            
                thermal-btn {
                    opacity: 1;
                }
            
            }

        }

        .breadcrumb {

            display: flex;
            flex-wrap: wrap;
            gap: 1em;

            thermal-btn {

                position: relative;
            
                &:not(:last-child)::after {
                    content: "/";
                    position: absolute;
                    display: block;
                    width: 1em;
                    height: 100%;
                    right: -1em;
                    top: 0;
                    color: var( --thermal-slate );
                    pointer-events: none;
                }
            
            }
        }

        .content {
        
            display: flex;
            flex-direction: column;
            gap: 1em;
            width: 100%;
        
        }

        .poster {
        
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: .5em;
            padding: 1em;

            width: 100%;
            min-height: 200px;
            box-sizing: border-box;

            border: 1px dashed var( --thermal-slate );
            border-radius: var( --thermal-radius );

        }
    
    `;
	}
	renderBreadcrumbItemInternal(label, onClick, isLast, tooltip) {
		return html`<thermal-btn 
            variant="text"
            tooltip=${tooltip}  
            @click=${onClick}
            style=${styleMap({
			"pointer-events": isLast ? "none" : "auto",
			"font-weight": isLast ? "bold" : "normal"
		})}
        >
        ${label}</thermal-btn>`;
	}
	renderBreadcrumbItem(item, isLast = false) {
		if (item.type !== "folder") return nothing;
		return this.renderBreadcrumbItemInternal(item.name, () => this._onPathChange(item.path), isLast, `Zobrazit obsah složky ${item.name}`);
	}
	renderBreadcrumb() {
		if (!this._breadcrumb && !this.client.isLoggedIn) return nothing;
		return html`<div class="breadcrumb">
            ${this.renderBreadcrumbItemInternal(this.client.identity?.meta.name ?? this.client.identity?.user ?? "User", () => {
			this._currentFolderInfo = void 0;
			this._currentSubfolders = this.content.userFolders;
			this._breadcrumb = void 0;
		}, false, "Zobrazit všechny Vaše složky")}
            ${map(this._breadcrumb, (item, index) => this.renderBreadcrumbItem(item, index === this._breadcrumb.length - 1))}
        </div>`;
	}
	renderBackButton() {
		if (this._currentSubfolders === void 0 || this._currentFolderInfo === void 0) return nothing;
		const parentSegments = this._currentFolderInfo.path.split("/").slice(0, -1);
		if (parentSegments.length === 0) return nothing;
		const parent = parentSegments.join("/");
		return html`<thermal-btn 
            icon="back"
            iconStyle="micro"
            @click=${() => this._onPathChange(parent)}
        >${this.t("back")}</thermal-btn>`;
	}
	renderFolderSelector(folderInfo) {
		const classes = { "list-item": true };
		const disabled = this.mode === LocationSelectorMode.FOLDER && folderInfo.may_have_files === true;
		if (disabled) classes.disabled = true;
		let actionButton = nothing;
		let clickAction = () => {
			if (disabled) return;
			this._onPathChange(folderInfo.path);
		};
		const subselectButton = disabled ? html`<thermal-btn 
            plain="true"
            disabled="true"
            variant="background"
            tooltip="Složka ''${folderInfo.name}'' je určena pro soubory"
        >Neplatné umístění</thermal-btn>` : html`<thermal-btn
            icon="right"
            iconStyle="micro"
            plain="true"
            variant="background"
            tooltip="Přejít do složky '${folderInfo.name}'"
            @click=${clickAction.bind(this)}
        ></thermal-btn>`;
		const name = this.getEllipsisName(folderInfo);
		if (this.mode === LocationSelectorMode.FOLDER && !disabled) {
			actionButton = html`<thermal-btn
                variant="primary"
                @click=${() => {
				this.onSelect?.(folderInfo.path);
			}}
            >${this.operationLabel} '${name}'</thermal-btn>`;
			classes.selectable = true;
		} else if (this.mode === LocationSelectorMode.FILE && this.folderIsValidForFiles(folderInfo)) {
			actionButton = html`<thermal-btn
                variant="primary"
                @click=${() => {
				this.onSelect?.(folderInfo.path);
			}}
            >${this.operationLabel} '${name}'</thermal-btn>`;
			classes.selectable = true;
		}
		return html`<div
            class=${classMap(classes)}
        >
            <span 
                @click=${clickAction.bind(this)}
                class="folder-name"
            >
                <thermal-icon icon="folder" variant="micro"></thermal-icon>
                ${folderInfo.name}
            </span>
            ${actionButton}
            ${subselectButton}
        </div>`;
	}
	folderIsValidForFiles(info) {
		if (!info) return false;
		return info.may_have_files === true && info.may_manage_files_in === true;
	}
	folderIsValidForFolders(info) {
		if (!info) return false;
		return info.may_have_files === false && info.may_manage_folders_in === true;
	}
	renderNoSubfolders() {
		const folderName = this._currentFolderInfo?.name;
		let label = nothing;
		if (this.mode === LocationSelectorMode.FOLDER) label = this.folderIsValidForFolders(this._currentFolderInfo) ? nothing : "Sem nelze složky přesunout - toto umístění je určeno pouze pro soubory, nikoliv pro složky";
		else if (this.mode === LocationSelectorMode.FILE) label = this.folderIsValidForFiles(this._currentFolderInfo) ? nothing : "Sem nelze soubory přesunout - toto umístění je určeno pouze pro složky, nikoliv pro soubory";
		const fileCount = this._currentFolderInfo?.lrc_count ?? 0;
		return html`<div class="poster">
        
            <div>Cílová složka:</div>
            <div><strong>${folderName}</strong></div>
            ${fileCount > 0 ? html`<div>${fileCount} soubor${fileCount === 1 ? "" : "ů"}</div>` : nothing}
            <div>${label}</div>
        
        </div>`;
	}
	renderFolderList() {
		const folders = this._currentSubfolders ? this._currentSubfolders : this._userFolders ?? [];
		if (folders.length === 0) return this.renderNoSubfolders();
		folders.sort((a, b) => a.name.localeCompare(b.name));
		return html`<div class="list">
            ${map(folders, (f) => this.renderFolderSelector(f))}
        </div>`;
	}
	getEllipsisName(folderInfo) {
		const maxLength = 20;
		if (folderInfo.name.length <= maxLength) return folderInfo.name;
		const first10chars = folderInfo.name.substring(0, 10);
		const ellipsis = " ... ";
		const lastChars = folderInfo.name.substring(folderInfo.name.length - (maxLength - 10 - 5));
		return first10chars + ellipsis + lastChars;
	}
	wrapInDialogue(content) {
		let actionButton = nothing;
		const name = this._currentFolderInfo ? this.getEllipsisName(this._currentFolderInfo) : "kořenová úroveň";
		if (this.mode === LocationSelectorMode.FOLDER && this.folderIsValidForFolders(this._currentFolderInfo)) actionButton = html`<thermal-btn
                slot="button"
                variant="primary"
                @click=${() => {
			this.onSelect?.(this._currentFolderInfo.path);
		}}
            >${this.operationLabel} '${name}'</thermal-btn>`;
		else if (this.mode === LocationSelectorMode.FILE && this.folderIsValidForFiles(this._currentFolderInfo)) actionButton = html`<thermal-btn
                slot="button"
                variant="primary"
                @click=${() => {
			this.onSelect?.(this._currentFolderInfo.path);
		}}
            >${this.operationLabel} '${name}'</thermal-btn>`;
		return html`<thermal-dialog
            label=${this.dialogTitle ?? "Vyberte umístění"}
            ${ref(this.dialogRef)}
        >
            <slot name="invoker" slot="invoker"></slot>
            
            <div slot="content" class="content">${content}</div>

            ${actionButton}
        
        </thermal-dialog>`;
	}
	render() {
		if (this.client.isLoggedIn === false) return nothing;
		const content = this._loading ? html`<thermal-spinner></thermal-spinner>` : [
			this.renderBreadcrumb(),
			this.renderBackButton(),
			this.renderFolderList()
		];
		if (this.asDialogue) return this.wrapInDialogue(content);
		return content;
	}
};
__decorate([property({ type: Boolean })], ConnectedLocationSelector.prototype, "asDialogue", void 0);
__decorate([property({ type: String })], ConnectedLocationSelector.prototype, "dialogTitle", void 0);
__decorate([property({ type: String })], ConnectedLocationSelector.prototype, "mode", void 0);
__decorate([property({ type: Object })], ConnectedLocationSelector.prototype, "onSelect", void 0);
__decorate([property({ type: String })], ConnectedLocationSelector.prototype, "operationLabel", void 0);
__decorate([state()], ConnectedLocationSelector.prototype, "_loading", void 0);
__decorate([state()], ConnectedLocationSelector.prototype, "_currentFolderInfo", void 0);
__decorate([state()], ConnectedLocationSelector.prototype, "_currentSubfolders", void 0);
__decorate([state()], ConnectedLocationSelector.prototype, "_userFolders", void 0);
__decorate([state()], ConnectedLocationSelector.prototype, "_breadcrumb", void 0);
ConnectedLocationSelector = __decorate([customElement("connected-location-selector")], ConnectedLocationSelector);

//#endregion
//#region src/connection/controllers/components/file/ConnectedFileMoveDialog.ts
let ConnectedFileMoveDialog = class ConnectedFileMoveDialog extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.dialogRef = createRef();
	}
	connectedCallback() {
		super.connectedCallback();
		this.content.subscribeToFileUpdates(this);
	}
	render() {
		return html`<connected-location-selector
            .asDialogue=${true}
            ${ref(this.dialogRef)}
            .mode=${LocationSelectorMode.FILE}
            dialogTitle="Přesunout soubor"
            operationLabel="Přesunout do"
            .onSelect=${async (path) => {
			if (!this.file) return nothing;
			await this.client.api.routes.post.moveFile(this.file.path, this.file.fileName, path).execute();
			this.dialogRef.value?.closeDialogue();
			this.display.navigateToFolderAndLoad(path);
		}}
        >
            <thermal-btn
                slot="invoker"
                icon="move"
                iconStyle="mini"
                tooltip="Přesunout"
            ></thermal-btn>
        </connected-location-selector>`;
	}
};
__decorate([property({ type: Object })], ConnectedFileMoveDialog.prototype, "file", void 0);
ConnectedFileMoveDialog = __decorate([customElement("connected-file-move-dialog")], ConnectedFileMoveDialog);

//#endregion
//#region src/connection/controllers/components/folder/crud/ConnectedFolderMoveDialog.ts
let ConnectedFolderMoveDialog = class ConnectedFolderMoveDialog extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.selectionRef = createRef();
	}
	renderTrigger() {
		return html`<thermal-btn
            tooltip="Přesunout složku"
            slot="invoker"
            icon="move"
            iconStyle="mini"
        ></thermal-btn>`;
	}
	renderDialog() {
		const onSelect = async (path) => {
			if (this.folder || !this.selectionRef.value) {
				if ((await this.client.api.routes.post.moveFolder(this.folder.path, path).execute()).success) {
					this.selectionRef.value?.closeDialogue();
					await this.display.navigateToFolderAndLoad(path);
				}
			}
		};
		return html`<connected-location-selector
            mode=${LocationSelectorMode.FOLDER}
            .asDialogue=${true}
            operationLabel="Přesunout do"
            .onSelect=${onSelect}
            ${ref(this.selectionRef)}
        >
            ${this.renderTrigger()}
        </connected-location-selector>`;
	}
	render() {
		return this.renderDialog();
	}
};
__decorate([property({ type: Object })], ConnectedFolderMoveDialog.prototype, "folder", void 0);
ConnectedFolderMoveDialog = __decorate([customElement("connected-folder-move-dialog")], ConnectedFolderMoveDialog);

//#endregion
//#region src/connection/controllers/components/selection/ConnectedFolderSelectionCheckbox.ts
let ConnectedFolderSelectionCheckbox = class ConnectedFolderSelectionCheckbox extends ControlledConsumer {
	connectedCallback() {
		super.connectedCallback();
		this.selectionFolder.subscribeToSelectionChange(this);
	}
	renderCheckbox(isSelected) {
		return html`<input 
            type="checkbox" 
            .checked=${isSelected} 
            @change=${(e) => {
			e.preventDefault();
			if (e.target.checked) this.selectionFolder.addToSelection(this.folder);
			else this.selectionFolder.removeFromSelection(this.folder);
		}}
        />`;
	}
	renderButton(isSelected) {
		return html`<thermal-btn @click=${(isSelected ? () => this.selectionFolder.removeFromSelection(this.folder) : () => this.selectionFolder.addToSelection(this.folder)).bind(this)}>${isSelected ? "Odstranit" : "Přidat"}</thermal-btn>`;
	}
	static {
		this.styles = css`
    
        :host {

            &:hover {
                cursor: pointer;
            }
        
        }

        input {
        
            accent-color: var( --thermal-primary );
            background-color: var( --thermal-slate-light );
            cursor: pointer;

            transition: all .2s ease-in-out;

            &:hover {

                box-shadow: var( --thermal-shadow );
            
            }
        
        }
    
    `;
	}
	render() {
		const isSelected = this.selectionFolder.folderIsSelected(this.folder);
		return this.renderCheckbox(isSelected);
	}
};
__decorate([property({ type: Object })], ConnectedFolderSelectionCheckbox.prototype, "folder", void 0);
ConnectedFolderSelectionCheckbox = __decorate([customElement("connected-folder-selection-checkbox")], ConnectedFolderSelectionCheckbox);

//#endregion
//#region src/connection/controllers/components/selection/ConnectedFolderSelectionActions.ts
let ConnectedFolderSelectionActions = class ConnectedFolderSelectionActions extends ControlledConsumer {
	constructor(..._args) {
		super(..._args);
		this.progress = 0;
		this.total = 0;
		this.dialogDeleteRef = createRef();
		this.dialogSaveAnalysesRef = createRef();
		this.dialogClearAnalysesRef = createRef();
		this.dialogMoveRef = createRef();
	}
	connectedCallback() {
		super.connectedCallback();
		this.selectionFolder.subscribeToSelectionChange(this);
		this.content.subscribeToFilesUpdates(this);
	}
	getCount() {
		return this.selectionFolder.array.length;
	}
	renderTrigger() {
		return html`<span slot="invoker">${this.getCount()} vybraných</span>`;
	}
	renderOptionClear() {
		return html`<thermal-btn 
            @click=${() => {
			this.selectionFolder.clearSelection();
		}}
            slot="option"
            icon="close"
            iconStyle="micro"
            align="left"
        >Zrušit výběr</thermal-btn>`;
	}
	renderOptionAll() {
		const allSelected = this.selectionFolder.array.length === this.content.files?.length;
		return html`<thermal-btn
            @click=${allSelected ? void 0 : () => {
			if (this.content.subfolders) this.selectionFolder.addMultipleToSelection(this.content.subfolders);
		}}
            slot="option"
            disabled=${allSelected ? "true" : "false"}
            icon="bigger"
            iconStyle="mini"
            align="left"
        >Vybrat všechny</thermal-btn>`;
	}
	renderOptionGrid() {
		return html`<thermal-btn
            slot="option"
            @click=${() => {
			this.dialogDeleteRef.value?.setOpen();
			this.display;
		}}
            icon="grid"
            iconStyle="micro"
            align="left"
        >Zobrazit mřížku ze složek</thermal-btn>`;
	}
	renderDialogGrid() {
		const callback = async () => {
			this.progress = 0;
			this.total = this.selectionFolder.array.length;
			await this.selectionFolder.forEverySelectedAsync(async (folder) => {
				this.progress++;
			});
			this.progress = 0;
			this.total = 0;
			this.dialogDeleteRef.value?.setClose();
			this.selectionFile.clearSelection();
			this.display.reloadCurrentState();
			return true;
		};
		let progress = nothing;
		if (this.progress > 0) progress = html`<div>
                <div slot="option">Mažu ${this.progress} z ${this.total} souborů...</div>
                <div class="progress">
                    <div class="progress-bar" style="width: ${this.progress / this.total * 100}%"></div>
                </div>
            </div>`;
		return html`<thermal-dialog
            label="Smazat vybrané soubory"
            ${ref(this.dialogDeleteRef)}
        >
            

            <div slot="content">
            
                <p>Opravdu chcete trvale smazat ${this.selectionFolder.array.length} složek?</p>

                <ul>
                    ${this.selectionFolder.array.map((folder) => html`<li>${folder.name}</li>`)}
                </ul>

                ${progress}
            
            </div>

            <thermal-btn @click=${callback} slot="button" variant="primary">Proveď</thermal-btn>

        </thermal-dialog>`;
	}
	renderOptionMove() {
		return html`<thermal-btn
            slot="option"
            @click=${() => {
			this.log(this.dialogMoveRef.value);
			this.dialogMoveRef.value?.openDialogue();
		}}
            icon="move"
            iconStyle="mini"
            align="left"
        >Přesunout</thermal-btn>`;
	}
	renderDialogMove() {
		return html`<connected-location-selector
            .asDialogue=${true}
            ${ref(this.dialogMoveRef)}
            mode="folder"
            dialogTitle="Přesunout vybrané složky"
            operationLabel="Přesunout do"
            .onSelect=${async (path) => {
			await this.selectionFolder.forEverySelectedAsync(async (folder) => {
				await this.client.api.routes.post.moveFolder(folder.path, path).execute();
			});
			this.dialogMoveRef.value?.closeDialogue();
			this.display.navigateToFolderAndLoad(path);
		}}
        >
        </connected-location-selector>`;
	}
	static {
		this.styles = css`
    
        :host {
            display: flex;
            align-items: center;
            gap: .5em;
        }

        thermal-icon {
            width: 1em;
        }

        .progress {
            position: relative;
            width: 100%;
            height: 1em;
            background-color: var( --thermal-slate-dark );
            border-radius: var( --thermal-radius );
            overflow: hidden;
            border: 1px solid var( --thermal-slate-dark );
        }

        .progress-bar {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background-color: var( --thermal-primary );
        }
    
    `;
	}
	renderDropdownSelection() {
		return html`<thermal-dropdown
            variant="primary"
        >
            ${this.renderTrigger()}
            ${this.renderOptionClear()}
            ${this.renderOptionAll()}
        </thermal-dropdown>`;
	}
	renderArrow() {
		return html`<thermal-icon icon="right" variant="micro"></thermal-icon>`;
	}
	renderDropdownActions() {
		return html`<thermal-dropdown
            variant="foreground"
        >
            <span slot="invoker">Zvolte akci</span>
            ${this.renderOptionMove()}
            ${this.renderOptionGrid()}
        </thermal-dropdown>`;
	}
	renderDalogs() {
		return [this.renderDialogGrid(), this.renderDialogMove()];
	}
	render() {
		if (this.selectionFolder.array.length === 0) return nothing;
		return [
			this.renderDropdownSelection(),
			this.renderArrow(),
			this.renderDropdownActions(),
			this.renderDalogs()
		];
	}
};
__decorate([state()], ConnectedFolderSelectionActions.prototype, "progress", void 0);
__decorate([state()], ConnectedFolderSelectionActions.prototype, "total", void 0);
__decorate([consume({
	context: groupContext,
	subscribe: true
})], ConnectedFolderSelectionActions.prototype, "group", void 0);
ConnectedFolderSelectionActions = __decorate([customElement("connected-folder-selection-actions")], ConnectedFolderSelectionActions);

//#endregion
//#region src/connection/controllers/components/ConnectedShareDialog.ts
let ConnectedShareDialog = class ConnectedShareDialog extends ControlledConsumer {
	get _path() {
		switch (this._appState) {
			case DisplayState.FOLDER:
			case DisplayState.FILE: return this.content.file?.path;
			default: return;
		}
	}
	get _folder() {
		return this.content.folder;
	}
	get _file() {
		return this.content.file;
	}
	get _appState() {
		return this.display.appState;
	}
	get _folderListDisplayMode() {
		return this.display.folderListDisplayMode;
	}
	get _fileListDisplayMode() {
		return this.display.fileDisplayMode;
	}
	get _fileListDisplayCompact() {
		return this.display.fileDisplayCompact;
	}
	renderEntity(label, icon, prependArrow = false) {
		return html`
        ${prependArrow ? html`<thermal-icon icon="right" variant="micro" style="display: block; width: 1em;"></thermal-icon>` : nothing}
        <div class="entity" title="${label}">
            <thermal-icon icon="${icon}" variant="micro"></thermal-icon>
            <span>${label}</span>
        </div>`;
	}
	renderLink() {
		const url = this.assambleUrl();
		return html`<div class="server-link">

            <div class="server-link-content">
                ${url}
            </div>
            <thermal-btn
                icon="copy"
                iconStyle="mini"
                variant="foreground"
                plain="true"
                @click=${() => {
			navigator.clipboard.writeText(url);
		}}
                tooltip="Zkopírovat odkaz do schránky"
            ></thermal-btn>

            <thermal-btn
                icon="link"
                iconStyle="micro"
                variant="primary"
                plain="true"
                @click=${() => {
			window.open(url, "_blank");
		}}
                tooltip="Otevřít odkaz v novém okně"
            ></thermal-btn>

        </div>`;
	}
	static {
		this.styles = css`
        :host {
            font-size: var( --thermal-fs );
            color: var( --thermal-foreground );
        }

        .entity-list {
            display: flex;
            align-items: center;
            gap: .5em;
            width: 100%;
        }

        .entity {
            display: flex;
            align-items: center;
            gap: 0.5em;
            padding: .5em;
            border-radius: var( --thermal-radius );

            background: var( --thermal-background );

            thermal-icon {
                display: inline-block;
                width: 1em;
            }
        }

        section {

            box-sizing: border-box;
            width: 100%;

            padding: 1.5em .5em .5em .5em;
            margin-top: 2em;

            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );

            position: relative;


            & > h3 {
            
               position: absolute;
               top: -1em;
               left: .5em;
               box-sizing: border-box;
               
               padding: .4em .5em;
               margin: 0;

               border-radius: var( --thermal-radius );
               border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );

               background: var( --thermal-slate-light );

               font-size: 1em;
               line-height: 1em;

            }

            .description {
                font-size: .8em;
                opacity: .5;
                margin-top: .5em;
            }

        }

        .server-link {

            display: flex;

            .server-link-content {
                flex-grow: 1;
                box-sizing: border-box;
                padding: .5em;

                background: var( --thermal-background );
                border-radius: var( --thermal-radius ) 0 0 var( --thermal-radius );
            }

            > thermal-btn {
                border-radius: 0;
                &:last-child {
                    border-radius: 0 var( --thermal-radius ) var( --thermal-radius ) 0;
                }
            }
        
        }
    
    `;
	}
	assambleUrl() {
		let link = this.client.api.getPublicUrl();
		const segments = {};
		if (this.palette) segments["palette"] = this.palette;
		if (this.from !== void 0) segments["from"] = this.from.toString();
		if (this.to !== void 0) segments["to"] = this.to.toString();
		if (this._path) {
			segments["folder-path"] = this._path;
			if (this._appState === DisplayState.FOLDER && this._folderListDisplayMode && this._fileListDisplayMode && this._fileListDisplayCompact !== void 0) {
				segments["files-display"] = this._fileListDisplayMode;
				segments["folder-display"] = this._folderListDisplayMode;
				segments["files-compact"] = this._fileListDisplayCompact ? "true" : "false";
			}
			if (this._appState === DisplayState.FILE && this._file) segments["file-name"] = this._file.fileName;
		}
		return `${link}/?${new URLSearchParams(segments).toString()}`;
	}
	render() {
		if (!this.client || !this.client.api.isConnected() || !this._path || !this._appState || ![DisplayState.FOLDER, DisplayState.FILE].includes(this._appState)) return nothing;
		return html`<thermal-dialog label="${t(T.share)}">

            <thermal-btn slot="invoker" icon="share" iconStyle="mini" tooltip="Sdílet odkaz na tento obsah"></thermal-btn>

            <div slot="content">

                <section>

                    <h3>Co sdílíte</h3>

                    <div class="entity-list">
                        ${this._folder ? this.renderEntity(this._folder.name, "folder") : nothing}
                        ${this._file ? this.renderEntity(this._file.fileName, "image", true) : nothing}
                    </div>

                </section>

                <section>
                    <h3>Odkaz na server</h3>
                    ${this.renderLink()}
                    <div class="description">Odkaz vede na <strong>${this.client.serverInfo?.name}</strong>, kde tento obsah <strong>${this._folder?.protected ? "uvidí pouze uživatelé s přístupem" : "uvidí kdokoliv"}</strong>.</div>
                </section>

            </div>

        </thermal-dialog>`;
	}
};
__decorate([consume({
	context: managerPaletteContext,
	subscribe: true
})], ConnectedShareDialog.prototype, "palette", void 0);
__decorate([consume({
	context: registryRangeFromContext,
	subscribe: true
})], ConnectedShareDialog.prototype, "from", void 0);
__decorate([consume({
	context: registryRangeToContext,
	subscribe: true
})], ConnectedShareDialog.prototype, "to", void 0);
ConnectedShareDialog = __decorate([customElement("connected-share-dialog")], ConnectedShareDialog);

//#endregion
//#region src/connection/components/folder/folders/AbstractFolderThumbnail.ts
var AbstractFolderThumbnail = class extends ControlledConsumer {
	get internalSlug() {
		return this.folder.path.replaceAll("/", "-").replaceAll(" ", "_") + "___thumbnail";
	}
	static {
		this.styles = css`
    
        :host {
            font-size: var( --thermal-fs );
            color: var( --thermal-foreground );
        }

        figure.folder-thumbnail {

            display: block;
            margin: 0;
            padding: 0;

        }

        figure.folder-thumbnail.folder-thumbnail_lrc {

            object-position: center center;

            overflow: hidden;

            manager-provider,
            registry-provider,
            group-provider,
            file-provider {
                display: contents;
                
            }

            file-canvas {
                display: block;
                height: 100%;
                width: auto;
                pointer-events: none;
            }

            file-canvas::part(file-canvas-container),
            file-canvas::part(thermal-canvas-wrapper) {
                width: 100% !important;
                height: 100% !important;
                transition: all .2s ease-in-out;
            }

            file-canvas::part(thermal-file-canvas) {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center center;
            }

        }

        figure.folder-thumbnail.folder-thumbnail_image {

            overflow: hidden;

            img {
                transition: all .2s ease-in-out;
                object-fit: cover;
                object-position: center center;
                width: 100%;
                height: 100%;

            }

        }

        figure.folder-thumbnail.folder-thumbnail_icon {

            display: flex;
            align-items: center;
            justify-content: center;

            thermal-icon {
                transition: all .2s ease-in-out;
                color: var( --thermal-slate );
                width: 2em;
                display: block;
            }
        
        }


        .counter-with-icon {
            display: flex;
            gap: .3em;
            align-items: center;
            thermal-icon {
                display: block;
                width: 1em;
                transform: translateY(.1em);
            }
        }

    `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.addEventListener("click", this.handleActionClick.bind(this));
	}
	handleActionClick(event) {
		event.stopPropagation();
		const innerTarget = "originalTarget" in event ? event.originalTarget : event.target;
		console.log(innerTarget);
		if (innerTarget instanceof HTMLInputElement) {} else {
			this.log(this.onClick);
			this.onClick && this.onClick(this.folder);
		}
	}
	renderCountWithIcon(count, icon, variant = "micro") {
		if (count <= 0) return nothing;
		return html`<div class="counter-with-icon">
                <span>${count}x</span>
                <thermal-icon icon=${icon} variant=${variant}></thermal-icon>
            </div>`;
	}
	renderThumbnail() {
		if (this.folder.thumb && this.shouldRenderThumbnailImage()) return this.renderThumbnailWrapper(this.renderThumbnailImage(this.folder.thumb, this.folder.name), "image");
		if (this.folder.thumb && this.shouldRenderThumbnailLrc()) return this.renderThumbnailWrapper(this.renderThumbnailLrc(this.folder.thumb), "lrc");
		return this.renderThumbnailWrapper(this.renderThumbnailIcon(), "icon");
	}
	shouldRenderThumbnailLrc() {
		return this.folder.thumb?.toLowerCase().endsWith(".lrc") ?? false;
	}
	shouldRenderThumbnailImage() {
		if (!this.folder.thumb) return false;
		const lower = this.folder.thumb.toLowerCase();
		return lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".gif") || lower.endsWith(".webp");
	}
	renderThumbnailWrapper(content, typeClass) {
		return html`<figure class="folder-thumbnail folder-thumbnail_${typeClass}">${content}</figure>`;
	}
	renderThumbnailIcon() {
		return html`<thermal-icon icon="folder" variant="outline"></thermal-icon>`;
	}
	renderThumbnailImage(src, alt) {
		return html`<img src="${src}" alt="${alt}" />`;
	}
	renderThumbnailLrc(thermalUrl) {
		return html`<registry-provider
            autoclear="true"
            batch="true"
            slug="${this.internalSlug}"
        >
            <group-provider 
                slug="${this.internalSlug}"
                autoclear="true"
                batch="true"
            >
                <file-provider
                    thermal="${thermalUrl}"
                    batch="true"
                    autoclear="true"
                >
                    <file-canvas></file-canvas>
                </file-provider>
            </group-provider>
        </registry-provider>`;
	}
};
__decorate([property({ type: Object })], AbstractFolderThumbnail.prototype, "folder", void 0);
__decorate([property({ type: Function })], AbstractFolderThumbnail.prototype, "onClick", void 0);
__decorate([property({ type: Function })], AbstractFolderThumbnail.prototype, "onUpdate", void 0);
__decorate([property({ type: Number })], AbstractFolderThumbnail.prototype, "subfoldersCount", void 0);

//#endregion
//#region src/connection/components/folder/folders/FolderThumbnail.ts
let FolderThumbnail = class FolderThumbnail extends AbstractFolderThumbnail {
	static {
		this.styles = [AbstractFolderThumbnail.styles, css`

        :host {
        
            display: grid;
            grid-template-columns: 100px 1fr;

            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            overflow: hidden;

            cursor: pointer;

            transition: all .2s ease-in-out;

        }

        figure.folder-thumbnail.folder-thumbnail_icon {
        
            background: var( --thermal-slate );

            thermal-icon {
                color: var( --thermal-slate-light );
            }
        
        }


        :host(:hover) {

            box-shadow: var( --thermal-shadow );
            border-color: var( --thermal-slate-dark );

            figure.folder-thumbnail.folder-thumbnail_icon thermal-icon {
                color: var( --thermal-background );
                scale: 1.1;
            }

            figure.folder-thumbnail.folder-thumbnail_lrc {
            
                file-canvas::part(file-canvas-container),
                file-canvas::part(thermal-canvas-wrapper) {
                    scale: 1.05;
                }
            
            }

            figure.folder-thumbnail.folder-thumbnail_image {
            
                img {
                    scale: 1.05;
                }
            
            }
            
        }

        header {
            
            box-sizing: border-box;
            width: 100%;
            min-height: 75px;

            padding: calc( var(--thermal-gap) * .5);
            background: var( --thermal-background );

            .header-top {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: calc( var(--thermal-gap) * .5 );

                width: 100%;

                .header-top-icons {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    color: var( --thermal-slate );
                }
            }

            .header-bottom {
                display: flex;
                justify-content: flex-start;
                margin-top: auto;
            }

            h2 {
                font-size: calc( var(--thermal-fs) * 1 );
                margin: 0;
                padding: 0;
            }

            .description {
                margin-top: calc( var(--thermal-gap) * .25 );
                font-size: calc( var(--thermal-fs) * 0.8 );
                color: var( --thermal-slate );
            }



            .header-folder-icon {
                display: block;
                width: 1.4em;
            }   

        }

        .counter-with-icon {
            font-size: .8em;
        }

    `];
	}
	render() {
		const name = this.folder.name ?? this.folder.slug;
		return html`

            ${this.renderThumbnail()}

            <header>
                <div class="header-top">
                    <div class="header-top-text">
                        <h2>${name}</h2>
                        <div class="description">${this.folder.description}</div>
                    </div>
                    <div class="header-top-icons">

                        <thermal-icon icon="folder" variant="outline" class="header-folder-icon"></thermal-icon>
                        
                        ${this.renderCountWithIcon(this.folder.lrc_count, "image")}

                        ${this.renderCountWithIcon(this.subfoldersCount ?? 0, "folder")}

                        <connected-folder-selection-checkbox .folder=${this.folder}></connected-folder-selection-checkbox>

                    </div>
                </div>
                <div class="header-bottom" @click=${this.handleActionClick}>
                    <slot name="action"></slot>
                </div>
            </header>

        `;
	}
};
FolderThumbnail = __decorate([customElement("server-folder-thumbnail")], FolderThumbnail);

//#endregion
//#region src/connection/components/folder/folders/FolderRow.ts
let FolderRow = class FolderRow extends AbstractFolderThumbnail {
	static {
		this.styles = [AbstractFolderThumbnail.styles, css`

        :host {
        
            display: table-row;

            cursor: pointer;

            transition: all .2s ease-in-out;

            filter: drop-shadow(0px 0px 1px var(--thermal-slate));

            & > td {

                display: table-cell;
                vertical-align: middle;

                min-width: 1em;
                position: relative;

                border-bottom: .5em var(--thermal-border-style)transparent;

                background: var(--thermal-background);
            

                & > * {

                    display: block;

                    height: 100%;

                    overflow: hidden;

                }
                

                &:first-child {

                    border-radius: var( --thermal-radius ) 0 0 var( --thermal-radius );

                    & > * {
                        border-radius: var( --thermal-radius ) 0 0 var( --thermal-radius );
                    }

                }

                &:last-child {

                    border-radius: 0 var( --thermal-radius ) var( --thermal-radius ) 0;

                    & > * {
                        border-radius: 0 var( --thermal-radius ) var( --thermal-radius ) 0;
                    }

                }
            }

        }

        figure.folder-thumbnail.folder-thumbnail_icon {
        
            background: var( --thermal-slate );

            thermal-icon {
                color: var( --thermal-slate-light );
            }
        
        }


        :host(:hover) {

            filter: drop-shadow( var( --thermal-shadow ) );

            figure.folder-thumbnail.folder-thumbnail_icon thermal-icon {
                color: var( --thermal-background );
                scale: 1.1;
            }

            figure.folder-thumbnail.folder-thumbnail_lrc {
            
                file-canvas::part(file-canvas-container),
                file-canvas::part(thermal-canvas-wrapper) {
                    scale: 1.05;
                }
            
            }

            figure.folder-thumbnail.folder-thumbnail_image {
            
                img {
                    scale: 1.05;
                }
            
            }
            
        }

        td {
            padding: 0;
        }

        .cell-texts {

            width: 50% !important;

            min-width: 200px;
            max-width: 500px;
        
        }

        .texts {
            padding: .5em 1em;
            height: 100%;
            box-sizing: border-box;
            
            h3 {
                font-size: 1em;
                margin: 0;
            }
            
            .description,
            .path {
                margin-top: .5em;
            }

            .description { 
                color: var(--thermal-slate); 
                font-size: .8em;
            }
            .path { 
                color: var(--thermal-slate); 
                font-size: .7em;
            }
        }

        .cell-thumbnail,
        figure.folder-thumbnail {

            height: 100px;
            width: 120px;
        
        }

        .cell-count {

            width: 4em;

            box-sizing: border-box;
            padding: .5em;

            vertical-align: middle !important;

            color: var(--thermal-slate);
            

            & > div {
                display: inline-block; 
                
            }
        
        }

        .cell-actions {
            text-align: right;
            box-sizing: border-box;
            padding: .5em 1em;

            & > div {
                display: inline-block;
            }
        }

        

    `];
	}
	render() {
		const name = this.folder.name ?? this.folder.slug;
		return html`
            <td class="cell cell-thumbnail">
                ${this.renderThumbnail()}
            </td>

            <td class="cell cell-texts">
                <div class="texts">
                    <h3>${name}</h3>
                    ${this.folder.description ? html`<div class="description">${this.folder.description.substring(0, 80)}${this.folder.description.length > 80 ? "..." : ""}</div>` : nothing}

                    <div class="path">
                        /${this.folder.path}
                    </div>
                </div>
            </td>

            <td class="cell cell-count">
                <div>
                    ${this.renderCountWithIcon(this.folder.lrc_count, "image")}
                </div>
            </td>

            <td class="cell cell-count">
                <div>
                    ${this.renderCountWithIcon(this.subfoldersCount ?? 0, "folder")}
                </div>
            </td>

            <td class="cell cell-actions" @click="${this.handleActionClick}">
                <div>
                    <slot name="actions"></slot>
                </div>
            </td>

        `;
	}
};
FolderRow = __decorate([customElement("server-folder-row")], FolderRow);

//#endregion
//#region src/index.ts
/**!
* ===========
* LabIR Embed
* ===========
* 
* A webcomponents library for display and analysis of thermal images.
* 
*/
initialiseMode();
addInlineStyles();
console.info("@labirthermal/webcomponents", version$1);
setTimeout(() => {
	window.dispatchEvent(new Event("labirthermal-webcomponents-loaded"));
}, 0);

//#endregion
export {  };
//# sourceMappingURL=index.mjs.map