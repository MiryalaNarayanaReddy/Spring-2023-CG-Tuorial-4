/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cube.js":
/*!*********************!*\
  !*** ./src/cube.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCube\": () => (/* binding */ createCube),\n/* harmony export */   \"rotateCube\": () => (/* binding */ rotateCube)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createCube(a) {\n  const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(a, a, a);\n  const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({color: 0x44aa88});\n  const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\n  return cube;\n}\n\n\nfunction rotateCube(cube){\n    cube.rotation.x += 0.01;\n\t  cube.rotation.y += 0.01;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/cube.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cube */ \"./src/cube.js\");\n/* harmony import */ var _lighting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lighting */ \"./src/lighting.js\");\n\r\n\r\n\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); \r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer(); \r\nrenderer.setSize( window.innerWidth, window.innerHeight );\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\ncamera.position.z = 8;\r\n\r\nconst box = (0,_cube__WEBPACK_IMPORTED_MODULE_0__.createCube)(2);\r\nconst light = (0,_lighting__WEBPACK_IMPORTED_MODULE_1__.createLight)();\r\n\r\nscene.add( box );\r\nscene.add(light);\r\n\r\n\r\nfunction animate() {\r\n\trequestAnimationFrame( animate );\r\n\r\n\t// rotateCube(box);\r\n\t(0,_lighting__WEBPACK_IMPORTED_MODULE_1__.moveLight)(light);\r\n\r\n\trenderer.render( scene, camera );\r\n};\r\n\r\nanimate();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lighting.js":
/*!*************************!*\
  !*** ./src/lighting.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLight\": () => (/* binding */ createLight),\n/* harmony export */   \"moveLight\": () => (/* binding */ moveLight)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createLight() {\n  const color = 0xFFFFFF;\n  const intensity = 10;\n  const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(color, intensity);\n  light.position.set(-100, 0, 2);\n  return light;\n}\n\nfunction moveLight(light){\n    light.position.x += 1;\n    if(light.position.x > 0){\n        light.position.x = -100;\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/lighting.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;