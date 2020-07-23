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
exports.DiscountOnLastExperience = void 0;
var discount_rule_1 = require("./discount-rule");
var DiscountOnLastExperience = /** @class */ (function (_super) {
    __extends(DiscountOnLastExperience, _super);
    function DiscountOnLastExperience(ruleQuantity, description, discountPercentage) {
        var _this = _super.call(this, ruleQuantity, description) || this;
        _this.discountPercentage = discountPercentage;
        return _this;
    }
    DiscountOnLastExperience.prototype.applyDiscount = function (orderItem) {
        var discountedItemQuantity = Math.floor(orderItem.quantity / this.ruleQuantity);
        if (discountedItemQuantity) {
            var totalDiscount = (this.discountPercentage / 100) *
                (orderItem.event.cost * discountedItemQuantity);
            orderItem.totalDiscount += totalDiscount;
        }
    };
    return DiscountOnLastExperience;
}(discount_rule_1.DiscountRule));
exports.DiscountOnLastExperience = DiscountOnLastExperience;
