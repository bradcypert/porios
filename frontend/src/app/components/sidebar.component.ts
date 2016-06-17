import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component ({
    selector: 'sidebar',
    template: require('./sidebar.component.html'),
    styles: [require('./sidebar.component.css')],
    directives: [ ROUTER_DIRECTIVES ]
})
export class SidebarComponent {

}