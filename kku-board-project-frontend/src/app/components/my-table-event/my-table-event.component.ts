import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { MyTableEvent } from 'src/app/interfaces/myTableEvent';
import * as buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.extend(buddhistEra);

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-my-table-event',
  templateUrl: './my-table-event.component.html',
  styleUrls: ['./my-table-event.component.css'],
})
export class MyTableEventComponent implements OnInit {
  @Input() events: any[] = []
  toDay = Date.now();
  aDay = 86400 * 1000;
  aHour = 3600 * 1000;
  dataBase: MyTableEvent[] = [
    {
      eventId: '1',
      eventHeader: 'เส้นทางสู่นักทดสอบเจาะระบบและสายงานไซเบอร์ซีคิวริตี้',
      startDate: 1654937278,
      endDate: 1654951678,
    },
    {
      eventId: '2',
      eventHeader: 'เส้นทางสู่นักทดสอบเจาะระบบและสายงานไซเบอร์ซีคิวริตี้',
      startDate: 1657543678,
      endDate: 1657630078,
    },
    {
      eventId: '3',
      eventHeader: 'เส้นทางสู่นักทดสอบเจาะระบบและสายงานไซเบอร์ซีคิวริตี้',
      startDate: 1657716478,
      endDate: 1657723678,
    },
    {
      eventId: '4',
      eventHeader: 'เส้นทางสู่นักทดสอบเจาะระบบและสายงานไซเบอร์ซีคิวริตี้',
      startDate: 1654937278,
      endDate: 1654951678,
    },
    {
      eventId: '5',
      eventHeader: 'เส้นทางสู่นักทดสอบเจาะระบบและสายงานไซเบอร์ซีคิวริตี้',
      startDate: 1654937278,
      endDate: 1654951678,
    },
    {
      eventId: '6',
      eventHeader: 'เส้นทางสู่นักทดสอบเจาะระบบและสายงานไซเบอร์ซีคิวริตี้',
      startDate: 1654937278,
      endDate: 1654951678,
    },
  ];
  convertDatas = (data: MyTableEvent[]): any => {
    return data.map((item) => {
      const dateS = item.startDate * 1000;
      const dateE = item.endDate * 1000;
      return {
        id: item.eventId,
        eventHeader: item.eventHeader,
        startDate: dayjs(dateS).locale("th").format('D/MMM/BB'),
        endDate: dayjs(dateE).locale("th").format('D/MMM/BB'),
        deadline: dateS,
      };
    });
  };
  
  listOfData = this.convertDatas(this.dataBase)
  
  getEvent () {
    console.log('รายละเอียด');
  }
  deleteEvent () {
    console.log('ออกจากกิจกรรม');
  }
  constructor() {}
  ngOnInit(): void {
    // this.getData();
  }
}
