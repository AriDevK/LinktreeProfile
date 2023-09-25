import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { ProfileLinkComponent } from './components/profile-link/profile-link.component';
import { ProfileCaptionComponent } from './components/profile-caption/profile-caption.component';
import { ProfileDialogComponent } from './components/profile-dialog/profile-dialog.component';
import { LinkCallbackPipe } from './pipes/link-callback.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProfilePictureComponent,
    ProfileLinkComponent,
    ProfileCaptionComponent,
    ProfileDialogComponent,
    LinkCallbackPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    MatIconRegistry,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
