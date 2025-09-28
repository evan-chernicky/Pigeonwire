<?php

// Utility function to get and display the alt text of the post thumbnail.
function the_post_thumbnail_alt( $post_id = null ) {
    if ( ! $post_id ) {
        $post_id = get_the_ID();
    }

    $thumb_id = get_post_thumbnail_id( $post_id );
    if ( ! $thumb_id ) return '';

    $alt_text = get_post_meta( $thumb_id, '_wp_attachment_image_alt', true );
    echo esc_html( $alt_text );
}