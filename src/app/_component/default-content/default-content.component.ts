import {ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {MesRdvService} from '../../_service/mesRdv/mes-rdv.service';
import {Mesrdv} from '../../_model/mesrdv';
import {Subject, fromEvent} from 'rxjs';
import {DatePipe} from '@angular/common';
import { finalize, takeUntil } from 'rxjs/operators';
import {
    CalendarEventTitleFormatter,
    CalendarEvent,
    CalendarMonthViewDay,
    CalendarDateFormatter,
    DAYS_OF_WEEK,
    CalendarView,
    CalendarEventTimesChangedEvent, CalendarAngularDateFormatter
} from 'angular-calendar';
import {CustomDateFormatterProvider} from '../../calender-management/custom-date-formatter.provider';
import {colors} from '../../calender-management/color';
import {
    subMonths,
    addMonths,
    addDays,
    addWeeks,
    subDays,
    subWeeks,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    startOfDay,
    endOfDay,
} from 'date-fns';
import {MatCalendar} from '@angular/material';
import {MatMonthView} from '@angular/material/typings/datepicker';

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
    selector: 'app-default-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './default-content.component.html',
    styleUrls: ['./default-content.component.css'],
    providers: [DatePipe, {
        provide: CalendarDateFormatter,
        useClass: CustomDateFormatterProvider
    }],
})
export class DefaultContentComponent implements OnInit {
    private date =  new Date();
    private mois: any[] = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aôut","septembre", "octobre", "novembre", "decembre"];
    datePipe = new DatePipe("fr");
    //calend: MatMonthView;
    ngOnInit(): void {
        console.log('date '+this.datePipe.transform(new Date(), "d/M/y",null,"fr"));
        console.log('mois '+this.mois[1]);
        console.log('mois =='+this.datePipe.transform(new Date(), "M", null, "fr"));
    }

}
