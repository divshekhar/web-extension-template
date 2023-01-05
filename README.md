<div align="center">
<img src="./dist/assets/icons/icon128.png" alt="Web Extension Template" \>
</div>

# Web Extension Template

![build](https://github.com/divshekhar/web-extension-template/workflows/build/badge.svg)

Template for developing Chrome Web Extension using TypeScript.

## :sparkle: Template Includes

* TypeScript
* Webpack
* React
* Jest
* ES Lint
* Prettier
* Husky
* Example
  * Popup (Hello World)

## :open_file_folder: Project Structure

* **src/**:  TypeScript source files
* **src/assets**: Static files
  * **src/assets/images/**: Image files
* **dist**: Chrome Extension directory
* **dist/scripts**: Generated JavaScript files

## :hammer: Setup

```bash
npm install
```

## :shield: Build

```bash
npm run build
```

## :eye_speech_bubble: Watch mode

```bash
npm run watch
```

### :vs: Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## :computer: Load extension to chrome

Load `dist` directory

## :gear: Test

`npx jest` or `npm run test`
