import { Component } from '@angular/core';

@Component ({
    selector: 'playlist',
    template: require('./playlist.component.html')
})
export class PlaylistComponent {

    private isOpen: boolean = false;

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }

    getState() {
        return this.isOpen;
    }

}