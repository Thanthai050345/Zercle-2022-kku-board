import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Countdown } from 'src/app/interfaces/countdown';
import 'dayjs/locale/th';
import{CountDownService} from '../../services/count-down.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  dataBase: any[] = [];
  datas: any[] = [];
  userUid: string | undefined | null = "";
  authority: string | undefined | null = "";

  constructor(private http: HttpClient,private Service: CountDownService) {
    this.userUid = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
    if (this.authority == 'clubAdmin'){
      this.Service.getcountdownClubID(`${this.userUid}`).subscribe((res) => {
      this.dataBase = res;
      this.datas = this.convertDatas(this.dataBase);
      });
    }else if (this.authority == 'student'){
      this.Service.getcountdownStudent(`${this.userUid}`).subscribe((res) => {
        this.dataBase = res;
        this.datas = this.convertDatas(this.dataBase);
      });
    }
  }
  ngOnInit(): void {
  }
  convertDatas = (data: Countdown[]): any => {
    return data.map((item) => {
      return {
        id: item.eventId,
        eventHeader: item.eventHeader,
        startDate: dayjs(item.startDate).locale('th').format('dd D MMM'),
        startTime: dayjs(item.startDate).locale('th').format('H:mm'),
        deadline: item.startDate,
      };
    });
  };
  toDay = Date.now();
  aDay = 86400 * 1000;
  aHour = 3600 * 1000;
}
