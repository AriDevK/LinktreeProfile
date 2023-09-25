import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.sass']
})
export class ProfileDialogComponent implements OnInit {

  public content: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.content = this.data.content.split('\n');
   }

  ngOnInit(): void {
  }
}
