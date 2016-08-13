import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "td-autocomplete",
    template: `
    <md-input [placeholder]="placeholder"
        (focus)="onEnter()"
        (blur)="onLeave()"
        (keyup)= "onKeyUp($event)"
        [(ngModel)] = "searchText">
    </md-input>`,
})
export class TdAutoCompleteDirective implements OnInit {
    @Input() placeholder: string;

    @Input() items: Array<any> = [];

    @Input() itemText: string;

    @Input() selectedItem: any;

    @Output() selectedItemChange = new EventEmitter();

    @Input() searchText: string;

    @Output() searchTextChange = new EventEmitter();

    popupVisible = false;

    private matches: Array<any> = [];

    ngOnInit() {
        this.setMatches();
    }

    onEnter() {
        this.setMatches();
        this.popupVisible = true;
    }

    onLeave() {
        this.popupVisible = false;
    }

    //[(value)] is buggy and does not propagate changes on the md-input so we can get the value correctly
    onKeyUp(event: any) {
        this.searchText = event.target.value;
        this.searchTextChange.emit(this.searchText);

        this.setMatches();
    }

    select(item: any) {
        this.selectedItemChange.emit(item);
        this.searchText = item[this.itemText];
        this.popupVisible = false;
    }

    private setMatches() {
        if (this.searchText) {
            let query = new RegExp(this.searchText, 'ig');
            this.matches = [];

            let tmp: Array<any> = [];
            this.items.map(c => {
                if (c.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
                    tmp.push(c);
                }
            })

            this.matches = tmp;
        } else {
            this.matches = [{
                name: 'No Matches Found'
            }];
        }
    }
}