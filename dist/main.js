/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var electron_1 = __webpack_require__(423);
	// adds debug features like hotkeys for triggering dev tools and reload
	// require('electron-debug')();
	// prevent window being garbage collected
	var mainWindow = void 0;
	var tray = null;
	function onClosed() {
	    // dereference the window
	    // for multiple windows store them in an array
	    mainWindow = null;
	}
	function createMainWindow() {
	    var win = new electron_1.BrowserWindow({
	        width: 1920,
	        height: 1200,
	        show: false,
	        backgroundColor: '#36312c',
	        // transparent: true,
	        // frame: false,
	        autoHideMenuBar: true,
	        // fullscreen: true,
	        titleBarStyle: 'hidden',
	        vibrancy: 'appearance-based',
	        skipTaskbar: false
	    });
	    win.setDocumentEdited(true);
	    win.loadURL("file://" + __dirname + "/index.html");
	    win.maximize();
	    // win.setFullScreen(true)
	    win.show();
	    win.on('closed', onClosed);
	    win.on('enter-full-screen', function () {
	        console.log('fullscreen');
	    });
	    return win;
	}
	electron_1.app.on('window-all-closed', function () {
	    if (process.platform !== 'darwin') {
	        electron_1.app.quit();
	    }
	});
	electron_1.app.on('activate', function () {
	    if (!mainWindow) {
	        mainWindow = createMainWindow();
	    }
	});
	electron_1.app.on('ready', function () {
	    // BrowserWindow.addDevToolsExtension('/Users/xuhong/Library/Application\ Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.4_0')
	    // BrowserWindow.addDevToolsExtension('/Users/xuhong/Library/Application\ Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.11.1_0')
	    /*
	    * set tray icon
	    */
	    // tray = new Tray('/path/to/icon.png')
	    // tray.setTitle('hello world')
	    mainWindow = createMainWindow();
	});

/***/ },

/***/ 423:
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ }

/******/ });
//# sourceMappingURL=main.js.map