import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {
    CalendarEvent,
    CalendarDateFormatter,
    DAYS_OF_WEEK,
    CalendarView, CalendarEventTimesChangedEvent, CalendarMonthViewDay
} from 'angular-calendar';
import {CustomDateFormatterProvider} from '../../../../calender-management/custom-date-formatter.provider';
import {
    addDays,
    addMonths,
    addWeeks,
    endOfDay,
    endOfMonth,
    endOfWeek,
    startOfDay,
    startOfMonth,
    startOfWeek,
    subDays,
    subMonths,
    subWeeks
} from 'date-fns';
import {colors} from '../../../../calender-management/color';
import {Subject} from 'rxjs';

type CalendarPeriod = 'day' | 'week' | 'month';

function addPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
    return {
        day: addDays,
        week: addWeeks,
        month: addMonths
    }[period](date, amount);
}

function subPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
    return {
        day: subDays,
        week: subWeeks,
        month: subMonths
    }[period](date, amount);
}

function startOfPeriod(period: CalendarPeriod, date: Date): Date {
    return {
        day: startOfDay,
        week: startOfWeek,
        month: startOfMonth
    }[period](date);
}

function endOfPeriod(period: CalendarPeriod, date: Date): Date {
    return {
        day: endOfDay,
        week: endOfWeek,
        month: endOfMonth
    }[period](date);
}

declare var $: any;

@Component({
    selector: 'app-emplois',
    templateUrl: './emplois.component.html',
    styleUrls: ['./emplois.component.scss'],
    styles: [
            `
            .drag-active {
                position: relative;
                z-index: 1;
                pointer-events: none;
            }

            .drag-over {
                background-color: #eee;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: CalendarDateFormatter,
            useClass: CustomDateFormatterProvider
        },],
    encapsulation: ViewEncapsulation.None
})
export class EmploisComponent implements OnInit {
    view: CalendarView = CalendarView.Month;

    viewDate = new Date();

    events: CalendarEvent[] = [];

    locale: string = 'fr';

    weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

    weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];

    CalendarView = CalendarView;
    // MIN-MAX DATE
    minDate: Date = subMonths(new Date(), 1);

    maxDate: Date = addMonths(new Date(), 1);

    prevBtnDisabled: boolean = false;

    nextBtnDisabled: boolean = false;

    //External events

    activeDayIsOpen = false;
    externalEvents: CalendarEvent[] = [
        {
            title: 'Event 1',
            color: colors.yellow,
            start: new Date(),
            draggable: true
        },
        {
            title: 'Event 2',
            color: colors.blue,
            start: new Date(),
            draggable: true
        }
    ];

    setView(view: CalendarView) {
        this.view = view;
    }


    constructor() {
        this.dateOrViewChanged();
    }

    ngOnInit(): void {
        this.events = [
            {
                title: 'Consultation 1',
                color: colors.yellow,
                start: new Date('2019/06/14 08:00'),
                end: new Date('2019/06/14 8:15'),
                draggable: true,
            },
            {
                title: 'Consultation 2',
                color: colors.yellow,
                start: new Date('2019/06/14 08:15'),
                end: new Date('2019/06/14 08:30'),
                draggable: true,
            },
            {
                title: 'Consultation 3',
                color: colors.yellow,
                start: new Date('2019/06/14 8:30'),
                end: new Date('2019/06/14 08:45'),
                draggable: true,
            },
            {
                title: 'Consultation 4',
                color: colors.yellow,
                start: new Date('2019/06/14 8:45'),
                end: new Date('2019/06/14 09:00'),
                draggable: true,
            }
        ];
        // this.events.push({
        //     title: 'Consultation 5',
        //     color: colors.yellow,
        //     start: new Date('2019/06/14 9:00'),
        //     end: new Date('2019/06/14 09:15'),
        //     eventWidth:"300",
        //     draggable: true,
        // })
    }

    increment(): void {
        this.changeDate(addPeriod(this.view, this.viewDate, 1));
    }

    decrement(): void {
        this.changeDate(subPeriod(this.view, this.viewDate, 1));
    }

    today(): void {
        this.changeDate(new Date());
    }

    dateIsValid(date: Date): boolean {
        return date >= this.minDate && date <= this.maxDate;
    }

    changeDate(date: Date): void {
        this.viewDate = date;
        this.dateOrViewChanged();
    }

    eventDropped({
                     event,
                     newStart,
                     newEnd,
                     allDay
                 }: CalendarEventTimesChangedEvent): void {
        const externalIndex = this.externalEvents.indexOf(event);
        console.log('event');
        if (typeof allDay !== 'undefined') {
            event.allDay = allDay;
        }
        if (externalIndex > -1) {
            this.externalEvents.splice(externalIndex, 1);
            this.events.push(event);
        }
        event.start = newStart;
        if (event.start.getMinutes() === 0) {
            if (event.start.getHours() >= 13) {
                console.log('pause !!!!' + event.start.getFullYear() + '/' + event.start.getMonth() + '/' + event.start.getDate() + ' ' + 13 + ':' + 0);
                event.start = new Date(event.start.getFullYear() + '/' + event.start.getMonth() + '/' + event.start.getDate() + ' ' + 13 + ':' + 0);
            }
            event.end = new Date(event.start.getFullYear() + '/' + event.start.getMonth() + '/' + event.start.getDate() + ' ' + event.start.getHours() + ':' + 30);
        }
        if (event.start.getMinutes() === 30) {
            console.log('date start = ' + event.start.getMonth());
            event.end = new Date(event.start.getFullYear() + '/' + event.start.getMonth() + '/' + event.start.getDate() + ' ' + (event.start.getHours() + 1) + ':' + 0);

        }
        if (newEnd) {
            event.end = newEnd;
        }
        if (this.view === 'month') {
            this.viewDate = newStart;
            this.activeDayIsOpen = true;
        }
        this.events = [...this.events];
    }

    externalDrop(event: CalendarEvent) {
        if (this.externalEvents.indexOf(event) === -1) {
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.externalEvents.push(event);
        }
    }

    // changeView(view: CalendarPeriod): void {
    //     this.view = view;
    //     this.dateOrViewChanged();
    // }

    refresh: Subject<any> = new Subject();

    eventTimesChanged({
                          event,
                          newStart,
                          newEnd
                      }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }

    dateOrViewChanged(): void {
        this.prevBtnDisabled = !this.dateIsValid(
            endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1))
        );
        this.nextBtnDisabled = !this.dateIsValid(
            startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1))
        );
        if (this.viewDate < this.minDate) {
            this.changeDate(this.minDate);
        } else if (this.viewDate > this.maxDate) {
            this.changeDate(this.maxDate);
        }
    }

    beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
        body.forEach(day => {
            if (!this.dateIsValid(day.date)) {
                day.cssClass = 'cal-disabled';
            }
        });
    }

    eventClicked({event}: { event: CalendarEvent }): void {
        console.log('Event clicked', event);
    }

}
