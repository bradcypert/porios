import {Directive, ViewContainerRef, TemplateRef} from '@angular/core';
import {TemplatePortalDirective} from '@angular/material';

@Directive({selector: '[tdToastPortal]'})
export class TdToastPortal extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}
