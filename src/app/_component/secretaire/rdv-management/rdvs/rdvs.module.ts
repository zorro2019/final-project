import {RouterModule, Routes} from '@angular/router';
import {CommonModule, registerLocaleData} from '@angular/common';
import {NgModule} from '@angular/core';
import {RdvsComponent} from './rdvs.component';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {HttpClientModule} from '@angular/common/http';
import {CalendarManagerModule} from '../../../../calender-management/calendar.module';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
const routes: Routes = [
    {path: '', component: RdvsComponent},
];

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
        CalendarManagerModule
    ],
    exports: [RouterModule],
    declarations:[RdvsComponent]
})
export class RdvsModule {

}