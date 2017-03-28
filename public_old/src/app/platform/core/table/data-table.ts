import {Component, Input, Output, EventEmitter, ViewChild, ContentChild, ContentChildren, QueryList, AfterContentInit, OnDestroy, ElementRef, Renderer} from '@angular/core';
import 'rxjs/add/operator/share';
import {TdDataTableHeaderSelectableRow, TdDataTableSelectableRow, ITableSelectableRowSelectionChange} from './data-table-selectable-tr';

/**
 * Selectable change event data
 */
export interface ITableSelectionChange {
  name: string;
  allSelected: boolean;
  values: any[];
}

@Component({
  selector: 'td-data-table',
  template: `<ng-content></ng-content>`,
  host: {
    '[class.td-data-table]': 'true',
    '[class.td-data-table-selectable]': 'selectable',
  }
})
export class TdDataTable implements AfterContentInit, OnDestroy {
  @Input()
  selectable: boolean;
  @Input()
  sortable: boolean;
  @Output()
  onSelectableAll: EventEmitter<any> = new EventEmitter(false);
  @Output()
  onSelectableChange: EventEmitter<any> = new EventEmitter(false);
  @Output()
  onSortableChange: EventEmitter<any> = new EventEmitter(false);

  @ContentChild(TdDataTableHeaderSelectableRow)
  _masterRow: TdDataTableHeaderSelectableRow;

  @ContentChildren(TdDataTableSelectableRow, true)
  _rows: QueryList<TdDataTableSelectableRow>;

  _listeners: EventEmitter<any>[] = [];

  selected: Array<string> = [];

  private _element: HTMLElement;
  private _thead: HTMLTableSectionElement;
  private _tbody: HTMLTableSectionElement;
  private _sortableHeaders: Array<any> = [];
  private _sortableRows: Array<any> = [];

  constructor( private _elementRef: ElementRef, private _renderer: Renderer ) {
    this.onSelectableChange.share();
    this._element = _elementRef.nativeElement;
  }

  change(event: ITableSelectableRowSelectionChange) {
    let outputEvent: ITableSelectionChange = {
      name: 'selectable_change',
      allSelected: false,
      values: []
    };
    if (event.target instanceof TdDataTableHeaderSelectableRow === true) {
      if (event.isActive === true) {
        outputEvent.allSelected = true;
        outputEvent.values = this._getRowsValues();
      }
    } else {
      outputEvent.values = this.selected.slice(0);

      if (event.isActive === true) {
        outputEvent.values.push(event.selectableValue);
      } else {
        let index = outputEvent.values.indexOf(event.selectableValue);
        if (index !== -1) {
          outputEvent.values.splice(index, 1);
        }
      }
    }

    // dispatch change
    this.selected = outputEvent.values;
    this.onSelectableChange.emit(outputEvent);
  }

  /**
   * @returns {Array<string>}
   */
  _getRowsValues(): any[] {
    return this._rows.toArray()
      .map((tr: TdDataTableSelectableRow) => tr.selectableValue);
  }

  _unsubscribeChildren() {
    this.selected = [];
    if (this._listeners.length) {
      this._listeners.forEach(listener => {
        listener.unsubscribe();
      });
      this._listeners = [];
    }
  }

  _updateChildrenListener(list: QueryList<TdDataTableSelectableRow>) {
    this._unsubscribeChildren();

    list.toArray()
      .map((tr: TdDataTableSelectableRow) => {
        tr.onChange.subscribe(this.change.bind(this));
      });
  }

  ngAfterContentInit() {
    if (this.selectable === true) {

      if (!!this._masterRow) {
        this._masterRow.onChange.subscribe(this.change.bind(this));
      }

      this._rows.changes.subscribe(this._updateChildrenListener.bind(this));
      this._updateChildrenListener(this._rows);
    }

    if (this.sortable === true) {
      this._thead = Array.from(this._element.getElementsByTagName('thead'))[0];
      this._tbody = Array.from(this._element.getElementsByTagName('tbody'))[0];

      this.setSortableHeaders();
      this.setSortableRows();
    }
  }

  setSortableHeaders() {
    let thArray: Array<any> = [];
    let tmpIndex = 0;
    Array.from(this._thead.getElementsByTagName('th')).map(c => {
      if (c.classList.contains('td-text-cell')) {
        c.classList.add('sort');
        let params = {
          'column': tmpIndex,
          'value': c.innerText,
          'type': 'text',
          'element': c
        }
        this._renderer.listen(c, 'click', (event: Event) => {
          this.sortableHeaderClickEvent(event, params);
        })
        thArray.push(params);
      } else if (c.classList.contains('td-number-cell')) {
        c.classList.add('sort');
        let params = {
          'column': tmpIndex,
          'value': c.innerText,
          'type': 'number',
          'element': c
        }
        this._renderer.listen(c, 'click', (event: Event) => {
          this.sortableHeaderClickEvent(event, params);
        })
        thArray.push(params);
      }
      tmpIndex++;
    })

    thArray.map(c => {
      this._sortableHeaders.push(c);
    })
  }

  setSortableRows() {
    let trArray: Array<any> = [];
    Array.from(this._tbody.getElementsByTagName('tr')).map(c => {
      trArray.push(c);
    })

    let tdArray: Array<any> = [];
    trArray.map((c: HTMLElement) => {
      let tmpIndex = 0;
      Array.from(c.getElementsByTagName('td')).map((d: HTMLTableDataCellElement) => {
        if (d.classList.contains('td-text-cell')) {
          tdArray.push({
            'column': tmpIndex,
            'value': d.innerText,
            'type': 'text',
            'key': d.getAttribute('key')
          });
        } else if (d.classList.contains('td-number-cell')) {
          tdArray.push({
            'column': tmpIndex,
            'value': d.innerText,
            'type': 'number',
            'key': d.getAttribute('key')
          });
        }
        tmpIndex++;
      })
    })

    tdArray.map(c => {
      this._sortableRows.push(c);
    })
  }

  private activeSortHeader: HTMLElement;

  sortableHeaderClickEvent(event: Event, params: any) {
    event.stopImmediatePropagation();
    event.preventDefault();

    if (!this.activeSortHeader) {
      this.activeSortHeader = params.element;
      this.activeSortHeader.classList.add('desc');
      params['direction'] = 'desc';
    } else {
      if (params.element === this.activeSortHeader) {
        if (this.activeSortHeader.classList.contains('desc')) {
          this.activeSortHeader.classList.remove('desc');
          this.activeSortHeader.classList.add('asc');
          params['direction'] = 'asc';
        } else if (this.activeSortHeader.classList.contains('asc')) {
          this.activeSortHeader.classList.remove('asc');
          this.activeSortHeader.classList.add('desc');
          params['direction'] = 'desc';
        }
      } else {
        this.activeSortHeader.classList.remove('desc');
        this.activeSortHeader.classList.remove('asc');
        this.activeSortHeader = params.element;
        this.activeSortHeader.classList.add('desc');
        params['direction'] = 'desc';
      }
    }

    this._sortableRows.map(c => {
      if (c.column === params.column) {
        params.key = c.key;
      }
    })

    this.onSortableChange.emit(params);
  }

  ngOnDestroy() {
    this._unsubscribeChildren();
  }

}
