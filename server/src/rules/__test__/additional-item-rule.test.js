"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var additional_item_rule_1 = require("../additional-item-rule");
describe("DiscountAdditonalItemFreeRule", function () {
    it("doesnt add additional item when order item has lower than rule quantity", function () {
        var discountAdditonalItemFree = new additional_item_rule_1.DiscountAdditonalItemFree(2, "Buy 2, get 1 free", 1);
        var orderItem = {
            quantity: 1,
            event: { id: 1, name: "test", cost: 100 },
            freeCount: 0,
            totalDiscount: 0,
        };
        discountAdditonalItemFree.applyDiscount(orderItem);
        expect(orderItem.freeCount).toEqual(0);
        expect(orderItem.totalDiscount).toEqual(0);
    });
    it("adds additional item when order item has equal or more than rule quantity", function () {
        var discountAdditonalItemFree = new additional_item_rule_1.DiscountAdditonalItemFree(4, "Buy 4, get 2 free", 2);
        var orderItem = {
            quantity: 4,
            event: { id: 1, name: "test", cost: 100 },
            freeCount: 0,
            totalDiscount: 0,
        };
        discountAdditonalItemFree.applyDiscount(orderItem);
        expect(orderItem.freeCount).toEqual(2);
    });
    it("calculates the correct discount item has equal or more than rule quantity", function () {
        var discountAdditonalItemFree = new additional_item_rule_1.DiscountAdditonalItemFree(4, "Buy 4, get 2 free", 2);
        var orderItem = {
            quantity: 4,
            event: { id: 1, name: "test", cost: 100 },
            freeCount: 0,
            totalDiscount: 0,
        };
        discountAdditonalItemFree.applyDiscount(orderItem);
        expect(orderItem.totalDiscount).toEqual(200);
    });
});
