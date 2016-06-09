import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component ({
    selector: 'settings',
    template: require('./settings.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class SettingsComponent {

}