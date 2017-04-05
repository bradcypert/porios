import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  Injectable
} from '@angular/core';
import {
  Resolve,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Subscription } from 'rxjs';

import {
  User,
  UserService
} from '../../../shared/user';
import { slideInLeftAnimation } from '../../../app.animations';

@Injectable()
export class AccountEditResolver implements Resolve<any> {

  constructor( private _userService: UserService ) {

  }
  
  public resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    return this._userService.whoami();
  }

};

@Component({
  selector: 'account-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  animations: [ slideInLeftAnimation ]
})
export class AccountEditComponent implements OnInit, OnDestroy {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

  public user: User;
  public editForm: FormGroup;
  public passwordStrength: string = 'Poor';
  public passwordScore: number = 0;
  public passwordSuggestions: string[] = [];

  private _strengthChecker: any;
  private _subscriptions: Subscription[] = [];

  constructor( private _fb: FormBuilder, private _route: ActivatedRoute ) {
    this.user = _route.snapshot.data['data'];
    this._strengthChecker = require('zxcvbn');
  }

  public ngOnInit() {
    console.log(this.user);
    this.editForm = this._fb.group({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      password: '',
      confirmPassword: ''
    });

    this._subscriptions.push(
      this.editForm.get('password').valueChanges.subscribe((res) => {
        let strength = this._strengthChecker(res);
        console.log(strength);
        if (strength) {
          this.passwordScore = Math.round((strength.score / 4) * 100);
          this.passwordSuggestions = strength.feedback.suggestions;
        }
      })
    );
  }

  public ngOnDestroy() {
    this._subscriptions.map((c) => {
      c.unsubscribe();
    });
  }

}
