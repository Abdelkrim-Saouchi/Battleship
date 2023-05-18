"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --Navy-Blue: #001f3f;\n  --Light-Gray: #f8f8f8;\n  --Fire-Brick-Red: #b22222;\n  --White: #ffffff;\n  --Forest-Green: #228b22;\n  --Light-Coral: #f08080;\n}\n\nbody {\n  /* min-height: 100dvh; */\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  background-color: var(--Light-Gray);\n  color: var(--Navy-Blue);\n  font-family: 'Oswald', 'sans-serif';\n}\n\nmain {\n  margin-bottom: auto;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  font-size: 42px;\n  margin-bottom: 32px;\n}\n\n.game-container {\n  display: flex;\n  gap: 32px;\n}\n\n.game-container__board {\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.game-container__board--two {\n  position: relative;\n}\n\n.game-container__start-play-container {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.9);\n  z-index: 99;\n  padding: 32px;\n  width: 100%;\n  height: 92%;\n  font-size: 28px;\n  font-weight: 600;\n  color: inherit;\n}\n\n.game-container__start-display {\n  margin-bottom: 16px;\n}\n\n.game-container__grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--Navy-Blue);\n  border: 2px solid var(--Light-Gray);\n  cursor: pointer;\n}\n\n.game-container__row,\n.start-section__row {\n  flex: 1;\n  display: flex;\n}\n\n.game-container__cell {\n  flex: 1;\n  border: 1px solid var(--Light-Gray);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-container__cell.green {\n  background-color: var(--Forest-Green);\n}\n\n.game-container__cell.missed {\n  background-color: var(--Light-Coral);\n}\n\n.game-container__cell.hit {\n  background-color: var(--Fire-Brick-Red);\n}\n\n.game-container__player {\n  color: var(--Navy-Blue);\n  font-size: larger;\n  font-weight: 600;\n}\n\n.game-control-panel {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.game-control-panel__displayer {\n  font-size: 36px;\n  font-weight: 700;\n  margin-block: 16px;\n}\n\n.game-control-panel__restart-btn,\n.game-container__play-btn {\n  border: 0;\n  padding: 10px 16px;\n  min-width: 100px;\n  background-color: var(--Navy-Blue);\n  color: var(--White);\n  border-radius: 12px;\n  font-size: 22px;\n  font-family: inherit;\n  cursor: pointer;\n  margin-bottom: 16px;\n}\n\n.game-control-panel__restart-btn:is(:focus, :hover),\n.start-section__rotate-btn:is(:focus, :hover),\n.game-container__play-btn:is(:focus, :hover) {\n  opacity: 0.9;\n}\n\n.start-section {\n  font-size: 28px;\n  padding: 12px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.start-section__ship-options {\n  border: 5px solid var(--Navy-Blue);\n  padding: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  /* justify-content: space-between; */\n  align-items: center;\n  gap: 8px;\n  min-width: 150px;\n  min-height: 40px;\n}\n.start-section__ship-options > div {\n  background-color: var(--Forest-Green);\n  height: 40px;\n  cursor: grab;\n}\n\n.start-section__currier {\n  width: 200px;\n}\n\n.start-section__battleship {\n  width: 160px;\n}\n\n.start-section__destroyer {\n  width: 120px;\n}\n\n.start-section__submarine {\n  width: 80px;\n}\n\n.start-section__patrol-boat {\n  width: 40px;\n}\n\n.start-section__rotate-btn {\n  border: 0;\n  max-width: 100px;\n  background-color: var(--Navy-Blue);\n  color: var(--White);\n  font-size: 22px;\n  font-family: inherit;\n  padding: 12px 24px;\n  border-radius: 12px;\n  cursor: pointer;\n}\n\nfooter {\n  padding: 32px;\n  font-size: 20px;\n  align-self: stretch;\n  text-align: center;\n  background-color: var(--Navy-Blue);\n  color: var(--White);\n}\n\nfooter a {\n  text-decoration: none;\n  color: var(--White);\n}\n\nfooter a:is(:focus, :hover) {\n  text-decoration: underline;\n}\n\n.hidden {\n  display: none;\n}\n\n@media (width < 900px) {\n  main {\n    padding: 8px;\n  }\n  .game-container {\n    flex-direction: column;\n  }\n}\n\n@media (width < 500px) {\n  main {\n    padding: 8px;\n  }\n  .game-container {\n    flex-direction: column;\n  }\n  .game-container__board {\n    width: 300px;\n  }\n  .game-container__grid {\n    width: 300px;\n    height: 300px;\n  }\n  .start-section__ship-options > div {\n    height: 30px;\n  }\n\n  .start-section__currier {\n    width: 150px;\n  }\n\n  .start-section__battleship {\n    width: 120px;\n  }\n\n  .start-section__destroyer {\n    width: 90px;\n  }\n\n  .start-section__submarine {\n    width: 60px;\n  }\n\n  .start-section__patrol-boat {\n    width: 30px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;EACzB,gBAAgB;EAChB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,mCAAmC;AACrC;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,0CAA0C;EAC1C,WAAW;EACX,aAAa;EACb,WAAW;EACX,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kCAAkC;EAClC,mCAAmC;EACnC,eAAe;AACjB;;AAEA;;EAEE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,OAAO;EACP,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,SAAS;EACT,kBAAkB;EAClB,gBAAgB;EAChB,kCAAkC;EAClC,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,mBAAmB;AACrB;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,qCAAqC;EACrC,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,kCAAkC;EAClC,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,sBAAsB;EACxB;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --Navy-Blue: #001f3f;\n  --Light-Gray: #f8f8f8;\n  --Fire-Brick-Red: #b22222;\n  --White: #ffffff;\n  --Forest-Green: #228b22;\n  --Light-Coral: #f08080;\n}\n\nbody {\n  /* min-height: 100dvh; */\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  background-color: var(--Light-Gray);\n  color: var(--Navy-Blue);\n  font-family: 'Oswald', 'sans-serif';\n}\n\nmain {\n  margin-bottom: auto;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  font-size: 42px;\n  margin-bottom: 32px;\n}\n\n.game-container {\n  display: flex;\n  gap: 32px;\n}\n\n.game-container__board {\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.game-container__board--two {\n  position: relative;\n}\n\n.game-container__start-play-container {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.9);\n  z-index: 99;\n  padding: 32px;\n  width: 100%;\n  height: 92%;\n  font-size: 28px;\n  font-weight: 600;\n  color: inherit;\n}\n\n.game-container__start-display {\n  margin-bottom: 16px;\n}\n\n.game-container__grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--Navy-Blue);\n  border: 2px solid var(--Light-Gray);\n  cursor: pointer;\n}\n\n.game-container__row,\n.start-section__row {\n  flex: 1;\n  display: flex;\n}\n\n.game-container__cell {\n  flex: 1;\n  border: 1px solid var(--Light-Gray);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-container__cell.green {\n  background-color: var(--Forest-Green);\n}\n\n.game-container__cell.missed {\n  background-color: var(--Light-Coral);\n}\n\n.game-container__cell.hit {\n  background-color: var(--Fire-Brick-Red);\n}\n\n.game-container__player {\n  color: var(--Navy-Blue);\n  font-size: larger;\n  font-weight: 600;\n}\n\n.game-control-panel {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.game-control-panel__displayer {\n  font-size: 36px;\n  font-weight: 700;\n  margin-block: 16px;\n}\n\n.game-control-panel__restart-btn,\n.game-container__play-btn {\n  border: 0;\n  padding: 10px 16px;\n  min-width: 100px;\n  background-color: var(--Navy-Blue);\n  color: var(--White);\n  border-radius: 12px;\n  font-size: 22px;\n  font-family: inherit;\n  cursor: pointer;\n  margin-bottom: 16px;\n}\n\n.game-control-panel__restart-btn:is(:focus, :hover),\n.start-section__rotate-btn:is(:focus, :hover),\n.game-container__play-btn:is(:focus, :hover) {\n  opacity: 0.9;\n}\n\n.start-section {\n  font-size: 28px;\n  padding: 12px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.start-section__ship-options {\n  border: 5px solid var(--Navy-Blue);\n  padding: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  /* justify-content: space-between; */\n  align-items: center;\n  gap: 8px;\n  min-width: 150px;\n  min-height: 40px;\n}\n.start-section__ship-options > div {\n  background-color: var(--Forest-Green);\n  height: 40px;\n  cursor: grab;\n}\n\n.start-section__currier {\n  width: 200px;\n}\n\n.start-section__battleship {\n  width: 160px;\n}\n\n.start-section__destroyer {\n  width: 120px;\n}\n\n.start-section__submarine {\n  width: 80px;\n}\n\n.start-section__patrol-boat {\n  width: 40px;\n}\n\n.start-section__rotate-btn {\n  border: 0;\n  max-width: 100px;\n  background-color: var(--Navy-Blue);\n  color: var(--White);\n  font-size: 22px;\n  font-family: inherit;\n  padding: 12px 24px;\n  border-radius: 12px;\n  cursor: pointer;\n}\n\nfooter {\n  padding: 32px;\n  font-size: 20px;\n  align-self: stretch;\n  text-align: center;\n  background-color: var(--Navy-Blue);\n  color: var(--White);\n}\n\nfooter a {\n  text-decoration: none;\n  color: var(--White);\n}\n\nfooter a:is(:focus, :hover) {\n  text-decoration: underline;\n}\n\n.hidden {\n  display: none;\n}\n\n@media (width < 900px) {\n  main {\n    padding: 8px;\n  }\n  .game-container {\n    flex-direction: column;\n  }\n}\n\n@media (width < 500px) {\n  main {\n    padding: 8px;\n  }\n  .game-container {\n    flex-direction: column;\n  }\n  .game-container__board {\n    width: 300px;\n  }\n  .game-container__grid {\n    width: 300px;\n    height: 300px;\n  }\n  .start-section__ship-options > div {\n    height: 30px;\n  }\n\n  .start-section__currier {\n    width: 150px;\n  }\n\n  .start-section__battleship {\n    width: 120px;\n  }\n\n  .start-section__destroyer {\n    width: 90px;\n  }\n\n  .start-section__submarine {\n    width: 60px;\n  }\n\n  .start-section__patrol-boat {\n    width: 30px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom/displayController.js":
/*!**************************************!*\
  !*** ./src/dom/displayController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDirection": () => (/* binding */ changeDirection),
