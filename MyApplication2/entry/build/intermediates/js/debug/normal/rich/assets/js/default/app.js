/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\app.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\app.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\app.js!d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\app.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {}
};
exports["default"] = _default;
;
(exports["default"] || module.exports).manifest = __webpack_require__(/*! !!./lib/manifest-plugin.js!../../../../build/intermediates/js/debug/jsManifest/default/manifest.json */ "./lib/manifest-plugin.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\build\\intermediates\\js\\debug\\jsManifest\\default\\manifest.json");

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}
}
/* generated by ace-loader */


/***/ }),

/***/ "./lib/manifest-plugin.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\build\\intermediates\\js\\debug\\jsManifest\\default\\manifest.json":
/*!*************************************************************************************************************************************************!*\
  !*** ./lib/manifest-plugin.js!d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\build\intermediates\js\debug\jsManifest\default\manifest.json ***!
  \*************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"appID":"com.xcl20481.myapplication","appName":"$string:xcl2048","versionName":"1.1.0","versionCode":1000000,"minPlatformVersion":6,"pages":["pages/page0/page0","pages/index/index"],"deviceType":["phone","tablet","tv","wearable"],"window":{"autoDesignWidth":true,"designWidth":720}}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************************************************!*\
  !*** d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\app.js?entry ***!
  \*******************************************************************************************/
var $app_script$ = __webpack_require__(/*! !!./lib/script.js!./node_modules/babel-loader?presets[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\app.js!./app.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\app.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\app.js")

      $app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$) {
      
      $app_script$($app_module$, $app_exports$, $app_require$)
      if ($app_exports$.__esModule && $app_exports$.default) {
        $app_module$.exports = $app_exports$.default
      }
      
      })
      $app_bootstrap$('@app-application/app',undefined,undefined)
})();

/******/ })()
;
//# sourceMappingURL=app.js.map