import { DiscountAdditonalItemFree } from "../additional-item-rule";
import { IOrderItem } from "../../classes/order";

describe("DiscountAdditonalItemFreeRule", () => {
  it("doesnt add additional item when order item has lower than rule quantity", () => {
    const discountAdditonalItemFree = new DiscountAdditonalItemFree(
      2,
      "Buy 2, get 1 free",
      1
    );
    const orderItem: IOrderItem = {
      quantity: 1,
      event: { id: 1, name: "test", cost: 100 },
      freeCount: 0,
      totalDiscount: 0,
    };
    discountAdditonalItemFree.applyDiscount(orderItem);

    expect(orderItem.freeCount).toEqual(0);
    expect(orderItem.totalDiscount).toEqual(0);
  });

  it("adds additional item when order item has equal or more than rule quantity", () => {
    const discountAdditonalItemFree = new DiscountAdditonalItemFree(
      4,
      "Buy 4, get 2 free",
      2
    );
    const orderItem: IOrderItem = {
      quantity: 4,
      event: { id: 1, name: "test", cost: 100 },
      freeCount: 0,
      totalDiscount: 0,
    };
    discountAdditonalItemFree.applyDiscount(orderItem);

    expect(orderItem.freeCount).toEqual(2);
  });

  it("calculates the correct discount item has equal or more than rule quantity", () => {
    const discountAdditonalItemFree = new DiscountAdditonalItemFree(
      4,
      "Buy 4, get 2 free",
      2
    );
    const orderItem: IOrderItem = {
      quantity: 4,
      event: { id: 1, name: "test", cost: 100 },
      freeCount: 0,
      totalDiscount: 0,
    };
    discountAdditonalItemFree.applyDiscount(orderItem);

    expect(orderItem.totalDiscount).toEqual(200);
  });
});
