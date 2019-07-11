import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule, MatCardModule,
    MatCheckboxModule,
    MatDialogModule, MatIconModule,
    MatInputModule,
    MatListModule, MatMenuModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule,
    MatTableModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RolesComponent} from './roles.component';

const routes: Routes = [
    {path: '', component: RolesComponent}
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
        FlexLayoutModule,
        MDBBootstrapModule.forRoot(),
    ],
    exports:[RouterModule],
    declarations:[RolesComponent]
})
export class RolesModule {

}