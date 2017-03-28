import { Injectable, Output, EventEmitter } from '@angular/core';
import { Singleton } from '../models/singleton.model';

@Injectable()
export class ToastService {
	private messages: Array<any> = [];
	private subscribed:boolean = false;
	@Output() added = new EventEmitter();
	@Output() change = new EventEmitter();
	/**
	* constructor
	*
	* @access public
	* @return object:ToastService
	*/
	constructor() {
		//return this;
	}

	setSubscribed(sub:boolean) {
		Singleton.set('toast_subscribed',sub);
	}

	isSubscribed(){
		let t = Singleton.get('toast_subscribed');
		return ( t === undefined || t == false )?false:true;
	}

	getMessages() {
		this.messages = this.getToast();
		return this.messages;
	}

	/**
	* toast
	*
	* Allows you to add messages to the toast display
	*
	*	<code>
	*		// If param 4 (time) is passed as 0 it will assume there is no auto timeout.
	*		let toastSaved = this._toastService.toast('Load em quick 1',1,1,0);
	*		// toastSaved will contain the current position of this toast message, for later comparison
	*	</code>
	*
	* Emits this.added : Array of Messages as exists post addition
	*
	* @access public
	* @param msg:string
	* @param showDismiss?:number (Elvis Operator(?) indicates that it is not required)
	* @param showUndo?:number (Elvis Operator(?) indicates that it is not required)
	* @param time?:number (Elvis Operator(?) indicates that it is not required)
	* @return currentPosition:number
	*/
	toast(msg:string, showDismiss?:number, showUndo?:number, time?:number) {
		this.messages = this.getToast();

		let currentPosition = this.messages.length;

		for ( let msg = this.messages.length-1; msg >= 0; msg-- ) {
			currentPosition = (this.messages[msg]['position']+1);
			break;
		}

		this.messages.push({
			message: msg,
			position: currentPosition,
			time: (!isNaN(time)&&time>=0)?time:10000,
			dismiss: (showDismiss)?1:0,
			undo: (showUndo)?1:0
		});

		this.setToast(this.messages);
		this.added.emit(this.messages);
		return currentPosition;
	}

	/**
	* reportChange
	*
	* This function is so that the toast component has noted a change.
	*
	*	<code>
	*		let toastSaved = this._toastService.toast('Load em quick 1',1,1,0);
	*		this._toastService.change.subscribe((data:any)=>{
	*			if ( data['position'] == toastSaved ) {
	*				console.log(data['change']);
	*			}
	*		});
	*	</code>
	*
	* Emits this.change: An object of {position: (position number returned by this.toast()) , change: ('dismiss' || 'undo' || timedout)}
	* Emails this.added
	*
	* @param position: number
	* @param change: string
	* @return object:ToastService
	*/
	reportChange(position:number, change:string) {
		let msgs = this.getToast();
		let removed = false;
		for ( let msg in msgs ) {
			if ( position == msgs[msg]['position'] ) {
				removed = true;
				msgs.splice(msg,1);
				break;
			}
		}
		this.setToast(msgs);
		switch ( change ) {
			case 'dismiss':
				this.change.emit({'position': position, change: 'dismiss'});
				break;
			case 'undo':
				this.change.emit({'position': position, change: 'undo'});
				break;
			default: //timed out
				if ( removed ) {
					this.change.emit({'position': position, change: 'timedout'});
				}
				break;
		}
		this.added.emit(msgs);
		return this;
	}

	/**
	* dismissAll
	*
	* This function is so that the toast component can clear messages.
	*
	*	<code>
	*		this._toastService.dismissAll();
	*	</code>
	*
	* Emits this.change (for each existing message): An object of {position: (position number returned by this.toast()) , change: ('dismiss' || 'undo' || timedout)}
	* Emails this.added (Single time after all are cleared)
	*
	* @param position: number
	* @param change: string
	* @return object:ToastService
	*/
	dismissAll() {
		let msgs = this.getToast();
		for ( let i = (msgs.length-1); i >= 0; i-- ) {
			this.change.emit({'position': msgs[i]['position'], change: 'dismiss'});
			msgs.splice(i,1);
		}
		this.setToast(msgs);
		this.added.emit(msgs);
		return this;
	}

	/**
	* getToast
	*
	* Return a singleton toast messages array
	* @access private
	* @return messages: Array<any>
	*/
	private getToast() {
		let t = Singleton.get('toast');
		if ( !t.length ) {
			this.setToast(this.messages);
		}
		return Singleton.get('toast');
	}

	/**
	* setToast
	*
	* Set a singleto toast messages array
	* @access private
	* @param messages: Array<any>
	*/
	private setToast(messages: Array<any>) {
		Singleton.set('toast',messages);
	}
}
