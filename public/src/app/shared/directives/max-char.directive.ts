import {
  Directive,
  ElementRef,
  OnInit,
  Input
} from '@angular/core';

@Directive({
  selector: '[maxChar]'
})
export class MaxCharDirective implements OnInit {

  @Input() public maxChar: string;

  private _element: HTMLElement;

  constructor( private _elementRef: ElementRef ) {
    this._element = _elementRef.nativeElement;
  }

  public ngOnInit() {
    if (this._element.innerText.length > parseInt(this.maxChar, 10)) {
      let text = this._element.innerText.slice(0, parseInt(this.maxChar, 10));
      console.log(text);
      this._element.innerText = text + '...';
    }
  }

}
