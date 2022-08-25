/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var tableList = document.querySelector('.table-list');

var display = function display() {
  array.forEach(function (element) {
    tableList.innerHTML = "<tr class=\"tr-data\">\n        <td>".concat(array[element.name], "</td>\n        <td>").concat(array[element.score], "</td>\n    </tr>");
  });
  console.log('Hello World');
};
/******/ })()
;
//# sourceMappingURL=main.js.map