import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
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

  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;
  constructor(private memberService: MemberService) {}

  ngOnInit(): void {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    console.log(this.tags);
    this.uid = localStorage.getItem('userUid');
    this.tags.forEach(element => {
      
    });
    // this.memberService.addMemberByClub(this.uid,"asd").subscribe();
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
  } 

  confirm() {

  }

  cancel() {
    
  }


}
