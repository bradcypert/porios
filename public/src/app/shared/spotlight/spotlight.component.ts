import {
  AfterContentChecked,
  AfterViewChecked,
  ViewChild,
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  QueryList,
  ContentChildren,
  ElementRef,
  Renderer
} from '@angular/core';

import { Observable } from 'rxjs';

import { SpotlightItemComponent } from './spotlight-item.component';

/** Used to generate unique ID's for each spotlight component */
let nextId = 0;

/** A simple change event emitted on focus or selection changes. */
export class SpotlightChangeEvent {
  public index: number;
  public item: SpotlightItemComponent;
}

/** Possible positions for the spotlight header. */
export type SpotlightHeaderPosition = 'above' | 'below';

/**
 * Material design spotlight-group component.  Supports basic spotlight pairs (label + content) and
 * includes animated ink-bar, keyboard navigation, and screen reader.
 * See: https://www.google.com/design/spec/components/spotlights.html
 */
@Component({
  selector: 'spotlight',
  templateUrl: 'spotlight.component.html'
})
export class SpotlightComponent implements AfterContentChecked, AfterViewChecked {

  @ContentChildren(SpotlightItemComponent) public items: QueryList<SpotlightItemComponent>;

  @HostBinding('class.spotlight') public hasClass: boolean = true;

  /** Position of the spotlight header. */
  @Input() public headerPosition: SpotlightHeaderPosition = 'above';

  @ViewChild('spotlightBodyWrapper') public spotlightBodyWrapper: ElementRef;

  public onFocusChange: EventEmitter<SpotlightChangeEvent> = (
    new EventEmitter<SpotlightChangeEvent>()
  );

  public onSelectChange: EventEmitter<SpotlightChangeEvent> = (
    new EventEmitter<SpotlightChangeEvent>(true)
  );

  /** Whether the spotlight group should grow to the size of the active spotlight */
  @Input()
  get dynamicHeight(): boolean {
    return this._dynamicHeight;
  }
  set dynamicHeight(value: boolean) {
    this._dynamicHeight = value;
  }

  /** The index of the active spotlight-item. */
  @Input()
  set selectedIndex(value: number) {
    this._indexToSelect = value;
  }
  get selectedIndex(): number {
    return this._selectedIndex;
  }

  /** Output to enable support for two-way binding on ([selectedIndex]) */
  @Output() get selectedIndexChange(): Observable<number> {
    return this.selectChange.map((event) => {
      return event.index;
    });
  }

  /** Event emitted when focus has changed within a spotlight group. */
  @Output() get focusChange(): Observable<SpotlightChangeEvent> {
    return this.onFocusChange.asObservable();
  }

  /** Event emitted when the spotlight selection has changed. */
  @Output() get selectChange(): Observable<SpotlightChangeEvent> {
    return this.onSelectChange.asObservable();
  }

  /** Whether this component has been initialized. */
  private _isInitialized: boolean = false;

  /** The spotlight index that should be selected after the content has been checked. */
  private _indexToSelect = 0;

  /** Snapshot of the height of the spotlight body wrapper before another spotlight is activated. */
  private _spotlightBodyWrapperHeight: number = null;

  private _dynamicHeight: boolean = false;

  private _selectedIndex: number = null;

  private _groupId: number;

  constructor(private _renderer: Renderer) {
    this._groupId = nextId++;
  }

  /**
   * After the content is checked, this component knows what spotlights have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each spotlight should be in according to the new selected index, and additionally we know how
   * a new selected spotlight should transition in (from the left or right).
   */
  public ngAfterContentChecked(): void {
    // Clamp the next selected index to the bounds of 0 and the spotlights length.
    // Note the `|| 0`, which ensures that values like NaN can't get through and which
    // would otherwise throw the component into an infinite loop (since Math.max(NaN, 0) === NaN).
    this._indexToSelect = Math.min(this.items.length - 1, Math.max(this._indexToSelect || 0, 0));

    // If there is a change in selected index, emit a change event. Should not trigger if
    // the selected index has not yet been initialized.
    if (this._selectedIndex !== this._indexToSelect && this._selectedIndex !== null) {
      this.onSelectChange.emit(this._createChangeEvent(this._indexToSelect));
    }

    // Setup the position for each spotlight and optionally setup an origin on the next
    // selected spotlight.
    this.items.forEach((spotlight: SpotlightItemComponent, index: number) => {
      spotlight.position = index - this._indexToSelect;

      // If there is already a selected spotlight, then set up an origin for the next 
      // selected spotlight if it doesn't have one already.
      if (this._selectedIndex !== null && spotlight.position === 0 && !spotlight.origin) {
        spotlight.origin = this._indexToSelect - this._selectedIndex;
      }
    });

    this._selectedIndex = this._indexToSelect;
  }

  /**
   * Waits one frame for the view to update, then updates the ink bar
   * Note: This must be run outside of the zone or it will create an infinite
   * change detection loop.
   */
  public ngAfterViewChecked(): void {
    this._isInitialized = true;
  }

  public focusChanged(index: number) {
    this.onFocusChange.emit(this._createChangeEvent(index));
  }

  /** Returns a unique id for each spotlight label element */
  public getSpotlightLabelId(i: number): string {
    return `spotlight-label-${this._groupId}-${i}`;
  }

  /** Returns a unique id for each spotlight content element */
  public getSpotlightContentId(i: number): string {
    return `spotlight-content-${this._groupId}-${i}`;
  }

  /**
   * Sets the height of the body wrapper to the height of the activating spotlight if dynamic
   * height property is true.
   */
  public setSpotlightBodyWrapperHeight(spotlightHeight: number): void {
    if (!this._dynamicHeight || !this._spotlightBodyWrapperHeight) { return; }

    this._renderer.setElementStyle(this.spotlightBodyWrapper.nativeElement, 'height',
        this._spotlightBodyWrapperHeight + 'px');

    // This conditional forces the browser to paint the height so that
    // the animation to the new height can have an origin.
    if (this.spotlightBodyWrapper.nativeElement.offsetHeight) {
      this._renderer.setElementStyle(this.spotlightBodyWrapper.nativeElement, 'height',
          spotlightHeight + 'px');
    }
  }

  /** Removes the height of the spotlight body wrapper. */
  public removeSpotlightBodyWrapperHeight(): void {
    this._spotlightBodyWrapperHeight = this.spotlightBodyWrapper.nativeElement.clientHeight;
    this._renderer.setElementStyle(this.spotlightBodyWrapper.nativeElement, 'height', '');
  }

  private _createChangeEvent(index: number): SpotlightChangeEvent {
    const event = new SpotlightChangeEvent();
    event.index = index;
    if (this.items && this.items.length) {
      event.item = this.items.toArray()[index];
    }
    return event;
  }
}
