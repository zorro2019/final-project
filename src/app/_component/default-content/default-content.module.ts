import { RouterModule, Routes} from '@angular/router';
import {DefaultContentComponent} from './default-content.component';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import { DragAndDropModule } from 'angular-draggable-droppable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {CalendarHeaderComponent} from '../../calender-management/calendar-header.component';
import {CalendarManagerModule} from '../../calender-management/calendar.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {MatMonthView} from '@angular/material';
const routes: Routes = [
    {path: '', component: DefaultContentComponent}
];
registerLocaleData(localeFr);
@NgModule({
    imports:[
        RouterModule.forChild(routes),
        MDBBootstrapModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        DragAndDropModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        CalendarManagerModule,
        ],
    exports: [RouterModule],
    declarations:[DefaultContentComponent]
})
export class DefaultContentModule {
    
}