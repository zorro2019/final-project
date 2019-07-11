import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChefDefaultComponent} from './chef-default.component';

const routes: Routes = [
    {path:'', component: ChefDefaultComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChefDefaultRouting {

}