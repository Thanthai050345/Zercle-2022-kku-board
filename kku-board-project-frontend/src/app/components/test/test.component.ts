// import { Component, OnInit ,ViewChild} from '@angular/core';

// import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css'],
// })


// export class TestComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}

//   startValue: Date | null = null;
//   endValue: Date | null = null;
//   @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;

//   disabledStartDate = (startValue: Date): boolean => {
//     if (!startValue || !this.endValue) {
//       return false;
//     }
//     return startValue.getTime() > this.endValue.getTime();
//   };

//   disabledEndDate = (endValue: Date): boolean => {
//     if (!endValue || !this.startValue) {
//       return false;
//     }
//     return endValue.getTime() <= this.startValue.getTime();
//   };

//   handleStartOpenChange(open: boolean): void {
//     if (!open) {
//       this.endDatePicker.open();
//     }
//     console.log('handleStartOpenChange', open);
//   }

//   handleEndOpenChange(open: boolean): void {
//     console.log('handleEndOpenChange', open);
//   }
// }


