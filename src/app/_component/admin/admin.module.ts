import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainAdminComponent} from './main-admin/main-admin.component';
import { EditRoleComponent } from './role-management/edit-role/edit-role.component';
import { DeleteRoleComponent } from './role-management/delete-role/delete-role.component';

@NgModule({
    imports:[CommonModule],
    exports:[],
    declarations:[MainAdminComponent, EditRoleComponent, DeleteRoleComponent]
})
export class AdminModule {
    
}