import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appRouterProviders } from './app/app.routes';

import { AnalyticsService } from './app/services/analytics.service';
import { UserService } from './app/services/user.service';
import { PodcastService } from './app/services/podcast.service';
import { MessageService } from './app/services/message.service';
import { ThreadService } from './app/services/thread.service'; 
import { CookieService } from './app/services/cookie.service';
import { PlayerService } from './app/services/audio/player.service';
import { SoundService } from './app/services/audio/sound.service';
import { PlaylistService } from './app/services/audio/playlist.service';
import { RestService } from './app/services/rest.service';
import { SessionService } from './app/services/session.service';
import { TitleService } from './app/services/title.service';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent,
    [provide(Window, { useValue: window }),
    appRouterProviders,
    ROUTER_DIRECTIVES,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    Title,
    AnalyticsService,
    CookieService,
    UserService,
    PodcastService,
    PlayerService,
    SoundService,
    TitleService,
    PlaylistService,
    RestService,
    SessionService]);
