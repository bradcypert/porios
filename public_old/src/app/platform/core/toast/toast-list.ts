import { Component, Input, Output, EventEmitter, ElementRef, ViewChildren, ContentChildren, QueryList, ViewChild } from '@angular/core';

import { TdToast } from './toast';
import { ToastService } from './services/toast.service';

@Component({
	selector: 'toast',
	template: `
    <div class="ToastOuterWindow">
        <td-toast>
			<div flex layout="column">
				<div flex layout="row" class="toastMessage" *ngFor="let msg of messages">
					<div>
						{{msg['message']}}
					</div>
					<span flex></span>
					<div class="control" *ngIf="msg['undo']" (click)="undo(msg['position']);">
						<md-icon>undo</md-icon>
					</div>
					<span class="spacer"></span>
					<div class="control" *ngIf="msg['dismiss']" (click)="dismiss(msg['position']);">
						<md-icon>close</md-icon>
					</div>
				</div>
			</div>
        </td-toast>
    </div>
    `
})

export class TdToastList{

    private visible: boolean = false;
	private messages: Array<any> = [];

	@ViewChild(TdToast) private toast: TdToast;

	constructor(private _toastService: ToastService) {
		this._toastService.setSubscribed(false);
		if ( !this._toastService.isSubscribed() ) {
			this._toastService.added.subscribe((item:any) => this.onItemAdded(item));
			this._toastService.setSubscribed(true);
		}
	}

	ngOnInit() {

	}

	onItemAdded(data:any) {
		this.messages = data;
		for ( let i = (this.messages.length-1); i >= 0; i-- ) {
			if ( this.messages[i]['time'] > 0  ) {
				let position = this.messages[i]['position'];
				setTimeout(() => {
					this._toastService.reportChange(position, 'timedout');
				}, this.messages[i]['time']);
			}
		}

        if (this.messages.length) {
            if (!this.visible) {
                this.show();
            }
        } else {
            this.close();
        }
	}

	show() {
		this.toast.open('8px');
        this.visible = true;
	}

	close() {
		this.toast.close();
        this.visible = false;
	}

	dismissAll() {
		this._toastService.dismissAll();
	}

	dismiss(position:number) {
		this._toastService.reportChange(position,'dismiss');
	}

	undo(position:number) {
		this._toastService.reportChange(position,'undo');
	}
}
