<?php

//Adds arrow to button blocks
add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_script(
        'button-arrow-script',
        get_template_directory_uri() . '/src/core-block-edit/button-arrow.js',
            ['wp-blocks', 'wp-dom-ready', 'wp-hooks', 'wp-element', 'wp-components', 'wp-block-editor'],
        filemtime(get_template_directory() . '/src/core-block-edit/button-arrow.js'),
        true
    );
});

add_filter( 'render_block_core/button', function( $block_content, $block ) {
    if ( $block['blockName'] === 'core/button' && strpos( $block_content, 'has-arrow') !== false ) {
        $svg = '<svg class="button-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        $block_content = str_replace('</a>', $svg . '</a>', $block_content);
    }
    return $block_content;
}, 10, 2 );