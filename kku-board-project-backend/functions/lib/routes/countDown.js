"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const countDown_1 = require("../services/countDown");
const errorsTemplate_1 = require("../templates/errorsTemplate");
const router = express.Router();
router.get("/students/:uid", async (req, res) => {
    const uid = req.params.uid;
    try {
        const event = await countDown_1.getEventStudentsCountDown(uid);
        return res.status(201).json(event);
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
router.get("/clubs/:uid", async (req, res) => {
    const uid = req.params.uid;
    try {
        const event = await countDown_1.getEventClubsCountDown(uid);
        return res.status(201).json(event);
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
exports.default = router;
//# sourceMappingURL=countDown.js.map