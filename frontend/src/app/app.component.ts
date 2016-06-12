import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HomeComponent } from './components/home.component';
import { ExploreComponent } from './components/explore.component';
import { ExploreDetailComponent } from './components/explore/exploredetail.component';
import { ConnectComponent } from './components/connect.component';
import { FavoritesComponent } from './components/favorites.component';
import { FeedComponent } from './components/feed.component';
import { MessagesComponent } from './components/messages.component';
import { SettingsComponent } from './components/settings.component';
import { AccountComponent } from './components/account.component';
import { LoginComponent } from './components/account/login.component';
import { SidebarComponent } from './components/sidebar.component';
import { PlayerComponent } from './components/player.component';

import '../assets/css/styles.css';

@Component({
  selector: 'porios',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ROUTER_DIRECTIVES, SidebarComponent, PlayerComponent],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent },
  { path: '/explore', name: 'Explore', component: ExploreComponent },
  { path: '/explore/:id', name: 'ExploreDetail', component: ExploreDetailComponent },
  { path: '/connect', name: 'Connect', component: ConnectComponent },
  { path: '/favorites', name: 'Favorites', component: FavoritesComponent },
  { path: '/feed', name: 'Feed', component: FeedComponent },
  { path: '/messages', name: 'Messages', component: MessagesComponent },
  { path: '/settings', name: 'Settings', component: SettingsComponent },
  { path: '/account/...', name: 'Account', component: AccountComponent },
])
export class AppComponent {
  constructor() { }
}
