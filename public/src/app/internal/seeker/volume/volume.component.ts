import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

import { MdSliderChange } from '@angular/material';

import { FadeInOutAnimation } from '../../../app.animations';

@Component({
  selector: 'volume',
  templateUrl: './volume.component.html',
  styleUrls: [ './volume.component.css' ],
  animations: [ FadeInOutAnimation() ]
})
export class VolumeComponent {

  @Output('change') public change: EventEmitter<any> = new EventEmitter();
  
  public volume: number = 100;
  public display: boolean = false;

  set isMuted(val: boolean) {
    if (this._isMuted !== val) {
      this._isMuted = val;
      if (val) {
        this.change.emit(0);
      } else {
        this.change.emit(this.volume);
      }
    }
  }
  get isMuted() {
    return this._isMuted;
  }

  private _isMuted: boolean = false;

  public showVolume() {
    this.display = true;
  }

  public hideVolume() {
    this.display = false;
  }

  public setVolume(event: MdSliderChange) {
    this.change.emit(event.value);
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
  }

}
