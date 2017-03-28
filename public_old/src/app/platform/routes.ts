import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { LayoutComponent } from '../layout.component';

import { HOME_ROUTES } from '../home';
import { LOGIN_ROUTES } from '../login';
import { PODCASTS_ROUTES } from '../podcasts';

export const routes: Routes = [
    { path: '', component: AppComponent, children: [
        { path: '', component: LayoutComponent, children: [
            ...HOME_ROUTES,
            ...PODCASTS_ROUTES
        ] },
        ...LOGIN_ROUTES
    ] }
];

export const ROUTE_PROVIDERS: any = [
];