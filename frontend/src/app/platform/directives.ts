import { LoadingIndicatorDirective } from '../directives/loading-indicator.directive';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { PlaylistComponent } from '../components/player/playlist.component';

import { TD_LAYOUT_DIRECTIVES, TD_STEPS_DIRECTIVES } from './core';

export const DIRECTIVES: Array<any> = [
    ...TD_LAYOUT_DIRECTIVES,
    ...TD_STEPS_DIRECTIVES,
    LoadingIndicatorDirective,
    SidebarComponent,
    PlaylistComponent
]