import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../_service/auth/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private formLogin : FormGroup;
    private submitted : boolean = false;
    private loading : boolean = false;
    private returnUrl : string;
    private error = "";
    private userRoles: string[] = [];
    isAdmin: boolean = false;
    isDirecteur: boolean = false;
    isChef: boolean = false;
    isMedecin: boolean = false;
    isSecreteur: boolean = false;
    constructor(private router: Router, private route: ActivatedRoute,
                private authService: AuthenticationService, private formBuilder: FormBuilder) {
    }

    get f(){ return this.formLogin.controls}
    onSubmit() {
        this.submitted = true;
        if (this.formLogin.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
            data => {
                for (let i = 0; i < this.authService.roles.length; i++) {
                    if (this.authService.roles[i] === 'ROLE_ADMIN') {
                        this.userRoles = this.authService.roles;
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
                this.loading = false;
            }
        );
    }

    ngOnInit(): void {
        this.formLogin = this.formBuilder.group({
            username : ['', Validators.required],
            password : ['', Validators.required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

}
