import { Component, Input } from '@angular/core';

@Component({
    selector: 'td-layout-tabs',
    templateUrl: './layout-tabs.component.html',
    styleUrls: [ './layout-tabs.component.scss' ]
})
export class TdLayoutTabsComponent {
    
    @Input() title: string = '';

}