import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TdQuestionBase } from '../question-base';

@Component({
  selector: 'dfr-question',
  templateUrl: 'dynamic-form-render-question.component.html'
})
export class TdDynamicFormRenderQuestionComponent {
  @Input() question: TdQuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.id].valid; }
}
