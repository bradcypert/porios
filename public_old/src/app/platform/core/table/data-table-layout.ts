import { Component, Input, Output, EventEmitter } from '@angular/core';

import {TdDataTableHeaderSelectableRow, TdDataTableSelectableRow, ITableSelectableRowSelectionChange} from './data-table-selectable-tr';
import {TdDataTable} from './data-table';

@Component({
    selector: 'td-data-table-layout',
    template: `
        <md-toolbar [color]="color">
            <span>{{title}} <i class="fa fa-plus-circle greenFont link" (click)="emitAdd()" *ngIf="icon"></i></span>
            <span style="flex: 1"></span>
            <span><td-input title="" placeholder="Search" #searchField (change)="emitSearch(searchField['value'])"></td-input></span>
            <span *ngIf="action" class="spacer"></span>
            <span *ngIf="action"><button md-button (click)="emitAction()">{{action}}</button></span>
        </md-toolbar>
        <div class="td-data-table-table">
            <ng-content></ng-content>
        </div>
    `,
    host: {
        '[class.td-data-table-layout]': 'true'
    }
})
export class TdDataTableLayout {
    @Input('title') title: string;
    @Input('action') action: string;
	@Input() icon: boolean = false;
    @Input('color') color: string;
    @Output('onAction') onAction: EventEmitter<any> = new EventEmitter(false);
    @Output('onSearch') onSearch: EventEmitter<any> = new EventEmitter(false);
	@Output('onAdd') onAdd: EventEmitter<any> = new EventEmitter(false);

	emitAdd() {
		this.onAdd.emit(true);
	}

    emitAction() {
        this.onAction.emit(true);
    }

    emitSearch(search: any) {
        this.onSearch.emit(search);
    }
}
