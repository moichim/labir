<?php

header('Content-Type: application/json');
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods GET');
// header( 'Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Authorization"' );


function sanitize($input) {
    return preg_replace('/[^a-zA-Z0-9_\- ,]/', '', $input);
}

$sub = isset( $_GET["scope"] ) ? "/".sanitize( $_GET["scope"] ) : "";



$now = time();

$url_base = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

// Core URL elements
$url = [
    parse_url($url_base, PHP_URL_SCHEME) . ":/",
    parse_url($url_base, PHP_URL_HOST),
];

// URL Port for localhost
$port = parse_url($url_base, PHP_URL_PORT);
if ($port === 8080) {
    $url[1] .= ":8080";
}

// The path
$path = trim(parse_url($url_base, PHP_URL_PATH),  "/");

if ($path !== "") {
    $url[] = $path;
}


// Prepare the URL
$url_host = implode("/", $url);


$response = [
    "time" => time(),
    "success" => false
];


// Function to read _info.txt and return an associative array
function read_info_file($folder, $host_url, $subfolder) 
{

    $info = array(
        "folder" => $folder,
        "name" => $folder
    );
    $file_path = __DIR__ . $subfolder . "/$folder/_info.txt";
    if (file_exists($file_path)) {
        $lines = file($file_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            list($key, $value) = explode(': ', $line, 2);
            $info[$key] = $value;
        }
    }

    $lrc_files = glob(__DIR__ . $subfolder . "/$folder/*.lrc");
    $info['lrc_count'] = count($lrc_files);


    return $info;
}


// Read timestamp from a LRC file
function readTimestamp($filePath, $index)
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



// Scan the current directory for folders
$folders = array();
$dir = __DIR__ . $sub;

$items = scandir($dir);
foreach ($items as $item) {

    if ($item !== '.' && $item !== '..' && is_dir("$dir/$item")) {
        $has_info_txt = file_exists("$dir/$item/_info.txt");
        $has_lrc_files = count(glob("$dir/$item/*.lrc")) > 0;
        if ($has_info_txt || $has_lrc_files) {
            $folders[$item] = read_info_file($item, $url_host, $sub);
        }
    }
}

$response["folders"] = $folders;

if (isset($_GET["only"])) {

    $only_safe = sanitize( $_GET["only"] );

    $only = array_map(function (string $f) {
        return sanitize( trim($f) );
    }, explode(",", $only_safe));

    $response["only"] = $only;

    $filtered_folders = [];

    foreach ($folders as $folder => $info) {
        if (in_array($folder, $only)) {
            $filtered_folders[$folder] = $info;
        }
    }

    $folders = $filtered_folders;
}

if (isset($_GET["exclude"])) {

    $exclude_safe = sanitize( $_GET["exclude"] );

    $exclude = array_map(function (string $f) {
        return trim($f);
    }, explode(",", $exclude_safe));

    $response["exclude"] = $exclude;

    $filtered_folders = [];

    foreach ($folders as $folder => $info) {

        if (!in_array($folder, $exclude, true)) {
            $filtered_folders[$folder] = $info;
        }
    }

    $folders = $filtered_folders;
}

$isFolder = false;

foreach ($folders as $folder => $info) {

    if (isset($_GET[$folder])) {

        $response["info"] = $info;
        $response["success"] = true;

        $isFolder = true;

        $lrc_files = glob(__DIR__ . $sub . "/$folder/*.lrc");

        $response['files'] = array_map(function ($file) use ($url_host, $folder,$sub) {
            $file_name = basename($file, '.lrc');
            $lrc_url = $url_host ."$sub/$folder/$file_name.lrc";
            $png_url = file_exists(__DIR__ . "/$folder/$file_name.png") ? $url_host . "$sub/$folder/$file_name.png" : null;

            $timestamp = round(readTimestamp($file, 5) / 1000);

            $result = [
                "file_name" => $file_name . ".lrc",
                "timestamp" => $timestamp,
                "lrc" => htmlspecialchars( $lrc_url )
            ];

            if ($png_url) {
                $result["png"] = htmlspecialchars( $png_url );
            }

            return $result;
        }, $lrc_files);

        usort($response['files'], function ($a, $b) {
            return $a['timestamp'] - $b['timestamp'];
        });

        echo json_encode($response);
        die();

    }
}


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

