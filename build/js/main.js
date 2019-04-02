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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/icons sync recursive \\.svg$":
/*!*******************************!*\
  !*** ./src/icons sync \.svg$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./250x250.svg\": \"./src/icons/250x250.svg\",\n\t\"./apostrophes.svg\": \"./src/icons/apostrophes.svg\",\n\t\"./arrow.svg\": \"./src/icons/arrow.svg\",\n\t\"./line.svg\": \"./src/icons/line.svg\",\n\t\"./separator.svg\": \"./src/icons/separator.svg\",\n\t\"./ufo.svg\": \"./src/icons/ufo.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/icons sync recursive \\\\.svg$\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaWNvbnMgc3luYyByZWN1cnNpdmUgXFwuc3ZnJC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pY29ucyBzeW5jIFxcLnN2ZyQ/MTNmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vMjUweDI1MC5zdmdcIjogXCIuL3NyYy9pY29ucy8yNTB4MjUwLnN2Z1wiLFxuXHRcIi4vYXBvc3Ryb3BoZXMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvYXBvc3Ryb3BoZXMuc3ZnXCIsXG5cdFwiLi9hcnJvdy5zdmdcIjogXCIuL3NyYy9pY29ucy9hcnJvdy5zdmdcIixcblx0XCIuL2xpbmUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbGluZS5zdmdcIixcblx0XCIuL3NlcGFyYXRvci5zdmdcIjogXCIuL3NyYy9pY29ucy9zZXBhcmF0b3Iuc3ZnXCIsXG5cdFwiLi91Zm8uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvdWZvLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pY29ucyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLnN2ZyRcIjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/icons sync recursive \\.svg$\n");

/***/ }),

/***/ "./src/icons/250x250.svg":
/*!*******************************!*\
  !*** ./src/icons/250x250.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3Csvg width='250' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23dedede' stroke='%23555' stroke-width='2' d='M2 2H248V248H2z'/%3E%3Ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' alignment-baseline='middle' font-family='monospace, sans-serif' fill='%23555555'%3E250×250%3C/text%3E%3C/svg%3E\\\"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaWNvbnMvMjUweDI1MC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvMjUweDI1MC5zdmc/YmNlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzI1MCcgaGVpZ2h0PScyNTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGZpbGw9JyUyM2RlZGVkZScgc3Ryb2tlPSclMjM1NTUnIHN0cm9rZS13aWR0aD0nMicgZD0nTTIgMkgyNDhWMjQ4SDJ6Jy8lM0UlM0N0ZXh0IHg9JzUwJTI1JyB5PSc1MCUyNScgZm9udC1zaXplPScxOCcgdGV4dC1hbmNob3I9J21pZGRsZScgYWxpZ25tZW50LWJhc2VsaW5lPSdtaWRkbGUnIGZvbnQtZmFtaWx5PSdtb25vc3BhY2UsIHNhbnMtc2VyaWYnIGZpbGw9JyUyMzU1NTU1NSclM0UyNTDDlzI1MCUzQy90ZXh0JTNFJTNDL3N2ZyUzRVxcXCJcIiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/250x250.svg\n");

/***/ }),

