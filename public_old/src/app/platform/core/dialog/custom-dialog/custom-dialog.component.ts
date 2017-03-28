import { Component, ContentChildren, ViewChild, ViewContainerRef, QueryList } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

import { TdDialogTitle } from '../dialog-title';
import { TdDialogContent } from '../dialog-content';
import { TdDialogActions } from '../dialog-actions';
import { TdDialogPortal } from '../dialog-portal';

@Component({
  selector: 'td-custom-dialog',
  template: `
    <template tdDialogPortal>
        <div class="td-dialog">
            <ng-content select="td-dialog-title"></ng-content>
            <ng-content></ng-content>
            <ng-content select="td-dialog-actions"></ng-content>
        </div>
    </template>
  `,
})
export class TdCustomDialogComponent {

  @ContentChildren(TdDialogTitle) dialogTitle: QueryList<TdDialogTitle>;
  @ContentChildren(TdDialogContent) dialogContent: QueryList<TdDialogContent>;
  @ContentChildren(TdDialogActions) dialogActions: QueryList<TdDialogActions>;

  @ViewChild(TdDialogPortal) private portal: TdDialogPortal;

  dialogRef: MdDialogRef<TdCustomDialogRef>;

  constructor( public dialog: MdDialog, public viewContainerRef: ViewContainerRef) {

  }

  open() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    
    this.dialogRef = this.dialog.open(TdCustomDialogRef, config);
    this.dialogRef.componentInstance.attach(this.portal);

    this.dialogRef.afterClosed().subscribe(result => {;
      this.dialogRef = null;
    });
  }

  close() {
      this.dialogRef.close();
  }

}

@Component({
  selector: 'td-custom-dialog-ref',
  template: ``,
})
export class TdCustomDialogRef {
  constructor(public dialogRef: MdDialogRef<TdCustomDialogRef>, private _viewContainerRef: ViewContainerRef) { }

  attach(portal: TdDialogPortal) {
      this._viewContainerRef.createEmbeddedView(portal.templateRef);
  }
}