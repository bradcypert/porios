import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const HOME_COMPONENTS: any = [
    HomeComponent
];

export const HOME_PROVIDERS: any = [

];

export const HOME_ROUTES: Routes = [
    { path: '', redirectTo: 'Home' },
    { path: 'Home', component: HomeComponent }
];
