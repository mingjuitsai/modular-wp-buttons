<?php
/**
 * Plugin Name: Modular Buttons
 * Plugin URI: http://plot.net.au
 * Description: A WordPress plugin and add button to insert modular buttons into editor that is extensible through theme's style.
 * Version: 1.0.0
 * Author: Plot Media
 * Author URI: http://plot.net.au
 * License: GPL2
 */

add_action( 'init', 'mb_linebreak_init' );

// Declare shortcode function if NOT exist
if( !function_exists( 'mb_linebreak_init') ) {

	function mb_linebreak_init() {
		// add the shortcodes
		require 'inc/function.php';
	}
}
