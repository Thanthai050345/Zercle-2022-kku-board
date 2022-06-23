import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-event-club-page',
  templateUrl: './event-club-page.component.html',
  styleUrls: ['./event-club-page.component.css'],
})
export class EventClubPageComponent implements OnInit {
  uid: string | null | undefined;
  authority: string | null | undefined;
  constructor() {}

  ngOnInit(): void {
    this.uid = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
  }
}
