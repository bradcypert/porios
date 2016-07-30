import { provideRouter, RouterConfig } from '@angular/router';

import { accountRoutes, accountProviders } from './components/account/account.routes';
import { connectRoutes } from './components/connect/connect.routes';
import { exploreRoutes, exploreProviders } from './components/explore/explore.routes';
import { favoritesRoutes } from './components/favorites/favorites.routes';
import { feedRoutes } from './components/feed/feed.routes';
import { homeRoutes } from './components/home/home.routes';
import { messagesRoutes } from './components/messages/messages.routes';
import { settingsRoutes } from './components/settings/settings.routes';

import { AppGuard } from './app.guard';

export const routes: RouterConfig = [
    ...accountRoutes,
    ...connectRoutes,
    ...exploreRoutes,
    ...favoritesRoutes,
    ...feedRoutes,
    ...homeRoutes,
    ...messagesRoutes,
    ...settingsRoutes
];

export const appRouterProviders = [
  provideRouter(routes),
  exploreProviders,
  accountProviders,
  AppGuard
];