import { Component, Directive, Injectable, Type } from '@angular/core';
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
    Security.LoginComponent,
    Security.RegisterComponent,
    Shared.GroupArrayPipe,
    Shared.SearchPipe,
];

export const PROVIDERS: Array<Type<Injectable>> = [
    Internal.ExploreDetailResolver,
    Security.AuthGuard,
    Shared.ApiService,
    Shared.AudioService,
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
            { path: '', redirectTo: 'Explore', pathMatch: 'full' },
            { path: 'Playing', component: Internal.PlayingComponent },
            { path: 'Explore', children: [
                { path: '', component: Internal.ExploreComponent },
                { path: ':id', component: Internal.ExploreDetailComponent, resolve: { 
                    data: Internal.ExploreDetailResolver
                } },
            ] },
            { path: 'Account', component: Internal.AccountComponent },
        ] 
    },
    { path: 'Login', component: Security.LoginComponent },
    { path: 'Register', component: Security.RegisterComponent },
    { path: 'Welcome', component: External.ExternalFrameComponent, children: [
        { path: '', component: External.WelcomeComponent },
    ] },
];
