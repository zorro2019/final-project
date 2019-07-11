import {
    Component,
    OnInit,
    ViewEncapsulation,
    AfterViewInit,
    ChangeDetectorRef,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../_model/user';
import {Service} from '../../../../_model/service';
import {UserService} from '../../../../_service/user/user.service';
import {RoleService} from '../../../../_service/role/role.service';
import {AuthenticationService} from '../../../../_service/auth/authentication.service';
import {ServiceService} from '../../../../_service/service/service.service';
import {Role} from '../../../../_model/role';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';

declare var $: any;

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit,AfterViewInit {
    hideForm = false;
    isAdmin = false;
    isDirecteur = false;
    isChef = false;
    isMedecin = false;
    isSecreteur = false;
    users: User[] = [];
    user = new User();
    roles: Role[] = [];
    userRoles: string[] = [];
    services: Service[] = [];
    private submitted = false;
    private loading = false;
    private error = '';
    private formAdd: FormGroup;
    private btn_alert = false;
    // Pagination
    @ViewChildren('pages') pages: QueryList<any>;
    itemsPerPage = 5;
    numberOfVisiblePaginators = 10;
    numberOfPaginators: number;
    paginators: Array<any> = [];
    activePage = 1;
    firstVisibleIndex = 1;
    lastVisibleIndex: number = this.itemsPerPage;
    firstVisiblePaginator = 0;
    lastVisiblePaginator = this.numberOfVisiblePaginators;

    tableData: any[] = [];

    constructor(private userService: UserService, private formBuilder: FormBuilder, private route: ActivatedRoute,
                private  router: Router, private roleService: RoleService, private authUser: AuthenticationService,
                private serviceSrc: ServiceService) {}


    ngOnInit() {
        this.getUsers();
        // Test

        // Fin Test
       // $('.select-role').select2({});
       //  $('select').each(function () {
       //      $(this).select2({
       //          theme: 'bootstrap4',
       //          width: 'style',
       //          placeholder: $(this).attr('placeholder'),
       //          allowClear: Boolean($(this).data('allow-clear')),
       //      });
       //  });

        if (this.authUser.isAuthentificated()){
            this.userRoles = this.authUser.getRole();
        }
        this.initiaizeForm();
        this.roleService.getRoles().pipe(first()).subscribe(roles =>{this.roles = roles;});
        this.serviceSrc.getAll().pipe().subscribe(services => {this.services = services; });
        this.hasRoles();
        // this.mdbTable.setDataSource(this.elements);
        // this.elements = this.mdbTable.getDataSource();
        // this.previous = this.mdbTable.getDataSource();
        // console.log('elements = '+this.elements);
    }

    public get f(){
        return this.formAdd.controls;
    }
    onSubmit() {
        this.btn_alert = false;
        this.submitted = true;
        console.log('role = '+this.f.role.value);
        if (this.formAdd.invalid){
            return;
        }
        this.loading = true;
        this.user.nom = this.f.nom.value;
        this.user.username = this.f.username.value;
        this.user.prenom = this.f.prenom.value;
        this.user.matricule = this.f.matricule.value;
        this.user.roles = this.f.role.value;
        this.user.photo = this.f.profil.value;
        this.user.changed = false;
        this.user.enabled = true;
        this.user.password = this.f.password.value;
        this.user.services = this.f.services.value;
        console.log('role = ' + this.f.role.value);
        if (this.user.password === this.f.password2.value){
            this.userService.addUser(this.user).pipe(first()).subscribe(
                data => {
                    console.log('data = ' + data);
                    this.btn_alert = true;
                    this.getUsers();
                    this.loading = false;
                    this.hideForm = true;
                    this.error = '';
                    setTimeout(() => {
                        $('.alert-success').remove();
                        this.initiaizeForm();
                        this.hideForm = false;
                    },3000);
                },
                error =>{
                    this.error = error;
                    this.loading = false;
                }
            );
        } else {
            this.error = 'mot de passe non identique';
            this.loading = false;
            return;
        }
        return this.router.navigate(['/admin/users']);
    }
    getUsers() {
        this.userService.getUser().pipe(first()).subscribe(
            users => {
                this.users = users;
                this.tableData = users;
                if (this.tableData.length % this.itemsPerPage === 0) {
                    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage);
                } else {
                    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage + 1);
                }

                for (let i = 1; i <= this.numberOfPaginators; i++) {
                    this.paginators.push(i);
                }
            });
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
    initiaizeForm(){
        this.formAdd = this.formBuilder.group({
            nom : ['', Validators.required],
            prenom : ['', Validators.required],
            matricule : ['', Validators.required],
            username : ['', Validators.required],
            password : ['', Validators.required],
            password2: ['', Validators.required],
            profil: [''],
            services:['', Validators.required],
            role: ['', Validators.required]
        });
    }

    nextPage() {
        if (this.pages.last.nativeElement.classList.contains('active')) {
            if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator += this.numberOfVisiblePaginators;
            } else {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator = this.numberOfPaginators;
            }
        }
        this.activePage += 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }

    previousPage() {
        if (this.pages.first.nativeElement.classList.contains('active')) {
            if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators)  {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
            } else {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
            }
        }

        this.activePage -= 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }

    firstPage() {
        this.activePage = 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }

    lastPage() {
        this.activePage = this.numberOfPaginators;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;

        if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
            this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
            this.lastVisiblePaginator = this.numberOfPaginators;
        } else {
            this.lastVisiblePaginator = this.numberOfPaginators;
            this.firstVisiblePaginator = this.lastVisiblePaginator - (this.numberOfPaginators % this.numberOfVisiblePaginators);
        }
    }

    changePage(event: any) {
        if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
            this.activePage = +event.target.text;
            this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
            this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        }
    }

    ngAfterViewInit(): void {
    }
}
