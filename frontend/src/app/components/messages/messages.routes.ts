import { RouterConfig } from '@angular/router'

import { MessagesComponent } from './messages.component';

import { AppGuard } from '../../app.guard';

export const messagesRoutes: RouterConfig = [
  { path: 'Messages', children: [
      { path: '', component: MessagesComponent, canActivate: [AppGuard] }
  ] },
];