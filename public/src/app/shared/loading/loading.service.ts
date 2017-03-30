import {
  Injectable,
  EventEmitter
} from '@angular/core';

@Injectable()
export class LoadingService {

  public stateChange: EventEmitter<any> = new EventEmitter();

  set loadingState(state: boolean) {
    if (this._loadingState !== state) {
      this.stateChange.emit(state);
      this._loadingState = state;
    }
  }
  get loadingState() {
    return this._loadingState;
  }

  private _loadingState: boolean = false;

  public toggleLoader(state?: boolean) {
    if (!state) {
      state = !this._loadingState;
    }

    this.loadingState = state;
  }

}
