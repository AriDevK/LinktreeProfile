import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCaptionComponent } from './profile-caption.component';

describe('ProfileCaptionComponent', () => {
  let component: ProfileCaptionComponent;
  let fixture: ComponentFixture<ProfileCaptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCaptionComponent]
    });
    fixture = TestBed.createComponent(ProfileCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
