import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {TdToast} from './toast';

@Component({
  selector: 'td-toast-actions',
  template: `
  <button *ngIf="cancel" md-button type="button" (click)="toast.close(false)">
    <span>{{ cancel }}</span>
  </button>
  <button *ngIf="ok" md-button class="md-primary" type="button" (click)="toast.close(true)">
    <span>{{ ok }}</span>
  </button> 
  <ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdToastActions {
  @Input() cancel: string;
  @Input() ok: string;
  @Input() toast: TdToast;
}
