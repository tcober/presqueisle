<?php

	// add_action('rest_api_init', function() {
	// 	// Surface all Gutenberg blocks in the WordPress REST API
	// 	$post_types = get_post_types_by_support( [ 'editor' ] );
	// 	foreach ( $post_types as $post_type ) {
	// 		if ( gutenberg_can_edit_post_type( $post_type ) ) {
	// 			register_rest_field( $post_type, 'blocks', [
	// 				'get_callback' => function ( array $post ) {
	// 					return gutenberg_parse_blocks( $post['content']['raw'] );
	// 				}
	// 			] );
	// 		}
	// 	}
	// });

?>