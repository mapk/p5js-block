=== p5.js Block ===
Contributors: mapk
Tags: p5js, processing, generative art, visual data, javascript
Requires at least: 5.0
Tested up to: 5.0
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Run p5.js in your WordPress site with this Gutenberg block.


== Description ==

p5.js + WordPress. Want to share some generative art on your own WordPress site? This is the plugin to make it happen. Add your custom p5.js code, and preview it in the Gutenberg editor before publishing it on your page or post.

* Currently, this plugin does not work with `createCanvas(windowWidth, windowHeight)`. You'll need to use actual integer values like, `createCanvas(700, 400)`.
* Currently, this plugin does not include the `p5.dom.js` or the `p5.sound.js` libraries.

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block) under the [MIT License](https://github.com/ahmadawais/create-guten-block/blob/master/LICENSE).

This project also uses the p5.js library which is free software under the [GPL License](http://p5js.org/copyright.html).


== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the ‘Plugins’ screen in WordPress.


== Frequently Asked Questions ==

= Q: Does this plugin require the Gutenberg plugin? =

A: Yes, the Gutenberg plugin, or WordPress 5.0 must be installed and active in order to use this block.

= Q: Can I contribute to the project? =

A: Of course! This is the GitHub Repository: https://github.com/mapk/p5js-block


== Screenshots ==

1. Insert the p5.js block into the editor.
2. You can edit the code and preview the results from within the editor.

== Changelog ==

1.0 - Functional prototype. It works great using iframes.
