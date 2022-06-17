import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit, DoCheck {
  loginForm = new FormGroup({
    email: new FormControl('test@test.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    // private auth: AngularFireAuth
  ) {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService
      .login(email, password)
      .pipe(
        this.toast.observe({
          success: 'ยินดีต้อนรับ',
          loading: 'กำลังเข้าสู่ระบบ',
          error: 'เกิดข้อผิดพลาด กรุณาลองอีกครั้ง',
        })
      )
      .subscribe(async () => {
        // this.token = this.auth.idToke
        
        this.router.navigate(['/home']);
      });
  }

  ngDoCheck(): void {
    // console.log(this.loginForm.controls['email'].hasError('required'));
  }

  ngOnInit(): void {}
}
