import { FormsModule } from '@angular/forms';

import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdCoreModule } from '@angular2-material/core';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdMenuModule } from '@angular2-material/menu';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdSliderModule } from '@angular2-material/slider';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip';

import { routing } from './routes';

export const MODULES: Array<any> = [
    routing,
    FormsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdCoreModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule
]