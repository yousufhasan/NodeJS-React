"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountAdditonalItemFree = void 0;
var discount_rule_1 = require("./discount-rule");
var DiscountAdditonalItemFree = /** @class */ (function (_super) {
    __extends(DiscountAdditonalItemFree, _super);
    function DiscountAdditonalItemFree(ruleQuantity, description, freeItem) {
        var _this = _super.call(this, ruleQuantity, description) || this;
        _this.freeItem = freeItem;
        return _this;
    }
    DiscountAdditonalItemFree.prototype.applyDiscount = function (orderItem) {
        orderItem.freeCount +=
            (Math.floor(orderItem.quantity / this.ruleQuantity) * this.freeItem);
        orderItem.totalDiscount +=
            (Math.floor(orderItem.quantity / this.ruleQuantity) *
                orderItem.event.cost *
                this.freeItem);
    };
    return DiscountAdditonalItemFree;
}(discount_rule_1.DiscountRule));
exports.DiscountAdditonalItemFree = DiscountAdditonalItemFree;
