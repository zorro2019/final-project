import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DeleteUserComponent} from './delete-user.component';

const routes: Routes = [
    { path: 'admin/delete-user/:id', component: DeleteUserComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeleteUserRouting {
    
}