import { Component, OnInit } from '@angular/core';
import 'dayjs/locale/th';
import * as dayjs from 'dayjs';
import { dataEvent } from 'src/app/interfaces/dataEvent';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TopEventService } from '../../services/top-event.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'popular-event',
  templateUrl: './popular-event.component.html',
  styleUrls: ['./popular-event.component.css'],
})
export class PopularEventComponent implements OnInit {
  index = 0;
  dataBase: any[] = [];
  userUid: string | undefined | null = '';
  authority: string | undefined | null = '';
  datas: any[] = [];

  constructor(
    private http: HttpClient,
    private modal: NzModalService,
    private Service: TopEventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userUid = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
    this.Service.insertProduct(`${this.userUid}`).subscribe((res) => {
      this.dataBase = res;
      this.datas = this.convertDatas(this.dataBase);
    });
  }

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
        startDate: dayjs(dateS).locale('th').format('ddd D MMM YYYY'),
        endDate: dayjs(dateE).locale('th').format('ddd D MMM YYYY'),
        startTime: dayjs(dateS).locale('th').format('H:mm'),
        endTime: dayjs(dateE).locale('th').format('H:mm'),
        roleAccept: item.roleAccept,
        image: item.image,
        eventId: item.eventId,
        clubName: item.eventId,
      };
    });
  };

  isVisible = false;



  showModal(): void {
    this.isVisible = true;
    console.log(this.datas[this.index].image);

    this.modal.create({
      nzTitle: `${this.datas[this.index].Header}`,
      nzFooter: null,
      nzContent: `
      <b>วันที่จัดกิจกรรม</b><br>
      ${this.datas[this.index].startDate} เวลา ${
        this.datas[this.index].startTime
      } <b> ถึง </b> ${this.datas[this.index].endDate} เวลา ${
        this.datas[this.index].endTime
      }<br>
      <b>รายละเอียดกิจกรรม</b><br>
      ${this.datas[this.index].description}<br>
      <b>รูปแบบกิจกรรม</b><br>
      ${this.datas[this.index].eventType}<br>
      <b>สถานที่จัดกิจกรรม</b><br>
      ${this.datas[this.index].location}<br>
      <b>จำนวนผู้เข้าร่วมแล้ว</b><br>
      ${this.datas[this.index].attendees} ท่าน
      `,
    });
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  checkIndex(e: any): void {
    this.index = e;
  }
  cancel(): void {
    console.log('user do not join');
  }

  confirm(eventId: string): void {
    // console.log(`user join ${eventId}`);
    // this.Service
    //   .patchJoin(this.datas[this.index].eventId, this.userUid)
    //   .subscribe();

    Swal.fire({
      title: 'ยืนยันการเข้าร่วมกิจกรรม',
      text: `${this.datas[this.index].Header}`,
      icon: 'warning',
      iconColor: '#FFCD00',
      showCancelButton: true,
      confirmButtonColor: '#243A73',
      cancelButtonColor: '#B73151',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        this.Service.patchJoin(this.datas[this.index].eventId, this.userUid).subscribe({

          next: (data:any ) => {
            console.log(data);
            if (data.message === 'successfull joined event'){
              window.location.reload();
            } else if (data.message === 'already joined event') {
              this.toastr.error("คุณได้เข้าร่วมกิจกรรมนี้แล้ว", 'Error');
            }else if (data.message === `can't join this event because event is full`) {
              this.toastr.error("กิจกรรมนี้ได้มีผู้สนใจเข้าร่วมเต็มจำนวนแล้ว", 'Error');
            }


            },
            error: (error) => {
            // console.error('There was an error!', error.message);
            this.toastr.error(error.error.message, 'Error');
            },
        });
      }
    })
  }


}
