import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent implements OnInit {
  imageUrl: string[] = [];
  loading: boolean = false; // Flag variable
  file: File[] = []; // Variable to store file
  fileBlob: Blob[] = [];
  userId: string | null | undefined = "";
  authority: string | null | undefined = "";

  constructor(private uploadService: UploadImageService) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userUid');
    this.authority = localStorage.getItem('authority');
    console.log(this.userId);
    
  }

  onChange(event: any) {
    this.file.push(event.target.files[0]);
  }

  onUpload() {
    this.loading = !this.loading;
    this.uploadService.FileToBlob(this.file[0]).then((blob) => {
      this.fileBlob.push(blob);
      this.uploadService
        .UploadImageReturnUrl( this.authority === '"clubAdmin"'? '/images/clubAdmins' : '/images/students', [this.fileBlob[0]], `${this.userId}`)
        .then((url: any) => {
          this.imageUrl = url
        });
    });
  }
}
