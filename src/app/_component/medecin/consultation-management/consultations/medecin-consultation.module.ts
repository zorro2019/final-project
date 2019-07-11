import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ConsultationsComponent} from './consultations.component';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatMenuModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule,
    MatTableModule,
    MatTabsModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
    {path: '', component: ConsultationsComponent},
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        CommonModule,
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
    exports: [RouterModule],
    declarations:[
        ConsultationsComponent
    ]
})
export class MedecinConsultationModule {

}