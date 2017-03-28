import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TdQuestionBase } from './question-base';

@Injectable()
export class TdQuestionControlService {
  constructor() { }

  toFormGroup(questions: TdQuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.id] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
