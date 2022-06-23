import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import * as dayjs from 'dayjs';
import { Event } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';
import { colors } from 'src/assets/datas/color';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input() uid: string | null | undefined;
  @Input() authority: string | null | undefined;
  color = colors;
  constructor(private eventService: EventService) {}

  ngOnInit() {
    if (this.authority === 'clubAdmin') {
      this.eventService.getEventClubByUid(this.uid).subscribe((res) => {
        this.calendarOptions.events = this.convertDataForCalendar(res);
        // console.log(this.convertDataForCalendar(res));
      });
    } else if (this.authority === 'student') {
      this.eventService.getEventUserByUid(this.uid).subscribe((res) => {
        this.calendarOptions.events = this.convertDataForCalendar(res);
        // console.log(this.convertDataForCalendar(res));
      });
    }
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    locale: 'th',
  };

  convertDataForCalendar(data: Event[]) {
    return data.map((item) => {
      const randomColor =
        this.color[Math.floor(Math.random() * this.color.length)];
      return {
        title: item.header,
        start: dayjs(item.startDate).format('YYYY-MM-DD'),
        end: dayjs(item.endDate).add(1, 'day').format('YYYY-MM-DD'),
        color: randomColor,
      };
    });
  }

  handleDateClick(arg: any) {
    // console.log(arg);
  }
}
