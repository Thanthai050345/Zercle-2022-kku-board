"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const events_1 = require("./events");
const register_1 = require("./register");
const users_1 = require("./users");
const topEvents_1 = require("./topEvents");
const countDown_1 = require("./countDown");
const router = express.Router();
router.use("/users", users_1.default);
router.use("/register", register_1.default);
router.use("/events", events_1.default);
router.use("/topEvents", topEvents_1.default);
router.use("/countdown", countDown_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map