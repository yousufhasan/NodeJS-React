import { IEvent } from "./event";
import { events } from "../../seed-data";

export interface IOrder {
  id: number;
  items: IOrderItem[];
}

export interface IOrderItem {
  quantity: number;
  totalDiscount: number;
  freeCount: number;
  event: IEvent;
}

export class Order implements IOrder {
  id: number;
  items: IOrderItem[];

  constructor(id: number, items: IOrderItem[]) {
    this.id = id;
    this.items = items;
  }

  public applyDiscountsOnEachOrderItem() {
    for (const item of this.items) {
      this.resetOrderDiscount(item);
      this.applyAllDiscountRules(item);
    }
  }

  private applyAllDiscountRules(item: IOrderItem) {
    const event = events.find((evt) => evt.id === item.event.id);
    for (const rule of event!.discounts!) {
      rule.applyDiscount(item);
    }
  }

  private resetOrderDiscount(item: IOrderItem) {
    item.freeCount = 0;
    item.totalDiscount = 0;
  }
}
