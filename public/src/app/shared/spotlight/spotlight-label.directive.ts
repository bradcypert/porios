import {
  Directive,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { TemplatePortalDirective } from '@angular/material';

/** Used to flag spotlight labels for use with the portal directive */
@Directive({
  selector: '[spotlight-label]',
})
export class SpotlightLabelDirective extends TemplatePortalDirective {
  constructor( templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef ) {
    super(templateRef, viewContainerRef);
  }
}
