<?php

/**
 * Registering and enqueuing assets for both admin and frontend
 * 
 * @package ThermalDisplay
 */

$styles_name = "thermal_display_styles";
$scripts_name_cjs = "thermal_display_embed_library_cjs";
$scripts_name_es = "thermal_display_embed_library_es";

$version = "1.2.68";




if (! function_exists("thermal_display_register_assets")) {

    /**
     * Register assets
     * 
     * Uses @labir/embed package copied to the plugins's assets folder.
     * Once registered, styles may be enqueued separately on frontend and backend
     */
    function thermal_display_register_assets()
    {

        global $styles_name;
        global $scripts_name_cjs;
        global $scripts_name_es;
        global $version;
        global $dev;

        wp_register_style(
            $styles_name,
            plugin_dir_url(__DIR__) . 'assets/embed.css?v=' . $version,
            array(),
            time()
        );



        wp_register_script(
            $scripts_name_cjs,
            plugin_dir_url(__DIR__) . 'assets/embed.js?v=' . $version,
            array(),
            time()
        );


        wp_register_script(
            $scripts_name_es,
            plugin_dir_url(__DIR__) . 'assets/embed.esm.js?v=' . $version,
            array(),
            time()
        );



        wp_register_style(
            "thermal_display_wp_styles",
            plugin_dir_url(__DIR__) . 'lib/styles.css?v=' . $version,
            array(),
            time()
        );

        wp_enqueue_style("thermal_display_wp_styles");
    }

    add_action('init', 'thermal_display_register_assets');
}






if (! function_exists("thermal_display_enqueue_frontend_assets")) {

    /**
     * Enqueue frontend assets
     */
    function thermal_display_enqueue_frontend_assets()
    {

        /** 
         * Need to check whether the current content has blocks from this plugin. 
         * The embed library conflicts somehow with other Wordpress plugins such as Leaflet.
        */
        if (
            has_block("thermal-display/file")
            || has_block("thermal-display/group")
            || has_block("thermal-display/remote-browser")
            || has_block("thermal-display/remote-group")
            || has_block("thermal-display/wind-chill")
            || has_block( "thermal-display/dropin" )
        ) {
            global $styles_name;
            global $scripts_name_cjs;

            wp_enqueue_style($styles_name);

            wp_enqueue_script($scripts_name_cjs);

            wp_enqueue_style("thermal_display_wp_styles");
        }
    }

    add_action('wp_enqueue_scripts', 'thermal_display_enqueue_frontend_assets');
}



if (! function_exists("thermal_display_enqueue_editor_assets")) {


    /**
     * Enqueue editor assets (not content)
     * 
     * In this moment, we use only styles. JS shall be added in a different way.
     */
    function thermal_display_enqueue_editor_assets()
    {

        global $styles_name;
        global $scripts_name_es;

        if (is_admin()) {

            wp_enqueue_style($styles_name);
        }
    }

    add_action('enqueue_block_assets', 'thermal_display_enqueue_editor_assets', 40);
}


function thermal_display_head()
{

?>

    <script>
        window.thermal_display_script_url = "<?= plugin_dir_url(__DIR__) . 'assets/embed.es.js'; ?>";
    </script>

<?php

}

// add_action( 'wp_head', 'thermal_display_head' );
add_action('admin_head', 'thermal_display_head');
