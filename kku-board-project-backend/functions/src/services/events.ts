import * as admin from "firebase-admin";
import { db } from "../index";
import { Event } from "../interface/events";

export const createEvents = async (body: Omit<Event, "eventId">) => {
  const eventId = `${body.clubName}_${body.startDate}`;
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
  return events;
};

export const getEventById = async (eventId: string) => {
  const db = admin.firestore();
  const event = await db
    .collection("events")
    .where("eventId", "==", eventId)
    .get();
  let user: any = {};
  event.forEach((doc) => (user = { ...(doc.data() as Event), id: doc.id }));
  return user;
};

export const deleteEventById = async (eventId: string) => {
  const db = admin.firestore();
  await db.collection("events").doc(eventId).delete();
  return "successfully deleted event";
};

export const updateEventById = async (eventId: string, body: Event) => {
  const db = admin.firestore();
  await db.collection("events").doc(eventId).update(body);
  return "successfully updated event";
};

export const getAllEventsByClubId = async (clubId: string) => {
  const db = admin.firestore();
  const docs = await db
    .collection("events")
    .where("uid", "==", clubId)
    .get();
  let events: Event[] = [];
  docs.forEach((doc) => events.push({ ...(doc.data() as Event), id: doc.id }));
  return events;
};

export const getAllEventsByStudentId = async (studentId: string) => {
  const db = admin.firestore();
  const docs = await db
    .collection("events")
    .where("studentId", "==", studentId)
    .get();
  let events: Event[] = [];
  docs.forEach((doc) => events.push({ ...(doc.data() as Event), id: doc.id }));
  return events;
};

export const updateUserJoinEvent = async (uid: string, eventId: string) => {
  const db = admin.firestore();
  const user = await db.collection("students").doc(uid).get();
  const event = await db.collection("events").doc(eventId).get();
  const userData = await user.data();
  const eventData = await event.data();
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const attendees = eventData?.attendees;
  const join = eventData?.join;
  return db
    .collection("events")
    .doc(eventId)
    .update({
      join: [...join, { firstName: firstName, lastName: lastName, uid: uid }],
      attendees: attendees + 1,
    });
};

export const getEventByUid = async (uid: string) => {
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
  let events: any[] = []
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
  return events;
};