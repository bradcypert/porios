import {
    Component,
    Directive,
    Injectable,
    Type
} from '@angular/core';
import { Routes } from '@angular/router';

import * as Security from './security';
import * as External from './external';
import * as Internal from './internal';
import * as Shared from './shared';

export const COMPONENTS: Array<Type<Component | Directive>> = [
    External.ExternalFrameComponent,
    External.ExternalNavbarComponent,
    External.WelcomeComponent,
    Internal.InternalFrameComponent,
    Internal.InternalNavbarComponent,
    Internal.ExploreComponent,
    Internal.ExploreDetailComponent,
    Internal.PlayingComponent,
    Internal.SeekerComponent,
    Internal.VolumeComponent,
    Internal.AccountComponent,
    Internal.AccountEditComponent,
    Security.LoginComponent,
    Security.RegisterComponent,
    Shared.LoadingComponent,
    Shared.GroupArrayPipe,
    Shared.SearchPipe,
];

export const PROVIDERS: Array<Type<Injectable>> = [
    Internal.ExploreDetailResolver,
    Internal.AccountEditResolver,
    Security.AuthGuard,
    Shared.ApiService,
    Shared.AudioService,
    Shared.DBService,
    Shared.LoadingService,
    Shared.PodcastService,
    Shared.UserService,
];

export const ROUTES: Routes = [
    { path: '', 
        component: Internal.InternalFrameComponent,
        canActivate: [
            Security.AuthGuard
            ], 
        children: [
            { path: '', redirectTo: 'explore', pathMatch: 'full' },
            { path: 'playing', component: Internal.PlayingComponent },
            { path: 'explore', children: [
                { path: '', component: Internal.ExploreComponent },
                { path: ':id', component: Internal.ExploreDetailComponent, resolve: { 
                    data: Internal.ExploreDetailResolver
                } },
            ] },
            { path: 'account', children: [
                { path: '', component: Internal.AccountComponent },
                { path: 'edit', component: Internal.AccountEditComponent, resolve: {
                    data: Internal.AccountEditResolver
                } },
            ] },
        ] 
    },
    { path: 'login', component: Security.LoginComponent },
    { path: 'register', component: Security.RegisterComponent },
    { path: 'welcome', component: External.ExternalFrameComponent, children: [
        { path: '', component: External.WelcomeComponent },
    ] },
];
