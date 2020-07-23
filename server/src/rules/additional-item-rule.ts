import { DiscountRule } from "./discount-rule";
import { IOrderItem } from "../classes/order";

export class DiscountAdditonalItemFree extends DiscountRule {
  freeItem: number;
  constructor(ruleQuantity: number, description: string, freeItem: number) {
    super(ruleQuantity, description);
    this.freeItem = freeItem;
  }

  applyDiscount(orderItem: IOrderItem) {
    orderItem.freeCount +=
      (Math.floor(orderItem.quantity / this.ruleQuantity) * this.freeItem);
    orderItem.totalDiscount +=
      (Math.floor(orderItem.quantity / this.ruleQuantity) *
      orderItem.event.cost *
      this.freeItem);
  }
}
