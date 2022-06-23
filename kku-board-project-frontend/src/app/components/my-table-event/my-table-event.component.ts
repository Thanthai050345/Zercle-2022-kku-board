import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { MyTableEvent } from 'src/app/interfaces/myTableEvent';
import * as buddhistEra from 'dayjs/plugin/buddhistEra';
import { Event } from 'src/app/interfaces/event';

dayjs.extend(buddhistEra);

@Component({
  selector: 'app-my-table-event',
  templateUrl: './my-table-event.component.html',
  styleUrls: ['./my-table-event.component.css'],
})
export class MyTableEventComponent implements OnInit {
  @Input() events: any[] = [];
  toDay = Date.now();
  aDay = 86400 * 1000;
  aHour = 3600 * 1000;
  isVisible: boolean = false;
  isOkLoading: boolean = false;
  dataModal: any;
  getEvent(data: any) {
    // console.log(data);
    this.isVisible = true;
    this.dataModal = data
    console.log(this.dataModal);
    
  }
  deleteEvent(data: any) {
    console.log('ออกจากกิจกรรม');
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
  constructor() {}
  ngOnInit(): void {}
}
