import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EditUserComponent} from './edit-user.component';

const routes: Routes = [
    { path: 'admin/edit-user/:id', component: EditUserComponent }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditUserRouting {
    
}