"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventForMyRole = exports.getEventByUid = exports.updateUserJoinEvent = exports.getAllEventsByClubId = exports.updateEventById = exports.deleteEventById = exports.getEventById = exports.getAllEvents = exports.createEvents = void 0;
const admin = require("firebase-admin");
const index_1 = require("../index");
const users_1 = require("./users");
exports.createEvents = async (body) => {
    const eventId = `${body.clubName}_${body.header}`;
    await index_1.db
        .collection("events")
        .doc(eventId)
        .set(Object.assign(Object.assign({}, body), { eventId: eventId }));
    return body;
};
exports.getAllEvents = async () => {
    const db = admin.firestore();
    const docs = await db.collection("events").get();
    let events = [];
    docs.forEach((doc) => events.push(Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    return events;
};
exports.getEventById = async (eventId) => {
    const db = admin.firestore();
    const event = await db
        .collection("events")
        .where("eventId", "==", eventId)
        .get();
    let user = {};
    event.forEach((doc) => (user = Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    return user;
};
exports.deleteEventById = async (eventId) => {
    const db = admin.firestore();
    await db.collection("events").doc(eventId).delete();
    return "successfully deleted event";
};
exports.updateEventById = async (eventId, body) => {
    const db = admin.firestore();
    await db.collection("events").doc(eventId).update(body);
    return "successfully updated event";
};
exports.getAllEventsByClubId = async (clubId) => {
    const db = admin.firestore();
    const clubAdmin = await users_1.getClubAdminById(clubId);
    const clubName = clubAdmin.clubName;
    const docs = await db.collection("events").where("clubName", "==", clubName).get();
    let events = [];
    docs.forEach((doc) => events.push(Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    return events;
};
// export const getAllEventsByStudentId = async (studentId: string) => {
//   const db = admin.firestore();
//   const docs = await db
//     .collection("events")
//     .where("studentId", "==", studentId)
//     .get();
//   let events: Event[] = [];
//   docs.forEach((doc) => events.push({ ...(doc.data() as Event), id: doc.id }));
//   return events;
// };
exports.updateUserJoinEvent = async (uid, eventId) => {
    const db = admin.firestore();
    const user = await db.collection("students").doc(uid).get();
    const event = await db.collection("events").doc(eventId).get();
    const userData = await user.data();
    const eventData = await event.data();
    const firstName = userData === null || userData === void 0 ? void 0 : userData.firstName;
    const lastName = userData === null || userData === void 0 ? void 0 : userData.lastName;
    const attendees = eventData === null || eventData === void 0 ? void 0 : eventData.attendees;
    const join = eventData === null || eventData === void 0 ? void 0 : eventData.join;
    return db
        .collection("events")
        .doc(eventId)
        .update({
        join: [...join, { firstName: firstName, lastName: lastName, uid: uid }],
        attendees: attendees + 1,
    });
};
exports.getEventByUid = async (uid) => {
    const db = admin.firestore();
    const docs = await db.collection("events").get();
    // let events: (Omit<
    //   Event,
    //   | "description"
    //   | "attendees"
    //   | "eventType"
    //   | "location"
    //   | "endDate"
    //   | "roleAccept"
    //   | "image"
    //   | "clubName"
    //   | "join"
    // >)[] = [];
    let events = [];
    docs.forEach((doc) => {
        const eventData = doc.data();
        const join = eventData === null || eventData === void 0 ? void 0 : eventData.join;
        if (join) {
            join.forEach((joinData) => {
                if (joinData.uid === uid) {
                    const eventId = eventData === null || eventData === void 0 ? void 0 : eventData.eventId;
                    const eventHeader = eventData === null || eventData === void 0 ? void 0 : eventData.header;
                    const startDate = eventData === null || eventData === void 0 ? void 0 : eventData.startDate;
                    events.push({
                        eventId: eventId,
                        startDate: startDate,
                        header: eventHeader,
                    });
                }
            });
        }
    });
    return events;
};
exports.getEventForMyRole = async (uid) => {
    // const db = admin.firestore();
    const student = await users_1.getStudentById(uid);
    const faculty = student.faculty;
    const major = student.major;
    const clubed = student.clubed;
    const myRole = [faculty, major, ...clubed];
    const event = await exports.getAllEvents();
    const eventForMyRole = [];
    event.forEach((eventData) => {
        const roleAccepted = eventData.roleAccept;
        var common = myRole.filter((x) => roleAccepted.indexOf(x) !== -1);
        if (common.length > 0) {
            eventForMyRole.push(eventData);
        }
    });
    return eventForMyRole;
};
//# sourceMappingURL=events.js.map