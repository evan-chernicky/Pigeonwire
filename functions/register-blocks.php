<?php

function register_blocks() {
    //Make theme path available to JS.
    wp_localize_script('wp-editor', 'themeData', array('themePath' => get_stylesheet_directory_uri()));
    
    // register_block_type_from_metadata(get_stylesheet_directory() . '/build/blocks/linkbox'); #Moving in different direction with this block..
    register_block_type_from_metadata(get_stylesheet_directory() . '/build/blocks/worklistings');
    register_block_type_from_metadata(get_stylesheet_directory() . '/build/blocks/accordion');    
    register_block_type_from_metadata(get_stylesheet_directory() . '/build/blocks/accordionitem');    
    register_block_type_from_metadata(get_stylesheet_directory() . '/build/blocks/lottie');    
}
add_action('init', 'register_blocks');

