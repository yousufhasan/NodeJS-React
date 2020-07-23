"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventsRouter = void 0;
var express_1 = __importDefault(require("express"));
var seed_data_1 = require("../../seed-data");
var router = express_1.default.Router();
exports.getEventsRouter = router;
router.get("/events", function (req, res) {
    res.send(seed_data_1.events);
});
