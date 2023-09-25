import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-link',
  templateUrl: './profile-link.component.html',
  styleUrls: ['./profile-link.component.sass']
})
export class ProfileLinkComponent implements OnInit {
  @Input() social: string = '';
  @Input() link: string = '';
  public disabled: boolean | null = null;

  ngOnInit(): void {
    if (this.link.length == 0) {
      this.disabled = true;
    }
  }

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {

    this.matIconRegistry.addSvgIcon(
      'Github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/icons/github.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'Twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/x.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'Instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/instagram.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'TikTok',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/tiktok.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'YouTube',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/youtube.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'Medium',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/medium.svg`)
    );
  }

}