/* harmony export */   "changeDisplayer": () => (/* binding */ changeDisplayer),
/* harmony export */   "cleanUiBoard": () => (/* binding */ cleanUiBoard),
/* harmony export */   "createBoardGrid": () => (/* binding */ createBoardGrid),
/* harmony export */   "dragOver": () => (/* binding */ dragOver),
/* harmony export */   "dragStart": () => (/* binding */ dragStart),
/* harmony export */   "dropShip": () => (/* binding */ dropShip),
/* harmony export */   "getAttackCoordinates": () => (/* binding */ getAttackCoordinates),
/* harmony export */   "redisplayShipOptions": () => (/* binding */ redisplayShipOptions),
/* harmony export */   "redisplayStartContainer": () => (/* binding */ redisplayStartContainer),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "startPlaying": () => (/* binding */ startPlaying),
/* harmony export */   "touchEnd": () => (/* binding */ touchEnd),
/* harmony export */   "touchMove": () => (/* binding */ touchMove),
/* harmony export */   "touchStart": () => (/* binding */ touchStart)
/* harmony export */ });
/* eslint-disable no-param-reassign */
function createBoardRow(rowClass) {
  const row = document.createElement('div');
  row.classList.add(rowClass);
  return row;
}

function createBoardCell(colClass) {
  const cell = document.createElement('div');
  cell.classList.add(colClass);
  return cell;
}

