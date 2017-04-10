import { Component } from '@angular/core';

import { DBService } from '../../shared/db';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public collection: any[] = new Array(10);

  constructor( private _db: DBService ) {

  }

  public put() {
    this._db.put('users', {
      name: 'test',
      id: '1'
    }).then((res) => {
      console.log(res);
    });
  }

  public get() {
    this._db.get('users', '1').then((res) => {
      console.log(res);
    });
  }

  public destroy() {
    this._db.destroy('users').then((res) => {
      console.log(res);
    });
  }

}
