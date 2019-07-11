import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MainMedecinComponent} from './main-medecin/main-medecin.component';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarManagerModule} from '../../calender-management/calendar.module';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [

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
    exports:[],
    declarations:[MainMedecinComponent]
})
export class MedecinModule {

}