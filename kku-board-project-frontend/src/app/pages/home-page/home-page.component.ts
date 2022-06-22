import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  uid:string | null | undefined;
  constructor() { }

  ngOnInit(): void {
    this.uid = localStorage.getItem('userUid');
  }

}
