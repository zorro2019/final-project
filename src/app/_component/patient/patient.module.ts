import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPatientComponent} from './main-patient/main-patient.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
    imports:[CommonModule, MDBBootstrapModule.forRoot()],
    exports:[],
    declarations:[
        MainPatientComponent
    ]
})
export class PatientModule {
    
}