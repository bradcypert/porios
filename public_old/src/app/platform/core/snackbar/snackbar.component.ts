import { Component, Input } from '@angular/core';

@Component({
    selector: 'td-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: [ './snackbar.component.scss' ]
})
export class TdSnackbarComponent {
    @Input() type: string;
}