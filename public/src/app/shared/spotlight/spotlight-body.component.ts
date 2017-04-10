import {
  ViewChild,
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ElementRef,
  Optional,
  ChangeDetectorRef,
  AfterViewChecked,
  AfterContentChecked,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent,
} from '@angular/animations';

import {
    TemplatePortal,
    PortalHostDirective
} from '@angular/material';

/**
 * These position states are used internally as animation states for the spotlight body. Setting
 * the position state to left, right, or center will transition the spotlight body from its current
 * position to its respective state. If there is not current position (void, in the case of a new
 * spotlight body), then there will be no transition animation to its state.
 *
 * In the case of a new spotlight body that should immediately be centered with an animating
 * transition, then left-origin-center or right-origin-center can be used, which will use left
 * or right as its psuedo-prior state.
 */
export type SpotlightBodyPositionState =
    'left' | 'center' | 'right' | 'left-origin-center' | 'right-origin-center';

/**
 * The origin state is an internally used state that is set on a new spotlight body indicating if 
 * it began to the left or right of the prior selected index. For example, if the selected index
 * was set to 1, and a new spotlight is created and selected at index 2, then the spotlight body
 * would have an origin of right because its index was greater than the prior selected index.
 */
export type SpotlightBodyOriginState = 'left' | 'right';

/**
 * Wrapper for the contents of a spotlight.
 * @docs-private
 */
@Component({
  selector: 'spotlight-body',
  templateUrl: './spotlight-body.component.html',
  animations: [
    trigger('translateSpotlight', [
      state('left', style({transform: 'translate3d(-100%, 0, 0)'})),
      state('left-origin-center', style({transform: 'translate3d(0, 0, 0)'})),
      state('right-origin-center', style({transform: 'translate3d(0, 0, 0)'})),
      state('center', style({transform: 'translate3d(0, 0, 0)'})),
      state('right', style({transform: 'translate3d(100%, 0, 0)'})),
      transition('* => left, * => right, left => center, right => center',
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
      transition('void => left-origin-center', [
        style({transform: 'translate3d(-100%, 0, 0)'}),
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
      transition('void => right-origin-center', [
        style({transform: 'translate3d(100%, 0, 0)'}),
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
      ])
    ])
  ]
})
export class SpotlightBodyComponent implements OnInit, AfterViewChecked, AfterContentChecked {
  /** The portal host inside of this container into which the body content will be loaded. */
  @ViewChild(PortalHostDirective) public portalHost: PortalHostDirective;

  @HostBinding('class.spotlight-body') public spotlightBodyClass: boolean = true;

  /** Event emitted when the active spotlight begins to animate towards the center. */
  @Output() public onCentering: EventEmitter<number> = new EventEmitter<number>();

  /** Event emitted when the spotlight completes its animation towards the center. */
  @Output() public onCentered: EventEmitter<void> = new EventEmitter<void>(true);

  /** The spotlight body content to display. */
  @Input('content') public content: TemplatePortal;

  /** Whether the element is allowed to be animated. */
  public canBeAnimated: boolean = false;

  /** The shifted index position of the spotlight body, where 0 represents the active spotlight. */
  @Input('position') set position(position: number) {
    if (position < 0) {
      this._position = 'left';
    } else if (position > 0) {
      this._position = 'right';
    } else {
      this._position = 'center';
    }
  }

  /** The origin position from which this spotlight should appear when it is centered into view. */
  @Input('origin') set origin(origin: number) {
    if (origin == null) {
      return;
    }

    if (origin <= 0 || origin > 0) {
      this._origin = 'left';
    } else {
      this._origin = 'right';
    }
  }

  /** The origin position from which this spotlight should appear when it is centered into view. */
  private _origin: SpotlightBodyOriginState;

  private _position: SpotlightBodyPositionState;

  constructor( private _elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef ) {

  }

  /**
   * After initialized, check if the content is centered and has an origin. If so, set the
   * special position states that transition the spotlight from the left or right before centering.
   */
  public ngOnInit() {
    if (this._position === 'center' && this._origin) {
      this._position = this._origin === 'left' ? 'left-origin-center' : 'right-origin-center';
    }
  }

  /**
   * After the view has been set, check if the spotlight content is set to the center and attach
   * the content if it is not already attached.
   */
  public ngAfterViewChecked() {
    if (this._isCenterPosition(this._position) && !this.portalHost.hasAttached()) {
      this.portalHost.attach(this.content);
    }
  }

  /**
   * After the content has been checked, determines whether the element should be allowed to
   * animate. This has to be limited, because under a specific set of circumstances (see #2151),
   * the animations can be triggered too early, which either crashes Chrome by putting it into an
   * infinite loop (with Angular < 2.3.0) or throws an error because the element doesn't have a
   * computed style (with Angular > 2.3.0). This can alternatively be determined by checking the
   * transform: canBeAnimated = getComputedStyle(element) !== '', however document.contains should
   * be faster since it doesn't cause a reflow.
   *
   * TODO: This can safely be removed after we stop supporting Angular < 2.4.2. The fix landed via
   * https://github.com/angular/angular/commit/21030e9a1cf30e8101399d8535ed72d847a23ba6
   */
  public ngAfterContentChecked() {
    if (!this.canBeAnimated) {
      this.canBeAnimated = document.body.contains(this._elementRef.nativeElement);

      if (this.canBeAnimated) {
        this._changeDetectorRef.markForCheck();
      }
    }
  }

  public onTranslateSpotlightStarted(e: AnimationEvent) {
    if (this._isCenterPosition(e.toState)) {
      this.onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }

  public onTranslateSpotlightComplete(e: AnimationEvent) {
    // If the end state is that the spotlight is not centered, then detach the content.
    if (!this._isCenterPosition(e.toState) && !this._isCenterPosition(this._position)) {
      this.portalHost.detach();
    }

    // If the transition to the center is complete, emit an event.
    if (this._isCenterPosition(e.toState) && this._isCenterPosition(this._position)) {
      this.onCentered.emit();
    }
  }

  /** Whether the provided position state is considered center, regardless of origin. */
  private _isCenterPosition(position: SpotlightBodyPositionState|string): boolean {
    return position === 'center' ||
        position === 'left-origin-center' ||
        position === 'right-origin-center';
  }
}
