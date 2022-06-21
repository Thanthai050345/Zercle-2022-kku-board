import { Component, OnInit } from '@angular/core';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  baseStudentUrl = 'http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/students/';
  dataBase = [
    {
      firstName: 'ศศิธร',
      lastName: 'ก้อนทอง',
      faculty: 'วิศวกรรมศาสตร์',
      major: 'วิศวกรรมคอมพิวเตอร์',
      email: 'sasithon.ko@kkumail.com',
      studentId: '6330407170',
      phoneNumber: '0918391304',
      password: '1234sasi',
      image: 'https://i.mydramalist.com/pbAyE_5f.jpg',
      role: 'student',
      uid:''
    }
  ]
  dataNoti =[
    {
      eventHeader: "รับน้องใหม่2565",
      clubName: "องค์การนักศึกษา",

    }
  ]
  isVisible = false;

  // constructor(private http: HttpClient) { }
  // getUserById(id: string | undefined){
  //   return this.http.get<User[]>(this.baseStudentUrl + id);
  // }
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
  }
  essl(): void {
    this.isVisible = true;
    console.log('profileeeee');

  }

}
