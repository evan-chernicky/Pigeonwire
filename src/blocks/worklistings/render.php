<?php
$args = array(
    'posts_per_page' => -1,
    'post_type' => 'work',
    'orderby' => 'date', 
    'order' => 'ASC', //gets oldest to newest   
);

//If the isFeaturedListings attribute is true, we need to modify the query to only get the featured listings.
if ($attributes['isFeaturedListings']) {
    $args['meta_query'] = array(
        array(
            'key' => 'show_in_homepage_featured',
            'value' => '1',
            'compare' => '=',
        )
    );
}

$workItems = new WP_Query($args);
?>

<?php
if ($workItems->have_posts()):
    echo ('<ul class="work-listings">');
    while($workItems->have_posts()):
        $workItems->the_post();
    ?>
        <li>
            <a href="<?php the_permalink(); ?>" class="work-listings__item">
                <div class="work-listings__image-container">
                    <img class="work-listings__image" src="<?php the_post_thumbnail_url() ?>" alt="<?php the_post_thumbnail_alt() ?>" />
                    <div class="work-listings__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.944" height="19.968" viewBox="0 0 19.944 19.968">
                            <path id="Path_11" data-name="Path 11" d="M16.577,24.782a.98.98,0,0,0-.98-.98H9.214L25.549,7.477a.981.981,0,1,0-1.392-1.382L7.851,22.4V16.066a.98.98,0,1,0-1.961,0V24.89a.882.882,0,0,0,.882.882H15.6a.98.98,0,0,0,.98-.99Z" transform="translate(-5.89 -5.804)" fill="#fff"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <span class="work-listings__category"><?php the_field('category'); ?></span>
                    <h3 class="work-listings__client"><?php the_field('client'); ?></h3>
                </div>
            </a>
        </li>
<?php
    endwhile;
        echo ('</ul>');
endif;
?>