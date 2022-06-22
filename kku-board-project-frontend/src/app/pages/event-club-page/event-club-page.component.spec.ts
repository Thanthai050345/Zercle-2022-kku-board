import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventClubPageComponent } from './event-club-page.component';

describe('EventClubPageComponent', () => {
  let component: EventClubPageComponent;
  let fixture: ComponentFixture<EventClubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventClubPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventClubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
