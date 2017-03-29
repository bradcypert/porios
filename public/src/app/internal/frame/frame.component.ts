import { Component } from '@angular/core';

@Component({
  selector: 'in-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class InternalFrameComponent {

  public menuItems: any[] = [
    {
      url: '/Playing',
      title: 'Now Playing',
      icon: 'queue_music'
    },
    {
      url: '/Explore',
      title: 'Explore',
      icon: 'explore'
    },
    {
      url: '/Account',
      title: 'Account',
      icon: 'account_circle'
    },
  ];

}
