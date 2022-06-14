"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateEvents = exports.MOCKUP_EVENT = void 0;
const events_1 = require("../../services/events");
exports.MOCKUP_EVENT = [
    {
        header: "กิจกรรมอบรมเพิ่มทักษะ",
        description: "กิจกรรมเพิ่มความรู้เรื่องการสัมภาษณ์งานให้นักศึกษา",
        attendees: 5,
        eventType: "ออนไลน์",
        location: "อาคาร 50 ปี วิศวกรรมศาสตร์",
        startDate: 1654589629,
        endDate: 1654589629,
        roleAccept: ["EN", "KKBS", "AG"],
        image: ["https://picsum.photos/200/300"],
        clubName: "Mnics",
        join: [],
    },
    {
        header: "กิจกรรมทำความสะอาดห้องปฏิบัติการ",
        description: "กิจกรรมทำความสะอาดห้องปฏิบัติการ",
        attendees: 0,
        eventType: "ออนไซต์",
        location: "ห้อง Lab คณะวิทยาศาสตร์",
        startDate: 1654589629,
        endDate: 1654589629,
        roleAccept: ["SC"],
        image: ["https://picsum.photos/200/300"],
        clubName: "ScienceLab",
        join: [],
    },
    {
        header: "กิจกรรมปลูกต้นไม้",
        description: "กิจกรรมปลูกต้นไม้เฉลิมพระเกียรติ",
        attendees: 2,
        eventType: "ออนไซต์",
        location: "ถนนเส้นสักสายรหัส",
        startDate: 1654589629,
        endDate: 1654589629,
        roleAccept: ["EN"],
        image: ["https://picsum.photos/200/300"],
        clubName: "Mnics",
        join: [],
    },
    {
        header: "กิจกรรมปลูกป่า",
        description: "กิจกรรมปลูกป่า",
        attendees: 10,
        eventType: "ออนไซต์",
        location: "ถนนเส้นสักสายรหัส",
        startDate: 1657188505,
        endDate: 1659866905,
        roleAccept: ["EN"],
        image: ["https://picsum.photos/200/300"],
        clubName: "Mnics",
        join: [],
    },
];
exports.migrateEvents = async () => {
    for (const event of exports.MOCKUP_EVENT) {
        try {
            await events_1.createEvents(event);
            console.log(`   - Migrate event successfully: ${event.eventId} -> ${event.header}`);
        }
        catch (error) {
            const err = error;
            console.log(err);
        }
    }
};
//# sourceMappingURL=events.js.map