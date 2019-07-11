import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-main-patient',
  templateUrl: './main-patient.component.html',
  styleUrls: ['./main-patient.component.css']
})
export class MainPatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
    onClicked() {
        $('.wrapper').toggleClass('active');
    }

}
