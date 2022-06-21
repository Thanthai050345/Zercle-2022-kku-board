import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kku-board-project-frontend';
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
    }
  ];
}
