import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Subscription } from 'rxjs';

import { LoadingService } from './loading.service';

@Component({
  selector: 'loading-overlay',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {

  @ViewChild('loadingOverlay') public loadingOverlay: ElementRef;

  private _subscriptions: Subscription[] = [];

  constructor ( private _loadingService: LoadingService ) {

  }

  public ngOnInit() {
    this._subscriptions.push(
      this._loadingService.stateChange.subscribe((state: boolean) => {
        if (state) {
          this._showLoader();
        } else {
          this._hideLoader();
        }
      })
    );
  }

  public ngOnDestroy() {
    this._subscriptions.map((c: Subscription) => {
      c.unsubscribe();
    });
  }

  private _showLoader() {
    let self = this;
    let el = <HTMLElement> this.loadingOverlay.nativeElement;
    el.classList.remove('closing');
    el.classList.remove('closed');
    el.classList.add('opening');
    el.classList.add('opened');
    setTimeout(() => {
      el.classList.remove('opening');
    }, 250);
  }

  private _hideLoader() {
    let self = this;
    let el = <HTMLElement> this.loadingOverlay.nativeElement;
    el.classList.remove('opening');
    el.classList.add('closing');
    el.classList.add('closed');
    setTimeout(() => {
      el.classList.remove('opened');
      el.classList.remove('closing');
    }, 250);
  }

}
