import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MdSidenav } from '@angular/material/sidenav';

import { TdLayoutService } from '../services/layout.service';

@Component({
  selector: 'td-layout-podcast-list',
  styles: [ require('./layout-podcast-list.component.scss') ],
  template: require('./layout-podcast-list.component.html'),
})
export class TdLayoutPodcastListComponent {

  private _transitioning: boolean = false;

  /**
   * title in toolbar
   */
  @Input('title') title: string;

  /**
   * icon for toolbar
   */
  @Input('icon') icon: string;

  /**
   * logo file for toolbar
   */
  @Input('logo') logo: string;

  @ViewChild(MdSidenav) _sideNav: MdSidenav;

  /**
   * method thats called when menu is clicked
   */
  @Output('openMenu') onOpenMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor(private layoutService: TdLayoutService) {

  }

  public menuClick(): void {
    this._onMenuClick();
  }

  /**
   * Proxy toggle method to access sidenav from outside (from td-layout template).
   */
  public toggle(): void {
    if (!this._transitioning) {
      this._transitioning = true;
      this._sideNav.toggle().then(() => {
        this._transitioning = false;
      });
    }
  }

  /**
   * Proxy open method to access sidenav from outside (from td-layout template).
   */
  public open(): void {
    if (!this._transitioning) {
      this._transitioning = true;
      this._sideNav.open().then(() => {
        this._transitioning = false;
      });
    }
  }

  /**
   * Proxy close method to access sidenav from outside (from td-layout template).
   */
  public close(): void {
    if (!this._transitioning) {
      this._transitioning = true;
      this._sideNav.close().then(() => {
        this._transitioning = false;
      });
    }
  }

  /**
   * emits menuEvent
   */
  private _onMenuClick(): void {
    this.onOpenMenu.emit(undefined);
    this.layoutService.openSideNav('menu');
  }
}
