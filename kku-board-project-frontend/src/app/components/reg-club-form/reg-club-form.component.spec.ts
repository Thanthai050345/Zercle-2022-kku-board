import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegClubFormComponent } from './reg-club-form.component';

describe('RegClubFormComponent', () => {
  let component: RegClubFormComponent;
  let fixture: ComponentFixture<RegClubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegClubFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegClubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
