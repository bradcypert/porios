import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { COMPONENTS } from './platform/components';
import { DIRECTIVES } from './platform/directives';
import { MODULES } from './platform/modules';
import { PROVIDERS } from './platform/providers';
import { PIPES } from './platform/pipes';

@NgModule({
    imports: [
        BrowserModule,
        ...MODULES
    ],
    declarations: [
        AppComponent,
        ...PIPES,
        ...DIRECTIVES,
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap:[AppComponent]
})
export class AppModule {}