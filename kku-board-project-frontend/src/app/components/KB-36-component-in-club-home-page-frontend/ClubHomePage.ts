import { Component,Input ,OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { MemberService } from 'src/app/services/member.service';
@Component({
  selector: 'club-component',
  templateUrl: './ClubHomePage.html',
  styleUrls: ['./ClubHomePage.css'],
})
export class ClubHomePage implements OnInit {
  @Input() role = "" 
  isVisible = false;
  data:any[] =[];
  index = 0;
  clubId: string | null | undefined;
  current = 1;
  datamodal:User = {
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
  }

  constructor(private memberService: MemberService) {
    
  }

  ngOnInit(): void {
    console.log(this.clubId);
    this.clubId = localStorage.getItem('userUid');
    this.memberService.getMemberByClubId(this.clubId).subscribe(res => {
      this.data = res;
    });

  }

  showModal(data: User): void {
    this.datamodal = data;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  } 
}
