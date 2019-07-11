import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EditUserComponent} from './edit-user.component';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule,
    MatDialogModule,
    MatIconModule, MatInputModule, MatListModule,
    MatMenuModule,
    MatSelectModule, MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';

const routes: Routes = [
    {path: '', component: EditUserComponent}
];
@NgModule({
    imports:[
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        //Material import
        MatCheckboxModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatToolbarModule,
        MatTableModule,
        // FlexLayout
        FlexLayoutModule
    ],
    exports:[RouterModule],
    declarations:[EditUserComponent]
})
export class EditUserModule {
}