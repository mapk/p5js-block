<?php
/**
 * Plugin Name: p5.js Block
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: Add custom p5.js code into this Gutenberg block and preview it as you edit.
 * Author: Mark Uraine
 * Author URI: https://markuraine.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
