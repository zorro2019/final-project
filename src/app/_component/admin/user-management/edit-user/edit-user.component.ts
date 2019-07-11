import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../_service/user/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../_model/user';
import {RoleService} from '../../../../_service/role/role.service';
import {AuthenticationService} from '../../../../_service/auth/authentication.service';
import {ServiceService} from '../../../../_service/service/service.service';
import {Role} from '../../../../_model/role';
import {Service} from '../../../../_model/service';
import {first} from 'rxjs/operators';

declare var $: any;

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    user: User = new User();
    private authenticate: boolean;
    isAdmin: boolean = false;
    isDirecteur: boolean = false;
    isChef: boolean = false;
    isMedecin: boolean = false;
    isSecreteur: boolean = false;
    userRoles: string[] = [];
    hideForm: boolean = false;
    private submitted: boolean = false;
    private loading: boolean = false;
    private returnUrl: string;
    private error = '';
    private formAdd: FormGroup;
    private btn_alert: boolean = false;
    roles: Role[] = [];
    services: Service[] = [];
    userId: number = 0;

    editForm = this.builder.group({
        id:[null],
        nom: [, Validators.required],
        prenom: [, Validators.required],
        matricule: [, Validators.required],
        username: [, Validators.required],
        services: [, null],
        role: [, null]
    });

    constructor(private route: ActivatedRoute, private userService: UserService, private builder: FormBuilder, private  router: Router, private roleService: RoleService, private authUser: AuthenticationService,
                private serviceSrc: ServiceService) {
        this.userId = this.route.snapshot.params.id;
    }

    ngOnInit() {
        this.hasRoles();
        this.getRoles();
        this.getUser();
        this.getServices();
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
    getUser(){
        const id = this.route.snapshot.params['id'];
        this.userService.getOne(id).pipe().subscribe(
            user =>{
                this.user = user;
                this.editForm.patchValue({
                    id: user.id,
                    nom: user.nom,
                    prenom: user.prenom,
                    username: user.username,
                    matricule: user.matricule,
                    services: null,
                    role:null
                });
            }
        );
    }

    getRoles() {
        this.roleService.getRoles().pipe().subscribe(
            roles => {
                this.roles = roles;
            }
        );
    }
    getServices(){
        this.serviceSrc.getAll().pipe().subscribe(
            services =>{
                this.services = services;
            }
        );
    }
    save(){
        console.log('saved !!!');
        this.loading = true;
        if (this.editForm.invalid){
            this.loading = false;
            return ;
        }
        this.user.id = this.userId;
        this.user.nom = this.editForm.get('nom').value;
        this.user.prenom = this.editForm.get('prenom').value;
        this.user.matricule = this.editForm.get('matricule').value;
        this.user.username = this.editForm.get('username').value;
        this.user.roles = this.editForm.get('role').value;
        this.user.services = this.editForm.get('services').value;
        this.userService.update(this.user).pipe().subscribe(
            data=>{
                console.log("data = "+data);
                this.btn_alert = true;
                this.getUser();
                this.loading = false;
                this.hideForm = true;
                this.error = "";
            },
            error =>{
                this.error = error;
                this.loading = false;
            }
        );
        setTimeout(()=>{
            this.hideForm = false;
            return this.router.navigate(['/admin/users']);
        },5000);

    }
}
