import { IOrderItem } from "../classes/order";

export abstract class DiscountRule {
  ruleQuantity: number;
  description: string;

  constructor(ruleQuantity: number, description: string) {
    this.ruleQuantity = ruleQuantity;
    this.description = description;
  }

  abstract applyDiscount(orderItem: IOrderItem): void;
}
