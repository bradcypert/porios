import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TdQuestionBase } from '../question-base';
import { TdQuestionControlService } from '../question-control.service';
@Component({
  selector: 'dynamic-form-render',
  templateUrl: 'dynamic-form-render.component.html',
  providers: [ TdQuestionControlService ]
})
export class TdDynamicFormRenderComponent implements OnInit {
  @Input() questions: TdQuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private qcs: TdQuestionControlService) {  }
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
