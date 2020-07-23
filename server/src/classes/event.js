"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var Event = /** @class */ (function () {
    function Event(id, name, cost) {
        this.discounts = [];
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
    Event.prototype.addPromotion = function (rule) {
        this.discounts.push(rule);
    };
    return Event;
}());
exports.Event = Event;
