import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Club } from 'src/app/interfaces/club';
import { Countdown } from 'src/app/interfaces/countdown';
import { EventTable } from 'src/app/interfaces/even';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  aDay = 86400 * 1000;
  authority: string | null | undefined;
  userUid: string | null | undefined;
  user: User = {
    studentId: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    major: '',
    authority: '',
    clubed: [],
    email: '',
    faculty: '',
    urlImage: '',
  };
  club: Club = {
    password: '',
    members: [],
    clubName: '',
    authority: '',
    email: '',
    faculty: '',
    urlImage: '',
  };
  eventTable: any[] = [{
    eventId: '',
    startDate: 0,
    header: '',
  }];
  countdown: Countdown[] = [];
  datas: any;
  isVisible = false;
  isOkLoading = false;

  constructor(
    private userService: UserService,
    private eventService: EventService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authority = localStorage.getItem('authority');
    this.userUid = localStorage.getItem('userUid');

    if (this.authority === 'student') {
      this.userService.getUserById(this.userUid).subscribe((res) => {
        this.user = res;
        console.log(this.user);
      });
      this.eventService.getCountdownUserById(this.userUid).subscribe((res) => {
        this.countdown = res.filter(
          (element) => this.aDay > element.startDate * 1000 - Date.now()
        );
        this.datas = this.convertDatas(this.countdown);
      });
      this.eventServiec.getEventByUid(this.userUid).subscribe((res) => {
        this.eventTable = this.convertEventTableDatas(res);
        console.log(this.eventTable);
      });
    } else if (this.authority === 'clubAdmin') {
      this.userService.getClubById(this.userUid).subscribe((res) => {
        this.club = res;
        console.log(this.club);
      });
      this.eventService.getCountdownClubById(this.userUid).subscribe((res) => {
        this.countdown = res.filter(
          (element) => this.aDay > element.startDate * 1000 - Date.now()
        );
        this.datas = this.convertDatas(this.countdown);
      });
    }
  }
  convertDatas = (data: Countdown[]) => {
    return data.map((item) => {
      const dateS = item.startDate * 1000;
      return {
        id: item.eventId,
        eventHeader: item.eventHeader,
        startDate: dayjs(dateS).locale('th').format('dd D MMM'),
        startTime: dayjs(dateS).locale('th').format('H:mm'),
        deadline: dateS,
      };
    });
  };

  convertEventTableDatas = (data: EventTable[]) => {
    return data.map((item) => {
      const dateS = item.startDate * 1000;
      return {
        eventId: item.eventId,
        startDate:dayjs(dateS).locale('th').format('dd D MMM'),
        header: item.header,
      };
    });
  };

  logout() {
    this.authService.SignOut();
  }

  showModal(): void {
    if (this.user.authority == "student") {
      this.isVisible = true;
    }
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
}
