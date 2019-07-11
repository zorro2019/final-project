import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mwl-demo-utils-calendar-header',
    template: `
        <div class="row text-center">
            <div class="col-md-4">
                <div class="btn-group">
                    <div
                            class="btn btn-primary"
                            mwlCalendarPreviousView
                            [view]="view"
                            [(viewDate)]="viewDate"
                    >
                        Previous
                    </div>
                    <div
                            class="btn btn-outline-secondary"
                            mwlCalendarToday
                            [(viewDate)]="viewDate"
                    >
                        Today
                    </div>
                    <div
                            class="btn btn-primary"
                            mwlCalendarNextView
                            [view]="view"
                            [(viewDate)]="viewDate"
                    >
                        Next
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h3>
                    {{ viewDate | calendarDate:(view + 'ViewTitle'):locale:weekStartsOn }}
                </h3>
            </div>
            <div class="col-md-4">
                <div class="btn-group">
                    <div
                            class="btn btn-primary"
                            (click)="setView(CalendarView.Month)"
                            [class.active]="view === CalendarView.Month"
                    >
                        Month
                    </div>
                    <div
                            class="btn btn-primary"
                            (click)="setView(CalendarView.Week)"
                            [class.active]="view === CalendarView.Week"
                    >
                        Week
                    </div>
                </div>
            </div>
        </div>
        <br />
  `
})
export class CalendarHeaderComponent {
    @Input() view: string;

    @Input() viewDate: Date;

    @Input() locale: string = 'en';

    @Output() viewChange: EventEmitter<string> = new EventEmitter();

    @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
}
