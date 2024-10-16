<?php
/**
 * Plugin Name:       LabIR Edu - Display thermal images
 * Description:       A block for displaying IR camera recordings as interactive analysis apps.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Jan Jáchim, New Technologies Research Center, University of West Bohemia in Pilsen
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       thermal-display
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function labir_assets() {
	wp_register_style( "labir_styles", plugin_dir_url( __FILE__ ) . '/assets/embed.css' );
	wp_enqueue_style( "labir_styles" );
	
	wp_register_script( 'labir_webcomponents', plugin_dir_url( __FILE__ ) . '/assets/embed.js' , array(), time() );
	wp_enqueue_script( "labir_webcomponents" );
}

/**
 * Register assets on the frontpage
 * Uses @labir/embed package
 * Admin scripts are loaded dynamically using JS on gutenberg page load.
 */
function thermal_assets($hook) {
	
	labir_assets();

}
add_action('wp_enqueue_scripts', 'thermal_assets');

/**
 * Enqueue Editor assets.
 */
function example_enqueue_editor_assets( $param ) {
	if ( is_admin() ) {

    	wp_enqueue_style( "labir_styles__", plugin_dir_url( __FILE__ ) . '/assets/embed.css' );
	
		// wp_enqueue_script( 'labir_webcomponents___', "https://cdn.jsdelivr.net/npm/@labir/embed@1.2.46/dist/embed.min.js",array(), time(), );
		// wp_enqueue_script( 'testimonial',  plugin_dir_url( __FILE__ ) . 'assets/embed.js', array(), time(), true );
	}
}
add_action( 'enqueue_block_assets', 'example_enqueue_editor_assets', 40 );


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function thermal_init_blocks() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'thermal_init_blocks' );


/**
 * Enable uploading of LRC files
 */
function thermal_display_mime($mimes = array()) {
    $mimes['lrc'] = "application/octet-stream";
    return $mimes;
}

add_action('upload_mimes', 'thermal_display_mime');



