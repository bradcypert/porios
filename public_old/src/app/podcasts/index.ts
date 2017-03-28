import { Routes } from '@angular/router';

import { PodcastsComponent } from './podcasts.component';
import { PodcastComponent } from './podcast/podcast.component';

export const PODCASTS_COMPONENTS: any = [
    PodcastsComponent,
    PodcastComponent
];

export const PODCASTS_PROVIDERS: any = [

];

export const PODCASTS_ROUTES: Routes = [
    { path: 'Podcasts', component: PodcastsComponent, children: [
        { path: '', component: PodcastComponent },
        { path: ':id', component: PodcastComponent }
    ] }
];