const createBoardGrid = (parentSelector, rowClass, colClass) => {
  const parent = document.querySelector(parentSelector);
  const ROWS = 10;
  const COLUMNS = 10;
  for (let i = 0; i < ROWS; i += 1) {
    const row = createBoardRow(rowClass);
    row.dataset.rowIndex = i;
    for (let j = 0; j < COLUMNS; j += 1) {
      const col = createBoardCell(colClass);
      col.dataset.colIndex = j;
      row.appendChild(col);
    }
    parent.appendChild(row);
  }

  return parent;
};

const renderBoard = (boardGrid, boardData, playerName) => {
  for (let i = 0; i < boardData.length; i += 1) {
    for (let j = 0; j < boardData[i].length; j += 1) {
      if (
        boardData[i][j] !== '' &&
        !boardData[i][j].includes('x') &&
        playerName === 'Human'
      ) {
        boardGrid[i].children[j].classList.add('green');
      } else if (boardData[i][j] !== '' && boardData[i][j] === 'x') {
        boardGrid[i].children[j].classList.add('missed');
      } else if (boardData[i][j] !== '' && boardData[i][j].includes('x')) {
        boardGrid[i].children[j].classList.add('hit');
      }
    }
  }
};

const cleanUiBoard = (boardGrid) => {
  for (let i = 0; i < boardGrid.length; i += 1) {
    for (let j = 0; j < boardGrid[i].children.length; j += 1) {
      boardGrid[i].children[j].classList.remove('green');
      boardGrid[i].children[j].classList.remove('missed');
      boardGrid[i].children[j].classList.remove('hit');
    }
  }
};

const getAttackCoordinates = (target, coordinates) => {
  const coordinatesCopy = coordinates.slice(0);
  coordinatesCopy.push(Number(target.parentElement.dataset.rowIndex));
  coordinatesCopy.push(Number(target.dataset.colIndex));
  return coordinatesCopy;
};

