import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component ({
    selector: 'feed',
    template: require('./feed.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class FeedComponent {

}