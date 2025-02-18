<?php
/**
 * Plugin Name:       LabIR Edu - Display thermal images
 * Description:       A block for displaying IR camera recordings as interactive analysis apps.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.8
 * Author:            Jan Jáchim, New Technologies Research Center, University of West Bohemia in Pilsen
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       thermal-display
 *
 * @package ThermalDisplay
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

require( __DIR__ . '/lib/dependencies.php' );
require( __DIR__ . '/lib/uploads.php' );

add_filter( 'block_categories_all' , function( $categories ) {

    // Adding a new category.
	$categories[] = array(
		'slug'  => 'thermal',
		'title' => 'Thermal display'
	);

	return $categories;
} );


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function thermal_display_init_blocks() {
	register_block_type( __DIR__ . '/build/wind-chill' );
	register_block_type( __DIR__ . '/build/app' );
	register_block_type( __DIR__ . '/build/group' );
	register_block_type( __DIR__ . '/build/remoteGroup' );
	// register_block_type( __DIR__ . '/build/timeGrid' );
	register_block_type( __DIR__ . '/build/remoteBrowser' );
}
add_action( 'init', 'thermal_display_init_blocks' );




