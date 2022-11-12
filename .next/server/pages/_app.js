"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Menu/components/ColorMode */ \"./src/components/Menu/components/ColorMode.js\");\n/* harmony import */ var _src_components_RegisterVideo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/RegisterVideo */ \"./src/components/RegisterVideo/index.js\");\n\n\n\n\n\n\nconst theme = {\n    light: {\n        backgroundBase: \"#f9f9f9\",\n        backgroundLevel1: \"#ffffff\",\n        backgroundLevel2: \"#f0f0f0\",\n        borderBase: \"#e5e5e5\",\n        textColorBase: \"#222222\"\n    },\n    dark: {\n        backgroundBase: \"#181818\",\n        backgroundLevel1: \"#202020\",\n        backgroundLevel2: \"#313131\",\n        borderBase: \"#383838\",\n        textColorBase: \"#FFFFFF\"\n    }\n};\n// _app.js -> Definicoes globais do NextJS\n// ThemeProvider\nfunction ProviderWrapper(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        initialMode: \"dark\",\n        children: props.children\n    }, void 0, false, {\n        fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\pages\\\\_app.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\nfunction Root({ Component , pageProps  }) {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_4__.ColorModeContext);\n    console.log(context);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: theme[context.mode],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_3__.CSSReset, {}, void 0, false, {\n                fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\pages\\\\_app.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\pages\\\\_app.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_RegisterVideo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\pages\\\\_app.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\pages\\\\_app.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\nfunction _App(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProviderWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Root, {\n            ...props\n        }, void 0, false, {\n            fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\pages\\\\_app.js\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\pages\\\\_app.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQztBQUNRO0FBQ0k7QUFDMEM7QUFDcEM7QUFFNUQsTUFBTU8sS0FBSyxHQUFHO0lBQ1ZDLEtBQUssRUFBRTtRQUNIQyxjQUFjLEVBQUUsU0FBUztRQUN6QkMsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQkMsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQkMsVUFBVSxFQUFFLFNBQVM7UUFDckJDLGFBQWEsRUFBRSxTQUFTO0tBQzNCO0lBQ0RDLElBQUksRUFBRTtRQUNGTCxjQUFjLEVBQUUsU0FBUztRQUN6QkMsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQkMsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQkMsVUFBVSxFQUFFLFNBQVM7UUFDckJDLGFBQWEsRUFBRSxTQUFTO0tBQzNCO0NBQ0o7QUFFRCwwQ0FBMEM7QUFDMUMsZ0JBQWdCO0FBRWhCLFNBQVNFLGVBQWUsQ0FBQ0MsS0FBSyxFQUFFO0lBQzVCLHFCQUNJLDhEQUFDWixpRkFBaUI7UUFBQ2EsV0FBVyxFQUFFLE1BQU07a0JBQ2pDRCxLQUFLLENBQUNFLFFBQVE7Ozs7O1lBQ0MsQ0FDdkI7QUFDTCxDQUFDO0FBRUQsU0FBU0MsSUFBSSxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEMsTUFBTUMsT0FBTyxHQUFHckIsaURBQVUsQ0FBQ0ksdUZBQWdCLENBQUM7SUFDNUNrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDLENBQUM7SUFFckIscUJBQ0ksOERBQUNwQiw0REFBYTtRQUFDSyxLQUFLLEVBQUVBLEtBQUssQ0FBQ2UsT0FBTyxDQUFDRyxJQUFJLENBQUM7OzBCQUNyQyw4REFBQ3RCLDhEQUFROzs7O29CQUFHOzBCQUNaLDhEQUFDaUIsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTswQkFDNUIsOERBQUNmLHFFQUFhOzs7O29CQUFHOzs7Ozs7WUFDTCxDQUNsQjtBQUNOLENBQUM7QUFFYyxTQUFTb0IsSUFBSSxDQUFDVixLQUFLLEVBQUU7SUFDaEMscUJBQ0ksOERBQUNELGVBQWU7a0JBQ1osNEVBQUNJLElBQUk7WUFBRSxHQUFHSCxLQUFLOzs7OztnQkFBSTs7Ozs7WUFDTCxDQUNyQjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENTU1Jlc2V0IH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0NTU1Jlc2V0XCI7XG5pbXBvcnQgQ29sb3JNb2RlUHJvdmlkZXIsIHtDb2xvck1vZGVDb250ZXh0fSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTWVudS9jb21wb25lbnRzL0NvbG9yTW9kZVwiO1xuaW1wb3J0IFJlZ2lzdGVyVmlkZW8gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyVmlkZW9cIjtcblxuY29uc3QgdGhlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgYmFja2dyb3VuZEJhc2U6IFwiI2Y5ZjlmOVwiLFxuICAgICAgICBiYWNrZ3JvdW5kTGV2ZWwxOiBcIiNmZmZmZmZcIixcbiAgICAgICAgYmFja2dyb3VuZExldmVsMjogXCIjZjBmMGYwXCIsXG4gICAgICAgIGJvcmRlckJhc2U6IFwiI2U1ZTVlNVwiLFxuICAgICAgICB0ZXh0Q29sb3JCYXNlOiBcIiMyMjIyMjJcIixcbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgICAgYmFja2dyb3VuZEJhc2U6IFwiIzE4MTgxOFwiLFxuICAgICAgICBiYWNrZ3JvdW5kTGV2ZWwxOiBcIiMyMDIwMjBcIixcbiAgICAgICAgYmFja2dyb3VuZExldmVsMjogXCIjMzEzMTMxXCIsXG4gICAgICAgIGJvcmRlckJhc2U6IFwiIzM4MzgzOFwiLFxuICAgICAgICB0ZXh0Q29sb3JCYXNlOiBcIiNGRkZGRkZcIixcbiAgICB9XG59O1xuXG4vLyBfYXBwLmpzIC0+IERlZmluaWNvZXMgZ2xvYmFpcyBkbyBOZXh0SlNcbi8vIFRoZW1lUHJvdmlkZXJcblxuZnVuY3Rpb24gUHJvdmlkZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyIGluaXRpYWxNb2RlPXtcImRhcmtcIn0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBSb290KHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbG9yTW9kZUNvbnRleHQpO1xuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lW2NvbnRleHQubW9kZV19PlxuICAgICAgICAgICAgPENTU1Jlc2V0IC8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8UmVnaXN0ZXJWaWRlbyAvPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX0FwcChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlcldyYXBwZXI+XG4gICAgICAgICAgICA8Um9vdCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvUHJvdmlkZXJXcmFwcGVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsIkNTU1Jlc2V0IiwiQ29sb3JNb2RlUHJvdmlkZXIiLCJDb2xvck1vZGVDb250ZXh0IiwiUmVnaXN0ZXJWaWRlbyIsInRoZW1lIiwibGlnaHQiLCJiYWNrZ3JvdW5kQmFzZSIsImJhY2tncm91bmRMZXZlbDEiLCJiYWNrZ3JvdW5kTGV2ZWwyIiwiYm9yZGVyQmFzZSIsInRleHRDb2xvckJhc2UiLCJkYXJrIiwiUHJvdmlkZXJXcmFwcGVyIiwicHJvcHMiLCJpbml0aWFsTW9kZSIsImNoaWxkcmVuIiwiUm9vdCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwibW9kZSIsIl9BcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/components/CSSReset.js":
/*!************************************!*\
  !*** ./src/components/CSSReset.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CSSReset\": () => (/* binding */ CSSReset)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CSSReset = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n  /* Reset */\r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  body {\r\n    font-family: sans-serif;\r\n    background-color: ${({ theme  })=>theme.backgroundBase};\r\n    color: ${({ theme  })=>theme.textColorBase};\r\n  }\r\n  /* NextJS */\r\n  html {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100%;\r\n  }\r\n  body {\r\n    display: flex;\r\n    flex: 1;\r\n  }\r\n  #__next {\r\n    display: flex;\r\n    flex: 1;\r\n  }\r\n  /* Globals */\r\n  button,\r\n  a {\r\n    text-decoration: none;\r\n    opacity: 1;\r\n    transition: .3s;\r\n    &:hover,\r\n    &:focus {\r\n      opacity: .5;\r\n    }\r\n  }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DU1NSZXNldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFFL0MsTUFBTUMsUUFBUSxHQUFHRCxnRUFBaUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NTU1Jlc2V0LmpzPzAyYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDU1NSZXNldCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC8qIFJlc2V0ICovXHJcbiAgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHt0aGVtZX0pID0+IHRoZW1lLmJhY2tncm91bmRCYXNlfTtcclxuICAgIGNvbG9yOiAkeyh7dGhlbWV9KSA9PiB0aGVtZS50ZXh0Q29sb3JCYXNlIH07XHJcbiAgfVxyXG4gIC8qIE5leHRKUyAqL1xyXG4gIGh0bWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICAjX19uZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICAvKiBHbG9iYWxzICovXHJcbiAgYnV0dG9uLFxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICB9XHJcbiAgfVxyXG5gOyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIkNTU1Jlc2V0IiwidGhlbWUiLCJiYWNrZ3JvdW5kQmFzZSIsInRleHRDb2xvckJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CSSReset.js\n");

