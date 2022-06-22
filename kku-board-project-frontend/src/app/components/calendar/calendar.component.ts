import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
// import { Calendar } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  Events: any[] = [
    {
      title: 'All Day Event',
      start: '2022-06-01',
    },
    {
      title: 'Long Event',
      start: '2022-06-01',
      end: '2022-06-10',
      color: 'purple', // override!
    },
    {
      groupId: '999',
      title: 'Repeating Event',
      start: '2022-06-09T16:00:00',
    },
    {
      groupId: '999',
      title: 'Repeating Event',
      start: '2022-06-16T16:00:00',
    },
    {
      title: 'Conference',
      start: '2022-06-11',
      end: '2022-06-13',
      color: 'purple', // override!
    },
    {
      title: 'Meeting',
      start: '2022-06-12T10:30:00',
      end: '2022-06-12T12:30:00',
    },
    {
      title: 'Lunch',
      start: '2022-06-12T12:00:00',
    },
    {
      title: 'Meeting',
      start: '2022-06-12T14:30:00',
    },
    {
      title: 'Birthday Party',
      start: '2022-06-13T07:00:00',
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2022-06-28',
    },
  ];

  /*------------------------------------------
  --------------------------------------------
  Define calendarOptions
  --------------------------------------------
  --------------------------------------------*/
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    locale: 'th',
    events: this.Events,
  };

  /*------------------------------------------
  --------------------------------------------
  Define constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) {}

  /*------------------------------------------
  --------------------------------------------
  Define ngOnInit()
  --------------------------------------------
  --------------------------------------------*/
  ngOnInit() {
    // this.httpClient
    //     .get('http://localhost:8001/events.php')
    //     .subscribe((res: any) => {
    //       this.Events = res;
    //       this.calendarOptions.events = this.Events;
    //     });
  }

  /*------------------------------------------
  --------------------------------------------
  Define handleDateClick()
  --------------------------------------------
  --------------------------------------------*/
  handleDateClick(arg: any) {
    // alert('date click! ' + arg.dateStr)
    console.log(arg);
  }
}
