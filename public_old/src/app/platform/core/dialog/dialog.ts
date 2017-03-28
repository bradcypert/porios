import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { TdDialogActions } from './dialog-actions';
import { TdDialogContent } from './dialog-content';
import { TdDialogTitle } from './dialog-title';

@Component({
  selector: 'td-dialog',
  template: `
    <div class="td-dialog">
      <ng-content select="td-dialog-title"></ng-content>
      <ng-content select="td-dialog-content"></ng-content>
      <ng-content select="td-dialog-actions"></ng-content>
    </div>
  `
})
export class TdDialog implements AfterContentInit {

  @ContentChildren(TdDialogTitle) dialogTitle: QueryList<TdDialogTitle>;
  @ContentChildren(TdDialogContent) dialogContent: QueryList<TdDialogContent>;
  @ContentChildren(TdDialogActions) dialogActions: QueryList<TdDialogActions>;

  ngAfterContentInit(): void {
    if (this.dialogTitle.length > 1) {
      throw 'Duplicate td-dialog-title component at in td-dialog.';
    }
    if (this.dialogContent.length > 1) {
      throw 'Duplicate td-dialog-content component at in td-dialog.';
    }
    if (this.dialogActions.length > 1) {
      throw 'Duplicate td-dialog-actions component at in td-dialog.';
    }
  }

}