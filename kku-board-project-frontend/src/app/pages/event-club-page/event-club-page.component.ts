import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { EventCalendar } from 'src/app/interfaces/calendar';
import { Event } from 'src/app/interfaces/event';
// import { MyTableEvent } from 'src/app/interfaces/myTableEvent';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-club-page',
  templateUrl: './event-club-page.component.html',
  styleUrls: ['./event-club-page.component.css'],
})
export class EventClubPageComponent implements OnInit {
  uid: string | null | undefined;
  authority: string | null | undefined;
  eventCalendar: any[] = [];
  eventTable: any[] = [];
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.uid = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
    this.eventService.getEventClubByUid(this.uid).subscribe((res) => {
      this.eventTable = this.convertDataForTable(res);
    });
  }
  
  convertDataForTable(data: Event[]) {
    return data.map((item) => {
      const dateS = item.startDate * 1000;
      const dateE = item.endDate * 1000;
      return {
        eventId: item.eventId,
        eventHeader: item.header,
        startDate: dayjs(dateS).locale("th").format('D/MMM/BB'),
        endDate: dayjs(dateE).locale("th").format('D/MMM/BB'),
        startTime: dayjs(dateS).locale("th").format('H:mm'),
        endTime: dayjs(dateE).locale("th").format('H:mm'),
        deadline: dateS,
        eventType: item.eventType,
        location: item.location,
        attendees: item.attendees,
        clubName: item.clubName,
        description: item.description,
        image: item.image
      };
    });
  }
}
