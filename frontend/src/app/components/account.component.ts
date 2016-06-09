import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component ({
    selector: 'account',
    template: require('./account.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class AccountComponent {

}