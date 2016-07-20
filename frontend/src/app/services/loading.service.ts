import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export class LoadingService {
    loading: Observable<any>;
    private _observer: Observer<any>;

    constructor() {
        this.loading = new Observable(
            (observer: any) => {
                this._observer = observer
            }
        ).share();
    }

    toggleLoadingState(name: any) {
        if  (this._observer) {
            this._observer.next(name);
        }
    }
}