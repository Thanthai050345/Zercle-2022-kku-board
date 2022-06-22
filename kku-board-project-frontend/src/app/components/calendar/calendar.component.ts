import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventCalendar } from 'src/app/interfaces/calendar';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input() events: EventCalendar[] = [
    {
      color: '#134133',
      end: '2022-06-23',
      start: '2022-06-23',
      title: 'กิจกรรมปลูกต้นไม้'
    },
  ];

  constructor(private eventService: EventService) {}

  ngOnInit() {}
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    locale: 'th',
    events: this.events,
  };

  handleDateClick(arg: any) {
    console.log(arg);
  }
}
