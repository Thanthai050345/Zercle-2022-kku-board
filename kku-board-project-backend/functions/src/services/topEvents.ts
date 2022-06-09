import { db } from "../index";
import { Event } from "../interface/events";

export const getEventById = async (eventId: string) => {
    const event = await db
      .collection("events")
      .where("eventId", "==", eventId)
      .get();
    let user: any = {};
    event.forEach((doc) => (user = { ...(doc.data() as Event), id: doc.id }));
    return user;
  };