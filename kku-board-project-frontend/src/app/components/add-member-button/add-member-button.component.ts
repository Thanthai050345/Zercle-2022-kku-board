import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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

  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
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
  }
}
