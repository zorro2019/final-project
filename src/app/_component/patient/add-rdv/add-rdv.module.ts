import { RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatListModule, MatMenuModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AddRdvComponent} from './add-rdv.component';

const routes: Routes = [
    {path: '', component: AddRdvComponent}
];
@NgModule({
    imports:[
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        // Material
        MatCheckboxModule,
        MatButtonModule,
        MatCardModule,

        MatListModule,
        MatMenuModule,

        // FlexLayout
        FlexLayoutModule,
    ],
    exports: [RouterModule],
    declarations:[AddRdvComponent]
})
export class AddRdvModule {
    
}