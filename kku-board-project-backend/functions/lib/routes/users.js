"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_1 = require("../services/users");
const errorsTemplate_1 = require("../templates/errorsTemplate");
const router = express.Router();
router.get("/clubAdmins", async (_, res) => {
    try {
        const clubAdmins = await users_1.getAllClubAdmins();
        return res.json(clubAdmins);
    }
    catch (error) {
        return errorsTemplate_1.catchingError(res, error, "user/bad-request");
    }
});
router.get("/students", async (_, res) => {
    try {
        const students = await users_1.getAllStudents();
        return res.json(students);
    }
    catch (error) {
        return errorsTemplate_1.catchingError(res, error, "user/bad-request");
    }
});
router.get("/students/:uid", async (req, res) => {
    const uid = req.params.uid;
    try {
        const user = await users_1.getStudentById(uid);
        return res.json(user);
    }
    catch (error) {
        return errorsTemplate_1.catchingError(res, error, "user/bad-request");
    }
});
router.get("/clubAdmins/:uid", async (req, res) => {
    const uid = req.params.uid;
    try {
        const user = await users_1.getClubAdminById(uid);
        return res.json(user);
    }
    catch (error) {
        return errorsTemplate_1.catchingError(res, error, "user/bad-request");
    }
});
router.delete("/students/:uid", async (req, res) => {
    const uid = req.params.uid;
    try {
        const users = await users_1.getAllStudents();
        const user = users.find((user) => user.uid === uid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const resDelete = await users_1.deleteStudentById(uid);
        return res.status(200).json(resDelete);
    }
    catch (error) {
        return errorsTemplate_1.catchingError(res, error, "user/bad-request");
    }
});
router.delete("/clubAdmins/:uid", async (req, res) => {
    const uid = req.params.uid;
    try {
        const users = await users_1.getAllClubAdmins();
        const user = users.find((user) => user.uid === uid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const resDelete = await users_1.deleteClubAdminById(uid);
        return res.status(200).json(resDelete);
    }
    catch (error) {
        return errorsTemplate_1.catchingError(res, error, "user/bad-request");
    }
});
exports.default = router;
//# sourceMappingURL=users.js.map