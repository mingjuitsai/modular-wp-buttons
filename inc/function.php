<?php

add_filter( "mce_external_plugins", "modular_buttons_add_buttons" );
add_filter( 'mce_buttons', 'modular_buttons_register_buttons' );
add_action( 'admin_enqueue_scripts', 'mb_stylesheet_to_admin' );
add_editor_style( plugins_url( 'css/style.css', __FILE__ ));

function modular_buttons_add_buttons( $plugin_array ) {
    $plugin_array['modular_buttons'] = plugins_url( 'js/plugin.js', __FILE__ );
    return $plugin_array;
}
function modular_buttons_register_buttons( $buttons ) {
    array_push( $buttons, 'modular_buttons' );
    return $buttons;
}

/**
 * Add stylesheet to the admin pages
 */
function mb_stylesheet_to_admin() {
    wp_enqueue_style( 'custom-mce-style', plugins_url( 'css/style.css', __FILE__ ));
}
?>