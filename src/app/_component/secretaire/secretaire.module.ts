import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainSecretaireComponent} from './main-secretaire/main-secretaire.component';
const routes: Routes = [];
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],
    exports:[RouterModule],
    declarations:[MainSecretaireComponent]
})
export class SecretaireModule {

}