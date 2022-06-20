import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { facultys } from 'src/assets/datas/facultys';

@Component({
  selector: 'app-reg-user-form',
  templateUrl: './reg-user-form.component.html',
  styleUrls: ['./reg-user-form.component.css'],
})
export class RegUserFormComponent implements OnInit {
  facultys = facultys;
  majors: any = []
  isMatch: boolean = false;
  regUserForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    faculty: new FormControl('', [Validators.required]),
    major: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    studentId: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    // image: new FormControl('', [Validators.required]),
    // role: new FormControl('', [Validators.required]),
  });
  onSubmit(): void {
    const password = this.regUserForm.value.password;
    const confirmPassword = this.regUserForm.value.confirmPassword;
    if (password === confirmPassword) {
      console.log(this.regUserForm.value);
    } else {
      this.isMatch = true;
    }
  }
  onChange(event: any) {
    console.log(event);
    const faculty = facultys.find(faculty => faculty.value == event)
    this.majors = faculty?.majors;
  }
  constructor() {}

  ngOnInit(): void {}
}
