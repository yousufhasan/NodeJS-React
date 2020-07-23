import { DiscountRule } from "./discount-rule";
import { IOrderItem } from "../classes/order";

export class DiscountOnLastExperience extends DiscountRule {
  discountPercentage: number;
  constructor(
    ruleQuantity: number,
    description: string,
    discountPercentage: number
  ) {
    super(ruleQuantity, description);
    this.discountPercentage = discountPercentage;
  }

  applyDiscount(orderItem: IOrderItem) {
    const discountedItemQuantity = Math.floor(
      orderItem.quantity / this.ruleQuantity
    );
    if (discountedItemQuantity) {
      const totalDiscount =
        (this.discountPercentage / 100) *
        (orderItem.event.cost * discountedItemQuantity);
      orderItem.totalDiscount += totalDiscount;
    }
  }
}
