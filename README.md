# Gulp + Shopify

Version: 1.0.3

## Author

Jase Warner ( [https://jase.io](https://jase.io "Jase Warner’s website") )

## Synopsis

Gulp + Shopify is for those Developers wishing to use [Gulp.js](http://gulpjs.com/ "Gulp.js website") and Shopify’s [Theme Kit](https://shopify.github.io/themekit/ "Theme Kit Github page") to develop their Shopify theme &ndash; a tidy solution to the problem with Shopify not allowing sub-directories within the `/assets` directory.

The theme is packaged with Gulp for watching and compiling assets in the `/dev` directory, including SCSS, JS, images and fonts. When modified, said assets are moved across to the `/assets` directory. 

A selection of helpful mixins is also included, most of which are featured in [this useful article](http://zerosixthree.se/8-sass-mixins-you-must-have-in-your-toolbox/ "Mixins article") by [@seb_ekstrom](https://twitter.com/seb_ekstrom "@seb_ekstrom on Twitter").

You may also write your JavaScript in ES6 &ndash; The Gulp scripts task uses [Babel](https://babeljs.io/ "Babel website"), so you can use new syntax without worrying about browser support.

The default theme files have been brought across from Shopify’s [Skeleton theme](https://github.com/Shopify/skeleton-theme "Skeleton theme Github page").

## Installation

### Gulp.js

Clone the repo into your project root.

In Terminal `cd` into the `/dev` directory and install the Gulp packages (if you haven’t already installed Gulp, you’ll need to [do so](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md "Gulp installation") first):

`npm install`

Once you have installed the packages, in Terminal, run `gulp watch`.

Any changes to the SCSS files in `/dev/sass/` will lead to the creation of `theme.scss.liquid` in `assets`.

Any alterations to the JS files in `/dev/js/functions/` will be concatenated and uglified in `/assets` to `theme.js` and `theme.min.js`.

Images added to `/dev/image` will be copied across to the `/assets` directory. Similarly, any fonts added to `/dev/font` will be copied across to `/assets`.

### Theme Kit

To get Theme Kit up and running, follow the instructions [here](https://shopify.github.io/themekit/#installation "Theme Kit installation instructions").

The `config.yml` file is included in the repo, ready to be filled in with the necessary details.

To get started on your theme, follow [these instructions](https://shopify.github.io/themekit/#use-a-new-theme "Theme Kit usage instructions").

## Features

The Gulp build features the following helpful packages:

* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer "gulp-autoprefixer Github page")
* [gulp-babel](https://github.com/babel/gulp-babel "gulp-babel Github page")
* [gulp-clean-css](https://github.com/scniro/gulp-clean-css "gulp-clean-css Github page")
* [gulp-concat](https://github.com/contra/gulp-concat "gulp-concat Github page")
* [gulp-csslint](https://github.com/lazd/gulp-csslint "gulp-csslint Github page")
* [gulp-rename](https://github.com/hparra/gulp-rename "gulp-rename Github page")
* [gulp-sass](https://github.com/dlmanning/gulp-sass "gulp-sass Github page")
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify "gulp-uglify Github page")

## Credits

* [Shopify Skeleton Theme](https://github.com/Shopify/skeleton-theme "Shopify Skeleton Theme Github page")
* [Gulp.js](http://gulpjs.com/ "Gulp.js website")
* [Theme Kit](https://shopify.github.io/themekit/ "Shopify Theme Kit Github page")
* [SASS / SCSS](http://sass-lang.com/ "SASS website")
