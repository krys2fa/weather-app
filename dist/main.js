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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  height: 100%;\\n  font-family: 'Montserrat', sans-serif;\\n  background-color: #f3eded;\\n}\\n\\n.flex,\\n.flex-v {\\n  display: flex;\\n}\\n\\n.flex-v {\\n  flex-direction: column;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.justify-center {\\n  justify-content: center;\\n}\\n\\n.padding {\\n  padding: 0 15px;\\n}\\n\\n.extras {\\n  margin: 5px auto;\\n  font-weight: 700;\\n}\\n\\n.title {\\n  font-family: 'Montserrat', sans-serif;\\n}\\n\\ninput {\\n  border-radius: 5px;\\n  padding: 10px;\\n  font-family: 'Montserrat', sans-serif;\\n  font-weight: 700;\\n}\\n\\nform {\\n  justify-content: center;\\n  align-items: center;\\n  height: 40px;\\n  margin: 0 auto;\\n}\\n\\n.main {\\n  background-color: #fff;\\n  width: 600px;\\n  height: 500px;\\n  align-self: center;\\n  justify-self: center;\\n  margin: 50px auto;\\n  border-radius: 10px;\\n}\\n\\n.location {\\n  height: 100px;\\n  width: 260px;\\n  margin: 20px auto;\\n}\\n\\n.location span {\\n  margin: 20px;\\n  font-weight: 300;\\n  font-size: 25px;\\n}\\n\\n.temperature {\\n  height: 100px;\\n  width: 300px;\\n  margin: 20px auto;\\n}\\n\\n.toggle {\\n  margin: 20px auto;\\n  padding: 10px 30px;\\n}\\n\\n.temperatureImg,\\n.locationImg {\\n  width: 100px;\\n  height: 100px;\\n}\\n\\n.locationImg {\\n  width: 50px;\\n  height: 60px;\\n  margin: 10px;\\n}\\n\\n.temperatureTxt {\\n  font-size: 16px;\\n  margin: 10px 20px;\\n}\\n\\n.temperatureVal {\\n  margin: 10px auto;\\n  font-size: 30px;\\n  font-weight: 700;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/stylesheets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: createPageLayout, addFormListener, addBtnListener, getCity, updateWeatherDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPageLayout\", function() { return createPageLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFormListener\", function() { return addFormListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addBtnListener\", function() { return addBtnListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCity\", function() { return getCity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateWeatherDetails\", function() { return updateWeatherDetails; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/location.png */ \"./src/images/location.png\");\n/* harmony import */ var _images_rainy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/rainy.jpg */ \"./src/images/rainy.jpg\");\n/* harmony import */ var _images_cloudy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/cloudy.jpg */ \"./src/images/cloudy.jpg\");\n/* harmony import */ var _images_sunny_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/sunny.jpg */ \"./src/images/sunny.jpg\");\n/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stylesheets/style.css */ \"./src/stylesheets/style.css\");\n/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6__);\n// eslint-disable-next-line import/no-cycle\n\n\n\n\n\n\n\n\nconst addFormListener = () => {\n  const form = document.querySelector('form');\n  form.addEventListener('submit', _index__WEBPACK_IMPORTED_MODULE_0__[\"getWeatherDetails\"]);\n};\n\nconst addBtnListener = () => {\n  const btn = document.querySelector('.toggle');\n  btn.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__[\"getWeatherDetails\"]);\n};\n\nconst createPageLayout = () => {\n  const main = document.createElement('div');\n  const title = document.createElement('h1');\n  const location = document.createElement('div');\n  const locationImg = document.createElement('img');\n  const locationTxt = document.createElement('span');\n  const temperature = document.createElement('div');\n  const temperatureImg = document.createElement('img');\n  const temperatureTxt = document.createElement('span');\n  const temperatureVal = document.createElement('span');\n  const temperatureDiv = document.createElement('div');\n  const extras = document.createElement('div');\n  const pressure = document.createElement('div');\n  const humidity = document.createElement('div');\n  const wind = document.createElement('div');\n  const toggleBtn = Object(_form__WEBPACK_IMPORTED_MODULE_1__[\"button\"])('°C <-> °F');\n\n  title.innerHTML = 'Weather App';\n  title.classList.add('title', 'flex', 'justify-center');\n  main.classList.add('main', 'flex-v', 'justify-center');\n  location.classList.add('location', 'flex', 'hide');\n  temperature.classList.add('temperature', 'flex', 'hide');\n  locationImg.setAttribute('class', 'locationImg');\n  locationImg.src = _images_location_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  locationTxt.classList.add('locationTxt');\n  temperatureTxt.classList.add('temperatureTxt');\n  temperatureVal.classList.add('temperatureVal');\n  temperatureDiv.classList.add('flex-v');\n  temperatureImg.classList.add('temperatureImg');\n  toggleBtn.classList.remove('btn');\n  toggleBtn.classList.add('toggle', 'hide');\n  extras.classList.add('flex', 'extras');\n  pressure.classList.add('pressure', 'padding');\n  humidity.classList.add('humidity', 'padding');\n  wind.classList.add('wind', 'padding');\n\n  location.appendChild(locationImg);\n  location.appendChild(locationTxt);\n  temperature.appendChild(temperatureImg);\n  temperatureDiv.appendChild(temperatureVal);\n  temperatureDiv.appendChild(temperatureTxt);\n  temperature.appendChild(temperatureDiv);\n  extras.appendChild(pressure);\n  extras.appendChild(humidity);\n  extras.appendChild(wind);\n  main.appendChild(Object(_form__WEBPACK_IMPORTED_MODULE_1__[\"form\"])());\n  main.appendChild(location);\n  main.appendChild(temperature);\n  main.appendChild(toggleBtn);\n  main.appendChild(extras);\n\n\n  document.body.appendChild(title);\n  document.body.appendChild(main);\n};\n\nconst getCity = () => {\n  const city = document.querySelector('input[name=\"City\"]');\n  return city;\n};\n\nconst changeBackground = (icon) => {\n  const main = document.querySelector('.main');\n  switch (icon) {\n    case '01d':\n    case '04n':\n    case '01n':\n      main.setAttribute('style', `background-image: url(${_images_sunny_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]})`);\n      break;\n\n    case '09d':\n    case '09n':\n    case '10d':\n      main.setAttribute('style', `background-image: url(${_images_rainy_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]})`);\n      break;\n\n    default:\n      main.setAttribute('style', `background-image: url(${_images_cloudy_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]});`);\n  }\n};\n\nconst displayContent = (icon) => {\n  const location = document.querySelector('.location');\n  const temperature = document.querySelector('.temperature');\n  const toggle = document.querySelector('.toggle');\n  location.classList.remove('hide');\n  temperature.classList.remove('hide');\n  toggle.classList.remove('hide');\n  changeBackground(icon);\n};\n\nconst updateExtrasDiv = (pressure, humidity, wind) => {\n  const pressureSpan = document.querySelector('.pressure');\n  const humiditySpan = document.querySelector('.humidity');\n  const windSpan = document.querySelector('.wind');\n  pressureSpan.innerHTML = `Pressure: ${pressure} Pa`;\n  humiditySpan.innerHTML = `Humidity: ${humidity} kg/m3`;\n  windSpan.innerHTML = `Wind Speed: ${wind.speed} knots`;\n};\n\nconst updateTemperatureDiv = (iconUrl, description, temp, units) => {\n  const temperatureImg = document.querySelector('.temperatureImg');\n  const temperatureTxt = document.querySelector('.temperatureTxt');\n  const temperatureVal = document.querySelector('.temperatureVal');\n  temperatureImg.src = iconUrl;\n  temperatureTxt.innerHTML = description;\n  temperatureVal.innerHTML = `${Math.floor(temp)} ${Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"temperatureSymbol\"])(units)}`;\n};\n\nconst updateLocationDiv = (name, sys) => {\n  const locationTxt = document.querySelector('.locationTxt');\n  locationTxt.innerHTML = `${name}, ${sys.country}`;\n};\n\nconst updateWeatherDetails = (data, units) => {\n  const {\n    name, temp, icon, description, pressure, humidity, wind, sys,\n  } = data;\n\n  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;\n  updateTemperatureDiv(iconUrl, description, temp, units);\n  updateExtrasDiv(pressure, humidity, wind);\n  updateLocationDiv(name, sys);\n  displayContent(icon);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! exports provided: form, button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"button\", function() { return button; });\nconst inputField = (labelName, fieldType) => {\n  const input = document.createElement('input');\n  input.setAttribute('name', labelName);\n  input.setAttribute('type', fieldType);\n  input.setAttribute('placeholder', labelName);\n  input.required = true;\n  return input;\n};\n\nconst button = (value) => {\n  const btn = document.createElement('input');\n  btn.setAttribute('type', 'submit');\n  btn.setAttribute('value', value);\n  btn.classList.add('btn');\n  return btn;\n};\n\nconst form = () => {\n  const searchInput = inputField('City', 'text');\n  const formDiv = document.createElement('form');\n\n  formDiv.appendChild(searchInput);\n  formDiv.appendChild(button('Search'));\n\n  return formDiv;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/form.js?");

