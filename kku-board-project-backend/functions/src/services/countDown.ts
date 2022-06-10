import { Countdown } from "../interface/countdown";
import { getAllEventsByClubId, getEventByUid } from "./events";

export const getEventStudentsCountDown = async (uid: string) => {
  const event = await getEventByUid(uid);
  let sortedEventByStartDate = event.sort((a: any, b: any) => {
    return a.startDate - b.startDate;
  });
  let slicedEvent = sortedEventByStartDate.slice(0, 5);
  const countdown = (data: Countdown[]) =>
    data.map((item) => {
      return {
        eventId: item.eventId,
        eventHeader: item.header,
        startDate: item.startDate,
      };
    });
  return countdown(slicedEvent);
};

export const getEventClubsCountDown = async (uid: string) => {
    const event = await getAllEventsByClubId(uid);
    let sortedEventByStartDate = event.sort((a: any, b: any) => {
      return a.startDate - b.startDate;
    });
    let slicedEvent = sortedEventByStartDate.slice(0, 5);
    const countdown = (data: Countdown[]) =>
      data.map((item) => {
        return {
          eventId: item.eventId,
          eventHeader: item.header,
          startDate: item.startDate,
        };
      });
    return countdown(slicedEvent);
  };