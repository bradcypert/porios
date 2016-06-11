import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';

import { UserService } from './app/services/user.service'; 
import { MessageService } from './app/services/message.service';
import { ThreadService } from './app/services/thread.service'; 
import { CookieService } from './app/services/cookie.service';
import { PlayerService } from './app/services/audio/player.service';
import { SoundService } from './app/services/audio/sound.service';
import { PlaylistService } from './app/services/audio/playlist.service';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, 
    [ROUTER_DIRECTIVES,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    CookieService,
    UserService,
    PlayerService,
    SoundService,
    PlaylistService]);
