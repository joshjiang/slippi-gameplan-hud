"use strict";
exports.__esModule = true;
exports.AbstractPlan = void 0;
var uuid_1 = require("uuid");
var AbstractPlan = /** @class */ (function () {
    function AbstractPlan(character, notes) {
        this.character = character;
        this.notes = notes;
        this.id = uuid_1.v4();
        this.timeLastUpdated = Date.now();
    }
    return AbstractPlan;
}());
exports.AbstractPlan = AbstractPlan;
//# sourceMappingURL=abstract-plan.js.map