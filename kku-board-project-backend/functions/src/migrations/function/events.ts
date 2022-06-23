import { createEvents } from "../../services/events";
import { Event } from "../../interface/events";

export const MOCKUP_EVENT: Omit<Event, "eventId">[] = [
  {
    // Jun 26 2022
    header: "กิจกรรมอบรมเพิ่มทักษะ",
    description: "กิจกรรมเพิ่มความรู้เรื่องการสัมภาษณ์งานให้นักศึกษา",
    maxAttendees: 5,
    attendees: 0,
    eventType: "ออนไลน์",
    location: "อาคาร 50 ปี วิศวกรรมศาสตร์",
    startDate: 1656209511000,
    endDate: 1656295911000,
    roleAccept: ["EN", "KKBS", "AG"],
    image: ["https://picsum.photos/200/300"],
    clubName: "Mnics",
    join: [],
  },
  {
    // Jun 07 2022
    header: "กิจกรรมทำความสะอาดห้องปฏิบัติการ",
    description: "กิจกรรมทำความสะอาดห้องปฏิบัติการ",
    maxAttendees: 2,
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ห้อง Lab คณะวิทยาศาสตร์",
    startDate: 1654589629000,
    endDate: 1654589629000,
    roleAccept: ["SC", "KKBS"],
    image: ["https://picsum.photos/200/300"],
    clubName: "ScienceLab",
    join: [],
  },
  {
    // Jun 23 2022
    header: "กิจกรรมปลูกต้นไม้",
    description: "กิจกรรมปลูกต้นไม้เฉลิมพระเกียรติ",
    maxAttendees: 10,
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ถนนเส้นสักสายรหัส",
    startDate: 1655950311000,
    endDate: 1656123111000,
    roleAccept: ["CE"],
    image: ["https://picsum.photos/200/300"],
    clubName: "Mnics",
    join: [],
  },
  {
    // Jul 20 2022
    header: "กิจกรรมปลูกป่า",
    description: "กิจกรรมปลูกป่า",
    maxAttendees: 100,
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ถนนเส้นสักสายรหัส",
    startDate: 1658283111000,
    endDate: 1658455911000,
    roleAccept: ["CoE"],
    image: ["https://picsum.photos/200/300"],
    clubName: "ScienceLab",
    join: [],
  },
  {
    // May 22 2022
    header: "กิจกรรมปลูกป่าอิหยังวะ",
    description: "กิจกรรมปลูกป่าอิหยังวะ",
    maxAttendees: 10,
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ถนนเส้นสักสายรหัส",
    startDate: 1653185511000,
    endDate: 1653358311000,
    roleAccept: ["SC", "FIN"],
    image: ["https://picsum.photos/200/300"],
    clubName: "Mnics",
    join: [],
  },
  {
    // Apr 24 2022
    header: "กิจกรรมปลูกป่าอิหยังวะV2",
    description: "กิจกรรมปลูกป่าอิหยังวะV2",
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ถนนเส้นสักสายรหัส",
    startDate: 1650766311000,
    endDate: 1650852711000,
    roleAccept: ["EN", "CoE", "CE", "FIN"],
    image: ["https://picsum.photos/200/300"],
    clubName: "Mnics",
    join: [],
  },
];
export const migrateEvents = async () => {
  for (const event of MOCKUP_EVENT) {
    try {
      await createEvents(event);
      console.log(
        `   - Migrate event successfully: ${event.eventId} -> ${event.header}`
      );
    } catch (error) {
      const err = error as any;
      console.log(err);
    }
  }
};
