<?php
// Register CPTs
function register_cpt() {

    $labels = array(
        'name'                  => _x( 'Work', 'Post type general name', 'Work' ),
        'singular_name'         => _x( 'Work', 'Post type singular name', 'Work' ),
        'menu_name'             => _x( 'Work', 'Admin Menu text', 'Work' ),
        'name_admin_bar'        => _x( 'Work', 'Add New on Toolbar', 'Work' ),
        'add_new'               => __( 'Add New', 'Work' ),
        'add_new_item'          => __( 'Add New Work', 'Work' ),
        'new_item'              => __( 'New Work', 'Work' ),
        'edit_item'             => __( 'Edit Work', 'Work' ),
        'view_item'             => __( 'View Work', 'Work' ),
        'all_items'             => __( 'All Work', 'Work' ),
        'search_items'          => __( 'Search Work', 'Work' ),
        'not_found'             => __( 'No Work found.', 'Work' ),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,                       
        'has_archive'        => false,                      
        'rewrite'            => array( 'slug' => 'work' ),
        'show_in_rest'       => true,                        
        'menu_icon'          => 'dashicons-building',     
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions' ),
        'hierarchical'       => false,  
    );

    register_post_type( 'work', $args );
}
add_action( 'init', 'register_cpt',0 );