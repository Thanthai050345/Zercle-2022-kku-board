import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularEventComponent } from './popular-event.component';

describe('PopularEventComponent', () => {
  let component: PopularEventComponent;
  let fixture: ComponentFixture<PopularEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
