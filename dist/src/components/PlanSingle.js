"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PlanSingle = void 0;
var react_bootstrap_1 = require("react-bootstrap");
var react_router_1 = require("react-router");
var react_1 = __importDefault(require("react"));
function PlanSingle(props) {
    var location = react_router_1.useLocation();
    if (location.state) {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_bootstrap_1.Row, null,
                react_1["default"].createElement(react_bootstrap_1.Col, { md: "12", className: "border border-primary pt-1 pb-1" },
                    react_1["default"].createElement("h3", null, location.state.character))),
            react_1["default"].createElement(react_bootstrap_1.Row, null,
                react_1["default"].createElement(react_bootstrap_1.Col, { md: "12" },
                    react_1["default"].createElement("h4", null, "Notes"),
                    react_1["default"].createElement("p", null, location.state.notes)))));
    }
    return (react_1["default"].createElement("h2", null, "No plan yet!"));
}
exports.PlanSingle = PlanSingle;
//# sourceMappingURL=PlanSingle.js.map