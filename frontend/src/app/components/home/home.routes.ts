import { RouterConfig } from '@angular/router'

import { HomeComponent } from './home.component';

import { AppGuard } from '../../app.guard';

export const homeRoutes: RouterConfig = [
  { path: '', component: HomeComponent },
];