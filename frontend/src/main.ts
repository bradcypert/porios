import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';

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

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, 
    [provide(Window, {useValue: window}),
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    CookieService,
    UserService,
    PodcastService,
    PlayerService,
    SoundService,
    PlaylistService,
    RestService,
    SessionService]);
