import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-patient-content',
  templateUrl: './patient-content.component.html',
  styleUrls: ['./patient-content.component.css']
})
export class PatientContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    onClicked() {
        $('.wrapper').toggleClass('active');
    }
}
