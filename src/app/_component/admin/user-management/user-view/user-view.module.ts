import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule, MatDialogModule, MatIconModule,
    MatInputModule,
    MatListModule, MatMenuModule, MatSelectModule,
    MatSidenavModule, MatSlideToggleModule, MatTableModule,
    MatTabsModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserViewComponent} from './user-view.component';

const routes: Routes = [
    {path: '', component: UserViewComponent}
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
    exports: [RouterModule],
    declarations:[UserViewComponent]
})
export class UserViewModule {
    
}