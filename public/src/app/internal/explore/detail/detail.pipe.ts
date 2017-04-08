import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'myDetailView'
})
export class ExploreDetailViewPipe implements PipeTransform {
  public transform(array: any[], display: number) {
    return array.slice(0, display);
  }
}
