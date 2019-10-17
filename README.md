# WAT - Web App Template
![WAT](data/logo.png)
**WAT** - made by [@ifrosta](https://github.com/iFrosta) for quick start of Web projects

## Quick start

Choose one of the following options:

- Download as zip
  [https://github.com/iFrosta/WebAppTemplate](https://github.com/iFrosta/WebAppTemplate/).
- Clone the git repo — `git clone
  https://github.com/iFrosta/WebAppTemplate.git` 
- Change directories and file paths in **gulpfile.js**
    ```javascript
    // Global Destination
    const dist = 'dist/public/'; // Tasks destination
    const dev = 'src/'; // Dev of project
    
    // File paths
    const files = {
        scssPath: dev + 'scss/**/*.scss', // Path to scss in dev
        jsPath: dev + 'js/**/*.js', // Path to js in dev
    }
    ```
- run gulp with ```gulp``` in Terminal:
  ```
  [00:00:00] Using gulpfile "path"\gulpfile.js
  [00:00:00] Starting 'default'...
  [00:00:00] Starting 'scssTask'...
  [00:00:00] Starting 'jsTask'...
  ```
- Check [Web App Structure](#WebAppStructure)

## Contents:
- [Introduction](#Introduction) <br>
- [Quick Start](#QuickStart) <br>
- [Features](#WebAppStructure) <br>
- [Web App Structure](#Features) <br>
- [Versions](#Versions) <br>
- [Versions](#Versions) <br>
- [Used Materials](#UsedMaterials) <br>
- [Made by](#MadeBy) <br>

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

## <a name="WebAppStructure">Web App Structure</a>
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
```json
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

## <a name="UsedMaterials">Used Materials and examples</a>
[Gulp Docs](https://gulpjs.com/docs/en/getting-started/quick-start) |
[html5-boilerplate](https://github.com/h5bp/html5-boilerplate) |

## <a name="MadeBy">Made by</a>
[@ifrosta](https://github.com/iFrosta)