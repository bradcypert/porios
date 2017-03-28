import {
  Component,
  HostBinding
} from '@angular/core';

import { slideInLeftAnimation } from '../../app.animations';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  animations: [ slideInLeftAnimation ]
})
export class AccountComponent {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

}
