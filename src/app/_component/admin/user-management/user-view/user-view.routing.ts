import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserViewComponent} from './user-view.component';

const routes: Routes = [
    { path: 'admin/user/:id', component: UserViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserViewRouting {
    
}