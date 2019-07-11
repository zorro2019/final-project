import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MedecinDefaultComponent} from './medecin-default.component';

const routes: Routes = [
    {path: '', component: MedecinDefaultComponent},
];

@NgModule({
    imports:[RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule],
    declarations:[
        MedecinDefaultComponent
    ]
})
export class MedecinDefaultModule {

}