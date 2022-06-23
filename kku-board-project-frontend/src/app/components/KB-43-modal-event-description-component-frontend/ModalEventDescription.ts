import { Component, Input, OnInit } from '@angular/core';
import { endOfMonth } from 'date-fns';
import 'dayjs/locale/th';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UploadImageService } from 'src/app/services/upload-image.service';
import { UserService } from 'src/app/services/user.service';
import { Club } from 'src/app/interfaces/club';
import Swal from 'sweetalert2';
@Component({
  selector: 'modal-event',
  templateUrl: './ModalEventDescription.html',
  styleUrls: ['./ModalEventDescription.css'],
})
export class ModalEventDescription implements OnInit {
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private http: HttpClient,
    private uploadService: UploadImageService
  ) {
    this.userId = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
    this.userService.getClubById(this.userId).subscribe((res) => {
      this.club = res;
      this.clubName = this.club.clubName;
      this.dataBase[0].image = this.club.urlImage;
    });
    
  }
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
  clubName: string | null | undefined = '';
  @Input() role = '';
  club: Club = {
    password: '',
    members: [],
    clubName: '',
    authority: '',
    email: '',
    faculty: '',
    urlImage: '',
  };
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
      title: 'คณะ',
      key: 'facultys',
      children: [
        {
          title: 'วิศวะ',
          key: 'EN',
          children: [
            { title: 'วิศวกรรมโยธา', key: 'CE', isLeaf: true },
            { title: 'วิศวกรรมคอมพิวเตอร์', key: 'CoE', isLeaf: true },
            { title: 'วิศวกรรมไฟฟ้า', key: 'EE', isLeaf: true },
            { title: 'วิศวกรรมอุตสาหการ', key: 'IE', isLeaf: true },
          ],
        },
        {
          title: 'คณะบริหารธุรกิจและการบัญชี',
          key: 'KKBS',
          children: [
            { title: 'วิชาผู้ประกอบการดิจิทัล', key: 'DE', isLeaf: true },
            { title: 'วิชาเอกการเงิน', key: 'FIN', isLeaf: true },
            { title: 'วิชาเอกการตลาด', key: 'MK', isLeaf: true },
            { title: 'วิชาเอกการจัดการ', key: 'MGT', isLeaf: true },
          ],
        },
        {
          title: 'คณะเภสัชศาสตร์',
          key: 'PS',
          children: [
            { title: 'สาขาวิชาเภสัชเคมี', key: 'PSI', isLeaf: true },
            { title: 'สาขาวิชาเทคโนโลยีเภสัชกรรม', key: 'PSII', isLeaf: true },
            { title: 'สาขาวิชาเภสัชเวทและพิษวิทยา', key: 'PSIII', isLeaf: true },
            { title: 'สาขาวิชาเภสัชศาสตรสังคมและการบริหาร', key: 'PSIV', isLeaf: true },
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
      ],
    },
  ];

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      header: [null, [Validators.required]],
      description: [null, [Validators.required]],
      attendees: [0],
      maxAttendees: [null, [Validators.pattern(/^[0-9]\d*$/)]],
      eventType: [null, [Validators.required]],
      location: [null, [Validators.required]],
      eventDate: [null, [Validators.required]],
      roleAccept: [null, [Validators.required]],
      clubName: [],
      join: [[]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      Swal.fire({
        title: 'คุณต้องการเพิ่มกิจกรรมใช่ไหม',
        text: "กดยืนยันเพื่อเพิ่มกิจกรรม",
        icon: 'warning',
        showCancelButton: true,
        iconColor: '#FFCD00',
        confirmButtonColor: '#243A73',
        cancelButtonColor: '#B73151',
        confirmButtonText: 'ยืนยัน',
        cancelButtonText: "ยกเลิก"
      }).then((result) => {
        if (result.isConfirmed) {
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
              this.validateForm.value.clubName = this.clubName;
              if (this.validateForm.value.maxAttendees == 0) {
                this.validateForm.value.maxAttendees = 900000;
              }
              this.http.post('http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/events/bRy0LPv9FhQtduQlgkbdZRhtCzb4.json',this.validateForm.value).subscribe();
            });
        });
          Swal.fire({
            icon: 'success',
            title: 'คุณได้เพิ่มกิจกรรม',
            showConfirmButton: false,
            timer: 1500,
          });
          this.isVisible = false;
        }
      });
    }
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
