import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
    name: 'myGroupArray'
})
export class GroupArrayPipe implements PipeTransform {
    public transform(array: any[], groupSize: number = 2) {
        let tempArray = array.slice();
        let tempGroups = [];
        
        while (tempArray.length) {
            tempGroups.push(tempArray.splice(0, groupSize));
        }

        return tempGroups;
    }
}
