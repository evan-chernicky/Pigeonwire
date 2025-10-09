<?php 

add_action( 'init', function() {
    // Remove all patterns registered by WordPress core
    remove_theme_support( 'core-block-patterns' );
    add_filter( 'should_load_remote_block_patterns', '__return_false' );

    

}, 11 );