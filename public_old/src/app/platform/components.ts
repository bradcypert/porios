import { Type } from '@angular/core';

import { AppComponent } from '../app.component';
import { LayoutComponent } from '../layout.component';

import { HOME_COMPONENTS } from '../home';
import { LOGIN_COMPONENTS } from '../login';
import { PODCASTS_COMPONENTS } from '../podcasts';

export const COMPONENTS: Type<any>[] = [
    AppComponent,
    LayoutComponent,
    ...HOME_COMPONENTS,
    ...LOGIN_COMPONENTS,
    ...PODCASTS_COMPONENTS
]
