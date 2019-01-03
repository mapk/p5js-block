# p5.js Block

[p5.js](http://p5js.org/) + [WordPress](https://wordpress.org/). Want to share some generative art on your own WordPress site? This is the plugin to make it happen. Add your custom p5.js code, and preview it in the Gutenberg editor before publishing it on your page or post.

---

### To Install
1. Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the ‘Plugins’ screen in WordPress.

---

### To Contribute
```
cd /wp-content/plugins/p5js/
npm install
npm run
```

---

### To Remember
* Currently, this plugin does not work with `createCanvas(windowWidth, windowHeight)`. You'll need to use actual integer values like, `createCanvas(700, 400)`.
* Currently, this plugin does not include the `p5.dom.js` or the `p5.sound.js` libraries.

---
This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).
