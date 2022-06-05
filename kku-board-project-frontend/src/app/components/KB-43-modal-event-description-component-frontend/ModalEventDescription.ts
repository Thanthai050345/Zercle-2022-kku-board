import { Component,Input ,OnInit } from '@angular/core';
@Component({
  selector: 'modal-event',
  templateUrl: './ModalEventDescription.html',
  styleUrls: ['./ModalEventDescription.css'],
})
export class ModalEventDescription implements OnInit {

  @Input() role = ""
  dataBase = [
    {
      image: "https://image.makewebeasy.net/makeweb/0/wdU8ZjHiP/PicAngthong62/%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B9%88%E0%B8%B2_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87_%E0%B8%88_%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87_11052019_%E0%B9%91%E0%B9%99%E0%B9%90%E0%B9%95%E0%B9%91%E0%B9%93_0286.jpg",
    }
  ];
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  handleActivity(): void {
    console.log('Button Activity clicked!');
    this.isVisible = false;
  }

  ngOnInit(): void {

  }
}
