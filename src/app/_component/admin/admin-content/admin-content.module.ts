import {RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';
import {AdminContentComponent} from './admin-content.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {path: '', component: AdminContentComponent},
];

@NgModule({
    imports:[RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule],
    declarations:[
        AdminContentComponent
    ]
})
export class AdminContentModule {

}