import { Pipe, PipeTransform } from '@angular/core';
import { Link } from '../models/Link';

@Pipe({
  name: 'linkCallback'
})
export class LinkCallbackPipe implements PipeTransform {
  transform(links: Link[], callback: (link: Link) => boolean): any {
    if (!links || !callback) {
      return links;
    }
    return links.filter(link => callback(link));
  }
}
