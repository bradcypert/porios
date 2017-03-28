import {
    NgModule,
    ModuleWithProviders,
    ContentChild,
    Directive,
    Component,
    Input,
    Output,
    ViewChildren,
    NgZone,
    EventEmitter,
    QueryList,
    ContentChildren,
    ViewEncapsulation,
    ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    MdIconModule, 
    PortalModule,
    RIGHT_ARROW,
    LEFT_ARROW,
    ENTER
} from '@angular/material';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { smoothScroll } from './utils/smoothscroll';

import { TdWizardStep, StepState, StepMode } from './wizard-step';
import { TdWizardLabel } from './label/wizard-label';
import { TdWizardContent } from './wizard-content';
import { TdWizardLabelWrapper } from './label/wizard-label-wrapper';
import { TdWizardProgress } from './wizard-progress';
import { TdWizardLabelIcon } from './label/wizard-label-icon';

/** Used to generate unique ID's for each wizard component */
let nextId = 0;

/** A simple change event emitted on focus or selection changes. */
export class TdWizardChangeEvent {
  index: number;
  wizardStep: TdWizardStep;
}

@Component({
  selector: 'td-wizard',
  templateUrl: './wizard-group.html',
  styleUrls: [ './wizard-group.scss' ],
  host: {
    '(mousedown)': 'onMouseDown($event)',
    '(body:mouseup)': 'onMouseUp($event)',
    '(mousemove)': 'onMouseMove($event)',
    '(touchstart)': 'onTouchStart($event)',
    '(body:touchend)': 'onTouchEnd($event)',
    '(touchmove)': 'onTouchMove($event)',
    '(window:resize)': 'checkWindowSize()',
  },
  encapsulation: ViewEncapsulation.None,
})
export class TdWizard {
  @ContentChildren(TdWizardStep) _wizardSteps: QueryList<TdWizardStep>;

  @ViewChildren(TdWizardLabelWrapper) _labelWrappers: QueryList<TdWizardLabelWrapper>;
  @ViewChildren(TdWizardProgress) _inkBar: QueryList<TdWizardProgress>;

  private _isInitialized: boolean = false;
  private _element: HTMLElement;
  private _subscriptions: Array<any> = [];

  private _selectedIndex: number = 0;
  @Input()
  set selectedIndex(value: number) {
    if (value != this._selectedIndex && this.isValidIndex(value)) {
      this._selectedIndex = value;

      if (this._isInitialized) {
        this.activateStep(this._selectedIndex);
        this._onSelectChange.emit(this._createChangeEvent(value));
      }
    }
  }
  get selectedIndex(): number {
    return this._selectedIndex;
  }

  /**
   * Determines if an index is valid. If the wizard is not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  isValidIndex(index: number): boolean {
    if (this._wizardSteps) {
      const wizardStep = this._wizardSteps.toArray()[index];
      return wizardStep && !wizardStep.disabled;
    } else {
      return true;
    }
  }

  /**
   * Determines if an index should be skipped
   */
  isSkippedIndex(index: number): boolean {
    if (this._wizardSteps) {
      const wizardStep = this._wizardSteps.toArray()[index];
      return wizardStep.state === StepState.Skipped;
    } else {
      return true;
    }
  }

  /** Output to enable support for two-way binding on `selectedIndex`. */
  @Output('selectedIndexChange') private get _selectedIndexChange(): Observable<number> {
    return this.selectChange.map(event => event.index);
  }

  private _onFocusChange: EventEmitter<TdWizardChangeEvent> = new EventEmitter<TdWizardChangeEvent>();
  @Output('focusChange') get focusChange(): Observable<TdWizardChangeEvent> {
    return this._onFocusChange.asObservable();
  }

  private _onSelectChange: EventEmitter<TdWizardChangeEvent> = new EventEmitter<TdWizardChangeEvent>();
  @Output('selectChange') get selectChange(): Observable<TdWizardChangeEvent> {
    return this._onSelectChange.asObservable();
  }