const changeDisplayer = (phrase) => {
  const displayer = document.querySelector('.game-control-panel__displayer');
  displayer.textContent = phrase;
};

let draggedShip;
let direction = 'horizontal';
const shipNames = [
  'currier',
  'battleship',
  'destroyer',
  'submarine',
  'patrol boat',
];
const shipsLength = [5, 4, 3, 2, 1];

let hasAlreadyChosen = [];

function isSameStart(startRow, startCol) {
  for (let i = 0; i < hasAlreadyChosen.length; i += 1) {
    if (
      hasAlreadyChosen[i][0][0] === startRow &&
      hasAlreadyChosen[i][0][1] === startCol
    ) {
      return true;
    }
  }
  return false;
}

function isValidPosition(startRow, startCol, endRow, endCol) {
  for (let i = 0; i < hasAlreadyChosen.length; i += 1) {
    const chosenStartCol = hasAlreadyChosen[i][0][1];
    const chosenEndCol = hasAlreadyChosen[i][1][1];
    const chosenStartRow = hasAlreadyChosen[i][0][0];
    const chosenEndRow = hasAlreadyChosen[i][1][0];
    if (
      (startRow === chosenStartRow &&
        startCol > chosenStartCol &&
        startCol <= chosenEndCol) ||
      (startRow === chosenStartRow &&
        endCol > chosenStartCol &&
        endCol <= chosenEndCol)
    ) {
      return false;
    }
    if (
      (startCol === chosenStartCol &&
        startRow > chosenStartRow &&
        startRow <= chosenEndRow) ||
      (startCol === chosenStartCol &&
        endRow > chosenStartRow &&
        endRow <= chosenEndRow)
    ) {
      return false;
    }
  }
  return true;
}

function dragStart(e) {
  draggedShip = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dropShip(e) {
  let startRow;
  let startCol;
  let endRow;
  let endCol;

  const shipName = shipNames[draggedShip.id];
  const shipLength = shipsLength[draggedShip.id];
  // eslint-disable-next-line prefer-const
  startRow = Number(e.target.parentElement.dataset.rowIndex);

  // eslint-disable-next-line prefer-const
  startCol = Number(e.target.dataset.colIndex);

  if (direction === 'horizontal') {
    endRow = startRow;

    if (startCol + shipLength - 1 >= 10) return;
    endCol = startCol + shipLength - 1;
  } else {
    if (startRow + shipLength - 1 >= 10) return;
    endRow = startRow + shipLength - 1;
    endCol = startCol;
  }

  if (isSameStart(startRow, startCol)) return;
  if (!isValidPosition(startRow, startCol, endRow, endCol)) return;
  hasAlreadyChosen.push([
    [startRow, startCol],
    [endRow, endCol],
  ]);

  // hide dragged ship form ships options
  draggedShip.classList.add('hidden');
  // eslint-disable-next-line consistent-return
  return {
    shipName,
    shipLength,
    start: [startRow, startCol],
    end: [endRow, endCol],
  };
}

function changeDirection() {
  const directionDisplay = document.querySelector(
    '.start-section__axis-indicator'
  );
  directionDisplay.textContent =
    directionDisplay.textContent === 'axis: Horizontal'
      ? 'axis: Vertical'
      : 'axis: Horizontal';
  direction = direction === 'horizontal' ? 'vertical' : 'horizontal';
}

const shipsOptions = Array.from(
  document.querySelectorAll('.start-section__ship-options > div')
);
function isGameReady() {
  for (let i = 0; i < shipsOptions.length; i += 1) {
    if (!shipsOptions[i].classList.contains('hidden')) {
      return false;
    }
  }
  return true;
}

const startPlayContainer = document.querySelector(
  '.game-container__start-play-container'
);

function startPlaying() {
  if (isGameReady()) {
    startPlayContainer.classList.add('hidden');
  }
}

function redisplayStartContainer() {
  startPlayContainer.classList.remove('hidden');
}

function redisplayShipOptions() {
  shipsOptions.forEach((shipOption) => shipOption.classList.remove('hidden'));
  // reset tracking array for new ship positioning
  hasAlreadyChosen = [];
}

// for mobile browsers

let currentX;
let currentY;

function touchStart() {
  // console.log('touch start');
  // const touch = e.touches[0];
}

function touchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  currentX = touch.clientX;
  currentY = touch.clientY;
}

