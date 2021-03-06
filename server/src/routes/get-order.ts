import express, { Request, Response } from "express";
import { ordersDB } from "../../seed-data";

const router = express.Router();

router.get("/order/:id", (req: Request, res: Response) => {
  const order = ordersDB.find((order) => order.id === +req.params.id);
  if (!order) {
    throw new Error("Couldn't find order with that id");
  }

  res.send(order);
});

export { router as getOrderRouter };
