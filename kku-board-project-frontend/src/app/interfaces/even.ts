export interface Even {
  eventHeader: String;
  description: String;
  attendees: number;
  eventType: String;
  location: String;
  startDate: number;
  endDate: number;
  startTime: number;
  endTime: number;
  roleAccept: String[];
  image: String;
  eventId: number;
  clubName: String;
}

export interface EventTable {
  eventId: string;
  startDate: number;
  header: string;
}
