import { Reducer } from "redux";
import { IEvent } from "../typings";
import { GET_EVENTS_SUCCESS } from "../actions/types";
import { GetEventsAction } from "../actions";

export const eventsReducer: Reducer<IEvent[], GetEventsAction> = (
  state = [],
  action
) => {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
