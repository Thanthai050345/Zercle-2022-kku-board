"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClubAdminById = exports.deleteStudentById = exports.getClubAdminById = exports.getStudentById = exports.getAllStudents = exports.getAllClubAdmins = void 0;
const admin = require("firebase-admin");
exports.getAllClubAdmins = async () => {
    const db = admin.firestore();
    const docs = await db
        .collection("clubAdmins")
        .where("authority", "==", "clubAdmin")
        .get();
    let clubAdmins = [];
    docs.forEach((doc) => clubAdmins.push(Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    return clubAdmins;
};
exports.getAllStudents = async () => {
    const db = admin.firestore();
    const docs = await db
        .collection("students")
        .where("authority", "==", "student")
        .get();
    let students = [];
    docs.forEach((doc) => students.push(Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    return students;
};
exports.getStudentById = async (uid) => {
    const db = admin.firestore();
    const student = await db.collection("students").where("uid", "==", uid).get();
    let students = {};
    student.forEach((doc) => (students = Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    return students;
};
exports.getClubAdminById = async (uid) => {
    const db = admin.firestore();
    const clubAdmin = await db
        .collection("clubAdmins")
        .where("uid", "==", uid)
        .get();
    let clubAdmins = {};
    clubAdmin.forEach((doc) => (clubAdmins = Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    return clubAdmins;
};
exports.deleteStudentById = async (uid) => {
    const db = admin.firestore();
    await db.collection("students").doc(uid).delete();
    admin.auth().deleteUser(uid);
    return "successfully deleted user";
};
exports.deleteClubAdminById = async (uid) => {
    const db = admin.firestore();
    await db.collection("clubAdmins").doc(uid).delete();
    admin.auth().deleteUser(uid);
    return "successfully deleted user";
};
//# sourceMappingURL=users.js.map