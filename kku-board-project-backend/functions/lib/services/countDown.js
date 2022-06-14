"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventClubsCountDown = exports.getEventStudentsCountDown = void 0;
const events_1 = require("./events");
exports.getEventStudentsCountDown = async (uid) => {
    const event = await events_1.getEventByUid(uid);
    let sortedEventByStartDate = event.sort((a, b) => {
        return a.startDate - b.startDate;
    });
    let slicedEvent = sortedEventByStartDate.slice(0, 5);
    const countdown = (data) => data.map((item) => {
        return {
            eventId: item.eventId,
            eventHeader: item.header,
            startDate: item.startDate,
        };
    });
    return countdown(slicedEvent);
};
exports.getEventClubsCountDown = async (uid) => {
    const event = await events_1.getAllEventsByClubId(uid);
    let sortedEventByStartDate = event.sort((a, b) => {
        return a.startDate - b.startDate;
    });
    let slicedEvent = sortedEventByStartDate.slice(0, 5);
    const countdown = (data) => data.map((item) => {
        return {
            eventId: item.eventId,
            eventHeader: item.header,
            startDate: item.startDate,
        };
    });
    return countdown(slicedEvent);
};
//# sourceMappingURL=countDown.js.map