/***/ "./src/icons/apostrophes.svg":
/*!***********************************!*\
  !*** ./src/icons/apostrophes.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3Csvg width='32' height='30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.63636 29.4545C5.09091 29.4545 3.18182 28.6667 1.90909 27.0909C0.636364 25.4545 0 23.3333 0 20.7273C0 17.6364 0.787879 14.3333 2.36364 10.8182C3.93939 7.24243 6.27273 3.63636 9.36364 0L12.7273 2.54546C11.4545 4.12121 10.1515 6.33333 8.81818 9.18182C7.54545 11.9697 6.87879 14.5455 6.81818 16.9091C7.42424 16.7273 8.06061 16.6364 8.72727 16.6364C10.4242 16.6364 11.8485 17.1212 13 18.0909C14.1515 19 14.7273 20.3939 14.7273 22.2727C14.7273 24.2727 14.0303 25.9697 12.6364 27.3636C11.303 28.7576 9.63636 29.4545 7.63636 29.4545ZM24.9091 29.4545C22.3636 29.4545 20.4545 28.6667 19.1818 27.0909C17.9091 25.4545 17.2727 23.3333 17.2727 20.7273C17.2727 17.6364 18.0606 14.3333 19.6364 10.8182C21.2121 7.24243 23.5455 3.63636 26.6364 0L30 2.54546C28.7273 4.12121 27.4242 6.33333 26.0909 9.18182C24.8182 11.9697 24.1515 14.5455 24.0909 16.9091C24.697 16.7273 25.3333 16.6364 26 16.6364C27.697 16.6364 29.1212 17.1212 30.2727 18.0909C31.4242 19 32 20.3939 32 22.2727C32 24.2727 31.303 25.9697 29.9091 27.3636C28.5758 28.7576 26.9091 29.4545 24.9091 29.4545Z' fill='%23BE8D7E'/%3E%3C/svg%3E\\\"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaWNvbnMvYXBvc3Ryb3BoZXMuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25zL2Fwb3N0cm9waGVzLnN2Zz85ZjQ2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMzInIGhlaWdodD0nMzAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J003LjYzNjM2IDI5LjQ1NDVDNS4wOTA5MSAyOS40NTQ1IDMuMTgxODIgMjguNjY2NyAxLjkwOTA5IDI3LjA5MDlDMC42MzYzNjQgMjUuNDU0NSAwIDIzLjMzMzMgMCAyMC43MjczQzAgMTcuNjM2NCAwLjc4Nzg3OSAxNC4zMzMzIDIuMzYzNjQgMTAuODE4MkMzLjkzOTM5IDcuMjQyNDMgNi4yNzI3MyAzLjYzNjM2IDkuMzYzNjQgMEwxMi43MjczIDIuNTQ1NDZDMTEuNDU0NSA0LjEyMTIxIDEwLjE1MTUgNi4zMzMzMyA4LjgxODE4IDkuMTgxODJDNy41NDU0NSAxMS45Njk3IDYuODc4NzkgMTQuNTQ1NSA2LjgxODE4IDE2LjkwOTFDNy40MjQyNCAxNi43MjczIDguMDYwNjEgMTYuNjM2NCA4LjcyNzI3IDE2LjYzNjRDMTAuNDI0MiAxNi42MzY0IDExLjg0ODUgMTcuMTIxMiAxMyAxOC4wOTA5QzE0LjE1MTUgMTkgMTQuNzI3MyAyMC4zOTM5IDE0LjcyNzMgMjIuMjcyN0MxNC43MjczIDI0LjI3MjcgMTQuMDMwMyAyNS45Njk3IDEyLjYzNjQgMjcuMzYzNkMxMS4zMDMgMjguNzU3NiA5LjYzNjM2IDI5LjQ1NDUgNy42MzYzNiAyOS40NTQ1Wk0yNC45MDkxIDI5LjQ1NDVDMjIuMzYzNiAyOS40NTQ1IDIwLjQ1NDUgMjguNjY2NyAxOS4xODE4IDI3LjA5MDlDMTcuOTA5MSAyNS40NTQ1IDE3LjI3MjcgMjMuMzMzMyAxNy4yNzI3IDIwLjcyNzNDMTcuMjcyNyAxNy42MzY0IDE4LjA2MDYgMTQuMzMzMyAxOS42MzY0IDEwLjgxODJDMjEuMjEyMSA3LjI0MjQzIDIzLjU0NTUgMy42MzYzNiAyNi42MzY0IDBMMzAgMi41NDU0NkMyOC43MjczIDQuMTIxMjEgMjcuNDI0MiA2LjMzMzMzIDI2LjA5MDkgOS4xODE4MkMyNC44MTgyIDExLjk2OTcgMjQuMTUxNSAxNC41NDU1IDI0LjA5MDkgMTYuOTA5MUMyNC42OTcgMTYuNzI3MyAyNS4zMzMzIDE2LjYzNjQgMjYgMTYuNjM2NEMyNy42OTcgMTYuNjM2NCAyOS4xMjEyIDE3LjEyMTIgMzAuMjcyNyAxOC4wOTA5QzMxLjQyNDIgMTkgMzIgMjAuMzkzOSAzMiAyMi4yNzI3QzMyIDI0LjI3MjcgMzEuMzAzIDI1Ljk2OTcgMjkuOTA5MSAyNy4zNjM2QzI4LjU3NTggMjguNzU3NiAyNi45MDkxIDI5LjQ1NDUgMjQuOTA5MSAyOS40NTQ1WicgZmlsbD0nJTIzQkU4RDdFJy8lM0UlM0Mvc3ZnJTNFXFxcIlwiIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/icons/apostrophes.svg\n");

/***/ }),

/***/ "./src/icons/arrow.svg":
/*!*****************************!*\
  !*** ./src/icons/arrow.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3Csvg width='10' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.70711 0.292893C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L2.41421 9L9.70711 16.2929C10.0976 16.6834 10.0976 17.3166 9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289L8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893Z' fill='%23D6D6D6'/%3E%3C/svg%3E\\\"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaWNvbnMvYXJyb3cuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25zL2Fycm93LnN2Zz9lNTQ5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNOS43MDcxMSAwLjI5Mjg5M0MxMC4wOTc2IDAuNjgzNDE3IDEwLjA5NzYgMS4zMTY1OCA5LjcwNzExIDEuNzA3MTFMMi40MTQyMSA5TDkuNzA3MTEgMTYuMjkyOUMxMC4wOTc2IDE2LjY4MzQgMTAuMDk3NiAxNy4zMTY2IDkuNzA3MTEgMTcuNzA3MUM5LjMxNjU4IDE4LjA5NzYgOC42ODM0MiAxOC4wOTc2IDguMjkyODkgMTcuNzA3MUwwLjI5Mjg5MyA5LjcwNzExQy0wLjA5NzYzMTEgOS4zMTY1OCAtMC4wOTc2MzExIDguNjgzNDIgMC4yOTI4OTMgOC4yOTI4OUw4LjI5Mjg5IDAuMjkyODkzQzguNjgzNDIgLTAuMDk3NjMxMSA5LjMxNjU4IC0wLjA5NzYzMTEgOS43MDcxMSAwLjI5Mjg5M1onIGZpbGw9JyUyM0Q2RDZENicvJTNFJTNDL3N2ZyUzRVxcXCJcIiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/arrow.svg\n");

/***/ }),

/***/ "./src/icons/line.svg":
/*!****************************!*\
  !*** ./src/icons/line.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3Csvg width='2' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 0C1.55228 0 2 0.447715 2 1V17C2 17.5523 1.55228 18 1 18C0.447715 18 0 17.5523 0 17V1C0 0.447715 0.447715 0 1 0Z' fill='%23D6D6D6'/%3E%3C/svg%3E\\\"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaWNvbnMvbGluZS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvbGluZS5zdmc/NzczNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzInIGhlaWdodD0nMTgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMSAwQzEuNTUyMjggMCAyIDAuNDQ3NzE1IDIgMVYxN0MyIDE3LjU1MjMgMS41NTIyOCAxOCAxIDE4QzAuNDQ3NzE1IDE4IDAgMTcuNTUyMyAwIDE3VjFDMCAwLjQ0NzcxNSAwLjQ0NzcxNSAwIDEgMFonIGZpbGw9JyUyM0Q2RDZENicvJTNFJTNDL3N2ZyUzRVxcXCJcIiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/line.svg\n");

/***/ }),