function groupBy(
    $folders,
    string $url_host,
    $get_group_timestamp,
    $subfolder,
    bool $grid = false
) {
    $groups = [];

    foreach ($folders as $folder => $info) {

        $lrc_files = glob(__DIR__ . $subfolder . "/$folder/*.lrc");

        foreach ($lrc_files as $file) {

            $timestamp = round(readTimestamp($file, 5) / 1000);
            $group_start = call_user_func($get_group_timestamp, $timestamp);
            // strtotime( "midnight", $timestamp );

            if (!isset($groups[$group_start])) {
                $groups[$group_start] = [];
            }

            if (!isset($groups[$group_start][$folder])) {
                $groups[$group_start][$folder] = [
                    "name" => $info["name"],
                    "files" => [],
                    "count" => 0
                ];
            }

            $png = str_replace( ".lrc", ".png", basename($file) );

            $png_url = file_exists(__DIR__ . $subfolder . "/$folder/$png") ? $url_host."$subfolder/$folder/$png" : null;

            $result = [
                "file_name" => basename($file),
                "timestamp" => $timestamp,
                "lrc" => htmlspecialchars( $url_host."$subfolder/$folder/" . basename($file) ),
            ];

            if ($png_url) {
                $result["png"] = htmlspecialchars( $png_url );
            }

            $groups[$group_start][$folder]["files"][$timestamp] = $result;

            $groups[$group_start][$folder]["count"] += 1;
        }
    }

    // Add grid
    if ($grid === true) {

        foreach ($groups as $time => $group) {

            foreach ($folders as $f => $info) {

                if (!array_key_exists($f, $group)) {
                    $groups[$time][$f] = [
                        "name" => $info["name"],
                        "files" => [],
                        "cound" => 0
                    ];
                }
            }
        }
    }

    return $groups;
}

$grid = isset($_GET["grid"]);


if (isset($_GET["hours"])) {

    $grouped = groupBy($folders, $url_host, "groupByHour", $sub, $grid);

    $response["data"] = $grouped;
    $response["success"] = true;

    echo json_encode($response);
    die();
}


if (isset($_GET["days"])) {

    $grouped = groupBy($folders, $url_host, "groupByDay", $sub, $grid);

    $response["data"] = $grouped;
    $response["success"] = true;

    echo json_encode($response);
    die();
}


if (isset($_GET["weeks"])) {

    $grouped = groupBy($folders, $url_host, "groupByWeek", $sub, $grid);

    $response["data"] = $grouped;
    $response["success"] = true;

    echo json_encode($response);
    die();
}


if (isset($_GET["months"])) {

    $grouped = groupBy($folders, $url_host, "groupByMonth", $sub, $grid);

    $response["data"] = $grouped;
    $response["success"] = true;

    echo json_encode($response);
    die();
}

if (isset($_GET["years"])) {

    $grouped = groupBy($folders, $url_host, "groupByYear", $sub, $grid);

    $response["data"] = $grouped;
    $response["success"] = true;

    echo json_encode($response);
    die();
}



if (isset($_GET["groups"])) {

    $hours = groupBy($folders, $url_host, "groupByHour", $grid);
    $days = groupBy($folders, $url_host, "groupByDay", $grid);
    $weeks = groupBy( $folders, $url_host, "groupByWeek", $grid );
    $months = groupBy($folders, $url_host, "groupByMonth", $grid);
    $years = groupBy($folders, $url_host, "groupByYear", $grid);

    $response["hours"] = $hours;
    $response["days"] = $days;
    $response["weeks"] = $weeks;
    $response["months"] = $months;
    $response["years"] = $years;

    $response["success"] = true;

    echo json_encode($response);
    die();
}

if (isset($_GET["everything"])) {
    foreach ($folders as $item => $info) {

        $folders[$item]["url"] = $sub
            ? "$url_base&$item"
            : "$url_base?$item";

        $lrc_files = glob(__DIR__ . $sub  . "/$item/*.lrc");

        $folders[$item]['files'] = array_map(function ($file) use ($url_host, $sub, $item) {
            $file_name = basename($file, '.lrc');
            $lrc_url = $url_host."$sub/$item/$file_name.lrc";
            $png_url = file_exists(__DIR__ . $sub . "/$item/$file_name.png") ? $url_host."$sub/$item/$file_name.png" : null;

            $timestamp = round(readTimestamp($file, 5) / 1000);

            $result = [
                "file_name" => $file_name . ".lrc",
                "timestamp" => $timestamp,
                "lrc" => $lrc_url
            ];

            if ($png_url) {
                $result["png"] = $png_url;
            }

            return $result;
        }, $lrc_files);

        usort($folders[$item]['files'], function ($a, $b) {
            return $a['timestamp'] - $b['timestamp'];
        });
    }

    $response["folders"] = $folders;
    $response["success"] = true;

    echo json_encode($response);

    die();
}

function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if (!$length) {
        return true;
    }
    return substr($haystack, -$length) === $needle;
}

// Default route
if ( endsWith($_SERVER["REQUEST_URI"], "/") || $isFolder===false) {
    foreach ($folders as $item => $info) {
        $folders[$item]["url"] = htmlentities($sub 
            ? "$url_base&$item"
            :"$url_base?$item"); }

    $response["folders"] = $folders;
    $response["success"] = true;

    echo json_encode($response);

    die();
}

$response["error"] = "Route not found";

echo json_encode($response);
