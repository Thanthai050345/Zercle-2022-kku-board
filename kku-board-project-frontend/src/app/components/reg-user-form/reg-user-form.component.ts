import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { facultys } from 'src/assets/datas/facultys';

@Component({
  selector: 'app-reg-user-form',
  templateUrl: './reg-user-form.component.html',
  styleUrls: ['./reg-user-form.component.css'],
})
export class RegUserFormComponent implements OnInit {
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  user: any;

  facultys = facultys;
  majors: any = [];
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
    const email = this.regUserForm.value.email;
    if (password === confirmPassword) {
      const data: User = {
        firstName: this.regUserForm.value.firstName,
        lastName: this.regUserForm.value.lastName,
        faculty: this.regUserForm.value.faculty,
        major: this.regUserForm.value.major,
        email: this.regUserForm.value.email,
        studentId: this.regUserForm.value.studentId,
        phoneNumber: this.regUserForm.value.phoneNumber,
        password: this.regUserForm.value.password,
        clubed: [],
        urlImage: '',
        authority: 'student',
      };
      this.userService.postUser(data).subscribe(
        (_res) => {
          this.userService.getAllUser().subscribe((res) => {
            this.user = res.find((user) => {
              return user.email === email;
            });
            localStorage.setItem('authority', this.user.authority);
            localStorage.setItem('userUid', this.user.uid);
          });
        },
        (err: HttpErrorResponse) => {
          this.toastr.error(err.error.message, 'Error');
        }
      );
    } else {
      this.toastr.error('รหัสผ่านไม่ตรงกันโปรดอักครั้ง', 'Error');
    }
  }
  onChange(event: any) {
    console.log(event);
    const faculty = facultys.find((faculty) => faculty.value == event);
    this.majors = faculty?.majors;
  }
}
