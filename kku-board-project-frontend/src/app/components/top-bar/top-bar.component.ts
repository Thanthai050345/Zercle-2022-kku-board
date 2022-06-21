import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Club } from 'src/app/interfaces/club';
import { Countdown } from 'src/app/interfaces/countdown';
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
  // urlImage: string;
  countdown: Countdown[] = [];
  datas: any;
  constructor(
    private userService: UserService,
<<<<<<< Updated upstream
    private eventService: EventService,
=======
    private eventServiec: EventService,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      this.eventService.getCountdownUserById(this.userUid).subscribe((res) => {
=======
      this.eventServiec.getCountdownUserById(this.userUid).subscribe((res) => {
>>>>>>> Stashed changes
        this.countdown = res.filter(
          (element) => this.aDay > element.startDate * 1000 - Date.now()
        );
        this.datas = this.convertDatas(this.countdown);
      });
    } else if (this.authority === 'clubAdmin') {
      this.userService.getClubById(this.userUid).subscribe((res) => {
        this.club = res;
        console.log(this.club);
      });
<<<<<<< Updated upstream
      this.eventService.getCountdownClubById(this.userUid).subscribe((res) => {
=======
      this.eventServiec.getCountdownClubById(this.userUid).subscribe((res) => {
>>>>>>> Stashed changes
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

  logout() {
    this.authService.SignOut();
  }
}
