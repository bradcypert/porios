import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Calendar } from './calendar';
import { Animate } from '../../util/animate';
import { KeyCodes } from '../../util/key_codes';

@Component({
  selector: 'td-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: [`
	  .pointer {
		  cursor: pointer;
	  }
	  `],
  host: {
    'tabindex': '0',
    '(body:keydown)': 'onDocumentKeypress($event)'
  },
  providers: [DatePipe]
})
export class TdDatepickerComponent implements OnInit {
  // api bindings
  @Input() accentColor: string;
  @Input() date: Date;
  @Input() rangeStart: Date;
  @Input() rangeEnd: Date;
  @Input() title: string;
  @Input() format: string = 'yyyy-MM-dd';
  //
  @Input() animateLeft: boolean;
  @Input() animateRight: boolean;
  @Input() calendarDays: Array<number>;
  @Input() currentMonth: string;
  @Input() dayNames: Array<String>;
  @Input() hoveredDay: Date;
  @Input() inputText: string;
  @Input() showCalendar: boolean;
  @Output() onSelect = new EventEmitter<Date>();

  @ViewChild('datepickerCalendarMonth') datepickerCalendarMonth: ElementRef
  @ViewChild('datepickerCalendar') datepickerCalendar: ElementRef;

  clickListener: any;
  animationListener: any;
  calendar: Calendar;
  colors: any;
  currentMonthNumber: number;
  currentYear: number;
  months: Array<string>;

  constructor(private elementRef: ElementRef, private renderer: Renderer, private datePipe: DatePipe) {
    // view logic
    this.showCalendar = false;
    // colors
    this.colors = {
      'black': '#333333',
      'blue': '#1285bf',
      'lightGrey': '#f1f1f1',
      'white': '#ffffff'
    };
    this.accentColor = this.colors['blue'];
    // time
    this.calendar = new Calendar();
    this.dayNames = [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ];
    this.months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November',' December'
    ];
    // animations
    this.animationListener = null;
    this.animateLeft = false;
    this.animateRight = false;
    // events
    this.clickListener = null;
  }

  ngOnInit() {
    let date: any;
    if (this.date) {
      date = this.date;
      this.setInputText(this.date);
    } else {
      date = new Date();
    }

    this.currentMonthNumber = date.getMonth();
    this.currentMonth = this.months[this.currentMonthNumber];
    this.currentYear = date.getFullYear();

    const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
    this.calendarDays = [].concat.apply([], calendarArray);
  }

  ngOnDestroy() {
    if (this.animationListener) {
        this.removeAnimationListener();
    }
  }

  addAnimationListener() {
    let ele = this.datepickerCalendarMonth.nativeElement;
    if (ele && ele != null) {
      this.animationListener = this.renderer.listen(ele, 'animationend', (event: any) => {
        this.animateLeft = false;
        this.animateRight = false;
      })
    }
  }

  addClickListener() {
    let ele = this.datepickerCalendar.nativeElement;
    if (ele && ele != null) {
      this.clickListener = this.renderer.listen(document, 'click', (event: any) => {
        if (!ele.contains(event.target))
          this.onCancel();
      })
    }
  }

  getDayBackgroundColor(day: Date): string {
    let color = this.colors['white'];
    if (this.isChosenDay(day)) {
      color = this.accentColor;
    } else if (this.isCurrentDay(day)) {
      color = this.colors['lightGrey'];
    }
    return color;
  }

  getDayFontColor(day: Date) {
    let color = this.colors['black'];
    if (this.isChosenDay(day)) {
      color = this.colors['white'];
    }
    return color;
  }

  isChosenDay(day: Date): boolean {
    if (day) {
      return this.date ? day.toDateString() == this.date.toDateString() : false;
    } else {
      return false;
    }
  }

  isCurrentDay(day: Date): boolean {
    if (day) {
      return day.toDateString() == new Date().toDateString();
    } else {
      return false;
    }
  }

  isHoveredDay(day: Date): boolean {
    return this.hoveredDay ? this.hoveredDay == day && !this.isChosenDay(day) : false;
  }

  setCurrentMonth(monthNumber: number) {
    this.currentMonth = this.months[monthNumber];
    const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
    this.calendarDays = [].concat.apply([], calendarArray);
  }

  setHoveredDay(day: Date) {
    this.hoveredDay = day;
  }

  removeHoveredDay(day: Date) {
    this.hoveredDay = null;
  }

  setInputText(date: Date) {
    // let month: string = (date.getMonth() + 1).toString();
    // if (month.length < 2) {
    //   month = `0${month}`;
    // }
    // let day: string = (date.getDate()).toString();
    // if (day.length < 2) {
    //   day = `0${day}`;
    // }
    // this.inputText = `${date.getFullYear()}-${month}-${day}`;
    let raw = date;
    let formatted = this.datePipe.transform(raw, this.format);
    this.inputText = formatted;
  }

  removeAnimationListener() {
    this.animationListener();
  }

  removeClickListener() {
    this.clickListener();
  }

  // Click Handlers
  onArrowLeftClick() {
    const currentMonth: number = this.currentMonthNumber;
    let newYear: number = this.currentYear;
    let newMonth: number;

    if (currentMonth === 0) {
      newYear = this.currentYear - 1;
      newMonth = 11;
    } else {
      newMonth = currentMonth - 1;
    }

    let newDate = new Date(newYear, newMonth);
    if (!this.rangeStart || newDate.getTime() >= this.rangeStart.getTime()) {
      this.currentYear = newYear;
      this.currentMonthNumber = newMonth;
      this.setCurrentMonth(newMonth);
      this.animateLeft = true;
    }
  }

  onArrowRightClick() {
    const currentMonth: number = this.currentMonthNumber;
    let newYear: number = this.currentYear;
    let newMonth: number;

    if (currentMonth === 11) {
      newYear = this.currentYear + 1;
      newMonth = 0;
    } else {
      newMonth = currentMonth + 1;
    }

    let newDate = new Date(newYear, newMonth);
    if (!this.rangeEnd || newDate.getTime() <= this.rangeEnd.getTime()) {
      this.currentYear = newYear;
      this.currentMonthNumber = newMonth;
      this.setCurrentMonth(newMonth);
      this.animateRight = true;
    }
  }

  onCancel() {
    this.close();
  }

  onInputClick() {
    if (this.showCalendar === false) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    Animate.enter(this.datepickerCalendar.nativeElement, 'active')
      .then(() => {
        this.showCalendar = true;
      })
      .then(() => {
        Animate.wait()
      })
      .then(() => {
        this.addAnimationListener(); 
        this.addClickListener();
      });
  }

  close() {
    Animate.leave(this.datepickerCalendar.nativeElement, 'active')
      .then(() => {
        this.showCalendar = false;
      })
      .then(() => {
        Animate.wait()
      })
      .then(() => {
        this.removeAnimationListener();
        this.removeClickListener();
      });
  }

  onSelectDay(day: Date) {
    this.date = day;
    this.setInputText(day);
    this.onSelect.emit(day);
  }

  private onDocumentKeypress(event: KeyboardEvent) {
    if (event.keyCode == KeyCodes.ESCAPE) {
      this.showCalendar = false;
    }
  }
}
