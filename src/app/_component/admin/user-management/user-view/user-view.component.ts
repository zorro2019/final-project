import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../_model/user';
import {UserService} from '../../../../_service/user/user.service';
import {AuthenticationService} from '../../../../_service/auth/authentication.service';
import {Role} from '../../../../_model/role';

declare var $: any;


@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
    roles: Role[] = [];
    user: User = new User();
    private authenticate: boolean;
    isAdmin: boolean = false;
    isDirecteur: boolean = false;
    isChef: boolean = false;
    isMedecin: boolean = false;
    isSecreteur: boolean = false;
    userRoles: string[] = [];

    constructor(private userService: UserService, private route: ActivatedRoute, public authUser: AuthenticationService, private router: Router) {
    }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.userService.getOne(id).subscribe(
            user => {
                this.user = user;
                this.roles = user.roles;
                console.log('role = ' + this.roles);
            }
        );
        if (!localStorage.getItem('currentUser'))
            this.router.navigate(['/login']);
        this.authenticate = this.authUser.authenticate;
        this.updateAuthenticate();
        this.getRole();
        this.hasRoles();
    }

    updateAuthenticate() {
        if (this.authUser.currentUserValue) {
            this.authUser.authenticate = true;
        }
        else {
            this.authUser.authenticate = false;
        }
    }

    public getRole() {
        this.userRoles = this.authUser.getRole();
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
