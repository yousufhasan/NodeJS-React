export interface IEvent {
    id: number;
    name: string;
    cost: number;
    discounts: array[{ description: string }];
  }
  
  export interface IOrder {
    id: number;
    items: IOrderItem[];
  }
  export interface IOrderItem {
    quantity: number;
    totalDiscount?: number;
    freeCount?: number;
    event: IEvent;
  }
  