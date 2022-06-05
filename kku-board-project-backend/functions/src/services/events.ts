import * as admin from "firebase-admin";
import { db } from "../index";
import { Event } from "../interface/events";

export const createEvents = async (body: Event) => {
  const event = body;
  await db
    .collection("events")
    .doc(event.eventId as string)
    .set(event);
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
    .where("clubId", "==", clubId)
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
