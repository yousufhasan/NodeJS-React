import { Reducer } from "redux";
import { IOrder } from "../typings";
import { GET_ORDER_SUCCESS } from "../actions/types";
import { GetOrderAction } from "../actions";

export const orderReducer: Reducer<IOrder | null, GetOrderAction> = (
  state = null,
  action
) => {
  switch (action.type) {
    case GET_ORDER_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};
