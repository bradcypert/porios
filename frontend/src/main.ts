import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [ROUTER_DIRECTIVES]);
