import { Component, Input, Provider, forwardRef } from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms'

export const TD_TEXT_AREA_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdTextareaComponent),
    multi: true
};

@Component({
    selector: 'td-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: [ './textarea.component.scss' ],
    providers: [ TD_TEXT_AREA_CONTROL_VALUE_ACCESSOR ]
})
export class TdTextareaComponent {
    @Input() title: string;

    // Make NGModel Compliant
    _value: any = '';
    onChange = (_: any) => {};
    onTouched = () => {};

    get value(): any {
        return this._value;
    }

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    writeValue(value: any) {
        this._value = value;
        this.onChange(value);
    }
    
    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn
    };

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
    // End Compliance
}