import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { MyTableEvent } from 'src/app/interfaces/myTableEvent';
import * as buddhistEra from 'dayjs/plugin/buddhistEra';
import { Event } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

dayjs.extend(buddhistEra);

@Component({
  selector: 'app-my-table-event',
  templateUrl: './my-table-event.component.html',
  styleUrls: ['./my-table-event.component.css'],
})
export class MyTableEventComponent implements OnInit {
  @Input() events: any[] = [];
  @Input() uid: string | null | undefined;
  @Input() authority: string | null | undefined;
  toDay = Date.now();
  aDay = 86400 * 1000;
  aHour = 3600 * 1000;
  isVisible: boolean = false;
  isOkLoading: boolean = false;
  dataModal: any;
  getEvent(data: any) {
    // console.log(data);
    this.isVisible = true;
    this.dataModal = data;
    console.log(this.dataModal);
  }
  deleteEvent(data: any) {
    console.log(this.uid);
    console.log(this.authority);

    console.log(data);
    Swal.fire({
      title: 'ยืนยันการยกเลิกกิจกรรม?',
      text: `${data.eventHeader}`,
      icon: 'warning',
      iconColor: '#FFCD00',
      showCancelButton: true,
      confirmButtonColor: '#243A73',
      cancelButtonColor: '#B73151',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.authority === 'student') {
          this.eventService.deleteEventClubByUid(data.eventId).subscribe({
            next: (_data) => {
              console.log('Delete successful');
              window.location.reload();
            },
            error: (error) => {
              console.error('There was an error!', error.message);
              this.toastr.error(error.message, 'Error');
            },
          });
        } else if (this.authority === 'clubAdmin') {
          this.eventService.patchUnJoin(data.eventId, this.uid).subscribe({
            next: (_data) => {
              console.log('Delete successful');
              window.location.reload();
            },
            error: (error) => {
              this.toastr.error(error.message, 'Error');
            },
          });
        }
        Swal.fire({
          icon: 'success',
          title: 'ลบกิจกรรมเสร็จสิ้น',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}
}
