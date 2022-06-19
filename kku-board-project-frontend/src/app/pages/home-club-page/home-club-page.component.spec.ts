import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClubPageComponent } from './home-club-page.component';

describe('HomeClubPageComponent', () => {
  let component: HomeClubPageComponent;
  let fixture: ComponentFixture<HomeClubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeClubPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
