import {
  NgModule,
  ModuleWithProviders,
  Component,
  Output,
  Input,
  AfterContentInit,
  ContentChild,
  EventEmitter,
  ViewChild,
  ViewEncapsulation,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Overlay,
  OverlayModule,
  OverlayState,
  OverlayRef,
  OVERLAY_PROVIDERS
} from '@angular/material';

import {Animate} from '../util/animate';
import {KeyCodes} from '../util/key_codes';

import {TdToastPortal} from './toast-portal';
import {TdToastActions} from './toast-actions';
import {TdToastTitle} from './toast-title';

@Component({
  selector: 'td-toast',
  providers: [Overlay, OVERLAY_PROVIDERS],
  encapsulation: ViewEncapsulation.None,
  template: `
<template tdToastPortal>
  <div class="td-toast" [class.md-active]="active">
    <ng-content select="td-toast-title"></ng-content>
    <ng-content></ng-content>
    <ng-content select="td-toast-actions"></ng-content>
  </div>
</template>
`,
  host: {
    'tabindex': '0',
    '(body:keydown)': 'onDocumentKeypress($event)'
  }
})
export class TdToast implements AfterContentInit, OnDestroy {
  constructor(private overlay: Overlay) {
    this.config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
  }

  open(position:string) {
	this.config.positionStrategy = this.overlay.position()
	  .global()
	  .centerHorizontally()
	  .bottom(position);
	  this.show();
  }

  @Output() onShow: EventEmitter<TdToast> = new EventEmitter<TdToast>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  /** The portal to send the toast content through */
  @ViewChild(TdToastPortal) private portal: TdToastPortal;

  /** Toast actions */
  @ContentChild(TdToastActions) private actions: TdToastActions;

  /** Is the toast active? */
  private active: boolean = false;

  /** Overlay configuration for positioning the toast */
  @Input() config = new OverlayState();

  /** @internal */
  private overlayRef: OverlayRef = null;

  ngAfterContentInit(): any {
    if (this.actions) {
      this.actions.toast = this;
    }
  }

  ngOnDestroy(): any {
    return this.close();
  }

  /** Show the toast */
  show(): Promise<TdToast> {
    return this.close()
      .then(() => this.overlay.create(this.config))
      .then((ref: OverlayRef) => {
        this.overlayRef = ref;
        return ref.attach(this.portal);
      })
      .then(() => Animate.wait())
      .then(() => {
        this.active = true;
        this.onShow.emit(this);
        return this;
      });
  }

  /** Close the toast */
  close(result: any = true, cancel: boolean = false): Promise<TdToast> {
    if (!this.overlayRef) {
      return Promise.resolve<TdToast>(this);
    }
    this.active = false;
    return Animate.wait(100)
      .then(() => {
		  if (this.overlayRef) {
			  this.overlayRef.detach();
		  }
	  }
  		)
      .then(() => {
		if (this.overlayRef) {
	        this.overlayRef.dispose();
	        this.overlayRef = null;
		}
        if (cancel) {
          this.onCancel.emit(result);
        }
        else {
          this.onClose.emit(result);
        }
        return this;
      });
  }

  private onDocumentKeypress(event: KeyboardEvent) {
    if (event.keyCode == KeyCodes.ESCAPE) {
      this.close();
    }
  }
}
