import { RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PatientContentComponent} from './patient-content.component';

const routes: Routes = [
    {path: '', component: PatientContentComponent}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations:[PatientContentComponent]
})
export class PatientContentModule {
    
}