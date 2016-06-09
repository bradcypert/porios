import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component ({
    selector: 'messages',
    template: require('./messages.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class MessagesComponent {

}