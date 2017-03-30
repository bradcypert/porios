import {
  Component,
  HostBinding,
  OnInit
} from '@angular/core';
import { Response } from '@angular/http';

import {
  User,
  UserService
} from '../../shared/user';
import { slideInLeftAnimation } from '../../app.animations';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  animations: [ slideInLeftAnimation ]
})
export class AccountComponent implements OnInit {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

  public user: User = new User();

  constructor ( private _userService: UserService ) {

  }

  public ngOnInit() {
    this._userService.whoami().subscribe((res: Response) => {
      this.user = new User(res.json()[0]);
      console.log(this.user);
    });
  }

}
