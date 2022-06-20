import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-club-page',
  templateUrl: './home-club-page.component.html',
  styleUrls: ['./home-club-page.component.css']
})
export class HomeClubPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
  }

}
