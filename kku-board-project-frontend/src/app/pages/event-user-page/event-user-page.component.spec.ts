import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUserPageComponent } from './event-user-page.component';

describe('EventUserPageComponent', () => {
  let component: EventUserPageComponent;
  let fixture: ComponentFixture<EventUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
