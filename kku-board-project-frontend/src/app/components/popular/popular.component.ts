import { Component, OnInit ,ViewChild} from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'popular' ,
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {

  // @Input() role = ""

  dataBase = [
    {
      eventHeader: "รับน้องใหม่2565",
      description: "ปฐมนิเทศนักศึกษาใหม่และพิธีบายศรีสู่ขวัญนักศึกษาใหม่",
      attendees: 99,
      eventType: "onsite",
      location: "ณ หอกาญจนาภิเษก",
      startDate: 1654275600,
      endDate: 1654362000,
      startTime: 1654327541,
      endTime: 1654328541,
      roleAccept: ["KKU59"],
      image: "https://campus.campus-star.com/app/uploads/2019/07/KKU01-768x511.jpg",
      eventId: String,
      clubName: String,
    },
    {
      eventHeader: "ค่าย CESCa ครั้งที่ 17'",
      description: "ปฐมนิเทศนักศึกษาใหม่และพิธีบายศรีสู่ขวัญนักศึกษาใหม่",
      attendees: 99,
      eventType: "onsite",
      location: "ณ หอกาญจนาภิเษก",
      startDate: 1654275600,
      endDate: 1654362000,
      startTime: 1654327541,
      endTime: 1654328541,
      roleAccept: ["KKU59"],
      image: "https://www.trueplookpanya.com/admissions/campnews/detail/1619",
      eventId: String,
      clubName: String,
    },{
      eventHeader: "โครงการ ZERCLE INCUBATION PROGRAM",
      description: "ปฐมนิเทศนักศึกษาใหม่และพิธีบายศรีสู่ขวัญนักศึกษาใหม่",
      attendees: 99,
      eventType: "onsite",
      location: "ณ หอกาญจนาภิเษก",
      startDate: 1654320600,
      endDate: 1654362000,
      startTime: 1654327541,
      endTime: 1654328541,
      roleAccept: ["KKU59"],
      image: "https://techsauce.co/pr-news/kx-techbite-demoday2021",
      eventId: String,
      clubName: String,
    }
  ];

  constructor() {}
  ngOnInit() {}
}

