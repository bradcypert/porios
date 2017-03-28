import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'in-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})
export class InternalNavbarComponent {

    constructor( private _router: Router ) {

    }

    public navigate(url: string) {
        this._router.navigate([url]);
    }

}
