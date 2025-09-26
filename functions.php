<?php

// Allows for post formats.
require_once(get_template_directory().'/functions/post-formats.php'); 

// Register custom post types.
require_once(get_template_directory().'/functions/register-post-types.php'); 

// Enqueues styles and scripts.
require_once(get_template_directory().'/functions/enqueue.php'); 

// Register new blocks
require_once(get_template_directory().'/functions/register-blocks.php'); 

// Remove admin bar for all users on frontend
add_filter('show_admin_bar', '__return_false');