  private _onStateChange: EventEmitter<TdWizardChangeEvent> = new EventEmitter<TdWizardChangeEvent>();
  @Output('stateChange') get stateChange(): Observable<TdWizardChangeEvent> {
    return this._onStateChange.asObservable();
  }

  private _focusIndex: number = 0;
  private _groupId: number;

  constructor(private _zone: NgZone, private _elementRef: ElementRef) {
    this._groupId = nextId++;
    this._element = _elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    if (this._wizardSteps) {
      this._wizardSteps.toArray()[0].disabled = false;
      this._wizardSteps.toArray()[0].state = StepState.None;
    }

    this.setSubscriptions();

    this._wizardSteps.changes.subscribe(res => {
      this.setSubscriptions();
    })

    this.checkWindowSize();
  }

  /**
   * Waits one frame for the view to update, then upates the ink bar
   * Note: This must be run outside of the zone or it will create an infinite change detection loop
   */
  ngAfterViewChecked(): void {
    this._zone.runOutsideAngular(() => {
      window.requestAnimationFrame(() => {
        this._updateInkBar();
      });
    });
    this._isInitialized = true;
  }

  ngOnDestroy(): void {
    this.unsetSubscriptions();
  }

  /**
   * Changes the state of the currently active step
   */
  setCurrentStepState(state: StepState) {
    if (this._wizardSteps) {
      let currentStep: TdWizardStep = this._wizardSteps.toArray()[this._selectedIndex];
      currentStep.state = state;
    }
  }

  /**
   * Triggers when a step's properties change
   * Used to detect complete and invalid states
   */
  checkStep(step: TdWizardStep) {
    if (this._wizardSteps) {
      let wizardArray: Array<TdWizardStep> = this._wizardSteps.toArray();
      let currentStep: TdWizardStep = step;
      if (currentStep === wizardArray[this.selectedIndex]) {
        if (currentStep.mode === StepMode.Linear) {
          if (currentStep.state === StepState.Invalid || currentStep.state === StepState.None) {
            for ( let i = this.selectedIndex + 1; i < wizardArray.length; i++ ) {
              this._wizardSteps.toArray()[i].disabled = true;
            }
          }
        }
      }
    }
  }

  checkSteps() {
    if (this._wizardSteps) {
      if (this.canComplete()) {
        let wizardArray: Array<TdWizardStep> = this._wizardSteps.toArray();
        wizardArray.map(c => {
          if (c.mode === StepMode.Final) {
            c.disabled = false;
          }
        })
      }
    }
  }

  advance() {
    if (this._wizardSteps) {
      let wizardArray: Array<TdWizardStep> = this._wizardSteps.toArray();
      let currentStep: TdWizardStep = wizardArray[this.selectedIndex];
      if (currentStep.mode === StepMode.Linear && currentStep.state === StepState.Complete) {
        this.proceed();
      } else if (currentStep.mode === StepMode.Dynamic) {
        this.proceed();
      }
    }
  }

  proceed() {
    if (this._wizardSteps) {
      let wizardArray: Array<TdWizardStep> = this._wizardSteps.toArray();
      let target: number;
      for ( let i = this.selectedIndex + 1; i < wizardArray.length; i++ ) {
        if (!this.isSkippedIndex(i)) {
          target = i;
          break;
        }
      }
      if (target != undefined && target != null) {
        if (wizardArray[target].mode === StepMode.Final) {
          if (this.canComplete()) {
            wizardArray[target].disabled = false;
            console.log('Proceed to ' + target);
            this.selectedIndex = target;
          } else {
            window.alert('You have some unfinished steps');
          }
        } else {
          wizardArray[target].disabled = false;
          console.log('Proceed to ' + target);
          this.selectedIndex = target;
        }
      } else {
        console.log('No step found!');
      }
    }
  }

