import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component ({
    selector: 'favorites',
    template: require('./favorites.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class FavoritesComponent {

}