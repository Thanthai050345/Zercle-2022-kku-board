import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubHomePageComponent } from './club-home-page.component';

describe('ClubHomePageComponent', () => {
  let component: ClubHomePageComponent;
  let fixture: ComponentFixture<ClubHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
