import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../_service/auth/authentication.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  //styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authUser : AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authUser.logout();
    this.router.navigate(['/home']);
  }

}
