import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  data = [
    {
      id: 1,
      eventHeader:
        'Green Software Foundation Global Summit New York hosted by Thoughtworks',
      startDate: 'WED, JUN 15',
      startTime: '10:00',
    },
    {
      id: 2,
      eventHeader:
        'Summit New York hosted by Thoughtworks',
      startDate: 'WED, JUN 15',
      startTime: '10:00',
    },
    {
      id: 3,
      eventHeader:
        'Green Software Foundation Global',
      startDate: 'WED, JUN 15',
      startTime: '10:00',
    },
  ];
  countdownFormat = 'HH:mm:ss';

  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  constructor() {}

  ngOnInit(): void {
    console.log(this.deadline);
  }
}
