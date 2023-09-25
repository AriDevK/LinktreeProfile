import { Component } from '@angular/core';
import { Link } from './models/Link';
import { linksData } from './mock/linksData';
import { profileData } from './mock/profileData';
import { Profile } from './models/Profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public linksData: Link[] = linksData;
  public profileData: Profile = profileData;

  public findEnabledLinks(link: Link) : boolean {
    return link.url.length > 0
  }

  public findDisabledLinks(link: Link) : boolean {
    return link.url.length == 0
  }
}
