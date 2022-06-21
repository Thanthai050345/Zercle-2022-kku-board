import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/interfaces/club';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
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
    urlImage: ''
  };
  club: Club = {
    password: '',
    members: [],
    clubName: '',
    authority: '',
    email: '',
    faculty: '',
    urlImage: ''
  };
  // urlImage: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.authority = localStorage.getItem('authority');
    this.userUid = localStorage.getItem('userUid');
    if (this.authority === 'student') {
      this.userService.getUserById(this.userUid).subscribe((res) => {
        this.user = res;
        console.log(this.user);
      });
    } else if (this.authority === 'clubAdmin') {
      this.userService.getClubById(this.userUid).subscribe((res) => {
        this.club = res;
        console.log(this.club);
      });
    }
  }

  onCilck() {
    console.log(this.authority, this.userUid);
  }
}
