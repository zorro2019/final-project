import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainChefServiceComponent} from './main-chef-service/main-chef-service.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [];
@NgModule({
    imports:[CommonModule, RouterModule.forChild(routes)],
    exports:[],
    declarations:[MainChefServiceComponent]
})
export class ChefServiceModule {

}