function touchEnd(e) {
  let startRow;
  let startCol;
  let endRow;
  let endCol;
  const gridCell = document.querySelector(
    '.game-container__grid--one .game-container__cell'
  );
  // Get the position of the grid container
  const gridContainer = document.querySelector('.game-container__grid--one');
  const gridXOffset = gridContainer.getBoundingClientRect().left;
  const gridYOffset = gridContainer.getBoundingClientRect().top;

  // Calculate the adjusted touch position relative to the grid container
  const cellWidth = gridCell.offsetWidth;
  const cellHeight = gridCell.offsetHeight;
  const adjustedTouchX = currentX + cellWidth / 2 - gridXOffset;
  const adjustedTouchY = currentY + cellHeight / 2 - gridYOffset;

  // eslint-disable-next-line prefer-const
  startRow = Math.round(adjustedTouchY / cellHeight) - 1;
  // eslint-disable-next-line prefer-const
  startCol = Math.round(adjustedTouchX / cellWidth) - 1;

  const shipName = shipNames[e.target.id];
  const shipLength = shipsLength[e.target.id];

  if (direction === 'horizontal') {
    endRow = startRow;

    if (startCol + shipLength - 1 >= 10) return;
    endCol = startCol + shipLength - 1;
  } else {
    if (startRow + shipLength - 1 >= 10) return;
    endRow = startRow + shipLength - 1;
    endCol = startCol;
  }

  if (isSameStart(startRow, startCol)) return;
  if (!isValidPosition(startRow, startCol, endRow, endCol)) return;
  hasAlreadyChosen.push([
    [startRow, startCol],
    [endRow, endCol],
  ]);

  // hide dragged ship form ships options
  e.target.classList.add('hidden');
  // eslint-disable-next-line consistent-return
  return {
    shipName,
    shipLength,
    start: [startRow, startCol],
    end: [endRow, endCol],
  };
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/game */ "./src/logic/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



// play the game
(0,_logic_game__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/logic/game.js":
/*!***************************!*\
  !*** ./src/logic/game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ play)
/* harmony export */ });
/* harmony import */ var _dom_displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/displayController */ "./src/dom/displayController.js");
/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardFactory */ "./src/logic/gameBoardFactory.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/logic/player.js");




// global variables to define the state of the game
let isHumanPlaying = true;
let isComputerPlaying = false;
let attackCoordinates = null;
let allReadyClicked = [];

// create players and boards
const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('Human');
const computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('Computer');
const humanBoard = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(); // for humanPlayer
const computerBoard = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(); // for computer

// place ships of computer
const shipsCoord = computer.generateRandomShipCoords();

computerBoard.placeShipAt(shipsCoord[0][0], shipsCoord[0][1], 5, 'currier');
computerBoard.placeShipAt(shipsCoord[1][0], shipsCoord[1][1], 4, 'battleship');
computerBoard.placeShipAt(shipsCoord[2][0], shipsCoord[2][1], 3, 'destroyer');
computerBoard.placeShipAt(shipsCoord[3][0], shipsCoord[3][1], 2, 'submarine');
computerBoard.placeShipAt(shipsCoord[4][0], shipsCoord[4][1], 1, 'patrol boat');

// create UI boards
const uiHumanBoard = (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.createBoardGrid)(
  '.game-container__grid--one',
  'game-container__row',
  'game-container__cell'
);
const uiComputerBoard = (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.createBoardGrid)(
  '.game-container__grid--two',
  'game-container__row',
  'game-container__cell'
);