/***/ "./src/icons/separator.svg":
/*!*********************************!*\
  !*** ./src/icons/separator.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3Csvg width='69' height='1' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23D6D6D6' d='M0 0H69V1H0z'/%3E%3C/svg%3E\\\"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaWNvbnMvc2VwYXJhdG9yLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pY29ucy9zZXBhcmF0b3Iuc3ZnPzBjM2IiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc2OScgaGVpZ2h0PScxJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBmaWxsPSclMjNENkQ2RDYnIGQ9J00wIDBINjlWMUgweicvJTNFJTNDL3N2ZyUzRVxcXCJcIiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/separator.svg\n");

/***/ }),

/***/ "./src/icons/ufo.svg":
/*!***************************!*\
  !*** ./src/icons/ufo.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3Csvg width='280' height='280' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M241.817 254.546H38.1816L114.545 76.3636H165.454L241.817 254.546Z' fill='%23BE8D7E'/%3E%3Cpath d='M279.999 89.0901C279.999 60.9735 217.32 38.1818 140.001 38.1818C62.6793 38.1818 0 60.9735 0 89.0901C0 117.207 62.6793 140.001 140.001 140.001C217.32 140.001 279.999 117.207 279.999 89.0901Z' fill='%23D6DEFF'/%3E%3Cpath d='M279.999 89.0901C279.999 60.9735 217.32 38.1818 140.001 38.1818C62.6793 38.1818 0 60.9735 0 89.0901C0 117.207 62.6793 140.001 140.001 140.001C217.32 140.001 279.999 117.207 279.999 89.0901Z' fill='%23333333'/%3E%3Cpath d='M267.273 76.3636C267.273 55.2755 210.291 38.1818 140.001 38.1818C69.7103 38.1818 12.7266 55.2755 12.7266 76.3636C12.7266 97.4517 69.7103 114.545 140.001 114.545C210.291 114.545 267.273 97.4517 267.273 76.3636Z' fill='%23999999'/%3E%3Cpath d='M254.546 82.7281C254.546 65.1543 211.808 50.9083 159.091 50.9083C106.372 50.9083 63.6367 65.1543 63.6367 82.7281C63.6367 100.3 106.372 114.545 159.091 114.545C211.808 114.545 254.546 100.3 254.546 82.7281Z' fill='%23666666'/%3E%3Cpath d='M241.817 254.546C241.817 240.487 196.232 229.091 140.001 229.091C83.7672 229.091 38.1816 240.487 38.1816 254.546C38.1816 268.603 83.7672 279.999 140.001 279.999C196.232 279.999 241.817 268.603 241.817 254.546Z' fill='%23996152'/%3E%3Cpath d='M63.6367 76.3636C63.6367 34.1898 97.8242 0 140 0C182.174 0 216.364 34.1898 216.364 76.3636C216.364 76.3636 190.909 89.0901 140 89.0901C89.0897 89.0901 63.6367 76.3636 63.6367 76.3636Z' fill='%23999999'/%3E%3Cpath d='M138.865 18.4104C134.726 10.9041 120.482 10.8225 107.052 18.2287C93.6195 25.6324 86.0876 37.7204 90.2241 45.2267C94.3629 52.7307 108.607 52.8123 122.037 45.4085C135.469 38.0024 143.001 25.9167 138.865 18.4104Z' fill='%23D6D6D6'/%3E%3Cpath d='M111.891 15.3739C107.596 11.0835 99.6054 12.1182 94.0427 17.6857C88.48 23.2531 87.4522 31.2441 91.7472 35.5344C96.0399 39.8248 104.031 38.7901 109.594 33.2227C115.156 27.6552 116.184 19.6642 111.891 15.3739Z' fill='%23F0F0F0'/%3E%3Cpath d='M101.819 50.9083C101.819 57.9392 96.1207 63.6371 89.0898 63.6371 82.0612 63.6371 76.3633 57.9392 76.3633 50.9083 76.3633 43.8797 82.0612 38.1818 89.0898 38.1818 96.1207 38.1818 101.819 43.8797 101.819 50.9083zM152.727 63.6371C152.727 70.6657 147.029 76.3636 140 76.3636 132.969 76.3636 127.271 70.6657 127.271 63.6371 127.271 56.6062 132.969 50.9083 140 50.9083 147.029 50.9083 152.727 56.6062 152.727 63.6371zM203.635 50.9083C203.635 57.9392 197.937 63.6371 190.908 63.6371 183.88 63.6371 178.182 57.9392 178.182 50.9083 178.182 43.8797 183.88 38.1818 190.908 38.1818 197.937 38.1818 203.635 43.8797 203.635 50.9083z' fill='%23fff'/%3E%3Cpath d='M76.3565 267.28C72.0825 267.27 68.0952 265.117 65.7438 261.545C63.3923 257.974 62.9868 253.463 64.6671 249.531L102.849 160.439C105.617 153.976 113.1 150.979 119.563 153.75C126.025 156.521 129.017 164.009 126.242 170.469L88.06 259.561C86.0558 264.243 81.4509 267.28 76.3565 267.28Z' fill='%23fff' fill-opacity='.5'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0H280V280H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\\\"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaWNvbnMvdWZvLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pY29ucy91Zm8uc3ZnPzEzZDQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIlxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScyODAnIGhlaWdodD0nMjgwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBjbGlwLXBhdGg9J3VybCglMjNjbGlwMCknJTNFJTNDcGF0aCBkPSdNMjQxLjgxNyAyNTQuNTQ2SDM4LjE4MTZMMTE0LjU0NSA3Ni4zNjM2SDE2NS40NTRMMjQxLjgxNyAyNTQuNTQ2WicgZmlsbD0nJTIzQkU4RDdFJy8lM0UlM0NwYXRoIGQ9J00yNzkuOTk5IDg5LjA5MDFDMjc5Ljk5OSA2MC45NzM1IDIxNy4zMiAzOC4xODE4IDE0MC4wMDEgMzguMTgxOEM2Mi42NzkzIDM4LjE4MTggMCA2MC45NzM1IDAgODkuMDkwMUMwIDExNy4yMDcgNjIuNjc5MyAxNDAuMDAxIDE0MC4wMDEgMTQwLjAwMUMyMTcuMzIgMTQwLjAwMSAyNzkuOTk5IDExNy4yMDcgMjc5Ljk5OSA4OS4wOTAxWicgZmlsbD0nJTIzRDZERUZGJy8lM0UlM0NwYXRoIGQ9J00yNzkuOTk5IDg5LjA5MDFDMjc5Ljk5OSA2MC45NzM1IDIxNy4zMiAzOC4xODE4IDE0MC4wMDEgMzguMTgxOEM2Mi42NzkzIDM4LjE4MTggMCA2MC45NzM1IDAgODkuMDkwMUMwIDExNy4yMDcgNjIuNjc5MyAxNDAuMDAxIDE0MC4wMDEgMTQwLjAwMUMyMTcuMzIgMTQwLjAwMSAyNzkuOTk5IDExNy4yMDcgMjc5Ljk5OSA4OS4wOTAxWicgZmlsbD0nJTIzMzMzMzMzJy8lM0UlM0NwYXRoIGQ9J00yNjcuMjczIDc2LjM2MzZDMjY3LjI3MyA1NS4yNzU1IDIxMC4yOTEgMzguMTgxOCAxNDAuMDAxIDM4LjE4MThDNjkuNzEwMyAzOC4xODE4IDEyLjcyNjYgNTUuMjc1NSAxMi43MjY2IDc2LjM2MzZDMTIuNzI2NiA5Ny40NTE3IDY5LjcxMDMgMTE0LjU0NSAxNDAuMDAxIDExNC41NDVDMjEwLjI5MSAxMTQuNTQ1IDI2Ny4yNzMgOTcuNDUxNyAyNjcuMjczIDc2LjM2MzZaJyBmaWxsPSclMjM5OTk5OTknLyUzRSUzQ3BhdGggZD0nTTI1NC41NDYgODIuNzI4MUMyNTQuNTQ2IDY1LjE1NDMgMjExLjgwOCA1MC45MDgzIDE1OS4wOTEgNTAuOTA4M0MxMDYuMzcyIDUwLjkwODMgNjMuNjM2NyA2NS4xNTQzIDYzLjYzNjcgODIuNzI4MUM2My42MzY3IDEwMC4zIDEwNi4zNzIgMTE0LjU0NSAxNTkuMDkxIDExNC41NDVDMjExLjgwOCAxMTQuNTQ1IDI1NC41NDYgMTAwLjMgMjU0LjU0NiA4Mi43MjgxWicgZmlsbD0nJTIzNjY2NjY2Jy8lM0UlM0NwYXRoIGQ9J00yNDEuODE3IDI1NC41NDZDMjQxLjgxNyAyNDAuNDg3IDE5Ni4yMzIgMjI5LjA5MSAxNDAuMDAxIDIyOS4wOTFDODMuNzY3MiAyMjkuMDkxIDM4LjE4MTYgMjQwLjQ4NyAzOC4xODE2IDI1NC41NDZDMzguMTgxNiAyNjguNjAzIDgzLjc2NzIgMjc5Ljk5OSAxNDAuMDAxIDI3OS45OTlDMTk2LjIzMiAyNzkuOTk5IDI0MS44MTcgMjY4LjYwMyAyNDEuODE3IDI1NC41NDZaJyBmaWxsPSclMjM5OTYxNTInLyUzRSUzQ3BhdGggZD0nTTYzLjYzNjcgNzYuMzYzNkM2My42MzY3IDM0LjE4OTggOTcuODI0MiAwIDE0MCAwQzE4Mi4xNzQgMCAyMTYuMzY0IDM0LjE4OTggMjE2LjM2NCA3Ni4zNjM2QzIxNi4zNjQgNzYuMzYzNiAxOTAuOTA5IDg5LjA5MDEgMTQwIDg5LjA5MDFDODkuMDg5NyA4OS4wOTAxIDYzLjYzNjcgNzYuMzYzNiA2My42MzY3IDc2LjM2MzZaJyBmaWxsPSclMjM5OTk5OTknLyUzRSUzQ3BhdGggZD0nTTEzOC44NjUgMTguNDEwNEMxMzQuNzI2IDEwLjkwNDEgMTIwLjQ4MiAxMC44MjI1IDEwNy4wNTIgMTguMjI4N0M5My42MTk1IDI1LjYzMjQgODYuMDg3NiAzNy43MjA0IDkwLjIyNDEgNDUuMjI2N0M5NC4zNjI5IDUyLjczMDcgMTA4LjYwNyA1Mi44MTIzIDEyMi4wMzcgNDUuNDA4NUMxMzUuNDY5IDM4LjAwMjQgMTQzLjAwMSAyNS45MTY3IDEzOC44NjUgMTguNDEwNFonIGZpbGw9JyUyM0Q2RDZENicvJTNFJTNDcGF0aCBkPSdNMTExLjg5MSAxNS4zNzM5QzEwNy41OTYgMTEuMDgzNSA5OS42MDU0IDEyLjExODIgOTQuMDQyNyAxNy42ODU3Qzg4LjQ4IDIzLjI1MzEgODcuNDUyMiAzMS4yNDQxIDkxLjc0NzIgMzUuNTM0NEM5Ni4wMzk5IDM5LjgyNDggMTA0LjAzMSAzOC43OTAxIDEwOS41OTQgMzMuMjIyN0MxMTUuMTU2IDI3LjY1NTIgMTE2LjE4NCAxOS42NjQyIDExMS44OTEgMTUuMzczOVonIGZpbGw9JyUyM0YwRjBGMCcvJTNFJTNDcGF0aCBkPSdNMTAxLjgxOSA1MC45MDgzQzEwMS44MTkgNTcuOTM5MiA5Ni4xMjA3IDYzLjYzNzEgODkuMDg5OCA2My42MzcxIDgyLjA2MTIgNjMuNjM3MSA3Ni4zNjMzIDU3LjkzOTIgNzYuMzYzMyA1MC45MDgzIDc2LjM2MzMgNDMuODc5NyA4Mi4wNjEyIDM4LjE4MTggODkuMDg5OCAzOC4xODE4IDk2LjEyMDcgMzguMTgxOCAxMDEuODE5IDQzLjg3OTcgMTAxLjgxOSA1MC45MDgzek0xNTIuNzI3IDYzLjYzNzFDMTUyLjcyNyA3MC42NjU3IDE0Ny4wMjkgNzYuMzYzNiAxNDAgNzYuMzYzNiAxMzIuOTY5IDc2LjM2MzYgMTI3LjI3MSA3MC42NjU3IDEyNy4yNzEgNjMuNjM3MSAxMjcuMjcxIDU2LjYwNjIgMTMyLjk2OSA1MC45MDgzIDE0MCA1MC45MDgzIDE0Ny4wMjkgNTAuOTA4MyAxNTIuNzI3IDU2LjYwNjIgMTUyLjcyNyA2My42Mzcxek0yMDMuNjM1IDUwLjkwODNDMjAzLjYzNSA1Ny45MzkyIDE5Ny45MzcgNjMuNjM3MSAxOTAuOTA4IDYzLjYzNzEgMTgzLjg4IDYzLjYzNzEgMTc4LjE4MiA1Ny45MzkyIDE3OC4xODIgNTAuOTA4MyAxNzguMTgyIDQzLjg3OTcgMTgzLjg4IDM4LjE4MTggMTkwLjkwOCAzOC4xODE4IDE5Ny45MzcgMzguMTgxOCAyMDMuNjM1IDQzLjg3OTcgMjAzLjYzNSA1MC45MDgzeicgZmlsbD0nJTIzZmZmJy8lM0UlM0NwYXRoIGQ9J003Ni4zNTY1IDI2Ny4yOEM3Mi4wODI1IDI2Ny4yNyA2OC4wOTUyIDI2NS4xMTcgNjUuNzQzOCAyNjEuNTQ1QzYzLjM5MjMgMjU3Ljk3NCA2Mi45ODY4IDI1My40NjMgNjQuNjY3MSAyNDkuNTMxTDEwMi44NDkgMTYwLjQzOUMxMDUuNjE3IDE1My45NzYgMTEzLjEgMTUwLjk3OSAxMTkuNTYzIDE1My43NUMxMjYuMDI1IDE1Ni41MjEgMTI5LjAxNyAxNjQuMDA5IDEyNi4yNDIgMTcwLjQ2OUw4OC4wNiAyNTkuNTYxQzg2LjA1NTggMjY0LjI0MyA4MS40NTA5IDI2Ny4yOCA3Ni4zNTY1IDI2Ny4yOFonIGZpbGw9JyUyM2ZmZicgZmlsbC1vcGFjaXR5PScuNScvJTNFJTNDL2clM0UlM0NkZWZzJTNFJTNDY2xpcFBhdGggaWQ9J2NsaXAwJyUzRSUzQ3BhdGggZmlsbD0nJTIzZmZmJyBkPSdNMCAwSDI4MFYyODBIMHonLyUzRSUzQy9jbGlwUGF0aCUzRSUzQy9kZWZzJTNFJTNDL3N2ZyUzRVxcXCJcIiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/ufo.svg\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js */ \"./src/js/index.js\");\n\n\n\nfunction requireAll(r) {\n  r.keys().forEach(r);\n}\nrequireAll(__webpack_require__(\"./src/icons sync recursive \\\\.svg$\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0ICcuL2pzJztcclxuXHJcbmZ1bmN0aW9uIHJlcXVpcmVBbGwocikge1xyXG4gIHIua2V5cygpLmZvckVhY2gocik7XHJcbn1cclxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJ2ljb25zLycsIHRydWUsIC9cXC5zdmckLykpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Accordion {\n    constructor() {\n        this.block = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-wp-block-cloudblocks-accordion');\n        this.DURATION = 300;\n        this.toggling = false;\n    }\n\n    handleOpenElementClick(event) {\n        // prevent multiple clicks\n        if (this.toggling) return;\n        this.toggling = true;\n\n        const openTriggerElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);\n        const currentItem = openTriggerElement.parent();\n\n        if (this.collapseOnChange) {\n            const contents = this.block.find('.accordion__item-content');\n\n            // collapse all items other than current\n            contents.each((index, element) => {\n                const elementParent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parent();\n\n                if (!elementParent.is(currentItem)) {\n                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).slideUp(this.DURATION, () => {\n                        elementParent.removeClass('accordion__item--open');\n                        elementParent.find('.accordion__item-toggle-button').text('Open');\n                    });\n                }\n            });\n        }\n\n        const contentToOpen = jquery__WEBPACK_IMPORTED_MODULE_0___default()(openTriggerElement.siblings()[0]);\n\n        contentToOpen.slideToggle(this.DURATION, () => {\n            currentItem.toggleClass('accordion__item--open');\n            currentItem.find('.accordion__item-toggle-button').text(currentItem.hasClass('accordion__item--open') ? 'Close' : 'Open');\n            this.toggling = false;\n        });\n    }\n\n    init() {\n        try {\n            this.collapseOnChange = this.block.data('collapse-on-change');\n            this.openElement = this.block.find('.accordion__item-title-wrapper');\n\n            this.openElement.on('click', event => {\n                this.handleOpenElementClick(event);\n            });\n        } catch (e) {\n            console.error(e);\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9hY2NvcmRpb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzPzcwZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNsYXNzIEFjY29yZGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJsb2NrID0gJCgnLmpzLXdwLWJsb2NrLWNsb3VkYmxvY2tzLWFjY29yZGlvbicpO1xyXG4gICAgICAgIHRoaXMuRFVSQVRJT04gPSAzMDA7XHJcbiAgICAgICAgdGhpcy50b2dnbGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9wZW5FbGVtZW50Q2xpY2sgKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gcHJldmVudCBtdWx0aXBsZSBjbGlja3NcclxuICAgICAgICBpZiAodGhpcy50b2dnbGluZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudG9nZ2xpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBvcGVuVHJpZ2dlckVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gb3BlblRyaWdnZXJFbGVtZW50LnBhcmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZU9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gdGhpcy5ibG9jay5maW5kKCcuYWNjb3JkaW9uX19pdGVtLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbGxhcHNlIGFsbCBpdGVtcyBvdGhlciB0aGFuIGN1cnJlbnRcclxuICAgICAgICAgICAgY29udGVudHMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRQYXJlbnQgPSAkKGVsZW1lbnQpLnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudFBhcmVudC5pcyhjdXJyZW50SXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNsaWRlVXAodGhpcy5EVVJBVElPTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50UGFyZW50LnJlbW92ZUNsYXNzKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFBhcmVudC5maW5kKCcuYWNjb3JkaW9uX19pdGVtLXRvZ2dsZS1idXR0b24nKS50ZXh0KCdPcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudFRvT3BlbiA9ICQob3BlblRyaWdnZXJFbGVtZW50LnNpYmxpbmdzKClbMF0pO1xyXG5cclxuICAgICAgICBjb250ZW50VG9PcGVuLnNsaWRlVG9nZ2xlKHRoaXMuRFVSQVRJT04sICgpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudEl0ZW0udG9nZ2xlQ2xhc3MoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpO1xyXG4gICAgICAgICAgICBjdXJyZW50SXRlbS5maW5kKCcuYWNjb3JkaW9uX19pdGVtLXRvZ2dsZS1idXR0b24nKS50ZXh0KFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uaGFzQ2xhc3MoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpID9cclxuICAgICAgICAgICAgICAgICdDbG9zZScgOlxyXG4gICAgICAgICAgICAgICAgJ09wZW4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VPbkNoYW5nZSA9IHRoaXMuYmxvY2suZGF0YSgnY29sbGFwc2Utb24tY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkVsZW1lbnQgPSB0aGlzLmJsb2NrLmZpbmQoJy5hY2NvcmRpb25fX2l0ZW0tdGl0bGUtd3JhcHBlcicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcGVuRWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQpID0+IHsgdGhpcy5oYW5kbGVPcGVuRWxlbWVudENsaWNrKGV2ZW50KTsgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQUNBO0FBdURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/components/accordion.js\n");

