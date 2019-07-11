import {RouterModule, Routes} from '@angular/router';
import {CommonModule, registerLocaleData} from '@angular/common';
import {NgModule} from '@angular/core';
import {EmploisComponent} from './emplois.component';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {HttpClientModule} from '@angular/common/http';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {CalendarManagerModule} from '../../../../calender-management/calendar.module';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
const routes: Routes = [
    {path: '', component: EmploisComponent},
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        CommonModule,
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
    declarations:[
        EmploisComponent
    ]
})
export class MedecinEmploiModule {

}