"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import * as dayjs from "dayjs";
const events_1 = require("../services/events");
const errorsTemplate_1 = require("../templates/errorsTemplate");
const router = express.Router();
router.post("/:uid", async (req, res) => {
    try {
        const dataEvent = req.body;
        const event = await events_1.createEvents(dataEvent);
        return res.status(201).json(event);
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
router.get("/", async (_, res) => {
    try {
        const event = await events_1.getAllEvents();
        const now = Date.now();
        const filterEvents = event.find((event, index) => {
            const endDate = event.endDate * 1000;
            return now < endDate;
        });
        return res.status(201).json(filterEvents);
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
router.patch("/updateJoin/:clubId/:uid", async (req, res) => {
    const uid = req.params.uid;
    const clubId = req.params.clubId;
    try {
        await events_1.updateUserJoinEvent(uid, clubId);
        return res.status(201).json({ message: "Update success" });
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
router.get("/students/:uid", async (req, res) => {
    const uid = req.params.uid;
    try {
        const event = await events_1.getEventByUid(uid);
        return res.status(201).json(event);
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
router.get("/clubs/:clubId", async (req, res) => {
    const clubId = req.params.clubId;
    try {
        const event = await events_1.getAllEventsByClubId(clubId);
        return res.status(201).json(event);
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
// events สำหรับ role เดียวกันกับ student
router.get("/eventForMyRole/:uid", async (req, res) => {
    const uid = req.params.uid;
    try {
        const event = await events_1.getEventForMyRole(uid);
        return res.status(201).json(event);
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
exports.default = router;
//# sourceMappingURL=events.js.map