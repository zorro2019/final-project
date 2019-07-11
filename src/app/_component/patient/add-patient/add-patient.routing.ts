import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddPatientComponent} from './add-patient.component';

const routes: Routes = [
    { path: '', component: AddPatientComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddPatientRouting {
    
}