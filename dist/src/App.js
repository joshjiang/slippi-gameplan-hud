"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("./App.css");
var PlanList_1 = require("./components/PlanList");
require("bootstrap/dist/css/bootstrap.min.css");
function App() {
  return react_1["default"].createElement(PlanList_1.PlanList, null);
}
exports["default"] = App;
//# sourceMappingURL=App.js.map
