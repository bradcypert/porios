import { Component } from '@angular/core';

@Component({
    selector: 'layout',
    template: require('./layout.component.html')
})
export class LayoutComponent {
    routes: Object[] = [{
            icon: 'home',
            route: '/Home',
            title: 'Home',
        },
        {
            icon: 'mic',
            route: '/Podcasts',
            title: 'Podcasts',
        },
    ];
}