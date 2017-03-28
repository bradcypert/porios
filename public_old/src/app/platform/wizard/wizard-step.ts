import { 
    Directive,
    ContentChild,
    Output,
    Input,
    EventEmitter 
} from '@angular/core';

import { TdWizardLabel } from './label/wizard-label';
import { TdWizardContent } from './wizard-content';

export enum StepState {
  None = <any>'none',
  Invalid = <any>'invalid',
  Complete = <any>'complete',
  Skipped = <any>'skipped'
}

export enum StepMode {
  Linear = <any>'linear',
  Dynamic = <any>'dynamic',
  Final = <any>'final'
}

@Directive({
  selector: 'td-wizard-step'
})
export class TdWizardStep {
  @ContentChild(TdWizardLabel) label: TdWizardLabel;
  @ContentChild(TdWizardContent) content: TdWizardContent;

  @Output() stateChange: EventEmitter<any> = new EventEmitter(false);
  @Output() modeChange: EventEmitter<any> = new EventEmitter(false);

  private _state: StepState = StepState.None;
  @Input('state')
  set state(state: StepState) {
    this._state = state;
    this.stateChange.emit(this);
  };
  get state(): StepState {
    return this._state;
  }

  private _mode: StepMode = StepMode.Linear;
  @Input('mode')
  set mode(mode: StepMode) {
    this._mode = mode;
  };
  get mode(): StepMode {
    return this._mode;
  }

  private _disabled = true;
  @Input('disabled')
  set disabled(value: boolean) {
    this._disabled = (value != null && `${value}` !== 'false');
  }
  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
   */
  isComplete(): boolean {
    return this._state === StepState.Complete;
  };

  /**
   * Returns 'true' if [state] equals to [StepState.Invalid | 'invalid'], else 'false'.
   */
  isInvalid(): boolean {
    return this._state === StepState.Invalid;
  }
}