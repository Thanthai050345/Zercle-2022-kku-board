export interface Event {
  [key: string]: any;
  header: string;
  maxAttendees: number;
  description: string;
  attendees: number;
  eventType: string;
  location: string;
  startDate: number;
  endDate: number;
  roleAccept: string[];
  image: string[];
  eventId: string;
  clubName: string;
  join: string[];
}