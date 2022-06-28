import { createEvents } from "../../services/events";
import { Event } from "../../interface/events";

export const MOCKUP_EVENT: Omit<Event, "eventId">[] = [
  {
    // 25/06/2022
    header: "กิจกรรมอบรมเพิ่มทักษะ",
    description: "กิจกรรมเพิ่มความรู้เรื่องการสัมภาษณ์งานให้นักศึกษา",
    maxAttendees: 5,
    attendees: 0,
    eventType: "ออนไลน์",
    location: "อาคาร 50 ปี วิศวกรรมศาสตร์",
    startDate: 1656209498000,
    endDate: 1656295898000,
    roleAccept: ["EN", "KKBS", "AG"],
    image: ["https://beta.sut.ac.th/ist-fl/wp-content/uploads/sites/77/2021/08/testing.jpg"],
    clubName: "Mnics",
    join: [],
  },
  {
    // 27/06/2022
    header: "กิจกรรมทำความสะอาดห้องปฏิบัติการ",
    description: "กิจกรรมทำความสะอาดห้องปฏิบัติการ",
    maxAttendees: 2,
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ห้อง Lab คณะวิทยาศาสตร์",
    startDate: 1656295898000,
    endDate: 1656468698000,
    roleAccept: ["SC", "KKBS"],
    image: ["https://laz-img-sg.alicdn.com/p/6a78913c131cfcd539813bd4b7c42459.png"],
    clubName: "ScienceLab",
    join: [],
  },
  {
    // 23/06/2022
    header: "กิจกรรมปลูกต้นไม้",
    description: "กิจกรรมปลูกต้นไม้เฉลิมพระเกียรติ",
    maxAttendees: 10,
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ถนนเส้นสักสายรหัส",
    startDate: 1656382298000,
    endDate: 1656468698000,
    roleAccept: ["CE"],
    image: ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"],
    clubName: "Mnics",
    join: [],
  },
  {
    // 30/07/2022
    header: "กิจกรรมปลูกป่า",
    description: "กิจกรรมปลูกป่า",
    maxAttendees: 100,
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ถนนเส้นสักสายรหัส",
    startDate: 1659147098000,
    endDate: 1658455911000,
    roleAccept: ["CoE"],
    image: ["https://i.stack.imgur.com/QqRWG.jpg"],
    clubName: "ScienceLab",
    join: [],
  },
  {
    //  11/07/2022
    header: "กิจกรรมปลูกป่าอิหยังวะ",
    description: "กิจกรรมปลูกป่าอิหยังวะ",
    maxAttendees: 10,
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ถนนเส้นสักสายรหัส",
    startDate: 1657505498000,
    endDate: 1657591898000,
    roleAccept: ["SC", "FIN"],
    image: ["https://www.swedishlapland.com/wp-content/uploads/1200Milkyway_rin_DavidBjorken_1920x1080-kopiera.jpg"],
    clubName: "Mnics",
    join: [],
  },
  {
    // Apr 24 2022
    header: "กิจกรรมปลูกป่าอิหยังวะV2",
    description: "กิจกรรมปลูกป่าอิหยังวะV2",
    maxAttendees: 10,
    attendees: 0,
    eventType: "ออนไซต์",
    location: "ถนนเส้นสักสายรหัส",
    startDate: 1662948698000,
    endDate: 1663207898000,
    roleAccept: ["EN", "CoE", "CE", "FIN"],
    image: ["https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"],
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
