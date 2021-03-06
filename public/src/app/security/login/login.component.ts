import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {
  User,
  UserService
} from '../../shared';
import { slideInLeftAnimation } from '../../app.animations';

import { Config } from '../../shared/config';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ],
  animations: [ slideInLeftAnimation ],
})
export class LoginComponent implements OnInit {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

  public user: User = new User();
  public loginForm: FormGroup;

  private _returnUrl: string;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this._returnUrl = _route.snapshot.queryParams['returnUrl'] || '/explore';
  }

  public ngOnInit() {
    this.user.email = 'porios@porios.com';
    this.user.password = '12345';
    
    this.loginForm = this._fb.group({
      email: this.user.email,
      password: this.user.password
    });
  }

  public onSubmit() {
    this.user.email = this.loginForm.value['email'];
    this.user.password = this.loginForm.value['password'];

    this._userService.login(this.user).subscribe(
      (res: Response) => {
        Config.token = <any> res.text();
        this._router.navigate([this._returnUrl]);
      },
      (err) => {
        this._handleError(err);
      }
    );
  }

  private _handleError(err: any) {
    console.log(err.json());
  }

}