/***/ }),

/***/ "./src/js/components/alignfull.js":
/*!****************************************!*\
  !*** ./src/js/components/alignfull.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AlignFull {\n    constructor() {}\n\n    calculation() {\n        var body = document.querySelector('body');\n\n        if (window.innerWidth > body.clientWidth + 5) {\n            body.classList.add('has-scrollbar');\n            body.setAttribute('style', '--scroll-bar: ' + (window.innerWidth - body.clientWidth) + 'px');\n        } else {\n            body.classList.remove('has-scrollbar');\n        }\n    }\n\n    init() {\n        this.calculation();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlignFull);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9hbGlnbmZ1bGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYWxpZ25mdWxsLmpzPzEzNWYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWxpZ25GdWxse1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgY2FsY3VsYXRpb24oKXtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gYm9keS5jbGllbnRXaWR0aCArIDUpIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaGFzLXNjcm9sbGJhcicpO1xuICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJy0tc2Nyb2xsLWJhcjogJyArICh3aW5kb3cuaW5uZXJXaWR0aCAtIGJvZHkuY2xpZW50V2lkdGgpICsgJ3B4Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1zY3JvbGxiYXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGlvbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxpZ25GdWxsO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQW9CQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/alignfull.js\n");

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Menu {\n  constructor() {\n    this.hamburger = document.querySelector('.menu-toggle');\n    this.mainNav = document.querySelectorAll('.main-nav .nav-columns');\n    this.mobileNav = document.querySelectorAll('.nav-columns');\n    this.submenu = document.querySelectorAll('.js-sub-menu');\n  }\n\n  events() {\n    if (this.hamburger) {\n      this.hamburger.addEventListener('click', e => {\n        e.preventDefault();\n        this.hamburger.querySelector('.svg-hamburger').classList.toggle('is-active');\n        document.querySelector('body').classList.toggle('menu-open');\n      });\n    }\n    for (let i = 0; i < this.mainNav.length; i++) {\n      this.mainNav[i].addEventListener('click', e => {\n        for (let j = 0; j < this.mainNav.length; j++) {\n          if (this.mainNav[j] != this.mainNav[i]) {\n            this.mainNav[j].querySelector('.main-item').classList.remove('active');\n            this.mainNav[j].querySelector('ul').style.maxHeight = null;\n          }\n        }\n        this.mainNav[i].querySelector('.main-item').classList.toggle('active');\n        var item = this.mainNav[i].querySelector('ul');\n        if (item.style.maxHeight) {\n          item.style.maxHeight = null;\n        } else {\n          item.style.maxHeight = item.scrollHeight + 'px';\n        }\n      });\n    }\n\n    var isMobile = window.matchMedia(\"only screen and (max-width: 640px)\").matches;\n    if (isMobile) {\n      this.hamburger.addEventListener('click', e => {\n        e.preventDefault();\n        for (let i = 0; i < this.mobileNav.length; i++) {\n          this.mobileNav[i].style.display = 'block';\n        }\n      });\n    }\n\n    if (this.submenu) {\n      for (let i = 0; i < this.submenu.length; i++) {\n        let subMenu = this.submenu[i];\n        let subMenuParent = subMenu.previousElementSibling;\n        subMenuParent.addEventListener('click', e => {\n          e.preventDefault();\n          subMenu.style.display = 'block';\n          let subMenuWidth = subMenu.offsetWidth;\n          let subMenuChildMenu = subMenu.querySelector('.sub-menu');\n          if (subMenuChildMenu) {\n            subMenuChildMenu.style.left = subMenuWidth + 'px';\n          }\n        });\n      }\n    }\n  }\n\n  init() {\n    this.events();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanM/YTliYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNZW51IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJylcclxuICAgIHRoaXMubWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW5hdiAubmF2LWNvbHVtbnMnKVxyXG4gICAgdGhpcy5tb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWNvbHVtbnMnKTtcclxuICAgIHRoaXMuc3VibWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zdWItbWVudScpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgaWYgKCB0aGlzLmhhbWJ1cmdlciApIHtcclxuICAgICAgdGhpcy5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIucXVlcnlTZWxlY3RvcignLnN2Zy1oYW1idXJnZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFpbk5hdi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLm1haW5OYXZbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWFpbk5hdi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMubWFpbk5hdltqXSAhPSB0aGlzLm1haW5OYXZbaV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluTmF2W2pdLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWl0ZW0nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB0aGlzLm1haW5OYXZbal0ucXVlcnlTZWxlY3RvcigndWwnKS5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFpbk5hdltpXS5xdWVyeVNlbGVjdG9yKCcubWFpbi1pdGVtJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMubWFpbk5hdltpXS5xdWVyeVNlbGVjdG9yKCd1bCcpXHJcbiAgICAgICAgaWYgKGl0ZW0uc3R5bGUubWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICBpdGVtLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW0uc3R5bGUubWF4SGVpZ2h0ID0gaXRlbS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpXCIpLm1hdGNoZXM7XHJcbiAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2JpbGVOYXYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9iaWxlTmF2W2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN1Ym1lbnUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1Ym1lbnUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgc3ViTWVudSA9IHRoaXMuc3VibWVudVtpXTtcclxuICAgICAgICBsZXQgc3ViTWVudVBhcmVudCA9IHN1Yk1lbnUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBzdWJNZW51UGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBzdWJNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgbGV0IHN1Yk1lbnVXaWR0aCA9IHN1Yk1lbnUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICBsZXQgc3ViTWVudUNoaWxkTWVudSA9IHN1Yk1lbnUucXVlcnlTZWxlY3RvcignLnN1Yi1tZW51Jyk7XHJcbiAgICAgICAgICBpZiAoc3ViTWVudUNoaWxkTWVudSkge1xyXG4gICAgICAgICAgICBzdWJNZW51Q2hpbGRNZW51LnN0eWxlLmxlZnQgPSBzdWJNZW51V2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50cygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0RBO0FBQ0E7QUFpRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/menu.js\n");

/***/ }),

