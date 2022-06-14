"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopEventByRole = void 0;
const events_1 = require("./events");
exports.getTopEventByRole = async (uid) => {
    const event = await events_1.getEventForMyRole(uid);
    let sortedEventByAttendees = event.sort((a, b) => a.attendees > b.attendees ? -1 : 1);
    let slicedEvent = sortedEventByAttendees.slice(0, 5);
    return slicedEvent;
};
//# sourceMappingURL=topEvents.js.map