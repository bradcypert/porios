import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ex-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})
export class ExternalNavbarComponent {

    constructor( private _router: Router ) {

    }

    public navigate(url: string) {
        this._router.navigate([url]);
    }

}
