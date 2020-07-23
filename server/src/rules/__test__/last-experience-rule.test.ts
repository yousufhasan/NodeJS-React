import { DiscountOnLastExperience } from "../last-experience-rule";
import { IOrderItem } from "../../classes/order";

describe("DiscountOnLastExperienceRule", () => {
  it("doesnt add discount when order item has lower than rule quantity", () => {
    const discountAdditonalItemFree = new DiscountOnLastExperience(
      5,
      "Buy 5, Get 20% off the 5th experience",
      10
    );
    const orderItem: IOrderItem = {
      quantity: 4,
      event: { id: 1, name: "test", cost: 150 },
      freeCount: 0,
      totalDiscount: 0,
    };
    discountAdditonalItemFree.applyDiscount(orderItem);

    expect(orderItem.totalDiscount).toEqual(0);
  });

  it("adds discount when order item has equal or more than rule quantity", () => {
    const discountAdditonalItemFree = new DiscountOnLastExperience(
      5,
      "Buy 5, Get 20% off the 5th experience",
      10
    );
    const orderItem: IOrderItem = {
      quantity: 5,
      event: { id: 1, name: "test", cost: 200 },
      freeCount: 0,
      totalDiscount: 0,
    };
    discountAdditonalItemFree.applyDiscount(orderItem);

    expect(orderItem.totalDiscount).toEqual(20);
  });
});
