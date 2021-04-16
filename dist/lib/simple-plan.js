"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SimplePlan = void 0;
var abstract_plan_1 = require("./abstract-plan");
var SimplePlan = /** @class */ (function (_super) {
    __extends(SimplePlan, _super);
    function SimplePlan(character, notes, description) {
        var _this = _super.call(this, character, notes) || this;
        _this.description = description;
        return _this;
    }
    return SimplePlan;
}(abstract_plan_1.AbstractPlan));
exports.SimplePlan = SimplePlan;
//# sourceMappingURL=simple-plan.js.map