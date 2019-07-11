import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChefDefaultComponent} from './chef-default.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
    {path:'', component:ChefDefaultComponent}
];
@NgModule({
    imports:[RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule],
    declarations:[
        ChefDefaultComponent
    ]
})
export class ChefDefaultModule {

}