/***/ }),

/***/ "./src/components/Menu/components/ColorMode.js":
/*!*****************************************************!*\
  !*** ./src/components/Menu/components/ColorMode.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorModeContext\": () => (/* binding */ ColorModeContext),\n/* harmony export */   \"default\": () => (/* binding */ ColorModeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ColorModeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    mode: \"light\",\n    setMode: ()=>{\n        alert(\"You need to configure me first.\");\n    },\n    toggleMode: ()=>{\n        alert(\"You need to configure me first.\");\n    }\n});\nfunction ColorModeProvider(props) {\n    const { 0: mode , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.initialMode);\n    function toggleMode() {\n        if (mode == \"dark\") setMode(\"light\");\n        if (mode == \"light\") setMode(\"dark\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeContext.Provider, {\n        value: {\n            mode: mode,\n            setMode: setMode,\n            toggleMode: toggleMode\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\src\\\\components\\\\Menu\\\\components\\\\ColorMode.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvQ29sb3JNb2RlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBRWpDLE1BQU1FLGdCQUFnQixpQkFBR0YsMERBQW1CLENBQUM7SUFDaERJLElBQUksRUFBRSxPQUFPO0lBQ2JDLE9BQU8sRUFBRSxJQUFNO1FBQUVDLEtBQUssQ0FBRSxpQ0FBaUMsQ0FBQztJQUFDLENBQUM7SUFDNURDLFVBQVUsRUFBRSxJQUFNO1FBQUVELEtBQUssQ0FBRSxpQ0FBaUMsQ0FBQztJQUFDLENBQUM7Q0FDbEUsQ0FBQyxDQUFDO0FBRVksU0FBU0UsaUJBQWlCLENBQUNDLEtBQUssRUFBQztJQUM1QyxNQUFNLEtBQUNMLElBQUksTUFBRUMsT0FBTyxNQUFJSiwrQ0FBUSxDQUFDUSxLQUFLLENBQUNDLFdBQVcsQ0FBQztJQUVuRCxTQUFTSCxVQUFVLEdBQUU7UUFDakIsSUFBSUgsSUFBSSxJQUFJLE1BQU0sRUFBRUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUlELElBQUksSUFBSSxPQUFPLEVBQUVDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQscUJBQ0ksOERBQUNILGdCQUFnQixDQUFDUyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFUixJQUFJLEVBQUVBLElBQUk7WUFBRUMsT0FBTyxFQUFFQSxPQUFPO1lBQUVFLFVBQVUsRUFBRUEsVUFBVTtTQUFFO2tCQUNyRkUsS0FBSyxDQUFDSSxRQUFROzs7OztZQUNTLENBQy9CO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUvY29tcG9uZW50cy9Db2xvck1vZGUuanM/ZDliOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2xvck1vZGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgICBtb2RlOiBcImxpZ2h0XCIsXHJcbiAgICBzZXRNb2RlOiAoKSA9PiB7IGFsZXJ0IChcIllvdSBuZWVkIHRvIGNvbmZpZ3VyZSBtZSBmaXJzdC5cIikgfSxcclxuICAgIHRvZ2dsZU1vZGU6ICgpID0+IHsgYWxlcnQgKFwiWW91IG5lZWQgdG8gY29uZmlndXJlIG1lIGZpcnN0LlwiKSB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sb3JNb2RlUHJvdmlkZXIocHJvcHMpe1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUocHJvcHMuaW5pdGlhbE1vZGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1vZGUoKXtcclxuICAgICAgICBpZiAobW9kZSA9PSBcImRhcmtcIikgc2V0TW9kZShcImxpZ2h0XCIpO1xyXG4gICAgICAgIGlmIChtb2RlID09IFwibGlnaHRcIikgc2V0TW9kZShcImRhcmtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29sb3JNb2RlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtb2RlOiBtb2RlLCBzZXRNb2RlOiBzZXRNb2RlLCB0b2dnbGVNb2RlOiB0b2dnbGVNb2RlIH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Db2xvck1vZGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb2xvck1vZGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIm1vZGUiLCJzZXRNb2RlIiwiYWxlcnQiLCJ0b2dnbGVNb2RlIiwiQ29sb3JNb2RlUHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxNb2RlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/components/ColorMode.js\n");