/***/ }),

/***/ "./src/images/cloudy.jpg":
/*!*******************************!*\
  !*** ./src/images/cloudy.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ba7c6f59a1aa4f64060e82e815e3881f.jpg\");\n\n//# sourceURL=webpack:///./src/images/cloudy.jpg?");

/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b6f66a3cd41e379fa1845cb21d5f4c93.png\");\n\n//# sourceURL=webpack:///./src/images/location.png?");

/***/ }),

/***/ "./src/images/rainy.jpg":
/*!******************************!*\
  !*** ./src/images/rainy.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"354c1c729abfca390c8cb42c54cd4c99.jpg\");\n\n//# sourceURL=webpack:///./src/images/rainy.jpg?");

/***/ }),

/***/ "./src/images/sunny.jpg":
/*!******************************!*\
  !*** ./src/images/sunny.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"17a07349a0304bfde5cd8f75dd7f684f.jpg\");\n\n//# sourceURL=webpack:///./src/images/sunny.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: getWeatherDetails, temperatureSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeatherDetails\", function() { return getWeatherDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"temperatureSymbol\", function() { return temperatureSymbol; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* eslint-disable no-alert */\n/* eslint-disable import/no-cycle */\n\n\nlet currentUnit = 'metric';\nconst baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';\nconst apiKey = 'adeafcceaf56c1e887e03f6075f5cc81';\n\nObject(_dom__WEBPACK_IMPORTED_MODULE_0__[\"createPageLayout\"])();\n\nconst temperatureSymbol = (units) => (units === 'metric' ? '°C' : '°F');\nconst toggleUnit = (currentUnit) => (currentUnit === 'metric' ? 'imperial' : 'metric');\nconst getPreferredUnits = (event, currentUnit) => (event.type === 'click' ? toggleUnit(currentUnit) : 'metric');\n\nconst processData = (data) => {\n  const { icon, description } = data.weather[0];\n  const { temp, humidity, pressure } = data.main;\n  const { name, wind, sys } = data;\n  const dataObject = {\n    name, temp, icon, description, pressure, humidity, wind, sys,\n  };\n  return dataObject;\n};\n\nconst getWeatherDetails = async (event) => {\n  event.preventDefault();\n  const units = getPreferredUnits(event, currentUnit);\n  const city = Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"getCity\"])().value;\n\n  try {\n    const response = await fetch(`${baseUrl}${city}&units=${units}&appid=${apiKey}`, {\n      mode: 'cors',\n    });\n    const data = await response.json();\n    console.log('getWeatherDetails -> data', data);\n    const result = processData(data);\n    currentUnit = units;\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"updateWeatherDetails\"])(result, units);\n  } catch (error) {\n    alert(error);\n  }\n};\n\nObject(_dom__WEBPACK_IMPORTED_MODULE_0__[\"addFormListener\"])();\nObject(_dom__WEBPACK_IMPORTED_MODULE_0__[\"addBtnListener\"])();\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/stylesheets/style.css?");

/***/ })

/******/ });