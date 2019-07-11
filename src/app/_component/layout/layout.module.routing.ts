import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DefaultMainComponent} from './default-main/default-main.component';
import {MainPatientComponent} from '../patient/main-patient/main-patient.component';
import {MainAdminComponent} from '../admin/main-admin/main-admin.component';
import {MainChefServiceComponent} from '../chef-service/main-chef-service/main-chef-service.component';
import {MainDirecteurComponent} from '../directeur/main-directeur/main-directeur.component';
import {MainMedecinComponent} from '../medecin/main-medecin/main-medecin.component';
import {MainSecretaireComponent} from '../secretaire/main-secretaire/main-secretaire.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DefaultMainComponent,
        children: [
            {
                path: 'login', loadChildren: '../login/login.module#LoginModule'
            },
            {
                path: 'home', loadChildren: '../default-content/default-content.module#DefaultContentModule'
            },
            {
                path: 'logout', loadChildren: '../logout/logout.module#LogoutModule'
            },
        ]
    },
    {
        path: '',
        component: MainPatientComponent,
        children: [
            {path: 'patient', loadChildren: '../patient/patient-content/patient-content.module#PatientContentModule'},
            {path: 'patient/add', loadChildren: '../patient/add-patient/add-patient.module#AddPatientModule'},
            {
                path: 'patient/add-rdv', loadChildren: '../patient/add-rdv/add-rdv.module#AddRdvModule'
            },
        ]
    },
    {
        path: '',
        component: MainAdminComponent,
        children: [
            {path: 'admin', loadChildren: '../admin/admin-content/admin-content.module#AdminContentModule'},
            {
                path: 'admin/users', loadChildren: '../admin/user-management/users/users.module#UsersModule'
            },
            {
                path: 'admin/user/:id', loadChildren: '../admin/user-management/user-view/user-view.module#UserViewModule'
            },
            {
                path: 'admin/edit-user/:id', loadChildren: '../admin/user-management/edit-user/edit-user.module#EditUserModule'
            },
            {
                path: 'admin/delete-user/:id', loadChildren: '../admin/user-management/delete-user/delete-user.module#DeleteUserModule'
            },
            {
                path: 'admin/roles', loadChildren: '../admin/role-management/roles/roles.module#RolesModule'
            },
            {
                path: 'admin/services', loadChildren: '../admin/service-management/services/services.module#ServicesModule'
            },
        ]
    },
    {
        path: '',
        component: MainChefServiceComponent,
        children: [
            {path: 'chef-service', loadChildren: '../chef-service/chef-default/chef-default.module#ChefDefaultModule'},
        ]
    },
    {
        path: '',
        component: MainDirecteurComponent,
        children: [
            {path: 'directeur', loadChildren: '../directeur/default-directeur/directeur.module#DirecteurModule'},
        ]
    },
    {
        path: '',
        component: MainMedecinComponent,
        children: [
            {path: 'medecin', loadChildren: '../medecin/medecin-default/medecin-default.module#MedecinDefaultModule'},
            {path: 'medecin/patients', loadChildren: '../medecin/patient-management/patients/medecin-patient.module#MedecinPatientModule'},
            {path: 'medecin/consultations', loadChildren: '../medecin/consultation-management/consultations/medecin-consultation.module#MedecinConsultationModule'},
            {path: 'medecin/emploi-du-temps', loadChildren: '../medecin/emploi-management/emplois/medecin-emploi.module#MedecinEmploiModule'},
        ]
    },
    {
        path: '',
        component: MainSecretaireComponent,
        children: [
            {path: 'secretaire', loadChildren: '../secretaire/secretaire-default/secretaire-default.module#SecretaireDefaultModule'},
            {path: 'secretaire/rdvs-management', loadChildren: '../secretaire/rdv-management/rdvs/rdvs.module#RdvsModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutModuleRouting {

}