/***/ "./src/js/components/search.js":
/*!*************************************!*\
  !*** ./src/js/components/search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Search {\n  constructor() {\n    this.searchBtn = document.querySelector('.search-icon');\n  }\n\n  events() {\n    this.searchBtn.addEventListener('click', e => {\n      e.preventDefault();\n      let searchParent = this.searchBtn.parentElement;\n      let menuItem = searchParent.parentElement.querySelector('.menu-item');\n      searchParent.querySelector('.main-search').style.width = menuItem.offsetWidth + 'px';\n      searchParent.querySelector('.main-search').style.right = searchParent.offsetWidth - 10 + 'px';\n      searchParent.classList.toggle('search-open');\n    });\n    document.addEventListener('click', e => {\n      const outsideElement = document.querySelector(\".header-search\");\n      let targetElement = e.target;\n      do {\n        if (targetElement == outsideElement) {\n          return;\n        }\n        targetElement = targetElement.parentNode;\n      } while (targetElement);\n      this.searchBtn.parentElement.classList.remove('search-open');\n    });\n  }\n\n  init() {\n    this.events();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zZWFyY2guanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvc2VhcmNoLmpzP2UyODgiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pY29uJylcclxuICB9XHJcblxyXG4gIGV2ZW50cygpIHtcclxuICAgIHRoaXMuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IHNlYXJjaFBhcmVudCA9IHRoaXMuc2VhcmNoQnRuLnBhcmVudEVsZW1lbnRcclxuICAgICAgbGV0IG1lbnVJdGVtID0gc2VhcmNoUGFyZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaXRlbScpO1xyXG4gICAgICBzZWFyY2hQYXJlbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2VhcmNoJykuc3R5bGUud2lkdGggPSBtZW51SXRlbS5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgIHNlYXJjaFBhcmVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zZWFyY2gnKS5zdHlsZS5yaWdodCA9IHNlYXJjaFBhcmVudC5vZmZzZXRXaWR0aCAtIDEwICsgJ3B4J1xyXG4gICAgICBzZWFyY2hQYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoLW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgY29uc3Qgb3V0c2lkZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1zZWFyY2hcIik7XHJcbiAgICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgIGRvIHtcclxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCA9PSBvdXRzaWRlRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgIH0gd2hpbGUgKHRhcmdldEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLnNlYXJjaEJ0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1vcGVuJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50cygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBQ0E7QUErQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/search.js\n");

/***/ }),

