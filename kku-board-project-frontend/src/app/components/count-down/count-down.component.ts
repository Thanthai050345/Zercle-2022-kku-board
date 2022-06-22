import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Countdown } from 'src/app/interfaces/countdown';
import 'dayjs/locale/th';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  dataBase: Countdown[] = [
    {
      eventId: '1',
      eventHeader: 'เส้นทางสู่นักทดสอบเจาะระบบและสายงานไซเบอร์ซีคิวริตี้',
      startDate: 1655780816,
    },
    {
      eventId: '2',
      eventHeader: 'ค่าย CESCa ครั้งที่ 17',
      startDate: 1655879816,
    },
    {
      eventId: '3',
      eventHeader: 'โครงการ ZERCLE INCUBATION PROGRAM',
      startDate: 1656905400,
    },
  ];

  convertDatas = (data: Countdown[]): any => {
    return data.map((item) => {
      const dateS = item.startDate * 1000;
      return {
        id: item.eventId,
        eventHeader: item.eventHeader,
        startDate: dayjs(dateS).locale('th').format('dd D MMM'),
        startTime: dayjs(dateS).locale('th').format('H:mm'),
        deadline: dateS,
      };
    });
  };
  datas = this.convertDatas(this.dataBase);
  countdownFormat = 'D ว. H ชม. m น. ss';
  toDay = Date.now();
  aDay = 86400 * 1000;
  aHour = 3600 * 1000;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
<<<<<<< HEAD
    if (localStorage.getItem('authority') === 'student') {
      this.eventService
        .getCountdownUserById(localStorage.getItem('userUid'))
        .subscribe((res) => {
        });
    } else {
      console.log(localStorage.getItem('authority'));
    }
=======
    // if (localStorage.getItem('authority') === 'student') {
    //   this.eventService
    //     .getCountdownUserById(localStorage.getItem('userUid'))
    //     .subscribe((res) => {
    //       console.log(res);
    //     });
    // } else {
    //   console.log(localStorage.getItem('authority'));
    // }
>>>>>>> de299fb53ffaa7ad6681bddc4ce0835a9f6fd2a2
  }
}
