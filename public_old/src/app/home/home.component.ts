import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [ require('./home.component.scss') ]
})
export class HomeComponent {
    items: Object[] = [
        {
            color: 'purple-700',
            description: 'Find your favorite podcasts!',
            icon: 'mic',
            route: 'Podcasts',
            title: 'Podcasts',
        }, 
        {
            color: 'blue-700',
            description: 'Teradata brand logo usage, color palettes and more',
            icon: 'color_lens',
            route: 'style-guide',
            title: 'Style Guide',
        }, 
        {
            color: 'teal-700',
            description: 'Several different material design layout options for your apps',
            icon: 'view_quilt',
            route: 'layouts',
            title: 'Layouts',
        }, 
        {
            color: 'green-700',
            description: 'Using our custom Angular 2.0 components',
            icon: 'picture_in_picture',
            route: 'components',
            title: 'Teradata Components',
        },
    ];
}