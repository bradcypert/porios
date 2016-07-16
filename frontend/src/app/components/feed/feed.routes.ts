import { RouterConfig } from '@angular/router'

import { FeedComponent } from './feed.component';

import { AppGuard } from '../../app.guard';

export const feedRoutes: RouterConfig = [
  { path: 'Feed', children: [
      { path: '', component: FeedComponent, canActivate: [AppGuard] }
  ] },
];