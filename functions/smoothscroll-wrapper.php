<?php

function my_inline_head_styles() {
    ?>
    <style>
        .is-layout-constrained > .alignwide {
            width: 100%;
            max-width: var(--wp--style--global--wide-size);
        }
        .entry-content {
            opacity: 0;
        }
    </style>
    <?php
}
add_action('wp_head', 'my_inline_head_styles');

// Open wrapper after header template-part
add_action( 'render_block_core/template-part', function( $block_content, $block ) {
    // Insert wrapper opening *after* the header template-part is output
    if ( isset( $block['attrs']['slug'] ) && $block['attrs']['slug'] === 'header' ) {
        // Output header as normal, then start wrapper
        return $block_content . '<div id="smooth-wrapper"><div id="smooth-content">';
    }
    return $block_content;
}, 10, 2 );

// Close wrappers before </body>
add_action( 'wp_footer', function () {
    echo '</div></div>';
}, 0 );

?>
