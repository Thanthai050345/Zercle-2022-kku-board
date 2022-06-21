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

  constructor(private uploadService: UploadImageService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.file.push(event.target.files[0]);
  }

  onUpload() {
    this.loading = !this.loading;
    this.uploadService.FileToBlob(this.file[0]).then((blob) => {
      this.fileBlob.push(blob);
      this.uploadService
        .UploadImageReturnUrl('/images', [this.fileBlob[0]], '1')
        .then((url: any) => {
          this.imageUrl = url
        });
    });
  }
}
