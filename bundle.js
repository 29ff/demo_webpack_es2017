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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var add = function add(a, b) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         if (a == undefined || b == undefined) {
            return reject(new Error('You have to pass the argument'));
         }
         if (typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('The argument have to be a number'));
         }
         return resolve(a + b);
      }, 1000);
   });
};

var multiply = function multiply(a, b) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         if (a == undefined || b == undefined) {
            return reject(new Error('You have to pass the argument'));
         }
         if (typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('The argument have to be a number'));
         }
         return resolve(a * b);
      }, 1000);
   });
};

var divide = function divide(a, b) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         if (a == undefined || b == undefined) {
            return reject(new Error('You have to pass the argument'));
         }
         if (typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('The argument have to be a number'));
         }
         if (b === 0) {
            return reject(new Error('Can not divide by 0'));
         }
         return resolve(a / b);
      });
   });
};

var calculateArea = function () {
   var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(a, b, h) {
      var ab, abh, area;
      return regeneratorRuntime.wrap(function _callee$(_context) {
         while (1) {
            switch (_context.prev = _context.next) {
               case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return add(a, b);

               case 3:
                  ab = _context.sent;
                  _context.next = 6;
                  return multiply(ab, h);

               case 6:
                  abh = _context.sent;
                  _context.next = 9;
                  return divide(abh, 2);

               case 9:
                  area = _context.sent;
                  return _context.abrupt('return', Promise.resolve(area));

               case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', Promise.reject(_context.t0));

               case 16:
               case 'end':
                  return _context.stop();
            }
         }
      }, _callee, undefined, [[0, 13]]);
   }));

   return function calculateArea(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
   };
}();

calculateArea(4, 5, 6).then(function (result) {
   return console.log('Result: ' + result);
}).catch(function (error) {
   return console.log(error.toString());
});

console.log('Block code !');

/***/ })
/******/ ]);