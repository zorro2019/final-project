import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Patient} from '../../../../_model/patient';
import {PatientService} from '../../../../_service/patient/patient.service';
import {AuthenticationService} from '../../../../_service/auth/authentication.service';
import {JwtHelper} from 'angular2-jwt';
import {UserService} from '../../../../_service/user/user.service';
import {User} from '../../../../_model/user';
import {RdvService} from '../../../../_service/rdv/rdv.service';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
    private jwtHelp = new  JwtHelper();
    private patients: Patient[] = [];
    private static user: User = new User();
    //Pagination
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

    constructor(private patientSrc: PatientService, private authSerc: AuthenticationService, private userSrc: UserService, private rdvSrc: RdvService) {
         this.getCurrentUser();
    }

    ngOnInit() {
        console.log("je suis appelé");
    }
    getCurrentUser(){
        this.userSrc.getByUsername(this.jwtHelp.decodeToken(this.authSerc.currentUserValue.token).sub).pipe().subscribe(
            user =>{
                PatientsComponent.user = user;
                console.log('id === '+user.id);
                this.rdvSrc.utilisateurPatient(user.id).pipe().subscribe(
                    (patients: any[]) =>{
                        this.tableData = patients;
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
        );
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
}
