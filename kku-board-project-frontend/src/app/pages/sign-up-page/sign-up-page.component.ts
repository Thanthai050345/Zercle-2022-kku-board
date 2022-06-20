import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  isSignUp = true;
  isSignUpUser = false;
  isSignUpClub = false;
  //test Sign-up club
  // isSignUp = false;
  // isSignUpUser = false;
  // isSignUpClub = true;
  handleSignUpUser(): void {
    this.isSignUp = false;
    this.isSignUpUser = true;
    this.isSignUpClub = false;
  }
  handleSignUpClub(): void {
    this.isSignUp = false;
    this.isSignUpUser = false;
    this.isSignUpClub = true;
  }
  handleSignUp(): void {
    this.isSignUp = true;
    this.isSignUpUser = false;
    this.isSignUpClub = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
