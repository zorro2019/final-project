import {RouterModule, Routes} from '@angular/router';
import {AdminContentComponent} from './admin-content.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
    { path: '', component: AdminContentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminContentRouting {

}