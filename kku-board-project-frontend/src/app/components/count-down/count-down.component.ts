import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Countdown } from 'src/app/interfaces/countdown';
import 'dayjs/locale/th';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  @Input() role = '';
  @Input() id = '';
  dataBase = [
    {
      eventId: '1',
      eventHeader: 'เส้นทางสู่นักทดสอบเจาะระบบและสายงานไซเบอร์ซีคิวริตี้',
      startDate: 1656905400,
    },
    {
      eventId: '2',
      eventHeader: 'ค่าย CESCa ครั้งที่ 17',
      startDate: 1654583400,
    },
    {
      eventId: '3',
      eventHeader: 'โครงการ ZERCLE INCUBATION PROGRAM',
      startDate: 1654320600,
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
  countdownFormat = 'D ว. H ชม. m น.';
  constructor() {}

  ngOnInit(): void {}
}