  /**
   * Triggers when a step's properties change
   * Used to hand final step
   */
  canComplete(): boolean {
    if (this._wizardSteps) {
      let wizardArray: Array<TdWizardStep> = this._wizardSteps.toArray();
      let temp: boolean = true;

      for (let i = 0; i < wizardArray.length; i++) {
        if (wizardArray[i].state === StepState.Skipped || wizardArray[i].mode === StepMode.Final) {

        } else {
          if (wizardArray[i].state != StepState.Complete) {
            temp = false;
            break;
          }
        }
      }

      return temp;
    }
  }

  /**
   * Triggers when a step is actived
   * Used to handle Dynamic steps
   */
  activateStep(stepIndex: number) {
    let wizardArray: Array<TdWizardStep> = this._wizardSteps.toArray();
    let currentStep: TdWizardStep = wizardArray[stepIndex];
    if (currentStep.mode === StepMode.Dynamic) {
      let dynamicSteps: Array<TdWizardStep> = [];
      for (let i = 0; i < wizardArray.length; i++) {
        if (wizardArray[i].mode === StepMode.Dynamic) {
          dynamicSteps[i] = wizardArray[i];
        }
      }
      this.getAdjacentDynamic(dynamicSteps, stepIndex).map(c => {
        if (wizardArray[c].state != StepState.Skipped) {
          wizardArray[c].disabled = false;
        }
      })
    }
  }

  getAdjacentDynamic(array: Array<any>, index: number): Array<number> {
    let validIndices: Array<number> = [];

    for (let i = index - 1; i >= 0; i--) {
      if (array[i] != null && array[i] != undefined) {
        validIndices.push(i);
      } else {
        break;
      }
    }

    for(let i = index + 1; i < array.length; i++) {
      if (array[i] != null && array[i] != undefined) {
        validIndices.push(i);
      } else {
        break;
      }
    }

    return validIndices;
  }

  setSubscriptions() {
    this.unsetSubscriptions();

    this._subscriptions.push(this._wizardSteps.changes.subscribe(res => {
      console.log(res);
    }))

    let value = 0;
    this._wizardSteps.map((c: TdWizardStep) => {
      this._subscriptions.push(c.stateChange.subscribe((step: TdWizardStep) => {
        this.checkStep(step);
        this.checkSteps();
        this._onStateChange.emit(this._createChangeEvent(value));
        value++;
      }))
    })
  }

  unsetSubscriptions() {
    this._subscriptions.map((c: Subscription) => {
      c.unsubscribe();
    });
  }

  /** Tells the ink-bar to align itself to the current label wrapper */
  private _updateInkBar(): void {
    this._inkBar.toArray()[0].alignToElement(this._currentLabelWrapper);
  }

