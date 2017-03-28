import { Component, Input, forwardRef } from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms'

export const TD_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdInputComponent),
    multi: true
};

@Component({
    selector: 'td-input',
    templateUrl: './input.component.html',
    styleUrls: [ './input.component.scss' ],
    providers: [ TD_INPUT_CONTROL_VALUE_ACCESSOR ]
})
export class TdInputComponent {
    @Input() placeholder: string = '';
    @Input() title: string;
    @Input() type: string;
    @Input() disabled: boolean = false;
    @Input() pattern: string;
    @Input() required: boolean = false;
 
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