import { DiscountOnEveryNItems } from "../every-n-item-rule";
import { IOrderItem } from "../../classes/order";

describe("DiscountOnEveryNItemsRule", () => {
  it("doesnt add discount when order item has lower than rule quantity", () => {
    const discountAdditonalItemFree = new DiscountOnEveryNItems(
      2,
      "Buy 2 for $200",
      100
    );
    const orderItem: IOrderItem = {
      quantity: 1,
      event: { id: 1, name: "test", cost: 150 },
      freeCount: 0,
      totalDiscount: 0,
    };
    discountAdditonalItemFree.applyDiscount(orderItem);

    expect(orderItem.totalDiscount).toEqual(0);
  });

  it("adds discount when order item has equal or more than rule quantity", () => {
    let discountAdditonalItemFree = new DiscountOnEveryNItems(
      2,
      "Buy 2 for $200",
      100
    );
    let orderItem: IOrderItem = {
      quantity: 2,
      event: { id: 1, name: "test", cost: 150 },
      freeCount: 0,
      totalDiscount: 0,
    };
    discountAdditonalItemFree.applyDiscount(orderItem);

    expect(orderItem.totalDiscount).toEqual(100);

    discountAdditonalItemFree = new DiscountOnEveryNItems(
      4,
      "Buy 2 for $200",
      150
    );
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
