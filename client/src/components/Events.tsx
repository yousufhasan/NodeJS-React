import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents, updateOrder } from "../actions";
import { IAppState } from "../reducers";
import { IEvent } from "../typings";

export const Events = () => {
  const dispatch = useDispatch();
  const { events, order } = useSelector((state: IAppState) => ({
    events: state.events,
    order: state.order,
  }));
  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  const renderDiscountList = (discounts: [{ description: string }]) => {
    return (
      discounts &&
      discounts.map((discount, index) => {
        return <li key={index}>{discount.description}</li>;
      })
    );
  };

  const addToOrder = (event: IEvent) => {
    const orderItem = order.items.find(
      (orderItem) => orderItem.event.id === event.id
    );
    if (!orderItem) {
      order.items.push({ event, quantity: 1 });
    } else {
      orderItem.quantity++;
    }
    dispatch(updateOrder(order.id, order.items));
  };

  const renderEventsList = () => {
    return events.map((item, index) => {
      return (
        <div key={index} className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-sub-title"> Promotions: </h6>
              <ul className="card-text">
                {renderDiscountList(item.discounts)}
              </ul>
              <h4 className="card-price">${item.cost}</h4>
              <button
                className="btn btn-primary"
                onClick={() => {
                  addToOrder(item);
                }}
              >
                Add to Purchase List
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="row"> {renderEventsList()} </div>;
};
