<?php

// Adds theme support for post formats.
if ( ! function_exists( 'post_format_setup' ) ) :
	function post_format_setup() {
		add_theme_support( 'post-formats', array( 'aside', 'audio', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video' ) );
	}
endif;
add_action( 'after_setup_theme', 'post_format_setup' );
