import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
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
import {MDBBootstrapModule} from 'angular-bootstrap-md';

const routes: Routes = [
    {path: '', component: UsersComponent}
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
    exports: [RouterModule],
    declarations:[UsersComponent]
})
export class UsersModule {
    
}