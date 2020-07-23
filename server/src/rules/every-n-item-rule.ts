import { DiscountRule } from "./discount-rule";
import { IOrderItem } from "../classes/order";

export class DiscountOnEveryNItems extends DiscountRule {
  absoluteDiscountAmount: number;
  constructor(
    ruleQuantity: number,
    description: string,
    absoluteDiscountAmount: number
  ) {
    super(ruleQuantity, description);
    this.absoluteDiscountAmount = absoluteDiscountAmount;
  }

  applyDiscount(orderItem: IOrderItem) {
    orderItem.totalDiscount +=
      Math.floor(orderItem.quantity / this.ruleQuantity) *
      this.absoluteDiscountAmount;
  }
}
