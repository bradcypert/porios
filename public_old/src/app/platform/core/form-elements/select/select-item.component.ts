import { Component, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'td-select-item',
    templateUrl: './select-item.component.html'
})
export class TdSelectItemComponent {

    @Input() value: any;
    @Input() text: any;

    public valueChange: EventEmitter<any> = new EventEmitter(false);

    setValue(option: any) {
        this.valueChange.emit(option);
    }

}