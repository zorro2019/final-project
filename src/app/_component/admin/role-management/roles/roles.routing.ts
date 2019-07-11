import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RolesComponent} from './roles.component';

const routes: Routes = [
    { path: 'admin/roles', component: RolesComponent }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RolesRouting {

}