import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../_service/auth/authentication.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-main-chef-service',
    templateUrl: './main-chef-service.component.html',
    styleUrls: ['./main-chef-service.component.css']
})
export class MainChefServiceComponent implements OnInit {

    isAdmin: boolean = false;
    isDirecteur: boolean = false;
    isChef: boolean = false;
    isMedecin: boolean = false;
    isSecreteur: boolean = false;
    private userRoles: string[] = [];
    constructor(private authUser: AuthenticationService, private router: Router) {
    }

    ngOnInit() {
        if (!this.authUser.isAuthentificated()) {
            this.router.navigate(['/login']);
        }
        this.userRoles = this.authUser.getRole();
        this.hasRoles();
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
