import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TdQuestionBase } from '../question-base';

@Component({
  selector: 'dfb-question',
  templateUrl: 'dynamic-form-build-question.component.html'
})
export class TdDynamicFormBuildQuestionComponent {
  @Input() question: TdQuestionBase<any>;
}
