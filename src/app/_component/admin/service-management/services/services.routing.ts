import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ServicesComponent} from './services.component';

const routes: Routes = [
    { path: 'admin/services', component: ServicesComponent }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class ServicesRouting {
    
}