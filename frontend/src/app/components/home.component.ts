import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component ({
    selector: 'home',
    template: require('./home.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class HomeComponent {

}