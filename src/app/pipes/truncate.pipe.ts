import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: String, length: any): any {
    if (!text || !length) {
      return text;
    }
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  }

}
