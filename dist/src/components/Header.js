"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
function Header() {
    return (React.createElement(react_bootstrap_1.Row, null,
        React.createElement(react_bootstrap_1.Col, { md: "12", className: "mt-5 pt-2 bg-light" },
            React.createElement("h2", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "Gameplans")),
            React.createElement("hr", null))));
}
exports.Header = Header;
//# sourceMappingURL=Header.js.map