/***/ }),

/***/ "./src/components/RegisterVideo/index.js":
/*!***********************************************!*\
  !*** ./src/components/RegisterVideo/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RegisterVideo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo/styles.js\");\n\n\n\n// Custom Hook\nfunction useForm(formProps) {\n    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formProps.initialValues);\n    return {\n        values,\n        handleChange: (e)=>{\n            const value = e.target.value;\n            setValues({\n                ...values,\n                [e.target.name]: value\n            });\n        },\n        clearForm () {\n            setValues({});\n        }\n    };\n}\nfunction RegisterVideo() {\n    const formRegister = useForm({\n        initialValues: {\n            title: \"Fros punk\",\n            url: \"asushas\"\n        }\n    });\n    const { 0: formVisible , 1: setFormVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"add-video\",\n                onClick: ()=>setFormVisible(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            formVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                    console.log(formRegister.values);\n                    setFormVisible(false);\n                    formRegister.clearForm();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"close-modal\",\n                            onClick: ()=>setFormVisible(false),\n                            children: \"x\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Video title\",\n                            name: \"title\",\n                            value: formRegister.values.title,\n                            onChange: formRegister.handleChange\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 48,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"URL\",\n                            name: \"url\",\n                            value: formRegister.values.url,\n                            onChange: formRegister.handleChange\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Matheus\\\\Projetos Visual Studio\\\\Code\\\\alura-tube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ2M7QUFFL0MsY0FBYztBQUNkLFNBQVNFLE9BQU8sQ0FBQ0MsU0FBUyxFQUFDO0lBQ3ZCLE1BQU0sS0FBQ0MsTUFBTSxNQUFFQyxTQUFTLE1BQUlMLCtDQUFRLENBQUNHLFNBQVMsQ0FBQ0csYUFBYSxDQUFDO0lBRTdELE9BQU87UUFDSEYsTUFBTTtRQUNORyxZQUFZLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFLO1lBQ2pCLE1BQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNELEtBQUs7WUFDNUJKLFNBQVMsQ0FBQztnQkFDTixHQUFHRCxNQUFNO2dCQUNULENBQUNJLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsS0FBSzthQUN6QixDQUFDO1FBQ04sQ0FBQztRQUNERyxTQUFTLElBQUc7WUFDUlAsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUNqQixDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUM7QUFFYyxTQUFTUSxhQUFhLEdBQUc7SUFDcEMsTUFBTUMsWUFBWSxHQUFHWixPQUFPLENBQUM7UUFDekJJLGFBQWEsRUFBRTtZQUFFUyxLQUFLLEVBQUUsV0FBVztZQUFFQyxHQUFHLEVBQUUsU0FBUztTQUFFO0tBQ3hELENBQUM7SUFDRixNQUFNLEtBQUNDLFdBQVcsTUFBRUMsY0FBYyxNQUFJbEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFckQscUJBQ0ksOERBQUNDLHdEQUFtQjs7MEJBQ2hCLDhEQUFDa0IsUUFBTTtnQkFDUEMsSUFBSSxFQUFDLFFBQVE7Z0JBQ2JDLFNBQVMsRUFBQyxXQUFXO2dCQUNyQkMsT0FBTyxFQUFFLElBQU1KLGNBQWMsQ0FBQyxJQUFJLENBQUM7MEJBQUUsR0FFckM7Ozs7O29CQUFTO1lBQ1JELFdBQVcsa0JBQ1IsOERBQUNNLE1BQUk7Z0JBQUNDLFFBQVEsRUFBRSxDQUFDaEIsQ0FBQyxHQUFLO29CQUN2QkEsQ0FBQyxDQUFDaUIsY0FBYyxFQUFFLENBQUM7b0JBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsWUFBWSxDQUFDVixNQUFNLENBQUMsQ0FBQztvQkFDakNjLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEJKLFlBQVksQ0FBQ0YsU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7MEJBQ0csNEVBQUNnQixLQUFHOztzQ0FDQSw4REFBQ1QsUUFBTTs0QkFBQ0UsU0FBUyxFQUFDLGFBQWE7NEJBQUNDLE9BQU8sRUFBRSxJQUFNSixjQUFjLENBQUMsS0FBSyxDQUFDO3NDQUFFLEdBRXRFOzs7OztnQ0FBUztzQ0FDVCw4REFBQ1csT0FBSzs0QkFDRkMsV0FBVyxFQUFDLGFBQWE7NEJBQ3pCbkIsSUFBSSxFQUFDLE9BQU87NEJBQ1pGLEtBQUssRUFBRUssWUFBWSxDQUFDVixNQUFNLENBQUNXLEtBQUs7NEJBQ2hDZ0IsUUFBUSxFQUFFakIsWUFBWSxDQUFDUCxZQUFZOzs7OztnQ0FBRztzQ0FDMUMsOERBQUNzQixPQUFLOzRCQUNGQyxXQUFXLEVBQUMsS0FBSzs0QkFDakJuQixJQUFJLEVBQUMsS0FBSzs0QkFDVkYsS0FBSyxFQUFFSyxZQUFZLENBQUNWLE1BQU0sQ0FBQ1ksR0FBRzs0QkFDOUJlLFFBQVEsRUFBRWpCLFlBQVksQ0FBQ1AsWUFBWTs7Ozs7Z0NBQUc7c0NBQzFDLDhEQUFDWSxRQUFNOzRCQUFDQyxJQUFJLEVBQUMsUUFBUTtzQ0FBQyxVQUFROzs7OztnQ0FBUzs7Ozs7O3dCQUNyQzs7Ozs7b0JBQ1A7Ozs7OztZQUVXLENBQzFCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyVmlkZW8vaW5kZXguanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdHlsZWRSZWdpc3RlclZpZGVvIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG4vLyBDdXN0b20gSG9va1xyXG5mdW5jdGlvbiB1c2VGb3JtKGZvcm1Qcm9wcyl7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoZm9ybVByb3BzLmluaXRpYWxWYWx1ZXMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZTogKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhckZvcm0oKSB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7fSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlclZpZGVvKCkge1xyXG4gICAgY29uc3QgZm9ybVJlZ2lzdGVyID0gdXNlRm9ybSh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczogeyB0aXRsZTogXCJGcm9zIHB1bmtcIiwgdXJsOiBcImFzdXNoYXNcIiB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtmb3JtVmlzaWJsZSwgc2V0Rm9ybVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCIgXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZvcm1WaXNpYmxlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICsgXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7Zm9ybVZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtUmVnaXN0ZXIudmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIHNldEZvcm1WaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGZvcm1SZWdpc3Rlci5jbGVhckZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtVmlzaWJsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmlkZW8gdGl0bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVJlZ2lzdGVyLnZhbHVlcy50aXRsZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybVJlZ2lzdGVyLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVSTFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVJlZ2lzdGVyLnZhbHVlcy51cmx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1SZWdpc3Rlci5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvU3R5bGVkUmVnaXN0ZXJWaWRlbz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlN0eWxlZFJlZ2lzdGVyVmlkZW8iLCJ1c2VGb3JtIiwiZm9ybVByb3BzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaW5pdGlhbFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIm5hbWUiLCJjbGVhckZvcm0iLCJSZWdpc3RlclZpZGVvIiwiZm9ybVJlZ2lzdGVyIiwidGl0bGUiLCJ1cmwiLCJmb3JtVmlzaWJsZSIsInNldEZvcm1WaXNpYmxlIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n");

/***/ }),

