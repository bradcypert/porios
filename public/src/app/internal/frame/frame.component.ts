import { Component } from '@angular/core';

@Component({
  selector: 'in-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class InternalFrameComponent {

  public menuItems: any[] = [
    {
      url: '/playing',
      title: 'Now Playing',
      icon: 'queue_music'
    },
    {
      url: '/explore',
      title: 'Explore',
      icon: 'explore'
    },
    {
      url: '/account',
      title: 'Account',
      icon: 'account_circle'
    },
  ];

}