// render UI boards
(0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(uiHumanBoard.children, humanBoard.gameBoard, humanPlayer.name);
(0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(uiComputerBoard.children, computerBoard.gameBoard, computer.name);

// select and place human player ships
const shipOptionsContainer = document.querySelector(
  '.start-section__ship-options'
);

const shipOptions = Array.from(shipOptionsContainer.children);
const allHumanPlayerBoardCells = Array.from(
  document.querySelectorAll('.game-container__grid--one .game-container__cell')
);

shipOptions.forEach((shipOption) =>
  shipOption.addEventListener('dragstart', _dom_displayController__WEBPACK_IMPORTED_MODULE_0__.dragStart)
);

allHumanPlayerBoardCells.forEach((playerCell) => {
  playerCell.addEventListener('dragover', _dom_displayController__WEBPACK_IMPORTED_MODULE_0__.dragOver);
  playerCell.addEventListener('drop', (e) => {
    const humanShip = (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.dropShip)(e);
    if (humanShip) {
      humanBoard.placeShipAt(
        humanShip.start,
        humanShip.end,
        humanShip.shipLength,
        humanShip.shipName
      );
      (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(
        uiHumanBoard.children,
        humanBoard.gameBoard,
        humanPlayer.name
      );
    }
  });
});

// for mobile browsers
shipOptions.forEach((shipOption) => {
  shipOption.addEventListener('touchstart', _dom_displayController__WEBPACK_IMPORTED_MODULE_0__.touchStart);
  shipOption.addEventListener('touchmove', _dom_displayController__WEBPACK_IMPORTED_MODULE_0__.touchMove);
  shipOption.addEventListener('touchend', (e) => {
    const humanShip = (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.touchEnd)(e);
    if (humanShip) {
      humanBoard.placeShipAt(
        humanShip.start,
        humanShip.end,
        humanShip.shipLength,
        humanShip.shipName
      );
      (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(
        uiHumanBoard.children,
        humanBoard.gameBoard,
        humanPlayer.name
      );
    }
  });
});

// rotate Btn
const rotateBtn = document.querySelector('.start-section__rotate-btn');
rotateBtn.addEventListener('click', _dom_displayController__WEBPACK_IMPORTED_MODULE_0__.changeDirection);

// start play Btn
const playBtn = document.querySelector('.game-container__play-btn');
playBtn.addEventListener('click', _dom_displayController__WEBPACK_IMPORTED_MODULE_0__.startPlaying);

// restart Btn
const restartBtn = document.querySelector('.game-control-panel__restart-btn');
restartBtn.addEventListener('click', () => {
  // reset game state variables to default values
  isHumanPlaying = true;
  isComputerPlaying = false;
  attackCoordinates = null;
  allReadyClicked = [];

  // reset game UI to start state
  (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.redisplayStartContainer)();
  (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.redisplayShipOptions)();
  (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.changeDisplayer)('Your turn');
  humanPlayer.cleanHits();
  computer.cleanHits();
  humanBoard.cleanGameBoard();
  computerBoard.cleanGameBoard();
  humanBoard.cleanShips();
  computerBoard.cleanShips();
  (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.cleanUiBoard)(uiHumanBoard.children);
  (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.cleanUiBoard)(uiComputerBoard.children);

  // get new Random coords for computer
  const newShipsCoord = computer.generateRandomShipCoords();
  // set new places for computer's ships
  computerBoard.placeShipAt(
    newShipsCoord[0][0],
    newShipsCoord[0][1],
    5,
    'currier'
  );
  computerBoard.placeShipAt(
    newShipsCoord[1][0],
    newShipsCoord[1][1],
    4,
    'battleship'
  );
  computerBoard.placeShipAt(
    newShipsCoord[2][0],
    newShipsCoord[2][1],
    3,
    'destroyer'
  );
  computerBoard.placeShipAt(
    newShipsCoord[3][0],
    newShipsCoord[3][1],
    2,
    'submarine'
  );
  computerBoard.placeShipAt(
    newShipsCoord[4][0],
    newShipsCoord[4][1],
    1,
    'patrol boat'
  );

  // rerender game UI
  (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(uiHumanBoard.children, humanBoard.gameBoard, humanPlayer.name);
  (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(uiComputerBoard.children, computerBoard.gameBoard, computer.name);
});

// check winner
const isWinner = (gameBoard) => gameBoard.allAreSunk();

// check if clicked before
const hasBeenClicked = (clicksList, coordinates) => {
  for (let i = 0; i < clicksList.length; i += 1) {
    if (
      clicksList[i][0] === coordinates[0] &&
      clicksList[i][1] === coordinates[1]
    ) {
      return true;
    }
  }
  return false;
};

// game loop
function play() {
  uiComputerBoard.addEventListener('click', (e) => {
    if (isHumanPlaying) {
      attackCoordinates = (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.getAttackCoordinates)(e.target, []);
      if (hasBeenClicked(allReadyClicked, attackCoordinates)) return;
      allReadyClicked.push(attackCoordinates);

      if (attackCoordinates) {
        const [row, col] = attackCoordinates;
        humanPlayer.humanAttack(row, col, computerBoard);
        isHumanPlaying = false;
        isComputerPlaying = true;
        (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.changeDisplayer)("Computer's turn");
        (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(
          uiComputerBoard.children,
          computerBoard.gameBoard,
          computer.name
        );
        if (isWinner(computerBoard)) {
          (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.changeDisplayer)('Human player Wins!');
          isComputerPlaying = false; // to stop the game
        }
      }
    }
    if (isComputerPlaying) {
      // setTimeout to prevent instant play form computer
      setTimeout(() => {
        computer.computerAttack(humanBoard);
        isComputerPlaying = false;
        isHumanPlaying = true;
        (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.changeDisplayer)('Your turn');
        (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(
          uiHumanBoard.children,
          humanBoard.gameBoard,
          humanPlayer.name
        );
        if (isWinner(humanBoard)) {
          (0,_dom_displayController__WEBPACK_IMPORTED_MODULE_0__.changeDisplayer)('Computer Wins!');
          isHumanPlaying = false; // to stop the game
        }
      }, 1500);
    }
  });
}


/***/ }),

/***/ "./src/logic/gameBoardFactory.js":
/*!***************************************!*\
  !*** ./src/logic/gameBoardFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoardFactory)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/logic/shipFactory.js");
/* eslint-disable no-prototype-builtins */


function gameBoardFactory() {
  const gameBoard = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];

  let ships = {};

  // method to remove more than one extra x
  const removeX = (string) => {
    if (string.length > 1 && string.includes('x')) {
      return string.slice(0, -1);
    }
    return string;
  };

  const placeShipAt = (start, end, length, name) => {
    if (start == null || !Array.isArray(start))
      throw new Error('Invalid ship start');
    if (end == null || !Array.isArray(end)) throw new Error('Invalid ship end');

    const [startRow, startCol] = start;
    const [endRow, endCol] = end;

    if (
      startRow > gameBoard.length ||
      startRow > gameBoard.length ||
      startRow < 0 ||
      startRow < 0
    )
      return;
    if (
      startCol > gameBoard.length ||
      startCol > gameBoard.length ||
      startCol < 0 ||
      startCol < 0
    )
      return;
    if (
      endRow > gameBoard.length ||
      endRow > gameBoard.length ||
      endRow < 0 ||
      endRow < 0
    )
      return;
    if (
      endCol > gameBoard.length ||
      endCol > gameBoard.length ||
      endCol < 0 ||
      endCol < 0
    )
      return;

    // create ship
    const ship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(length, name);
    // add ship to ships obj to track added ships and prevent duplication
    if (!ships[ship.name]) ships[ship.name] = ship;

    // if horizontal with different cols
    if (startRow === endRow && startCol !== endCol) {
      for (let i = startCol; i < endCol + 1; i += 1) {
        if (gameBoard[startRow][i] === '') {
          gameBoard[startRow][i] = ship.name;
        }
      }
      // if vertical with different rows
    } else if (startCol === endCol && startRow !== endRow) {
      for (let i = startRow; i < endRow + 1; i += 1) {
        if (gameBoard[i][startCol] === '') {
          gameBoard[i][startCol] = ship.name;
        }
      }
      // if have same end row and end col
    } else if (startRow !== startCol && gameBoard[startRow][startCol] === '') {
      gameBoard[startRow][startCol] = ship.name;
      // if have same start row and start col
    } else if (startRow === startCol && gameBoard[startRow][startRow] === '') {
      gameBoard[startRow][startRow] = ship.name;
    }
  };

  const receiveAttack = (row, col) => {
    if (row == null || typeof row !== 'number')
      throw new Error('invalid row index/coordinate');
    if (col == null || typeof col !== 'number')
      throw new Error('invalid col index/coordinate');
    if (row > gameBoard.length - 1 || row < 0) return;
    if (col > gameBoard[0].length - 1 || col < 0) return;

    if (
      gameBoard[row][col] !== '' &&
      gameBoard[row][col] !== 'x' &&
      !gameBoard[row][col].includes('x')
    ) {
      ships[gameBoard[row][col]].hit();
      gameBoard[row][col] += 'x'; // ship name + x for hit ship's part
      return;
    }
    if (
      gameBoard[row][col] !== '' &&
      gameBoard[row][col] !== 'x' &&
      gameBoard[row][col].includes('x')
    ) {
      const shipName = removeX(gameBoard[row][col]);
      ships[shipName].hit();
      return;
    }
    gameBoard[row][col] = 'x'; // letter X here for missed shots
  };

  const fillAroundSunkShip = () => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      for (let j = 0; j < gameBoard[i].length; j += 1) {
        if (ships[removeX(gameBoard[i][j])] == null) {
          // eslint-disable-next-line no-continue
          continue;
        } else if (ships[removeX(gameBoard[i][j])].isSunk()) {
          // try all possible attacks coordinates, invalid coordinates will be handled by receiveAttack()
          receiveAttack(i - 1, j);
          receiveAttack(i + 1, j);
          receiveAttack(i, j - 1);
          receiveAttack(i, j + 1);
          receiveAttack(i - 1, j - 1);
          receiveAttack(i + 1, j + 1);
          receiveAttack(i + 1, j - 1);
          receiveAttack(i - 1, j + 1);
        }
      }
    }
  };

  const allAreSunk = () => {
    const areSunk = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const shipName in ships) {
      if (ships.hasOwnProperty(shipName)) {
        areSunk.push(ships[shipName].isSunk());
      }
    }
    return areSunk.every((statement) => statement === true);
  };

  const cleanGameBoard = () => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      for (let j = 0; j < gameBoard[i].length; j += 1) {
        gameBoard[i][j] = '';
      }
    }
  };

  const cleanShips = () => {
    ships = {};
  };

  const isPlaceAlreadyHit = (row, col) => {
    if (gameBoard[row][col].includes('x')) {
      return true;
    }
    return false;
  };

  return {
    gameBoard,
    placeShipAt,
    receiveAttack,
    allAreSunk,
    fillAroundSunkShip,
    cleanGameBoard,
    cleanShips,
    isPlaceAlreadyHit,
  };
}


