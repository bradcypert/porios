import { RouterConfig } from '@angular/router'

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';

import { AppGuard } from '../../app.guard';

export const accountRoutes: RouterConfig = [
  { path: 'Account', children: [
      { path: '', redirectTo: 'Dashboard' },
      { path: 'Dashboard', component: DashboardComponent, canActivate: [AppGuard] },
      { path: 'Login', component: LoginComponent }
  ] },
];