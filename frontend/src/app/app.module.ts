import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { COMPONENTS } from './platform/components';
import { DIRECTIVES } from './platform/directives';
import { MODULES } from './platform/modules';
import { PIPES } from './platform/pipes';
import { PROVIDERS } from './platform/providers';

@NgModule({
    imports: [
        BrowserModule,
        ...MODULES
    ],
    declarations: [
        AppComponent,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES
    ],
    providers: [
        ...PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}