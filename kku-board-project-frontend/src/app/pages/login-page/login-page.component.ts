import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  public user: any;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.loading = true;
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const uid = res.user?.uid;
        localStorage.setItem('userUid', JSON.stringify(res.user?.uid));
        this.userService.getAllUser().subscribe(
          (res) => {
            this.user = res.find((user) => {
              return user.uid === uid;
            });
            localStorage.setItem(
              'authority',
              JSON.stringify(this.user.authority)
            );
            // console.log(localStorage.getItem('authority'));
            
            if (localStorage.getItem('authority') == '"student"') {
              this.router.navigate(['/home']);
            } else {
              this.router.navigate(['/club-home']);
            }
          },
          (err: HttpErrorResponse) => {
            console.log(err.message);
          }
        );
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      });
  }
}
