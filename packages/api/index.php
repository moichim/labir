<?php


header('Content-Type: application/json');
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods GET');
// header( 'Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Authorization"' );


function groupByHour($timestamp)
{
    return strtotime("midnight", $timestamp) + (date("H", $timestamp) * 3600);
}

function groupByDay($timestamp)
{
    return strtotime("midnight", $timestamp);
}

function groupByWeek($timestamp)
{
    $dayOfWeek = date("N", $timestamp);

    return strtotime("midnight", $timestamp) - (($dayOfWeek - 1) * 86400);
}

function groupByMonth($timestamp)
{
    return strtotime(date("Y-m-01", $timestamp));
}

function groupByYear($timestamp)
{
    return strtotime(date("Y-01-01", $timestamp));
}


abstract class AbstractController
{


    /** The base public URL */
    protected $api_endpoint;

    /** The base public URL with optional subfolder */
    protected $content_url;

    /** The base URI path */
    protected $content_path;

    /** The response object */
    protected $response;

    /** Subfolder */
    protected $subfolder = null;

    protected $availableFolders = [];

    protected $includedFolders = [];

    protected $grid = false;




    function groupByHour($timestamp)
    {
        return strtotime("midnight", $timestamp) + (date("H", $timestamp) * 3600);
    }

    function groupByDay($timestamp)
    {
        return strtotime("midnight", $timestamp);
    }

    function groupByWeek($timestamp)
    {
        $dayOfWeek = date("N", $timestamp);

        return strtotime("midnight", $timestamp) - (($dayOfWeek - 1) * 86400);
    }

    function groupByMonth($timestamp)
    {
        return strtotime(date("Y-m-01", $timestamp));
    }

    function groupByYear($timestamp)
    {
        return strtotime(date("Y-01-01", $timestamp));
    }




    protected function doInfo()
    {
        $this->markResponse("info", true);
        $this->response["folders"] = $this->includedFolders;
    }

    protected function doFolder($folder)
    {

        $this->markResponse("folderContent", true);

        $sanitized_folder = $this->sanitize($folder);

        if (! in_array($sanitized_folder, array_keys($this->availableFolders))) {
            throw new Exception("The folder '$sanitized_folder' was not found on the server!", 2);
        }

        $this->response["info"] = $this->availableFolders[$sanitized_folder];

        $this->response["files"] = $this->scanFolderFiles($sanitized_folder);
    }

    protected function doEverything()
    {

        $this->markResponse("everythinhg", true);

        $this->response["folders"] = $this->includedFolders;

        foreach ($this->response["folders"] as $key => $folder) {
            $this->response["folders"][$key]["files"] = $this->scanFolderFiles($key);
        }
    }


    protected function doHours()
    {

        $this->markResponse("hours", true);
        $this->response["data"] = $this->groupBy("AbstractController::groupByHour");
    }

    protected function doDays()
    {
        $this->markResponse("days", true);
        $this->response["data"] = $this->groupBy("AbstractController::groupByDay");
    }

    protected function doWeeks()
    {
        $this->markResponse("weeks", true);
        $this->response["data"] = $this->groupBy("AbstractController::groupByWeek");
    }

    protected function doMonths()
    {
        $this->markResponse("months", true);
        $this->response["data"] = $this->groupBy("AbstractController::groupByMonth");
    }

    protected function doYears()
    {
        $this->markResponse("years", true);
        $this->response["data"] = $this->groupBy("AbstractController::groupByYear");
    }


    protected function router()
    {

        if ($_SERVER["QUERY_STRING"] === "" || strpos($_SERVER["REQUEST_URI"], '&') === false) {
            $this->doInfo();
        } else if (isset($_GET["folder"])) {
            $this->doFolder($_GET["folder"]);
        } else if (isset($_GET["hours"])) {
            $this->doHours();
        } else if (isset($_GET["days"])) {
            $this->doDays();
        } else if (isset($_GET["weeks"])) {
            $this->doWeeks();
        } else if (isset($_GET["months"])) {
            $this->doMonths();
        } else if (isset($_GET["years"])) {
            $this->doYears();
        } else if (isset($_GET["everything"])) {
            $this->doEverything();
        } else {
            throw new Exception("No route found!", 0);
        }
    }

    protected function markResponse(
        $type,
        $success = true
    ) {
        $this->response["success"] = $success;
        $this->response["type"] = $type;
    }



    protected function urlParamExists($param): bool
    {
        return isset($_GET[$param]);
    }

