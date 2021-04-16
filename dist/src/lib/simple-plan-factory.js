"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
exports.SimplePlanFactory = void 0;
var abstract_plan_factory_1 = require("./abstract-plan-factory");
var simple_plan_1 = require("./simple-plan");
var SimplePlanFactory = /** @class */ (function (_super) {
  __extends(SimplePlanFactory, _super);
  function SimplePlanFactory() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  SimplePlanFactory.prototype.createSimplePlan = function (
    character,
    notes,
    description
  ) {
    return new simple_plan_1.SimplePlan(character, notes, description);
  };
  return SimplePlanFactory;
})(abstract_plan_factory_1.AbstractPlanFactory);
exports.SimplePlanFactory = SimplePlanFactory;
//# sourceMappingURL=simple-plan-factory.js.map
