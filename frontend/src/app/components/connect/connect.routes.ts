import { RouterConfig } from '@angular/router'

import { ConnectComponent } from './connect.component';

import { AppGuard } from '../../app.guard';

export const connectRoutes: RouterConfig = [
  { path: 'Connect', children: [
      { path: '', component: ConnectComponent }
  ] },
];