/***/ "./src/js/components/select-language.js":
/*!**********************************************!*\
  !*** ./src/js/components/select-language.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass SelectLanguage {\n  constructor(select) {\n    this.select = select;\n  }\n\n  events() {\n    this.select.addEventListener('click', e => {\n      e.preventDefault();\n      this.select.parentElement.querySelector('.js-lang-dropdown').classList.toggle('is-open');\n    });\n    document.addEventListener('click', e => {\n      const outsideElement = this.select;\n      let targetElement = e.target;\n      do {\n        if (targetElement == outsideElement) {\n          return;\n        }\n        targetElement = targetElement.parentNode;\n      } while (targetElement);\n      this.select.parentElement.querySelector('.js-lang-dropdown').classList.remove('is-open');\n    });\n  }\n\n  init() {\n    this.events();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectLanguage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zZWxlY3QtbGFuZ3VhZ2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvc2VsZWN0LWxhbmd1YWdlLmpzP2VhNmYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VsZWN0TGFuZ3VhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdCkge1xyXG4gICAgdGhpcy5zZWxlY3QgPSBzZWxlY3Q7XHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxhbmctZHJvcGRvd24nKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJylcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICBjb25zdCBvdXRzaWRlRWxlbWVudCA9IHRoaXMuc2VsZWN0O1xyXG4gICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICBkbyB7XHJcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT0gb3V0c2lkZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICB9IHdoaWxlICh0YXJnZXRFbGVtZW50KTtcclxuICAgICAgdGhpcy5zZWxlY3QucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGFuZy1kcm9wZG93bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RMYW5ndWFnZTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFDQTtBQTJCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/select-language.js\n");

/***/ }),

