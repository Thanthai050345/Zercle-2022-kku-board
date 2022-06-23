import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
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
  @Input() uid: string | null | undefined;
  @Input() authority: string | null | undefined;
  events: any[] = [];
  toDay = Date.now();
  aDay = 86400 * 1000;
  aHour = 3600 * 1000;
  isVisible: boolean = false;
  isOkLoading: boolean = false;
  dataModal: any;
  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    if (this.authority === 'student') {
      this.eventService.getEventUserByUid(this.uid).subscribe((res) => {
        this.events = this.convertDataForTable(res);
      });
    } else if (this.authority === 'clubAdmin') {
      this.eventService.getEventClubByUid(this.uid).subscribe((res) => {
        this.events = this.convertDataForTable(res);
      });
    }
  }

  getEvent(data: any) {
    this.isVisible = true;
    this.dataModal = data;
  }
  deleteEvent(data: any) {
    Swal.fire({
      title: 'ยืนยันการยกเลิกกิจกรรม?',
      text: `${data.header}`,
      icon: 'warning',
      iconColor: '#FFCD00',
      showCancelButton: true,
      confirmButtonColor: '#243A73',
      cancelButtonColor: '#B73151',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.authority === 'clubAdmin') {
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
        } else if (this.authority === 'student') {
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
  handleCancel(): void {
    this.isVisible = false;
  }
  convertDataForTable(data: Event[]) {
    return data.map((item) => {
      return {
        eventId: item.eventId,
        header: item.header,
        startDate: dayjs(item.startDate).locale('th').format('D/MMM/BB'),
        endDate: dayjs(item.endDate).locale('th').format('D/MMM/BB'),
        startTime: dayjs(item.startDate).locale('th').format('H:mm'),
        endTime: dayjs(item.endDate).locale('th').format('H:mm'),
        deadline: item.startDate,
        eventType: item.eventType,
        location: item.location,
        attendees: item.attendees,
        clubName: item.clubName,
        description: item.description,
        image: item.image,
      };
    });
  }
}
