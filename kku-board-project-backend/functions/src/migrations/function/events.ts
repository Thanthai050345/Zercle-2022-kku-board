import { createEvents } from "../../services/events";
import { Event } from "../../interface/events";

export const MOCKUP_EVENT: Omit<Event, "eventId">[] = [
  {
    header: "กิจกรรมอบรมเพิ่มทักษะ",
    description: "กิจกรรมเพิ่มความรู้เรื่องการสัมภาษณ์งานให้นักศึกษา",
    attendees: 0,
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
    attendees: 0,
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
    attendees: 0,
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
export const migrateEvents = async () => {
  for (const event of MOCKUP_EVENT) {
    try {
      await createEvents(event);
      console.log(`   - Migrate event successfully: ${event.eventId} -> ${event.header}`);
    } catch (error) {
      const err = error as any;
      console.log(err);
    }
  }
};
