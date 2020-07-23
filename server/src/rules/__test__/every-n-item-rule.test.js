"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var every_n_item_rule_1 = require("../every-n-item-rule");
describe("DiscountOnEveryNItemsRule", function () {
    it("doesnt add discount when order item has lower than rule quantity", function () {
        var discountAdditonalItemFree = new every_n_item_rule_1.DiscountOnEveryNItems(2, "Buy 2 for $200", 100);
        var orderItem = {
            quantity: 1,
            event: { id: 1, name: "test", cost: 150 },
            freeCount: 0,
            totalDiscount: 0,
        };
        discountAdditonalItemFree.applyDiscount(orderItem);
        expect(orderItem.totalDiscount).toEqual(0);
    });
    it("adds discount when order item has equal or more than rule quantity", function () {
        var discountAdditonalItemFree = new every_n_item_rule_1.DiscountOnEveryNItems(2, "Buy 2 for $200", 100);
        var orderItem = {
            quantity: 2,
            event: { id: 1, name: "test", cost: 150 },
            freeCount: 0,
            totalDiscount: 0,
        };
        discountAdditonalItemFree.applyDiscount(orderItem);
        expect(orderItem.totalDiscount).toEqual(100);
        discountAdditonalItemFree = new every_n_item_rule_1.DiscountOnEveryNItems(4, "Buy 2 for $200", 150);
        orderItem = {
            quantity: 4,
            event: { id: 1, name: "test", cost: 150 },
            freeCount: 0,
            totalDiscount: 0,
        };
        discountAdditonalItemFree.applyDiscount(orderItem);
        expect(orderItem.totalDiscount).toEqual(150);
    });
});
