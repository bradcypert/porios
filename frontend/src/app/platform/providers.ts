import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { MdIconRegistry } from '@angular2-material/icon';
import { TD_LAYOUT_PROVIDERS } from './core';

import { ROUTE_PROVIDERS } from './routes';
import { AnalyticsService } from '../services/analytics.service';
import { UserService } from '../services/user.service';
import { PodcastService } from '../services/podcast.service';
import { MessageService } from '../services/message.service';
import { ThreadService } from '../services/thread.service'; 
import { CookieService } from '../services/cookie.service';
import { PlayerService } from '../services/audio/player.service';
import { SoundService } from '../services/audio/sound.service';
import { PlaylistService } from '../services/audio/playlist.service';
import { RestService } from '../services/rest.service';
import { SessionService } from '../services/session.service';
import { TitleService } from '../services/title.service';
import { ParserService } from '../services/parser.service';
import { LoadingService } from '../services/loading.service';

export const PROVIDERS: Array<any> = [
    provide(Window, { useValue: window }),
    ...TD_LAYOUT_PROVIDERS,
    ...HTTP_PROVIDERS,
    ...JSONP_PROVIDERS,
    ...ROUTE_PROVIDERS,
    MdIconRegistry,
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
    SessionService,
    ParserService,
    LoadingService
]
