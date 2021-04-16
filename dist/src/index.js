"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
var App_1 = __importDefault(require("./App"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
var react_router_dom_1 = require("react-router-dom");
var PlanSingle_1 = require("./components/PlanSingle");
var Header_1 = require("./components/Header");
var react_bootstrap_1 = require("react-bootstrap");
var PlanNew_1 = require("./components/PlanNew");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_bootstrap_1.Container, null,
            react_1["default"].createElement(Header_1.Header, null),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", exact: true, render: function () {
                    return (react_1["default"].createElement(App_1["default"], null));
                } }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/new_plan", render: function () {
                    return (react_1["default"].createElement(PlanNew_1.PlanNew, null));
                } }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/:character/plan", render: function (props) {
                    var character = props.match.params.character;
                    return (character ? react_1["default"].createElement(PlanSingle_1.PlanSingle, { character: character }) : react_1["default"].createElement(react_1["default"].Fragment, null, "Character not found"));
                } })))), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
//# sourceMappingURL=index.js.map