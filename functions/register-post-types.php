<?php
// Register CPTs
function register_cpt() {

    $labels = array(
        'name'                  => _x( 'Work', 'Post type general name', 'work' ),
        'singular_name'         => _x( 'work', 'Post type singular name', 'work' ),
        'menu_name'             => _x( 'Work', 'Admin Menu text', 'work' ),
        'name_admin_bar'        => _x( 'Work', 'Add New on Toolbar', 'work' ),
        'add_new'               => __( 'Add New', 'work' ),
        'add_new_item'          => __( 'Add New Work', 'work' ),
        'new_item'              => __( 'New Work', 'work' ),
        'edit_item'             => __( 'Edit Work', 'work' ),
        'view_item'             => __( 'View Work', 'work' ),
        'all_items'             => __( 'All Work', 'work' ),
        'search_items'          => __( 'Search Work', 'work' ),
        'not_found'             => __( 'No Work found.', 'work' ),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,                       
        'has_archive'        => true,                      
        'rewrite'            => array( 'slug' => 'work' ),
        'show_in_rest'       => true,                        
        'menu_icon'          => 'dashicons-building',        // Dashicon for admin menu
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions' ),
        'hierarchical'       => false,                       // Set to true if behaves like pages
    );

    register_post_type( 'work', $args );
}
add_action( 'init', 'register_cpt' );