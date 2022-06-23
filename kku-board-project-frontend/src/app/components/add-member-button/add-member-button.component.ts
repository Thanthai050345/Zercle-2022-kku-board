import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-member-button',
  templateUrl: './add-member-button.component.html',
  styleUrls: ['./add-member-button.component.css'],
})
export class AddMemberButtonComponent implements OnInit {
  isVisible = false;
  inputVisible = false;
  inputValue = '';
  tags: string[] = [];
  uid: string | null | undefined;
  authority: string | null | undefined;

  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;
  constructor(private memberService: MemberService,private toastr: ToastrService) {}

  ngOnInit(): void {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter((tag) => tag !== removedTag);
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  handleInputConfirm(): void {
    this.tags = [...this.tags, this.inputValue];
    this.inputValue = '';
    this.inputVisible = false;
    console.log(this.tags);
  }

  modal() {
    Swal.fire({
      title: 'ยืนยันการเพิ่มสมาชิก',
      text: 'กดปุ่มยืนยันเพื่อยืนยันการเพิ่มสมาชิก',
      icon: 'warning',
      showCancelButton: true,
      iconColor: '#FFCD00',
      confirmButtonColor: '#243A73',
      cancelButtonColor: '#B73151',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        for (let index = 0; index < this.tags.length; index++) {
          const element = this.tags[index];
          console.log(element);
          this.uid = localStorage.getItem('userUid');
          this.memberService.addMemberByClub(this.uid, element).subscribe({
            next: (data:any ) => {
              console.log(data);
              if (data.message === 'already member') {
                this.toastr.error(`อีเมลล์${element}ได้เข้าร่วมคลับนี้แล้ว`, 'Error');
              }else if (data.message === ``) {
                this.toastr.error(`ไม่พบอีเมลล์${element}ในระบบ`, 'Error');
              }
              },
              error: (error) => {
              this.toastr.error(error.error.message, 'Error');
              },
          });
          console.log(index);
          
        }
        Swal.fire({
          icon: 'success',
          title: 'เพิ่มสมาชิกสำเร็จ',
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      }
    });
  }
}
