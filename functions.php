<?php

// Adds custom functions to theme.
require_once(get_template_directory().'/functions/utility-functions.php'); 

// Allows for post formats.
require_once(get_template_directory().'/functions/post-formats.php'); 

// Register custom post types.
require_once(get_template_directory().'/functions/register-post-types.php'); 

// Enqueues styles and scripts.
require_once(get_template_directory().'/functions/enqueue.php'); 

// Register new blocks
require_once(get_template_directory().'/functions/register-blocks.php'); 

// Turns off multiple wordpress defaults like jquery, emoji support, RSS feeds, and embedding.
require_once(get_template_directory().'/functions/reduce-bloat.php'); 

// Apply smooth scroll wrapper
require_once(get_template_directory().'/functions/smoothscroll-wrapper.php'); 

// Cleanup Gutenberg
require_once(get_template_directory().'/functions/gutenberg-cleanup.php'); 

// Edit Core Blocks
require_once(get_template_directory().'/functions/core-block-edit.php'); 

// Remove admin bar for all users on frontend
add_filter('show_admin_bar', '__return_false');