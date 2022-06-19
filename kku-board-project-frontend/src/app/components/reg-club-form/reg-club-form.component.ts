import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { facultys } from 'src/assets/datas/facultys';
@Component({
  selector: 'app-reg-club-form',
  templateUrl: './reg-club-form.component.html',
  styleUrls: ['./reg-club-form.component.css'],
})
export class RegClubFormComponent implements OnInit {
  facultys = facultys;
  majors: any = [];
  isMatch: boolean = false;
  signUpClubForm = new FormGroup({
    clubName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    faculty: new FormControl('', [Validators.required]),
    major: new FormControl('', [Validators.required]),
    // urlImage: new FormControl('', [Validators.required]),
  });
  onSubmit(): void {
    const password = this.signUpClubForm.value.password;
    const confirmPassword = this.signUpClubForm.value.confirmPassword;
    if (password === confirmPassword) {
      console.log(this.signUpClubForm.value);
    } else {
      this.isMatch = true;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    // console.log(event);
    const faculty = facultys.find(faculty => faculty.value == event)
    this.majors = faculty?.majors;
  }
  
}
