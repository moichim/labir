<?php

/**
 * Registering and enqueuing assets for both admin and frontend
 * 
 * @package ThermalDisplay
 */

$styles_name = "thermal_display_styles";
$scripts_name_cjs ="thermal_display_embed_library_cjs";
$scripts_name_es ="thermal_display_embed_library_es";

$version = "1.2.60";


$dev = false;




if ( ! function_exists( "thermal_display_register_assets" ) ) {

    /**
     * Register assets
     * 
     * Uses @labir/embed package copied to the plugins's assets folder.
     * Once registered, styles may be enqueued separately on frontend and backend
     */
    function thermal_display_register_assets() {

        global $styles_name;
        global $scripts_name_cjs;
        global $scripts_name_es;
        global $version;
        global $dev;

        wp_register_style( 
            $styles_name, 
            $dev
                ? plugin_dir_url( __DIR__  ) . 'assets/embed.css'
                : "https://cdn.jsdelivr.net/npm/@labir/embed@".$version."/dist/embed.min.css", 
            array(), 
            $dev ? time() : null 
        );

        

        wp_register_script( 
            $scripts_name_cjs, 
            $dev
                ? plugin_dir_url( __DIR__ ) . 'assets/embed.js' 
                : "https://cdn.jsdelivr.net/npm/@labir/embed@".$version."/dist/embed.min.js", 
            array(), 
            $dev ? time() : null
        );


            wp_register_script( 
                $scripts_name_es, 
                "https://cdn.jsdelivr.net/npm/@labir/embed@".$version."/+esm", 
                array(), 
                $dev ? time() : null
            );

    }

    add_action( 'init', 'thermal_display_register_assets' );

}






if ( ! function_exists( "thermal_display_enqueue_frontend_assets") ) {

    /**
     * Enqueue frontend assets
     */
    function thermal_display_enqueue_frontend_assets() {

        global $styles_name;
        global $scripts_name_cjs;

        wp_enqueue_style( $styles_name );

        wp_enqueue_script( $scripts_name_cjs );

    }

    add_action( 'wp_enqueue_scripts', 'thermal_display_enqueue_frontend_assets' );

}



if ( ! function_exists( "thermal_display_enqueue_editor_assets" ) ) {


    /**
     * Enqueue editor assets (not content)
     * 
     * In this moment, we use only styles. JS shall be added in a different way.
     */
    function thermal_display_enqueue_editor_assets() {

        global $styles_name;
        global $scripts_name_es;

        if ( is_admin() ) {

            wp_enqueue_style( $styles_name );

        }

    }

    add_action( 'enqueue_block_assets', 'thermal_display_enqueue_editor_assets', 40 );

}


function thermal_display_head() {

    ?>

    <script>
        window.thermal_display_script_url = "<?= plugin_dir_url( __DIR__ ) . 'assets/embed.es.js'; ?>";
    </script>

    <?php

}

add_action( 'wp_head', 'thermal_display_head' );
add_action( 'admin_head', 'thermal_display_head' );
