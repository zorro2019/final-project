import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../_service/auth/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../../_model/user';
import {JwtHelper} from 'angular2-jwt';
declare var $:any;
@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {
    isAdmin: boolean = false;
    isDirecteur: boolean = false;
    isChef: boolean = false;
    isMedecin: boolean = false;
    isSecreteur: boolean = false;
    userRoles: string[] = [];
    currentUser: User = new User();
    jwtHelper = new JwtHelper();
    constructor(private authUser: AuthenticationService, private router: Router) {
    }

    ngOnInit() {
        if (!this.authUser.isAuthentificated()){
            this.router.navigate(['/login']);
        }
        this.userRoles = this.authUser.getRole();
        this.hasRoles();
        // Utilisateur courant
        this.currentUser = this.jwtHelper.decodeToken(localStorage.getItem('currentUser'));
        console.log('user = '+this.currentUser);
    }

    hasRoles() {
        for (let i = 0; i < this.userRoles.length; i++) {
            if (this.userRoles[i] === 'ROLE_ADMIN') {
                this.isAdmin = true;
            }
            if (this.userRoles[i] === 'ROLE_MEDECIN') {
                this.isMedecin = true;
            }
            if (this.userRoles[i] === 'ROLE_DIRECTEUR') {
                this.isDirecteur = true;
            }
            if (this.userRoles[i] === 'ROLE_SECRETAIRE') {
                this.isSecreteur = true;
            }
            if (this.userRoles[i] === 'ROLE_CHEF-SERVICE') {
                this.isChef = true;
            }
        }
    }
    onClicked() {
        $('.wrapper').toggleClass('active');
    }


}
