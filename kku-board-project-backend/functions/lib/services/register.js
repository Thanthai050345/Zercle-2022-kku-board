"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClubAdmin = exports.createStudent = void 0;
// import dayjs = require("dayjs");
const admin = require("firebase-admin");
const index_1 = require("../index");
exports.createStudent = async (body) => {
    const user = await admin.auth().createUser({
        displayName: `${body.firstName} ${body.lastName}`,
        email: body.email,
        password: body.password,
        uid: body.uid,
        photoURL: body.urlImage,
        disabled: false,
    });
    await admin.auth().setCustomUserClaims(user.uid, {
        authority: body.authority,
    });
    await index_1.db
        .collection("students")
        .doc(user.uid)
        .set(Object.assign(Object.assign({}, body), { uid: `${user.uid}` }));
    return body;
};
exports.createClubAdmin = async (body) => {
    const clubAdmin = await admin.auth().createUser({
        displayName: `${body.clubName}`,
        email: body.email,
        password: body.password,
        uid: body.uid,
        photoURL: body.urlImage,
        disabled: false,
    });
    await admin.auth().setCustomUserClaims(clubAdmin.uid, {
        authority: body.authority,
    });
    await index_1.db
        .collection("clubAdmins")
        .doc(clubAdmin.uid)
        .set(Object.assign(Object.assign({}, body), { uid: `${clubAdmin.uid}` }));
    return body;
};
//# sourceMappingURL=register.js.map