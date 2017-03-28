import { Component, Input, forwardRef, ViewEncapsulation, ViewChild, ContentChildren, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

import { Subscription } from 'rxjs';

import { TdSelectItemComponent } from './select-item.component';

export const TD_SELECT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdSelectComponent),
    multi: true
};

@Component({
    selector: 'td-select',
    templateUrl: './select.component.html',
    styleUrls: [ './select.component.scss' ],
    providers: [TD_SELECT_CONTROL_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None
})
export class TdSelectComponent {

    @ContentChildren(TdSelectItemComponent) private _selectItems: QueryList<TdSelectItemComponent>;

    @Input('title') title: string;
    @Input('options') options: Array<any>;

    private _subcriptions: Subscription[] = [];

    ngAfterContentInit() {
        this._selectItems.toArray().forEach((item: TdSelectItemComponent) => {
            let subscription: Subscription = item.valueChange.asObservable().subscribe(() => {
                this.setValue(item.value);
            });
            this._subcriptions.push(subscription);
        });
        this._selectItems.changes.subscribe(res => {
            this.removeSubscriptions();
            res.toArray().forEach((item: TdSelectItemComponent) => {
                let subscription: Subscription = item.valueChange.asObservable().subscribe(() => {
                    this.setValue(item.value);
                });
                this._subcriptions.push(subscription);
            });
        })
    }

    ngOnDestroy() {
        this.removeSubscriptions();
    }

    removeSubscriptions() {
        this._subcriptions.forEach((subs: Subscription) => {
            subs.unsubscribe();
        });
    }

    setValue(value: any) {
        this.value = value;
    }

    getValueText(value: any) {
        let tmp = '';
        this._selectItems.toArray().map((c: any) => {
            if (c.value == value) {
                tmp = c.text;
            }
        })
        return tmp;
    }

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