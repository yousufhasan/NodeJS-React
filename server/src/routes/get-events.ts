import express, { Request, Response } from "express";
import { events } from "../../seed-data";

const router = express.Router();

router.get("/events", (req: Request, res: Response) => {
  res.send(events);
});

export { router as getEventsRouter };
