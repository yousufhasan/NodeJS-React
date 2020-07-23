import { Event, IEvent } from "./src/classes/event";
import { Order } from "./src/classes/order";
import {
  DiscountOnLastExperience,
  DiscountOnEveryNItems,
  DiscountAdditonalItemFree,
} from "./src/rules";

export const events: IEvent[] = [];

// for demo we will just have single empty order in the db
export const ordersDB: Order[] = [new Order(1, [])];

const discountOnLastExperience = new DiscountOnLastExperience(
  5,
  "Buy 5, Get 20% off the 5th experience",
  20
);

const kidsPartyEvent = new Event(1, "Kids Party", 220);
kidsPartyEvent.addPromotion(discountOnLastExperience);

const wineTourEvent = new Event(2, "Wine Tour", 440);
wineTourEvent.addPromotion(discountOnLastExperience);
wineTourEvent.addPromotion(
  new DiscountOnEveryNItems(4, "Buy 4, ONLY Pay for 3", wineTourEvent.cost)
);

const teamBuildingEvent = new Event(3, "Team Building", 800);
teamBuildingEvent.addPromotion(discountOnLastExperience);
teamBuildingEvent.addPromotion(
  new DiscountOnEveryNItems(2, "Buy 2 for $1500", 100)
);

const picnicEvent = new Event(4, "Picnic", 110);
picnicEvent.addPromotion(discountOnLastExperience);
picnicEvent.addPromotion(
  new DiscountAdditonalItemFree(2, "Buy 2, get 1 free", 1)
);
picnicEvent.addPromotion(
  new DiscountOnEveryNItems(4, "Buy 4, ONLY Pay for 3", picnicEvent.cost)
);

events.push(kidsPartyEvent);
events.push(wineTourEvent);
events.push(teamBuildingEvent);
events.push(picnicEvent);
