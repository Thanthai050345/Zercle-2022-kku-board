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
  regUserForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    faculty: new FormControl('', [Validators.required]),
    major: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    studentId: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });
  onSubmit() {}
  onChange(event: any) {
    console.log(event);
    const faculty = facultys.find(faculty => faculty.value == event)
    this.majors = faculty?.majors;
  }
  constructor() {}

  ngOnInit(): void {}
}