/***/ }),

/***/ "./src/logic/player.js":
/*!*****************************!*\
  !*** ./src/logic/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function Player(name) {
  let hitCoordinates = [];

  const hasAlreadyHit = (row, col) => {
    for (let i = 0; i < hitCoordinates.length; i += 1) {
      if (hitCoordinates[i][0] === row && hitCoordinates[i][1] === col)
        return true;
    }
    return false;
  };

  const humanAttack = (row, col, gameBoard) => {
    if (
      row == null ||
      col == null ||
      typeof row !== 'number' ||
      typeof col !== 'number'
    )
      throw Error('invalid row or col');
    if (gameBoard == null) throw Error('no gameBoard passed');
    if (hasAlreadyHit(row, col)) return;
    hitCoordinates.push([row, col]);
    gameBoard.receiveAttack(row, col);
    gameBoard.fillAroundSunkShip();
  };

  const computerAttack = (gameBoard) => {
    if (gameBoard == null) throw Error('no gameBoard passed');
    if (hitCoordinates.length === 100) return;
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);

    while (hasAlreadyHit(row, col) && gameBoard.isPlaceAlreadyHit(row, col)) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    }
    hitCoordinates.push([row, col]);
    gameBoard.receiveAttack(row, col);
    gameBoard.fillAroundSunkShip();
  };

  const generateRandomShipCoords = () => {
    const grid = Array(10)
      .fill()
      .map(() => Array(10).fill(0));
    const coords = [];

    const shipLengths = [5, 4, 3, 2, 1];

    // eslint-disable-next-line no-restricted-syntax
    for (const length of shipLengths) {
      let startRow;
      let startCol;
      let endRow;
      let endCol;
      let axis;
      let overlaps = true;

      // keep generating random coords and axis until valid ones
      while (overlaps) {
        startRow = Math.floor(Math.random() * 10);
        startCol = Math.floor(Math.random() * 10);
        axis = Math.random() > 0.5 ? 'horizontal' : 'vertical';

        // generate end coords based on length and axis of ship
        if (axis === 'horizontal') {
          endRow = startRow;
          if (startCol + length - 1 >= 10) {
            startCol = Math.floor(Math.random() * (11 - length));
          }
          endCol = startCol + length - 1;
        } else {
          if (startRow + length - 1 >= 10) {
            startRow = Math.floor(Math.random() * (11 - length));
          }
          endRow = startRow + length - 1;
          endCol = startCol;
        }

        overlaps = false;
        for (let i = startRow - 1; i <= endRow + 1; i += 1) {
          for (let j = startCol - 1; j <= endCol + 1; j += 1) {
            if (i >= 0 && i < 10 && j >= 0 && j < 10 && grid[i][j] === '#') {
              overlaps = true;
              break;
            }
          }
          if (overlaps) break;
        }
      }

      // mark the ship's location in the grid
      for (let i = startRow; i <= endRow; i += 1) {
        for (let j = startCol; j <= endCol; j += 1) {
          grid[i][j] = '#';
        }
      }

      // add the ship's start and end coordinates to the list of coordinates
      coords.push([
        [startRow, startCol],
        [endRow, endCol],
      ]);
    }

    return coords;
  };

  const cleanHits = () => {
    hitCoordinates = [];
  };

  return {
    name,
    humanAttack,
    computerAttack,
    generateRandomShipCoords,
    cleanHits,
  };
}


/***/ }),

/***/ "./src/logic/shipFactory.js":
/*!**********************************!*\
  !*** ./src/logic/shipFactory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipFactory)
/* harmony export */ });
function shipFactory(length, name) {
  let hits = 0;

  const hit = () => {
    if (length == null || typeof length !== 'number')
      throw new Error('invalid inputs');
    hits += 1;
  };

  const getHits = () => hits;

  const isSunk = () => {
    if (length == null || typeof length !== 'number')
      throw new Error('invalid inputs');
    if (hits >= length) return true;
    return false;
  };

  return {
    name,
    hit,
    getHits,
    isSunk,
  };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=bundle8f3f966daf875d1bcad5.js.map