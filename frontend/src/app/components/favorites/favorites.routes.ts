import { RouterConfig } from '@angular/router'

import { FavoritesComponent } from './favorites.component';

import { AppGuard } from '../../app.guard';

export const favoritesRoutes: RouterConfig = [
  { path: 'Favorites', children: [
      { path: '', component: FavoritesComponent, canActivate: [AppGuard] }
  ] },
];