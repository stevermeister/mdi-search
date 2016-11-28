import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconFilter'
})
export class IconFilterPipe implements PipeTransform {

  transform(icons: Icon[], queryString: string): Icon[] {
    console.log(queryString);
    
    if(!queryString) {
      return icons;
    }
    return icons.filter(icon => icon.name.indexOf(queryString) !== -1);
  }
}