import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { getEventsRouter } from "./src/routes/get-events";
import { getOrderRouter } from "./src/routes/get-order";
import { updateOrderRouter } from "./src/routes/update-order";

const app = express();
app.use(cors());
app.use(json());
const router = express.Router();

app.use(router);
app.use(getEventsRouter);
app.use(getOrderRouter);
app.use(updateOrderRouter);

app.listen(4000, () => {
  console.log("Listening on port 4000 !!!");
});
