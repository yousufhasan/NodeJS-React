"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var last_experience_rule_1 = require("../last-experience-rule");
describe("DiscountOnLastExperienceRule", function () {
    it("doesnt add discount when order item has lower than rule quantity", function () {
        var discountAdditonalItemFree = new last_experience_rule_1.DiscountOnLastExperience(5, "Buy 5, Get 20% off the 5th experience", 10);
        var orderItem = {
            quantity: 4,
            event: { id: 1, name: "test", cost: 150 },
            freeCount: 0,
            totalDiscount: 0,
        };
        discountAdditonalItemFree.applyDiscount(orderItem);
        expect(orderItem.totalDiscount).toEqual(0);
    });
    it("adds discount when order item has equal or more than rule quantity", function () {
        var discountAdditonalItemFree = new last_experience_rule_1.DiscountOnLastExperience(5, "Buy 5, Get 20% off the 5th experience", 10);
        var orderItem = {
            quantity: 5,
            event: { id: 1, name: "test", cost: 200 },
            freeCount: 0,
            totalDiscount: 0,
        };
        discountAdditonalItemFree.applyDiscount(orderItem);
        expect(orderItem.totalDiscount).toEqual(20);
    });
});
