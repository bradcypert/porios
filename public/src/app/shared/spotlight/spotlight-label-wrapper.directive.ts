import {
  Directive,
  ElementRef,
  Renderer,
  Input
} from '@angular/core';

/**
 * Used in the `spotlight` view to display spotlight labels.
 * @docs-private
 */
@Directive({
  selector: '[spotlight-label-wrapper]'
})
export class SpotlightLabelWrapperDirective {
  constructor( public elementRef: ElementRef, private _renderer: Renderer ) {

  }

  /** Sets focus on the wrapper element */
  public focus(): void {
    this._renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
  }

  public getOffsetLeft(): number {
    return this.elementRef.nativeElement.offsetLeft;
  }

  public getOffsetWidth(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }
}
