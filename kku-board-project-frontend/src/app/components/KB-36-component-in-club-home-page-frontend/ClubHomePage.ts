import { Component,Input ,OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserService } from 'src/app/services/user.service';
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

  dataBase = [
    {
      name:"Apinan Thongpoo",
      image: "https://image.makewebeasy.net/makeweb/0/wdU8ZjHiP/PicAngthong62/%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B9%88%E0%B8%B2_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87_%E0%B8%88_%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87_11052019_%E0%B9%91%E0%B9%99%E0%B9%90%E0%B9%95%E0%B9%91%E0%B9%93_0286.jpg",
    }
  ];
  current = 1;

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(res => {
      this.data = res;
      console.log(res);
      console.log(this.data[0]);
      
    });
  }

  constructor(private modal: NzModalService,
              private userService: UserService) {}

  showModal() {
    this.isVisible = true;
    this.modal.create({
      nzTitle: `${this.data[this.index].urlImage}`,
      nzFooter: null,
      nzContent:`ชื่อสมาชิก:<br>
      ${this.data[this.index].firstName}  ${this.data[this.index].lastName}<br>
      อีเมล์:<br>
      ${this.data[this.index].email}<br>
      รหัสนักศึกษา:<br>
      ${this.data[this.index].studentId}<br>
      คณะ:<br>
      ${this.data[this.index].faculty}<br>
      สาขา:<br>
      ${this.data[this.index].major}<br>
      เบอร์โทรศัพท์:<br>
      ${this.data[this.index].phoneNumber}<br>
      `
    })
  }

  handleCancel(): void {
    console.log('closed detail modal!');
    this.isVisible = false;
  }

  
}
