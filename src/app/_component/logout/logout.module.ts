import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LogoutComponent} from './logout.component';

const routes: Routes = [
    {path: '', component: LogoutComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [RouterModule],
    declarations: [LogoutComponent]
})
export class LogoutModule {

}