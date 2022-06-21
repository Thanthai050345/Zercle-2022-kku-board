export interface dataEvent {
  header: string;
  description: string;
  attendees: number;
  eventType: string;
  location: string;
  startDate: number;
  endDate: number;
  startTime: number;
  endTime: number;
  roleAccept: string[];
  image: string;
  eventId: number;
  clubName: string;
}
