import { getEventForMyRole } from "./events";

export const getTopEventByRole = async (uid: string) => {
  const event = await getEventForMyRole(uid);
  let sortedEventByAttendees = event.sort((a, b) =>
    a.attendees > b.attendees ? -1 : 1
  );
  let slicedEvent = sortedEventByAttendees.slice(0, 5);

  return slicedEvent;
};
