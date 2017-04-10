# Gulp + Shopify
Version: 1.0.0

## Author
Jase Warner ( <a href="http://jase.io">http://jase.io</a>)

## Synopsis
Gulp + Shopify is for those Developers wishing to use <a href="http://gulpjs.com/">Gulp.js</a> and Shopify's <a href="https://shopify.github.io/themekit/">Theme Kit</a> to develop their Shopify theme – a tidy solution to the problem with Shopify not allowing sub-directories within the <code>/assets</code> directory.

The theme is packaged with Gulp for watching and compiling assets in the <code>/dev</code> directory, including SCSS, JS, images and fonts. When modified, said assets are moved across to the <code>/assets</code> directory. 

A selection of helpful mixins is also included, all of which are featured in <a href="http://zerosixthree.se/8-sass-mixins-you-must-have-in-your-toolbox/">this useful article</a> by <a href="https://twitter.com/seb_ekstrom">@seb_ekstrom</a>.

The default theme files have been brought across from Shopify's <a href="https://github.com/Shopify/skeleton-theme">Skeleton theme</a>.

## Installation

### Gulp.js

Clone the repo into your project root.

In Terminal, <code>cd</code> into the <code>/dev</code> directory and install the Gulp packages (if you haven't already installed Gulp, you’ll need to <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md">do so</a> first):

<code>sudo npm install</code>

Once you have installed the packages, in Terminal, run <code>gulp watch</code>.

Any changes to the SCSS files in <code>/dev/sass/</code> will lead to the creation of <code>theme.scss.liquid</code> in <code>assets</code>.

Any alterations to the JS files in <code>/dev/js/functions/</code> will be concatenated and uglified in <code>/assets</code> to <code>theme.js</code> and <code>theme.min.js</code>.

Images added to <code>/dev/image</code> will be copied across to the <code>/assets</code> directory. Similarly, any fonts added to <code>/dev/font</code> will be copied across to <code>/assets</code>.

### Theme Kit

To get Theme Kit up and running, follow the instructions <a href="https://shopify.github.io/themekit/#installation">here</a>.

The <code>config.yml</code> file is included in the repo, ready to be filled in with the necessary details.

To get started on your theme, follow <a href="https://shopify.github.io/themekit/#use-a-new-theme">these instructions</a>.

## Features
The Gulp build features the following helpful packages:
<ul>
  <li><a href="https://github.com/sindresorhus/gulp-autoprefixer">gulp-autoprefixer</a></li>
  <li><a href="https://github.com/scniro/gulp-clean-css">gulp-clean-css</a></li>
  <li><a href="https://github.com/contra/gulp-concat">gulp-concat</a></li>
  <li><a href="https://github.com/lazd/gulp-csslint">gulp-csslint</a></li>
  <li><a href="https://github.com/hparra/gulp-rename">gulp-rename</a></li>
  <li><a href="https://github.com/dlmanning/gulp-sass">gulp-sass</a></li>
  <li><a href="https://github.com/terinjokes/gulp-uglify">gulp-uglify</a></li>
</ul>

## Credits
<ul>
  <li><a href="https://github.com/Shopify/skeleton-theme">Shopify Skeleton Theme</a></li>
  <li><a href="http://gulpjs.com/">Gulp.js</a></li>
  <li><a href="https://shopify.github.io/themekit/">Theme Kit</a></li>
  <li><a href="http://sass-lang.com/">SASS / SCSS</a></li>
</ul>
