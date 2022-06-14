"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const register_1 = require("../services/register");
const errorsTemplate_1 = require("../templates/errorsTemplate");
const router = express.Router();
router.post("/student", async (req, res) => {
    try {
        const dataUser = req.body;
        const user = await register_1.createStudent(dataUser);
        return res.status(201).json(user);
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
router.post("/clubAdmin", async (req, res) => {
    try {
        const dataClubAdmin = req.body;
        const user = await register_1.createClubAdmin(dataClubAdmin);
        return res.status(201).json(user);
    }
    catch (error) {
        const err = error;
        return errorsTemplate_1.catchingError(res, { message: err.code }, err === null || err === void 0 ? void 0 : err.code);
    }
});
exports.default = router;
//# sourceMappingURL=register.js.map