import { combineReducers } from "redux";
import { IOrder, IEvent } from "../typings";
import { eventsReducer } from "./events-reducer";
import { orderReducer } from "./order-reducer";

export interface IAppState {
    events: IEvent[],
    order: IOrder
}
export const reducers = combineReducers({
    events: eventsReducer,
    order: orderReducer
});