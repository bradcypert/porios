import { Component, Input } from '@angular/core';

@Component({
    selector: 'td-wizard-label-icon',
    templateUrl: './wizard-label-icon.html'
})
export class TdWizardLabelIcon {
    @Input() state: string;
    @Input() icon: string = 'bookmark_border';
}