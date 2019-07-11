import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LayoutModule} from './_component/layout/layout.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import
{
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule, MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {JwtInterceptor} from './_helper/jwtInterceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GlobalVarService} from './_service/global-var.service';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
    declarations: [
        AppComponent,
        //MainMedecinComponent,
        //SecretaireDefaultComponent,
        //MainSecretaireComponent,
        //MainDirecteurComponent,
        //DefaultDirecteurComponent,
        //MainChefServiceComponent,
        //MainPatientComponent,
        //AddPatientComponent,
        //PatientContentComponent,
        //TestContentComponent,
        //LoginComponent,
        //AdminContentComponent,

    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        MDBBootstrapModule.forRoot(),
        LayoutModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
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
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},GlobalVarService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
