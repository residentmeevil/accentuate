<?php
/**
 * Jetpack Compatibility File
 * See: https://jetpack.me/
 *
 * @package accentuate
 */

/**
 * Add theme support for Infinite Scroll.
 * See: https://jetpack.me/support/infinite-scroll/
 */
function accentuate_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'accentuate_infinite_scroll_render',
		'footer'    => 'page',
	) );
} // end function accentuate_jetpack_setup
add_action( 'after_setup_theme', 'accentuate_jetpack_setup' );

function accentuate_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
} // end function accentuate_infinite_scroll_render