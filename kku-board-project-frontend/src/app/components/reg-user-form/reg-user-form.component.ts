import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { facultys } from 'src/assets/datas/facultys';

@Component({
  selector: 'app-reg-user-form',
  templateUrl: './reg-user-form.component.html',
  styleUrls: ['./reg-user-form.component.css'],
})
export class RegUserFormComponent implements OnInit {
  facultys = facultys;
  majors: any = [];
  isMatch: boolean = false;
  regUserForm = new FormGroup({
    firstName: new FormControl('บักเขียบ', [Validators.required]),
    lastName: new FormControl('หำเหม็น', [Validators.required]),
    faculty: new FormControl('', [Validators.required]),
    major: new FormControl('', [Validators.required]),
    email: new FormControl('test4@test.com', [
      Validators.required,
      Validators.email,
    ]),
    studentId: new FormControl('633040100-5', [Validators.required]),
    phoneNumber: new FormControl('0996569600', [Validators.required]),
    password: new FormControl('123456', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('123456', [
      Validators.required,
      Validators.minLength(6),
    ]),
    // image: new FormControl('', [Validators.required]),
    // role: new FormControl('', [Validators.required]),
  });
  onSubmit(): void {
    const password = this.regUserForm.value.password;
    const confirmPassword = this.regUserForm.value.confirmPassword;
    if (password === confirmPassword) {
      // console.log(this.regUserForm.value);
      const data: User = {
        ...this.regUserForm.value,
        clubed: [],
        urlImage: '',
        authority: 'student',
      };
      console.log(data);
      this.http.post(
        'http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/register/student',
        data
      ).subscribe(res => {
        console.log(res);
      });
    } else {
      this.isMatch = true;
    }
  }
  onChange(event: any) {
    console.log(event);
    const faculty = facultys.find((faculty) => faculty.value == event);
    this.majors = faculty?.majors;
  }
  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnInit(): void {}
}
