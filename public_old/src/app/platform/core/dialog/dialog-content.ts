import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TdDialog } from './dialog';

@Component({
  selector: 'td-dialog-content',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdDialogContent {

}
