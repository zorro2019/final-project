import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './_service/auth/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private auth: AuthenticationService){

  }

    ngOnInit(): void {
      console.log('auth : '+this.auth.isAuthentificated());
      //this.router.navigate(['/chef-service']);
    }
}
