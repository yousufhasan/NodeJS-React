import { DiscountRule } from "../rules/discount-rule";

export interface IEvent {
  discounts?: DiscountRule[];
  id: number;
  name: string;
  cost: number;
}

export class Event implements IEvent {
  discounts?: DiscountRule[] = [];
  id: number;
  name: string;
  cost: number;

  constructor(id: number, name: string, cost: number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  addPromotion(rule: DiscountRule) {
    this.discounts!.push(rule);
  }
}
