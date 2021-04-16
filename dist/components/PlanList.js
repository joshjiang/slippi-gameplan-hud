"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PlanList = void 0;
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
var characters_json_1 = __importDefault(require("../config/characters.json"));
function PlanList() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Row, null,
            React.createElement(react_bootstrap_1.Col, { md: "12", className: "p-3 font-weight-bold" },
                React.createElement(react_bootstrap_1.Row, null,
                    React.createElement(react_bootstrap_1.Col, { xs: "12", className: "mb-2" },
                        React.createElement(react_router_dom_1.Link, { to: "/new_plan" },
                            React.createElement(react_bootstrap_1.Button, { variant: "success" }, "+ Create Plan"))),
                    React.createElement(react_bootstrap_1.Col, { xs: "4" }, "Character"),
                    React.createElement(react_bootstrap_1.Col, { xs: "4" }, "Updated"))),
            React.createElement(react_bootstrap_1.Col, { md: "12" }, characterRows()))));
}
exports.PlanList = PlanList;
function characterRows() {
    var rows = [];
    for (var i in characters_json_1["default"].Characters) {
        var character = characters_json_1["default"].Characters[i];
        rows.push(React.createElement(react_router_dom_1.Link, { to: "/" + character.name + "/plan" },
            React.createElement(react_bootstrap_1.Row, { className: "border-bottom align-center bg-light p-2" },
                React.createElement(react_bootstrap_1.Col, { xs: "4" }, character.name),
                React.createElement(react_bootstrap_1.Col, { xs: "4" }, character.updated))));
    }
    return rows;
}
//# sourceMappingURL=PlanList.js.map