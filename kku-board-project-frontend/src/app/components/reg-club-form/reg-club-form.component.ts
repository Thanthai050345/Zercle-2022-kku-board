import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/interfaces/club';
import { UserService } from 'src/app/services/user.service';
import { facultys } from 'src/assets/datas/facultys';
@Component({
  selector: 'app-reg-club-form',
  templateUrl: './reg-club-form.component.html',
  styleUrls: ['./reg-club-form.component.css'],
})
export class RegClubFormComponent implements OnInit {
  facultys = facultys;
  majors: any = [];
  user: any;
  signUpClubForm = new FormGroup({
    clubName: new FormControl('nextGen', [Validators.required]),
    email: new FormControl('test5@test.com', [Validators.required, Validators.email]),
    password: new FormControl('123456', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('123456', [
      Validators.required,
      Validators.minLength(6),
    ]),
    faculty: new FormControl('', [Validators.required]),
    // urlImage: new FormControl('', [Validators.required]),
  });
  onSubmit(): void {
    const password = this.signUpClubForm.value.password;
    const confirmPassword = this.signUpClubForm.value.confirmPassword;
    const email = this.signUpClubForm.value.email;
    if (password === confirmPassword) {
      const data: Club = {
        clubName: this.signUpClubForm.value.clubName,
        faculty: this.signUpClubForm.value.faculty,
        email: this.signUpClubForm.value.email,
        password: this.signUpClubForm.value.password,
        urlImage: '',
        authority: 'clubAdmin',
        members: [],
      };
      this.userService.postClub(data).subscribe(
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

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