  /**
   * Reference to the current label wrapper; defaults to null for initial render before the
   * ViewChildren references are ready.
   */
  private get _currentLabelWrapper(): HTMLElement {
    return this._labelWrappers && this._labelWrappers.length
        ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
        : null;
  }

  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex(): number {
    return this._focusIndex;
  }

  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value: number) {
    if (this.isValidIndex(value)) {
      this._focusIndex = value;

      if (this._isInitialized) {
        this._onFocusChange.emit(this._createChangeEvent(value));
      }

      if (this._labelWrappers && this._labelWrappers.length) {
        this._labelWrappers.toArray()[value].focus();
      }
    }
  }

  private _createChangeEvent(index: number): TdWizardChangeEvent {
    const event = new TdWizardChangeEvent;
    event.index = index;
    if (this._wizardSteps && this._wizardSteps.length) {
      event.wizardStep = this._wizardSteps.toArray()[index];
    }
    return event;
  }

  /** Returns a unique id for each wizard label element */
  _getWizardStepLabelId(i: number): string {
    return `td-wizard-label-${this._groupId}-${i}`;
  }

  /** Returns a unique id for each wizard content element */
  _getWizardStepContentId(i: number): string {
    return `td-wizard-content-${this._groupId}-${i}`;
  }

  handleKeydown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case RIGHT_ARROW:
        this.focusNextWizardStep();
        break;
      case LEFT_ARROW:
        this.focusPreviousWizardStep();
        break;
      case ENTER:
        this.selectedIndex = this.focusIndex;
        break;
    }
  }

  /**
   * Moves the focus left or right depending on the offset provided.  Valid offsets are 1 and -1.
   */
  moveFocus(offset: number) {
    if (this._labelWrappers) {
      const wizardStep: TdWizardStep[] = this._wizardSteps.toArray();
      for (let i = this.focusIndex + offset; i < wizardStep.length && i >= 0; i += offset) {
        if (this.isValidIndex(i)) {
          this.focusIndex = i;
          return;
        }
      }
    }
  }

  /** Increment the focus index by 1 until a valid wizard is found. */
  focusNextWizardStep(): void {
    this.moveFocus(1);
  }

  /** Decrement the focus index by 1 until a valid wizard is found. */
  focusPreviousWizardStep(): void {
    this.moveFocus(-1);
  }

  /**
   * Logic behind when the scroll tabs should appear
   */
  checkWindowSize(): void {
    let header = this._element.getElementsByClassName('td-wizard-header')[0];
    let steps = Array.from(this._element.getElementsByClassName('td-wizard-label'));
    let stepsWidth = 0;
    steps.map(c => {
      stepsWidth += c.clientWidth;
    })
    if (header.clientWidth < stepsWidth) {
      header.classList.add('td-wizard-header-scroll');
    } else {
      if (header.classList.contains('td-wizard-header-scroll')) {
        header.classList.remove('td-wizard-header-scroll');
      }
    }
  }

  /**
   * Scroll Functions
   */
  scrollLeft(event: Event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    let header = this._element.getElementsByClassName('td-wizard-scrollcontainer')[0];
    smoothScroll(header, -300, 500);
  }

  scrollRight(event: Event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    let header = this._element.getElementsByClassName('td-wizard-scrollcontainer')[0];
    smoothScroll(header, 300, 500);
  }

  /**
   * Mouse Events
   */
  public mouseDown: boolean = false;
  public mouseScrollLeft: number = 0;
  public curXPos: number = 0;

  onMouseDown(event: MouseEvent) {
    let header = this._element.getElementsByClassName('td-wizard-scrollcontainer')[0];
    if (event.target === header) {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.mouseDown = true;
      this.mouseScrollLeft = header.scrollLeft;
      this.curXPos = event.pageX;
    }
  }

  onMouseUp(event: MouseEvent) {
    this.mouseDown = false;
  }

  onMouseMove(event: MouseEvent) {
    let header = this._element.getElementsByClassName('td-wizard-scrollcontainer')[0];
    if (event.target === header) {
      event.stopImmediatePropagation();
      event.preventDefault();
      if (this.mouseDown) {
        header.scrollLeft = (this.mouseScrollLeft + (this.curXPos - event.pageX));
      }
    }
  }

  /**
   * Touch Events
   */
  public touchDown: boolean = false;
  public touchScrollLeft: number = 0;
  public curXPosTch: number = 0;

  onTouchStart(event: TouchEvent) {
    let header = this._element.getElementsByClassName('td-wizard-scrollcontainer')[0];
    if (event.target === header) {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.touchDown = true;
      this.touchScrollLeft = header.scrollLeft;
      this.curXPosTch = event.touches[0].pageX;
    }
  }

  onTouchEnd(event: TouchEvent) {
    this.touchDown = false;
  }

  onTouchMove(event: TouchEvent) {
    let header = this._element.getElementsByClassName('td-wizard-scrollcontainer')[0];
    if (event.target === header) {
      event.stopImmediatePropagation();
      event.preventDefault();
      if (this.touchDown) {
        header.scrollLeft = (this.touchScrollLeft + (this.curXPosTch - event.touches[0].pageX));
      }
    }
  }

}