/***/ "./src/js/components/skip-link-focus-fix.js":
/*!**************************************************!*\
  !*** ./src/js/components/skip-link-focus-fix.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass SkipLinkFocusFix {\n\n  fixIt() {\n    var isIe = /(trident|msie)/i.test(navigator.userAgent);\n\n    if (isIe && document.getElementById && window.addEventListener) {\n      window.addEventListener('hashchange', function () {\n        var id = location.hash.substring(1),\n            element;\n\n        if (!/^[A-z0-9_-]+$/.test(id)) {\n          return;\n        }\n\n        element = document.getElementById(id);\n\n        if (element) {\n          if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {\n            element.tabIndex = -1;\n          }\n\n          element.focus();\n        }\n      }, false);\n    }\n  }\n\n  init() {\n    this.fixIt();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkipLinkFocusFix);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9za2lwLWxpbmstZm9jdXMtZml4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3NraXAtbGluay1mb2N1cy1maXguanM/ZjBmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTa2lwTGlua0ZvY3VzRml4IHtcclxuICBcclxuICBmaXhJdCAoKSB7XHJcbiAgICB2YXIgaXNJZSA9IC8odHJpZGVudHxtc2llKS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKTtcclxuXHJcbiAgICBpZiAoIGlzSWUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKCAxICksXHJcbiAgICAgICAgICBlbGVtZW50O1xyXG4gIFxyXG4gICAgICAgIGlmICggISAoIC9eW0EtejAtOV8tXSskLy50ZXN0KCBpZCApICkgKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggaWQgKTtcclxuICBcclxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XHJcbiAgICAgICAgICBpZiAoICEgKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kudGVzdCggZWxlbWVudC50YWdOYW1lICkgKSApIHtcclxuICAgICAgICAgICAgZWxlbWVudC50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZmFsc2UgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmZpeEl0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lwTGlua0ZvY3VzRml4O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBQ0E7QUErQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/skip-link-focus-fix.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/skip-link-focus-fix */ \"./src/js/components/skip-link-focus-fix.js\");\n/* harmony import */ var _components_select_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select-language */ \"./src/js/components/select-language.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ \"./src/js/components/menu.js\");\n/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search */ \"./src/js/components/search.js\");\n/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accordion */ \"./src/js/components/accordion.js\");\n/* harmony import */ var _components_alignfull__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/alignfull */ \"./src/js/components/alignfull.js\");\n\n\n\n\n\n\n\n\n//import DarkColumns from './components/dark-columns';\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\n    (async () => {\n        await new Promise(res => res());\n    })();\n    const skipLink = new _components_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    skipLink.init();\n    const menu = new _components_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    menu.init();\n    const search = new _components_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    search.init();\n    const selectLanguage = new _components_select_language__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelector('.js-lang-btn'));\n    selectLanguage.init();\n    const accordion = new _components_accordion__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    accordion.init();\n    const alignfull = new _components_alignfull__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n    alignfull.init();\n    //const darkColumns = new DarkColumns();\n    //darkColumns.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2luZGV4LmpzPzAyN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCBTa2lwTGlua0ZpeCBmcm9tICcuL2NvbXBvbmVudHMvc2tpcC1saW5rLWZvY3VzLWZpeCc7XHJcbmltcG9ydCBTZWxlY3RMYW5ndWFnZSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LWxhbmd1YWdlJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9jb21wb25lbnRzL21lbnUnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gnO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vY29tcG9uZW50cy9hY2NvcmRpb24nO1xyXG5pbXBvcnQgQWxpZ25GdWxsIGZyb20gJy4vY29tcG9uZW50cy9hbGlnbmZ1bGwnO1xyXG4vL2ltcG9ydCBEYXJrQ29sdW1ucyBmcm9tICcuL2NvbXBvbmVudHMvZGFyay1jb2x1bW5zJztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHJlcygpKTtcclxuICAgIH0pKCk7XHJcbiAgICBjb25zdCBza2lwTGluayA9IG5ldyBTa2lwTGlua0ZpeCgpO1xyXG4gICAgc2tpcExpbmsuaW5pdCgpO1xyXG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICBtZW51LmluaXQoKTtcclxuICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuICAgIHNlYXJjaC5pbml0KCk7XHJcbiAgICBjb25zdCBzZWxlY3RMYW5ndWFnZSA9IG5ldyBTZWxlY3RMYW5ndWFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGFuZy1idG4nKSk7XHJcbiAgICBzZWxlY3RMYW5ndWFnZS5pbml0KCk7XHJcbiAgICBjb25zdCBhY2NvcmRpb24gPSBuZXcgQWNjb3JkaW9uKCk7XHJcbiAgICBhY2NvcmRpb24uaW5pdCgpO1xyXG4gICAgY29uc3QgYWxpZ25mdWxsID0gbmV3IEFsaWduRnVsbCgpO1xyXG4gICAgYWxpZ25mdWxsLmluaXQoKTtcclxuICAgIC8vY29uc3QgZGFya0NvbHVtbnMgPSBuZXcgRGFya0NvbHVtbnMoKTtcclxuICAgIC8vZGFya0NvbHVtbnMuaW5pdCgpO1xyXG59KTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/YWFhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCI/Y2QwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jquery\n");

/***/ })

/******/ });