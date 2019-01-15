# p5.js Block

[p5.js](http://p5js.org/) + [WordPress](https://wordpress.org/). Want to share some generative art on your own WordPress site? This is the plugin to make it happen. Add your custom p5.js code, and preview it in the Gutenberg editor before publishing it on your page or post.

[![See it in action](https://cldup.com/3fApRIemns.png)](https://cldup.com/oGNMoKeLhP.mp4)

# 

### To Install
1. Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the ‘Plugins’ screen in WordPress.

# 

### To Contribute
```
cd /wp-content/plugins/p5js/
npm install
npm run
```

# 

### To Remember
* Currently, this plugin does not work with `createCanvas(windowWidth, windowHeight)`. You'll need to use actual integer values like, `createCanvas(700, 400)`.
* Currently, this plugin does not include the `p5.dom.js` or the `p5.sound.js` libraries.
* Double-forward slash commenting (`//`) does not work due to the way it's escaped. Use `/* comment */` instead.
* Because this solution uses iframes, the height of the iframe is currently defined in the CSS, but I'm looking for a workaround for this.

# 
This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block) under the [MIT License](https://github.com/ahmadawais/create-guten-block/blob/master/LICENSE).
This project uses the p5.js library which is free software under the [GPL License](http://p5js.org/copyright.html).
