import { Component, Input, OnInit } from '@angular/core';
import { endOfMonth } from 'date-fns';
import 'dayjs/locale/th';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UploadImageService } from 'src/app/services/upload-image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'modal-event',
  templateUrl: './ModalEventDescription.html',
  styleUrls: ['./ModalEventDescription.css'],
})
export class ModalEventDescription implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private uploadService: UploadImageService
  ) {}
  validateForm!: FormGroup;
  isVisible = false;
  value: string[] = [];
  imageUrl: string[] = [];
  output: any[] = [];
  loading: boolean = false; // Flag variable
  file: File[] = []; // Variable to store file
  fileBlob: Blob[] = [];
  userId: string | null | undefined = '';
  authority: string | null | undefined = '';
  @Input() role = '';
  dataBase = [
    {
      image:
        'https://image.makewebeasy.net/makeweb/0/wdU8ZjHiP/PicAngthong62/%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B9%88%E0%B8%B2_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87_%E0%B8%88_%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87_11052019_%E0%B9%91%E0%B9%99%E0%B9%90%E0%B9%95%E0%B9%91%E0%B9%93_0286.jpg',
    },
  ];
  ranges = {
    Today: [new Date(), new Date()],
    'This Month': [new Date(), endOfMonth(new Date())],
  };
  nodes = [
    {
      title: 'วิศวะ',
      key: 'EN',
      children: [
        {
          title: 'วิศวะรวมๆ',
          key: 'ENALL',
          children: [
            { title: 'ชุมนุมแมคคา', key: '10010', isLeaf: true },
            { title: 'ชุมนุมยานยนต์', key: '10011', isLeaf: true },
          ],
        },
        {
          title: 'วิศวะคอม',
          key: 'CoE',
          children: [
            { title: 'ชุมนุมคอมพิวเตอร์', key: '10020', isLeaf: true },
          ],
        },
      ],
    },
    {
      title: 'มหาลัย',
      key: 'UN',
      children: [
        {
          title: 'พุทธรรม',
          key: 'buddhism',
        },
        {
          title: 'วิศวะคอม',
          key: 'CoE',
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.userId = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
    this.validateForm = this.fb.group({
      header: [null, [Validators.required]],
      description: [null, [Validators.required]],
      attendees: [0],
      maxAttendees: [null, [Validators.pattern(/^[0-9]\d*$/)]],
      eventType: [null, [Validators.required]],
      location: [null, [Validators.required]],
      eventDate: [null, [Validators.required]],
      roleAccept: [null, [Validators.required]],
      clubName: ['mnic'],
      join: [[]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loading = !this.loading;
      this.uploadService.FileToBlob(this.file[0]).then((blob) => {
        this.fileBlob.push(blob);
        this.uploadService
          .UploadImageReturnUrl(
            this.authority === '"clubAdmin"'
              ? '/images/clubAdmins'
              : '/images/students',
            [this.fileBlob[0]],
            `${this.userId}`
          )
          .then((url: any) => {
            this.imageUrl = url;
            this.validateForm.value.startDate =
            this.validateForm.value.eventDate[0].getTime();
            this.validateForm.value.endDate =
            this.validateForm.value.eventDate[1].getTime();
            this.validateForm.value.image = this.imageUrl;
            this.http.post('http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/events/bRy0LPv9FhQtduQlgkbdZRhtCzb4.json',this.validateForm.value).subscribe();
          });
      });
    }
    this.isVisible = false;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  onChange(event: any) {
    this.file.push(event.target.files[0]);
  }
}
