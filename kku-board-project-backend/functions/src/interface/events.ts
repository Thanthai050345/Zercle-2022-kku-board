export interface Event {
  [key: string]: any;
  header: String;
  description: String;
  attendees: Number;
  eventType: String;
  location: String;
  startDate: Number;
  endDate: Number;
  roleAccept: String[];
  image: String[];
  eventId: String;
  clubName: String;
  join?: String[];
}
