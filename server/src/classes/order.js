"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var seed_data_1 = require("../../seed-data");
var Order = /** @class */ (function () {
    function Order(id, items) {
        this.id = id;
        this.items = items;
    }
    Order.prototype.applyDiscountsOnEachOrderItem = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            this.resetOrderDiscount(item);
            this.applyAllDiscountRules(item);
        }
    };
    Order.prototype.applyAllDiscountRules = function (item) {
        var event = seed_data_1.events.find(function (evt) { return evt.id === item.event.id; });
        for (var _i = 0, _a = event.discounts; _i < _a.length; _i++) {
            var rule = _a[_i];
            rule.applyDiscount(item);
        }
    };
    Order.prototype.resetOrderDiscount = function (item) {
        item.freeCount = 0;
        item.totalDiscount = 0;
    };
    return Order;
}());
exports.Order = Order;
