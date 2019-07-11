import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DefaultDirecteurComponent} from './default-directeur.component';

const routes: Routes = [
    {path: '', component: DefaultDirecteurComponent},
];

@NgModule({
    imports:[RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule],
    declarations:[
        DefaultDirecteurComponent
    ]
})
export class DirecteurModule {

}