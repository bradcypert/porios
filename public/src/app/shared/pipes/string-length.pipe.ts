import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'myStringLength'
})
export class StrighLengthPipe implements PipeTransform {
  public transform(text: string, maxLength: string = '50') {
    if (text && text.length > parseInt(maxLength, 10)) {
      text = text.slice(0, parseInt(maxLength, 10)) + '...';
    }
    return text;
  }
}
