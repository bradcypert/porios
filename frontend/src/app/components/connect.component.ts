import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component ({
    selector: 'connect',
    template: require('./connect.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class ConnectComponent {

}