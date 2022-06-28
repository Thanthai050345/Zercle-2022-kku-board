import { Component,Input ,OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';
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
    this.clubId = localStorage.getItem('userUid');
    this.memberService.getMemberByClubId(this.clubId).subscribe(res => {
      console.log(res);

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

  sweetalertDelete(item: any): void {
    console.log(item);

    Swal.fire({
      title: 'คุณต้องการลบสมาชิกที่เลือกใช่ไหม',
      text: "กดยืนยันเพื่อลบสมาชิก",
      icon: 'warning',
      showCancelButton: true,
      iconColor: '#FFCD00',
      confirmButtonColor: '#243A73',
      cancelButtonColor: '#B73151',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.isConfirmed) {
        this.memberService.deleteClubMember(this.clubId,item.email).subscribe();
        Swal.fire({
          icon: 'success',
          title: 'คุณได้ลบสมาชิก',
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      }
    });
  }
}
