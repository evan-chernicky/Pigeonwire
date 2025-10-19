<?php

//Adds arrow and arrow options UI to button blocks
add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_script(
        'button-arrow-script',
        get_template_directory_uri() . '/src/core-block-edit/button-arrow.js',
            ['wp-blocks', 'wp-dom-ready', 'wp-hooks', 'wp-element', 'wp-components', 'wp-block-editor'],
        filemtime(get_template_directory() . '/src/core-block-edit/button-arrow.js'),
        true
    );
});

//Adds arrow SVG to the front end 
add_filter( 'render_block_core/button', function( $block_content, $block ) {
    if ( $block['blockName'] === 'core/button' && strpos( $block_content, 'has-arrow') !== false ) {
       $svg = file_exists( get_template_directory() . '/assets/icons/arrow-right-up-white.svg' )
                ? file_get_contents( get_template_directory() . '/assets/icons/arrow-right-up-white.svg' )
                : '';

        $block_content = str_replace('</a>', $svg . '</a>', $block_content);
    }
    return $block_content;
}, 10, 2 );