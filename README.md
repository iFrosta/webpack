# WAT - Web App Template
![WAT](data/logo.png)
**WAT** - made by [@ifrosta](https://github.com/iFrosta) for quick start of Web projects

## Quick start

Choose one of the following options:

- Download as zip
  [https://github.com/iFrosta/WebAppTemplate](https://github.com/iFrosta/WebAppTemplate/).
- Clone the git repo — `git clone
  https://github.com/iFrosta/WebAppTemplate.git` 
- Template ready to use

## Features:
* Main Web App Structure
* Gulp 
    * Sass
    * Autoprefixer
    * CSS minify
    * Js minify
    * ~~Live Reload~~
    * ~~Copy~~
    * ...
* Tests
* Include vendor scripts
* configured git
* ...

## Web App Structure
* data -  **Template files**
* dist -  **project ready**
    * config/
    * data/
    * engine/
    * public/
        * css/
            * normalize.css
        * fonts/
        * img/
        * js/
            * vendor
        * index. html / php / js
    * views/
* node_modules
* src -  **project development**
    * scss/
    * js/
* test
* [ other project files ]

## Versions: 
```
  "devDependencies": {
  "autoprefixer": "^9.6.4",
  "browser-sync": "^2.26.7",
  "cssnano": "^4.1.10",
  "gulp": "^4.0.2",
  "gulp-postcss": "^8.0.0",
  "gulp-sass": "^4.0.2",
  "gulp-sourcemaps": "^2.6.5"
  }
  "dependencies": {
    "gulp-concat": "^2.6.1",
    "gulp-replace": "^1.0.0",
    "gulp-uglify": "^3.0.2"
  }
```
**(package.json)**