"use strict";
exports.__esModule = true;
exports.PlanSingle = void 0;
var react_bootstrap_1 = require("react-bootstrap");
var react_router_1 = require("react-router");
function PlanSingle(props) {
  var location = react_router_1.useLocation();
  if (location.state) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        react_bootstrap_1.Row,
        null,
        React.createElement(
          react_bootstrap_1.Col,
          { md: "12", className: "border border-primary pt-1 pb-1" },
          React.createElement("h3", null, location.state.character)
        )
      ),
      React.createElement(
        react_bootstrap_1.Row,
        null,
        React.createElement(
          react_bootstrap_1.Col,
          { md: "12" },
          React.createElement("h4", null, "Notes"),
          React.createElement("p", null, location.state.notes)
        )
      )
    );
  }
  return React.createElement("h2", null, "No plan yet!");
}
exports.PlanSingle = PlanSingle;
//# sourceMappingURL=PlanSingle.js.map
