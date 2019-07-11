import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddRdvComponent} from './add-rdv.component';

const routes: Routes = [
    { path: '', component: AddRdvComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddRdvRouting {
    
}