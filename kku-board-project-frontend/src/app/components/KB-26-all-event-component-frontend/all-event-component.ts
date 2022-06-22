import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Event } from 'src/app/interfaces/event';
import 'dayjs/locale/th';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'all-event',
  templateUrl: './all-event-component.html',
  styleUrls: ['./all-event-component.css'],
})
export class AllEventComponent implements OnInit {
  datas : any[] = [];
  uid: string | null | undefined;

  constructor(private eventService: EventService) {
    this.uid = localStorage.getItem('userUid');
    this.eventService.getEvenById(this.uid).subscribe((res) => {
<<<<<<< HEAD
      this.datas = this.convertDatas(res)      
=======
      this.datas = this.convertDatas(res)
      
      // console.log(res);
      
>>>>>>> de299fb53ffaa7ad6681bddc4ce0835a9f6fd2a2
    });
    
  }
  ngOnInit(): void {
    
  }
  convertDatas = (data: Event[]) => {
    return data.map((item) => {
      return {
        header: item.header,
        description: item.description,
        attendees: item.attendees,
        eventType: item.eventType,
        location: item.location,
        startDate: dayjs(item.startDate * 1000)
          .locale('th')
          .format('ddd D MMM YYYY'),
        endDate: dayjs(item.endDate * 1000)
          .locale('th')
          .format('ddd D MMM YYYY'),
        startTime: dayjs(item.startTime * 1000)
          .locale('th')
          .format('ddd D MMM YYYY'),
        endTime: dayjs(item.endTime * 1000)
          .locale('th')
          .format('ddd D MMM YYYY'),
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
  isVisible = false;

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

  confirm(item:any): void {
    this.uid = localStorage.getItem('userUid');
    this.eventService.patchJoin(item.eventId,this.uid).subscribe();
  }
}
