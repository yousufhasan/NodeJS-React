import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../reducers";
import { getOrder, updateOrder } from "../actions";
import { IOrderItem } from "../typings";

export const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state: IAppState) => ({ order: state.order }));

  useEffect(() => {
    dispatch(getOrder(1));
  }, [dispatch]);

  const removeItemsFromOrder = (orderItem: IOrderItem) => {
    const index = order.items.findIndex(
      (item) => item.event.id === orderItem.event.id
    );
    order.items.splice(index, 1);
    dispatch(updateOrder(order.id, order.items));
  };

  const showQuantity = (item: IOrderItem) => {
    return item.freeCount ? (
      <span>
        {" "}
        {item.quantity} <span className="free-item">+{item.freeCount}</span>{" "}
      </span>
    ) : (
      <span>{item.quantity}</span>
    );
  };

  const calculateTotal = (item: IOrderItem) => {
    return item.freeCount
      ? (item.quantity + item.freeCount) * item.event.cost
      : item.quantity * item.event.cost;
  };

  const showTotalWithDiscount = (item: IOrderItem) => {
    return item.totalDiscount ? (
      <span>
        {" "}
        <span className="old-price"> ${calculateTotal(item)} </span>{" "}
        <span className="new-price">
          {" "}
          ${calculateTotal(item) - item.totalDiscount!}{" "}
        </span>{" "}
      </span>
    ) : (
      <span> {calculateTotal(item)} </span>
    );
  };

  const renderOrderItems = () => {
    return (
      order &&
      order.items.map((item, index) => {
        return (
          <tr key={index}>
            <td> {item.event.name} </td>
            <td> {showQuantity(item)} </td>
            <td> ${item.event.cost} </td>
            <td> ${item.totalDiscount}</td>
            <td> {showTotalWithDiscount(item)} </td>
            <td>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => {
                  removeItemsFromOrder(item);
                }}
              >
                Remove
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  if (!order || !order.items.length) return <></>;
  return (
    <div>
      <h4 className="pt-4 pb-2 text-center"> Purchase List </h4>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Event</th>
            <th style={{ width: "10%" }}>Quantity</th>
            <th style={{ width: "10%" }}>Cost</th>
            <th style={{ width: "10%" }}>Discount</th>
            <th style={{ width: "10%" }}>Total</th>
            <th style={{ width: "10%" }}>Remove</th>
          </tr>
        </thead>
        <tbody>{renderOrderItems()}</tbody>
      </table>
    </div>
  );
};
