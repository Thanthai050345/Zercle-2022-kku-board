import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Event } from 'src/app/interfaces/event';
import 'dayjs/locale/th';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'all-event',
  templateUrl: './all-event-component.html',
  styleUrls: ['./all-event-component.css'],
})
export class AllEventComponent implements OnInit {
  datas: any[] = [];
  uid: string | null | undefined;
  authority: string | null | undefined;
  isVisible = false;
  buttonJoinVisible = false;
  buttonJoinDelete = false;

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {
    this.uid = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
    if (this.authority == 'student') {
      this.buttonJoinVisible = true;
      this.eventService.getEvenById(this.uid).subscribe((res) => {
        this.datas = this.convertDatas(res);
      });
    } else if (this.authority == 'clubAdmin') {
      this.buttonJoinDelete = true;
      this.eventService.getEventClubByUid(this.uid).subscribe((res) => {
        this.datas = this.convertDatas(res);
      });
    }
  }
  ngOnInit(): void {}
  convertDatas = (data: Event[]) => {
    return data.map((item) => {
      return {
        header: item.header,
        description: item.description,
        attendees: item.attendees,
        eventType: item.eventType,
        location: item.location,
        startDate: dayjs(item.startDate).locale('th').format('ddd D MMM YYYY'),
        endDate: dayjs(item.endDate).locale('th').format('ddd D MMM YYYY'),
        startTime: dayjs(item.startDate).locale('th').format('HH:mm'),
        endTime: dayjs(item.endDate).locale('th').format('HH:mm'),
        roleAccept: item.roleAccept,
        image: item.image,
        eventId: item.eventId,
        clubName: item.clubName,
      };
    });
  };
  datamodal: Event = {
    header: '',
    description: '',
    attendees: 0,
    eventType: '',
    location: '',
    startDate: 0,
    endDate: 0,
    startTime: 0,
    endTime: 0,
    roleAccept: [],
    image: '',
    eventId: 0,
    clubName: '',
  };
  showModal(data: Event): void {
    this.datamodal = data;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  cancel(): void {}

  sweetalertDelete(item: any): void {
    Swal.fire({
      title: 'คุณต้องการลบกิจกรรมใช่ไหม',
      text: 'กดยืนยันเพื่อลบกิจกรรม',
      icon: 'warning',
      showCancelButton: true,
      iconColor: '#FFCD00',
      confirmButtonColor: '#243A73',
      cancelButtonColor: '#B73151',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventService.deleteEventClubByUid(item.eventId).subscribe();
        Swal.fire({
          icon: 'success',
          title: 'คุณได้ลบกิจกรรม',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  sweetalert(item: any) {
    Swal.fire({
      title: 'คุณต้องการเข้าร่วมกิจกรรมใช่ไหม',
      text: 'กดยืนยันเพื่อเข้าร่วม',
      icon: 'warning',
      showCancelButton: true,
      iconColor: '#FFCD00',
      confirmButtonColor: '#243A73',
      cancelButtonColor: '#B73151',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        this.uid = localStorage.getItem('userUid');
        this.eventService.patchJoin(item.eventId, this.uid).subscribe({
          next: (data: any) => {
            console.log(data);
            if (data.message === 'successfull joined event') {
              Swal.fire({
                icon: 'success',
                title: 'คุณได้เข้าร่วมกิจกรรม',
                showConfirmButton: false,
                timer: 1500,
              });
              window.location.reload();
            } else if (data.message === 'already joined event') {
              this.toastr.error('คุณได้เข้าร่วมกิจกรรมนี้แล้ว', 'Error');
            } else if (
              data.message === `can't join this event because event is full`
            ) {
              this.toastr.error(
                'กิจกรรมนี้ได้มีผู้สนใจเข้าร่วมเต็มจำนวนแล้ว',
                'Error'
              );
            }
          },
          error: (error) => {
            this.toastr.error(error.error.message, 'Error');
          },
        });
        
      }
    });
  }
}
