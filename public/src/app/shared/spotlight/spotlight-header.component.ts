import {
  ViewChild,
  Component,
  HostBinding,
  Input,
  QueryList,
  ElementRef,
  ViewEncapsulation,
  ContentChildren,
  Output,
  EventEmitter,
  Optional,
  AfterContentChecked,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { applyCssTransform } from '@angular/material';

import { SpotlightInkBarDirective } from './spotlight-ink-bar.directive';
import { SpotlightLabelWrapperDirective } from './spotlight-label-wrapper.directive';

/**
 * The directions that scrolling can go in when the header's spotlights exceed the header width.
 * 'After' will scroll the header towards the end of the spotlights list and 'before' will scroll
 * towards the beginning of the list.
 */
export type ScrollDirection = 'after' | 'before';

/**
 * The distance in pixels that will be overshot when scrolling a spotlight label into view.
 * This helps provide a small affordance to the label next to it.
 */
const EXAGGERATED_OVERSCROLL = 60;

/**
 * The header of the spotlight group which displays a list of all the spotlights in the
 * spotlight group. Includes an ink bar that follows the currently selected spotlight.
 * When the spotlights list's width exceeds the width of the header container,
 * then arrows will be displayed to allow the user to scroll left and right across the header.
 * @docs-private
 */
@Component({
  selector: 'spotlight-header',
  templateUrl: 'spotlight-header.component.html'
})
export class SpotlightHeaderComponent implements AfterContentChecked, AfterContentInit, OnDestroy {

  @ContentChildren(SpotlightLabelWrapperDirective)
    public labelWrappers: QueryList<SpotlightLabelWrapperDirective>;

  @HostBinding('class.spotlight-header') public spotlightHeaderClass: boolean = true;

  @ViewChild(SpotlightInkBarDirective) public inkBar: SpotlightInkBarDirective;
  @ViewChild('spotlightListContainer') public spotlightListContainer: ElementRef;
  @ViewChild('spotlightList') public spotlightList: ElementRef;

  /** Event emitted when the option is selected. */
  @Output() public selectFocusedIndex = new EventEmitter();

  /** Event emitted when a label is focused. */
  @Output() public indexFocused = new EventEmitter();

  /** Whether the spotlight list can be scrolled more towards the end of the label list. */
  public disableScrollAfter = true;

  /** Whether the spotlight list can be scrolled more towards the beginning of the label list. */
  public disableScrollBefore = true;

  /** The index of the active spotlight. */
  @Input() set selectedIndex(value: number) {
    this._selectedIndexChanged = this._selectedIndex !== value;

    this._selectedIndex = value;
    this._focusIndex = value;
  }
  get selectedIndex(): number {
    return this._selectedIndex;
  }

  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value: number) {
    if (!this._isValidIndex(value) || this._focusIndex === value) {
      return;
    }

    this._focusIndex = value;
    this.indexFocused.emit(value);

    this._setSpotlightFocus(value);
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex(): number {
    return this._focusIndex;
  }

  /** Sets the distance in pixels that the spotlight header should be transformed in the X-axis. */
  set scrollDistance(v: number) {
    this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));

    // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.
    this._scrollDistanceChanged = true;

    this._checkScrollingControls();
  }
  get scrollDistance(): number {
    return this._scrollDistance;
  }

  /** Whether the controls for pagination should be displayed */
  private _showPaginationControls = false;

  /** The spotlight index that is focused. */
  private _focusIndex: number = 0;

  /** The distance in pixels that the spotlight labels should be translated to the left. */
  private _scrollDistance = 0;

  /** Whether the header should scroll to the selected index after the view has been checked. */
  private _selectedIndexChanged = false;

  /** Subscription to changes in the layout direction. */
  private _directionChange: Subscription;

  /**
   * The number of spotlight labels that are displayed on the header. When this changes, the header
   * should re-evaluate the scroll position.
   */
  private _spotlightLabelCount: number;

  /** Whether the scroll distance has changed and should be applied after the view is checked. */
  private _scrollDistanceChanged: boolean;

  private _selectedIndex: number = 0;

  constructor( private _elementRef: ElementRef ) {

  }

  public ngAfterContentChecked(): void {
    // If the number of spotlight labels have changed, check if scrolling should be enabled
    if (this._spotlightLabelCount !== this.labelWrappers.length) {
      this._updatePagination();
      this._spotlightLabelCount = this.labelWrappers.length;
    }

    // If the selected index has changed, scroll to the label and check if the scrolling controls
    // should be disabled.
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedSpotlight();
      this._selectedIndexChanged = false;
    }

    // If the scroll distance has been changed (spotlight selected, focused, scroll controls 
    // activated), then translate the header to reflect this.
    if (this._scrollDistanceChanged) {
      this._updateSpotlightScrollPosition();
      this._scrollDistanceChanged = false;
    }
  }

  public handleKeydown(event: KeyboardEvent) {
    console.log(event);
    // switch (event.keyCode) {
    //   case RIGHT_ARROW:
    //     this._focusNextspotlight();
    //     break;
    //   case LEFT_ARROW:
    //     this._focusPreviousspotlight();
    //     break;
    //   case ENTER:
    //     this.selectFocusedIndex.emit(this.focusIndex);
    //     break;
    // }
  }

  /**
   * Aligns the ink bar to the selected spotlight on load.
   */
  public ngAfterContentInit() {
    this._alignInkBarToSelectedSpotlight();
  }

  public ngOnDestroy() {
    if (this._directionChange) {
      this._directionChange.unsubscribe();
      this._directionChange = null;
    }
  }

  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  public onContentChanges() {
    this._updatePagination();
    this._alignInkBarToSelectedSpotlight();
  }

  /**
   * Moves the spotlight list in the 'before' or 'after' direction (towards the beginning of the
   * list or the end of the list, respectively). The distance to scroll is computed to be a third
   * of the length of the spotlight list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  public scrollHeader(scrollDir: ScrollDirection) {
    const viewLength = this.spotlightListContainer.nativeElement.offsetWidth;

    // Move the scroll distance one-third the length of the spotlight list's viewport.
    this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * viewLength / 3;
  }

  /**
   * Updating the view whether pagination should be enabled or not
   */
  private _updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateSpotlightScrollPosition();
  }

  /**
   * Determines if an index is valid.  If the spotlights are not ready yet, we assume that the user
   * is providing a valid index and return true.
   */
  private _isValidIndex(index: number): boolean {
    if (!this.labelWrappers) { return true; }

    const spotlight = this.labelWrappers ? this.labelWrappers.toArray()[index] : null;
    return spotlight ? true : false;
  }

  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  private _setSpotlightFocus(spotlightIndex: number) {
    if (this._showPaginationControls) {
      this._scrollToLabel(spotlightIndex);
    }

    if (this.labelWrappers && this.labelWrappers.length) {
      this.labelWrappers.toArray()[spotlightIndex].focus();

      // Do not let the browser manage scrolling to focus the element, this will be handled
      // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
      // should be the full width minus the offset width.
      const containerEl = this.spotlightListContainer.nativeElement;
      containerEl.scrollLeft = 0;
    }
  }

  /**
   * Moves the focus towards the beginning or the end of the list depending on the offset provided.
   * Valid offsets are 1 and -1.
   */
  private _moveFocus(offset: number) {
    if (this.labelWrappers) {
      const spotlights: SpotlightLabelWrapperDirective[] = this.labelWrappers.toArray();
      for (let i = this.focusIndex + offset; i < spotlights.length && i >= 0; i += offset) {
        if (this._isValidIndex(i)) {
          this.focusIndex = i;
          return;
        }
      }
    }
  }

  /** Increment the focus index by 1 until a valid spotlight is found. */
  private _focusNextSpotlight(): void {
    this._moveFocus(1);
  }

  /** Decrement the focus index by 1 until a valid spotlight is found. */
  private _focusPreviousSpotlight(): void {
    this._moveFocus(-1);
  }

  /** Performs the CSS transformation on the spotlight list that will cause the list to scroll. */
  private _updateSpotlightScrollPosition() {
    let translateX = this.scrollDistance + 'px';
    translateX = '-' + translateX;

    applyCssTransform(this.spotlightList.nativeElement, `translate3d(${translateX}, 0, 0)`);
  }

  /**
   * Moves the spotlight list such that the desired spotlight label (marked by index) is moved
   * into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  private _scrollToLabel(labelIndex: number) {
    const selectedLabel = this.labelWrappers
        ? this.labelWrappers.toArray()[labelIndex]
        :  null;

    if (!selectedLabel) {
      return;
    }

    // The view length is the visible width of the spotlight labels.
    const viewLength = this.spotlightListContainer.nativeElement.offsetWidth;

    let labelBeforePos: number;
    let labelAfterPos: number;
    labelBeforePos = selectedLabel.getOffsetLeft();
    labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();

    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;

    if (labelBeforePos < beforeVisiblePos) {
      // Scroll header to move label to the before direction
      this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
    } else if (labelAfterPos > afterVisiblePos) {
      // Scroll header to move label to the after direction
      this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
    }
  }

  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * spotlight list is wider than the size of the header container, then the pagination controls
   * should be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  private _checkPaginationEnabled() {
    this._showPaginationControls =
        this.spotlightList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

    if (!this._showPaginationControls) {
      this.scrollDistance = 0;
    }
  }

  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  private _checkScrollingControls() {
    // Check if the pagination arrows should be activated.
    this.disableScrollBefore = this.scrollDistance === 0;
    this.disableScrollAfter = this.scrollDistance === this._getMaxScrollDistance();
  }

  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the spotlight list container and spotlight header
   * container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  private _getMaxScrollDistance(): number {
    const lengthOfspotlightList = this.spotlightList.nativeElement.scrollWidth;
    const viewLength = this.spotlightListContainer.nativeElement.offsetWidth;
    return lengthOfspotlightList - viewLength;
  }

  /** Tells the ink-bar to align itself to the current label wrapper */
  private _alignInkBarToSelectedSpotlight(): void {

    const selectedLabelWrapper = this.labelWrappers && this.labelWrappers.length
        ? this.labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
        : null;

    this.inkBar.alignToElement(selectedLabelWrapper);
  }
}
