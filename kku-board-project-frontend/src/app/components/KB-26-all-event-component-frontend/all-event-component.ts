import { Component,Input ,OnInit } from '@angular/core';
import * as dayjs from 'dayjs'
import{ Even } from 'src/app/interfaces/even'
import "dayjs/locale/th";


@Component({
  selector: 'all-event',
  templateUrl: './all-event-component.html',
  styleUrls: ['./all-event-component.css'],
})
export class AllEventComponent implements OnInit {

  @Input() role = ""
  dataBase = [
    {
      eventHeader: "มข.เข้าร่วมพิธีทอดผ้าป่าสนับสนุนโครงการทุนเล่าเรียนหลวงฯ",
      description: "ในสมัยพุทธกาล เมื่อพระผู้มีพระภาคเจ้าประทับ ณ พระเชตวนาราม ซึ่งเป็นพระอารามที่อนาถบิณฑิกเศรษฐีได้สร้างถวายเป็นพุทธนิวาส ได้มีภิกษุ ๓๐ รูป ชาวเมืองปาฐา ซึ่งอยู่ด้านทิศตะวันตกในแคว้นโกศลเดินทางมาหมายจะเฝ้าพระพุทธองค์ที่เมืองสาวัตถี แต่มาไม่ทันเพราะใกล้ถึงวัน",
      attendees: 99,
      eventType: "onsite",
      location: "ณ วัดธาตุ พระอารามหลวงขอนแก่น",
      startDate: 1654275600,
      endDate: 1654362000,
      startTime: 1654327541,
      endTime: 1654328541,
      roleAccept: ["พุทธรรม"],
      image: "https://image.makewebeasy.net/makeweb/0/wdU8ZjHiP/PicAngthong62/%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B9%88%E0%B8%B2_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87_%E0%B8%88_%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87_11052019_%E0%B9%91%E0%B9%99%E0%B9%90%E0%B9%95%E0%B9%91%E0%B9%93_0286.jpg",
      eventId: 12345,
      clubName: "พุทธรรม",
    },
    {
      eventHeader: "รับน้องใหม่2565",
      description: "ปฐมนิเทศนักศึกษาใหม่และพิธีบายศรีสู่ขวัญนักศึกษาใหม่",
      attendees: 99,
      eventType: "onsite",
      location: "ณ หอกาญจนาภิเษก",
      startDate: 1554275600,
      endDate: 1654362000,
      startTime: 1654327541,
      endTime: 1654328541,
      roleAccept: ["KKU59"],
      image: "https://campus.campus-star.com/app/uploads/2019/07/KKU01-768x511.jpg",
      eventId: 123,
      clubName: "องค์การนักศึกษา",
    },
    {
      eventHeader: "โครงการ ZERCLE INCUBATION PROGRAM",
      description: "ปฐมนิเทศนักศึกษาใหม่และพิธีบายศรีสู่ขวัญนักศึกษาใหม่",
      attendees: 99,
      eventType: "onsite",
      location: "sci-park ชั้น 1",
      startDate: 1654220600,
      endDate: 1654362000,
      startTime: 1654327541,
      endTime: 1654328541,
      roleAccept: ["KKU59"],
      image: "https://www.bloggang.com/data/vinitsiri/picture/1331280812.jpg",
      eventId: 456,
      clubName: "CoE EN",
    },

  ];
  convertDatas = (data: Even[]): any => {
    return data.map((item) => {
      return {
        eventHeader: item.eventHeader,
        description: item.description,
        attendees: item.attendees,
        eventType: item.eventType,
        location: item.location,
        startDate: dayjs(item.startDate * 1000).locale("th").format('ddd D MMM YYYY'),
        endDate: dayjs(item.endDate * 1000).locale("th").format('ddd D MMM YYYY'),
        startTime: dayjs(item.startTime * 1000).locale("th").format('ddd D MMM YYYY'),
        endTime: dayjs(item.endTime * 1000).locale("th").format('ddd D MMM YYYY'),
        roleAccept: item.roleAccept,
        image: item.image,
        eventId: item.eventId,
        clubName: item.eventId,
      };
    });
  };
  datas = this.convertDatas(this.dataBase);



  isVisible = false;



  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  cancel(): void {
  }

  confirm(): void {
  }




  constructor() {}

  ngOnInit(): void {

  }
}
