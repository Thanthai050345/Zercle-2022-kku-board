import { Component,Input ,OnInit } from '@angular/core';
@Component({
  selector: 'all-event',
  templateUrl: './all-event-component.html',
  styleUrls: ['./all-event-component.css'],
})
export class AllEventComponent implements OnInit {
  @Input() role = "" 
  ngOnInit(): void {

  }
}
