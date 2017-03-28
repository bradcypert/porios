import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {TdDialog} from './dialog';

@Component({
  selector: 'td-dialog-title',
  template: `<h2 *ngIf="title">{{title}}</h2><ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdDialogTitle {
  @Input() title: string;
}
