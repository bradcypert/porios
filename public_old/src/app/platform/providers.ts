import { Type } from '@angular/core';

import { ROUTE_PROVIDERS } from './routes';
import { HOME_PROVIDERS } from '../home';
import { LOGIN_PROVIDERS } from '../login';
import { PODCASTS_PROVIDERS } from '../podcasts';
import { SHARED_PROVIDERS } from '../shared';

export const PROVIDERS: Type<any>[] = [
    { provide: 'Window',  useValue: window },
    ...SHARED_PROVIDERS,
    ...ROUTE_PROVIDERS,
    ...HOME_PROVIDERS,
    ...LOGIN_PROVIDERS,
    ...PODCASTS_PROVIDERS,
];
