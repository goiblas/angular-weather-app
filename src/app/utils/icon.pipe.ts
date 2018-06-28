import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  transform(src: string, args?: any): string {
    return `assets/icons/${src}.svg`;
  }

}
