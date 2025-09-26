<?php

// Enqueues editor-style.css in the editors.
if ( ! function_exists( 'editor_style' ) ) {
	function editor_style() {
		add_editor_style( '/build/editor.css' );
	}
};
add_action( 'after_setup_theme', 'editor_style' );


// Enqueues style.css on the frontend.
if ( ! function_exists( 'enqueue_styles' ) ) {
	function enqueue_styles() {
        wp_enqueue_style('styles', get_theme_file_uri('/build/frontend.css'), array(), wp_get_theme()->get( 'Version' ));
        wp_enqueue_script('scripts', get_template_directory_uri() . '/build/frontend.js', array(), '1.0.0', true );
	}
};
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );