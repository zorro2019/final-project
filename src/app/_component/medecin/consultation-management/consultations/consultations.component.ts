import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {UserService} from '../../../../_service/user/user.service';
import {User} from '../../../../_model/user';
import {AuthenticationService} from '../../../../_service/auth/authentication.service';
import {JwtHelper} from 'angular2-jwt';
import {Consultation} from '../../../../_model/consultation';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {
    consultations: Consultation[] = [];
    user: User;
    jwtHelp = new JwtHelper();
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
  constructor(private userSrc: UserService, private authSrc: AuthenticationService) { }

  ngOnInit() {
    this.getConsultation();
  }

  getConsultation(){

      this.userSrc.getByUsername(this.jwtHelp.decodeToken(this.authSrc.currentUserValue.token).sub).pipe().subscribe(
          user =>{
              console.log("consultations = "+user.id);
              this.tableData = user.consultation;
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
