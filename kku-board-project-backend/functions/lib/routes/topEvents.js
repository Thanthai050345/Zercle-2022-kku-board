"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const topEvents_1 = require("../services/topEvents");
const errorsTemplate_1 = require("../templates/errorsTemplate");
const router = express.Router();
router.get("/:uid", async (req, res) => {
    const uid = req.params.uid;
    try {
        const topEvent = await topEvents_1.getTopEventByRole(uid);
        return res.status(201).json(topEvent);
    }
    catch (error) {
        return errorsTemplate_1.catchingError(res, error, "user/bad-request");
    }
});
exports.default = router;
//# sourceMappingURL=topEvents.js.map