/***/ "./src/components/RegisterVideo/styles.js":
/*!************************************************!*\
  !*** ./src/components/RegisterVideo/styles.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledRegisterVideo\": () => (/* binding */ StyledRegisterVideo)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledRegisterVideo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"styles__StyledRegisterVideo\",\n    componentId: \"sc-88f1461f-0\"\n})`\r\n  .add-video {\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 20px;\r\n    color: inherit;\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border: 0;\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    z-index: 99;\r\n    cursor: pointer;\r\n  }\r\n  .close-modal {\r\n    width: 25px;\r\n    height: 25px;\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 16px;\r\n    color: inherit;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  button[type=\"submit\"] {\r\n    background-color: red;\r\n    padding: 8px 16px;\r\n    border: none;\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n    color: inherit;\r\n  }\r\n  form {\r\n    width: 100%;\r\n    padding: 5%;\r\n    background-color: rgba(0,0,0,0.5);\r\n    position: fixed;\r\n    top: 0; bottom: 0;\r\n    left: 0; right: 0;\r\n    z-index: 100;\r\n    display: flex;\r\n    justify-content: center;\r\n    & > div {\r\n      flex: 1;\r\n      border-radius: 8px;\r\n      max-width: 320px;\r\n      background-color: ${({ theme  })=>theme.backgroundLevel2};\r\n      display: flex;\r\n      flex-direction: column;\r\n      position: relative;\r\n      padding: 16px;\r\n      padding-top: 40px;\r\n    }\r\n  }\r\n  input {\r\n    border-radius: 2px;\r\n    border: 1px solid ${({ theme  })=>theme.borderBase};\r\n    padding: 8px 10px;\r\n    margin-bottom: 10px;\r\n    outline: none;\r\n    color: #222222;\r\n    background-color: #f9f9f9;\r\n    color: ${({ theme  })=>theme.textColorBase};\r\n    background-color: ${({ theme  })=>theme.backgroundBase};\r\n  }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL3N0eWxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsbUJBQW1CLEdBQUdELHVFQUFVOzs7RUFBQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVnaXN0ZXJWaWRlby9zdHlsZXMuanM/MjJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFJlZ2lzdGVyVmlkZW8gPSBzdHlsZWQuZGl2YFxyXG4gIC5hZGQtdmlkZW8ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jbG9zZS1tb2RhbCB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7IGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7IHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kTGV2ZWwyfTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJCYXNlfTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0Q29sb3JCYXNlfTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZEJhc2V9O1xyXG4gIH1cclxuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiU3R5bGVkUmVnaXN0ZXJWaWRlbyIsImRpdiIsInRoZW1lIiwiYmFja2dyb3VuZExldmVsMiIsImJvcmRlckJhc2UiLCJ0ZXh0Q29sb3JCYXNlIiwiYmFja2dyb3VuZEJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/styles.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();