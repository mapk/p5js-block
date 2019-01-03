<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function p5js_cgb_block_assets() { // phpcs:ignore
    // Scripts.
    wp_enqueue_script(
        'p5-js', // Handle.
        plugins_url( '/assets/js/p5.min.js', dirname( __FILE__ ) ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
        // filemtime( plugin_dir_path( __DIR__ ) . 'assets/js/p5.min.js' ), // Version: File modification time.
        true // Enqueue the script in the footer.
    );

    // Styles.
    wp_enqueue_style(
        'p5js-cgb-style-css', // Handle.
        plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
        array( 'wp-editor' ) // Dependency to include the CSS after it.
        // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
    );
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'p5js_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function p5js_cgb_editor_assets() { // phpcs:ignore
    // Scripts.
    wp_enqueue_script(
        'p5js-cgb-block-js', // Handle.
        plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
        // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
        true // Enqueue the script in the footer.
    );

    // Styles.
    wp_enqueue_style(
        'p5js-cgb-block-editor-css', // Handle.
        plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
        array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
        // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
    );
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'p5js_cgb_editor_assets' );

function p5js_cgb__render_block( $attributes, $content ) {
	var_dump($attributes);
    $scriptsAndStyles = [
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>',
        '<script>' . $attributes['content'] . '</script>',
        '<style>body{margin: 0; padding: 0;}</style>'
    ];
    return sprintf(
        '<div class="%s"><iframe src="data:text/html;charset=utf-8,%s"></iframe></div>',
        'wp-block-cgb-block-p5js',
        htmlspecialchars( implode( $scriptsAndStyles, '' ), ENT_QUOTES ) );
}

register_block_type( 'cgb/block-p5js', array(
    'render_callback' => 'p5js_cgb__render_block',
) );