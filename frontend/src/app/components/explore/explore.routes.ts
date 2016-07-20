import { RouterConfig } from '@angular/router'

import { ExploreComponent, ExploreResolver } from './explore.component';
import { ExploreDetailComponent, ExploreDetailResolver } from './exploredetail.component';

import { AppGuard } from '../../app.guard';

export const exploreRoutes: RouterConfig = [
  { path: 'Explore', children: [
      { path: '', component: ExploreComponent, resolve: { podcasts: ExploreResolver } },
      { path: ':id', component: ExploreDetailComponent, resolve : { podcast: ExploreDetailResolver } }
  ] },
];

export const exploreProviders: any = [
  ExploreResolver,
  ExploreDetailResolver
]