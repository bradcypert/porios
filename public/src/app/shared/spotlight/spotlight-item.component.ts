import {
  ViewContainerRef,
  Input,
  TemplateRef,
  ViewChild,
  OnInit,
  ContentChild,
  Component
} from '@angular/core';

import { TemplatePortal } from '@angular/material';

import { SpotlightLabelDirective } from './spotlight-label.directive';

@Component({
  selector: 'spotlight-item',
  templateUrl: './spotlight-item.component.html',
})
export class SpotlightItemComponent implements OnInit {
  
  /** Content for the spotlight label given by <ng-template spotlight-label>. */
  @ContentChild(SpotlightLabelDirective) public templateLabel: SpotlightLabelDirective;

  /** The image source for the spotlight item */
  @Input() public image: string = '';

  /** The plain text label for the spotlight item, used when there is no template label. */
  @Input() public textLabel: string = '';

  /** Template inside the Spotlight view that contains an <ng-content>. */
  @ViewChild(TemplateRef) public _content: TemplateRef<any>;

  /**
   * The relatively indexed position where 0 represents the center, negative is left, and positive
   * represents the right.
   */
  public position: number = null;

  /**
   * The initial relatively index origin of the spotlight-item if it was created and selected
   * after there was already a selected spotlight-item. Provides context of what position
   * the spotlight-item should originate from.
   */
  public origin: number = null;

  get content(): TemplatePortal { return this._contentPortal; }

  /** The portal that will be the hosted content of the spotlight */
  private _contentPortal: TemplatePortal = null;

  constructor( private _viewContainerRef: ViewContainerRef ) {

  }

  public ngOnInit() {
    this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
  }
}
