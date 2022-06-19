import { Component, Input, OnInit } from '@angular/core';
import { endOfMonth } from 'date-fns';
import 'dayjs/locale/th';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
@Component({
  selector: 'modal-event',
  templateUrl: './ModalEventDescription.html',
  styleUrls: ['./ModalEventDescription.css'],
})
export class ModalEventDescription implements OnInit {
  

  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  // uploadedImage: any;
  public onImageUpload(event:any) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log(fileList);
    }
    
  }

  
  handleChange(info: NzUploadChangeParam): void {
      console.log(info.file, info.fileList);
  }

  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      topic: [null, [Validators.required ]],
      details: [null, [Validators.required]],
      attendance: [null, [Validators.pattern(/^[0-9]\d*$/)]],
      pattern: [null, [Validators.required]],
      location: [null, [Validators.required]],
      eventDate: [null, [Validators.required]],
      role: [null, [Validators.required]],
    });
  }

  output: any[] = [];
  @Input() role = '';
  dataBase = [
    {
      image:
        'https://image.makewebeasy.net/makeweb/0/wdU8ZjHiP/PicAngthong62/%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B9%88%E0%B8%B2_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87_%E0%B8%88_%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87_11052019_%E0%B9%91%E0%B9%99%E0%B9%90%E0%B9%95%E0%B9%91%E0%B9%93_0286.jpg',
    },
  ];
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleActivity(output: any[]): void {
    if (this.validateForm.valid) {
      if (output[5] != null || output[6] != null) {
        for (let index = 5; index < 7; index++) {
          const startDate = output[index];
          const [dateComponents, timeComponents] = startDate.split(' ');
          const [year, month, day] = dateComponents.split('-');
          const [hours, minutes] = timeComponents.split(':');
          const date = new Date(+year, month - 1, +day, +hours, +minutes);
          const unixTimestamp = Math.floor(date.getTime() / 1000);
          output[index] = unixTimestamp;
        }
      }
      console.log(output);
      this.isVisible = false;
      this.output = output;
    }
  }

  ranges = {
    Today: [new Date(), new Date()],
    'This Month': [new Date(), endOfMonth(new Date())],
  };

  value: string[] = [];
  nodes = [
    {
      title: 'วิศวะ',
      key: '100',
      children: [
        {
          title: 'วิศวะรวมๆ',
          key: '1001',
          children: [
            { title: 'ชุมนุมแมคคา', key: '10010', isLeaf: true },
            { title: 'ชุมนุมยานยนต์', key: '10011', isLeaf: true },
          ],
        },
        {
          title: 'วิศวะคอม',
          key: '1002',
          children: [
            { title: 'ชุมนุมคอมพิวเตอร์', key: '10020', isLeaf: true },
          ],
        },
      ],
    },
    {
      title: 'มหาลัย',
      key: '200',
      children: [
        {
          title: 'พุทธรรม',
          key: '2001',
        },
        {
          title: 'วิศวะคอม',
          key: '2002',
        },
      ],
    },
  ];
}