    protected function getParamValue($param)
    {
        if ($this->urlParamExists($param)) {
            return $this->sanitize($_GET[$param]);
        }
        return null;
    }

    /** Make sure the input is safe */
    protected function sanitize($input): string
    {
        return preg_replace('/[^a-zA-Z0-9_\- ,]/', '', $input);
    }


    /** Print the response - should end the script afterwards */
    public function respond()
    {
        echo json_encode($this->response);
        // die();
    }

    protected function getBaseUrl()
    {
        $protocol = isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] === "on"
            ? "https"
            : "http";
        $host = $_SERVER['HTTP_HOST'];
        $port = $_SERVER["SERVER_PORT"] === 8080 ? ":8080" : "";
        $path = str_replace("?" . $_SERVER["QUERY_STRING"], "", $_SERVER["REQUEST_URI"]);
        return "$protocol://$host$port$path";
    }

    protected function getAvailableFolders()
    {

        $folders = array();

        $items = scandir($this->content_path);

        foreach ($items as $item) {

            $path = $this->content_path . "/" . $item;

            if ($item !== '.' && $item !== '..' && is_dir($path)) {
                $has_info_txt = file_exists("$path/_info.txt");
                $has_lrc_files = count(glob("$path/*.lrc")) > 0;
                if ($has_info_txt || $has_lrc_files) {
                    $info = $this->scanFolderInfo($item);
                    if ($info["lrc_count"] > 0) {
                        $folders[$item] = $info;
                    }
                }
            }
        }

        return $folders;
    }

    protected function scanFolderInfo($folder_name)
    {

        $folder_path = $this->content_path . "/" . $folder_name;

        $lrc_files = glob($folder_path . "/*.lrc");

        $info = [
            "folder" => $folder_name,
            "name" => $folder_name,
            "content_url" => $this->content_url . $folder_name,
            "request_url" => $this->api_endpoint . "?folder=" . $folder_name . ($this->subfolder ? "&scope=" . $this->subfolder : ""),
            "lrc_count" => count($lrc_files)
        ];

        $info_file_path = $this->getFolderFilePath($folder_name, "_info.txt");

        if (file_exists($info_file_path)) {
            $lines = file($info_file_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                list($key, $value) = explode(': ', $line, 2);
                $info[$key] = $value;
            }
        }

        

        if (!empty($lrc_files)) {
            $first_file = $lrc_files[0];
            $info["preview"] = $this->scanOneFile($folder_name, $first_file);
        }

        return $info;
    }

    protected function scanFolderFiles($folder_name)
    {

        $folder_path = $this->content_path . "/" . $folder_name;

        $lrc_files = glob($folder_path . "/*.lrc");

        $files = [];

        foreach ($lrc_files as $file) {
            $files[] = $this->scanOneFile($folder_name, $file);
        }

        // $this->response["Scanned " . $folder_name] = $files;

        usort($files, function ($a, $b) {
            return $a["timestamp"] - $b["timestamp"];
        });

        return $files;
    }

    protected function scanOneFile($folder, $path)
    {

        $file_name = basename($path);
        $lrc = $this->getFolderFileUrl($folder, $file_name);

        $timestamp = $this->readTimestamp($path, 5);

        $result = [
            "timestampTmp" => round( $timestamp / 1000 ),
            "timestamp" => $timestamp,
            "file_name" => $file_name,
            "lrc" => $lrc
        ];


        $png_file_name = str_replace(".lrc", ".png", $file_name);
        $png_file_name = str_replace("thermal", "visual", $png_file_name);

        $png_path = $this->getFolderFilePath($folder, $png_file_name);

        if (file_exists($png_path)) {
            $result["png"] = $this->getFolderFileUrl($folder, $png_file_name);
        }

        return $result;
    }

    protected function getFolderFilePath($folder_name, $file_name)
    {
        return $this->content_path . "/" . $folder_name . "/" . $file_name;
    }

    protected function getFolderFileUrl($folder_name, $file_name)
    {
        return $this->content_url . "" . $folder_name . "/" . $file_name;
    }


    protected function readTimestamp($filePath, $index)
    {
        $file = fopen($filePath, 'rb');
        if (!$file) {
            return null;
        }

        fseek($file, $index);
        $binaryData = fread($file, 8);
        fclose($file);

        $bigIntTime = unpack('P', $binaryData)[1];

        // Constant representing the Unix epoch in milliseconds
        $UnixEpoch = 62135596800000;

        // Constants related to ticks (assuming ticks are stored as milliseconds)
        $TicksPerMillisecond = 10000;
        $TicksPerDay = 24 * 60 * 60 * 1000 * $TicksPerMillisecond;

        // Maximum value a 64-bit signed integer can hold
        $TicksCeiling = 0x4000000000000000;

        // Mask to extract the sign bit from a 64-bit unsigned integer
        $LocalMask = 0x8000000000000000;

        // Mask to extract the tick value from a 64-bit unsigned integer
        $TicksMask = 0x3fffffffffffffff;

        $ticks = $bigIntTime & $TicksMask;
        $isLocalTime = $bigIntTime & $LocalMask;

        if ($isLocalTime) {
            if ($ticks > ($TicksCeiling - $TicksPerDay)) {
                $ticks -= $TicksCeiling;
            }

            if ($ticks < 0) {
                $ticks += $TicksPerDay;
            }
        }

        // the time is UTC, needs to be converted to local time zone
        $milliseconds = $ticks / $TicksPerMillisecond - $UnixEpoch;

        return $milliseconds;
    }


    protected function groupBy(
        $get_group_timestamp
    ) {

        $groups = [];

        foreach ($this->includedFolders as $folder => $info) {

            $lrc_files = $this->scanFolderFiles($folder);

            foreach ($lrc_files as $file) {

                $group_start = call_user_func($get_group_timestamp, $file["timestampTmp"]);
                $group_start_key = strval($group_start);

                if ( !array_key_exists($group_start_key, $groups) ) {
                    $groups[$group_start_key] = [];
                }

                if ( !array_key_exists($folder, $groups[$group_start_key]) ) {

                    $groups[$group_start_key][$folder] = [
                        "name" => $info["name"],
                        "count" => 0,
                        "folder" => $info["folder"],
                        "files" => []
                    ];
                }

                if ( !array_key_exists("files", $groups[$group_start_key][$folder]) ) {
                    $groups[$group_start_key][$folder]["files"] = [];
                }

                $groups[$group_start_key][$folder]["files"][$file["timestamp"]] = $file;

                $groups[$group_start_key][$folder]["count"] += 1;

            }
        }


        if ($this->grid === true) {

            foreach ($groups as $time => $group) {

                foreach ($this->includedFolders as $f => $info) {

                    if (!array_key_exists($f, $group)) {

                        $this->response[] = "Nebyla nalezena skupina $time $f";

                        $groups[$time][$f] = [
                            "name" => $info["name"],
                            "folder" => $f,
                            "files" => [],
                            "cound" => 0
                        ];
                    }
                }
            }
        }

        return $groups;
    }
}


