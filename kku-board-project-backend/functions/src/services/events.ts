import * as admin from "firebase-admin";
import { db } from "../index";
import { Event } from "../interface/events";
import { getClubAdminById, getStudentById } from "./users";

export const createEvents = async (body: Omit<Event, "eventId">) => {
  const eventId = `${body.clubName}_${body.header}`;
  await db
    .collection("events")
    .doc(eventId)
    .set({ ...body, eventId: eventId });
  return body;
};

export const getAllEvents = async () => {
  const db = admin.firestore();
  const docs = await db.collection("events").get();
  let events: Event[] = [];
  docs.forEach((doc) => events.push({ ...(doc.data() as Event), id: doc.id }));
  const now = Date.now();
  const filterEvents = events.filter((event: Event, index: number) => {
    const startDate = event.startDate * 1000;
    return now < startDate;
  });
  return filterEvents;
};

export const getEventById = async (eventId: string) => {
  const db = admin.firestore();
  const event = await db
    .collection("events")
    .where("eventId", "==", eventId)
    .get();
  let user: any = {};
  event.forEach((doc) => (user = { ...(doc.data() as Event), id: doc.id }));
  const now = Date.now();
  const filterEvents = user.filter((event: Event, index: number) => {
    const startDate = event.startDate * 1000;
    return now < startDate;
  });
  return filterEvents;
};

export const deleteEventById = async (eventId: string) => {
  const db = admin.firestore();
  await db.collection("events").doc(eventId).delete();
  return { message: "successfully deleted event"};
};

export const updateEventById = async (eventId: string, body: Event) => {
  const db = admin.firestore();
  await db.collection("events").doc(eventId).update(body);
  return { message: "successfully updated event"};
};

export const getAllEventsByClubId = async (clubId: string) => {
  const db = admin.firestore();
  const clubAdmin = await getClubAdminById(clubId);
  const clubName = clubAdmin.clubName;
  const docs = await db
    .collection("events")
    .where("clubName", "==", clubName)
    .get();
  let events: Event[] = [];
  docs.forEach((doc) => events.push({ ...(doc.data() as Event), id: doc.id }));
  const now = Date.now();
  const filterEvents = events.filter((event: Event, index: number) => {
    const startDate = event.startDate * 1000;
    return now < startDate;
  });
  return filterEvents;
};

export const updateUserJoinEvent = async (uid: string, eventId: string) => {
  const db = admin.firestore();
  const user = await db.collection("students").doc(uid).get();
  const event = await db.collection("events").doc(eventId).get();
  const userData = user.data();
  const eventData = event.data();
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const attendees = eventData?.attendees;
  const join = eventData?.join;

  const checkJoin = join.find((student: any) => student.uid === uid);
  if (!checkJoin) {
    await db
      .collection("events")
      .doc(eventId)
      .update({
        join: [...join, { firstName, lastName, uid }],
        attendees: attendees + 1,
      });
    return { message: "successfull joined event" };
  } else {
    return { message: "already joined event" };
  }
};

export const getEventByUid = async (uid: string) => {
  const db = admin.firestore();
  const docs = await db.collection("events").get();
  let events: any[] = [];
  docs.forEach((doc) => {
    const eventData = doc.data();
    const join = eventData?.join;
    if (join) {
      join.forEach((joinData: any) => {
        if (joinData.uid === uid) {
          const eventId = eventData?.eventId;
          const eventHeader = eventData?.header;
          const startDate = eventData?.startDate;
          events.push({
            eventId: eventId,
            startDate: startDate,
            header: eventHeader,
          });
        }
      });
    }
  });
  const now = Date.now();
  const filterEvents = events.filter((event: Event, index: number) => {
    const startDate = event.startDate * 1000;
    return now < startDate;
  });
  return filterEvents;
};

export const deleteEventByUid = async (uid: string, eventId: string) => {
  const db = admin.firestore();
  const doc = await db.collection("events").doc(eventId).get();
  const eventData = doc.data();
  const join = eventData?.join;
  if (join) {
    join.forEach((joinData: any, index: number, data: any) => {
      if (joinData.uid === uid) {
        data.splice(index, 1);
      }
    });
  }
  await db.collection("events").doc(eventId).update({ join: join });
  return join;
};

export const getEventForMyRole = async (uid: string) => {
  const student = await getStudentById(uid);
  const faculty = student.faculty;
  const major = student.major;
  const clubed = student.clubed;
  const myRole = [faculty, major, ...clubed];
  const event = await getAllEvents();
  const eventForMyRole: any[] = [];
  event.forEach((eventData: any) => {
    const roleAccepted = eventData.roleAccept;
    var common = myRole.filter((x) => roleAccepted.indexOf(x) !== -1);
    if (common.length > 0) {
      eventForMyRole.push(eventData);
    }
  });
  const now = Date.now();
  const filterEvents = eventForMyRole.filter((event: Event, index: number) => {
    const startDate = event.startDate * 1000;
    return now < startDate;
  });
  return filterEvents;
};
