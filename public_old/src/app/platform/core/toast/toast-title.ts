import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {TdToast} from './toast';

@Component({
  selector: 'td-toast-title',
  template: `<h2 *ngIf="title">{{title}}</h2><ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdToastTitle {
  @Input() title: string;
}
