import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { GET_EVENTS_SUCCESS } from "./types";
import { IEvent } from "../typings";
import { makeGetAPICall } from "../api";

export interface GetEventsAction extends Action {
  type: typeof GET_EVENTS_SUCCESS;
  payload: IEvent[];
}

export const getAllEvents: ActionCreator<ThunkAction<
  void,
  any,
  null,
  GetEventsAction
>> = () => async (dispatch: Dispatch<GetEventsAction>) => {
  const response = await makeGetAPICall("/events");
  const eventsAction: GetEventsAction = {
    type: GET_EVENTS_SUCCESS,
    payload: response.data,
  };
  dispatch(eventsAction);
};
