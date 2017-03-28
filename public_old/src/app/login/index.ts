import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

export const LOGIN_COMPONENTS: any = [
    LoginComponent,
    RegisterComponent
];

export const LOGIN_PROVIDERS: any = [

];

export const LOGIN_ROUTES: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent }
];
