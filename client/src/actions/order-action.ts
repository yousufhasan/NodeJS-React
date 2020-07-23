import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { GET_ORDER_SUCCESS } from "./types";
import { IOrder, IOrderItem } from "../typings";
import { makeGetAPICall, makePutAPICall } from "../api";

export interface GetOrderAction extends Action {
  type: typeof GET_ORDER_SUCCESS;
  payload: IOrder;
}

export const getOrder: ActionCreator<ThunkAction<
  void,
  any,
  null,
  GetOrderAction
>> = (orderId: number) => async (dispatch: Dispatch<GetOrderAction>) => {
  const response = await makeGetAPICall(`/order/${orderId}`);
  const orderAction: GetOrderAction = {
    type: GET_ORDER_SUCCESS,
    payload: response.data,
  };

  dispatch(orderAction);
};

export const updateOrder: ActionCreator<ThunkAction<
  void,
  any,
  null,
  GetOrderAction
>> = (orderId: number, items: IOrderItem[]) => async (
  dispatch: Dispatch<GetOrderAction>
) => {
  const response = await makePutAPICall(`/order/${orderId}`, { items: items });
  const orderAction: GetOrderAction = {
    type: GET_ORDER_SUCCESS,
    payload: response.data,
  };

  dispatch(orderAction);
};
