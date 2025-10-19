<?php
/*
    Disable emoji support
*/
function disable_wp_emojis() {
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');

    // Remove emoji styles
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');

    // Disable TinyMCE emojis
    add_filter('tiny_mce_plugins', function($plugins) {
        if (is_array($plugins)) {
            return array_diff($plugins, array('wpemoji'));
        }
        return array();
    });

    // Remove emoji CDN URL from emails
    add_filter('wp_mail', function($mail) {
        $mail['message'] = preg_replace('/<img.*?class="emoji".*?>/', '', $mail['message']);
        return $mail;
    });
}
add_action('init', 'disable_wp_emojis');

/*
    Remove embedding support
*/
add_action( 'init', function() {
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
    remove_action( 'wp_head', 'wp_oembed_add_host_js' );
});

/*
    Remove RSS feeds
*/
function disable_wp_feeds() {
    wp_die( 'No feed available.' );
}
add_action( 'do_feed', 'disable_wp_feeds', 1 );
add_action( 'do_feed_rdf', 'disable_wp_feeds', 1 );
add_action( 'do_feed_rss', 'disable_wp_feeds', 1 );
add_action( 'do_feed_rss2', 'disable_wp_feeds', 1 );
add_action( 'do_feed_atom', 'disable_wp_feeds', 1 );

/*
    Remove jQuery
*/
add_action( 'wp_default_scripts', function( $scripts ) {
    if ( ! is_admin() ) {
        $scripts->remove( 'jquery' );
        $scripts->add( 'jquery', false, [ 'jquery-core' ], '1.12.4' );
    }
});

