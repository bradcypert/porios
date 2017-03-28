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
  User,
  UserService
} from '../../shared';
import { slideInLeftAnimation } from '../../app.animations';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ],
  animations: [ slideInLeftAnimation ],
})
export class LoginComponent implements OnInit {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

  public user: User = new User('Brad.Cypert@gmail.com', 'test');
  public loginForm: FormGroup;

  constructor( private _fb: FormBuilder, private _userService: UserService ) {

  }

  public ngOnInit() {
    this.loginForm = this._fb.group({
      email: this.user.email,
      password: this.user.password
    });
  }

  public onSubmit() {
    this.user.email = this.loginForm.value['email'];
    this.user.password = this.loginForm.value['password'];

    this._userService.login(this.user).subscribe(
      (res) => {
        console.log(res);
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
