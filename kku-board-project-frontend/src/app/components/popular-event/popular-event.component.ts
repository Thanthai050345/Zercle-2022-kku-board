import { Component, OnInit } from '@angular/core';
import "dayjs/locale/th";
import * as dayjs from 'dayjs';
import {dataEvent} from 'src/app/interfaces/dataEvent';
import { NzModalService } from 'ng-zorro-antd/modal';
import{TopEventService} from '../../services/top-event.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'popular-event',
  templateUrl: './popular-event.component.html',
  styleUrls: ['./popular-event.component.css']
})
export class PopularEventComponent implements OnInit {
  index = 0;
  dataBase:any[]= [];
  userUid: string | undefined | null = "";
  authority: string | undefined | null = "";
  datas: any[] = [];

  convertDatas = (data: dataEvent[]) => {
    // console.log("data test", data);
    return data.map((item) => {
      const dateS = item.startDate * 1000;
      const dateE = item.endDate * 1000;
      return {
        Header: item.header,
        description: item.description,
        attendees: item.attendees,
        eventType: item.eventType,
        location: item.location,
        startDate: dayjs(dateS).locale("th").format('ddd D MMM YYYY'),
        endDate: dayjs(dateE).locale("th").format('ddd D MMM YYYY'),
        startTime: dayjs(dateS).locale("th").format('H:mm'),
        endTime: dayjs(dateE).locale("th").format('H:mm'),
        roleAccept: item.roleAccept,
        image: item.image,
        eventId: item.eventId,
        clubName: item.eventId,
      };
    });
  };

  isVisible = false;

  ngOnInit() {
    this.userUid = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
    this.productService.insertProduct(`${this.userUid}`).subscribe(res =>{
      this.dataBase = res;
      this.datas = this.convertDatas(this.dataBase);
    });
}


  showModal(): void {
    this.isVisible = true;

    this.modal.create({
      nzTitle: `${this.datas[this.index].Header}`,
      nzFooter: null,
      nzContent:`<b>วันที่จัดกิจกรรม</b><br>
      ${this.datas[this.index].startDate} เวลา ${this.datas[this.index].startTime} <b> ถึง </b> ${this.datas[this.index].endDate} เวลา ${this.datas[this.index].endTime}<br>
      <b>รายละเอียดกิจกรรม</b><br>
      ${this.datas[this.index].description}<br>
      <b>รูปแบบกิจกรรม</b><br>
      ${this.datas[this.index].eventType}<br>
      <b>สถานที่จัดกิจกรรม</b><br>
      ${this.datas[this.index].location}<br>
      <b>จำนวนผู้เข้าร่วมแล้ว</b><br>
      ${this.datas[this.index].attendees} ท่าน
      `
    })

  }


  handleCancel(): void {
    this.isVisible = false;
  }
  checkIndex(e:any): void {
    this.index = e;

  }
  cancel(): void {
    console.log('user do not join');

  }

  confirm(eventId:string): void {
    // console.log(`user join ${eventId}`);
    this.productService.patchJoin(this.datas[this.index].eventId,this.userUid).subscribe();

  }

  constructor(private http: HttpClient,private modal: NzModalService,private productService: TopEventService) { }


}
