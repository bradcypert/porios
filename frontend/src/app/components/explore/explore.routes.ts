import { RouterConfig } from '@angular/router'

import { ExploreComponent } from './explore.component';
import { ExploreDetailComponent } from './exploredetail.component';

import { AppGuard } from '../../app.guard';

export const exploreRoutes: RouterConfig = [
  { path: 'Explore', children: [
      { path: '', component: ExploreComponent },
      { path: ':id', component: ExploreDetailComponent }
  ] },
];