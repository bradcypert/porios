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
  Internal.ExploreDetailViewPipe,
  Internal.PlayingComponent,
  Internal.SeekerComponent,
  Internal.VolumeComponent,
  Internal.AccountComponent,
  Internal.AccountEditComponent,
  Security.LoginComponent,
  Security.RegisterComponent,
  Shared.MaxCharDirective,
  Shared.LoadingComponent,
  Shared.GroupArrayPipe,
  Shared.SearchPipe,
  Shared.StrighLengthPipe,
  Shared.SpotlightBodyComponent,
  Shared.SpotlightHeaderComponent,
  Shared.SpotlightInkBarDirective,
  Shared.SpotlightItemComponent,
  Shared.SpotlightLabelWrapperDirective,
  Shared.SpotlightLabelDirective,
  Shared.SpotlightComponent,
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
  {
    path: '', component: External.ExternalFrameComponent, children: [
      { path: '', component: External.WelcomeComponent },
    ]
  },
  { path: 'login', component: Security.LoginComponent },
  { path: 'register', component: Security.RegisterComponent },
  {
    path: 'playing', component: Internal.InternalFrameComponent, children: [
      { path: '', component: Internal.PlayingComponent },
    ]
  },
  {
    path: 'explore', component: Internal.InternalFrameComponent, children: [
      { path: '', component: Internal.ExploreComponent },
      {
        path: ':id', component: Internal.ExploreDetailComponent, resolve: {
          data: Internal.ExploreDetailResolver
        }
      },
    ]
  },
  {
    path: 'account', canActivate: [
      Security.AuthGuard,
    ], component: Internal.InternalFrameComponent, children: [
      { path: '', component: Internal.AccountComponent },
      {
        path: 'edit', component: Internal.AccountEditComponent, resolve: {
          data: Internal.AccountEditResolver
        }
      },
    ]
  },
];
