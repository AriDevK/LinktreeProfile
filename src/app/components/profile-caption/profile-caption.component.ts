import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-caption',
  templateUrl: './profile-caption.component.html',
  styleUrls: ['./profile-caption.component.sass']
})
export class ProfileCaptionComponent {
  @Input() name : string = "John Doe";
  @Input() caption : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.";
}
