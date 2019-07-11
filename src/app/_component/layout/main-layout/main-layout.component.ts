import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      this.isAuthenticate();
      console.log('je affiché !');
  }
    isAuthenticate() {
        if (localStorage.getItem('currentUser')) {
            //this.router.navigate(['admin']);
        }
        else
            return false;
    }

}
