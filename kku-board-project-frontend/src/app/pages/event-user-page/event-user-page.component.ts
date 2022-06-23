import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { EventCalendar } from 'src/app/interfaces/calendar';
import { Event } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-user-page',
  templateUrl: './event-user-page.component.html',
  styleUrls: ['./event-user-page.component.css']
})
export class EventUserPageComponent implements OnInit {
  authority: string | null | undefined;
  uid: string | null | undefined;
  eventCalendar: EventCalendar[] = [];
  eventTable: any[] = [];
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.uid = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
    this.eventService.getEventUserByUid(this.uid).subscribe((res) => {
      this.eventCalendar = this.convertDataForCalendar(res);
      // console.log(this.eventCalendar);
      this.eventTable = this.convertDataForTable(res);
      // console.log(this.eventTable);
    });
  }
  convertDataForCalendar(data: Event[]) {
    return data.map((item) => {
      const dateS = item.startDate * 1000;
      return {
        title: item.header,
        start: dayjs(dateS).format('YYYY-MM-DD'),
        end: dayjs(dateS).format('YYYY-MM-DD'),
        color: '#134133',
      };
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
        deadline: dateS,
      };
    });
  }
}
