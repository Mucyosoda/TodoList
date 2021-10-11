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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgba(128, 128, 128, 0.233);\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.input-line {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  width: 101.3%;\\r\\n  background-color: rgba(247, 241, 241);\\r\\n  height: 3rem;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n.fa-level-down-alt {\\r\\n  color: rgba(0, 0, 0, 0.185);\\r\\n  transform: rotate(90deg);\\r\\n}\\r\\n\\r\\n#header {\\r\\n  color: rgba(0, 0, 0, 0.589);\\r\\n  padding: 5px;\\r\\n  padding-right: 10px;\\r\\n  font-family: 'poppins', sans-serif;\\r\\n  font-size: 0.7rem;\\r\\n  margin-left: 30px;\\r\\n  margin-right: 20px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  background-color: rgba(247, 241, 241);\\r\\n}\\r\\n\\r\\n.items-container {\\r\\n  width: 100%;\\r\\n  overflow: auto;\\r\\n  position: relative;\\r\\n  padding: 30px;\\r\\n}\\r\\n\\r\\n.items-container::-webkit-scrollbar {\\r\\n  width: 5px;\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n.items-container::-webkit-scrollbar-thumb {\\r\\n  background-color: #888;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.items-container::-webkit-scrollbar-track {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 90%;\\r\\n  position: relative;\\r\\n  margin: 0 auto;\\r\\n  background-color: #fff;\\r\\n  border-radius: 5px;\\r\\n  padding: 30px;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  width: 90%;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 4px;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\ninput[type='text'] {\\r\\n  border: none;\\r\\n  box-sizing: border-box;\\r\\n  background-color: rgba(247, 241, 241);\\r\\n  outline: none;\\r\\n  height: 90%;\\r\\n  width: 100%;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\ninput[type='checkbox'] {\\r\\n  margin: 15px;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.mc {\\r\\n  width: 101.3%;\\r\\n  height: 3rem;\\r\\n  display: flex;\\r\\n  font-family: 'poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.mc input[type='text'] {\\r\\n  padding-left: 30px;\\r\\n  font-size: 15px;\\r\\n  color: rgba(0, 0, 0, 0.568);\\r\\n}\\r\\n\\r\\n.span {\\r\\n  background-color: rgba(247, 241, 241);\\r\\n  height: 2.7rem;\\r\\n  font-size: 22px;\\r\\n  width: 3rem;\\r\\n  text-align: center;\\r\\n  padding-top: 8px;\\r\\n}\\r\\n\\r\\n.fa-trash-alt:hover {\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  background-color: rgb(206, 202, 202);\\r\\n  text-align: center;\\r\\n  min-height: 10vh;\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  font-size: 24px;\\r\\n  width: 96%;\\r\\n  margin-left: 30px;\\r\\n}\\r\\n\\r\\n.textdelete {\\r\\n  font-size: 20px;\\r\\n  color: rgb(49, 48, 48);\\r\\n  font-family: 'poppins', sans-serif;\\r\\n  border: none;\\r\\n  background-color: rgb(206, 202, 202);\\r\\n}\\r\\n\\r\\n.textdelete:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.refresh {\\r\\n  animation: rotate 0.5s linear infinite;\\r\\n}\\r\\n\\r\\n.dotbtn {\\r\\n  float: right;\\r\\n  padding: 10px;\\r\\n  font-size: 18px;\\r\\n  cursor: crosshair;\\r\\n  color: rgba(0, 0, 0, 0.322);\\r\\n}\\r\\n\\r\\n.dltbtn {\\r\\n  float: right;\\r\\n  color: rgba(0, 0, 0, 0.322);\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n  padding: 10px;\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n  line-height: 0;\\r\\n  cursor: default;\\r\\n  transition: all 0.1s ease-in-out;\\r\\n  -webkit-transition: all 0.1s ease-in-out;\\r\\n  -moz-transition: all 0.1s ease-in-out;\\r\\n}\\r\\n\\r\\ninput[type='checkbox']:checked ~ .dltbtn {\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\ninput[type='checkbox']:checked ~ .dotbtn {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\ninput[type='checkbox']:checked ~ input {\\r\\n  text-decoration: line-through;\\r\\n  opacity: 0.5;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.iconss {\\r\\n  padding-top: 5px;\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n  color: rgba(136, 136, 136, 0.301);\\r\\n}\\r\\n\\r\\ninput [type='checkbox']:checked {\\r\\n  background-color: #fff;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/check.js":
/*!**********************!*\
  !*** ./src/check.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskCompleted = (e, items) => {\r\n  const complete = e.target;\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n\r\n  complete.parentElement.classList.add('completed');\r\n  for (let i = 0; i < items.length; i += 1) {\r\n    if (complete.parentNode.id === items[i].id.toString()) {\r\n      items[i].completed = complete.checked;\r\n    }\r\n  }\r\n  localStorage.setItem('items', JSON.stringify(items));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCompleted);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/check.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _check_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.js */ \"./src/check.js\");\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update.js */ \"./src/update.js\");\n\r\n\r\n\r\n\r\nconst itemsContainer = document.querySelector('.items-container');\r\nconst input = document.createElement('input');\r\nconst inputCont = document.querySelector('.input');\r\ninputCont.className = 'mc';\r\nconst span = document.createElement('span');\r\nspan.className = 'span';\r\nconst deleteCont = document.querySelector('.delete');\r\nconst deleteText = document.createElement('button');\r\nconst icon = document.createElement('i');\r\nconst enter = document.createElement('i');\r\n\r\ninput.type = 'text';\r\ninput.autofocus = true;\r\ninput.setAttribute('placeholder', 'Add to your list ......');\r\nenter.classList.add('fas', 'fa-level-down-alt', 'rotate');\r\nspan.appendChild(enter);\r\ninputCont.appendChild(input);\r\ninputCont.appendChild(span);\r\ndeleteText.classList.add('textdelete');\r\ndeleteText.textContent = 'Clear all completed';\r\ndeleteCont.appendChild(deleteText);\r\n\r\nlet items = [];\r\nlet indexCont = 0;\r\n\r\nif (localStorage.getItem('items')) {\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n  items.forEach((item) => {\r\n    const div = document.createElement('div');\r\n    div.classList.add('input-line');\r\n    div.id = `${(indexCont += 1)}`;\r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.classList.add('input-container');\r\n\r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = 'checkbox';\r\n    checkbox.checked = item.completed;\r\n    checkbox.addEventListener('change', (e) => (0,_check_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, items, deleteCont));\r\n\r\n    const p = document.createElement('input');\r\n    p.type = 'text';\r\n    p.setAttribute('readonly', 'readonly');\r\n    p.value = item.description;\r\n    p.addEventListener('click', (e) => (0,_update_js__WEBPACK_IMPORTED_MODULE_2__.editContent)(e, p, items));\r\n\r\n    const dotBtn = document.createElement('i');\r\n    dotBtn.classList.add('fas', 'fa-ellipsis-v', 'flex-end');\r\n    const deleteBtn = document.createElement('i');\r\n    deleteBtn.classList.add('fas', 'fa-trash-alt', 'flex-end');\r\n\r\n    const dotbtn = document.createElement('span');\r\n    dotbtn.className = 'dotbtn';\r\n    const dltbtn = document.createElement('span');\r\n    dltbtn.className = 'dltbtn';\r\n\r\n    deleteBtn.addEventListener('click', (e) => (0,_update_js__WEBPACK_IMPORTED_MODULE_2__.removeOne)(e, items));\r\n    dltbtn.appendChild(deleteBtn);\r\n    dotbtn.appendChild(dotBtn);\r\n    div.appendChild(checkbox);\r\n    div.appendChild(p);\r\n    div.appendChild(dltbtn);\r\n    div.appendChild(dotbtn);\r\n\r\n    itemsContainer.appendChild(div);\r\n    if (item.completed) {\r\n      div.classList.add('completed');\r\n    }\r\n  });\r\n} else {\r\n  localStorage.setItem('items', JSON.stringify(items));\r\n}\r\nclass Item {\r\n  constructor() {\r\n    this.description = '';\r\n    this.completed = false;\r\n    this.id = '';\r\n  }\r\n}\r\ninput.addEventListener('keydown', (e) => (0,_update_js__WEBPACK_IMPORTED_MODULE_2__.addTask)(e, items, input, itemsContainer, Item));\r\n\r\ndeleteText.addEventListener('click', (e) => (0,_update_js__WEBPACK_IMPORTED_MODULE_2__.removeTasks)(e, items, deleteCont, Item));\r\nconst refreshPage = () => {\r\n  icon.classList.add('refresh');\r\n  setTimeout(() => {\r\n    window.location.reload();\r\n  }, 500);\r\n};\r\n\r\nconst refresh = document.querySelector('.fa-sync');\r\nrefresh.addEventListener('click', refreshPage);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"removeTasks\": () => (/* binding */ removeTasks),\n/* harmony export */   \"editContent\": () => (/* binding */ editContent),\n/* harmony export */   \"removeOne\": () => (/* binding */ removeOne)\n/* harmony export */ });\n/* harmony import */ var _check_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check.js */ \"./src/check.js\");\n\r\n\r\nconst addTask = (e, items, input, itemsContainer, Item) => {\r\n  if (!input.value) {\r\n    return;\r\n  }\r\n\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n  if (e.keyCode === 13) {\r\n    const newItem = new Item();\r\n    const div = document.createElement('div');\r\n    const checkbox = document.createElement('input');\r\n    const p = document.createElement('input');\r\n    const icon = document.createElement('i');\r\n    div.classList.add('task');\r\n\r\n    newItem.description = input.value;\r\n    newItem.id = items.length + 1;\r\n    newItem.completed = false;\r\n\r\n    checkbox.type = 'checkbox';\r\n    checkbox.classList.add('checkbox');\r\n    checkbox.addEventListener('change', _check_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n    p.value = input.value;\r\n    p.type = 'text';\r\n    p.setAttribute('readonly', 'readonly');\r\n\r\n    icon.classList.add('fas', 'fa-ellipsis-v', 'flex-end');\r\n\r\n    div.appendChild(checkbox);\r\n    div.appendChild(p);\r\n    div.appendChild(icon);\r\n\r\n    itemsContainer.appendChild(div);\r\n\r\n    input.value = '';\r\n    items.push(newItem);\r\n    localStorage.setItem('items', JSON.stringify(items));\r\n    window.location.reload();\r\n  }\r\n};\r\n\r\nconst removeTasks = (e, items) => {\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n  const checkBoxes = document.querySelectorAll('input[type=\"checkbox\"]');\r\n  checkBoxes.forEach((checkbox) => {\r\n    if (checkbox.checked) {\r\n      const { id: currentId } = checkbox.parentElement;\r\n      items = items.filter((item) => item.id.toString() !== currentId);\r\n      checkbox.parentElement.remove();\r\n    }\r\n  });\r\n\r\n  items.forEach((item, idx) => {\r\n    item.id = idx + 1;\r\n  });\r\n  document.querySelectorAll('input[type=\"checkbox\"]').forEach((elem, idx) => {\r\n    elem.parentElement.parentElement.id = idx + 1;\r\n  });\r\n\r\n  localStorage.setItem('items', JSON.stringify(items));\r\n  window.location.reload();\r\n};\r\n\r\nconst editContent = (e, p, items) => {\r\n  const edit = e.target;\r\n  edit.removeAttribute('readonly');\r\n  edit.addEventListener('keydown', (e) => {\r\n    if (e.keyCode === 13) {\r\n      edit.setAttribute('readonly', 'readonly');\r\n      edit.value = p.value;\r\n      items.forEach((item) => {\r\n        if (item.id.toString() === edit.parentElement.id) {\r\n          item.description = edit.value;\r\n        }\r\n      });\r\n      localStorage.setItem('items', JSON.stringify(items));\r\n    }\r\n  });\r\n};\r\n\r\nconst removeOne = (e, items) => {\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n  const remove = e.target;\r\n  items.forEach((item) => {\r\n    if (item.id.toString() === remove.parentElement.parentElement.id) {\r\n      const index = items.indexOf(item);\r\n      items.splice(index, 1);\r\n      let i = 0;\r\n      while (i < items.length) {\r\n        if (items[i].id > item.id) {\r\n          items[i].id -= 1;\r\n        }\r\n        i += 1;\r\n      }\r\n    }\r\n    remove.parentElement.parentElement.remove();\r\n    localStorage.setItem('items', JSON.stringify(items));\r\n  });\r\n  window.location.reload();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/update.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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