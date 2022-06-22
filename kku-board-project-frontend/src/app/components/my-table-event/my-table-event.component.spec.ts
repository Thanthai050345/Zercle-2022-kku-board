import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableEventComponent } from './my-table-event.component';

describe('MyTableEventComponent', () => {
  let component: MyTableEventComponent;
  let fixture: ComponentFixture<MyTableEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTableEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
