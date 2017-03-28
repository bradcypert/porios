import { Injectable } from '@angular/core';

import { TdQuestionBase } from './question-base';

@Injectable()
export class TdQuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions: TdQuestionBase<any>[] = [
      new TdQuestionBase({
        id: 3,
        name: 'Bravery Rating',
        options: [
          'solid',
          'great'
        ],
        fieldType: 'dropdown',
        sort: 3
      }),
      new TdQuestionBase({
        id: 1,
        name: 'First name',
        required: true,
        fieldType: 'text',
        sort: 1
      }),
      new TdQuestionBase({
        id: 2,
        name: 'Email',
        fieldType: 'text',
        sort: 2
      })
    ];
    return questions.sort((a, b) => a.sort - b.sort);
  }
}
