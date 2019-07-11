import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-default',
  templateUrl: './chef-default.component.html',
  styleUrls: ['./chef-default.component.css']
})
export class ChefDefaultComponent implements OnInit {

  constructor() {
    console.log('Je suis affiché !!!');
  }

  ngOnInit() {
  }

}
