import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { LoadingService} from '../services/loading.service';

@Component({
    selector: 'loading-indicator',
    template: `
        <div [style.visibility]="loading ? 'visible' : 'hidden'" class="loading-indicator-container">
            <div class="bullet bullet-one"></div>
            <div class="bullet bullet-two"></div>
            <div class="bullet bullet-three"></div>
        </div>
    `,
    directives: [CORE_DIRECTIVES]
})
export class LoadingIndicatorDirective implements OnInit, OnDestroy {
    private loading = false;
    private sub: any;

    constructor ( public el: ElementRef, public _loadingService: LoadingService ) {

    } 

    setLoading(loading: any) {
        this.loading = loading;
    }

    ngOnInit() {
        this.sub = this._loadingService.loading.subscribe(loading => this.setLoading(loading));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}