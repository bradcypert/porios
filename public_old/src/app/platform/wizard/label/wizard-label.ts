import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';

@Directive({
  selector: '[td-wizard-label]',
})
export class TdWizardLabel extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}