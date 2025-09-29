<?php

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
