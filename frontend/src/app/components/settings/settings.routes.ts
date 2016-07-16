import { RouterConfig } from '@angular/router'

import { SettingsComponent } from './settings.component';

import { AppGuard } from '../../app.guard';

export const settingsRoutes: RouterConfig = [
  { path: 'Settings', children: [
      { path: '', component: SettingsComponent, canActivate: [AppGuard] }
  ] },
];