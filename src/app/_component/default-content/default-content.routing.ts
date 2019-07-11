import {RouterModule, Routes} from '@angular/router';
import {DefaultContentComponent} from './default-content.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
    { path: '', component: DefaultContentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DefaultContentRouting {
    
}