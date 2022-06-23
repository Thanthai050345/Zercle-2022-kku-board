import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-event-user-page',
  templateUrl: './event-user-page.component.html',
  styleUrls: ['./event-user-page.component.css']
})
export class EventUserPageComponent implements OnInit {
  authority: string | null | undefined;
  uid: string | null | undefined;
  constructor() {}

  ngOnInit(): void {
    this.uid = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
  }
}
