import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SecretaireDefaultComponent} from './secretaire-default.component';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {HttpClientModule} from '@angular/common/http';
import {CalendarManagerModule} from '../../../calender-management/calendar.module';

const routes: Routes = [
    {path: '', component: SecretaireDefaultComponent},
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
        CalendarManagerModule
    ],
    exports: [RouterModule],
    declarations:[
        SecretaireDefaultComponent
    ]
})
export class SecretaireDefaultModule {

}