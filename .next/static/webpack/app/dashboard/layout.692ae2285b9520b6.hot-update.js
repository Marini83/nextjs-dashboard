"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./app/ui/dashboard/nav-links.tsx":
/*!****************************************!*\
  !*** ./app/ui/dashboard/nav-links.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Map of links to display in the side navigation.\n// Depending on the size of the application, this would be stored in a database.\nconst links = [\n    {\n        name: \"Home\",\n        href: \"/dashboard\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        name: \"Invoices\",\n        href: \"/dashboard/invoices\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Customers\",\n        href: \"/dashboard/customers\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n];\nfunction NavLinks() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((link)=>{\n            const LinkIcon = link.icon;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: link.href,\n                className: \"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkIcon, {\n                        className: \"w-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marin/Documents/Projects/NextJS/nextjs-dashboard/app/ui/dashboard/nav-links.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:block\",\n                        children: link.name\n                    }, void 0, false, {\n                        fileName: \"/Users/marin/Documents/Projects/NextJS/nextjs-dashboard/app/ui/dashboard/nav-links.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, link.name, true, {\n                fileName: \"/Users/marin/Documents/Projects/NextJS/nextjs-dashboard/app/ui/dashboard/nav-links.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(NavLinks, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = NavLinks;\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9kYXNoYm9hcmQvbmF2LWxpbmtzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU9xQztBQUNSO0FBQ2lCO0FBRzlDLGtEQUFrRDtBQUNsRCxnRkFBZ0Y7QUFDaEYsTUFBTUssUUFBUTtJQUNaO1FBQUVDLE1BQU07UUFBUUMsTUFBTTtRQUFjQyxNQUFNUCxzSUFBUUE7SUFBQztJQUNuRDtRQUNFSyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTU4sc0lBQXFCQTtJQUM3QjtJQUNBO1FBQUVJLE1BQU07UUFBYUMsTUFBTTtRQUF3QkMsTUFBTVIsc0lBQWFBO0lBQUM7Q0FDeEU7QUFFYyxTQUFTUzs7SUFDcEIsTUFBTUMsV0FBV04sNERBQVdBO0lBQzlCLHFCQUNFO2tCQUNHQyxNQUFNTSxHQUFHLENBQUMsQ0FBQ0M7WUFDVixNQUFNQyxXQUFXRCxLQUFLSixJQUFJO1lBQzFCLHFCQUNFLDhEQUFDTCxrREFBSUE7Z0JBRUhJLE1BQU1LLEtBQUtMLElBQUk7Z0JBQ2ZPLFdBQVU7O2tDQUVWLDhEQUFDRDt3QkFBU0MsV0FBVTs7Ozs7O2tDQUNwQiw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQW1CRixLQUFLTixJQUFJOzs7Ozs7O2VBTHBDTSxLQUFLTixJQUFJOzs7OztRQVFwQjs7QUFHTjtHQW5Cd0JHOztRQUNITCx3REFBV0E7OztLQURSSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvZGFzaGJvYXJkL25hdi1saW5rcy50c3g/NTVlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cblxuaW1wb3J0IHtcbiAgVXNlckdyb3VwSWNvbixcbiAgSG9tZUljb24sXG4gIERvY3VtZW50RHVwbGljYXRlSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcblxuLy8gTWFwIG9mIGxpbmtzIHRvIGRpc3BsYXkgaW4gdGhlIHNpZGUgbmF2aWdhdGlvbi5cbi8vIERlcGVuZGluZyBvbiB0aGUgc2l6ZSBvZiB0aGUgYXBwbGljYXRpb24sIHRoaXMgd291bGQgYmUgc3RvcmVkIGluIGEgZGF0YWJhc2UuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBuYW1lOiAnSG9tZScsIGhyZWY6ICcvZGFzaGJvYXJkJywgaWNvbjogSG9tZUljb24gfSxcbiAge1xuICAgIG5hbWU6ICdJbnZvaWNlcycsXG4gICAgaHJlZjogJy9kYXNoYm9hcmQvaW52b2ljZXMnLFxuICAgIGljb246IERvY3VtZW50RHVwbGljYXRlSWNvbixcbiAgfSxcbiAgeyBuYW1lOiAnQ3VzdG9tZXJzJywgaHJlZjogJy9kYXNoYm9hcmQvY3VzdG9tZXJzJywgaWNvbjogVXNlckdyb3VwSWNvbiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TGlua3MoKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IExpbmtJY29uID0gbGluay5pY29uO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e2xpbmsubmFtZX1cbiAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1bNDhweF0gZ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcm91bmRlZC1tZCBiZy1ncmF5LTUwIHAtMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXNreS0xMDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBtZDpmbGV4LW5vbmUgbWQ6anVzdGlmeS1zdGFydCBtZDpwLTIgbWQ6cHgtM1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmtJY29uIGNsYXNzTmFtZT1cInctNlwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj57bGluay5uYW1lfTwvcD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJVc2VyR3JvdXBJY29uIiwiSG9tZUljb24iLCJEb2N1bWVudER1cGxpY2F0ZUljb24iLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJsaW5rcyIsIm5hbWUiLCJocmVmIiwiaWNvbiIsIk5hdkxpbmtzIiwicGF0aG5hbWUiLCJtYXAiLCJsaW5rIiwiTGlua0ljb24iLCJjbGFzc05hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/dashboard/nav-links.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n\nfunction DocumentDuplicateIcon({\n  title,\n  titleId,\n  ...props\n}, svgRef) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", Object.assign({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    strokeWidth: 1.5,\n    stroke: \"currentColor\",\n    \"aria-hidden\": \"true\",\n    ref: svgRef,\n    \"aria-labelledby\": titleId\n  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", {\n    id: titleId\n  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    d: \"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75\"\n  }));\n}\nconst ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DocumentDuplicateIcon);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForwardRef);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUvZXNtL0RvY3VtZW50RHVwbGljYXRlSWNvbi5qcyIsIm1hcHBpbmdzIjoiOztBQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxzQkFBc0IsZ0RBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtCQUErQixnREFBbUI7QUFDckQ7QUFDQSxHQUFHLDhCQUE4QixnREFBbUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLDZDQUFnQjtBQUNuQywrREFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUvZXNtL0RvY3VtZW50RHVwbGljYXRlSWNvbi5qcz85YWI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gRG9jdW1lbnREdXBsaWNhdGVJY29uKHtcbiAgdGl0bGUsXG4gIHRpdGxlSWQsXG4gIC4uLnByb3BzXG59LCBzdmdSZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICBzdHJva2VXaWR0aDogMS41LFxuICAgIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIHJlZjogc3ZnUmVmLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRpdGxlSWRcbiAgfSwgcHJvcHMpLCB0aXRsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwge1xuICAgIGlkOiB0aXRsZUlkXG4gIH0sIHRpdGxlKSA6IG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgZDogXCJNMTUuNzUgMTcuMjV2My4zNzVjMCAuNjIxLS41MDQgMS4xMjUtMS4xMjUgMS4xMjVoLTkuNzVhMS4xMjUgMS4xMjUgMCAwMS0xLjEyNS0xLjEyNVY3Ljg3NWMwLS42MjEuNTA0LTEuMTI1IDEuMTI1LTEuMTI1SDYuNzVhOS4wNiA5LjA2IDAgMDExLjUuMTI0bTcuNSAxMC4zNzZoMy4zNzVjLjYyMSAwIDEuMTI1LS41MDQgMS4xMjUtMS4xMjVWMTEuMjVjMC00LjQ2LTMuMjQzLTguMTYxLTcuNS04Ljg3NmE5LjA2IDkuMDYgMCAwMC0xLjUtLjEyNEg5LjM3NWMtLjYyMSAwLTEuMTI1LjUwNC0xLjEyNSAxLjEyNXYzLjVtNy41IDEwLjM3NUg5LjM3NWExLjEyNSAxLjEyNSAwIDAxLTEuMTI1LTEuMTI1di05LjI1bTEyIDYuNjI1di0xLjg3NWEzLjM3NSAzLjM3NSAwIDAwLTMuMzc1LTMuMzc1aC0xLjVhMS4xMjUgMS4xMjUgMCAwMS0xLjEyNS0xLjEyNXYtMS41YTMuMzc1IDMuMzc1IDAgMDAtMy4zNzUtMy4zNzVIOS43NVwiXG4gIH0pKTtcbn1cbmNvbnN0IEZvcndhcmRSZWYgPSBSZWFjdC5mb3J3YXJkUmVmKERvY3VtZW50RHVwbGljYXRlSWNvbik7XG5leHBvcnQgZGVmYXVsdCBGb3J3YXJkUmVmOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n\nfunction HomeIcon({\n  title,\n  titleId,\n  ...props\n}, svgRef) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", Object.assign({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    strokeWidth: 1.5,\n    stroke: \"currentColor\",\n    \"aria-hidden\": \"true\",\n    ref: svgRef,\n    \"aria-labelledby\": titleId\n  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", {\n    id: titleId\n  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    d: \"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25\"\n  }));\n}\nconst ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HomeIcon);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForwardRef);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUvZXNtL0hvbWVJY29uLmpzIiwibWFwcGluZ3MiOiI7O0FBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHNCQUFzQixnREFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsK0JBQStCLGdEQUFtQjtBQUNyRDtBQUNBLEdBQUcsOEJBQThCLGdEQUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUIsNkNBQWdCO0FBQ25DLCtEQUFlLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZS9lc20vSG9tZUljb24uanM/ODE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIEhvbWVJY29uKHtcbiAgdGl0bGUsXG4gIHRpdGxlSWQsXG4gIC4uLnByb3BzXG59LCBzdmdSZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICBzdHJva2VXaWR0aDogMS41LFxuICAgIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIHJlZjogc3ZnUmVmLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRpdGxlSWRcbiAgfSwgcHJvcHMpLCB0aXRsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwge1xuICAgIGlkOiB0aXRsZUlkXG4gIH0sIHRpdGxlKSA6IG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgZDogXCJNMi4yNSAxMmw4Ljk1NC04Ljk1NWMuNDQtLjQzOSAxLjE1Mi0uNDM5IDEuNTkxIDBMMjEuNzUgMTJNNC41IDkuNzV2MTAuMTI1YzAgLjYyMS41MDQgMS4xMjUgMS4xMjUgMS4xMjVIOS43NXYtNC44NzVjMC0uNjIxLjUwNC0xLjEyNSAxLjEyNS0xLjEyNWgyLjI1Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjVWMjFoNC4xMjVjLjYyMSAwIDEuMTI1LS41MDQgMS4xMjUtMS4xMjVWOS43NU04LjI1IDIxaDguMjVcIlxuICB9KSk7XG59XG5jb25zdCBGb3J3YXJkUmVmID0gUmVhY3QuZm9yd2FyZFJlZihIb21lSWNvbik7XG5leHBvcnQgZGVmYXVsdCBGb3J3YXJkUmVmOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n\nfunction UserGroupIcon({\n  title,\n  titleId,\n  ...props\n}, svgRef) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", Object.assign({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    strokeWidth: 1.5,\n    stroke: \"currentColor\",\n    \"aria-hidden\": \"true\",\n    ref: svgRef,\n    \"aria-labelledby\": titleId\n  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", {\n    id: titleId\n  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    d: \"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z\"\n  }));\n}\nconst ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserGroupIcon);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForwardRef);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUvZXNtL1VzZXJHcm91cEljb24uanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRywrQkFBK0IsZ0RBQW1CO0FBQ3JEO0FBQ0EsR0FBRyw4QkFBOEIsZ0RBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQiw2Q0FBZ0I7QUFDbkMsK0RBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lL2VzbS9Vc2VyR3JvdXBJY29uLmpzPzFjNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBVc2VyR3JvdXBJY29uKHtcbiAgdGl0bGUsXG4gIHRpdGxlSWQsXG4gIC4uLnByb3BzXG59LCBzdmdSZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICBzdHJva2VXaWR0aDogMS41LFxuICAgIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIHJlZjogc3ZnUmVmLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRpdGxlSWRcbiAgfSwgcHJvcHMpLCB0aXRsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwge1xuICAgIGlkOiB0aXRsZUlkXG4gIH0sIHRpdGxlKSA6IG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgZDogXCJNMTggMTguNzJhOS4wOTQgOS4wOTQgMCAwMDMuNzQxLS40NzkgMyAzIDAgMDAtNC42ODItMi43Mm0uOTQgMy4xOThsLjAwMS4wMzFjMCAuMjI1LS4wMTIuNDQ3LS4wMzcuNjY2QTExLjk0NCAxMS45NDQgMCAwMTEyIDIxYy0yLjE3IDAtNC4yMDctLjU3Ni01Ljk2My0xLjU4NEE2LjA2MiA2LjA2MiAwIDAxNiAxOC43MTltMTIgMGE1Ljk3MSA1Ljk3MSAwIDAwLS45NDEtMy4xOTdtMCAwQTUuOTk1IDUuOTk1IDAgMDAxMiAxMi43NWE1Ljk5NSA1Ljk5NSAwIDAwLTUuMDU4IDIuNzcybTAgMGEzIDMgMCAwMC00LjY4MSAyLjcyIDguOTg2IDguOTg2IDAgMDAzLjc0LjQ3N20uOTQtMy4xOTdhNS45NzEgNS45NzEgMCAwMC0uOTQgMy4xOTdNMTUgNi43NWEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6bTYgM2EyLjI1IDIuMjUgMCAxMS00LjUgMCAyLjI1IDIuMjUgMCAwMTQuNSAwem0tMTMuNSAwYTIuMjUgMi4yNSAwIDExLTQuNSAwIDIuMjUgMi4yNSAwIDAxNC41IDB6XCJcbiAgfSkpO1xufVxuY29uc3QgRm9yd2FyZFJlZiA9IFJlYWN0LmZvcndhcmRSZWYoVXNlckdyb3VwSWNvbik7XG5leHBvcnQgZGVmYXVsdCBGb3J3YXJkUmVmOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js\n"));

/***/ })

});