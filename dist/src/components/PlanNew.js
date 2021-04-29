"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.PlanNew = void 0;
var react_1 = __importStar(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
var characters_json_1 = __importDefault(require("../config/characters.json"));
var simple_plan_factory_1 = require("../lib/simple-plan-factory");
function PlanNew() {
  var _a = react_1.useState(""),
    note = _a[0],
    setNote = _a[1];
  var _b = react_1.useState("Fox"),
    character = _b[0],
    setCharacter = _b[1];
  var history = react_router_dom_1.useHistory();
  function handleNoteUpdate(event) {
    setNote(event.target.value);
  }
  function handleCharacterUpdate(event) {
    setCharacter(event.target.value);
  }
  function handleSubmit() {
    var plan = new simple_plan_factory_1.SimplePlanFactory().createSimplePlan(
      character,
      note,
      "Description"
    );
    alert("created plan for " + character);
    history.push({
      pathname: "/" + character + "/plan",
      state: {
        id: plan.id,
        notes: plan.notes,
        character: plan.character,
      },
    });
  }
  function getOptionsChars() {
    var chars = [];
    characters_json_1["default"].Characters.forEach(function (char) {
      chars.push(
        react_1["default"].createElement(
          "option",
          { key: char.name },
          char.name
        )
      );
    });
    return chars;
  }
  return react_1["default"].createElement(
    react_1["default"].Fragment,
    null,
    react_1["default"].createElement("h4", null, "New Plan"),
    react_1["default"].createElement(
      react_bootstrap_1.Form,
      null,
      react_1["default"].createElement(
        react_bootstrap_1.Form.Group,
        null,
        react_1["default"].createElement(
          react_bootstrap_1.Form.Label,
          null,
          "Character"
        ),
        react_1["default"].createElement(
          react_bootstrap_1.Form.Control,
          {
            as: "select",
            defaultValue: character,
            onChange: handleCharacterUpdate,
          },
          getOptionsChars()
        ),
        react_1["default"].createElement(
          react_bootstrap_1.Form.Label,
          null,
          "Notes"
        ),
        react_1["default"].createElement(react_bootstrap_1.Form.Control, {
          as: "textarea",
          rows: 10,
          className: "mb-4",
          value: note,
          onChange: handleNoteUpdate,
        }),
        react_1["default"].createElement(
          react_bootstrap_1.Button,
          { onClick: handleSubmit },
          "Save"
        )
      )
    )
  );
}
exports.PlanNew = PlanNew;
//# sourceMappingURL=PlanNew.js.map
