import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {first} from 'rxjs/operators';
import {User} from '../../../../_model/user';
import {AuthenticationService} from '../../../../_service/auth/authentication.service';
import {Service} from '../../../../_model/service';
import {RoleService} from '../../../../_service/role/role.service';
import {Role} from '../../../../_model/role';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../_service/user/user.service';
import {FormBuilder} from '@angular/forms';
import {ServiceService} from '../../../../_service/service/service.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    isAdmin: boolean = false;
    isDirecteur: boolean = false;
    isChef: boolean = false;
    isMedecin: boolean = false;
    isSecreteur: boolean = false;
    users: User[] = [];
    user = new User();
    roles: Role[] = [];
    services: Service[] = [];
    //Test
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
                private serviceSrc: ServiceService) {console.log('Role component !!!'); }

    ngOnInit() {
        this.getRoles();
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

    getRoles() {
        this.roleService.getRoles().pipe(first()).subscribe(
            roles=>{
                this.tableData = roles;
                if (this.tableData.length % this.itemsPerPage === 0) {
                    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage);
                } else {
                    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage + 1);
                }

                for (let i = 1; i <= this.numberOfPaginators; i++) {
                    this.paginators.push(i);
                }
            }
        );
    }

}
