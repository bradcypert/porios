import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
    name: 'mySearchPipe'
})
export class SearchPipe implements PipeTransform {
  public transform(value: any[], search: string, key: string): any[] {
    let tmpArray = [];

    value.map((c) => {
      if (c[key].toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        tmpArray.push(c);
      }
    });

    return tmpArray;
  }
}
