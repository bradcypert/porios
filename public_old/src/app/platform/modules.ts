// Core
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Routes
import { routes } from './routes';

// Material
import { MdButtonModule } from '@angular/material';
import { MdButtonToggleModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdCoreModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
import { MdProgressCircleModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';

// Dragula
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

// Platform
import { PlatformChipsModule } from './chips';
import { PlatformCoreModule } from './core';
import { PlatformFileModule } from './file-upload';
import { PlatformHighlightModule } from './highlight';
import { PlatformMarkdownModule  } from './markdown';
import { PlatformPageScrollModule } from './page-scroll';
import { PlatformWizardModule } from './wizard';

export const MODULES: Array<any> = [
    RouterModule.forRoot(routes), 
    HttpModule,
    FormsModule,
    MdButtonModule.forRoot(),
    MdButtonToggleModule.forRoot(),
    MdCardModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdCoreModule.forRoot(),
    MdGridListModule.forRoot(),
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdMenuModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdRadioModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdSliderModule.forRoot(),
    MdSlideToggleModule.forRoot(),
    MdTabsModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdTooltipModule.forRoot(),
    DragulaModule,
    PlatformCoreModule.forRoot(),
    PlatformFileModule.forRoot(),
    PlatformMarkdownModule.forRoot(),
    PlatformHighlightModule.forRoot(),
    PlatformChipsModule.forRoot(),
    PlatformPageScrollModule.forRoot(),
    PlatformWizardModule.forRoot()
]