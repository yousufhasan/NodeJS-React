"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderRouter = void 0;
var express_1 = __importDefault(require("express"));
var seed_data_1 = require("../../seed-data");
var router = express_1.default.Router();
exports.getOrderRouter = router;
router.get("/order/:id", function (req, res) {
    var order = seed_data_1.ordersDB.find(function (order) { return order.id === +req.params.id; });
    if (!order) {
        throw new Error("Couldn't find order with that id");
    }
    res.send(order);
});