class Controller extends AbstractController
{

    public function __construct()
    {

        $this->api_endpoint = $this->getBaseUrl();

        $this->subfolder = $this->getParamValue("scope");

        $this->content_url = $this->api_endpoint;
        if ($this->subfolder) $this->content_url .= $this->subfolder . "/";

        $this->content_path = __DIR__;
        if ($this->subfolder) $this->content_path .= "/" . $this->subfolder;

        $this->availableFolders = $this->getAvailableFolders();

        $this->includedFolders = $this->availableFolders;

        if (isset($_GET["exclude"])) {
            $exclude_safe = $this->sanitize($_GET["exclude"]);
            $exclude = array_map(function (string $f) {
                return $this->sanitize($f);
            }, explode(",", $exclude_safe));
            $this->includedFolders = array_filter($this->includedFolders, function ($folder) use ($exclude) {
                return !in_array($folder["folder"], $exclude);
            });
        }

        if (isset($_GET["only"])) {
            $only_safe = $this->sanitize($_GET["only"]);
            $only = array_map(function (string $f) {
                return $this->sanitize($f);
            }, explode(",", $only_safe));

            $this->includedFolders = array_filter($this->includedFolders, function ($folder) use ($only) {
                return in_array($folder["folder"], $only);
            });
        }



        $this->response = [
            "app" => "LabIR Edu folder scanner",
            "version" => 1,
            "success" => false,
            "content_url" => $this->content_url
        ];


        $this->grid = isset($_GET["grid"]);

        try {
            $this->router();
        } catch (Exception $e) {
            $this->response["error"] = $e->getMessage();
            $this->response["code"] = $e->getCode();
            $this->response["success"] = false;
            // $this->respond();
        }
    }
}


$controller = new Controller();

return $controller->respond();
