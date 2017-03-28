import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[td-wizard-label-wrapper]'
})
export class TdWizardLabelWrapper {
  constructor(public elementRef: ElementRef) {}

  /**
   * Sets focus on the wrapper element
   */
  focus(): void {
    this.elementRef.nativeElement.focus();
  }
}