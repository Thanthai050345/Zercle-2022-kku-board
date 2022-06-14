import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checked = true;
  email= "sasithon.ko@kkumail.com";
  password= '1234';

  constructor() { }

  ngOnInit(): void {
  }

}
