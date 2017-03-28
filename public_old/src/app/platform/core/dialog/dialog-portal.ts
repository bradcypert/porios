import {Directive, ViewContainerRef, TemplateRef} from '@angular/core';
import {TemplatePortalDirective} from '@angular/material';

@Directive({selector: '[tdDialogPortal]'})
export class TdDialogPortal extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}
