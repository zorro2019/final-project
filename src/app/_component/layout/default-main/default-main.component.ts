import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../_service/auth/authentication.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
declare var $:any;
@Component({
    selector: 'app-default-main',
    templateUrl: './default-main.component.html',
    styleUrls: ['./default-main.component.css']
})
export class DefaultMainComponent implements OnInit {

    private userRoles: string[] = [];
    private formLogin : FormGroup;
    private submitted : boolean = false;
    private loading : boolean = false;
    private returnUrl : string;
    private roles : string[] = [];
    isAdmin: boolean = false;
    isDirecteur: boolean = false;
    isChef: boolean = false;
    isMedecin: boolean = false;
    isSecreteur: boolean = false;
    private error = "";
    constructor(private router: Router, public authSer: AuthenticationService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        $('.test').select2({});
        if (this.authSer.isAuthentificated() && localStorage.getItem('currentUser')){
            this.roles = this.authSer.getRole();
        }

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });

        this.formLogin = this.formBuilder.group({
            username : ['', Validators.required],
            password : ['', Validators.required]
        });
        //this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/';
    }

    get f(){ return this.formLogin.controls}
    onSubmit() {
        this.submitted = true;
        if (this.formLogin.invalid) {
            return;
        }
        this.loading = true;
        this.authSer.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
            data => {
                for (let i = 0; i < this.authSer.roles.length; i++) {
                    if (this.authSer.roles[i] === 'ROLE_ADMIN') {
                        this.userRoles = this.authSer.roles;
                        for (let i = 0; i < this.userRoles.length; i++) {
                            if (this.userRoles[i] === 'ROLE_ADMIN') {
                                this.router.navigate(['/admin']);
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
                }
            },
            error => {
                this.error = error;
                console.log("erreur = "+error.toString());
                this.loading = false;
            }
        );
    }

    redirection(){
        for (let r of this.roles){
            if (r === "ROLE_ADMIN"){
                this.router.navigate(['/admin']);
            }
            if (r === "ROLE_DIRECTEUR"){
                this.router.navigate(['/admin']);
            }
            if (r === "ROLE_CHEF-SERVICE"){
                this.router.navigate(['/admin']);
            }
            if (r === "ROLE_SECRETAIRE"){
                this.router.navigate(['/admin']);
            }
            if (r === "ROLE_MEDECIN"){
                this.router.navigate(['/admin']);
            }
        }
    }

}
