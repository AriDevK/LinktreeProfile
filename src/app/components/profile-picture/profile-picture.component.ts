import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';
import { profileData } from 'src/app/mock/profileData';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.sass']
})
export class ProfilePictureComponent {
  @Input() size : string = "30";
  @Input() src : string = "https://www.w3schools.com/howto/img_avatar.png";
  @Input() alt : string = "Avatar";

  constructor(public dialog: MatDialog) {
  }

  public onClick() {
    this.dialog.open(ProfileDialogComponent, {
      width: '800px',
      height: '400px',
      data: {
        src: this.src,
        title: profileData.name,
        content: profileData.description
      }
    });
  }
}

