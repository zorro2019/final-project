import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModuleRouting} from './layout.module.routing';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import { DefaultMainComponent } from './default-main/default-main.component';
import {HttpClientModule} from '@angular/common/http';
import {MainPatientComponent} from '../patient/main-patient/main-patient.component';
import {MainAdminComponent} from '../admin/main-admin/main-admin.component';
import {MainChefServiceComponent} from '../chef-service/main-chef-service/main-chef-service.component';
import {MainDirecteurComponent} from '../directeur/main-directeur/main-directeur.component';
import {MainMedecinComponent} from '../medecin/main-medecin/main-medecin.component';
import {MainSecretaireComponent} from '../secretaire/main-secretaire/main-secretaire.component';
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

@NgModule({
    imports:[
        CommonModule,
        LayoutModuleRouting,
        //BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        //ReactiveFormsModule
        MDBBootstrapModule.forRoot(),
        //Material
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
    ],
    exports: [],
    declarations:[
        MainLayoutComponent,
        DefaultMainComponent,
        MainPatientComponent,
        MainAdminComponent,
        MainChefServiceComponent,
        MainDirecteurComponent,
        MainMedecinComponent,
        MainSecretaireComponent
    ]
})
export class LayoutModule {

}