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
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ],
  animations: [ slideInLeftAnimation ]
})
export class RegisterComponent implements OnInit {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

  public user: User = new User();
  public registerForm: FormGroup;

  constructor( private _fb: FormBuilder, private _userService: UserService ) {

  }

  public ngOnInit() {
    this.registerForm = this._fb.group({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password
    });
  }

  public onSubmit() {
    this.user.firstName = this.registerForm.value['firstName'];
    this.user.lastName = this.registerForm.value['lastName'];
    this.user.email = this.registerForm.value['email'];
    this.user.password = this.registerForm.value['password'];

    this._userService.register(this.user).subscribe(
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
