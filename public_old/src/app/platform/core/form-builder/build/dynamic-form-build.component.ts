import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TdQuestionBase } from '../question-base';
import { TdQuestionControlService } from '../question-control.service';
@Component({
  selector: 'dynamic-form-build',
  templateUrl: 'dynamic-form-build.component.html',
  styleUrls: ['./dynamic-form-build.component.scss'],
  providers: [ TdQuestionControlService ]
})
export class TdDynamicFormBuildComponent {

  private _questions: TdQuestionBase<any>[] = [];

  @Input()
  get questions() {
    return this._questions;
  }
  @Output() questionsChange = new EventEmitter();
  set questions(val: TdQuestionBase<any>[]) {
    this._questions = val;
    this.questionsChange.emit(this.questions);
  }

  addNewQuestion() {
    this.questions.push(
      new TdQuestionBase({
        name: 'New Summary Comment',
        fieldType: 'text',
        sort: 0
      })
    )
  }

  removeQuestion(question: TdQuestionBase<any>) {
    let index = this.questions.indexOf(question);
    if (index > -1) {
      this.questions.splice(index, 1);
    }
  }
}
