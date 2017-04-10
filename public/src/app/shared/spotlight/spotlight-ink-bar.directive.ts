import {
  Directive,
  HostBinding,
  Renderer,
  ElementRef,
  NgZone,
} from '@angular/core';

/**
 * The ink-bar is used to display and animate the line underneath the current
 * active spotlight label.
 * @docs-private
 */
@Directive({
  selector: 'spotlight-ink-bar'
})
export class SpotlightInkBarDirective {

  @HostBinding('class.spotlight-ink-bar') public spotlightInkBarClass: boolean = true;

  constructor(
    private _renderer: Renderer,
    private _elementRef: ElementRef,
    private _ngZone: NgZone
  ) { }

  /**
   * Calculates the styles from the provided element in order to align the ink-bar to that element.
   * Shows the ink bar if previously set as hidden.
   * @param element
   */
  public alignToElement(element: HTMLElement) {
    this.show();

    this._ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'left',
            this._getLeftPosition(element));
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'width',
            this._getElementWidth(element));
      });
    });
  }

  /** Shows the ink bar. */
  public show(): void {
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'visibility', 'visible');
  }

  /** Hides the ink bar. */
  public hide(): void {
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
  }

  /**
   * Generates the pixel distance from the left based on the provided element in string format.
   * @param element
   */
  private _getLeftPosition(element: HTMLElement): string {
    return element ? element.offsetLeft + 'px' : '0';
  }

  /**
   * Generates the pixel width from the provided element in string format.
   * @param element
   */
  private _getElementWidth(element: HTMLElement): string {
    return element ? element.offsetWidth + 'px' : '0';
  }
}
