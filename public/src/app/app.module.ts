import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  RouterModule,
  PreloadAllModules,
  UrlSerializer
} from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs';

// Material
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Bootstrap Component
import { AppComponent } from './app.component';

// Serializer
import { LowerCaseUrlSerializer } from './shared/utils/serializer';

// Components, Providers, Routes
import {
  COMPONENTS,
  PROVIDERS,
  ROUTES
} from './platform';

// SASS Stylings
import '../styles/styles.scss';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    COMPONENTS,
  ],
  providers: [
    PROVIDERS,
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    },
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
  ]
})
export class AppModule {
}
