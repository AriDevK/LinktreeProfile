import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDialogComponent } from './profile-dialog.component';

describe('ProfileDialogComponent', () => {
  let component: ProfileDialogComponent;
  let fixture: ComponentFixture<ProfileDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDialogComponent]
    });
    fixture = TestBed.createComponent(ProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
