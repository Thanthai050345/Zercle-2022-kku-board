import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // uid:string | null | undefined;
  // data:any[] =[];
  // constructor(private eventService: EventService) { }

  ngOnInit(): void {
    // this.uid = localStorage.getItem('userUid');
    // this.eventService.getEvenById(this.uid).subscribe(res => {
    //   this.data = res;
    //   console.log(this.data);
    // });
  }
}
