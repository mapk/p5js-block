/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: p5.js\n */\n\n//  Import CSS.\n\n\n\nvar _wp$components = wp.components,\n    Disabled = _wp$components.Disabled,\n    SandBox = _wp$components.SandBox,\n    SVG = _wp$components.SVG,\n    Path = _wp$components.Path;\nvar _wp$editor = wp.editor,\n    BlockControls = _wp$editor.BlockControls,\n    PlainText = _wp$editor.PlainText;\nvar withState = wp.compose.withState;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-p5js', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('p5js'), // Block title.\n\tdescription: __('Add custom p5.js code and preview it as you edit.'),\n\ticon: wp.element.createElement(\n\t\tSVG,\n\t\t{ viewBox: '0 0 125 114', xmlns: 'http://www.w3.org/2000/svg' },\n\t\twp.element.createElement(Path, { d: 'M75.9,40.4l38.8-11.7l7.6,23.4L83.6,65.3l24,34L87.4,114L62.2,80.6l-24.6,32.5l-19.6-15l24-32.8L3,51.3l7.6-23.5l39.1,12.6V0h26.2L75.9,40.4L75.9,40.4z', fill: '#ED225D' })\n\t),\n\tcategory: 'formatting', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('p5js'), __('Processing'), __('generative art')],\n\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'html',\n\t\t\tselector: 'script'\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: withState({\n\t\tisPreview: false\n\t})(function (_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    setState = _ref.setState,\n\t\t    isPreview = _ref.isPreview;\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'wp-block-p5js' },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'components-toolbar' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'components-tab-button ' + (!isPreview ? 'is-active' : ''),\n\t\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\t\treturn setState({ isPreview: false });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'p5.js'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'components-tab-button ' + (isPreview ? 'is-active' : ''),\n\t\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\t\treturn setState({ isPreview: true });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t__('Preview')\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tDisabled.Consumer,\n\t\t\t\tnull,\n\t\t\t\tfunction (isDisabled) {\n\t\t\t\t\treturn isPreview || isDisabled ? wp.element.createElement(SandBox, { html: '<script src=\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js\"></script>' + '<script>' + attributes.content + '</script>' }) : wp.element.createElement(PlainText, {\n\t\t\t\t\t\tvalue: attributes.content,\n\t\t\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\t\t\treturn setAttributes({ content: content });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tplaceholder: __('Write p5.js'),\n\t\t\t\t\t\t'aria-label': __('p5.js')\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t)\n\t\t);\n\t}),\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHA1LmpzXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIERpc2FibGVkID0gX3dwJGNvbXBvbmVudHMuRGlzYWJsZWQsXG4gICAgU2FuZEJveCA9IF93cCRjb21wb25lbnRzLlNhbmRCb3gsXG4gICAgU1ZHID0gX3dwJGNvbXBvbmVudHMuU1ZHLFxuICAgIFBhdGggPSBfd3AkY29tcG9uZW50cy5QYXRoO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRlZGl0b3IuQmxvY2tDb250cm9scyxcbiAgICBQbGFpblRleHQgPSBfd3AkZWRpdG9yLlBsYWluVGV4dDtcbnZhciB3aXRoU3RhdGUgPSB3cC5jb21wb3NlLndpdGhTdGF0ZTtcbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stcDVqcycsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygncDVqcycpLCAvLyBCbG9jayB0aXRsZS5cblx0ZGVzY3JpcHRpb246IF9fKCdBZGQgY3VzdG9tIHA1LmpzIGNvZGUgYW5kIHByZXZpZXcgaXQgYXMgeW91IGVkaXQuJyksXG5cdGljb246IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRTVkcsXG5cdFx0eyB2aWV3Qm94OiAnMCAwIDEyNSAxMTQnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQYXRoLCB7IGQ6ICdNNzUuOSw0MC40bDM4LjgtMTEuN2w3LjYsMjMuNEw4My42LDY1LjNsMjQsMzRMODcuNCwxMTRMNjIuMiw4MC42bC0yNC42LDMyLjVsLTE5LjYtMTVsMjQtMzIuOEwzLDUxLjNsNy42LTIzLjVsMzkuMSwxMi42VjBoMjYuMkw3NS45LDQwLjRMNzUuOSw0MC40eicsIGZpbGw6ICcjRUQyMjVEJyB9KVxuXHQpLFxuXHRjYXRlZ29yeTogJ2Zvcm1hdHRpbmcnLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygncDVqcycpLCBfXygnUHJvY2Vzc2luZycpLCBfXygnZ2VuZXJhdGl2ZSBhcnQnKV0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdGNvbnRlbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnaHRtbCcsXG5cdFx0XHRzZWxlY3RvcjogJ3NjcmlwdCdcblx0XHR9XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdGVkaXQ6IHdpdGhTdGF0ZSh7XG5cdFx0aXNQcmV2aWV3OiBmYWxzZVxuXHR9KShmdW5jdGlvbiAoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRTdGF0ZSA9IF9yZWYuc2V0U3RhdGUsXG5cdFx0ICAgIGlzUHJldmlldyA9IF9yZWYuaXNQcmV2aWV3O1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnd3AtYmxvY2stcDVqcycgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmxvY2tDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY29tcG9uZW50cy10b29sYmFyJyB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdidXR0b24nLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdjb21wb25lbnRzLXRhYi1idXR0b24gJyArICghaXNQcmV2aWV3ID8gJ2lzLWFjdGl2ZScgOiAnJyksXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXRlKHsgaXNQcmV2aWV3OiBmYWxzZSB9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHQncDUuanMnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnYnV0dG9uJyxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnY29tcG9uZW50cy10YWItYnV0dG9uICcgKyAoaXNQcmV2aWV3ID8gJ2lzLWFjdGl2ZScgOiAnJyksXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXRlKHsgaXNQcmV2aWV3OiB0cnVlIH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcdF9fKCdQcmV2aWV3Jylcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdERpc2FibGVkLkNvbnN1bWVyLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybiBpc1ByZXZpZXcgfHwgaXNEaXNhYmxlZCA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTYW5kQm94LCB7IGh0bWw6ICc8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3A1LmpzLzAuNy4yL3A1LmpzXCI+PC9zY3JpcHQ+JyArICc8c2NyaXB0PicgKyBhdHRyaWJ1dGVzLmNvbnRlbnQgKyAnPC9zY3JpcHQ+JyB9KSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQbGFpblRleHQsIHtcblx0XHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdXcml0ZSBwNS5qcycpLFxuXHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiBfXygncDUuanMnKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0fSksXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);